
export interface ISearchItem {
  "balance": string,
  "tx_lastLabel": string,
  "tx_firstLabel": string,
  "coinName": string,
  "chainLogo": string,
  "chain_id": string,
  "from_address": string,
  "nft_burn_txcount": string,
  "nft_mint_txcount": string,
  "nft_overal_interactor": string,
  "nft_receive_interactor": string,
  "nft_receive_txcount": string,
  "nft_send_interactor": string,
  "nft_send_txcount": string,
  "poap_burn_cnt": string,
  "poap_mint_cnt": string,
  "poap_receive_cnt": string,
  "poap_send_cnt": string,
  "tx_first": string,
  "tx_last": string,
  "txcount": string,
  "value_max": number,
  "value_min": number,
  "value_p50": number,
  "value_p80": number,
}

export interface IRecommendUser {
  category: string,
  address: string
}


export interface SearchState {
  [x: string]: any;
  recentlyData: string[],
  fromPage: string,
  activityData: { [key: string]: any },
  labelData: { [key: string]: any }[],
  searchItemList: ISearchItem[],
  recommendUsers: IRecommendUser[],
  searchByAddress: (address: string) => void,
  setFromPage: (address: string) => void,
  setRecentlyData: (address: string) => void,
  getRecentlyData: (address: string) => void,
  getRecommendUsers: () => void,
}

