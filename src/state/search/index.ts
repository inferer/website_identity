import { fetcher } from '@/utils/axios'
import { create } from 'zustand'
import { ISearchItem, SearchState } from './types'
import { formatTime, getChainLogo, getCoinName, num2Month } from '@/utils'
import storage from '@/utils/storage'

const getImageUrl = (url: string = '') => {
  if (url.indexOf('ipfs:') > -1) {
    return `https://ipfs.io/ipfs/${url.slice(7)}`
  }
  return url
}

const initActivityData = {
  poap: { mint: 0, burn: 0, send: 0, receive: 0},
  nftInteractors: { mint: 0, burn: 0, send: 0, receive: 0},
  galxeOat: { mint: 0, burn: 0, send: 0, receive: 0},
  taskOnOat: { mint: 0, burn: 0, send: 0, receive: 0},
  levelScore: 0,
  nftInteractedAddress: {
    count: 0,
    interactedAddress: []
  },
  nftAsset: []
}
const initLabelData: never[] = []

export const levelInfo = {
  'exceptional': 5.0,
  'very good': 4.0,
  'good': 3.0,
  'fair': 2.0,
  'poor': 1.0
} as any

const useSearchStore = create<SearchState>()((set, get) => ({
  recommendUsers: [],
  recentlyData: [],
  fromPage: '',
  searchItemList: [],
  activityData: initActivityData ,
  labelData: initLabelData,
  setFromPage: (from: string) => {
    set({ fromPage: from })
  },
  searchByAddress: async (address: string) => {
    const tempData = { ...initActivityData }
    const res2 = await fetcher('/api/identity/searchByAddress', { address })
    if (res2.status === 200) {
      const identityInfo = res2.data.identityInfo || {}
      tempData.levelScore = identityInfo.level ? levelInfo[identityInfo.level.toLowerCase()] : 0

      tempData.nftInteractedAddress = {
        count: identityInfo['NFT Interactor'] ? identityInfo['NFT Interactor']['Interacted Count'] || 0 : 0,
        interactedAddress: identityInfo['NFT Interactor'] ? identityInfo['NFT Interactor']['Top 5 Interacted Address'] || [] : []
      }
      tempData.nftAsset = (identityInfo['NFT List'] || []).map((item: any) => {
        return {
          ...item,
          image: getImageUrl(item.image)
        }
      })
      const newData = (res2.data.data || []).map((item: ISearchItem) => {
        tempData.poap.mint += Number(item.poap_mint_cnt)
        tempData.poap.burn += Number(item.poap_burn_cnt)
        tempData.poap.send += Number(item.poap_send_cnt)
        tempData.poap.receive += Number(item.poap_receive_cnt)

        tempData.nftInteractors.mint += Number(item.nft_mint_txcount)
        tempData.nftInteractors.burn += Number(item.nft_burn_txcount)
        tempData.nftInteractors.send += Number(item.nft_send_interactor)
        tempData.nftInteractors.receive += Number(item.nft_receive_interactor)

        return {
          ...item,
          coinName: getCoinName(item.chain_id),
          chainLogo: getChainLogo(item.chain_id),
          tx_firstLabel: formatTime(Number(item.tx_first) * 1000),
          tx_lastLabel: formatTime(Number(item.tx_last) * 1000),
          value_max: (item.value_max / 10e17).toFixed(4),
          value_min: (item.value_min / 10e17).toFixed(4),
          value_p50: (item.value_p50 / 10e17).toFixed(4),
          value_p80: (item.value_p80 / 10e17).toFixed(4),
          balance: (Number(item.balance) / 10e17).toFixed(4)
        }
      })

      const labelData = (res2.data.labelInfo || []).map((item: any) => {
        return {
          ...item,
          category_path_arr: item.label_category_path_name.split('/').slice(1)
        }
      })
      set({ searchItemList: newData })
      set({ activityData: tempData })
      set({ labelData: labelData })
    }

  },
  getActivityData: async (address: string) => {
    const res = await fetcher('/api/identity/getActivityInfo', { address })
    if (res.status === 200) {
      const data = res.data || {}
      const tempData = { ...get().activityData }
      tempData.poap = data.poapInfo
      tempData.galxeOat = data.galxeOatInfo
      tempData.taskOnOat = data.taskonOatInfo

      set({ activityData: tempData })
    }
  },

  setRecentlyData: async (address: string) => {
    const recentlyData = storage.getStorage('recentlyData') || [];
    const index = recentlyData.findIndex((addr: string) => addr === address);
    if (index == -1) {
        recentlyData.unshift(address);

        if (recentlyData.length > 5) {
          recentlyData.pop();
        }
        storage.setStorage('recentlyData', recentlyData);
        
    }
  },
  getRecentlyData: () => {
    const recentlyData = storage.getStorage('recentlyData') || [];
    set({
      recentlyData
    })
  },
  getRecommendUsers: async () => {
    const res = await fetcher('/api/identity/getRecommend')
    if (res.status === 200) {
      set({ recommendUsers: res.data.users || []})
    }
  }
}))

export default useSearchStore