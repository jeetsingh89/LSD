(()=>{var e={};e.id=888,e.ids=[888],e.modules={9385:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(6689).createContext)(null)},4651:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>x});var a=r(997);r(108);var o=r(6689),n=r(1163),i=r(808),u=r.n(i);r(5525);var c=r(3590);r(8819);var d=r(4298),l=r.n(d),p=r(9385),g=r(7518),m=e([c]);c=(m.then?(await m)():m)[0];let h=g.createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`,v={colors:{primary:"#0070f3"}};function x({Component:e,pageProps:t}){let[r,s]=(0,o.useState)(!1),i=(0,n.useRouter)(),[d,m]=(0,o.useState)({name:"",bio:"",avatar:"",handle:""});return(0,o.useEffect)(()=>{let e=()=>{s(!0),u().start()},t=()=>{s(!1),u().done()};return i.events.on("routeChangeStart",e),i.events.on("routeChangeComplete",t),i.events.on("routeChangeError",t),()=>{i.events.off("routeChangeStart",e),i.events.off("routeChangeComplete",t),i.events.off("routeChangeError",t)}}),(0,a.jsxs)(a.Fragment,{children:[a.jsx(h,{}),(0,a.jsxs)(g.ThemeProvider,{theme:v,children:[a.jsx(l(),{id:"my-app",strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=G-WYTYXQXVK6"}),a.jsx(l(),{id:"load",strategy:"lazyOnload",children:`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-WYTYXQXVK6', {
                    page_path: window.location.pathname,
                    });
                `}),(0,a.jsxs)(p.Z.Provider,{value:{userData:d,setUserData:m},children:[a.jsx(e,{...t}),a.jsx(c.ToastContainer,{}),r&&a.jsx("div",{className:"nprogress-custom-parent",children:a.jsx("div",{className:"nprogress-custom-bar"})})]})]})]})}s()}catch(e){s(e)}})},108:()=>{},5525:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},808:e=>{"use strict";e.exports=require("nprogress")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7518:e=>{"use strict";e.exports=require("styled-components")},3590:e=>{"use strict";e.exports=import("react-toastify")},7147:e=>{"use strict";e.exports=require("fs")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[491,402],()=>r(4651));module.exports=s})();