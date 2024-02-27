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

/***/ "./src/contexts/ActiveItemContext.js":
/*!*******************************************!*\
  !*** ./src/contexts/ActiveItemContext.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ActiveItemProvider: () => (/* binding */ ActiveItemProvider),\n/* harmony export */   useActiveItem: () => (/* binding */ useActiveItem)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ActiveItemContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useActiveItem = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ActiveItemContext);\nconst ActiveItemProvider = ({ children })=>{\n    const [activeItem, setActiveItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Dashboard\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ActiveItemContext.Provider, {\n        value: {\n            activeItem,\n            setActiveItem\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Recruit IN\\\\recruit-inn-fe\\\\recruitinn\\\\src\\\\contexts\\\\ActiveItemContext.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQWN0aXZlSXRlbUNvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0RDtBQUU1RCxNQUFNRyxrQ0FBb0JILG9EQUFhQTtBQUVoQyxNQUFNSSxnQkFBZ0IsSUFBTUgsaURBQVVBLENBQUNFLG1CQUFtQjtBQUUxRCxNQUFNRSxxQkFBcUIsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDN0MsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO0lBRTdDLHFCQUNFLDhEQUFDQyxrQkFBa0JNLFFBQVE7UUFBQ0MsT0FBTztZQUFFSDtZQUFZQztRQUFjO2tCQUM1REY7Ozs7OztBQUdQLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNydWl0aW5uLy4vc3JjL2NvbnRleHRzL0FjdGl2ZUl0ZW1Db250ZXh0LmpzPzAxMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBY3RpdmVJdGVtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBY3RpdmVJdGVtID0gKCkgPT4gdXNlQ29udGV4dChBY3RpdmVJdGVtQ29udGV4dCk7XHJcblxyXG5leHBvcnQgY29uc3QgQWN0aXZlSXRlbVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKCdEYXNoYm9hcmQnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBY3RpdmVJdGVtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBhY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0FjdGl2ZUl0ZW1Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJBY3RpdmVJdGVtQ29udGV4dCIsInVzZUFjdGl2ZUl0ZW0iLCJBY3RpdmVJdGVtUHJvdmlkZXIiLCJjaGlsZHJlbiIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/ActiveItemContext.js\n");

/***/ }),

/***/ "./src/contexts/ExpertiseContext.js":
/*!******************************************!*\
  !*** ./src/contexts/ExpertiseContext.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExpertiseItemProvider: () => (/* binding */ ExpertiseItemProvider),\n/* harmony export */   useExpertiseContext: () => (/* binding */ useExpertiseContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ExpertiseItemContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useExpertiseContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ExpertiseItemContext);\nconst ExpertiseItemProvider = ({ children })=>{\n    const [expertiseItem, setExpertiseItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExpertiseItemContext.Provider, {\n        value: {\n            expertiseItem,\n            setExpertiseItem\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Recruit IN\\\\recruit-inn-fe\\\\recruitinn\\\\src\\\\contexts\\\\ExpertiseContext.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvRXhwZXJ0aXNlQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTREO0FBRTVELE1BQU1HLHFDQUF1Qkgsb0RBQWFBO0FBRW5DLE1BQU1JLHNCQUFzQixJQUFNSCxpREFBVUEsQ0FBQ0Usc0JBQXNCO0FBRW5FLE1BQU1FLHdCQUF3QixDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUM5QyxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUVuRCxxQkFDSSw4REFBQ0MscUJBQXFCTSxRQUFRO1FBQUNDLE9BQU87WUFBRUg7WUFBZUM7UUFBaUI7a0JBQ25FRjs7Ozs7O0FBR2IsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY3J1aXRpbm4vLi9zcmMvY29udGV4dHMvRXhwZXJ0aXNlQ29udGV4dC5qcz9hNjYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRXhwZXJ0aXNlSXRlbUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRXhwZXJ0aXNlQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoRXhwZXJ0aXNlSXRlbUNvbnRleHQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEV4cGVydGlzZUl0ZW1Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtleHBlcnRpc2VJdGVtLCBzZXRFeHBlcnRpc2VJdGVtXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEV4cGVydGlzZUl0ZW1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGV4cGVydGlzZUl0ZW0sIHNldEV4cGVydGlzZUl0ZW0gfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0V4cGVydGlzZUl0ZW1Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkV4cGVydGlzZUl0ZW1Db250ZXh0IiwidXNlRXhwZXJ0aXNlQ29udGV4dCIsIkV4cGVydGlzZUl0ZW1Qcm92aWRlciIsImNoaWxkcmVuIiwiZXhwZXJ0aXNlSXRlbSIsInNldEV4cGVydGlzZUl0ZW0iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/ExpertiseContext.js\n");

/***/ }),

/***/ "./src/contexts/QuestionsContent.js":
/*!******************************************!*\
  !*** ./src/contexts/QuestionsContent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TestProvider: () => (/* binding */ TestProvider),\n/* harmony export */   useTest: () => (/* binding */ useTest)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst TestContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useTest = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TestContext);\nconst TestProvider = ({ children })=>{\n    const [test, setTest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TestContext.Provider, {\n        value: {\n            test,\n            setTest\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Recruit IN\\\\recruit-inn-fe\\\\recruitinn\\\\src\\\\contexts\\\\QuestionsContent.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvUXVlc3Rpb25zQ29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1FO0FBRW5FLE1BQU1JLDRCQUFjSCxvREFBYUE7QUFFMUIsTUFBTUksVUFBVSxJQUFNRixpREFBVUEsQ0FBQ0MsYUFBYTtBQUU5QyxNQUFNRSxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVqQyxxQkFDRSw4REFBQ0UsWUFBWU0sUUFBUTtRQUFDQyxPQUFPO1lBQUVIO1lBQU1DO1FBQVE7a0JBQzFDRjs7Ozs7O0FBR1AsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY3J1aXRpbm4vLi9zcmMvY29udGV4dHMvUXVlc3Rpb25zQ29udGVudC5qcz9hNjlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFRlc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVRlc3QgPSAoKSA9PiB1c2VDb250ZXh0KFRlc3RDb250ZXh0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXN0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGVzdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdGVzdCwgc2V0VGVzdCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9UZXN0Q29udGV4dC5Qcm92aWRlcj5cclxuICApOyAgXHJcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIlRlc3RDb250ZXh0IiwidXNlVGVzdCIsIlRlc3RQcm92aWRlciIsImNoaWxkcmVuIiwidGVzdCIsInNldFRlc3QiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/QuestionsContent.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ActiveItemContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ActiveItemContext */ \"./src/contexts/ActiveItemContext.js\");\n/* harmony import */ var _contexts_QuestionsContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/QuestionsContent */ \"./src/contexts/QuestionsContent.js\");\n/* harmony import */ var _contexts_ExpertiseContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/ExpertiseContext */ \"./src/contexts/ExpertiseContext.js\");\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_ExpertiseContext__WEBPACK_IMPORTED_MODULE_4__.ExpertiseItemProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_QuestionsContent__WEBPACK_IMPORTED_MODULE_3__.TestProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_ActiveItemContext__WEBPACK_IMPORTED_MODULE_2__.ActiveItemProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Recruit IN\\\\recruit-inn-fe\\\\recruitinn\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Recruit IN\\\\recruit-inn-fe\\\\recruitinn\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Recruit IN\\\\recruit-inn-fe\\\\recruitinn\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Recruit IN\\\\recruit-inn-fe\\\\recruitinn\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDc0M7QUFDUjtBQUNTO0FBRXBFLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNILDZFQUFxQkE7a0JBQ3BCLDRFQUFDRCxvRUFBWUE7c0JBQ1gsNEVBQUNELDJFQUFrQkE7MEJBQ2pCLDRFQUFDSTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY3J1aXRpbm4vLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCB7IEFjdGl2ZUl0ZW1Qcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL0FjdGl2ZUl0ZW1Db250ZXh0JztcclxuaW1wb3J0IHsgVGVzdFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvUXVlc3Rpb25zQ29udGVudCdcclxuaW1wb3J0IHsgRXhwZXJ0aXNlSXRlbVByb3ZpZGVyIH0gZnJvbSAnQC9jb250ZXh0cy9FeHBlcnRpc2VDb250ZXh0JztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RXhwZXJ0aXNlSXRlbVByb3ZpZGVyPlxyXG4gICAgICA8VGVzdFByb3ZpZGVyPlxyXG4gICAgICAgIDxBY3RpdmVJdGVtUHJvdmlkZXI+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9BY3RpdmVJdGVtUHJvdmlkZXI+XHJcbiAgICAgIDwvVGVzdFByb3ZpZGVyPlxyXG4gICAgPC9FeHBlcnRpc2VJdGVtUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbIkFjdGl2ZUl0ZW1Qcm92aWRlciIsIlRlc3RQcm92aWRlciIsIkV4cGVydGlzZUl0ZW1Qcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();