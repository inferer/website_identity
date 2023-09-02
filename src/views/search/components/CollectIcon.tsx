import { LazyImage2 } from "@/components/LazyImage"
import { useEffect, useState } from "react"

const CollectPng = '/images/search/collect.png';
const Collect2Png = '/images/search/shoucang_active.png';

export const CollectIcon: React.FC<any> = ({
  value,
  onClick
}) => {
    const [active, setActive] = useState(false)
    useEffect(() => {
      setActive(value)
    }, [value])
    return (
      <div className='icon-wrap cursor-pointer shrink-0'
        onClick={e => {
          e.stopPropagation()
          onClick && onClick()
        }}
        onMouseEnter={() => setActive(value || true)}
        onMouseLeave={() => setActive(value || false)}
      >
        <LazyImage2 className='w-[20px] h-[20px]' src={active ? Collect2Png : CollectPng} />
      </div>
    )
  }