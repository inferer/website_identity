import { useRouter } from "next/router"
import LazyImage from "../LazyImage"

const PageHeader = () => {
  const router = useRouter()
  return (
    <div className=" max-w-[1620px] mx-auto pt-[36px]">
      <div 
        onClick={e => {
          e.stopPropagation()
          router.push({ pathname: '/' })
        }}
      >
        <LazyImage src="/logo.png" className="w-[32px] h-[32px] cursor-pointer" />
      </div>
      
    </div>
  )
}

export default PageHeader