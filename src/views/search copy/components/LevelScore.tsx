import LazyImage from "@/components/LazyImage"
import useModal from "@/hooks/useModal";
import WalletModal from "@/components/walletmodal/WalletModal";
import { useUserStore } from "@/state";
import { useCallback, useEffect, useId, useState } from "react";
import useActiveWeb3React from "@/hooks/useActiveWeb3React";
import { useRouter } from "next/router";
import { CollectIcon } from "./CollectIcon";
import { message } from 'antd';

const LevelScore: React.FC<{
  levelScore: string,
  identityInfo: any
}> = ({
  levelScore,
  identityInfo
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter()
  const { account } = useActiveWeb3React()
  const [ onPrresent, onDimiss ] = useModal(<WalletModal />)
  const userId = useUserStore(state => state.userId)
  const collectTicket = useUserStore(state => state.collectTicket)
  const cancelCollectTicket = useUserStore(state => state.cancelCollectTicket)
  const getTicketInfo = useUserStore(state => state.getTicketInfo)

  const [isFav, setisFav] = useState(false)
  const [currentId, setCurrentId] = useState('')

  const [ticketInfo, setTicketInfo] = useState<any>({})

  useEffect(() => {
    if (account) {
      onDimiss()
    }
  }, [onDimiss, account])
  
  useEffect(() => {
    if (router.query.address && router.query.address[0] && userId) {
      getTicketInfo({
        user_id: userId,
        collect_address: router.query.address[0],
        chainid: '1'
      }).then((res: any) => {
        if (res.status === 200 && res.data.id) {
          setTicketInfo(res.data)
          setCurrentId(res.data.id)
          setisFav(true)
        }
      })
    }
  }, [userId, router.query.address, getTicketInfo])

  const handleAction = useCallback(async (action: string) => {
    if (!account) {
      onPrresent()
      return
    }
    if (action === 'collect' && router.query.address) {
      const res = await collectTicket({
        user_id: userId,
        collect_address: router.query.address[0],
        chainid: '1',
        ticket_id: '',
        ticket_level: identityInfo.level || 'Poor',
        ticket: JSON.stringify(identityInfo)
      })
      if (res.status === 200 && res.data.id > -1) {
        setisFav(!isFav)
        setCurrentId(res.data.ticketId)
        if (!isFav) {
          messageApi.success('Collected')
        } else {
          messageApi.success('Canceled')
        }
      }
    }
    if (action === 'cancelCollect' && router.query.address) {
      const res = await cancelCollectTicket({
        user_id: userId,
        collect_address: router.query.address[0],
        chainid: '1',
        ticket_id: ticketInfo.ticket_id || currentId
      })
      if (res.status === 200 && res.data.id > -1) {
        setisFav(false)
        setCurrentId('')
        setTicketInfo({})
        messageApi.success('Canceled')
      }
    }
    
  }, [onPrresent, account, userId, router.query.address, identityInfo, cancelCollectTicket, collectTicket, currentId, isFav, messageApi, ticketInfo])

  return (
    <div className="flex justify-center">
      {contextHolder}
      <div className="gradient1 font-dbold text-[180px] mt-[110px] leading-normal relative">
        { Number(levelScore).toFixed(1) }
        {/* <LazyImage src="/images/search/collect.png" className="w-[20px] h-[20px] absolute bottom-[64px] -right-[30px] cursor-pointer" 
        /> */}
        <div className="w-[20px] h-[20px] absolute bottom-[64px] -right-[30px] cursor-pointer">
          <CollectIcon 
            value={isFav} 
            onClick={() => {
              handleAction(!isFav ? 'collect' : 'cancelCollect')
            }}
          />
        </div>
        
      </div>
    </div>
  )
}

export default LevelScore