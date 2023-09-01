import LazyImage from "@/components/LazyImage"
import { Text1 } from "./SubTitle"
import CopyClipboard from "@/components/CopyClipboard"

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
    <div className="w-[486px] h-[481px] rounded-lg overflow-hidden">
      <div className="flex items-center h-[60px] basic-nft-gradient text-[#fff] text-[26px] font-dbold px-5">
        <LazyImage src={icon} className="w-[22px] mr-[6px]" />
        {title}
      </div>
      <div className="basic-nft-gradient2 px-[40px] py-[20px]">
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
          
          {/* <div className="flex items-center mb-[12px]">
            <div>0x231d3559aa848bf10366fb9868590f01d34bf240</div>
            <LazyImage src="/images/search/copy.png" className="w-4 h-4 ml-1" />
          </div>
          <div className="flex items-center mb-[12px]">
            <div>0x231d3559aa848bf10366fb9868590f01d34bf240</div>
            <LazyImage src="/images/search/copy.png" className="w-4 h-4 ml-1" />
          </div>
          <div className="flex items-center mb-[12px]">
            <div>0x231d3559aa848bf10366fb9868590f01d34bf240</div>
            <LazyImage src="/images/search/copy.png" className="w-4 h-4 ml-1" />
          </div>
          <div className="flex items-center mb-[12px]">
            <div>0x231d3559aa848bf10366fb9868590f01d34bf240</div>
            <LazyImage src="/images/search/copy.png" className="w-4 h-4 ml-1" />
          </div> */}
        </div>
      </div>
    </div>
  )
}

const BasicItem: React.FC<{
  title: string,
  icon: string,
  data: any
}> = ({
  title,
  icon,
  data
}) => {
  return (
    <div className="w-[400px] h-[265px] rounded-lg overflow-hidden">
      <div className="flex items-center h-[60px] bg-[#3F96FF] text-[#fff] text-[26px] font-dbold px-5">
        <LazyImage src={icon} className="w-[22px] mr-[6px]" />
        {title}
      </div>
      <div className="h-[205px] basic-gradient px-[60px] py-[25px]">
        <div className="flex items-center">
          <div className="w-[206px]">
            <div>
              <SubTitle text="Mint" />
            </div>
            <div className="mt-2">
              <Text1 text={data.mint || '0'} />
            </div>
          </div>
          <div className="">
            <div>
              <SubTitle text="Burn" />
            </div>
            <div className="mt-2">
              <Text1 text={data.burn || '0'} />
            </div>
          </div>
        </div>
        <div className="flex items-center mt-[30px]">
          <div className="w-[206px]">
            <div>
              <SubTitle text="Send" />
            </div>
            <div className="mt-2">
              <Text1 text={data.send || '0'} />
            </div>
          </div>
          <div className="">
            <div>
              <SubTitle text="Receive" />
            </div>
            <div className="mt-2">
              <Text1 text={data.receive || '0'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicItem