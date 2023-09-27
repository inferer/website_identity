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

export const SubTitle22: React.FC<{
  text: string,
  icon: string
}> = ({
  text,
  icon
}) => {
  return (
    <div className="flex items-center">
      <LazyImage src={icon} className="w-6 h-6 mr-[6px]"  />
      <div className=" font-dbold text-[#3F4664] text-[18px]">{ text }</div>
    </div>
  )
}

export const SubTitle23: React.FC<{
  text: string,
  number: string
}> = ({
  text,
  number
}) => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className=" font-dmedium text-[#3F4664] text-[20px]">{ text } </div>
      <div className=" font-dbold text-[#3F4664] text-[24px] asset-text">{ number }</div>
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