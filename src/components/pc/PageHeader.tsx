import { useRouter } from "next/router"
import LazyImage from "../LazyImage"

const PageHeader = () => {
  const router = useRouter()
  return (
    <div className=" pl-[7.8vw] mx-auto pt-[36px] relative">
      <div 
        onClick={e => {
          e.stopPropagation()
          router.push({ pathname: '/' })
        }}
      >
        <LazyImage src="/images/home/logo.png" className="w-[32px] h-[32px] cursor-pointer" />
      </div>
      
    </div>
  )
}

export default PageHeader