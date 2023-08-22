import LazyImage from '@/components/LazyImage';
import { useEffect, useState } from 'react';


const RadarChart2: React.FC<any> = ({
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
        <div className=''>
          <svg xmlns="http://www.w3.org/2000/svg" width="347" height="144" viewBox="0 0 347 144" fill="none">
            <path d="M0 138H188.5V6H347" stroke="url(#paint0_linear_1982_1562)" stroke-width="12"/>
            <defs>
              <linearGradient id="paint0_linear_1982_1562" x1="4.99999" y1="134" x2="347" y2="138" gradientUnits="userSpaceOnUse">
                <stop offset="0.00287353" stop-color="#E3E1FF"/>
                <stop offset="0.44502" stop-color="#E3E1FF"/>
                <stop offset="1" stop-color="#FEF0F7"/>
              </linearGradient>
            </defs>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="347" height="144" viewBox="0 0 347 144" fill="none" className=' relative -top-[12px]'>
            <path d="M0 6H188.5V138H347" stroke="url(#paint0_linear_1982_1563)" stroke-width="12"/>
            <defs>
              <linearGradient id="paint0_linear_1982_1563" x1="4.99999" y1="9.99999" x2="347" y2="6" gradientUnits="userSpaceOnUse">
                <stop offset="0.00287353" stop-color="#E3E1FF"/>
                <stop offset="0.44502" stop-color="#E3E1FF"/>
                <stop offset="1" stop-color="#ECF0FF"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='h-[340px] relative -top-[6px] flex flex-col justify-between'>
          <div className='flex'>
            <div className={` font-fbold text-[24px] label-num-1-bg`}
            >
              <div className='label-text'>
                {data[0].label_name}
              </div>
            </div>
          </div>
          
          <div className=' flex'>
            <div className={`font-fbold text-[24px] label-num-1-bg label-num-2-bg`}
            >
              <div className='label-text'>
                {data[1].label_name}
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default RadarChart2