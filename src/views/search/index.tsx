import LazyImage, { LazyImage3 } from "@/components/LazyImage"
import Wrap from "@/components/Wrap"
import PageHeader from "@/components/pc/PageHeader"
import { SetStateAction, useEffect, useRef, useState } from "react"
import { message } from 'antd';
import SubTitle, { SubTitle2, SubTitle3, Text1 } from "./components/SubTitle"
import BasicItem, { BasicNftItem } from "./components/BasicItem"
import LabelData from "./components/LabelData"
import H5Footer from "@/components/h5/H5Footer"
import { useRouter } from "next/router"
import { useSearchStore, useUserStore } from '@/state'
import { toChecksumAddress } from "@/utils";
import LevelScore from "./components/LevelScore";
import Recommend from "../home/components/Recommend";

let currentInputValue: SetStateAction<string>

const SearchPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter()
  const fromPage = useSearchStore(state => state.fromPage)
  const searchByAddress = useSearchStore(state => state.searchByAddress)
  const getActivityData = useSearchStore(state => state.getActivityData)
  const searchItemList = useSearchStore(state => state.searchItemList)
  const activityData = useSearchStore(state => state.activityData)
  const identityInfo = useSearchStore(state => state.identityInfo)
  const labelData2 = useSearchStore(state => state.labelData)
  const setRecentlyData = useSearchStore(state => state.setRecentlyData)
  const isGlobalSearching = useSearchStore(state => state.isGlobalSearching)
  const setSearchingGlobal = useSearchStore(state => state.setSearchingGlobal)
  const setFromPage = useSearchStore(state => state.setFromPage)
  const getRecommendUsers = useSearchStore(state => state.getRecommendUsers)
  const [inputFocus, setInputFocus] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [searchIng, setSearchIng] = useState(false)
  const [inputClick, setInputClick] = useState(false)

  const recommendRef = useRef<any>(null)

  const handleInputClick = (e: any) => {
    e.stopPropagation()
    setInputClick(true)
    setTimeout(() => {
      if (recommendRef.current) {
        recommendRef.current.handleFilter('')
      }
    }, 500)
    
  }
  const handleInputFocus = (event: any) => {
    event.target.select()
    setInputFocus(true)
  }
  const handleInputBlur = () => {
    setInputFocus(false)
  }
  const handleSearch2 = async (address?: string) => {
    const searchAddress = address || inputValue
    let newAddress = toChecksumAddress(searchAddress)
    if (!newAddress) {
      messageApi.error('Invalid address')
      return
    }
    setFromPage('')
    router.push({ pathname: `/search/${address || inputValue}` })
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
      // handleSearch()
      handleSearch2()
    } else {
      if ((event.key.length === 1 && /^[a-zA-Z0-9]*$/.test(event.key)) || event.key === 'Backspace') {
        if (recommendRef.current) {
          recommendRef.current.handleFilter(inputValue)
        }
        currentInputValue = inputValue
      }
      
    }
  }
  const handleInputPaste = (event: any) => {
    if (recommendRef.current) {
      recommendRef.current.handleFilter(event.clipboardData.getData('Text'))
    }
  }

  const handleRecommendClick = async (type: string, address: string) => {
    // setInputValue(address)
    handleSearch2(address)
  }

  const hanleArrowChange = async (index: number) => {
    // @ts-ignore
    const filterList = window.globalFilterList || []
    const filterItem = filterList[index]
    if (filterItem && filterItem.address) {
      setInputValue(filterItem.address)
    } else {
      setInputValue(currentInputValue)
    }
  }

  useEffect(() => {
    if (fromPage === 'HOME') {
      setSearchingGlobal(false)
    }
  }, [fromPage, setSearchingGlobal])

  useEffect(() => {
    if (router.query.address && router.query.address[0] && !fromPage) {
      handleSearch(router.query.address[0])
    }
    if (router.query.address && router.query.address[0]) {
      setInputValue(router.query.address[0])
    }
  }, [router, fromPage])

  useEffect(() => {
    getRecommendUsers()
    const handleDocumentClick = () => {
      setInputClick(false)
    }
    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [getRecommendUsers])

  return (
    <div className=" font-dnormal">
      {contextHolder}
      <PageHeader />
      <Wrap>
        <div className={`flex relative z-50 pt-[77px] transition-all duration-[300ms] scale-100 opacity-0 ${!isGlobalSearching ? ' scale-[1] opacity-100' : ''}`}>
          <LazyImage src="/images/home/logo2.png" className="w-[42px] h-[42px] mr-[12px] mt-2" />
          <div className="relative">
            <div className={`relative search-wrap ${inputFocus ? 'focus' : ''} `}>
              <input className="search-input search-input2 search outline-none pl-6 pr-[74px] font-dnormal" placeholder="Search address identity"
                value={inputValue}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyUp={handleInputKeyUp}
                onClick={handleInputClick}
                onPaste={handleInputPaste}
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
            {
              inputClick && !searchIng && 
              <div className=" absolute top-[80px] left-0 w-full z-50">
                <Recommend
                  from="search"
                  ref={recommendRef}
                  inputValue={inputValue}
                  onClick={handleRecommendClick}
                  onArrowChange={hanleArrowChange}
                />
              </div>
            }
          </div>
        </div>
        <div className=" w-full border-t border-[rgba(22,31,49,0.05);] mt-[30px] mb-[22px]"></div>
        {
          searchIng && 
          <div className="mt-[72px] flex justify-center min-h-[600px]">
            <LazyImage src="/images/home/loading.gif" className="w-[400px] h-[300px]" />
          </div>
        }
        <div className={`relative transition-all duration-[300ms] ${!isGlobalSearching ? 'opacity-100 top-[0px]' : ' opacity-0 top-[100px]'}`}>

        
        {
          !searchIng && 
          <div>
            <div className="flex items-center">
              <LazyImage src="/images/search/ticket.png" className="w-[20px] h-[20px]" />
              <div className="text-[rgba(22,31,49,0.60)] text-[20px] ml-[5px]">Search identity ticket</div>
            </div>
            <LevelScore levelScore={activityData.levelScore} identityInfo={identityInfo} />
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
            </div>
            <div className=" mt-[90px]">
              <div>
                <SubTitle2 text="Asset" icon="/images/search/asset.png" />
              </div>
              <div className="mt-10 flex items-center">
                <div className="pl-[30px] w-[430px] flex flex-wrap">
                  {
                    activityData.nftAsset.length === 0 &&
                      <div className="w-full flex justify-center">
                        <div>
                         <LazyImage src="/images/search/nodata.png" className="w-[201px] h-[140px]" />
                         <div className="text-[rgba(22,31,49,0.60)] font-dnormal text-[16px] mt-4 text-center">No result</div>
                        </div>
                        
                      </div>

                  }
                  {
                    activityData.nftAsset.slice(0, 5).map((nft: any) => {
                      return (
                        <div key={nft.image} className="py-[23px] pr-[73px]">
                          <div className=" relative">
                            <LazyImage3 src={nft.image} className="w-[60px] h-[60px] rounded-[9px]" />
                            <LazyImage src="/images/search/eth.png" className="w-[18px] h-[18px] absolute bottom-0 right-0 z-10" />
                          </div>
                        </div>
                      )
                    })
                  }
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
              <div className="mr-[94px]">
                <BasicItem title="PoAP" icon="/images/search/poap2.png" data={activityData.poap} activityData={activityData} />
              </div>
              <div className="mr-[0px]">
                <BasicItem title="Galxe OAT" icon="/images/search/poap2.png" data={activityData.galxeOat} activityData={activityData}  />
              </div>
              <div className="mr-[94px] mt-[110px]">
                <BasicItem title="NFT interactors" icon="/images/search/poap2.png" data={activityData.nftInteractors} activityData={activityData}  />
              </div>
              <div className="mt-[110px]">
                <BasicItem title="TaskON OAT" icon="/images/search/poap2.png" data={activityData.taskOnOat} activityData={activityData}  />
              </div>
            </div>
            <div className="mt-[84px]">
              <SubTitle2 text="Advance" icon="/images/search/info.png" />
              <div className="mt-[50px]">
                <BasicNftItem title="Contacts" icon="/images/search/nft2.png" data={activityData.nftInteractedAddress} />
              </div>
              
            </div>
            {
              labelData2.length > 0 && <LabelData data={labelData2} />
            }
            
          </div>
        }
        </div>
        
      </Wrap>
      <H5Footer white={true} />
    </div>
  )
}

export default SearchPage