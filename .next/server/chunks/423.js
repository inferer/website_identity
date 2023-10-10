"use strict";
exports.id = 423;
exports.ids = [423];
exports.modules = {

/***/ 3347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const CopyClipboard = ({ children, text, onSuccess })=>{
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [openHover, setOpenHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [tipText, setTipText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Click to copy");
    const copyText = (e)=>{
        e.stopPropagation();
        if (navigator.clipboard && navigator.permissions) {
            navigator.clipboard.writeText(text).then(()=>{
                setOpen(true);
                setTipText("Copied");
                onSuccess && onSuccess();
            });
        } else if (document.queryCommandSupported("copy")) {
            const ele = document.createElement("textarea");
            ele.value = text;
            document.body.appendChild(ele);
            ele.select();
            document.execCommand("copy");
            document.body.removeChild(ele);
        }
        setTimeout(()=>{
            setOpenHover(false);
            setTimeout(()=>{
                setTipText("Click to copy");
            }, 500);
        }, 1000);
    };
    // Click to copy
    const hoverShow = (show)=>{
        setOpen(false);
        setOpenHover(show);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
        placement: "top",
        open: openHover,
        title: tipText,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            onClick: (e)=>copyText(e),
            onMouseEnter: ()=>hoverShow(true),
            onMouseLeave: ()=>hoverShow(false),
            className: " shrink-0",
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyClipboard);


/***/ }),

/***/ 7956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const H5Footer = ({ white = false })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `
      h-[8vw]  px-[5.3333vw] sm:px-0 flex items-center justify-center bottom-0 w-full transition-all duration-300
      sm:h-[60px]
      ${white ? "bg-[#FAFAFA] text-[#17171A]" : "bg-[#0A0917] text-[#646787]"}
    `,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full sm:max-w-[1200px] flex justify-between",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " text-[1.8667vw] font-fmedium sm:text-[14px]",
                    children: "Made by Inferer Labs"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " text-[1.8667vw] font-fmedium sm:text-[14px]",
                    children: "Thanks to Platon"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (H5Footer);


/***/ }),

/***/ 2404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ walletmodal_WalletModal)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/hooks/useAuth.tsx + 1 modules
var useAuth = __webpack_require__(5685);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./src/utils/web3React.ts
var web3React = __webpack_require__(9391);
;// CONCATENATED MODULE: ./src/components/Modal.tsx


const ModalWrap = ({ type = "normal", title, status = "pending", children, onDismiss })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `bg-[#111214] rounded-[3vw] sm:rounded-[24px] overflow-hidden w-[86.666vw] sm:w-[510px] sm:min-h-[292px] border-2  
      ${type === "primary" ? " border-[#111214]" : " border-[#404040]"}
    `,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `relative font-semibold flex items-center h-[13.3333vw] sm:h-[75px] pl-[30px]
        ${type === "primary" ? " text-[#ffffff] bg-[#111214] text-[24px]" : " text-white bg-[#161616] text-[4.8vw] sm:text-[32px]"}
      `,
                children: [
                    title,
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: " cursor-pointer absolute right-[5.333vw] top-[4.333vw] sm:right-[24px] sm:top-[24px]",
                        onClick: (e)=>{
                            onDismiss && onDismiss(e);
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "/images/close.png",
                            className: "w-[4.266vw] sm:w-[32px] sm:h-[32px]",
                            alt: ""
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "min-h-[214px]",
                children: children
            })
        ]
    });
};
/* harmony default export */ const Modal = (ModalWrap);

// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var useActiveWeb3React = __webpack_require__(9293);
;// CONCATENATED MODULE: ./src/components/walletmodal/WalletModal.tsx







const ConnectItem = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "h-[60px] bg-[#000000] rounded-[10px] w-full border border-[#000000] hover:bg-grad8",
        children: children
    });
};
const WalletModal = ({ onDismiss })=>{
    const [messageApi, contextHolder] = external_antd_.message.useMessage();
    const { login, logout } = (0,useAuth/* default */.Z)();
    const { account } = (0,useActiveWeb3React/* default */.Z)();
    const handleConnect = (type)=>{
        // @ts-ignore
        if (!window.ethereum) {
            messageApi.error("Please install Metamask wallet first");
            setTimeout(()=>{
                window.open("https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn", "_blank");
            }, 1500);
            return;
        }
        login(type);
    };
    (0,external_react_.useEffect)(()=>{
        if (account) {
            onDismiss();
        }
    }, [
        account,
        onDismiss
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx(Modal, {
        type: "primary",
        title: "Connect wallet",
        onDismiss: onDismiss,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col px-[26px] py-[24px] justify-center space-y-[14px]",
            children: [
                contextHolder,
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "text-white ",
                    children: "By connecting a wallet, you agree to Terms of Service and Privacy Policy."
                }),
                /*#__PURE__*/ jsx_runtime.jsx(ConnectItem, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center cursor-pointer px-5 h-full",
                        onClick: ()=>{
                            handleConnect(web3React/* ConnectorNames */.Mt.Injected);
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex items-center justify-center text-lg ",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/images/metamask.png",
                                    alt: "",
                                    className: "w-[40px] h-[40px]"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-[20px] font-medium text-white ml-4",
                                children: "Metamask"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(ConnectItem, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center cursor-pointer px-5 h-full",
                        onClick: ()=>{
                            handleConnect(web3React/* ConnectorNames */.Mt.WalletConnect);
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex items-center justify-center text-lg ",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/images/walletconnect.png",
                                    alt: "",
                                    className: "w-[40px] h-[40px]"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-[20px] font-medium text-white ml-4",
                                children: "Wallet Connect"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const walletmodal_WalletModal = (WalletModal);


/***/ }),

/***/ 9350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ hooks_useModal)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
// EXTERNAL MODULE: ./src/contexts/ModalContext/Provider.tsx
var Provider = __webpack_require__(784);
;// CONCATENATED MODULE: ./src/contexts/ModalContext/index.tsx


;// CONCATENATED MODULE: ./src/hooks/useModal.ts

// @ts-ignore


const useModal = (modal, closeOnOverlayClick = true, updateOnPropsChange = false, modalId = "defaultNodeId")=>{
    const { isOpen, nodeId, modalNode, setModalNode, onPresent, onDismiss, setCloseOnOverlayClick } = (0,external_react_.useContext)(Provider/* Context */._);
    const onPresentCallback = (0,external_react_.useCallback)(()=>{
        onPresent(modal, modalId);
    }, [
        modal,
        modalId,
        onPresent
    ]);
    (0,external_react_.useEffect)(()=>{
        if (updateOnPropsChange && isOpen && nodeId === modalId) {
            const modalProps = get_default()(modal, "props");
            const oldModalProps = get_default()(modalNode, "props");
            if (modalProps && oldModalProps && JSON.stringify(modalProps) !== JSON.stringify(oldModalProps)) {
                setModalNode(modal);
            }
        }
    }, [
        updateOnPropsChange,
        nodeId,
        modalId,
        isOpen,
        modal,
        modalNode,
        setModalNode
    ]);
    (0,external_react_.useEffect)(()=>{
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [
        closeOnOverlayClick,
        setCloseOnOverlayClick
    ]);
    return [
        onPresentCallback,
        onDismiss
    ];
};
/* harmony default export */ const hooks_useModal = (useModal);


/***/ }),

/***/ 4223:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _SubTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7340);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ChainTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8021);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__, _SubTitle__WEBPACK_IMPORTED_MODULE_2__, _ChainTab__WEBPACK_IMPORTED_MODULE_4__]);
([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__, _SubTitle__WEBPACK_IMPORTED_MODULE_2__, _ChainTab__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const AssetInfo = ({ dataList })=>{
    const [chainIds, setChainIds] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [currentData, setCurrentData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        let tempIds = [];
        dataList.reverse().forEach((data, index)=>{
            tempIds.push(data.chain_id);
            if (index === 0) {
                setCurrentData(data);
            }
        });
        setChainIds(tempIds);
    }, [
        dataList
    ]);
    const handleTabChange = (tab)=>{
        const tabData = dataList.find((data)=>data.chain_id === tab.id);
        if (tabData) {
            setCurrentData(tabData);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-[276px] w-[486px] relative border-bg rounded-[6px] overflow-hidden p-[1px]",
        children: [
            chainIds.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " absolute z-0 left-0 top-0 rounded-tl-[6px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChainTab__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    chainIds: chainIds,
                    onChange: handleTabChange
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full h-full bg-white rounded-[5px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "pt-[93px] px-[47px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between items-center w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[160px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* .SubTitle23 */ .Uw, {
                                        text: "Send",
                                        number: currentData.nft_mint_txcount || "0"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                    src: "/images/search/line5.png",
                                    className: "h-[36px]"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[160px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* .SubTitle23 */ .Uw, {
                                        text: "Mint",
                                        number: currentData.nft_send_txcount || "0"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between items-center w-full py-[27px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                    src: "/images/search/line6.png",
                                    className: "w-[122px]"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                    src: "/images/search/line6.png",
                                    className: "w-[122px]"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between items-center w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[160px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* .SubTitle23 */ .Uw, {
                                        text: "Receive",
                                        number: currentData.nft_receive_txcount || "0"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                    src: "/images/search/line5.png",
                                    className: "h-[36px]"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[160px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* .SubTitle23 */ .Uw, {
                                        text: "Burn",
                                        number: currentData.nft_burn_txcount || "0"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssetInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4546:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ui: () => (/* binding */ BasicNftItem),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SubTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _SubTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7340);
/* harmony import */ var _components_CopyClipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3347);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__, _SubTitle__WEBPACK_IMPORTED_MODULE_2__]);
([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__, _SubTitle__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const SubTitle = ({ text })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-[#3F4664] font-dmedium text-[20px]",
        children: text
    });
};
const BasicNftItem = ({ title, icon, data })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-[512px] xl1:w-[550px] rounded-lg overflow-hidden flex flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center h-[60px] basic-nft-gradient text-[#161F31] text-[26px] font-dbold px-5 w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                        src: icon,
                        className: "w-[22px] mr-[6px]"
                    }),
                    title
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "basic-nft-gradient2 px-[40px] py-[20px] w-[510px] xl1:w-[548px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-center items-baseline",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-[#ED7FDD] text-[64px] font-dbold",
                                children: data.count
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-[rgba(63,70,100,0.60)] font-dmedium text-[16px] ml-2",
                                children: "contacts"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " font-dnormal text-[16px] text-[rgba(63,70,100,0.60)] mt-[66px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-[10px]",
                                children: "(Showing top5)"
                            }),
                            data.interactedAddress.map((item)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center mb-[12px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: item.interact_address
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CopyClipboard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            text: item.interact_address,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                                src: "/images/search/copy.png",
                                                className: "w-4 h-4 ml-1 shrink-0 cursor-pointer"
                                            })
                                        })
                                    ]
                                }, item.interact_address);
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const BasicItem = ({ title, icon, data })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-[512px] xl1:w-[550px] rounded-lg overflow-hidden flex flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center h-[60px] text-[#161F31] text-[26px] font-dbold px-5 basic-title w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                        src: icon,
                        className: "w-[22px] mr-[6px]"
                    }),
                    title
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "px-[10px] py-[25px] basice-wrap w-[510px] xl1:w-[548px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-wrap min-h-[260px]",
                        children: [
                            data.nftAsset && data.nftAsset.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full flex justify-center py-[3.1rem]",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                            src: "/images/search/nodata.png",
                                            className: "w-[201px] h-[140px]"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-[rgba(22,31,49,0.60)] font-dnormal text-[16px] mt-4 text-center",
                                            children: "No result"
                                        })
                                    ]
                                })
                            }),
                            data.nftAsset && data.nftAsset.slice(0, 5).map((nft, index)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "py-[23px] px-[24px] xl1:px-[32px]",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " relative flex justify-center flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* .LazyImage3 */ .z3, {
                                                src: nft.image,
                                                className: "w-[60px] h-[60px] rounded-[9px]"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                                                placement: "top",
                                                title: nft.name,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: " cursor-pointer text-[rgba(63,70,100,0.90)] text-[16px] font-dnormal mt-[10px] max-w-[110px] line-clamp-1",
                                                    children: nft.name
                                                })
                                            })
                                        ]
                                    })
                                }, nft.image + index);
                            }),
                            data.nftAsset && data.nftAsset.length > 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "py-[23px] px-[32px]",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-[60px] h-[60px] flex justify-center items-center text-[#161F31] font-dmedium text-[20px]",
                                    children: [
                                        "+",
                                        data.nftAsset.length - 5
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-[25px] pb-[30px] px-[24px] xl1:px-[32px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                            src: "/images/search/line2.png",
                            className: "w-[466px] h-[1px]"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " flex justify-between items-center px-[64px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col flex-1",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubTitle, {
                                                    text: "Send"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* .Text2 */ .OA, {
                                                    text: data.send || "0"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubTitle, {
                                                    text: "Receive"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* .Text2 */ .OA, {
                                                    text: data.receive || "0"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-[45px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                    src: "/images/search/line2.png",
                                    className: "w-[1px] h-[36px]"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col flex-1",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubTitle, {
                                                    text: "Mint"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* .Text2 */ .OA, {
                                                    text: data.mint || "0"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubTitle, {
                                                    text: "Burn"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* .Text2 */ .OA, {
                                                    text: data.burn || "0"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasicItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8021:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export tabsConfig */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__]);
_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const tabsConfig = [
    {
        id: "1",
        chainName: "ETH",
        icon: "/images/search/eth2.png",
        iconActive: "/images/search/eth2_active.png"
    },
    {
        id: "137",
        chainName: "Polygon",
        icon: "/images/search/polygon2.png",
        iconActive: "/images/search/polygon2_active.png"
    }
];
const TabItem = ({ tabData, current, onClick })=>{
    const isActive = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return current.id === tabData.id;
    }, [
        tabData,
        current
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-[150px] h-[36px] flex justify-center items-center cursor-pointer gradient-bg-tab relative",
        onClick: (e)=>{
            e.stopPropagation();
            onClick && onClick(tabData);
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* .LazyImage2 */ .$U, {
                src: isActive ? tabData.iconActive : tabData.icon,
                className: "w-[20px] h-[20px] mr-[4px]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: ` font-dnormal text-[16px] ${isActive ? "text-[#161F31]" : "text-[rgba(22,31,49,0.6)]"}`,
                children: tabData.chainName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " absolute w-full bottom-0 left-0 flex justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: ` transition-all duration-300 h-[2px] tab-tip ${isActive ? "w-[54px]" : "w-[0px]"}`
                })
            })
        ]
    });
};
const ChainTab = ({ chainIds, onChange })=>{
    const [tabs, setTabs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let tempList = [];
        tabsConfig.forEach((tab)=>{
            const tabInfo = chainIds.find((id)=>tab.id === id);
            if (tabInfo) {
                tempList.push(tab);
            }
        });
        setTabs(tempList);
        setCurrent(tempList[0]);
    }, [
        chainIds
    ]);
    const handleChange = (tab)=>{
        setCurrent(tab);
        onChange && onChange(tab);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: " flex items-center",
        children: tabs.map((tab)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabItem, {
                tabData: tab,
                current: current,
                onClick: handleChange
            }, tab.id);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChainTab);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5469:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ CollectIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__]);
_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CollectPng = "/images/search/collect.png";
const Collect2Png = "/images/search/shoucang_active.png";
const CollectIcon = ({ value, onClick })=>{
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setActive(value);
    }, [
        value
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "icon-wrap cursor-pointer shrink-0",
        onClick: (e)=>{
            e.stopPropagation();
            onClick && onClick();
        },
        onMouseEnter: ()=>setActive(value || true),
        onMouseLeave: ()=>setActive(value || false),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* .LazyImage2 */ .$U, {
            className: "w-[20px] h-[20px]",
            src: active ? Collect2Png : CollectPng
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5032:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export LabelDataItem */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _SubTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7340);
/* harmony import */ var _RadarChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3257);
/* harmony import */ var _RadarChart1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7435);
/* harmony import */ var _RadarChart2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(537);
/* harmony import */ var _RadarChart3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7822);
/* harmony import */ var _RadarChart4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7694);
/* harmony import */ var _RadarChart5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6359);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__, _SubTitle__WEBPACK_IMPORTED_MODULE_2__, _RadarChart__WEBPACK_IMPORTED_MODULE_3__, _RadarChart1__WEBPACK_IMPORTED_MODULE_4__, _RadarChart2__WEBPACK_IMPORTED_MODULE_5__, _RadarChart3__WEBPACK_IMPORTED_MODULE_6__, _RadarChart4__WEBPACK_IMPORTED_MODULE_7__, _RadarChart5__WEBPACK_IMPORTED_MODULE_8__]);
([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__, _SubTitle__WEBPACK_IMPORTED_MODULE_2__, _RadarChart__WEBPACK_IMPORTED_MODULE_3__, _RadarChart1__WEBPACK_IMPORTED_MODULE_4__, _RadarChart2__WEBPACK_IMPORTED_MODULE_5__, _RadarChart3__WEBPACK_IMPORTED_MODULE_6__, _RadarChart4__WEBPACK_IMPORTED_MODULE_7__, _RadarChart5__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const LabelDataItem = ({ index, itemData })=>{
    let newIndex = index - Math.floor(index / 7) * 6;
    if (newIndex === 7) {
        newIndex = 1;
    }
    const bgColor = `label-data-bg-${newIndex}`;
    const tipIcon = `/images/search/label-${newIndex}.png`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: ` relative w-[486px] h-[337px] text-[#3F4664] rounded-lg px-[1px] ${bgColor}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-white w-full h-[335px] rounded-[7px] relative top-[1px]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                    src: tipIcon,
                    className: "w-[24px] h-[24px] absolute left-[22px] -top-[11px]"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-[#3F4664] text-[20px] font-dbold text-center pt-8",
                    children: itemData.label_show_name || itemData.label_show_name
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-10 mt-[30px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                            src: "/images/search/category.png",
                                            className: "w-5 h-5"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "pl-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " font-dmedium text-[20px]",
                                                children: "Category"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pl-[36px] mt-[6px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex items-center",
                                        children: itemData.category_path_arr.map((item, index)=>{
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-[rgba(63,70,100,0.60)] text-[16px] font-dnormal capitalize",
                                                        children: item
                                                    }),
                                                    index < itemData.category_path_arr.length - 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                                        src: "/images/search/next.png",
                                                        className: "w-[5px] h-[10px] mx-4"
                                                    })
                                                ]
                                            }, item);
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-[20px]",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                            src: "/images/search/degree.png",
                                            className: "w-5 h-5"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "pl-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " font-dmedium text-[20px]",
                                                children: "Degree"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pl-[36px] mt-[14px] flex",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " relative",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-[6px] w-[200px] bg-[rgba(63,70,100,0.6)] rounded-[6px]"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-[14px] h-[14px] bg-[rgba(63,70,100,0.6)] border-2 border-white absolute left-0 z-10 rounded-full -top-[4px]",
                                                style: {
                                                    left: `${itemData.label_degree}%`
                                                }
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-[20px]",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                            src: "/images/search/info.png",
                                            className: "w-5 h-5"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "pl-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " font-dmedium text-[20px]",
                                                children: "Info"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pl-[36px] mt-[6px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-[rgba(63,70,100,0.60)] text-[16px] font-dnormal leading-normal",
                                            children: itemData.label_description
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const LabelData = ({ data })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-[150px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
                text: "Label"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-[90px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* .SubTitle2 */ .m_, {
                    text: "Avatar",
                    icon: "/images/search/label.png"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-center py-[50px]",
                children: [
                    data.length === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RadarChart1__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        data: data
                    }),
                    data.length === 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RadarChart2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        data: data
                    }),
                    data.length === 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RadarChart3__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        data: data
                    }),
                    data.length === 4 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RadarChart4__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        data: data
                    }),
                    data.length === 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RadarChart5__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        data: data
                    }),
                    data.length >= 6 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RadarChart__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        data: data
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-[90px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* .SubTitle2 */ .m_, {
                    text: "Profile",
                    icon: "/images/search/label.png"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-[68px] grid grid-cols-2 gap-x-[168px]",
                children: data.map((item, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-[118px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LabelDataItem, {
                            index: index + 1,
                            itemData: item
                        })
                    }, item.label_id);
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelData);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2028:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _hooks_useModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9350);
/* harmony import */ var _components_walletmodal_WalletModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2404);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3067);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9293);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CollectIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5469);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_state__WEBPACK_IMPORTED_MODULE_3__, _CollectIcon__WEBPACK_IMPORTED_MODULE_7__]);
([_state__WEBPACK_IMPORTED_MODULE_3__, _CollectIcon__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const LevelScore = ({ levelScore, identityInfo })=>{
    const [messageApi, contextHolder] = antd__WEBPACK_IMPORTED_MODULE_8__.message.useMessage();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { account } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const [onPrresent, onDimiss] = (0,_hooks_useModal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_walletmodal_WalletModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}));
    const userId = (0,_state__WEBPACK_IMPORTED_MODULE_3__/* .useUserStore */ .L)((state)=>state.userId);
    const collectTicket = (0,_state__WEBPACK_IMPORTED_MODULE_3__/* .useUserStore */ .L)((state)=>state.collectTicket);
    const cancelCollectTicket = (0,_state__WEBPACK_IMPORTED_MODULE_3__/* .useUserStore */ .L)((state)=>state.cancelCollectTicket);
    const getTicketInfo = (0,_state__WEBPACK_IMPORTED_MODULE_3__/* .useUserStore */ .L)((state)=>state.getTicketInfo);
    const [isFav, setisFav] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [currentId, setCurrentId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const [ticketInfo, setTicketInfo] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (account) {
            onDimiss();
        }
    }, [
        onDimiss,
        account
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (router.query.address && router.query.address[0] && userId) {
            getTicketInfo({
                user_id: userId,
                collect_address: router.query.address[0],
                chainid: "1"
            }).then((res)=>{
                if (res.status === 200 && res.data.id) {
                    setTicketInfo(res.data);
                    setCurrentId(res.data.id);
                    setisFav(true);
                }
            });
        }
    }, [
        userId,
        router.query.address,
        getTicketInfo
    ]);
    const handleAction = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async (action)=>{
        if (!account) {
            onPrresent();
            return;
        }
        if (action === "collect" && router.query.address) {
            const res = await collectTicket({
                user_id: userId,
                collect_address: router.query.address[0],
                chainid: "1",
                ticket_id: "",
                ticket_level: identityInfo.level || "Poor",
                ticket: JSON.stringify(identityInfo)
            });
            if (res.status === 200 && res.data.id > -1) {
                setisFav(!isFav);
                setCurrentId(res.data.ticketId);
                if (!isFav) {
                    messageApi.success("Collected");
                } else {
                    messageApi.success("Canceled");
                }
            }
        }
        if (action === "cancelCollect" && router.query.address) {
            const res = await cancelCollectTicket({
                user_id: userId,
                collect_address: router.query.address[0],
                chainid: "1",
                ticket_id: ticketInfo.ticket_id || currentId
            });
            if (res.status === 200 && res.data.id > -1) {
                setisFav(false);
                setCurrentId("");
                setTicketInfo({});
                messageApi.success("Canceled");
            }
        }
    }, [
        onPrresent,
        account,
        userId,
        router.query.address,
        identityInfo,
        cancelCollectTicket,
        collectTicket,
        currentId,
        isFav,
        messageApi,
        ticketInfo
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-center",
        children: [
            contextHolder,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "gradient1 font-dbold text-[180px] mt-[110px] leading-normal relative",
                children: [
                    Number(levelScore).toFixed(1),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[20px] h-[20px] absolute bottom-[64px] -right-[30px] cursor-pointer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CollectIcon__WEBPACK_IMPORTED_MODULE_7__/* .CollectIcon */ .J, {
                            value: isFav,
                            onClick: ()=>{
                                handleAction(!isFav ? "collect" : "cancelCollect");
                            }
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LevelScore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3257:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9201);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__]);
_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




var option = {
    legend: {},
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
                color: "rgba(85, 182, 244, 0.6)"
            }
        },
        indicator: [
            {
                name: "Sales",
                max: 100
            },
            {
                name: "Administration",
                max: 100
            },
            {
                name: "Information Technology",
                max: 100
            },
            {
                name: "Customer Support",
                max: 100
            },
            {
                name: "Development",
                max: 100
            },
            {
                name: "Marketing",
                max: 100
            }
        ]
    },
    series: []
};
var option2 = {
    legend: {
        show: false
    },
    radar: {
        // @ts-ignore
        indicator: [
            {
                name: "Sales",
                max: 100
            },
            {
                name: "Administration",
                max: 100
            },
            {
                name: "Information Technology",
                max: 100
            },
            {
                name: "Customer Support",
                max: 100
            },
            {
                name: "Development",
                max: 100
            },
            {
                name: "Marketing",
                max: 100
            }
        ],
        axisName: {
            show: false
        },
        axisLine: {
            show: false
        },
        center: [
            "50%",
            "50%"
        ],
        // radius: 230,
        radius: [
            130,
            230
        ],
        splitNumber: 2,
        splitArea: {
            areaStyle: {
                color: "#fff"
            }
        },
        splitLine: {
            lineStyle: {
                color: "rgba(85, 182, 244, 0.3)"
            }
        }
    },
    series: [
        {
            name: "Budget vs spending",
            type: "radar",
            data: [
                {
                    value: [],
                    name: "",
                    symbol: "none",
                    lineStyle: {
                        width: 1.5,
                        color: "#55B6F4"
                    },
                    areaStyle: {
                        color: "rgba(85, 182, 244, 0.19)"
                    }
                }
            ]
        }
    ]
};
const RadarChart = ({ data })=>{
    const [labelList, setLabelList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (data.length > 0) {
            const newData = data.sort((a, b)=>a.label_relevance - b.label_relevance).slice(-6);
            const valueList = newData.map((item)=>{
                return item.label_relevance;
            });
            var chartDom = document.getElementById("radarchart");
            if (chartDom) {
                var myChart = echarts__WEBPACK_IMPORTED_MODULE_2__.init(chartDom);
                option2.series[0].data[0].value = valueList;
                myChart.setOption(option2);
            }
            var chartDom2 = document.getElementById("radarchart2");
            if (chartDom2) {
                var myChart2 = echarts__WEBPACK_IMPORTED_MODULE_2__.init(chartDom2);
                myChart2.setOption(option);
            }
            const tempList = newData.map((item)=>{
                return {
                    label: item.label_show_name,
                    labelWidth: item.label_show_name.length * 15 + 48
                };
            });
            setLabelList(tempList);
        }
    }, [
        data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "radar-chart-wrap relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "radarchart",
                className: "w-[600px] h-[600px]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "radarchart2",
                className: "w-[600px] h-[600px] absolute left-0 top-0"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " absolute left-[50%] top-[50%] -ml-[81px] -mt-[94px] z-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                        src: "/images/search/pol6.png",
                        className: "w-[161px]"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                        src: "/images/search/pol_user2.png",
                        className: "w-[77px] absolute left-[42px] top-[51px]"
                    })
                ]
            }),
            labelList.map((item, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `radar-label radar-label-${index + 1}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `label-circle label-circle-${index + 1}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: ` font-fbold text-[24px] label-bg label-bg-${index + 1}`,
                            style: {
                                left: index === 0 || index === 3 ? "50%" : "none",
                                marginLeft: index === 0 || index === 3 ? -`${item.labelWidth / 2}` : "none",
                                width: item.labelWidth
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "label-text",
                                children: item.label
                            })
                        })
                    ]
                }, item.label);
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadarChart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7435:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__]);
_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const RadarChart1 = ({ data })=>{
    const [labelList, setLabelList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (data.length > 0) {}
    }, [
        data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "radar-chart-wrap relative mt-[150px] flex items-center mb-[100px]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " relative w-[340px] h-[340px] bg-[rgba(110,98,255,0.10)] border border-[rgba(110,98,255,0.30)] rounded-full flex justify-center items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                        src: "/images/search/pol7.png",
                        className: "w-[158px]"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                        src: "/images/search/pol_user2.png",
                        className: "w-[77px] absolute left-[131px] top-[124px]"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "label-num-1 w-[258px] h-[12px]"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: ` font-fbold text-[24px] label-num-1-bg`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "label-text",
                            children: data[0].label_show_name
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadarChart1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 537:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__]);
_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const RadarChart2 = ({ data })=>{
    const [labelList, setLabelList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (data.length > 0) {}
    }, [
        data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "radar-chart-wrap relative mt-[150px] flex items-center mb-[100px]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " relative w-[340px] h-[340px] bg-[rgba(110,98,255,0.10)] border border-[rgba(110,98,255,0.30)] rounded-full flex justify-center items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                        src: "/images/search/pol7.png",
                        className: "w-[158px]"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                        src: "/images/search/pol_user2.png",
                        className: "w-[77px] absolute left-[131px] top-[124px]"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "347",
                                height: "144",
                                viewBox: "0 0 347 144",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M0 138H188.5V6H347",
                                        stroke: "url(#paint0_linear_1982_1562)",
                                        strokeWidth: "12"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                            id: "paint0_linear_1982_1562",
                                            x1: "4.99999",
                                            y1: "134",
                                            x2: "347",
                                            y2: "138",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                    offset: "0.00287353",
                                                    stopColor: "#E3E1FF"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                    offset: "0.44502",
                                                    stopColor: "#E3E1FF"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                    offset: "1",
                                                    stopColor: "#FEF0F7"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "347",
                                height: "144",
                                viewBox: "0 0 347 144",
                                fill: "none",
                                className: " relative -top-[12px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M0 6H188.5V138H347",
                                        stroke: "url(#paint0_linear_1982_1563)",
                                        strokeWidth: "12"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                            id: "paint0_linear_1982_1563",
                                            x1: "4.99999",
                                            y1: "9.99999",
                                            x2: "347",
                                            y2: "6",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                    offset: "0.00287353",
                                                    stopColor: "#E3E1FF"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                    offset: "0.44502",
                                                    stopColor: "#E3E1FF"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                    offset: "1",
                                                    stopColor: "#ECF0FF"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "h-[340px] relative -top-[6px] flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: ` font-fbold text-[24px] label-num-1-bg`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "label-text",
                                        children: data[0].label_show_name
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " flex",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `font-fbold text-[24px] label-num-1-bg label-num-2-bg`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "label-text",
                                        children: data[1].label_show_name
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadarChart2);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7822:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9201);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__]);
_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




var option = {
    legend: {},
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
                color: "rgba(85, 182, 244, 0.3)"
            }
        },
        indicator: [
            {
                name: "Sales",
                max: 100
            },
            {
                name: "Administration",
                max: 100
            },
            {
                name: "Information Technology",
                max: 100
            }
        ]
    },
    series: []
};
var option2 = {
    legend: {
        show: false
    },
    radar: {
        // @ts-ignore
        indicator: [
            {
                name: "Sales",
                max: 100
            },
            {
                name: "Administration",
                max: 100
            },
            {
                name: "Information Technology",
                max: 100
            }
        ],
        axisName: {
            show: false
        },
        axisLine: {
            show: false
        },
        center: [
            "50%",
            "50%"
        ],
        radius: [
            130,
            230
        ],
        splitArea: {
            areaStyle: {
                color: "#fff"
            }
        },
        splitLine: {
            lineStyle: {
                color: "rgba(85, 182, 244, 0.3)"
            }
        },
        splitNumber: 2
    },
    series: [
        {
            name: "Budget vs spending",
            type: "radar",
            data: [
                {
                    value: [],
                    name: "",
                    symbol: "none",
                    lineStyle: {
                        width: 1.5,
                        color: "#55B6F4"
                    },
                    areaStyle: {
                        color: "rgba(85, 182, 244, 0.19)"
                    }
                }
            ]
        }
    ]
};
const RadarChart3 = ({ data })=>{
    const [labelList, setLabelList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (data.length > 0) {
            const valueList = data.map((item)=>{
                return item.label_relevance;
            });
            var chartDom = document.getElementById("radarchart");
            if (chartDom) {
                var myChart = echarts__WEBPACK_IMPORTED_MODULE_2__.init(chartDom);
                option2.series[0].data[0].value = valueList;
                myChart.setOption(option2);
            }
            var chartDom2 = document.getElementById("radarchart2");
            if (chartDom2) {
                var myChart2 = echarts__WEBPACK_IMPORTED_MODULE_2__.init(chartDom2);
                myChart2.setOption(option);
            }
            const tempList = data.map((item)=>{
                return {
                    label: item.label_show_name,
                    labelWidth: item.label_show_name.length * 15 + 48
                };
            });
            setLabelList(tempList);
        }
    }, [
        data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "radar-chart-wrap relative flex justify-center items-center radar-label-num3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "radarchart",
                className: "w-[600px] h-[600px]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "radarchart2",
                className: "w-[600px] h-[600px] absolute left-0 top-0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-[90px] h-[90px] bg-white rounded-full absolute left-[50%] top-[50%] -ml-[45px] -mt-[45px] z-10 flex justify-center items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                    src: "/images/search/pol_user2.png",
                    className: "w-[52px]"
                })
            }),
            labelList.map((item, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `radar-label radar-label-${index + 1}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `label-circle label-circle-${index + 1}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: ` font-fbold text-[24px] label-bg label-bg-${index + 1}`,
                            style: {
                                left: index === 0 || index === 3 ? "50%" : "none",
                                marginLeft: index === 0 || index === 3 ? -`${item.labelWidth / 2}` : "none",
                                width: item.labelWidth
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "label-text",
                                children: item.label
                            })
                        })
                    ]
                }, item.label);
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadarChart3);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9201);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__]);
_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




var option = {
    legend: {},
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
                color: "rgba(85, 182, 244, 0.3)"
            }
        },
        indicator: [
            {
                name: "Sales",
                max: 100
            },
            {
                name: "Sales1",
                max: 100
            },
            {
                name: "Administration",
                max: 100
            },
            {
                name: "Information Technology",
                max: 100
            }
        ]
    },
    series: []
};
var option2 = {
    legend: {
        show: false
    },
    radar: {
        // @ts-ignore
        indicator: [
            {
                name: "Sales",
                max: 100
            },
            {
                name: "Sales1",
                max: 100
            },
            {
                name: "Administration",
                max: 100
            },
            {
                name: "Information Technology",
                max: 100
            }
        ],
        axisName: {
            show: false
        },
        axisLine: {
            show: false
        },
        center: [
            "50%",
            "50%"
        ],
        radius: [
            130,
            230
        ],
        splitArea: {
            areaStyle: {
                color: "#fff"
            }
        },
        splitLine: {
            lineStyle: {
                color: "rgba(85, 182, 244, 0.3)"
            }
        },
        splitNumber: 2
    },
    series: [
        {
            name: "Budget vs spending",
            type: "radar",
            data: [
                {
                    value: [],
                    name: "",
                    symbol: "none",
                    lineStyle: {
                        width: 1.5,
                        color: "#55B6F4"
                    },
                    areaStyle: {
                        color: "rgba(85, 182, 244, 0.19)"
                    }
                }
            ]
        }
    ]
};
const RadarChart4 = ({ data })=>{
    const [labelList, setLabelList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (data.length > 0) {
            const valueList = data.map((item)=>{
                return item.label_degree;
            });
            var chartDom = document.getElementById("radarchart");
            if (chartDom) {
                var myChart = echarts__WEBPACK_IMPORTED_MODULE_2__.init(chartDom);
                option2.series[0].data[0].value = valueList;
                myChart.setOption(option2);
            }
            var chartDom2 = document.getElementById("radarchart2");
            if (chartDom2) {
                var myChart2 = echarts__WEBPACK_IMPORTED_MODULE_2__.init(chartDom2);
                myChart2.setOption(option);
            }
            const tempList = data.map((item)=>{
                return {
                    label: item.label_show_name,
                    labelWidth: item.label_show_name.length * 15 + 48
                };
            });
            setLabelList(tempList);
        }
    }, [
        data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "radar-chart-wrap relative flex justify-center items-center radar-label-num4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "radarchart",
                className: "w-[600px] h-[600px]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "radarchart2",
                className: "w-[600px] h-[600px] absolute left-0 top-0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-[90px] h-[90px] bg-white rounded-full absolute left-[50%] top-[50%] -ml-[45px] -mt-[45px] z-10 flex justify-center items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                    src: "/images/search/pol_user2.png",
                    className: "w-[52px]"
                })
            }),
            labelList.map((item, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `radar-label radar-label-${index + 1}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `label-circle label-circle-${index + 1}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: ` font-fbold text-[24px] label-bg label-bg-${index + 1}`,
                            style: {
                                left: index === 0 || index === 2 ? "50%" : "none",
                                marginLeft: index === 0 || index === 2 ? -`${item.labelWidth / 2}` : "none",
                                width: item.labelWidth
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "label-text",
                                children: item.label
                            })
                        })
                    ]
                }, item.label);
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadarChart4);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6359:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9201);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__]);
_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




var option = {
    legend: {},
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
                color: "rgba(85, 182, 244, 0.6)"
            }
        },
        indicator: [
            {
                name: "Sales",
                max: 100
            },
            {
                name: "Administration",
                max: 100
            },
            {
                name: "Information Technology",
                max: 100
            },
            {
                name: "Customer Support",
                max: 100
            },
            {
                name: "Development",
                max: 100
            }
        ]
    },
    series: []
};
var option2 = {
    legend: {
        show: false
    },
    radar: {
        // @ts-ignore
        indicator: [
            {
                name: "Sales",
                max: 100
            },
            {
                name: "Administration",
                max: 100
            },
            {
                name: "Information Technology",
                max: 100
            },
            {
                name: "Customer Support",
                max: 100
            },
            {
                name: "Development",
                max: 100
            }
        ],
        axisName: {
            show: false
        },
        axisLine: {
            show: false
        },
        center: [
            "50%",
            "50%"
        ],
        splitArea: {
            areaStyle: {
                color: "#fff"
            }
        },
        splitLine: {
            lineStyle: {
                color: "rgba(85, 182, 244, 0.3)"
            }
        },
        radius: [
            130,
            230
        ],
        splitNumber: 2
    },
    series: [
        {
            name: "Budget vs spending",
            type: "radar",
            data: [
                {
                    value: [],
                    name: "",
                    symbol: "none",
                    lineStyle: {
                        width: 1.5,
                        color: "#55B6F4"
                    },
                    areaStyle: {
                        color: "rgba(85, 182, 244, 0.19)"
                    }
                }
            ]
        }
    ]
};
const RadarChart = ({ data })=>{
    const [labelList, setLabelList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (data.length > 0) {
            const valueList = data.map((item)=>{
                return item.label_degree;
            });
            var chartDom = document.getElementById("radarchart");
            if (chartDom) {
                var myChart = echarts__WEBPACK_IMPORTED_MODULE_2__.init(chartDom);
                option2.series[0].data[0].value = valueList;
                myChart.setOption(option2);
            }
            var chartDom2 = document.getElementById("radarchart2");
            if (chartDom2) {
                var myChart2 = echarts__WEBPACK_IMPORTED_MODULE_2__.init(chartDom2);
                myChart2.setOption(option);
            }
            const tempList = data.map((item)=>{
                return {
                    label: item.label_show_name,
                    labelWidth: item.label_show_name.length * 15 + 48
                };
            });
            setLabelList(tempList);
        }
    }, [
        data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "radar-chart-wrap relative radar-label-num5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "radarchart",
                className: "w-[600px] h-[600px]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "radarchart2",
                className: "w-[600px] h-[600px] absolute left-0 top-0"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " absolute left-[50%] top-[50%] -ml-[77px] -mt-[79px] z-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "152",
                        height: "144",
                        viewBox: "0 0 152 144",
                        fill: "none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M76.0259 0.654297L151.298 55.3427L122.547 143.83L29.505 143.83L0.753563 55.3427L76.0259 0.654297Z",
                            fill: "white"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                        src: "/images/search/pol_user2.png",
                        className: "w-[77px] absolute left-[38px] top-[38px]"
                    })
                ]
            }),
            labelList.map((item, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `radar-label radar-label-${index + 1}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `label-circle label-circle-${index + 1}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: ` font-fbold text-[24px] label-bg label-bg-${index + 1}`,
                            style: {
                                left: index === 0 ? "50%" : "none",
                                marginLeft: index === 0 ? -`${item.labelWidth / 2}` : "none",
                                width: item.labelWidth
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "label-text",
                                children: item.label
                            })
                        })
                    ]
                }, item.label);
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadarChart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OA: () => (/* binding */ Text2),
/* harmony export */   Uw: () => (/* binding */ SubTitle23),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   m_: () => (/* binding */ SubTitle2),
/* harmony export */   qo: () => (/* binding */ SubTitle22)
/* harmony export */ });
/* unused harmony exports SubTitle, SubTitle3, Text1 */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__]);
_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const SubTitle = ({ text })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: " font-dbold text-[#161F31] text-[64px]",
        children: text
    });
};
const SubTitle2 = ({ text, icon })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                src: icon,
                className: "w-5 h-5 mr-[10px]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " font-dbold text-[#161F31] text-[16px]",
                children: text
            })
        ]
    });
};
const SubTitle22 = ({ text, icon })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                src: icon,
                className: "w-6 h-6 mr-[6px]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " font-dbold text-[#3F4664] text-[18px]",
                children: text
            })
        ]
    });
};
const SubTitle23 = ({ text, number })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex w-full justify-between items-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " font-dmedium text-[#3F4664] text-[20px]",
                children: [
                    text,
                    " "
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " font-dbold text-[#3F4664] text-[24px] asset-text",
                children: number
            })
        ]
    });
};
const SubTitle3 = ({ text })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: " text-[#161F31] font-dbold text-[20px]",
        children: text
    });
};
const Text1 = ({ text, className, children })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: ` text-[#346DFF] font-dbold text-[16px] ${className}`,
        children: children || text
    });
};
const Text2 = ({ text, className, children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: ` asset-text font-dbold text-[16px] ${className}`,
        children: children || text
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubTitle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _SubTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7340);
/* harmony import */ var _ChainTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8021);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__, _SubTitle__WEBPACK_IMPORTED_MODULE_2__, _ChainTab__WEBPACK_IMPORTED_MODULE_3__]);
([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__, _SubTitle__WEBPACK_IMPORTED_MODULE_2__, _ChainTab__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const TicketInfo = ({ dataList })=>{
    const [chainIds, setChainIds] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const [currentData, setCurrentData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        let tempIds = [];
        dataList.forEach((data, index)=>{
            tempIds.push(data.chain_id);
            if (data.chain_id === "1") {
                setCurrentData(data);
            }
        });
        setChainIds(tempIds);
    }, [
        dataList
    ]);
    const handleTabChange = (tab)=>{
        const tabData = dataList.find((data)=>data.chain_id === tab.id);
        if (tabData) {
            setCurrentData(tabData);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-[364px] relative border-bg rounded-[6px] overflow-hidden p-[1px]",
        children: [
            chainIds.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " absolute z-0 left-0 top-0 rounded-tl-[6px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChainTab__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    chainIds: chainIds,
                    onChange: handleTabChange
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-full flex justify-between bg-white rounded-[5px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "pl-[48px] pt-[79px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-[230px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* .SubTitle22 */ .qo, {
                                                text: "Birth on",
                                                icon: "/images/search/id.png"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-[rgba(63,70,100,0.6)] font-dnormal text-base mt-[6px]",
                                                children: currentData.tx_firstLabel
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-[230px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* .SubTitle22 */ .qo, {
                                                text: "Active since",
                                                icon: "/images/search/link.png"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-[rgba(63,70,100,0.6)] font-dnormal text-base mt-[6px]",
                                                children: currentData.tx_lastLabel
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center mt-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-[230px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* .SubTitle22 */ .qo, {
                                                text: "Min Tx Value",
                                                icon: "/images/search/info.png"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-[rgba(63,70,100,0.6)] font-dnormal text-base mt-[6px]",
                                                children: [
                                                    Number(currentData.value_min || "0").toFixed(2),
                                                    " ",
                                                    currentData.coinName
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-[230px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* .SubTitle22 */ .qo, {
                                                text: "Max Tx Value",
                                                icon: "/images/search/info.png"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-[rgba(63,70,100,0.6)] font-dnormal text-base mt-[6px]",
                                                children: [
                                                    Number(currentData.value_max || "0").toFixed(2),
                                                    " ",
                                                    currentData.coinName
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center mt-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-[230px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* .SubTitle22 */ .qo, {
                                                text: "P80 Tx Value",
                                                icon: "/images/search/info.png"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-[rgba(63,70,100,0.6)] font-dnormal text-base mt-[6px]",
                                                children: [
                                                    Number(currentData.value_p80 || "0").toFixed(2),
                                                    " ",
                                                    currentData.coinName
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-[230px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* .SubTitle22 */ .qo, {
                                                text: "Median(P50) Tx Value",
                                                icon: "/images/search/info.png"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-[rgba(63,70,100,0.6)] font-dnormal text-base mt-[6px]",
                                                children: [
                                                    Number(currentData.value_p50 || "0").toFixed(2),
                                                    " ",
                                                    currentData.coinName
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-[620px] pr-[48px] flex flex-col justify-center h-full bg-[url('/images/search/info_bg.png')]",
                        style: {
                            backgroundSize: "auto 100%"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " relative",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-end items-baseline",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: " text-[103px] font-dbold text-grade1 leading-[110%]",
                                                    children: Number(currentData.balance || "0").toFixed(2)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: " text-[40px] font-dbold text-grade1 ml-[10px]",
                                                    children: currentData.coinName
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                            src: "/images/search/line4.png",
                                            className: " w-full absolute right-0 -bottom-[8px]"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " flex justify-end  mt-2 mb-[31px]"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " flex justify-end",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-grade1 pl-[26px] pr-[12px] h-[68px] flex justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: " text-[34px] font-dbold text-grade1 leading-[110%]",
                                            children: currentData.txcount || "0"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: " text-[26px] font-dmedium text-grade1 ml-[10px] relative -bottom-[2px]",
                                            children: "txs"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicketInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_TxInfo)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "echarts"
var external_echarts_ = __webpack_require__(9201);
;// CONCATENATED MODULE: ./src/views/search/components/LineChart/index.js



var LineChart_option;
const LineChartT = ({ lineData, id, xdata2 })=>{
    const [serieData, setSerieData] = (0,external_react_.useState)({
        name: "",
        value: 0
    });
    const [tipPos, setTipPos] = (0,external_react_.useState)({
        left: 0,
        top: 0,
        opacity: 0
    });
    const [overTip, setOverTip] = (0,external_react_.useState)(false);
    const [dataIndex, setdataIndex] = (0,external_react_.useState)(-1);
    const [eventPos, setEventPos] = (0,external_react_.useState)({
        clientX: 0,
        clientY: 0
    });
    const chartWrapRef = (0,external_react_.useRef)(null);
    const chartTipRef = (0,external_react_.useRef)(null);
    const chartInsRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        LineChart_option = {
            grid: {
                left: -20,
                top: 10,
                bottom: 30,
                right: -20
            },
            xAxis: {
                type: "category",
                data: [],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    fontSize: "20px",
                    color: "#7F8792",
                    fontFamily: "DMSans-Regular"
                }
            },
            yAxis: {
                type: "value",
                show: false
            },
            series: []
        };
        if (id && lineData.series.length > 0) {
            var chartDom = document.getElementById(id);
            if (chartDom) {
                const minValue = Math.min(...lineData.series);
                const min = minValue - minValue / 5;
                !chartInsRef.current && (chartInsRef.current = external_echarts_.init(chartDom));
                LineChart_option && chartInsRef.current.setOption({
                    ...LineChart_option,
                    ...{
                        xAxis: {
                            ...LineChart_option.xAxis,
                            data: lineData?.xAxis?.data || []
                        }
                    },
                    ...{
                        yAxis: {
                            ...LineChart_option.yAxis,
                            min: 0
                        }
                    },
                    series: lineData.series
                });
                // myChart.getZr().on('mouseover', (params) => {
                //   console.log(params)
                // })
                chartInsRef.current.on("mouseover", (params)=>{
                    const originEvent = params.event?.event;
                    setEventPos({
                        clientX: originEvent.clientX,
                        clientY: originEvent.clientY
                    });
                    setdataIndex(params.dataIndex);
                    setSerieData({
                        name: params.name + "-" + xdata2[params.dataIndex],
                        value: Number(params.value)
                    });
                    const tipDom = chartTipRef.current;
                    const rect = tipDom?.getBoundingClientRect();
                    const chartDom = chartWrapRef.current;
                    const chartRect = chartDom?.getBoundingClientRect();
                    if (rect && chartRect && tipDom) {
                        let left = 0;
                        left = originEvent.zrX - rect?.width / 2;
                        if (left < 0) {
                            left = 0;
                        }
                        if (left > chartRect?.width - rect?.width) {
                            left = chartRect?.width - rect?.width;
                        }
                        setTipPos({
                            left: left,
                            top: originEvent.zrY - 60,
                            opacity: 1
                        });
                    }
                });
            }
        }
    }, [
        lineData,
        overTip,
        id,
        xdata2
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ref: chartWrapRef,
        className: "chart-wrap relative",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: id,
                className: "",
                style: {
                    height: 155
                }
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                ref: chartTipRef,
                onMouseLeave: (e)=>{
                    e.stopPropagation();
                    setTipPos({
                        left: "-200%",
                        top: 12,
                        opacity: 0
                    });
                },
                className: "chart-tip",
                style: {
                    left: tipPos.left,
                    top: tipPos.top,
                    opacity: tipPos.opacity
                },
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "chart-tip2",
                    children: `${serieData.name} ${serieData.value} txs`
                })
            })
        ]
    });
};
/* harmony default export */ const LineChart = (LineChartT);

;// CONCATENATED MODULE: ./src/views/search/components/TxInfo.tsx




const TxInfo = ({ txHistoryData })=>{
    const [tempData, setTempData] = (0,external_react_.useState)({
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
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "txinfo-bg h-[317px] rounded-xl",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "text-[rgba(0,0,0,0.6)] font-pnormal text-[24px] px-8 pt-6",
                children: "Last quarter"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-[#3F4664] font-dbold text-[28px] px-8 pt-[10px]",
                children: [
                    txHistoryData.total,
                    " txs"
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mt-6 px-3",
                children: /*#__PURE__*/ jsx_runtime.jsx(LineChart, {
                    id: "pricedata",
                    xdata2: txHistoryData.xdata2,
                    lineData: {
                        xAxis: {
                            data: txHistoryData.xdata
                        },
                        series: [
                            {
                                data: txHistoryData.volumeData,
                                type: "line",
                                color: "#55B6F4",
                                smooth: true,
                                symbolSize: 4,
                                lineStyle: {
                                    width: 2
                                },
                                areaStyle: {
                                    opacity: 0,
                                    color: new external_echarts_.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0.2,
                                            color: "rgba(255, 83, 46, 0.4)"
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(255, 83, 46, 0)"
                                        }
                                    ])
                                }
                            }
                        ]
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const components_TxInfo = (TxInfo);


/***/ }),

/***/ 1423:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _components_Wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(112);
/* harmony import */ var _components_pc_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7212);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SubTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7340);
/* harmony import */ var _components_BasicItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4546);
/* harmony import */ var _components_LabelData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5032);
/* harmony import */ var _components_h5_H5Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7956);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3067);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9429);
/* harmony import */ var _components_LevelScore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2028);
/* harmony import */ var _home_components_Recommend__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(793);
/* harmony import */ var _components_TicketInfo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1012);
/* harmony import */ var _components_AssetInfo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4223);
/* harmony import */ var _components_TxInfo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2878);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__, _components_pc_PageHeader__WEBPACK_IMPORTED_MODULE_3__, _components_SubTitle__WEBPACK_IMPORTED_MODULE_6__, _components_BasicItem__WEBPACK_IMPORTED_MODULE_7__, _components_LabelData__WEBPACK_IMPORTED_MODULE_8__, _state__WEBPACK_IMPORTED_MODULE_11__, _utils__WEBPACK_IMPORTED_MODULE_12__, _components_LevelScore__WEBPACK_IMPORTED_MODULE_13__, _home_components_Recommend__WEBPACK_IMPORTED_MODULE_14__, _components_TicketInfo__WEBPACK_IMPORTED_MODULE_15__, _components_AssetInfo__WEBPACK_IMPORTED_MODULE_16__]);
([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__, _components_pc_PageHeader__WEBPACK_IMPORTED_MODULE_3__, _components_SubTitle__WEBPACK_IMPORTED_MODULE_6__, _components_BasicItem__WEBPACK_IMPORTED_MODULE_7__, _components_LabelData__WEBPACK_IMPORTED_MODULE_8__, _state__WEBPACK_IMPORTED_MODULE_11__, _utils__WEBPACK_IMPORTED_MODULE_12__, _components_LevelScore__WEBPACK_IMPORTED_MODULE_13__, _home_components_Recommend__WEBPACK_IMPORTED_MODULE_14__, _components_TicketInfo__WEBPACK_IMPORTED_MODULE_15__, _components_AssetInfo__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















let currentInputValue;
const SearchPage = ()=>{
    const [messageApi, contextHolder] = antd__WEBPACK_IMPORTED_MODULE_5__.message.useMessage();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const fromPage = (0,_state__WEBPACK_IMPORTED_MODULE_11__/* .useSearchStore */ .R)((state)=>state.fromPage);
    const searchByAddress = (0,_state__WEBPACK_IMPORTED_MODULE_11__/* .useSearchStore */ .R)((state)=>state.searchByAddress);
    const getActivityData = (0,_state__WEBPACK_IMPORTED_MODULE_11__/* .useSearchStore */ .R)((state)=>state.getActivityData);
    const searchItemList = (0,_state__WEBPACK_IMPORTED_MODULE_11__/* .useSearchStore */ .R)((state)=>state.searchItemList);
    const activityData = (0,_state__WEBPACK_IMPORTED_MODULE_11__/* .useSearchStore */ .R)((state)=>state.activityData);
    const activityInfo = (0,_state__WEBPACK_IMPORTED_MODULE_11__/* .useSearchStore */ .R)((state)=>state.activityInfo);
    const identityInfo = (0,_state__WEBPACK_IMPORTED_MODULE_11__/* .useSearchStore */ .R)((state)=>state.identityInfo);
    const labelData2 = (0,_state__WEBPACK_IMPORTED_MODULE_11__/* .useSearchStore */ .R)((state)=>state.labelData);
    const txHistoryData = (0,_state__WEBPACK_IMPORTED_MODULE_11__/* .useSearchStore */ .R)((state)=>state.txHistoryData);
    const setRecentlyData = (0,_state__WEBPACK_IMPORTED_MODULE_11__/* .useSearchStore */ .R)((state)=>state.setRecentlyData);
    const isGlobalSearching = (0,_state__WEBPACK_IMPORTED_MODULE_11__/* .useSearchStore */ .R)((state)=>state.isGlobalSearching);
    const setSearchingGlobal = (0,_state__WEBPACK_IMPORTED_MODULE_11__/* .useSearchStore */ .R)((state)=>state.setSearchingGlobal);
    const setFromPage = (0,_state__WEBPACK_IMPORTED_MODULE_11__/* .useSearchStore */ .R)((state)=>state.setFromPage);
    const getRecommendUsers = (0,_state__WEBPACK_IMPORTED_MODULE_11__/* .useSearchStore */ .R)((state)=>state.getRecommendUsers);
    const [inputFocus, setInputFocus] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const [searchIng, setSearchIng] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [inputClick, setInputClick] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [startMove, setStartmove] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [hasAddress, setHasAddress] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const recommendRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const handleInputClick = (e)=>{
        e.stopPropagation();
        setInputClick(true);
        setTimeout(()=>{
            if (recommendRef.current) {
                recommendRef.current.handleFilter("");
            }
        }, 500);
    };
    const handleInputFocus = (event)=>{
        event.target.select();
        setInputFocus(true);
    };
    const handleInputBlur = ()=>{
        setInputFocus(false);
    };
    const handleSearch2 = async (address)=>{
        const searchAddress = address || inputValue;
        let newAddress = (0,_utils__WEBPACK_IMPORTED_MODULE_12__/* .toChecksumAddress */ .P8)(searchAddress);
        if (!newAddress) {
            messageApi.error("Invalid address");
            return;
        }
        setFromPage("");
        router.push({
            pathname: `/${address || inputValue}`
        });
    };
    const handleSearch = async (address)=>{
        if (searchIng) {
            return;
        }
        const searchAddress = address || inputValue;
        let newAddress = (0,_utils__WEBPACK_IMPORTED_MODULE_12__/* .toChecksumAddress */ .P8)(searchAddress);
        if (newAddress) {
            newAddress = newAddress.toLowerCase();
            setStartmove(true);
            setSearchingGlobal(true);
            setInputClick(false);
            setSearchIng(true);
            await searchByAddress(newAddress);
            setRecentlyData(newAddress);
            setSearchIng(false);
            getActivityData(newAddress);
            return;
        }
        messageApi.error("Invalid address");
    };
    const handleInputKeyUp = (event)=>{
        if (event.key === "Enter") {
            // handleSearch()
            handleSearch2();
        } else {
            if (event.key.length === 1 && /^[a-zA-Z0-9]*$/.test(event.key) || event.key === "Backspace") {
                if (recommendRef.current) {
                    recommendRef.current.handleFilter(inputValue);
                }
                currentInputValue = inputValue;
            }
        }
    };
    const handleInputPaste = (event)=>{
        if (recommendRef.current) {
            recommendRef.current.handleFilter(event.clipboardData.getData("Text"));
        }
    };
    const handleRecommendClick = async (type, address)=>{
        // setInputValue(address)
        handleSearch2(address);
    };
    const hanleArrowChange = async (index)=>{
        // @ts-ignore
        const filterList = window.globalFilterList || [];
        const filterItem = filterList[index];
        if (filterItem && filterItem.address) {
            setInputValue(filterItem.address);
        } else {
            setInputValue(currentInputValue);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setTimeout(()=>{
            setIsMounted(true);
            setHasAddress(false);
        }, 500);
        if (!router.query.address || !router.query.address[0]) {
            setStartmove(false);
            // 
            setSearchingGlobal(false);
            setInputValue("");
            setTimeout(()=>{}, 300);
        }
    }, [
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (router.query.address && router.query.address[0] && !fromPage) {
            handleSearch(router.query.address[0]);
        }
        if (router.query.address && router.query.address[0]) {
            setInputValue(router.query.address[0]);
        }
    }, [
        router,
        fromPage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        getRecommendUsers();
        const handleDocumentClick = ()=>{
            setInputClick(false);
        };
        document.addEventListener("click", handleDocumentClick);
        return ()=>{
            document.removeEventListener("click", handleDocumentClick);
        };
    }, [
        getRecommendUsers
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " font-dnormal",
        children: [
            contextHolder,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pc_PageHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Wrap__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: ` relative z-50 ${!searchIng ? " -top-[30px]" : " "} ${isMounted ? " opacity-100" : " opacity-0"} `,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `absolute flex transition-all ${hasAddress ? " duration-[0ms]" : " duration-[300ms]"}  ${startMove ? "top-[34px] left-0 ml-0 opacity-100" : "top-[130px] xl1:top-[161px] left-[50%] -ml-[208px]"} `,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                        src: "/images/home/logo2.png",
                                        className: `${startMove ? "w-[42px] h-[42px]" : "w-[59px] h-[59px]"}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `font-fmedium text-[36px] transition-all duration-[300ms] ml-5 gradient1 ${startMove ? " opacity-0 " : " opacity-100 "} `,
                                        children: "Explore the Identity"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `absolute transition-all ${hasAddress ? " duration-[0ms]" : " duration-[300ms]"} flex justify-center ${startMove ? " left-[46px] top-[26px]" : " left-[180px] top-[300px] xl1:top-[336px]"}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `relative search-wrap ${inputFocus ? "focus" : ""} `,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "text",
                                                    "aria-autocomplete": "none",
                                                    autoComplete: "off",
                                                    id: "searchInput",
                                                    className: `search-input transition-all ${hasAddress ? " duration-[0ms]" : " duration-[300ms]"} outline-none pl-6 pr-[74px] font-dnormal ${startMove ? "search" : ""}`,
                                                    placeholder: "Search address identity",
                                                    value: inputValue,
                                                    onFocus: handleInputFocus,
                                                    onBlur: handleInputBlur,
                                                    onKeyUp: handleInputKeyUp,
                                                    onClick: handleInputClick,
                                                    onPaste: handleInputPaste,
                                                    disabled: searchIng,
                                                    onChange: (e)=>{
                                                        setInputValue(e.target.value);
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: " absolute top-[20px] right-[25px]",
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        handleSearch();
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                                        src: "/images/home/search.png",
                                                        className: "w-[24px] h-[24px] cursor-pointer"
                                                    })
                                                })
                                            ]
                                        }),
                                        inputClick && !searchIng && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-3 ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_components_Recommend__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP, {
                                                from: isGlobalSearching ? "search" : "",
                                                ref: recommendRef,
                                                inputValue: inputValue,
                                                onClick: handleRecommendClick,
                                                onArrowChange: hanleArrowChange
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: ` absolute top-[130px] xl1:top-[150px] left-[400px] transition-all duration-[300ms] delay-200 ${startMove ? " opacity-100 " : " opacity-0 "}`,
                                children: searchIng && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-[72px] flex justify-center min-h-[600px]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                        src: "/images/home/loading.gif",
                                        className: "w-[400px] h-[300px]"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `relative transition-all duration-[300ms] ${searchIng || !isGlobalSearching ? "opacity-0 top-[208px]" : " opacity-100 top-[108px]"}`,
                        children: !searchIng && isGlobalSearching && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " w-full border-t border-[rgba(22,31,49,0.05);] mt-[30px] mb-[22px]"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                                    src: "/images/search/ticket.png",
                                                    className: "w-[20px] h-[20px]"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-[rgba(22,31,49,0.60)] text-[20px] ml-[5px]",
                                                    children: "Search identity ticket"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LevelScore__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            levelScore: activityData.levelScore,
                                            identityInfo: identityInfo
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-[170px] mb-[90px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SubTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                                                text: "Ticket"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SubTitle__WEBPACK_IMPORTED_MODULE_6__/* .SubTitle2 */ .m_, {
                                                text: "Info",
                                                icon: "/images/search/info.png"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: " mt-10",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TicketInfo__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                dataList: searchItemList
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " mt-[90px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SubTitle__WEBPACK_IMPORTED_MODULE_6__/* .SubTitle2 */ .m_, {
                                                        text: "Transaction",
                                                        icon: "/images/search/tx.png"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mt-10",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TxInfo__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                        txHistoryData: txHistoryData
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: " mt-[90px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SubTitle__WEBPACK_IMPORTED_MODULE_6__/* .SubTitle2 */ .m_, {
                                                        text: "Asset",
                                                        icon: "/images/search/asset.png"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mt-10 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "pl-[30px] w-[430px] flex flex-wrap",
                                                            children: [
                                                                activityData.nftAsset.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "w-full flex justify-center",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                                                                src: "/images/search/nodata.png",
                                                                                className: "w-[201px] h-[140px]"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "text-[rgba(22,31,49,0.60)] font-dnormal text-[16px] mt-4 text-center",
                                                                                children: "No result"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                activityData.nftAsset.slice(0, 5).map((nft)=>{
                                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "py-[23px] pr-[73px]",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
                                                                            placement: "top",
                                                                            title: nft.name,
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: " relative cursor-pointer",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* .LazyImage3 */ .z3, {
                                                                                        src: nft.image,
                                                                                        className: "w-[60px] h-[60px] rounded-[9px]"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                                                                        src: "/images/search/eth.png",
                                                                                        className: "w-[18px] h-[18px] absolute bottom-0 right-0 z-10"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    }, nft.image);
                                                                }),
                                                                activityData.nftAsset.length > 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "py-[23px] pr-[73px]",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "w-[60px] h-[60px] flex justify-center items-center text-[#161F31] font-dmedium text-[20px]",
                                                                        children: [
                                                                            "+",
                                                                            activityData.nftAsset.length - 5
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: " ml-[88px]",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                                                src: "/images/search/line1.png",
                                                                className: "w-[1px] h-[200px]"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "ml-[128px]",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AssetInfo__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                                dataList: searchItemList
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-[150px] mb-[90px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SubTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                                                text: "Activity"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SubTitle__WEBPACK_IMPORTED_MODULE_6__/* .SubTitle2 */ .m_, {
                                                text: "Basic",
                                                icon: "/images/search/info.png"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex mt-10 flex-wrap",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mr-[100px] xl1:mr-[94px] activity-mr",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BasicItem__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                                                        title: "PoAP",
                                                        icon: "/images/search/poap2.png",
                                                        data: activityInfo.poap
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mr-[0px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BasicItem__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                                                        title: "Galxe OAT",
                                                        icon: "/images/search/poap2.png",
                                                        data: activityInfo.galxeOat,
                                                        activityData: activityData
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mt-[110px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BasicItem__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                                                        title: "TaskON OAT",
                                                        icon: "/images/search/poap2.png",
                                                        data: activityInfo.taskOnOat,
                                                        activityData: activityData
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-[84px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SubTitle__WEBPACK_IMPORTED_MODULE_6__/* .SubTitle2 */ .m_, {
                                                    text: "Advance",
                                                    icon: "/images/search/info.png"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mt-[50px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BasicItem__WEBPACK_IMPORTED_MODULE_7__/* .BasicNftItem */ .Ui, {
                                                        title: "Contacts",
                                                        icon: "/images/search/nft2.png",
                                                        data: activityData.nftInteractedAddress
                                                    })
                                                })
                                            ]
                                        }),
                                        labelData2.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LabelData__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            data: labelData2
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            !searchIng && isGlobalSearching && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: ` relative ${!isGlobalSearching ? "top-0" : "top-[108px]"}`,
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_h5_H5Footer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        white: true
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;