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

/***/ "./src/component/BGImage.js":
/*!**********************************!*\
  !*** ./src/component/BGImage.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: fixed;\\n  z-index: -1;\\n  top: 0;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst Box = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = Box;\nfunction getWindowDimensions() {\n    const { innerWidth: width, innerHeight: height } = window;\n    return {\n        width,\n        height\n    };\n}\nfunction BGImage() {\n    _s();\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [height, setheight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const { width, height } = getWindowDimensions();\n        setWidth(width);\n        setheight(height);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        function handleResize() {\n            const { width, height } = getWindowDimensions();\n            setWidth(width);\n            setheight(height);\n        }\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    if (width && height) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Box, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: \"https://source.unsplash.com/\".concat(width, \"x\").concat(height, \"/?funky,vibrant,abstractcolors\"),\n                width: width,\n                height: height,\n                \"z-index\": -100\n            }, void 0, false, {\n                fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\component\\\\BGImage.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\LinkTree nxt\\\\client\\\\src\\\\component\\\\BGImage.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this);\n    }\n    return null;\n}\n_s(BGImage, \"yiTo/OB7S1qldbkMCEPX5S6b/Hs=\");\n_c1 = BGImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BGImage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Box\");\n$RefreshReg$(_c1, \"BGImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L0JHSW1hZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2I7QUFDUTtBQUV2QyxNQUFNSSxNQUFNRCw2REFBVTtLQUFoQkM7QUFNTixTQUFTRTtJQUNQLE1BQU0sRUFBRUMsWUFBWUMsS0FBSyxFQUFFQyxhQUFhQyxNQUFNLEVBQUUsR0FBR0M7SUFDbkQsT0FBTztRQUNMSDtRQUNBRTtJQUNGO0FBQ0Y7QUFFQSxTQUFTRTs7SUFDUCxNQUFNLENBQUNKLE9BQU9LLFNBQVMsR0FBR1osK0NBQVFBO0lBQ2xDLE1BQU0sQ0FBQ1MsUUFBUUksVUFBVSxHQUFHYiwrQ0FBUUE7SUFFcENELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTSxFQUFFUSxLQUFLLEVBQUVFLE1BQU0sRUFBRSxHQUFHSjtRQUUxQk8sU0FBU0w7UUFFVE0sVUFBVUo7SUFDWixHQUFHLEVBQUU7SUFFTFYsZ0RBQVNBLENBQUM7UUFDUixTQUFTZTtZQUNQLE1BQU0sRUFBRVAsS0FBSyxFQUFFRSxNQUFNLEVBQUUsR0FBR0o7WUFFMUJPLFNBQVNMO1lBRVRNLFVBQVVKO1FBQ1o7UUFFQUMsT0FBT0ssZ0JBQWdCLENBQUMsVUFBVUQ7UUFDbEMsT0FBTyxJQUFNSixPQUFPTSxtQkFBbUIsQ0FBQyxVQUFVRjtJQUNwRCxHQUFHLEVBQUU7SUFFTCxJQUFJUCxTQUFTRSxRQUFRO1FBQ25CLHFCQUNFLDhEQUFDTjtzQkFDQyw0RUFBQ0YsbURBQUtBO2dCQUNKZ0IsS0FBSywrQkFBd0NSLE9BQVRGLE9BQU0sS0FBVSxPQUFQRSxRQUFPO2dCQUNwREYsT0FBT0E7Z0JBQ1BFLFFBQVFBO2dCQUNSUyxXQUFXLENBQUM7Ozs7Ozs7Ozs7O0lBSXBCO0lBRUEsT0FBTztBQUNUO0dBdkNTUDtNQUFBQTtBQXlDVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L0JHSW1hZ2UuanM/Yzg2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgdG9wOiAwO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93RGltZW5zaW9ucygpIHtcclxuICBjb25zdCB7IGlubmVyV2lkdGg6IHdpZHRoLCBpbm5lckhlaWdodDogaGVpZ2h0IH0gPSB3aW5kb3c7XHJcbiAgcmV0dXJuIHtcclxuICAgIHdpZHRoLFxyXG4gICAgaGVpZ2h0LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJHSW1hZ2UoKSB7XHJcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtoZWlnaHQsIHNldGhlaWdodF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBnZXRXaW5kb3dEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgc2V0V2lkdGgod2lkdGgpO1xyXG5cclxuICAgIHNldGhlaWdodChoZWlnaHQpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBnZXRXaW5kb3dEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgICBzZXRXaWR0aCh3aWR0aCk7XHJcblxyXG4gICAgICBzZXRoZWlnaHQoaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAod2lkdGggJiYgaGVpZ2h0KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtgaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLyR7d2lkdGh9eCR7aGVpZ2h0fS8/ZnVua3ksdmlicmFudCxhYnN0cmFjdGNvbG9yc2B9XHJcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICAgIHotaW5kZXggPSB7LTEwMH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0JveD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQkdJbWFnZTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsInN0eWxlZCIsIkJveCIsImRpdiIsImdldFdpbmRvd0RpbWVuc2lvbnMiLCJpbm5lcldpZHRoIiwid2lkdGgiLCJpbm5lckhlaWdodCIsImhlaWdodCIsIndpbmRvdyIsIkJHSW1hZ2UiLCJzZXRXaWR0aCIsInNldGhlaWdodCIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3JjIiwiei1pbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/BGImage.js\n"));

/***/ })

});