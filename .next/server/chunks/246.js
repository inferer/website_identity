"use strict";
exports.id = 246;
exports.ids = [246];
exports.modules = {

/***/ 8281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ connectorLocalStorageKey)
/* harmony export */ });
/* unused harmony export walletLocalStorageKey */
const connectorLocalStorageKey = "connectorIdInferer";
const walletLocalStorageKey = "wallet";


/***/ }),

/***/ 784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   _: () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    isOpen: false,
    nodeId: "",
    modalNode: null,
    setModalNode: ()=>null,
    onPresent: ()=>null,
    onDismiss: ()=>null,
    setCloseOnOverlayClick: ()=>true
});
const ModalProvider = ({ children })=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [modalNode, setModalNode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [nodeId, setNodeId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [closeOnOverlayClick, setCloseOnOverlayClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const handlePresent = (node, newNodeId)=>{
        setModalNode(node);
        setIsOpen(true);
        setNodeId(newNodeId);
    };
    const handleDismiss = ()=>{
        setModalNode(undefined);
        setIsOpen(false);
        setNodeId("");
    };
    const handleOverlayDismiss = ()=>{
    // if (closeOnOverlayClick) {
    //   handleDismiss();
    // }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Context.Provider, {
        value: {
            isOpen,
            nodeId,
            modalNode,
            setModalNode,
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick
        },
        children: [
            children,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `fixed top-0 left-0 flex justify-center items-center
        ${isOpen ? "w-full h-full" : "w-0 h-0"}
        ${isOpen ? " opacity-100" : " opacity-0"}
      `,
                style: {
                    zIndex: 999,
                    position: "fixed",
                    transition: "opacity ease-in 0.15s"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute top-0 left-0 w-full h-full flex justify-center items-center",
                        onClick: handleOverlayDismiss,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full h-full backdrop-filter backdrop-blur-sm",
                            style: {
                                backgroundColor: "rgba(0,0,0,0.5)"
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative z-50",
                        children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(modalNode) && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(modalNode, {
                            // @ts-ignore
                            onDismiss: handleDismiss
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalProvider);


/***/ }),

/***/ 9293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_web3React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9391);


const RPC_URL = _utils_web3React__WEBPACK_IMPORTED_MODULE_1__/* .RPC_URLS_ID */ .mP[1];
// export const bscRpcProvider = new StaticJsonRpcProvider(RPC_URL)
/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */ const useActiveWeb3React = ()=>{
    const { library, chainId, account, ...web3React } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_0__.useWeb3React)();
    return {
        // library: library ?? bscRpcProvider, 
        library: library,
        chainId: chainId ?? 97,
        account: account ?? "",
        ...web3React
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useActiveWeb3React);


/***/ }),

/***/ 5685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ hooks_useAuth)
});

// UNUSED EXPORTS: CHAIN_ID

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(8054);
// EXTERNAL MODULE: external "@binance-chain/bsc-connector"
var bsc_connector_ = __webpack_require__(8454);
// EXTERNAL MODULE: external "@web3-react/injected-connector"
var injected_connector_ = __webpack_require__(6590);
// EXTERNAL MODULE: external "@web3-react/walletconnect-connector"
var walletconnect_connector_ = __webpack_require__(9795);
// EXTERNAL MODULE: ./src/components/walletmodal/config.tsx
var config = __webpack_require__(8281);
// EXTERNAL MODULE: ./src/utils/web3React.ts
var web3React = __webpack_require__(9391);
;// CONCATENATED MODULE: ./src/utils/wallet.ts
// Set of helper functions to facilitate wallet setup
const NETWORK_CONFIG = {};
/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */ const setupNetwork = async (chainId, externalProvider)=>{
    // @ts-ignore
    const provider = externalProvider || window.ethereum;
    if (!chainId || !NETWORK_CONFIG[chainId]) {
        console.error("Invalid chain id");
        return false;
    }
    if (provider && provider.request) {
        try {
            await provider.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: `0x${chainId.toString(16)}`
                    }
                ]
            });
            return true;
        } catch (switchError) {
            if (switchError?.code === 4902) {
                try {
                    const chainData = NETWORK_CONFIG[chainId];
                    await provider.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                chainId: `0x${chainId.toString(16)}`,
                                chainName: NETWORK_CONFIG[chainId].name,
                                nativeCurrency: {
                                    name: chainData.symbol ? chainData.symbol : "BNB",
                                    symbol: chainData.symbol ? chainData.symbol : "BNB",
                                    decimals: 18
                                },
                                rpcUrls: NETWORK_CONFIG[chainId].rpcUrls,
                                blockExplorerUrls: [
                                    `${NETWORK_CONFIG[chainId].scanURL}/`
                                ]
                            }
                        ]
                    });
                    return true;
                } catch (error) {
                    console.error("Failed to setup the network in Metamask:", error);
                    return false;
                }
            }
            return false;
        }
    } else {
        console.error("Can't setup the BSC network on metamask because window.ethereum is undefined");
        return false;
    }
};

// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var useActiveWeb3React = __webpack_require__(9293);
;// CONCATENATED MODULE: ./src/hooks/useAuth.tsx

// @ts-ignore








const CHAIN_ID = 56;
const useAuth = ()=>{
    const { chainId, activate, deactivate, setError, account, library } = (0,useActiveWeb3React/* default */.Z)();
    // const { toastError } = useToast()
    const login = (0,external_react_.useCallback)(async (connectorID)=>{
        const connectorOrGetConnector = web3React/* connectorsByName */.BA[connectorID];
        window?.localStorage?.setItem(config/* connectorLocalStorageKey */.O, connectorID);
        const connector = connectorOrGetConnector;
        if (typeof connector !== "function" && connector) {
            activate(connector, async (error)=>{
                if (error instanceof core_.UnsupportedChainIdError) {
                    setError(error);
                    const provider = await connector.getProvider();
                    const hasSetup = await setupNetwork(CHAIN_ID, provider);
                    if (hasSetup) {
                        activate(connector);
                    }
                } else {
                    window?.localStorage?.removeItem(config/* connectorLocalStorageKey */.O);
                    if (error instanceof injected_connector_.NoEthereumProviderError || error instanceof bsc_connector_.NoBscProviderError) {
                    // toastError()
                    } else if (error instanceof injected_connector_.UserRejectedRequestError || error instanceof walletconnect_connector_.UserRejectedRequestError) {
                        if (connector instanceof walletconnect_connector_.WalletConnectConnector) {
                            const walletConnector = connector;
                            walletConnector.walletConnectProvider = undefined;
                        }
                    // toastError(t('Authorization Error'), t('Please authorize to access your account'))
                    } else {
                    // toastError(error.name, error.message)
                    }
                }
            });
        } else {
            window?.localStorage?.removeItem(config/* connectorLocalStorageKey */.O);
        // toastError(t('Unable to find connector'), t('The connector config is wrong'))
        }
    }, [
        activate,
        setError
    ]);
    const logout = (0,external_react_.useCallback)(()=>{
        deactivate();
    }, [
        deactivate
    ]);
    return {
        login,
        logout
    };
};
/* harmony default export */ const hooks_useAuth = (useAuth);


/***/ }),

/***/ 9391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BA: () => (/* binding */ connectorsByName),
/* harmony export */   Mt: () => (/* binding */ ConnectorNames),
/* harmony export */   av: () => (/* binding */ getLibrary),
/* harmony export */   mP: () => (/* binding */ RPC_URLS_ID)
/* harmony export */ });
/* unused harmony export injected */
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6590);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9795);
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _binance_chain_bsc_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8454);
/* harmony import */ var _binance_chain_bsc_connector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_binance_chain_bsc_connector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(399);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_3__);




const RPC_URLS_ID = {
    "1": "https://mainnet.infura.io/v3/",
    "3": "https://ropsten.infura.io/v3/",
    "56": "https://bsc-dataseed1.ninicoin.io",
    "137": "https://polygon.llamarpc.com",
    "97": "https://bsc-testnet.public.blastapi.io",
    "3448148188": "https://nile.trongrid.io/jsonrpc",
    "728126428": "https://api.trongrid.io/jsonrpc"
};
var ConnectorNames;
(function(ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(ConnectorNames || (ConnectorNames = {}));
const POLLING_INTERVAL = 12000;
// const SUPPORTED_CHAIN_ID = [ CHAIN_ID ]
const SUPPORTED_CHAIN_ID = Object.keys(RPC_URLS_ID).map((key)=>Number(key));
const injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__.InjectedConnector({});
// export const injected = new InjectedConnector({})
const walletconnect = new _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_1__.WalletConnectConnector({
    qrcode: true,
    rpc: {
        1: RPC_URLS_ID[1],
        3: RPC_URLS_ID[3],
        97: RPC_URLS_ID[97],
        56: RPC_URLS_ID[56],
        3448148188: RPC_URLS_ID[3448148188],
        728126428: RPC_URLS_ID[728126428]
    }
});
const bscConnector = new _binance_chain_bsc_connector__WEBPACK_IMPORTED_MODULE_2__.BscConnector({
    supportedChainIds: SUPPORTED_CHAIN_ID
});
const connectorsByName = {
    [ConnectorNames.Injected]: injected,
    [ConnectorNames.WalletConnect]: walletconnect,
    [ConnectorNames.BSC]: bscConnector
};
const getLibrary = (provider)=>{
    const library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_3__.Web3Provider(provider);
    library.pollingInterval = POLLING_INTERVAL;
    return library;
};


/***/ })

};
;