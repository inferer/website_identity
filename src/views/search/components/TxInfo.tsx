import { useState } from "react"
import * as echarts from 'echarts';
import LineChartS from './LineChart';

const TxInfo: React.FC<any> = ({
  txHistoryData
}) => {
  const [tempData, setTempData] = useState({
    "xdata": [
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "May",
        "Jun"
    ],
    "volumeData": [
        334.2,
        1478.6,
        2673.2,
        1311.6,
        918.9,
        668.2,
        1069.2,
        385.8,
        1645.7
    ],
    "total": "10485.400",
    "lastPrice": 1645.7
  })


  return (
    <div className="txinfo-bg h-[317px] rounded-xl">
      <div className="text-[rgba(0,0,0,0.6)] font-pnormal text-[24px] px-8 pt-6">Last quarter</div>
      <div className="text-[#3F4664] font-dbold text-[28px] px-8 pt-[10px]">{txHistoryData.total} txs</div>
      <div className="mt-6 px-3">
        <LineChartS 
            id={"pricedata"}
            lineData={{
              xAxis: {
                data: txHistoryData.xdata
              },
              series: [
                {
                  data: txHistoryData.volumeData,
                  type: 'line',
                  color: '#55B6F4',
                  smooth: true,
                  symbolSize: 4,
                  lineStyle: {
                    width: 2
                  },
                  areaStyle: {
                    opacity: 0,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0.2,
                        color: 'rgba(255, 83, 46, 0.4)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(255, 83, 46, 0)'
                      }
                    ])
                  }
                }
              ]
            }}
          />
      </div>
    </div>
  )
}

export default TxInfo