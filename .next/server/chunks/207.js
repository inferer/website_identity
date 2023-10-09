"use strict";
exports.id = 207;
exports.ids = [207];
exports.modules = {

/***/ 5692:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $U: () => (/* binding */ LazyImage2),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   z3: () => (/* binding */ LazyImage3)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const isDev = "production" === "development";
const LazyImage = ({ src, className, ...others })=>{
    const [imgSrc, setImgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { ref: inViewRef, inView, entry } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inView && !imgSrc) {
            setImgSrc(isDev ? src : `https://website-1315068501.cos.ap-nanjing.myqcloud.com/website_identity${src}`);
        }
    }, [
        inView,
        src,
        imgSrc
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        referrerPolicy: "no-referrer",
        ref: inViewRef,
        src: imgSrc,
        className: `transition-all ${!imgSrc ? "opacity-0 " : "opacity-100 "} ${className}`,
        ...others,
        alt: ""
    });
};
const LazyImage3 = ({ src, className, ...others })=>{
    const [imgSrc, setImgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { ref: inViewRef, inView, entry } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({});
    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inView && !imgSrc) {
            setImgSrc(src);
        }
    }, [
        inView,
        src,
        imgSrc
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        referrerPolicy: "no-referrer",
        ref: inViewRef,
        src: imgSrc,
        className: `transition-all ${!imgSrc ? "opacity-0 " : "opacity-100 "} ${className}`,
        ...others,
        alt: "",
        onError: function() {
            if (imgSrc) {
                const errorPng = "/images/search/default.png";
                setImgSrc(isDev ? errorPng : `https://website-1315068501.cos.ap-nanjing.myqcloud.com/website_identity${errorPng}`);
            }
        }
    });
};
const LazyImage2 = ({ src, className, ...others })=>{
    const [imgSrc, setImgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { ref: inViewRef, inView, entry } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inView) {
            setImgSrc(isDev ? src : `https://website-1315068501.cos.ap-nanjing.myqcloud.com/website_identity${src}`);
        }
    }, [
        inView,
        src
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        referrerPolicy: "no-referrer",
        ref: inViewRef,
        src: imgSrc,
        className: `transition-all ${!imgSrc ? "opacity-0 " : "opacity-100 "} ${className}`,
        ...others,
        alt: ""
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LazyImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const Wrap = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "max-w-[1200px] w-full mx-auto wap-root",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrap);


/***/ }),

/***/ 7212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LazyImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LazyImage__WEBPACK_IMPORTED_MODULE_2__]);
_LazyImage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const PageHeader = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "pl-[4.16vw] xl1:pl-[7.8vw] mx-auto pt-[36px] relative flex page-header",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            onClick: (e)=>{
                e.stopPropagation();
                router.push({
                    pathname: "/"
                });
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LazyImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
                src: "/images/home/logo.png",
                className: "w-[32px] h-[32px] cursor-pointer"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 793:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports RecommendTag, RecommendUser, RecommendItem, RecommendItem2 */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_LazyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3067);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__, _state__WEBPACK_IMPORTED_MODULE_2__]);
([_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__, _state__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const RecommendTag = ({ type })=>{
    const typeIcon = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return `/images/home/${type.toLowerCase()}.png`;
    }, [
        type
    ]);
    const typeColor = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return `${type}-gradient`;
    }, [
        type
    ]);
    const bgColor = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return `${type}-bg`;
    }, [
        type
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `w-[94px] flex items-center px-[6px] py-[2px] rounded ${bgColor}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                src: typeIcon,
                className: "w-5 h-5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `ml-1 text-[16px] font-dnormal capitalize ${typeColor}`,
                children: type
            })
        ]
    });
};
const RecommendUser = ({ type })=>{
    const typeIcon = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return `/images/home/${type.toLowerCase()}.png`;
    }, [
        type
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `flex items-center py-[2px] rounded`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LazyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
            src: typeIcon,
            className: "w-5 h-5"
        })
    });
};
const RecommendItem = ({ children, address, onClick })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "flex items-center py-[9px] px-[12px] hover:bg-[rgba(78,170,182,0.04)] cursor-pointer",
        children: [
            children,
            /*#__PURE__*/ _jsx("div", {
                className: "text-[16px] text-[rgba(63,70,100,0.60)] font-dnormal ml-4",
                onClick: (e)=>{
                    e.stopPropagation();
                    onClick && onClick();
                },
                children: address
            })
        ]
    });
};
const RecommendItem2 = ({ itemData, arrowIndex, index, onClick })=>{
    const isActive = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return index === arrowIndex;
    }, [
        index,
        arrowIndex
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            itemData.type === "text" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `px-3 font-dnormal text-[20px] text-[#3F4664] mb-[10px] ${itemData.value === "Recommend" ? "mt-[14px]" : ""}`,
                children: itemData.value
            }),
            (itemData.type === "recently" || itemData.type === "recommend") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `flex items-center py-[9px] px-[12px] hover:bg-[rgba(78,170,182,0.04)] cursor-pointer ${isActive ? "bg-[rgba(78,170,182,0.04)]" : ""} `,
                onClick: (e)=>{
                    e.stopPropagation();
                    onClick && onClick("user");
                },
                children: [
                    itemData.type === "recently" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RecommendUser, {
                        type: "User"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RecommendTag, {
                        type: itemData.category
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-[16px] text-[rgba(63,70,100,0.60)] font-dnormal ml-4",
                        children: itemData.address
                    })
                ]
            })
        ]
    });
};
let globalIndex = 0;
let globalListLength = 0;
const Recommend = ({ from, inputValue, onClick, onArrowChange, onFiLterChange }, ref)=>{
    const recentlyData = (0,_state__WEBPACK_IMPORTED_MODULE_2__/* .useSearchStore */ .R)((state)=>state.recentlyData);
    const recommendUsers = (0,_state__WEBPACK_IMPORTED_MODULE_2__/* .useSearchStore */ .R)((state)=>state.recommendUsers);
    const getRecentlyData = (0,_state__WEBPACK_IMPORTED_MODULE_2__/* .useSearchStore */ .R)((state)=>state.getRecentlyData);
    const getRecommendUsers = (0,_state__WEBPACK_IMPORTED_MODULE_2__/* .useSearchStore */ .R)((state)=>state.getRecommendUsers);
    const [arrowIndex, setArrowIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const [filterList, setFilterList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const wrapRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const handleKeyup = (event)=>{
        event.stopPropagation();
        // @ts-ignore
        const filterList = window.globalFilterList;
        if (event.keyCode === 38) {
            if (globalIndex <= 0) {
                globalIndex = globalListLength;
            }
            const filterItem = filterList[globalIndex - 1];
            if (filterItem && filterItem.type === "text") {
                setArrowIndex(globalIndex -= 2);
            } else {
                setArrowIndex(globalIndex -= 1);
            }
            onArrowChange && onArrowChange(globalIndex);
        }
        if (event.keyCode === 40) {
            if (globalIndex >= globalListLength) {
                globalIndex = 0;
            }
            const filterItem = filterList[globalIndex + 1];
            if (filterItem && filterItem.type === "text") {
                setArrowIndex(globalIndex += 2);
            } else {
                setArrowIndex(globalIndex += 1);
            }
            onArrowChange && onArrowChange(globalIndex);
        }
        if (event.keyCode === 38 || event.keyCode === 40) {
            if (globalIndex > 4) {
                if (wrapRef.current) {
                    wrapRef.current.scrollTop = 200;
                }
            } else {
                if (wrapRef.current) {
                    wrapRef.current.scrollTop = 0;
                }
            }
        }
    };
    const handleFilter = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((inputValue)=>{
        if (inputValue) {
            // @ts-ignore
            window.firstFilter = true;
        }
        let filterData = [];
        let filterData2 = [];
        let filterData3 = [];
        let len = 0;
        if (!inputValue) {
            filterData = recentlyData.map((addr)=>({
                    address: addr,
                    type: "recently"
                }));
        } else {
            filterData = recentlyData.filter((addr)=>addr.indexOf(inputValue) > -1).map((addr)=>({
                    address: addr,
                    type: "recently"
                }));
        }
        if (!inputValue) {
            filterData2 = recommendUsers.map((user)=>({
                    ...user,
                    type: "recommend"
                }));
        } else {
            filterData2 = recommendUsers.filter((user)=>user.address.indexOf(inputValue) > -1).map((user)=>({
                    ...user,
                    type: "recommend"
                }));
        }
        if (filterData.length > 0) {
            filterData3.push({
                type: "text",
                value: "Recently"
            });
            filterData3.push(...filterData);
            len += filterData.length;
        }
        if (filterData2.length > 0) {
            filterData3.push({
                type: "text",
                value: "Recommend"
            });
            filterData3.push(...filterData2);
            len += filterData2.length;
        }
        globalListLength = filterData3.length;
        setArrowIndex(0);
        globalIndex = 0;
        // @ts-ignore
        window.globalFilterList = filterData3;
        onFiLterChange && onFiLterChange(filterData3);
        setFilterList(filterData3);
    }, [
        recentlyData,
        recommendUsers,
        onFiLterChange
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getRecentlyData();
        getRecommendUsers();
        document.addEventListener("keyup", handleKeyup);
        return ()=>{
            document.removeEventListener("keyup", handleKeyup);
        };
    }, [
        getRecentlyData,
        getRecommendUsers
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle)(ref, ()=>({
            handleFilter: (value)=>handleFilter(value)
        }));
    // const timerRef = useRef<any>(null)
    // useEffect(() => {
    //   if (!timerRef.current) {
    //     timerRef.current = setInterval(() => {
    //       if (filterList.length > 0) {
    //         // @ts-ignore
    //         if (inputValue && !window.firstFilter) {
    //           handleFilter(inputValue)
    //           clearInterval(timerRef.current)
    //           timerRef.current = null
    //         }
    //       }
    //     },  300)
    //   }
    // }, [recentlyData, recommendUsers, inputValue, handleFilter])
    if (filterList.length === 0) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `px-3 max-h-[308px] xl1:max-h-[338px] py-[20px] recommend-wrap ${from === "search" ? "recommend-wrap-search" : ""}`,
        ref: wrapRef,
        onClick: (e)=>{
            e.stopPropagation();
        },
        children: filterList.map((data, index)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RecommendItem2, {
                itemData: data,
                arrowIndex: arrowIndex,
                index: index,
                onClick: (type)=>{
                    onClick && onClick(type, data.address);
                }
            }, (data.address || data.value) + index);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(Recommend));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;