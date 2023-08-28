import LazyImage from "@/components/LazyImage"
import Wrap from "@/components/Wrap"
import PageHeader from "@/components/pc/PageHeader"
import { useEffect, useState } from "react"
import { message } from 'antd';
import SubTitle, { SubTitle2, SubTitle3, Text1 } from "./components/SubTitle"
import BasicItem, { BasicNftItem } from "./components/BasicItem"
import LabelData from "./components/LabelData"
import H5Footer from "@/components/h5/H5Footer"
import { useRouter } from "next/router"
import { useSearchStore } from '@/state'
import { toChecksumAddress } from "@/utils";


const SearchPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter()
  const fromPage = useSearchStore(state => state.fromPage)
  const searchByAddress = useSearchStore(state => state.searchByAddress)
  const getActivityData = useSearchStore(state => state.getActivityData)
  const searchItemList = useSearchStore(state => state.searchItemList)
  const activityData = useSearchStore(state => state.activityData)
  const labelData2 = useSearchStore(state => state.labelData)
  const setRecentlyData = useSearchStore(state => state.setRecentlyData)
  const [inputFocus, setInputFocus] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [searchIng, setSearchIng] = useState(false)

  const handleInputFocus = (event: any) => {
    event.target.select()
    setInputFocus(true)
  }
  const handleInputBlur = () => {
    setInputFocus(false)
  }
  const handleSearch2 = async () => {
    router.push({ pathname: `/search/${inputValue}` })
  }
  const handleSearch = async (address?: string) => {
    if (searchIng) {
      return
    }
    const searchAddress = address || inputValue
    let newAddress = toChecksumAddress(searchAddress)
    if (newAddress) {
      newAddress = newAddress.toLowerCase()
      setSearchIng(true)
      await searchByAddress(newAddress)
      setRecentlyData(newAddress)
      setSearchIng(false)
      getActivityData(newAddress)
      return
    }
    messageApi.error('Invalid address')
    
  }
  const handleInputKeyUp = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  useEffect(() => {
    if (router.query.address && router.query.address[0] && !fromPage) {
      handleSearch(router.query.address[0])
    }
  }, [router, fromPage])

  return (
    <div className=" font-dnormal">
      {contextHolder}
      <PageHeader />
      <Wrap>
        <div className="flex items-center pt-[77px]">
          <LazyImage src="/images/home/logo2.png" className="w-[48px] h-[48px] mr-[27px]" />
          <div>
            <div className={`relative search-wrap ${inputFocus ? 'focus' : ''} `}>
              <input className="search-input search outline-none pl-6 pr-[74px] font-dnormal w-[670px]" placeholder="Search address identity"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyUp={handleInputKeyUp}
                onChange={e => {
                  setInputValue(e.target.value)
                }}
                disabled={searchIng}
              />
              <div className=" absolute top-[20px] right-[25px]"
                onClick={() => handleSearch2()}
              >
                <LazyImage src="/images/home/search.png" className="w-[24px] h-[24px] cursor-pointer" />
              </div>
              
            </div>
            
          </div>
        </div>
        <div className=" w-full border-t border-[rgba(22,31,49,0.05);] mt-[30px] mb-[22px]"></div>
        {
          searchIng && 
          <div className="mt-[72px] flex justify-center min-h-[600px]">
            <LazyImage src="/images/home/loading.gif" className="w-[400px] h-[300px]" />
          </div>
        }
        {
          !searchIng && 
          <div>
            <div className="flex items-center">
              <LazyImage src="/images/search/ticket.png" className="w-[20px] h-[20px]" />
              <div className="text-[rgba(22,31,49,0.60)] text-[20px] ml-[5px]">Search identity ticket</div>
            </div>
            <div className="flex justify-center">
              <div className="gradient1 font-dbold text-[180px] mt-[110px] leading-normal relative">
                { Number(activityData.levelScore).toFixed(1) }
                <LazyImage src="/images/search/collect.png" className="w-[20px] h-[20px] absolute bottom-[64px] -right-[30px] cursor-pointer" />
              </div>
            </div>
            <div className="mt-[170px] mb-[90px]">
              <SubTitle text="Ticket" />
            </div>
            <div>
              <SubTitle2 text="Info" icon="/images/search/info.png" />
            </div>
            <div className=" mt-10">
              <div className="flex items-center">
                <div className="pl-[73px] w-[378px]"><SubTitle3 text="Balance" /></div>
                <div className="w-[301px]"><SubTitle3 text="Tx count" /></div>
                <div className="w-[291px]"><SubTitle3 text="Birth on" /></div>
                <div className=""><SubTitle3 text="Active since" /></div>
              </div>
              {
                searchItemList.map(item => {
                  return (
                    <div key={item.chain_id} className="flex items-center mt-[15px]">  
                      <div className="flex items-center w-[378px]">
                        <div className="w-[73px] pl-[30px] shrink-0 ">
                          <LazyImage src={item.chainLogo} className="w-[18px] h-[18px]" />
                        </div>
                        <div className="w-full flex items-center">
                          <div>
                            <Text1 text={item.balance} />
                          </div>
                          <div className=" ml-[8px]">
                            <Text1 text={item.coinName} className="text-[14px]" />
                          </div>
                        </div>
                      </div>
                      <div className="w-[301px]">
                        <Text1 text={item.txcount} />
                      </div>
                      <div className="w-[291px]">
                        <Text1>{item.tx_firstLabel}</Text1>
                      </div>
                      <div className="">
                        <Text1>{item.tx_lastLabel}</Text1>
                      </div>
                    </div>
                  )
                })
              }
            
              {/* <div className="flex items-center mt-[15px]">
                <div className="flex items-center w-[378px]">
                  <div className="w-[73px] pl-[30px] shrink-0 ">
                    <LazyImage src="/images/search/pol.png" className="w-[18px] h-[18px]" />
                  </div>
                  <div className="w-full flex items-center">
                    <div>
                      <Text1 text="355.5000" />
                    </div>
                    <div className=" ml-[8px]">
                      <Text1 text="MATIC" className="text-[14px]" />
                    </div>
                  </div>
                </div>
                <div className="w-[301px]">
                  <Text1 text="117" />
                </div>
                <div className="w-[291px]">
                  <Text1>5/18/2021, 6:21 PM</Text1>
                </div>
                <div className="">
                  <Text1>5/18/2021, 6:21 PM</Text1>
                </div>
              </div> */}
            </div>

            <div className=" mt-[90px]">
              <div>
                <SubTitle2 text="Transaction" icon="/images/search/tx.png" />
              </div>
              <div className="flex items-center mt-10">
                <div className="pl-[73px] w-[378px]"><SubTitle3 text="Max" /></div>
                <div className="w-[301px]"><SubTitle3 text="Min" /></div>
                <div className="w-[291px]"><SubTitle3 text="P80" /></div>
                <div className=""><SubTitle3 text="Median (P50)" /></div>
              </div>
              {
                searchItemList.map(item => {
                  return (
                    <div key={item.chain_id} className="flex items-center mt-[15px]">
                      <div className="flex items-center w-[378px]">
                        <div className="w-[73px] pl-[30px] shrink-0 ">
                          <LazyImage src={item.chainLogo} className="w-[18px] h-[18px]" />
                        </div>
                        <div className="w-full flex items-center">
                          <div>
                            <Text1 text={String(item.value_max)} />
                          </div>
                          <div className=" ml-[8px]">
                            <Text1 text={item.coinName} className="text-[14px]" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center w-[301px]">
                        <Text1 text={String(item.value_min)} />
                        <Text1 text={item.coinName} className="text-[14px] ml-2" />
                      </div>
                      <div className="flex items-center w-[291px]">
                        <Text1 text={String(item.value_p80)} />
                        <Text1 text={item.coinName} className="text-[14px] ml-2" />
                      </div>
                      <div className="flex items-center">
                        <Text1 text={String(item.value_p50)} />
                        <Text1 text={item.coinName} className="text-[14px] ml-2" />
                      </div>
                    </div>
                  )
                })
              }
              
              {/* <div className="flex items-center mt-[15px]">
                <div className="flex items-center w-[378px]">
                  <div className="w-[73px] pl-[30px] shrink-0 ">
                    <LazyImage src="/images/search/pol.png" className="w-[18px] h-[18px]" />
                  </div>
                  <div className="w-full flex items-center">
                    <div>
                      <Text1 text="355.5000" />
                    </div>
                    <div className=" ml-[8px]">
                      <Text1 text="MATIC" className="text-[14px]" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-[301px]">
                  <Text1 text="0" />
                  <Text1 text="MATIC" className="text-[14px] ml-2" />
                </div>
                <div className="flex items-center w-[291px]">
                  <Text1 text="0" />
                  <Text1 text="MATIC" className="text-[14px] ml-2" />
                </div>
                <div className="flex items-center">
                  <Text1 text="0" />
                  <Text1 text="MATIC" className="text-[14px] ml-2" />
                </div>
              </div> */}
            </div>
            <div className=" mt-[90px]">
              <div>
                <SubTitle2 text="Asset" icon="/images/search/asset.png" />
              </div>
              <div className="mt-10 flex items-center">
                <div className="pl-[30px] w-[430px] flex flex-wrap">
                  {
                    activityData.nftAsset.slice(0, 5).map((nft: any) => {
                      return (
                        <div key={nft.image} className="py-[23px] pr-[73px]">
                          <div className=" relative">
                            <LazyImage src={nft.image} className="w-[60px] h-[60px] rounded-[9px]" />
                            <LazyImage src="/images/search/eth.png" className="w-[18px] h-[18px] absolute bottom-0 right-0 z-10" />
                          </div>
                        </div>
                      )
                    })
                  }
                  
                  {/* <div className="py-[23px] pr-[73px]">
                    <div className=" relative">
                      <LazyImage src="/images/search/demo.png" className="w-[60px] h-[60px] rounded-[9px]" />
                      <LazyImage src="/images/search/eth.png" className="w-[18px] h-[18px] absolute bottom-0 right-0 z-10" />
                    </div>
                  </div>
                  <div className="py-[23px] pr-[73px]">
                    <div className=" relative">
                      <LazyImage src="/images/search/demo.png" className="w-[60px] h-[60px] rounded-[9px]" />
                      <LazyImage src="/images/search/eth.png" className="w-[18px] h-[18px] absolute bottom-0 right-0 z-10" />
                    </div>
                  </div>
                  <div className="py-[23px] pr-[73px]">
                    <div className=" relative">
                      <LazyImage src="/images/search/demo.png" className="w-[60px] h-[60px] rounded-[9px]" />
                      <LazyImage src="/images/search/eth.png" className="w-[18px] h-[18px] absolute bottom-0 right-0 z-10" />
                    </div>
                  </div>
                  <div className="py-[23px] pr-[73px]">
                    <div className=" relative">
                      <LazyImage src="/images/search/demo.png" className="w-[60px] h-[60px] rounded-[9px]" />
                      <LazyImage src="/images/search/eth.png" className="w-[18px] h-[18px] absolute bottom-0 right-0 z-10" />
                    </div>
                  </div> */}
                  {
                    activityData.nftAsset.length > 5 && 
                      <div className="py-[23px] pr-[73px]">
                        <div className="w-[60px] h-[60px] flex justify-center items-center text-[#161F31] font-dmedium text-[20px]">
                          +{activityData.nftAsset.length - 5}
                        </div>
                      </div>
                  }
                  
                </div>
                <div className=" ml-[88px]">
                  <LazyImage src="/images/search/line1.png" className="w-[1px] h-[200px]" />
                </div>
                <div className="ml-[128px]">
                  <div className="">
                    <div className="flex">
                      <div className="pl-[50px] w-[304px]">
                        <SubTitle3 text="Mint" />
                      </div>
                      <div className="pl-[20px]">
                        <SubTitle3 text="Send" />
                      </div>
                    </div>
                    {
                      searchItemList.map(item => {
                        return (
                          <div key={item.chain_id} className="flex items-center mt-[18px]">
                            <div className="pl-[0px] w-[304px] flex items-center">
                              <LazyImage src={item.chainLogo} className="w-[18px] h-[18px] mr-[30px]" />
                              <Text1>{item.nft_mint_txcount}</Text1>
                            </div>
                            <div className="pl-[20px]">
                              <Text1>{item.nft_send_txcount}</Text1>
                            </div>
                          </div>
                        )
                      })
                    }
                    
                    {/* <div className="flex items-center mt-[18px]">
                      <div className="pl-[0px] w-[304px] flex items-center">
                        <LazyImage src="/images/search/pol.png" className="w-[18px] h-[18px] mr-[30px]" />
                        <Text1>0</Text1>
                      </div>
                      <div className="pl-[20px]">
                        <Text1>224</Text1>
                      </div>
                    </div> */}
                  </div>
                  <div className="mt-10">
                    <div className="flex">
                      <div className="pl-[50px] w-[304px]">
                        <SubTitle3 text="Burn" />
                      </div>
                      <div className="pl-[20px]">
                        <SubTitle3 text="Receive" />
                      </div>
                    </div>
                    {
                      searchItemList.map(item => {
                        return (
                          <div key={item.chain_id} className="flex items-center mt-[18px]">
                            <div className="pl-[0px] w-[304px] flex items-center">
                              <LazyImage src={item.chainLogo} className="w-[18px] h-[18px] mr-[30px]" />
                              <Text1>{item.nft_burn_txcount}</Text1>
                            </div>
                            <div className="pl-[20px]">
                              <Text1>{item.nft_receive_txcount}</Text1>
                            </div>
                          </div>
                        )
                      })
                    }
                    
                    {/* <div className="flex items-center mt-[18px]">
                      <div className="pl-[0px] w-[304px] flex items-center">
                        <LazyImage src="/images/search/pol.png" className="w-[18px] h-[18px] mr-[30px]" />
                        <Text1>0</Text1>
                      </div>
                      <div className="pl-[20px]">
                        <Text1>112</Text1>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[150px] mb-[90px]">
              <SubTitle text="Activity" />
            </div>
            <div className="">
              <SubTitle2 text="Basic" icon="/images/search/info.png" />
            </div>
            <div className="flex mt-10 flex-wrap">
              <div className="mr-[246px]">
                <BasicItem title="PoAP" icon="/images/search/poap.png" data={activityData.poap} />
              </div>
              <div className="mr-[0px]">
                <BasicItem title="Galxe OAT" icon="/images/search/oat.png" data={activityData.galxeOat} />
              </div>
              <div className="mr-[246px] mt-[110px]">
                <BasicItem title="NFT interactors" icon="/images/search/nft.png" data={activityData.nftInteractors} />
              </div>
              <div className="mt-[110px]">
                <BasicItem title="TaskON OAT" icon="/images/search/oat.png" data={activityData.taskOnOat} />
              </div>
            </div>
            <div className="mt-[84px]">
              <SubTitle2 text="Advance" icon="/images/search/info.png" />
              <div className="mt-[50px]">
                <BasicNftItem title="NFT interacted addresses" icon="/images/search/nft.png" data={activityData.nftInteractedAddress} />
              </div>
              
            </div>
            {
              labelData2.length > 0 && <LabelData data={labelData2} />
            }
            
          </div>
        }
        
      </Wrap>
      <H5Footer white={true} />
    </div>
  )
}

export default SearchPage