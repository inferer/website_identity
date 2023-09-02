

export interface UserState {
  userId: string,
  nftBaseInfo: {[key: string]: string}
  getUserID: (account: string) => void,
  register: (account: string) => void,
  collectNftColl: (account: {[key: string]: string}) => void,
  getNFTCollBaseInfo: (token_id: number, address: string, userid: number) => void,
  collectTicket: (data: {[key: string]: string}) => any,
  cancelCollectTicket: (data: {[key: string]: string}) => any,
  getTicketInfo: (data: {[key: string]: string}) => any,
}