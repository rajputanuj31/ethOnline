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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/infura */ \"wagmi/providers/infura\");\n/* harmony import */ var _styles_tailwind_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/tailwind.scss */ \"./src/styles/tailwind.scss\");\n/* harmony import */ var _styles_tailwind_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_3__, wagmi_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__]);\n([wagmi__WEBPACK_IMPORTED_MODULE_3__, wagmi_chains__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst { chains, publicClient, webSocketPublicClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.polygon,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.optimism,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.goerli,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.polygonMumbai\n], [\n    (0,wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5__.infuraProvider)({\n        apiKey: process.env.INFURA_API\n    })\n]);\nconst { connectors } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.getDefaultWallets)({\n    appName: \"ETHonline\",\n    chains,\n    projectId: \"123\"\n});\nconst wagmiConfig = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createConfig)({\n    publicClient,\n    webSocketPublicClient,\n    connectors: connectors\n});\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n        config: wagmiConfig,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.RainbowKitProvider, {\n            chains: chains,\n            theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.darkTheme)({\n                accentColor: \"#8E0000\",\n                accentColorForeground: \"white\",\n                borderRadius: \"medium\",\n                fontStack: \"system\",\n                overlayBlur: \"large\"\n            }),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ashutoshjha/Documents/Blockchain/Projects/ethOnline/frontend/src/pages/_app.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ashutoshjha/Documents/Blockchain/Projects/ethOnline/frontend/src/pages/_app.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ashutoshjha/Documents/Blockchain/Projects/ethOnline/frontend/src/pages/_app.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDaUI7QUFFd0I7QUFDYztBQUN6QjtBQUV2QjtBQUN5RDtBQUt6RixNQUFNLEVBQUVhLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxxQkFBcUIsRUFBRSxHQUFHYixzREFBZUEsQ0FDckU7SUFBQ0UsaURBQU9BO0lBQUVDLGlEQUFPQTtJQUFFQyxrREFBUUE7SUFBRUMsZ0RBQU1BO0lBQUVDLHVEQUFhQTtDQUFDLEVBQ25EO0lBQUNDLHNFQUFjQSxDQUFDO1FBQUVPLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUFDO0NBQUc7QUFHdEQsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR1QseUVBQWlCQSxDQUFDO0lBQ3ZDVSxTQUFTO0lBQ1RSO0lBQ0FTLFdBQVc7QUFDYjtBQUVBLE1BQU1DLGNBQWNwQixtREFBWUEsQ0FBQztJQUMvQlc7SUFDQUM7SUFDQUssWUFBWUE7QUFDZDtBQUVBLFNBQVNJLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MscUJBQ0UsOERBQUN6Qiw4Q0FBV0E7UUFBQzBCLFFBQVFKO2tCQUNuQiw0RUFBQ2Isc0VBQWtCQTtZQUFDRyxRQUFRQTtZQUFRZSxPQUFPaEIsaUVBQVNBLENBQUM7Z0JBQ3JEaUIsYUFBYTtnQkFDYkMsdUJBQXVCO2dCQUN2QkMsY0FBYztnQkFDZEMsV0FBVztnQkFDWEMsYUFBYTtZQUNmO3NCQUNJLDRFQUFDUjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCJcbmltcG9ydCB7IFdhZ21pQ29uZmlnLCBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiXG5pbXBvcnQgeyBtYWlubmV0LCBwb2x5Z29uLCBvcHRpbWlzbSwgZ29lcmxpLCBwb2x5Z29uTXVtYmFpIH0gZnJvbSAnd2FnbWkvY2hhaW5zJ1xuaW1wb3J0IHsgaW5mdXJhUHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvaW5mdXJhJ1xuXG5pbXBvcnQgXCIuLi9zdHlsZXMvdGFpbHdpbmQuc2Nzc1wiXG5pbXBvcnQgeyBSYWluYm93S2l0UHJvdmlkZXIsIGdldERlZmF1bHRXYWxsZXRzLCBkYXJrVGhlbWUgfSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwidmllbVwiXG5pbXBvcnQgeyBNZXRhTWFza0Nvbm5lY3RvciB9IGZyb20gJ3dhZ21pL2Nvbm5lY3RvcnMvbWV0YU1hc2snXG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gJ3dhZ21pL2Nvbm5lY3RvcnMvaW5qZWN0ZWQnXG5cbmNvbnN0IHsgY2hhaW5zLCBwdWJsaWNDbGllbnQsIHdlYlNvY2tldFB1YmxpY0NsaWVudCB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbbWFpbm5ldCwgcG9seWdvbiwgb3B0aW1pc20sIGdvZXJsaSwgcG9seWdvbk11bWJhaV0sXG4gIFtpbmZ1cmFQcm92aWRlcih7IGFwaUtleTogcHJvY2Vzcy5lbnYuSU5GVVJBX0FQSSB9KV0sXG4pXG5cbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuICBhcHBOYW1lOiBcIkVUSG9ubGluZVwiLFxuICBjaGFpbnMsXG4gIHByb2plY3RJZDogJzEyMydcbn0pO1xuXG5jb25zdCB3YWdtaUNvbmZpZyA9IGNyZWF0ZUNvbmZpZyh7XG4gIHB1YmxpY0NsaWVudCxcbiAgd2ViU29ja2V0UHVibGljQ2xpZW50LFxuICBjb25uZWN0b3JzOiBjb25uZWN0b3JzXG59KVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjb25maWc9e3dhZ21pQ29uZmlnfT5cbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9IHRoZW1lPXtkYXJrVGhlbWUoe1xuICAgICAgYWNjZW50Q29sb3I6ICcjOEUwMDAwJyxcbiAgICAgIGFjY2VudENvbG9yRm9yZWdyb3VuZDogJ3doaXRlJyxcbiAgICAgIGJvcmRlclJhZGl1czogJ21lZGl1bScsXG4gICAgICBmb250U3RhY2s6ICdzeXN0ZW0nLFxuICAgICAgb3ZlcmxheUJsdXI6ICdsYXJnZScsXG4gICAgfSl9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiV2FnbWlDb25maWciLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDb25maWciLCJtYWlubmV0IiwicG9seWdvbiIsIm9wdGltaXNtIiwiZ29lcmxpIiwicG9seWdvbk11bWJhaSIsImluZnVyYVByb3ZpZGVyIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJkYXJrVGhlbWUiLCJjaGFpbnMiLCJwdWJsaWNDbGllbnQiLCJ3ZWJTb2NrZXRQdWJsaWNDbGllbnQiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiSU5GVVJBX0FQSSIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwicHJvamVjdElkIiwid2FnbWlDb25maWciLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbmZpZyIsInRoZW1lIiwiYWNjZW50Q29sb3IiLCJhY2NlbnRDb2xvckZvcmVncm91bmQiLCJib3JkZXJSYWRpdXMiLCJmb250U3RhY2siLCJvdmVybGF5Qmx1ciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/tailwind.scss":
/*!**********************************!*\
  !*** ./src/styles/tailwind.scss ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ "wagmi/providers/infura":
/*!*****************************************!*\
  !*** external "wagmi/providers/infura" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/infura");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@rainbow-me"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();