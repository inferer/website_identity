import LazyImage, { LazyImage3 } from "@/components/LazyImage"
import Wrap from "@/components/Wrap"
import PageHeader from "@/components/pc/PageHeader"
import { SetStateAction, useEffect, useRef, useState } from "react"
import { Tooltip, message } from 'antd';
import SubTitle, { SubTitle2, SubTitle3, Text1 } from "./components/SubTitle"
import BasicItem, { BasicNftItem } from "./components/BasicItem"
import LabelData from "./components/LabelData"
import H5Footer from "@/components/h5/H5Footer"
import { useRouter } from "next/router"
import { useSearchStore, useUserStore } from '@/state'
import { toChecksumAddress } from "@/utils";
import LevelScore from "./components/LevelScore";
import Recommend from "../home/components/Recommend";
import TicketInfo from "./components/TicketInfo";
import AssetInfo from "./components/AssetInfo";
import TxInfo from "./components/TxInfo";

let currentInputValue: SetStateAction<string>

const SearchPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter()
  const fromPage = useSearchStore(state => state.fromPage)
  const searchByAddress = useSearchStore(state => state.searchByAddress)
  const getActivityData = useSearchStore(state => state.getActivityData)
  const searchItemList = useSearchStore(state => state.searchItemList)
  const activityData = useSearchStore(state => state.activityData)
  const activityInfo = useSearchStore(state => state.activityInfo)
  const identityInfo = useSearchStore(state => state.identityInfo)
  const labelData2 = useSearchStore(state => state.labelData)
  const txHistoryData = useSearchStore(state => state.txHistoryData)
  const setRecentlyData = useSearchStore(state => state.setRecentlyData)
  const isGlobalSearching = useSearchStore(state => state.isGlobalSearching)
  const setSearchingGlobal = useSearchStore(state => state.setSearchingGlobal)
  const setFromPage = useSearchStore(state => state.setFromPage)
  const getRecommendUsers = useSearchStore(state => state.getRecommendUsers)
  const [inputFocus, setInputFocus] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [searchIng, setSearchIng] = useState(false)
  const [inputClick, setInputClick] = useState(false)

  const [startMove, setStartmove] = useState(false)
  const [hasAddress, setHasAddress] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

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
    router.push({ pathname: `/${address || inputValue}` })
  }
  const handleSearch = async (address?: string) => {
    if (searchIng) {
      return
    }
    const searchAddress = address || inputValue
    let newAddress = toChecksumAddress(searchAddress)
    if (newAddress) {
      newAddress = newAddress.toLowerCase()
      setStartmove(true)
      setSearchingGlobal(true)
      setInputClick(false)
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
    setTimeout(() => {
      setIsMounted(true)
      setHasAddress(false)
    }, 500)
    if (!router.query.address || !router.query.address[0]) {
      setStartmove(false)
      // 
      setSearchingGlobal(false)
      setInputValue('')
      setTimeout(() => {
        
      }, 300)
    }
  }, [router])

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
        <div className={` relative z-50 ${!searchIng ? ' -top-[30px]' : ' ' } ${isMounted ? ' opacity-100' : ' opacity-0'} `}>
        <div className={`absolute flex transition-all ${hasAddress ? ' duration-[0ms]' : ' duration-[300ms]'}  ${startMove ? 'top-[34px] left-0 ml-0 opacity-100' : 'top-[100px] xl1:top-[161px] left-[50%] -ml-[208px]'} `}>
            <LazyImage src="/images/home/logo2.png" className={`${startMove ? 'w-[42px] h-[42px]' : 'w-[59px] h-[59px]'}`} />
            <div className={`font-fmedium text-[36px] transition-all duration-[300ms] ml-5 gradient1 ${startMove ? ' opacity-0 ' : ' opacity-100 '} `}>Explore the Identity</div>
          </div>
          <div className={`absolute transition-all ${hasAddress ? ' duration-[0ms]' : ' duration-[300ms]'} flex justify-center ${startMove ? ' left-[46px] top-[26px]' : ' left-[180px] top-[230px] xl1:top-[336px]'}`}>
            <div>
              <div className={`relative search-wrap ${inputFocus ? 'focus' : ''} `}>
                <input type="text" aria-autocomplete="none" autoComplete="off" id="searchInput" className={`search-input transition-all ${hasAddress ? ' duration-[0ms]' : ' duration-[300ms]'} outline-none pl-6 pr-[74px] font-dnormal ${startMove ? 'search' : ''}`} placeholder="Search address identity"
                  value={inputValue}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  onKeyUp={handleInputKeyUp}
                  onClick={handleInputClick}
                  onPaste={handleInputPaste}
                  disabled={searchIng}
                  onChange={e => {
                    setInputValue(e.target.value)
                  }}
                />
                <div className=" absolute top-[20px] right-[25px]"
                  onClick={e => {
                    e.stopPropagation()
                    handleSearch()
                  }}
                >
                  <LazyImage src="/images/home/search.png" className="w-[24px] h-[24px] cursor-pointer" />
                </div>
                
              </div>
              {
                inputClick && !searchIng && 
                <div className="mt-3 ">
                  <Recommend
                    from={isGlobalSearching ? 'search': ''}
                    ref={recommendRef}
                    inputValue={inputValue}
                    onClick={handleRecommendClick}
                    onArrowChange={hanleArrowChange}
                  />
                </div>
              }
              
              
            </div>
          </div>
          <div className={` absolute top-[150px] left-[400px] transition-all duration-[300ms] delay-200 ${startMove ? ' opacity-100 ' : ' opacity-0 '}`}>
            {
              searchIng && 
              <div className="mt-[72px] flex justify-center min-h-[600px]">
                <LazyImage src="/images/home/loading.gif" className="w-[400px] h-[300px]" />
              </div>
            }
          </div>
        </div> 
        <div className={`relative transition-all duration-[300ms] ${(searchIng || !isGlobalSearching) ? 'opacity-0 top-[208px]' : ' opacity-100 top-[108px]'}`}>
          {
            !searchIng && isGlobalSearching &&  <>
            <div className=" w-full border-t border-[rgba(22,31,49,0.05);] mt-[30px] mb-[22px]"></div>
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
                <TicketInfo dataList={searchItemList} />

              </div>

              <div className=" mt-[90px]">
                <div>
                  <SubTitle2 text="Transaction" icon="/images/search/tx.png" />
                </div>
                <div className="mt-10">
                  <TxInfo txHistoryData={txHistoryData} />
                </div>
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
                            <Tooltip
                              placement="top"
                              title={nft.name}
                            >
                              <div className=" relative cursor-pointer">
                                <LazyImage3 src={nft.image} className="w-[60px] h-[60px] rounded-[9px]" />
                                <LazyImage src="/images/search/eth.png" className="w-[18px] h-[18px] absolute bottom-0 right-0 z-10" />
                              </div>
                            </Tooltip>
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
                    <AssetInfo dataList={searchItemList} />
                    
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
                <div className="mr-[100px] xl1:mr-[94px] activity-mr">
                  <BasicItem title="PoAP" icon="/images/search/poap2.png" data={activityInfo.poap} />
                </div>
                <div className="mr-[0px]">
                  <BasicItem title="Galxe OAT" icon="/images/search/poap2.png" data={activityInfo.galxeOat} activityData={activityData}  />
                </div>
                
                <div className="mt-[110px]">
                  <BasicItem title="TaskON OAT" icon="/images/search/poap2.png" data={activityInfo.taskOnOat} activityData={activityData}  />
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
            </>
          }
          
        </div>
      </Wrap>
      {
        !searchIng && isGlobalSearching && <div className={` relative ${!isGlobalSearching ? 'top-0' : 'top-[108px]'}`}> <H5Footer white={true} /></div>
      }
      
    </div>
  )
}

export default SearchPage