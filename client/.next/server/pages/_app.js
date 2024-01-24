/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/userContext.js":
/*!************************************!*\
  !*** ./src/context/userContext.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC91c2VyQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsNEJBQWNELG9EQUFhQSxDQUFDO0FBQ2xDLGlFQUFlQyxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbnRleHQvdXNlckNvbnRleHQuanM/NWFlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDb250ZXh0Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJVc2VyQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/userContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/nprogress.css */ \"./src/styles/nprogress.css\");\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/userContext */ \"./src/context/userContext.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_6__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n//import styles from './apply.module.css'\n\n\n\n\n\n\n\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_10__.createGlobalStyle`\n  body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n`;\nconst theme = {\n    colors: {\n        primary: \"#0070f3\"\n    }\n};\nfunction App({ Component, pageProps }) {\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        bio: \"\",\n        avatar: \"\",\n        handle: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleStart = ()=>{\n            setIsLoading(true);\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        const handleComplete = ()=>{\n            setIsLoading(false);\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();\n        };\n        router.events.on(\"routeChangeStart\", handleStart);\n        router.events.on(\"routeChangeComplete\", handleComplete);\n        router.events.on(\"routeChangeError\", handleComplete);\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handleStart);\n            router.events.off(\"routeChangeComplete\", handleComplete);\n            router.events.off(\"routeChangeError\", handleComplete);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider, {\n                theme: theme,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        strategy: \"lazyOnload\",\n                        src: `https://www.googletagmanager.com/gtag/js?id=G-WYTYXQXVK6`\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 64,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {\n                        strategy: \"lazyOnload\",\n                        children: `\n                    window.dataLayer = window.dataLayer || [];\n                    function gtag(){dataLayer.push(arguments);}\n                    gtag('js', new Date());\n                    gtag('config', 'G-WYTYXQXVK6', {\n                    page_path: window.location.pathname,\n                    });\n                `\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 65,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_userContext__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Provider, {\n                        value: {\n                            userData,\n                            setUserData\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 77,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {}, void 0, false, {\n                                fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 78,\n                                columnNumber: 5\n                            }, this),\n                            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"nprogress-custom-parent\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"nprogress-custom-bar\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\pages\\\\_app.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 60\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 79,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 76,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 63,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0U7QUFDL0IseUNBQXlDO0FBQ0c7QUFDSjtBQUNOO0FBQ0Q7QUFDYztBQUNBO0FBQ2Q7QUFDZ0I7QUFJbUI7QUFFcEUsTUFBTVMsY0FBY0YsaUVBQWlCLENBQUM7Ozs7OztBQU10QyxDQUFDO0FBRUQsTUFBTUcsUUFBUTtJQUNaQyxRQUFRO1FBQ05DLFNBQVM7SUFDWDtBQUNGO0FBRWUsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNoRCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1rQixTQUFTaEIsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ2lCLFVBQVVDLFlBQVksR0FBR3BCLCtDQUFRQSxDQUFDO1FBQ3ZDcUIsTUFBTTtRQUNOQyxLQUFJO1FBQ0pDLFFBQU87UUFDUEMsUUFBTztJQUNUO0lBQ0F2QixnREFBU0EsQ0FBQztRQUNSLE1BQU13QixjQUFjO1lBQ2xCUixhQUFhO1lBQ2JkLHNEQUFlO1FBQ2pCO1FBQ0EsTUFBTXdCLGlCQUFpQjtZQUNyQlYsYUFBYTtZQUNiZCxxREFBYztRQUNoQjtRQUVBZSxPQUFPVyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxvQkFBb0JMO1FBQ3JDUCxPQUFPVyxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUJIO1FBQ3hDVCxPQUFPVyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxvQkFBb0JIO1FBRXJDLE9BQU87WUFDTFQsT0FBT1csTUFBTSxDQUFDRSxHQUFHLENBQUMsb0JBQW9CTjtZQUN0Q1AsT0FBT1csTUFBTSxDQUFDRSxHQUFHLENBQUMsdUJBQXVCSjtZQUN6Q1QsT0FBT1csTUFBTSxDQUFDRSxHQUFHLENBQUMsb0JBQW9CSjtRQUN4QztJQUNGLEdBQUcsRUFBRTtJQUNQLHFCQUNFOzswQkFDQSw4REFBQ2xCOzs7OzswQkFDRCw4REFBQ0QsNkRBQWFBO2dCQUFDRSxPQUFPQTs7a0NBQ3RCLDhEQUFDTCxvREFBTUE7d0JBQUMyQixVQUFTO3dCQUFhQyxLQUFLLENBQUMsd0RBQXdELENBQUM7Ozs7OztrQ0FDN0YsOERBQUM1QixvREFBTUE7d0JBQUMyQixVQUFTO2tDQUNKLENBQUM7Ozs7Ozs7Z0JBT0YsQ0FBQzs7Ozs7O2tDQUdiLDhEQUFDMUIscUVBQW9CO3dCQUFDNkIsT0FBUzs0QkFBQ2hCOzRCQUFVQzt3QkFBVzs7MENBQ3JELDhEQUFDTjtnQ0FBVyxHQUFHQyxTQUFTOzs7Ozs7MENBQ3hCLDhEQUFDWCwwREFBY0E7Ozs7OzRCQUNkWSwyQkFBYSw4REFBQ29CO2dDQUFJQyxXQUFVOzBDQUEwQiw0RUFBQ0Q7b0NBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbi8vaW1wb3J0IHN0eWxlcyBmcm9tICcuL2FwcGx5Lm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvbnByb2dyZXNzLmNzcyc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lcn0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnO1xuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvdXNlckNvbnRleHQnO1xuXG5cblxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuYFxuXG5jb25zdCB0aGVtZSA9IHtcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogJyMwMDcwZjMnLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgYmlvOicnLFxuICAgICAgYXZhdGFyOicnLFxuICAgICAgaGFuZGxlOicnXG4gICAgfSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICB9O1xuICAgICAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgICB9O1xuICBcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlQ29tcGxldGUpO1xuICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZUNvbXBsZXRlKTtcbiAgXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVDb21wbGV0ZSk7XG4gICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlQ29tcGxldGUpO1xuICAgICAgfTtcbiAgICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8R2xvYmFsU3R5bGUvPlxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgPFNjcmlwdCBzdHJhdGVneT1cImxhenlPbmxvYWRcIiBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctV1lUWVhRWFZLNmB9IC8+XG4gICAgPFNjcmlwdCBzdHJhdGVneT1cImxhenlPbmxvYWRcIj5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgICAgICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICBndGFnKCdjb25maWcnLCAnRy1XWVRZWFFYVks2Jywge1xuICAgICAgICAgICAgICAgICAgICBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYH1cbiAgICA8L1NjcmlwdD5cbiAgIFxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZSA9IHt7dXNlckRhdGEsIHNldFVzZXJEYXRhfX0+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgIHtpc0xvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudFwiPjxkaXYgY2xhc3NOYW1lPVwibnByb2dyZXNzLWN1c3RvbS1iYXJcIi8+PC9kaXY+fVxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuXG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIk5Qcm9ncmVzcyIsIlRvYXN0Q29udGFpbmVyIiwiU2NyaXB0IiwiVXNlckNvbnRleHQiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlRoZW1lUHJvdmlkZXIiLCJHbG9iYWxTdHlsZSIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInJvdXRlciIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJuYW1lIiwiYmlvIiwiYXZhdGFyIiwiaGFuZGxlIiwiaGFuZGxlU3RhcnQiLCJzdGFydCIsImhhbmRsZUNvbXBsZXRlIiwiZG9uZSIsImV2ZW50cyIsIm9uIiwib2ZmIiwic3RyYXRlZ3kiLCJzcmMiLCJQcm92aWRlciIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/nprogress.css":
/*!**********************************!*\
  !*** ./src/styles/nprogress.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();