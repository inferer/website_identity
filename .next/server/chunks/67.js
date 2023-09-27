"use strict";
exports.id = 67;
exports.ids = [67];
exports.modules = {

/***/ 3067:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   R: () => (/* reexport safe */ _search__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2793);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9359);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_search__WEBPACK_IMPORTED_MODULE_0__, _user__WEBPACK_IMPORTED_MODULE_1__]);
([_search__WEBPACK_IMPORTED_MODULE_0__, _user__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2793:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export levelInfo */
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2947);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6912);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9429);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9185);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axios__WEBPACK_IMPORTED_MODULE_0__, zustand__WEBPACK_IMPORTED_MODULE_1__, _utils__WEBPACK_IMPORTED_MODULE_2__]);
([_utils_axios__WEBPACK_IMPORTED_MODULE_0__, zustand__WEBPACK_IMPORTED_MODULE_1__, _utils__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const getImageUrl = (url = "")=>{
    if (url.indexOf("ipfs:") > -1) {
        return `https://ipfs.io/ipfs/${url.slice(7)}`;
    }
    return url;
};
const initActivityData = {
    poap: {
        mint: 0,
        burn: 0,
        send: 0,
        receive: 0
    },
    nftInteractors: {
        mint: 0,
        burn: 0,
        send: 0,
        receive: 0
    },
    galxeOat: {
        mint: 0,
        burn: 0,
        send: 0,
        receive: 0
    },
    taskOnOat: {
        mint: 0,
        burn: 0,
        send: 0,
        receive: 0
    },
    levelScore: 0,
    level: "",
    nftInteractedAddress: {
        count: 0,
        interactedAddress: []
    },
    nftAsset: []
};
const initActivityInfo = {
    poap: {
        mint: 0,
        burn: 0,
        send: 0,
        receive: 0,
        nftAsset: []
    },
    nftInteractors: {
        mint: 0,
        burn: 0,
        send: 0,
        receive: 0,
        nftAsset: []
    },
    galxeOat: {
        mint: 0,
        burn: 0,
        send: 0,
        receive: 0,
        nftAsset: []
    },
    taskOnOat: {
        mint: 0,
        burn: 0,
        send: 0,
        receive: 0,
        nftAsset: []
    }
};
const initLabelData = [];
const levelInfo = {
    "exceptional": 5.0,
    "very good": 4.0,
    "good": 3.0,
    "fair": 2.0,
    "poor": 1.0
};
const useSearchStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)()((set, get)=>({
        txHistoryData: {
            xdata: [],
            volumeData: [],
            total: 0
        },
        identityInfo: {},
        recommendUsers: [],
        recentlyData: [],
        fromPage: "",
        searchItemList: [],
        activityData: initActivityData,
        activityInfo: initActivityInfo,
        labelData: initLabelData,
        setFromPage: (from)=>{
            set({
                fromPage: from
            });
        },
        searchByAddress: async (address)=>{
            const tempData = {
                ...initActivityData
            };
            const res2 = await (0,_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)("/api/identity/searchByAddress", {
                address
            });
            if (res2.status === 200) {
                const identityInfo = res2.data.identityInfo || {};
                const activityInfo = res2.data.activityInfo || {};
                tempData.levelScore = identityInfo.level ? levelInfo[identityInfo.level.toLowerCase()] : 0;
                tempData.level = identityInfo.level;
                tempData.nftInteractedAddress = {
                    count: identityInfo["NFT Interactor"] ? identityInfo["NFT Interactor"]["Interacted Count"] || 0 : 0,
                    interactedAddress: identityInfo["NFT Interactor"] ? identityInfo["NFT Interactor"]["Top 5 Interacted Address"] || [] : []
                };
                tempData.nftAsset = (identityInfo["NFT List"] || []).map((item)=>{
                    return {
                        ...item,
                        image: getImageUrl(item.image)
                    };
                });
                const newData = (res2.data.data || []).map((item)=>{
                    tempData.poap.mint += Number(item.poap_mint_cnt);
                    tempData.poap.burn += Number(item.poap_burn_cnt);
                    tempData.poap.send += Number(item.poap_send_cnt);
                    tempData.poap.receive += Number(item.poap_receive_cnt);
                    tempData.nftInteractors.mint += Number(item.nft_mint_txcount);
                    tempData.nftInteractors.burn += Number(item.nft_burn_txcount);
                    tempData.nftInteractors.send += Number(item.nft_send_interactor);
                    tempData.nftInteractors.receive += Number(item.nft_receive_interactor);
                    return {
                        ...item,
                        coinName: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getCoinName */ .kJ)(item.chain_id),
                        chainLogo: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getChainLogo */ .dH)(item.chain_id),
                        tx_firstLabel: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatTime */ .mr)(Number(item.tx_first) * 1000),
                        tx_lastLabel: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatTime */ .mr)(Number(item.tx_last) * 1000),
                        value_max: (item.value_max / 10e17).toFixed(4),
                        value_min: (item.value_min / 10e17).toFixed(4),
                        value_p50: (item.value_p50 / 10e17).toFixed(4),
                        value_p80: (item.value_p80 / 10e17).toFixed(4),
                        balance: (Number(item.balance) / 10e17).toFixed(4)
                    };
                });
                const labelData = (res2.data.labelInfo || []).map((item)=>{
                    return {
                        ...item,
                        category_path_arr: item.label_category_path_name.split("/").slice(1)
                    };
                });
                let xdata = [];
                let volumeData = [];
                let total = 0;
                const txHistory = (res2.data.txHistory || []).reverse().forEach((item)=>{
                    const date = moment__WEBPACK_IMPORTED_MODULE_4___default()(item.monday_date).format("MMM D");
                    xdata.push(date);
                    volumeData.push(item.transaction_num);
                    total += item.transaction_num;
                });
                set({
                    searchItemList: newData
                });
                set({
                    activityData: tempData
                });
                set({
                    labelData: labelData
                });
                set({
                    identityInfo: identityInfo
                });
                set({
                    activityInfo: {
                        ...initActivityInfo,
                        ...activityInfo
                    }
                });
                set({
                    txHistoryData: {
                        xdata,
                        volumeData,
                        total
                    }
                });
            }
        },
        getActivityData: async (address)=>{
            const res = await (0,_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)("/api/identity/getActivityInfo", {
                address
            });
            if (res.status === 200) {
                const data = res.data || {};
                const tempData = {
                    ...get().activityData
                };
                tempData.poap = data.poapInfo;
                tempData.galxeOat = data.galxeOatInfo;
                tempData.taskOnOat = data.taskonOatInfo;
                set({
                    activityData: tempData
                });
            }
        },
        setRecentlyData: async (address)=>{
            const recentlyData = _utils_storage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getStorage("recentlyData") || [];
            const index = recentlyData.findIndex((addr)=>addr === address);
            if (index == -1) {
                recentlyData.unshift(address);
                if (recentlyData.length > 5) {
                    recentlyData.pop();
                }
                _utils_storage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.setStorage("recentlyData", recentlyData);
            }
        },
        getRecentlyData: ()=>{
            const recentlyData = _utils_storage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.getStorage("recentlyData") || [];
            set({
                recentlyData
            });
        },
        getRecommendUsers: async ()=>{
            if (get().recommendUsers.length <= 0) {
                const res = await (0,_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)("/api/identity/getRecommend");
                if (res.status === 200) {
                    set({
                        recommendUsers: res.data.users || []
                    });
                }
            }
        },
        isGlobalSearching: false,
        setSearchingGlobal: (flag)=>{
            set({
                isGlobalSearching: flag
            });
        }
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSearchStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9359:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2947);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axios__WEBPACK_IMPORTED_MODULE_0__, zustand__WEBPACK_IMPORTED_MODULE_1__]);
([_utils_axios__WEBPACK_IMPORTED_MODULE_0__, zustand__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useUserStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)()((set, get)=>({
        userId: "",
        nftBaseInfo: {},
        register: async (account)=>{
            const res = await (0,_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .poster */ .CL)(`/plugin/register`, {
                chrome_id: account
            });
            if (res.status === 200 && res.result && res.result.user_id) {
                set({
                    userId: res.result.user_id
                });
            }
        },
        getUserID: async (account)=>{
            const res = await (0,_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)("/plugin/getUserID", {
                chrome_id: account
            });
            if (res.status === 200 && res.result && res.result.user_id) {
                set({
                    userId: res.result.user_id
                });
            } else {
                get().register(account);
            }
        },
        getNFTCollBaseInfo: async (token_id, nft_address, userid)=>{
            const res = await (0,_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)("/api/trends/getNFTBaseInfo", {
                token_id,
                nft_address,
                userid,
                chainid: 1
            });
            if (res.status === 200) {
                set({
                    nftBaseInfo: res.data || {}
                });
            }
        },
        collectNftColl: async (data)=>{
            const userId = get().userId;
            const res = await (0,_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .poster */ .CL)(`/api/trends/collectNft`, {
                ...data,
                userid: userId
            });
            return res;
        },
        collectTicket: async (data)=>{
            const res = await (0,_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .poster */ .CL)(`/api/identity/collectTicket`, {
                ...data
            });
            return res;
        },
        cancelCollectTicket: async (data)=>{
            const res = await (0,_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .poster */ .CL)(`/api/identity/cancelCollectTicket`, {
                ...data
            });
            return res;
        },
        getTicketInfo: async (data)=>{
            const res = await (0,_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)(`/api/identity/getTicket`, {
                ...data
            });
            return res;
        }
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2947:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CL: () => (/* binding */ poster),
/* harmony export */   _i: () => (/* binding */ fetcher)
/* harmony export */ });
/* unused harmony exports fetcherServerSide, deleter, updater, uploader */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "",
    timeout: 60000
});
const getHeaders = ()=>{
    // instance.defaults.headers.common['access_sign'] = access_sign == 'null' || !access_sign ? '' : access_sign
    // instance.defaults.headers.common['user_addr'] = user_addr
    // instance.defaults.headers.common['content'] = nowallet_content
    return {};
};
const processResult = (res, url)=>{
    return res;
};
function fetcher(url, data = {}) {
    let formatData = {
        ...data
    };
    getHeaders();
    return instance.get(url, {
        params: formatData
    }).then((res)=>processResult(res.data, url));
}
function fetcherServerSide(url, data) {
    let formatData = {
        ...data
    };
    return instance.get(url, {
        params: formatData
    }).then((res)=>res.data);
}
function poster(url, data, options = {}) {
    let formatData = {
        ...data
    };
    getHeaders();
    return instance.post(url, formatData, {
        ...options
    }).then((res)=>processResult(res.data));
}
function deleter(url, data, options = {}) {
    getHeaders();
    return instance.delete(url, data).then((res)=>processResult(res.data));
}
function updater(url, data, options = {}) {
    getHeaders();
    return instance.put(url, data).then((res)=>processResult(res.data));
}
function uploader(url, data) {
    return instance.post(url, data, {
        headers: {
            "Content-type": "multipart/form-data",
            "type": "formData",
            ...getHeaders()
        }
    }).then((res)=>processResult(res.data)).catch((e)=>{
        return false;
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (instance)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9429:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P8: () => (/* binding */ toChecksumAddress),
/* harmony export */   dH: () => (/* binding */ getChainLogo),
/* harmony export */   kJ: () => (/* binding */ getCoinName),
/* harmony export */   mr: () => (/* binding */ formatTime)
/* harmony export */ });
/* unused harmony exports formatAddress, formatName, formatNumber, numMonth, num2Month, addZero, transformTime, openBrowser */
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4325);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([web3__WEBPACK_IMPORTED_MODULE_1__]);
web3__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function formatAddress(address = "") {
    return address.slice(0, 6) + "..." + address.slice(-4);
}
const formatName = (name = "")=>{
    if (name.length <= 20) return name;
    return name.slice(0, 12) + "...";
};
function formatNumber(num) {
    return num >= 1e3 ? (num / 1e3).toFixed(1) + "k" : num.toFixed(1);
}
const numMonth = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
};
function num2Month(num) {
    return numMonth[num];
}
function addZero(m) {
    return m < 10 ? "0" + m : m;
}
function transformTime(timestamp) {
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var M = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    return addZero(h) + ":" + addZero(m) + " " + addZero(M) + "/" + addZero(d) + " " + y;
}
function formatTime(timestamp) {
    // return moment(new Date(timestamp)).format('DD/MM/YYYY, HH:mm A')
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(timestamp)).format("D/M/YYYY, H:m A");
}
function openBrowser(url) {
    window.open(url, "_blank");
}
function getCoinName(chain_id) {
    let coinName = "";
    if (chain_id === "1") {
        coinName = "ETH";
    } else if (chain_id === "137") {
        coinName = "MATIC";
    }
    return coinName;
}
function getChainLogo(chain_id) {
    let chainLogo = "";
    if (chain_id === "1") {
        chainLogo = "/images/search/eth.png";
    } else if (chain_id === "137") {
        chainLogo = "/images/search/pol.png";
    }
    return chainLogo;
}
function toChecksumAddress(address) {
    if (!address) return false;
    try {
        return web3__WEBPACK_IMPORTED_MODULE_1__["default"].utils.toChecksumAddress(address);
    } catch (err) {
        return false;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const storage = {
    setStorage (key, value) {
        let res = "";
        if (typeof value == "object") {
            res = JSON.stringify(value);
        } else {}
        window.localStorage.setItem(key, res);
    },
    getStorage (key) {
        let values = window.localStorage.getItem(key);
        let res;
        try {
            values && (res = JSON.parse(values));
        } catch  {
            res = values;
        }
        return res;
    },
    delStorage (key) {
        if (window) window.localStorage.removeItem(key);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);


/***/ })

};
;