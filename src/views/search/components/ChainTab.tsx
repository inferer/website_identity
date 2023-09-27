import LazyImage, { LazyImage2 } from "@/components/LazyImage"
import { useEffect, useMemo, useState } from "react"

export const tabsConfig = [
  {id: "1", chainName: 'ETH', icon: '/images/search/eth2.png', iconActive: '/images/search/eth2_active.png' },
  {id: "137", chainName: 'Polygon', icon: '/images/search/polygon2.png', iconActive: '/images/search/polygon2_active.png' },
]

const TabItem: React.FC<{
  tabData: any,
  current: any,
  onClick?: (tab: any) => void
}> = ({
  tabData,
  current,
  onClick
}) => {
  const isActive = useMemo(() => {
    return current.id === tabData.id
  }, [tabData, current])
  return (
    <div className="w-[150px] h-[36px] flex justify-center items-center cursor-pointer gradient-bg-tab relative"
      onClick={e => {
        e.stopPropagation()
        onClick && onClick(tabData)
      }}
    >
      <LazyImage2 src={isActive ? tabData.iconActive : tabData.icon} className="w-[20px] h-[20px] mr-[4px]" />
      <div className={` font-dnormal text-[16px] ${isActive ? 'text-[#161F31]' : 'text-[rgba(22,31,49,0.6)]'}`}>{tabData.chainName}</div>
      <div className=" absolute w-full bottom-0 left-0 flex justify-center">
        <div className={` transition-all duration-300 h-[2px] tab-tip ${isActive ? 'w-[54px]' : 'w-[0px]'}`}></div>
      </div>
    </div>
  )
}

const ChainTab: React.FC<{
  chainIds: string[],
  onChange?: (tab: any) => void
}> = ({
  chainIds,
  onChange
}) => {
  const [tabs, setTabs] = useState<any>([])
  const [current, setCurrent] = useState<any>({})

  useEffect(() => {
    let tempList: any[] = []
    tabsConfig.forEach(tab => {
      const tabInfo = chainIds.find(id => tab.id === id)
      if (tabInfo) {
        tempList.push(tab)
      }
    })
    setTabs(tempList)
    setCurrent(tempList[0])
  }, [chainIds])

  const handleChange = (tab: any) => {
    setCurrent(tab)
    onChange && onChange(tab)
  }

  return (
    <div className=" flex items-center">
      {
        tabs.map((tab: any) => {
          return <TabItem key={tab.id} tabData={tab} current={current} onClick={handleChange} />
        })
      }
      
    </div>
  )
}

export default ChainTab