"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[handle]",{

/***/ "./src/pages/[handle].js":
/*!*******************************!*\
  !*** ./src/pages/[handle].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _linktree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./linktree */ \"./src/pages/linktree.js\");\n/* harmony import */ var _linkcontainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linkcontainer */ \"./src/pages/linkcontainer.js\");\n/* harmony import */ var _socialtrays__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./socialtrays */ \"./src/pages/socialtrays.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/userContext */ \"./src/context/userContext.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _component_BGImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/component/BGImage */ \"./src/component/BGImage.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    z-index: -1;\\n    width: 100%;\\n    height: 100%;\\n    position: fixed;\\n    background-color: transparent;\\n    justify-conten: center\\n    display: flex;\\n  \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n//import pagenotfound from './pageNotFound';\nconst Handle = ()=>{\n    _s();\n    const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div(_templateObject());\n    const BackgroundImage = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(()=>__webpack_require__.e(/*! import() */ \"src_component_Backgroundimage_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../component/Backgroundimage */ \"./src/component/Backgroundimage.js\")), {\n        loadableGenerated: {\n            modules: [\n                \"[handle].js -> \" + \"../component/Backgroundimage\"\n            ]\n        },\n        ssr: false,\n        loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\pages\\\\[handle].js\",\n                lineNumber: 30,\n                columnNumber: 20\n            }, undefined)\n    });\n    const { userData, setUserData } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_userContext__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [userFound, setUserFound] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [socialMedia, setSocialMedia] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    /*useEffect(()=>{\r\n  if(router.query?.handle){\r\n    fetch(`http://localhost:8080/get/${router.query.handle}`).then(res=>res.json()).then((data)=>{\r\n      if(data.status===\"error\"){\r\n        toast.error(data.error)\r\n      }\r\n      if(data.status==='success'){\r\n        setData(data.user)\r\n        setUserData(data.user)\r\n        setUserFound(true)\r\n        setSocialMedia(data.user.socialMedia)\r\n        toast.success('User Found...')\r\n        toast(data)\r\n        \r\n      }\r\n    })\r\n  }\r\n  else{\r\n    toast.error('Failed to fetch')\r\n  }\r\n}, [router.query])\r\n//const {links} = data;\r\nconsole.log(data)*/ /*if(!userFound){\r\n    return (\r\n      <main class=\"h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]\">\r\n      <h1 class=\"text-9xl font-extrabold text-white tracking-widest\">404</h1>\r\n      <div class=\"bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute\">\r\n        Page Not Found\r\n      </div>\r\n      <button class=\"mt-5\">\r\n          <div\r\n            class=\"relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring\"\r\n          >\r\n            <span\r\n              class=\"absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0\"\r\n            ></span>\r\n    \r\n            <span class=\"relative block px-8 py-3 bg-[#1A2238] border border-current\">\r\n              <a href='/'>Go Home</a>\r\n            </span>\r\n          </div>\r\n        </button>\r\n    </main>\r\n    )\r\n   }*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _router_query;\n        if ((_router_query = router.query) === null || _router_query === void 0 ? void 0 : _router_query.handle) {\n            fetch(\"http://localhost:8080/get/socials/\".concat(router.query.handle)).then((res)=>res.json()).then((data)=>{\n                //  if(data.status===\"error\"){\n                //  toast.error(data.error)\n                // }\n                if (data.status === \"success\") {\n                    setSocialMedia(data.socialMedia);\n                    setUserData(data.user);\n                    (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(\"Socials found \");\n                }\n            });\n        }\n    //else{\n    //  toast.error('Failed to fetch Socials')\n    //  }\n    }, [\n        router.query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n        className: \" overflow-y-auto  absolute\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_linktree__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: userData,\n                        className: \"fixed\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\pages\\\\[handle].js\",\n                        lineNumber: 112,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_socialtrays__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        socialMedia: socialMedia\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\pages\\\\[handle].js\",\n                        lineNumber: 113,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_BGImage__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\pages\\\\[handle].js\",\n                        lineNumber: 115,\n                        columnNumber: 10\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\pages\\\\[handle].js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_BGImage__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\pages\\\\[handle].js\",\n                lineNumber: 117,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\pages\\\\[handle].js\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Handle, \"wcYycsjn4RjQ7hazYOdR7I+j/cM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Handle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Handle);\nvar _c;\n$RefreshReg$(_c, \"Handle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW2hhbmRsZV0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUN0QjtBQUNKO0FBQ1U7QUFDSjtBQUNBO0FBQ1g7QUFDMkI7QUFDUDtBQUNkO0FBQ0k7QUFDRztBQUUxQyw0Q0FBNEM7QUFHNUMsTUFBTWdCLFNBQVM7O0lBQ2IsTUFBTUMsVUFBVUgsOERBQVU7SUFVMUIsTUFBTUssa0JBQWtCTixvREFBT0EsQ0FBQyxJQUFNLHVNQUFzQzs7Ozs7O1FBQzFFTyxLQUFLO1FBQ0xDLFNBQVMsa0JBQU0sOERBQUNDOzBCQUFFOzs7Ozs7O0lBSXRCLE1BQU0sRUFBQ0MsUUFBUSxFQUFFQyxXQUFXLEVBQUMsR0FBRXJCLGlEQUFVQSxDQUFDUyw0REFBV0E7SUFDckQsTUFBTSxDQUFDYSxNQUFNQyxRQUFRLEdBQUd6QiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQzBCLFdBQVdDLGFBQWEsR0FBRTNCLCtDQUFRQSxDQUFDO0lBQzFDLE1BQU0sQ0FBQzRCLGFBQWFDLGVBQWUsR0FBRzdCLCtDQUFRQSxDQUFDLENBQUM7SUFDOUMsTUFBTThCLFNBQVN2QixzREFBU0E7SUFFMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBc0JpQixHQUdqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNCSSxHQUNETixnREFBU0EsQ0FBQztZQUNONkI7UUFBSCxLQUFHQSxnQkFBQUEsT0FBT0MsS0FBSyxjQUFaRCxvQ0FBQUEsY0FBY0UsTUFBTSxFQUFDO1lBQ3RCQyxNQUFNLHFDQUF5RCxPQUFwQkgsT0FBT0MsS0FBSyxDQUFDQyxNQUFNLEdBQUlFLElBQUksQ0FBQ0MsQ0FBQUEsTUFBS0EsSUFBSUMsSUFBSSxJQUFJRixJQUFJLENBQUMsQ0FBQ1Y7Z0JBQzlGLDhCQUE4QjtnQkFDNUIsMkJBQTJCO2dCQUM1QixJQUFJO2dCQUNILElBQUdBLEtBQUthLE1BQU0sS0FBRyxXQUFVO29CQUN6QlIsZUFBZUwsS0FBS0ksV0FBVztvQkFDL0JMLFlBQVlDLEtBQUtjLElBQUk7b0JBQ3JCbkMscURBQUtBLENBQUM7Z0JBQ1I7WUFDRjtRQUNGO0lBQ0EsT0FBTztJQUNQLDBDQUEwQztJQUM1QyxLQUFLO0lBQ0wsR0FBRztRQUFDMkIsT0FBT0MsS0FBSztLQUFDO0lBRWpCLHFCQUNFLDhEQUFDZjtRQUFRdUIsV0FBVTs7MEJBRWpCLDhEQUFDdEI7Z0JBQUlzQixXQUFVOztrQ0FHWiw4REFBQ25DLGlEQUFRQTt3QkFBQ29CLE1BQU1GO3dCQUFVaUIsV0FBVTs7Ozs7O2tDQUNwQyw4REFBQ2pDLG9EQUFXQTt3QkFBQ3NCLGFBQWFBOzs7Ozs7a0NBRTFCLDhEQUFDZCwyREFBT0E7Ozs7Ozs7Ozs7OzBCQUViLDhEQUFDQSwyREFBT0E7Ozs7Ozs7Ozs7O0FBSVo7R0F4R01DOztRQXFCV1Isa0RBQVNBOzs7S0FyQnBCUTtBQTBHTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW2hhbmRsZV0uanM/OTRkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcclxuaW1wb3J0IExpbmtUcmVlIGZyb20gJy4vbGlua3RyZWUnO1xyXG5pbXBvcnQgTGlua0NvbnRhaW5lciBmcm9tICcuL2xpbmtjb250YWluZXInO1xyXG5pbXBvcnQgU29jaWFsdHJheXMgZnJvbSAnLi9zb2NpYWx0cmF5cyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvdXNlckNvbnRleHQnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBCR0ltYWdlIGZyb20gJ0AvY29tcG9uZW50L0JHSW1hZ2UnO1xyXG5cclxuLy9pbXBvcnQgcGFnZW5vdGZvdW5kIGZyb20gJy4vcGFnZU5vdEZvdW5kJztcclxuXHJcblxyXG5jb25zdCBIYW5kbGUgPSAoKSA9PntcclxuICBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGp1c3RpZnktY29udGVuOiBjZW50ZXJcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgQmFja2dyb3VuZEltYWdlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnQvQmFja2dyb3VuZGltYWdlXCIpLCB7XHJcbiAgICBzc3I6IGZhbHNlLFxyXG4gICAgbG9hZGluZzogKCkgPT4gPHA+Li4uPC9wPixcclxuICB9KTtcclxuXHJcblxyXG5jb25zdCB7dXNlckRhdGEsIHNldFVzZXJEYXRhfT0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbmNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KVxyXG5jb25zdCBbdXNlckZvdW5kLCBzZXRVc2VyRm91bmRdPSB1c2VTdGF0ZShmYWxzZSlcclxuY29uc3QgW3NvY2lhbE1lZGlhLCBzZXRTb2NpYWxNZWRpYV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbi8qdXNlRWZmZWN0KCgpPT57XHJcbiAgaWYocm91dGVyLnF1ZXJ5Py5oYW5kbGUpe1xyXG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9nZXQvJHtyb3V0ZXIucXVlcnkuaGFuZGxlfWApLnRoZW4ocmVzPT5yZXMuanNvbigpKS50aGVuKChkYXRhKT0+e1xyXG4gICAgICBpZihkYXRhLnN0YXR1cz09PVwiZXJyb3JcIil7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoZGF0YS5lcnJvcilcclxuICAgICAgfVxyXG4gICAgICBpZihkYXRhLnN0YXR1cz09PSdzdWNjZXNzJyl7XHJcbiAgICAgICAgc2V0RGF0YShkYXRhLnVzZXIpXHJcbiAgICAgICAgc2V0VXNlckRhdGEoZGF0YS51c2VyKVxyXG4gICAgICAgIHNldFVzZXJGb3VuZCh0cnVlKVxyXG4gICAgICAgIHNldFNvY2lhbE1lZGlhKGRhdGEudXNlci5zb2NpYWxNZWRpYSlcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCdVc2VyIEZvdW5kLi4uJylcclxuICAgICAgICB0b2FzdChkYXRhKVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCcpXHJcbiAgfVxyXG59LCBbcm91dGVyLnF1ZXJ5XSlcclxuLy9jb25zdCB7bGlua3N9ID0gZGF0YTtcclxuY29uc29sZS5sb2coZGF0YSkqL1xyXG5cclxuXHJcbi8qaWYoIXVzZXJGb3VuZCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bWFpbiBjbGFzcz1cImgtc2NyZWVuIHctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1bIzFBMjIzOF1cIj5cclxuICAgICAgPGgxIGNsYXNzPVwidGV4dC05eGwgZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSB0cmFja2luZy13aWRlc3RcIj40MDQ8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYmctWyNGRjZBM0RdIHB4LTIgdGV4dC1zbSByb3VuZGVkIHJvdGF0ZS0xMiBhYnNvbHV0ZVwiPlxyXG4gICAgICAgIFBhZ2UgTm90IEZvdW5kXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwibXQtNVwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cInJlbGF0aXZlIGlubGluZS1ibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtWyNGRjZBM0RdIGdyb3VwIGFjdGl2ZTp0ZXh0LW9yYW5nZS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQtMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSB0cmFuc2xhdGUteC0wLjUgdHJhbnNsYXRlLXktMC41IGJnLVsjRkY2QTNEXSBncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0wIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTBcIlxyXG4gICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVsYXRpdmUgYmxvY2sgcHgtOCBweS0zIGJnLVsjMUEyMjM4XSBib3JkZXIgYm9yZGVyLWN1cnJlbnRcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPScvJz5HbyBIb21lPC9hPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvbWFpbj5cclxuICAgIClcclxuICAgfSovXHJcbiAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYocm91dGVyLnF1ZXJ5Py5oYW5kbGUpe1xyXG4gICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2dldC9zb2NpYWxzLyR7cm91dGVyLnF1ZXJ5LmhhbmRsZX1gKS50aGVuKHJlcz0+cmVzLmpzb24oKSkudGhlbigoZGF0YSk9PntcclxuICAgICAgLy8gIGlmKGRhdGEuc3RhdHVzPT09XCJlcnJvclwiKXtcclxuICAgICAgICAvLyAgdG9hc3QuZXJyb3IoZGF0YS5lcnJvcilcclxuICAgICAgIC8vIH1cclxuICAgICAgICBpZihkYXRhLnN0YXR1cz09PSdzdWNjZXNzJyl7XHJcbiAgICAgICAgICBzZXRTb2NpYWxNZWRpYShkYXRhLnNvY2lhbE1lZGlhKVxyXG4gICAgICAgICAgc2V0VXNlckRhdGEoZGF0YS51c2VyKVxyXG4gICAgICAgICAgdG9hc3QoJ1NvY2lhbHMgZm91bmQgJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL2Vsc2V7XHJcbiAgICAvLyAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBTb2NpYWxzJylcclxuICAvLyAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnldKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXIgY2xhc3NOYW1lPScgb3ZlcmZsb3cteS1hdXRvICBhYnNvbHV0ZSc+XHJcbiAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgcmVsYXRpdmUnPlxyXG5cclxuICAgICAgXHJcbiAgICAgICAgIDxMaW5rVHJlZSBkYXRhPXt1c2VyRGF0YX0gY2xhc3NOYW1lPSdmaXhlZCcgPjwvTGlua1RyZWU+XHJcbiAgICAgICAgIDxTb2NpYWx0cmF5cyBzb2NpYWxNZWRpYT17c29jaWFsTWVkaWF9ID48L1NvY2lhbHRyYXlzPlxyXG4gICAgICAgIFxyXG4gICAgICAgICA8QkdJbWFnZT48L0JHSW1hZ2U+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxCR0ltYWdlPjwvQkdJbWFnZT5cclxuICAgIDwvV3JhcHBlcj5cclxuICAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIYW5kbGUiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJ0b2FzdCIsIkxpbmtUcmVlIiwiTGlua0NvbnRhaW5lciIsIlNvY2lhbHRyYXlzIiwidXNlUm91dGVyIiwiTGluayIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsIlVzZXJDb250ZXh0IiwiZHluYW1pYyIsInN0eWxlZCIsIkJHSW1hZ2UiLCJIYW5kbGUiLCJXcmFwcGVyIiwiZGl2IiwiQmFja2dyb3VuZEltYWdlIiwic3NyIiwibG9hZGluZyIsInAiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiZGF0YSIsInNldERhdGEiLCJ1c2VyRm91bmQiLCJzZXRVc2VyRm91bmQiLCJzb2NpYWxNZWRpYSIsInNldFNvY2lhbE1lZGlhIiwicm91dGVyIiwicXVlcnkiLCJoYW5kbGUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic3RhdHVzIiwidXNlciIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[handle].js\n"));

/***/ })

});