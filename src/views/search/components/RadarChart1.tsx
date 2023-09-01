import LazyImage from '@/components/LazyImage';
import { useEffect, useState } from 'react';


const RadarChart1: React.FC<any> = ({
  data
}) => {
  const [labelList, setLabelList] = useState<any[]>([
    
  ])
  useEffect(() => {
    if (data.length > 0) {
      
    }
    
    
  }, [data])

  return (
    <div className='radar-chart-wrap relative mt-[150px] flex items-center mb-[100px]'>
      <div className=' relative w-[340px] h-[340px] bg-[rgba(110,98,255,0.10)] border border-[rgba(110,98,255,0.30)] rounded-full flex justify-center items-center'>
        <LazyImage src='/images/search/pol7.png' className='w-[158px]' />
        <LazyImage src='/images/search/pol_user.png' className='w-[77px] absolute left-[131px] top-[124px]' />
      </div>
      <div className='flex items-center'>
        <div className='label-num-1 w-[258px] h-[12px]'></div>
        <div className={` font-fbold text-[24px] label-num-1-bg`}
        >
          <div className='label-text'>
            {data[0].label_show_name}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RadarChart1