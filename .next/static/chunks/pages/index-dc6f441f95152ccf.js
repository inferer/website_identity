(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7640)}])},5692:function(e,t,r){"use strict";r.d(t,{$U:function(){return i},z3:function(){return c}});var n=r(5893),s=r(7294),a=r(2708);let c=e=>{let{src:t,className:r,...c}=e,[i,o]=(0,s.useState)(""),{ref:l,inView:u,entry:d}=(0,a.YD)({});return(0,s.useRef)(null),(0,s.useEffect)(()=>{u&&!i&&o(t)},[u,t,i]),(0,n.jsx)("img",{referrerPolicy:"no-referrer",ref:l,src:i,className:"transition-all ".concat(i?"opacity-100 ":"opacity-0 "," ").concat(r),...c,alt:"",onError:function(){}})},i=e=>{let{src:t,className:r,...c}=e,[i,o]=(0,s.useState)(""),{ref:l,inView:u,entry:d}=(0,a.YD)({});return(0,s.useEffect)(()=>{u&&o("https://website-1315068501.cos.ap-nanjing.myqcloud.com/website_identity".concat(t))},[u,t]),(0,n.jsx)("img",{referrerPolicy:"no-referrer",ref:l,src:i,className:"transition-all ".concat(i?"opacity-100 ":"opacity-0 "," ").concat(r),...c,alt:""})};t.ZP=e=>{let{src:t,className:r,...c}=e,[i,o]=(0,s.useState)(""),{ref:l,inView:u,entry:d}=(0,a.YD)({});return(0,s.useEffect)(()=>{u&&!i&&o("https://website-1315068501.cos.ap-nanjing.myqcloud.com/website_identity".concat(t))},[u,t,i]),(0,n.jsx)("img",{referrerPolicy:"no-referrer",ref:l,src:i,className:"transition-all ".concat(i?"opacity-100 ":"opacity-0 "," ").concat(r),...c,alt:""})}},112:function(e,t,r){"use strict";var n=r(5893);t.Z=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"max-w-[1200px] w-full mx-auto wap-root",children:t})}},7212:function(e,t,r){"use strict";var n=r(5893),s=r(1163),a=r(5692);t.Z=()=>{let e=(0,s.useRouter)();return(0,n.jsx)("div",{className:" pl-[7.8vw] mx-auto pt-[36px] relative flex page-header",children:(0,n.jsx)("div",{onClick:t=>{t.stopPropagation(),e.push({pathname:"/"})},children:(0,n.jsx)(a.ZP,{src:"/images/home/logo.png",className:"w-[32px] h-[32px] cursor-pointer"})})})}},7640:function(e,t,r){"use strict";let n;r.r(t),r.d(t,{default:function(){return x}});var s=r(5893),a=r(5692),c=r(112),i=r(7212),o=r(7294),l=r(3143),u=r(793),d=r(30),p=r(1163),m=r(1923),x=()=>{let[e,t]=l.ZP.useMessage(),r=(0,p.useRouter)(),x=(0,d.R)(e=>e.searchByAddress),f=(0,d.R)(e=>e.setFromPage),h=(0,d.R)(e=>e.setRecentlyData),y=(0,d.R)(e=>e.setSearchingGlobal),g=(0,d.R)(e=>e.getRecommendUsers),[v,w]=(0,o.useState)(!1),[j,b]=(0,o.useState)(!1),[N,R]=(0,o.useState)(""),[k,P]=(0,o.useState)(!1),[C,E]=(0,o.useState)(!0),[S,Z]=(0,o.useState)(!1),_=(0,o.useRef)(null),F=async t=>{if(k)return;let n=t||N,s=(0,m.P8)(n);if(s){s=s.toLowerCase(),Z(!0),y(!0),E(!0),P(!0),b(!1),f("HOME"),w(!1),await x(s),h(s),r.push({pathname:"/search/".concat(s)}),setTimeout(()=>{P(!1)},500),setTimeout(()=>{Z(!1)},2e3);return}e.error("Invalid address")},L=async(e,t)=>{R(t),F(t)},D=async e=>{let t=window.globalFilterList||[],r=t[e];r&&r.address?R(r.address):R(n)},M=async e=>{};return(0,o.useEffect)(()=>{g();let e=()=>{b(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[g]),(0,o.useEffect)(()=>{r.prefetch("/search/0x776019ec6b3dee2b8fd4232cc70395a75e0eb0d2")},[r]),(0,s.jsxs)("div",{children:[t,(0,s.jsx)(i.Z,{}),(0,s.jsx)(c.Z,{children:(0,s.jsxs)("div",{className:" relative",children:[(0,s.jsxs)("div",{className:"absolute flex transition-all duration-[300ms] ".concat(S?"top-[87px] left-0 ml-0":"top-[161px] left-[50%] -ml-[208px]"," "),children:[(0,s.jsx)(a.ZP,{src:"/images/home/logo2.png",className:"".concat(S?"w-[34px] h-[39px]":"w-[59px] h-[59px]")}),(0,s.jsx)("div",{className:"font-fmedium text-[36px] transition-all duration-[300ms] ml-5 gradient1 ".concat(S?" opacity-0 ":" opacity-100 "," "),children:"Explore the Identity"})]}),(0,s.jsx)("div",{className:"absolute transition-all duration-[300ms] flex justify-center ".concat(S?" left-[54px] top-[77px]":" left-[180px] top-[336px]"),children:(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"relative search-wrap ".concat(v?"focus":""," "),children:[(0,s.jsx)("input",{className:"search-input transition-all duration-[300ms] outline-none pl-6 pr-[74px] font-dnormal ".concat(S?"search":""),placeholder:"Search address identity",value:N,onFocus:()=>{w(!0)},onBlur:()=>{w(!1)},onKeyUp:e=>{"Enter"===e.key?F():(1===e.key.length&&/^[a-zA-Z0-9]*$/.test(e.key)||"Backspace"===e.key)&&(_.current&&_.current.handleFilter(N),n=N)},onClick:e=>{e.stopPropagation(),b(!0),setTimeout(()=>{_.current&&!N&&_.current.handleFilter("")},500)},onPaste:e=>{_.current&&_.current.handleFilter(e.clipboardData.getData("Text"))},disabled:k,onChange:e=>{R(e.target.value)}}),(0,s.jsx)("div",{className:" absolute top-[20px] right-[25px]",onClick:e=>{e.stopPropagation(),F()},children:(0,s.jsx)(a.ZP,{src:"/images/home/search.png",className:"w-[24px] h-[24px] cursor-pointer"})})]}),j&&!k&&(0,s.jsx)("div",{className:"mt-3",children:(0,s.jsx)(u.ZP,{ref:_,inputValue:N,onClick:L,onArrowChange:D,onFiLterChange:M})})]})}),(0,s.jsx)("div",{className:" absolute top-[150px] left-[400px] transition-all duration-[300ms] delay-200 ".concat(S?" opacity-100 ":" opacity-0 "),children:k&&(0,s.jsx)("div",{className:"mt-[72px] flex justify-center min-h-[600px]",children:(0,s.jsx)(a.ZP,{src:"/images/home/loading.gif",className:"w-[400px] h-[300px]"})})})]})})]})}},793:function(e,t,r){"use strict";var n=r(5893),s=r(5692),a=r(30),c=r(7294);let i=e=>{let{type:t}=e,r=(0,c.useMemo)(()=>"/images/home/".concat(t.toLowerCase(),".png"),[t]),a=(0,c.useMemo)(()=>"".concat(t,"-gradient"),[t]),i=(0,c.useMemo)(()=>"".concat(t,"-bg"),[t]);return(0,n.jsxs)("div",{className:"w-[94px] flex items-center px-[6px] py-[2px] rounded ".concat(i),children:[(0,n.jsx)(s.ZP,{src:r,className:"w-5 h-5"}),(0,n.jsx)("div",{className:"ml-1 text-[16px] font-dnormal capitalize ".concat(a),children:t})]})},o=e=>{let{type:t}=e,r=(0,c.useMemo)(()=>"/images/home/".concat(t.toLowerCase(),".png"),[t]);return(0,n.jsx)("div",{className:"flex items-center py-[2px] rounded",children:(0,n.jsx)(s.ZP,{src:r,className:"w-5 h-5"})})},l=e=>{let{itemData:t,arrowIndex:r,index:s,onClick:a}=e,l=(0,c.useMemo)(()=>s===r,[s,r]);return(0,n.jsxs)(n.Fragment,{children:["text"===t.type&&(0,n.jsx)("div",{className:"px-3 font-dnormal text-[20px] text-[#3F4664] mb-[10px] ".concat("Recommend"===t.value?"mt-[14px]":""),children:t.value}),("recently"===t.type||"recommend"===t.type)&&(0,n.jsxs)("div",{className:"flex items-center py-[9px] px-[12px] hover:bg-[rgba(78,170,182,0.04)] cursor-pointer ".concat(l?"bg-[rgba(78,170,182,0.04)]":""," "),onClick:e=>{e.stopPropagation(),a&&a("user")},children:["recently"===t.type?(0,n.jsx)(o,{type:"User"}):(0,n.jsx)(i,{type:t.category}),(0,n.jsx)("div",{className:"text-[16px] text-[rgba(63,70,100,0.60)] font-dnormal ml-4",children:t.address})]})]})},u=0,d=0;t.ZP=(0,c.forwardRef)((e,t)=>{let{from:r,inputValue:s,onClick:i,onArrowChange:o,onFiLterChange:p}=e,m=(0,a.R)(e=>e.recentlyData),x=(0,a.R)(e=>e.recommendUsers),f=(0,a.R)(e=>e.getRecentlyData),h=(0,a.R)(e=>e.getRecommendUsers),[y,g]=(0,c.useState)(0),[v,w]=(0,c.useState)([]),j=(0,c.useRef)(null),b=e=>{e.stopPropagation();let t=window.globalFilterList;if(38===e.keyCode){u<=0&&(u=d);let e=t[u-1];e&&"text"===e.type?g(u-=2):g(u-=1),o&&o(u)}if(40===e.keyCode){u>=d&&(u=0);let e=t[u+1];e&&"text"===e.type?g(u+=2):g(u+=1),o&&o(u)}(38===e.keyCode||40===e.keyCode)&&(u>4?j.current&&(j.current.scrollTop=200):j.current&&(j.current.scrollTop=0))},N=(0,c.useCallback)(e=>{let t=[],r=[],n=[],s=0;t=e?m.filter(t=>t.indexOf(e)>-1).map(e=>({address:e,type:"recently"})):m.map(e=>({address:e,type:"recently"})),r=e?x.filter(t=>t.address.indexOf(e)>-1).map(e=>({...e,type:"recommend"})):x.map(e=>({...e,type:"recommend"})),t.length>0&&(n.push({type:"text",value:"Recently"}),n.push(...t),s+=t.length),r.length>0&&(n.push({type:"text",value:"Recommend"}),n.push(...r),s+=r.length),d=n.length,g(0),u=0,window.globalFilterList=n,p&&p(n),w(n)},[m,x,p]);return((0,c.useEffect)(()=>(f(),h(),document.addEventListener("keyup",b),()=>{document.removeEventListener("keyup",b)}),[f,h]),(0,c.useImperativeHandle)(t,()=>({handleFilter:e=>N(e)})),0===v.length)?null:(0,n.jsx)("div",{className:"px-3 py-[20px] recommend-wrap ".concat("search"===r?"recommend-wrap-search":""),ref:j,onClick:e=>{e.stopPropagation()},children:v.map((e,t)=>(0,n.jsx)(l,{itemData:e,arrowIndex:y,index:t,onClick:t=>{i&&i(t,e.address)}},(e.address||e.value)+t))})})},1163:function(e,t,r){e.exports=r(6885)},2708:function(e,t,r){"use strict";r.d(t,{YD:function(){return o}});var n=r(7294),s=new Map,a=new WeakMap,c=0,i=void 0;function o({threshold:e,delay:t,trackVisibility:r,rootMargin:o,root:l,triggerOnce:u,skip:d,initialInView:p,fallbackInView:m,onChange:x}={}){let[f,h]=n.useState(null),y=n.useRef(),[g,v]=n.useState({inView:!!p,entry:void 0});y.current=x,n.useEffect(()=>{let n;if(!d&&f)return n=function(e,t,r={},n=i){if(void 0===window.IntersectionObserver&&void 0!==n){let s=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}let{id:o,observer:l,elements:u}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(a.has(r)||(c+=1,a.set(r,c.toString())),a.get(r)):"0":e[t]}`}).toString(),r=s.get(t);if(!r){let n;let a=new Map,c=new IntersectionObserver(t=>{t.forEach(t=>{let r=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=r),a.get(t.target)?.forEach(e=>{e(r,t)})})},e);n=c.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:c,elements:a},s.set(t,r)}return r}(r),d=u.get(e)||[];return u.has(e)||u.set(e,d),d.push(t),l.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(u.delete(e),l.unobserve(e)),0===u.size&&(l.disconnect(),s.delete(o))}}(f,(e,t)=>{v({inView:e,entry:t}),y.current&&y.current(e,t),t.isIntersecting&&u&&n&&(n(),n=void 0)},{root:l,rootMargin:o,threshold:e,trackVisibility:r,delay:t},m),()=>{n&&n()}},[Array.isArray(e)?e.toString():e,f,l,o,u,d,r,m,t]);let w=g.entry?.target,j=n.useRef();f||!w||u||d||j.current===w||(j.current=w,v({inView:!!p,entry:void 0}));let b=[h,g.inView,g.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}n.Component}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);