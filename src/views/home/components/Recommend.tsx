import LazyImage from "@/components/LazyImage"
import { useMemo } from "react"

export const RecommendTag: React.FC<{
  type: string
}> = ({
  type
}) => {
  const typeIcon = useMemo(() => {
    return `/images/home/${type.toLowerCase()}.png`
  }, [type])

  const typeColor = useMemo(() => {
    return `${type}-gradient`
  }, [type])
  const bgColor = useMemo(() => {
    return `${type}-bg`
  }, [type])
  return (
    <div className={`w-[94px] flex items-center px-[6px] py-[2px] rounded ${bgColor}`}>
      <LazyImage src={typeIcon} className="w-5 h-5" />
      <div className={`ml-1 text-[16px] font-dnormal ${typeColor}`}>{type}</div>
    </div>
  )
}
export const RecommendUser: React.FC<{
  type: string
}> = ({
  type
}) => {
  const typeIcon = useMemo(() => {
    return `/images/home/${type.toLowerCase()}.png`
  }, [type])

  return (
    <div className={`flex items-center py-[2px] rounded`}>
      <LazyImage src={typeIcon} className="w-5 h-5" />
    </div>
  )
}

export const RecommendItem: React.FC<{
 children: React.ReactNode,
 address: string
}> = ({
 children,
 address
}) => {
  return (
    <div className="flex items-center py-[10px] px-[12px] hover:bg-[rgba(78,170,182,0.04)] cursor-pointer">
      { children }
      <div className="text-[16px] text-[rgba(63,70,100,0.60)] font-dnormal ml-4">{ address }</div>
    </div>
  )
}


const Recommend = () => {
  return (
    <div className="px-3 py-6 recommend-wrap">
      <div className="mb-[14px]">
        <div className=" px-3 font-dnormal text-[20px] text-[#3F4664] mb-[10px]">Recently</div>
        <div>
          <RecommendItem address="0x231d3559aa848bf10366fb9868590f01d34bf240">
            <RecommendUser type="User" />
          </RecommendItem>
          <RecommendItem address="0x231d3559aa848bf10366fb9868590f01d34bf240">
            <RecommendUser type="User" />
          </RecommendItem>
          <RecommendItem address="0x231d3559aa848bf10366fb9868590f01d34bf240">
            <RecommendUser type="User" />
          </RecommendItem>
          <RecommendItem address="0x231d3559aa848bf10366fb9868590f01d34bf240">
            <RecommendUser type="User" />
          </RecommendItem>
        </div>
      </div>
      <div>
        <div className=" px-3 font-dnormal text-[20px] text-[#3F4664] mb-[10px]">Recommend</div>
        <div>
          <RecommendItem address="0x231d3559aa848bf10366fb9868590f01d34bf240">
            <RecommendTag type="Art" />
          </RecommendItem>
          <RecommendItem address="0x231d3559aa848bf10366fb9868590f01d34bf240">
            <RecommendTag type="Sport" />
          </RecommendItem>
          <RecommendItem address="0x231d3559aa848bf10366fb9868590f01d34bf240">
            <RecommendTag type="Social" />
          </RecommendItem>
          <RecommendItem address="0x231d3559aa848bf10366fb9868590f01d34bf240">
            <RecommendTag type="Game" />
          </RecommendItem>
          <RecommendItem address="0x231d3559aa848bf10366fb9868590f01d34bf240">
            <RecommendTag type="Finance" />
          </RecommendItem>
        </div>
      </div>
    </div>
  )
}

export default Recommend