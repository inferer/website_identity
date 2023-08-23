import LazyImage from "@/components/LazyImage"
import SubTitle, { SubTitle2 } from "./SubTitle"
import RadarChart from "./RadarChart"
import { Key } from "react"
import RadarChart1 from "./RadarChart1"
import RadarChart2 from "./RadarChart2"
import RadarChart3 from "./RadarChart3"
import RadarChart4 from "./RadarChart4"
import RadarChart5 from "./RadarChart5"

export const LabelDataItem: React.FC<any> = ({
  index,
  itemData
}) => {
  const bgColor = `label-data-bg-${index}`
  const tipIcon = `/images/search/label-${index}.png`
  return (
    <div className={` relative w-[486px] h-[337px] text-[#3F4664] rounded-lg ${bgColor}`}>
      <LazyImage src={tipIcon} className="w-[36px] h-[36px] absolute left-[16px] -top-[18px]" />
      <div className="text-[#3F4664] text-[20px] font-dbold text-center pt-8">{itemData.label_name}</div>
      <div className="px-10 mt-[30px]">
        <div>
          <div className="flex items-center">
            <LazyImage src="/images/search/category.png" className="w-5 h-5" />
            <div className="pl-4">
              <div className=" font-dmedium text-[20px]">Category</div>
            </div>
          </div>
          <div className="pl-[36px] mt-[6px]">
            <div className="flex items-center">
              {
                itemData.category_path_arr.map((item: any, index: number) => {
                  return (
                    <div key={item} className="flex items-center">
                      <div className="text-[rgba(63,70,100,0.60)] text-[16px] font-dnormal capitalize">{item}</div>
                      {
                        index < itemData.category_path_arr.length - 1 && <LazyImage src="/images/search/next.png" className="w-[5px] h-[10px] mx-4" />
                      }
                      
                    </div>
                  )
                })
              }
              {/* <div className="text-[rgba(63,70,100,0.60)] text-[16px] font-dnormal capitalize">Finance</div>
              <LazyImage src="/images/search/next.png" className="w-[5px] h-[10px] mx-4" />
              <div className="text-[rgba(63,70,100,0.60)] text-[16px] font-dnormal">Staking</div> */}
            </div>
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="flex items-center">
            <LazyImage src="/images/search/degree.png" className="w-5 h-5" />
            <div className="pl-4">
              <div className=" font-dmedium text-[20px]">Degree</div>
            </div>
          </div>
          <div className="pl-[36px] mt-[14px] flex">
            <div className=" relative">
              <div className="h-[6px] w-[200px] bg-[rgba(63,70,100,0.6)] rounded-[6px]"></div>
              <div className="w-[14px] h-[14px] bg-[rgba(63,70,100,0.6)] border-2 border-white absolute left-0 z-10 rounded-full -top-[4px]"
                style={{left: `${itemData.label_degree}%`}}
              ></div>
            </div>
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="flex items-center">
            <LazyImage src="/images/search/info.png" className="w-5 h-5" />
            <div className="pl-4">
              <div className=" font-dmedium text-[20px]">Info</div>
            </div>
          </div>
          <div className="pl-[36px] mt-[6px]">
            <div className="flex items-center">
              <div className="text-[rgba(63,70,100,0.60)] text-[16px] font-dnormal leading-normal">
                {itemData.label_description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const LabelData: React.FC<any> = ({
  data
}) => {
  return (
    <div className="mt-[150px]">
      <SubTitle text="Label" />
      <div className="mt-[90px]">
        <SubTitle2 text="Avatar" icon="/images/search/label.png" />
      </div>
      <div className="flex justify-center py-[50px]">
        {
          data.length === 1 && <RadarChart1 data={data} />
        }
        {
          data.length === 2 && <RadarChart2 data={data} />
        }
        {
          data.length === 3 && <RadarChart3 data={data} />
        }
        {
          data.length === 4 && <RadarChart4 data={data} />
        }
        {
          data.length === 5 && <RadarChart5 data={data} />
        }
        {
          data.length === 6 && <RadarChart data={data} />
        }
        
      </div>
      <div className="mt-[90px]">
        <SubTitle2 text="Profile" icon="/images/search/label.png" />
      </div>
      <div className="mt-[68px] grid grid-cols-2 gap-x-[168px]">
        {
          data.map((item: any, index: number) => {
            return (
              <div key={item.label_id} className="mb-[118px]">
                <LabelDataItem index={index + 1} itemData={item} />
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default LabelData