import LazyImage from "@/components/LazyImage"
import { SubTitle22 } from "./SubTitle"
import ChainTab from "./ChainTab"
import { useEffect, useState } from "react"

const TicketInfo: React.FC<{
  dataList: any[]
}> = ({
  dataList
}) => {

  const [chainIds, setChainIds] = useState<string[]>([])
  const [currentData, setCurrentData] = useState<any>({})
  useEffect(() => {
    let tempIds: string[] = []
    dataList.forEach((data, index) => {
      tempIds.push(data.chain_id)
      if (data.chain_id === '1') {
        setCurrentData(data)
      }
    })

    setChainIds(tempIds)
  }, [dataList])

  const handleTabChange = (tab: any) => {
    const tabData = dataList.find(data => data.chain_id === tab.id)
    if (tabData) {
      setCurrentData(tabData)
    }
  }

  return (
    <div className="h-[364px] relative border-bg rounded-[6px] overflow-hidden p-[1px]">
      {
        chainIds.length > 0 && 
          <div className=" absolute z-0 left-0 top-0 rounded-tl-[6px]">
            <ChainTab chainIds={chainIds} onChange={handleTabChange} />
          </div>
      }
      
      <div className="w-full h-full flex justify-between bg-white rounded-[5px]">
        <div className="pl-[48px] pt-[79px]">
          <div className="flex items-center">
            <div className="w-[230px]">
              <SubTitle22 text="Birth on" icon="/images/search/id.png" />
              <div className="text-[rgba(63,70,100,0.6)] font-dnormal text-base mt-[6px]">
                {currentData.tx_firstLabel}
              </div>
            </div>
            <div className="w-[230px]">
              <SubTitle22 text="Active since" icon="/images/search/link.png" />
              <div className="text-[rgba(63,70,100,0.6)] font-dnormal text-base mt-[6px]">
                {currentData.tx_lastLabel}
              </div>
            </div>
          </div>
          <div className="flex items-center mt-8">
            <div className="w-[230px]">
              <SubTitle22 text="Min Tx Value" icon="/images/search/info.png" />
              <div className="text-[rgba(63,70,100,0.6)] font-dnormal text-base mt-[6px]">
              {Number(currentData.value_min || '0').toFixed(2)} {currentData.coinName}
              </div>
            </div>
            <div className="w-[230px]">
              <SubTitle22 text="Max Tx Value" icon="/images/search/info.png" />
              <div className="text-[rgba(63,70,100,0.6)] font-dnormal text-base mt-[6px]">
              {Number(currentData.value_max || '0').toFixed(2)} {currentData.coinName}
              </div>
            </div>
          </div>
          <div className="flex items-center mt-8">
            <div className="w-[230px]">
              <SubTitle22 text="P80 Tx Value" icon="/images/search/info.png" />
              <div className="text-[rgba(63,70,100,0.6)] font-dnormal text-base mt-[6px]">
              {Number(currentData.value_p80 || '0').toFixed(2)} {currentData.coinName}
              </div>
            </div>
            <div className="w-[230px]">
              <SubTitle22 text="Median(P50) Tx Value" icon="/images/search/info.png" />
              <div className="text-[rgba(63,70,100,0.6)] font-dnormal text-base mt-[6px]">
              {Number(currentData.value_p50 || '0').toFixed(2)} {currentData.coinName}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[620px] pr-[48px] flex flex-col justify-center h-full bg-[url('/images/search/info_bg.png')]" style={{ backgroundSize: 'auto 100%'}}>
          <div className="flex justify-end">
            <div className=" relative">
              <div className="flex justify-end items-baseline">
                <span className=" text-[103px] font-dbold text-grade1 leading-[110%]">{Number(currentData.balance || '0').toFixed(2)}</span>
                <span className=" text-[40px] font-dbold text-grade1 ml-[10px]">{currentData.coinName}</span>
              </div>
              <LazyImage src="/images/search/line4.png" className=" w-full absolute right-0 -bottom-[8px]" />
            </div>
            
          </div>
          
          <div className=" flex justify-end  mt-2 mb-[31px]">
            
          </div>
          <div className=" flex justify-end">
            <div className="bg-grade1 pl-[26px] pr-[12px] h-[68px] flex justify-center items-center">
              <span className=" text-[34px] font-dbold text-grade1 leading-[110%]">{currentData.txcount || '0'}</span>
              <span className=" text-[26px] font-dmedium text-grade1 ml-[10px] relative -bottom-[2px]">txs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketInfo