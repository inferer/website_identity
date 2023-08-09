import LazyImage from "@/components/LazyImage"
import Wrap from "@/components/Wrap"
import PageHeader from "@/components/pc/PageHeader"
import { useState } from "react"
import Recommend from "./components/Recommend"

const HomePage = () => {

  const [inputFocus, setInputFocus] = useState(false)

  const handleInputFocus = () => {
    setInputFocus(true)
  }
  const handleInputBlur = () => {
    setInputFocus(false)
  }
  const handleSearch = () => {
    
  }
  const handleInputKeyUp = (event: React.KeyboardEvent) => {
    console.log(event)
    if (event.key === 'Enter') {

    }
  }

  return (
    <div>
      <PageHeader />
      <Wrap>
        <div className="flex justify-center pt-[116px]">
          <LazyImage src="/images/home/logo2.png" className="w-[51px] h-[59px]" />
          <div className=" font-fmedium text-[36px] ml-5 gradient1">Explore the Identity</div>
        </div>
        <div className="flex justify-center mt-[135px]">
          <div>
            <div className={`relative search-wrap ${inputFocus ? 'focus' : ''} `}>
              <input className="search-input outline-none pl-6 pr-[74px] font-dnormal" placeholder="Search address identity"
              
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyUp={handleInputKeyUp}
              />
              <div className=" absolute top-[20px] right-[25px]"
                onClick={handleSearch}
              >
                <LazyImage src="/images/home/search.png" className="w-[24px] h-[24px]" />
              </div>
              
            </div>
            {/* <div className="mt-3">
              <Recommend />
            </div> */}
            <div className="mt-[72px] flex justify-center">
              <LazyImage src="/images/home/loading.png" className="w-[400px] h-[300px]" />
            </div>
            
          </div>
        </div>
      </Wrap>
    </div>
  )
}

export default HomePage