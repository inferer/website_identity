import LazyImage from "@/components/LazyImage"
import Wrap from "@/components/Wrap"
import PageHeader from "@/components/pc/PageHeader"
import { useEffect, useState } from "react"
import { message } from 'antd';
import Recommend from "./components/Recommend"
import { useSearchStore } from "@/state"
import { useRouter } from "next/router"
import { toChecksumAddress } from "@/utils"

const HomePage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter()
  const searchByAddress = useSearchStore(state => state.searchByAddress)
  const setFromPage = useSearchStore(state => state.setFromPage)
  const setRecentlyData = useSearchStore(state => state.setRecentlyData)
  const [inputFocus, setInputFocus] = useState(false)
  const [inputClick, setInputClick] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [searchIng, setSearchIng] = useState(false)

  const handleInputClick = (e: any) => {
    e.stopPropagation()
    setInputClick(true)
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
      setSearchIng(true)
      setInputClick(false)
      setFromPage('HOME')
      await searchByAddress(newAddress)
      setRecentlyData(newAddress)
      router.push({ pathname: `/search/${newAddress}` })
      setTimeout(() => {
        setSearchIng(false)
      }, 500)
      return
    }
    messageApi.error('Invalid address')
    
  }
  const handleInputKeyUp = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const handleRecommendClick = async (type: string, address: string) => {
    handleSearch(address)
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

  return (
    <div>
      {contextHolder}
      <PageHeader />
      <Wrap>
        <div className="flex justify-center pt-[116px]">
          <LazyImage src="/images/home/logo2.png" className="w-[51px] h-[59px]" />
          <div className=" font-fmedium text-[36px] ml-5 gradient1">Explore the Identity</div>
        </div>
        <div className="flex justify-center mt-[116px]">
          <div>
            <div className={`relative search-wrap ${inputFocus ? 'focus' : ''} `}>
              <input className="search-input outline-none pl-6 pr-[74px] font-dnormal" placeholder="Search address identity"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyUp={handleInputKeyUp}
                onClick={handleInputClick}
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
            {/* <div className="mt-3">
                <Recommend />
              </div> */}
            {
              inputClick && !searchIng && 
              <div className="mt-3">
                <Recommend
                  onClick={handleRecommendClick}
                />
              </div>
            }
            
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