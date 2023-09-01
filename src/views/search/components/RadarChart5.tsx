import LazyImage from '@/components/LazyImage';
import * as echarts from 'echarts';
import { useEffect, useState } from 'react';

var option = {

  legend: {
    
  },
  radar: {
    // shape: 'circle',
    radius: 230,
    splitNumber: 1,
    axisName: {
      show: false
    },
    axisLine: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(110, 98, 255, 0.6)'
      }
    },
    indicator: [
      { name: 'Sales', max: 100 },
      { name: 'Administration', max: 100 },
      { name: 'Information Technology', max: 100 },
      { name: 'Customer Support', max: 100 },
      { name: 'Development', max: 100 },
    ]
  },
  series: [
    
  ]
};
var option2 = {
  legend: {
    show: false
  },
  radar: {
    // @ts-ignore
    indicator: [
      { name: 'Sales', max: 100 },
      { name: 'Administration', max: 100 },
      { name: 'Information Technology', max: 100 },
      { name: 'Customer Support', max: 100 },
      { name: 'Development', max: 100 },
    ],
    axisName: {
      show: false
    },
    axisLine: {
      show: false
    },
    center: ['50%', '50%'],
    splitArea: {
      areaStyle: {
        color: '#fff'
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(110, 98, 255, 0.3)'
      }
    },
    radius: [130, 230],
    splitNumber: 2,
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [],
          name: '',
          symbol: 'none',
          lineStyle: {
            width: 1.5,
            color: '#6E62FF'
          },
          areaStyle: {
            color: 'rgba(110, 98, 255, 0.19)'
          }
        }
      ]
    }
  ]
};

const RadarChart: React.FC<any> = ({
  data
}) => {
  const [labelList, setLabelList] = useState<any[]>([
    
  ])
  useEffect(() => {
    if (data.length > 0) {
      const valueList = data.map((item: any) => {
        return item.label_degree + 40
      })
      var chartDom = document.getElementById('radarchart');
      if (chartDom) {
        var myChart = echarts.init(chartDom);
        option2.series[0].data[0].value = valueList;
        myChart.setOption(option2);
      }
      var chartDom2 = document.getElementById('radarchart2');
      if (chartDom2) {
        var myChart2 = echarts.init(chartDom2);
        myChart2.setOption(option);
      }

      const tempList = data.map((item: any) => {
        return {
          label: item.label_show_name,
          labelWidth: item.label_show_name.length * 15 + 48
        }
      })
      setLabelList(tempList)
    }
    
    
  }, [data])


  return (
    <div className='radar-chart-wrap relative radar-label-num5'>
      <div id="radarchart" className="w-[600px] h-[600px]">

      </div>
      <div id="radarchart2" className="w-[600px] h-[600px] absolute left-0 top-0">

      </div>
      <div className=' absolute left-[50%] top-[50%] -ml-[77px] -mt-[79px] z-10'>
        <svg xmlns="http://www.w3.org/2000/svg" width="152" height="144" viewBox="0 0 152 144" fill="none">
          <path d="M76.0259 0.654297L151.298 55.3427L122.547 143.83L29.505 143.83L0.753563 55.3427L76.0259 0.654297Z" fill="white"/>
        </svg>
        <LazyImage src='/images/search/pol_user.png' className='w-[77px] absolute left-[38px] top-[38px]' />
      </div>
      {
        labelList.map((item, index) => {
          return (
            <div key={item.label} className={`radar-label radar-label-${index + 1}`}>
              <div className={`label-circle label-circle-${index + 1}`}></div>
              <div className={` font-fbold text-[24px] label-bg label-bg-${index + 1}`}
                style={{
                  left: index === 0 ? '50%' : 'none',
                  marginLeft: index === 0 ? -`${item.labelWidth / 2}` : 'none',
                  width: item.labelWidth
                }}
              >
                <div className='label-text'>
                  {item.label}
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default RadarChart