import LazyImage from "@/components/LazyImage"

export const SubTitle: React.FC<{
  text: string
}> = ({
  text
}) => {
  return (
    <div className=" font-dbold text-[#161F31] text-[64px]">
      { text }
    </div>
  )
}

export const SubTitle2: React.FC<{
  text: string,
  icon: string
}> = ({
  text,
  icon
}) => {
  return (
    <div className="flex items-center">
      <LazyImage src={icon} className="w-5 h-5 mr-[10px]"  />
      <div className=" font-dbold text-[#161F31] text-[16px]">{ text }</div>
    </div>
  )
}

export const SubTitle3: React.FC<{
  text: string
}> = ({
  text
}) => {
  return (
    <div className=" text-[#161F31] font-dbold text-[20px]">
      { text }
    </div>
  )
}

export const Text1: React.FC<{
  text?: string,
  className?: string,
  children?: React.ReactNode
}> = ({
  text,
  className,
  children
}) => {
  return (
    <div className={` text-[#346DFF] font-dbold text-[16px] ${className}`}>
      { children || text }
    </div>
  )
}

export default SubTitle