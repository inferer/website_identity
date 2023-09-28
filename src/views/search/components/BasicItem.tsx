import LazyImage, { LazyImage3 } from "@/components/LazyImage"
import { Text1 } from "./SubTitle"
import CopyClipboard from "@/components/CopyClipboard"
import { Tooltip } from "antd"

export const SubTitle: React.FC<{
  text: string
}> = ({
  text
}) => {
  return (
    <div className="text-[#3F4664] font-dmedium text-[20px]">
      { text }
    </div>
  )
}

export const BasicNftItem: React.FC<{
  title: string,
  icon: string,
  data: any
}> = ({
  title,
  icon,
  data
}) => {
  return (
    <div className="w-[550px] h-[481px] rounded-lg overflow-hidden flex flex-col justify-center items-center">
      <div className="flex items-center h-[60px] basic-nft-gradient text-[#161F31] text-[26px] font-dbold px-5 w-full">
        <LazyImage src={icon} className="w-[22px] mr-[6px]" />
        {title}
      </div>
      <div className="basic-nft-gradient2 px-[40px] py-[20px] w-[549px]">
        <div className="flex justify-center items-baseline">
            <div className="text-[#ED7FDD] text-[64px] font-dbold">{ data.count }</div>
            <div className="text-[rgba(63,70,100,0.60)] font-dmedium text-[16px] ml-2">contacts</div>
        </div>
        <div className=" font-dnormal text-[16px] text-[rgba(63,70,100,0.60)] mt-[66px]">
          <div className="mb-[10px]">(Showing top5)</div>
          {
            data.interactedAddress.map((item: any) => {
              return (
                <div key={item.interact_address} className="flex items-center mb-[12px]">
                  <div>{item.interact_address}</div>
                  <CopyClipboard text={item.interact_address} >
                    <LazyImage src="/images/search/copy.png" className="w-4 h-4 ml-1 shrink-0 cursor-pointer" />
                  </CopyClipboard>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

const BasicItem: React.FC<{
  title: string,
  icon: string,
  data: any,
  activityData?: any
}> = ({
  title,
  icon,
  data
}) => {
  return (
    <div className="w-[512px] xl1:w-[550px] rounded-lg overflow-hidden flex flex-col justify-center items-center">
      <div className="flex items-center h-[60px] text-[#161F31] text-[26px] font-dbold px-5 basic-title w-full">
        <LazyImage src={icon} className="w-[22px] mr-[6px]" />
        {title}
      </div>
      <div className="px-[10px] py-[25px] basice-wrap w-[510px] xl1:w-[548px]">
        <div className="flex flex-wrap min-h-[260px]">
          {
            data.nftAsset && data.nftAsset.length === 0 &&
              <div className="w-full flex justify-center py-[3.1rem]">
                <div>
                  <LazyImage src="/images/search/nodata.png" className="w-[201px] h-[140px]" />
                  <div className="text-[rgba(22,31,49,0.60)] font-dnormal text-[16px] mt-4 text-center">No result</div>
                </div>
              </div>

          }
          {
            data.nftAsset && data.nftAsset.slice(0, 5).map((nft: any, index: number) => {
              return (
                <div key={nft.image + index} className="py-[23px] px-[32px]">
                  <div className=" relative flex justify-center flex-col items-center">
                    <LazyImage3 src={nft.image} className="w-[60px] h-[60px] rounded-[9px]" />
                    <Tooltip
                        placement="top"
                        title={nft.name}
                      >
                      <div className=" cursor-pointer text-[rgba(63,70,100,0.90)] text-[16px] font-dnormal mt-[10px] max-w-[110px] line-clamp-1">
                        {nft.name}
                      </div>
                    </Tooltip>
                  </div>
                </div>
              )
            })
          }
          {
            data.nftAsset && data.nftAsset.length > 5 && 
              <div className="py-[23px] px-[32px]">
                <div className="w-[60px] h-[60px] flex justify-center items-center text-[#161F31] font-dmedium text-[20px]">
                  +{data.nftAsset.length - 5}
                </div>
              </div>
          }
          
        </div>
        <div className="pt-[25px] pb-[30px] px-[32px]">
          <LazyImage src="/images/search/line2.png" className="w-[466px] h-[1px]" />
        </div>
        <div className=" flex justify-between items-center px-[64px]">
          <div className="flex flex-col flex-1">
            <div className="flex justify-between items-center">
              <div>
                <SubTitle text="Send" />
              </div>
              <div className="mt-2">
                <Text1 text={data.send || '0'} />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <SubTitle text="Receive" />
              </div>
              <div className="mt-2">
                <Text1 text={data.receive || '0'} />
              </div>
            </div>
          </div>
          <div className="px-[45px]">
            <LazyImage src="/images/search/line2.png" className="w-[1px] h-[36px]" />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-between items-center">
              <div>
                <SubTitle text="Mint" />
              </div>
              <div className="mt-2">
                <Text1 text={data.mint || '0'} />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <SubTitle text="Burn" />
              </div>
              <div className="mt-2">
                <Text1 text={data.burn || '0'} />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default BasicItem