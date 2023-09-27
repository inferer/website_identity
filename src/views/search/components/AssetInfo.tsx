import LazyImage from "@/components/LazyImage"
import { SubTitle22, SubTitle23 } from "./SubTitle"
import { useEffect, useState } from "react"
import ChainTab from "./ChainTab"

const AssetInfo: React.FC<{
  dataList: any[]
}> = ({
  dataList
}) => {
  const [chainIds, setChainIds] = useState<string[]>([])
  const [currentData, setCurrentData] = useState<any>({})
  useEffect(() => {
    let tempIds: string[] = []
    dataList.reverse().forEach((data, index) => {
      tempIds.push(data.chain_id)
      if (index === 0) {
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
    <div className="h-[276px] w-[486px] relative border-bg rounded-[6px] overflow-hidden p-[1px]">
      {
        chainIds.length > 0 && 
          <div className=" absolute z-0 left-0 top-0 rounded-tl-[6px]">
            <ChainTab chainIds={chainIds} onChange={handleTabChange} />
          </div>
      }
      <div className="w-full h-full bg-white rounded-[5px]">
        <div className="pt-[93px] px-[47px]">
          <div className="flex justify-between items-center w-full">
            <div className="w-[160px]">
              <SubTitle23 text="Send" number={currentData.nft_mint_txcount || '0'} />
            </div>
            <LazyImage src="/images/search/line5.png" className="h-[36px]" />
            <div className="w-[160px]">
              <SubTitle23 text="Mint" number={currentData.nft_send_txcount || '0'} />
            </div>
          </div>
          <div className="flex justify-between items-center w-full py-[27px]">
            <LazyImage src="/images/search/line6.png" className="w-[122px]" />
            <LazyImage src="/images/search/line6.png" className="w-[122px]" />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="w-[160px]">
              <SubTitle23 text="Receive" number={currentData.nft_receive_txcount || '0'} />
            </div>
            <LazyImage src="/images/search/line5.png" className="h-[36px]" />
            <div className="w-[160px]">
              <SubTitle23 text="Burn" number={currentData.nft_burn_txcount || '0'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetInfo