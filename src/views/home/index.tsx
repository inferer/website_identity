import LazyImage from "@/components/LazyImage"
import Wrap from "@/components/Wrap"
import PageHeader from "@/components/pc/PageHeader"
import { useCallback, useEffect, useRef, useState } from "react"
import { message } from 'antd';
import Recommend from "./components/Recommend"
import { useSearchStore } from "@/state"
import { useRouter } from "next/router"
import { toChecksumAddress } from "@/utils"
import Link from "next/link";

const HomePage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter()
  const searchByAddress = useSearchStore(state => state.searchByAddress)
  const setFromPage = useSearchStore(state => state.setFromPage)
  const setRecentlyData = useSearchStore(state => state.setRecentlyData)
  const setSearchingGlobal = useSearchStore(state => state.setSearchingGlobal)
  const [inputFocus, setInputFocus] = useState(false)
  const [inputClick, setInputClick] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [searchIng, setSearchIng] = useState(false)
  const [starting, setStarting] = useState(true)
  const [startMove, setStartmove] = useState(false)

  const recommendRef = useRef<any>(null)

  const handleInputClick = (e: any) => {
    e.stopPropagation()
    setInputClick(true)
    setTimeout(() => {
      if (recommendRef.current && !inputValue) {
        recommendRef.current.handleFilter('')
      }
    }, 500)
    
  }

  const handleInputFocus = () => {
    setInputFocus(true)
  }
  const handleInputBlur = () => {
    setInputFocus(false)
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
      setStarting(true)
      setSearchIng(true)
      setInputClick(false)
      setFromPage('HOME')
      setInputFocus(false)
      await searchByAddress(newAddress)
      setRecentlyData(newAddress)
      router.push({ pathname: `/search/${newAddress}` })
      setTimeout(() => {
        setSearchIng(false)
      }, 500)
      setTimeout(() => {
        setStartmove(false)
      }, 2000)
      return
    }
    messageApi.error('Invalid address')
    
  }

  const handleInputKeyUp = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch()
    } else {
      // if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
      if ((event.key.length === 1 && /^[a-zA-Z0-9]*$/.test(event.key)) || event.key === 'Backspace') {
        if (recommendRef.current) {
          recommendRef.current.handleFilter(inputValue)
        }
      }
      
    }
  }

  const handleRecommendClick = async (type: string, address: string) => {
    setInputValue(address)
    handleSearch(address)
  }

  const hanleArrowChange = async (index: number) => {
    // @ts-ignore
    const filterList = window.globalFilterList || []
    const filterItem = filterList[index]
    if (filterItem && filterItem.address) {
      setInputValue(filterItem.address)
    }
  }

  const handleFilterChange = async (data: any[]) => {
    
  }

  useEffect(() => {
    const handleDocumentClick = () => {
      setInputClick(false)
    }
    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  useEffect(() => {
    router.prefetch('/search/0x776019ec6b3dee2b8fd4232cc70395a75e0eb0d2')
  }, [router])

  return (
    <div>
      {contextHolder}
      <PageHeader />
      <Wrap>
        {/* <div className={` transition-all duration-500 ${!starting ? ' scale-[0.75]' : ''} `}> */}
        <div className={` relative`}>
          <div className={`absolute flex transition-all duration-[400ms] ${startMove ? 'top-[87px] left-0 ml-0' : 'top-[161px] left-[50%] -ml-[208px]'} `}>
            <LazyImage src="/images/home/logo2.png" className={`${startMove ? 'w-[48px] h-[48px]' : 'w-[51px] h-[59px]'}`} />
            <div className={`font-fmedium text-[36px] transition-all duration-[400ms] ml-5 gradient1 ${startMove ? ' opacity-0 ' : ' opacity-100 '} `}>Explore the Identity</div>
          </div>
          <div className={`absolute transition-all duration-[400ms] flex justify-center ${startMove ? ' left-[75px] top-[77px]' : ' left-[180px] top-[336px]'}`}>
            <div>
              <div className={`relative search-wrap ${inputFocus ? 'focus' : ''} `}>
                <input className="search-input outline-none pl-6 pr-[74px] font-dnormal" placeholder="Search address identity"
                  value={inputValue}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  onKeyUp={handleInputKeyUp}
                  onClick={handleInputClick}
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
                <div className="mt-3">
                  <Recommend
                    ref={recommendRef}
                    inputValue={inputValue}
                    onClick={handleRecommendClick}
                    onArrowChange={hanleArrowChange}
                    onFiLterChange={handleFilterChange}
                  />
                </div>
              }
              
              
            </div>
          </div>
          <div className={` absolute top-[150px] left-[400px] transition-all duration-[400ms] delay-200 ${startMove ? ' opacity-100 ' : ' opacity-0 '}`}>
            {
              searchIng && 
              <div className="mt-[72px] flex justify-center min-h-[600px]">
                <LazyImage src="/images/home/loading.gif" className="w-[400px] h-[300px]" />
              </div>
            }
          </div>
        </div>
      </Wrap>
    </div>
  )
}

export default HomePage