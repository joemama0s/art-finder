"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/context.tsx":
/*!*************************!*\
  !*** ./lib/context.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"useUser\": function() { return /* binding */ useUser; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_tylerquast_coding_art_finder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_tylerquast_coding_art_finder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_tylerquast_coding_art_finder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nfunction AuthContext(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), user = ref[0], setUser = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        checkUser();\n    }, []);\n    function checkUser() {\n        return _checkUser.apply(this, arguments);\n    }\n    function _checkUser() {\n        _checkUser = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_Users_tylerquast_coding_art_finder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tmp, db, q, querySnapshot;\n            return _Users_tylerquast_coding_art_finder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        tmp = {\n                            email: \"IDK\",\n                            username: \"My username\"\n                        };\n                        db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)();\n                        q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(db, \"users\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(\"uid\", \"==\", \"Rw0BDsOK6wZtx48q3Sfp33zIoU43\"));\n                        _ctx.next = 5;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);\n                    case 5:\n                        querySnapshot = _ctx.sent;\n                        querySnapshot.forEach(function(doc) {\n                            // doc.data() is never undefined for query doc snapshots\n                            console.log(doc.id, \" => \", doc.data());\n                        });\n                        setUser(tmp);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _checkUser.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user: user,\n            setUser: setUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/tylerquast/coding/art-finder/lib/context.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n};\n_s(AuthContext, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = AuthContext;\nvar useUser = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(UserContext);\n}; // export const UserContext = createContext({\n //   user: null,\n //   username: \"\",\n // });\n // import {\n //     createContext,\n //     ReactElement,\n //     useState,\n //     Dispatch,\n //     SetStateAction,\n //     useEffect,\n //     useContext,\n //   } from \"react\";\n //   import { CognitoUser } from \"@aws-amplify/auth\";\n //   import { Auth, Hub } from \"aws-amplify\";\n //   const UserContext = createContext<UserContextType>({} as UserContextType);\n //   interface Props {\n //     children: React.ReactElement;\n //   }\n //   export default function AuthContext({ children }: Props): ReactElement {\n //     const [user, setUser] = useState<CognitoUser | null>(null);\n //     useEffect(() => {\n //       checkUser();\n //     }, []);\n //     useEffect(() => {\n //       Hub.listen(\"auth\", () => {\n //         // Perform some action to update state when an auth event is detected\n //         checkUser();\n //       });\n //     });\n //     async function checkUser() {\n //       try {\n //         const amplifyUser = await Auth.currentAuthenticatedUser();\n //         if (amplifyUser) {\n //           setUser(amplifyUser);\n //         }\n //       } catch {\n //         setUser(null);\n //       }\n //     }\n //     return (\n //       <UserContext.Provider value={{ user, setUser }}>\n //         {children}\n //       </UserContext.Provider>\n //     );\n //   }\n //   export const useUser = (): UserContextType => useContext(UserContext);\n_s1(useUser, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFRZTtBQVlhOztBQWdCNUIsSUFBTVMsV0FBVyxpQkFBR1Qsb0RBQWEsQ0FBa0IsRUFBRSxDQUFvQjtBQUUxRCxTQUFTVSxXQUFXLENBQUMsS0FBbUIsRUFBZ0I7UUFBbkMsUUFBVSxHQUFWLEtBQW1CLENBQWpCQyxRQUFROztJQUM1QyxJQUF3QlYsR0FBK0IsR0FBL0JBLCtDQUFRLENBQWtCLElBQUksQ0FBQyxFQUFoRFcsSUFBSSxHQUFhWCxHQUErQixHQUE1QyxFQUFFWSxPQUFPLEdBQUlaLEdBQStCLEdBQW5DO0lBRXBCQyxnREFBUyxDQUFDLFdBQU07UUFDZFksU0FBUyxFQUFFLENBQUM7S0FDYixFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBRVFBLFNBQVM7ZUFBVEEsVUFBUzs7YUFBVEEsVUFBUztRQUFUQSxVQUFTLEdBQXhCLHNQQUEyQjtnQkFDckJDLEdBQUcsRUFLREMsRUFBRSxFQUVGQyxDQUFDLEVBS0RDLGFBQWE7Ozs7d0JBWmZILEdBQUcsR0FBYTs0QkFDbEJJLEtBQUssRUFBRSxLQUFLOzRCQUNaQyxRQUFRLEVBQUUsYUFBYTt5QkFDeEIsQ0FBQzt3QkFFSUosRUFBRSxHQUFHWixnRUFBWSxFQUFFLENBQUM7d0JBRXBCYSxDQUFDLEdBQUdYLHlEQUFLLENBQ2JELDhEQUFVLENBQUNXLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFDdkJULHlEQUFLLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSw4QkFBOEIsQ0FBQyxDQUNuRCxDQUFDOzsrQkFFMEJDLDJEQUFPLENBQUNTLENBQUMsQ0FBQzs7d0JBQWhDQyxhQUFhLFlBQW1CO3dCQUN0Q0EsYUFBYSxDQUFDRyxPQUFPLENBQUMsU0FBQ0MsR0FBRyxFQUFLOzRCQUM3Qix3REFBd0Q7NEJBQ3hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDRyxFQUFFLEVBQUUsTUFBTSxFQUFFSCxHQUFHLENBQUNJLElBQUksRUFBRSxDQUFDLENBQUM7eUJBQ3pDLENBQUMsQ0FBQzt3QkFDSGIsT0FBTyxDQUFDRSxHQUFHLENBQUMsQ0FBQzs7Ozs7O1NBQ2Q7ZUFuQmNELFVBQVM7O0lBb0J4QixxQkFDRSw4REFBQ0wsV0FBVyxDQUFDa0IsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRWhCLElBQUksRUFBSkEsSUFBSTtZQUFFQyxPQUFPLEVBQVBBLE9BQU87U0FBRTtrQkFDM0NGLFFBQVE7Ozs7O1lBQ1ksQ0FDdkI7Q0FDSDtHQWhDdUJELFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQWtDNUIsSUFBTW1CLE9BQU8sR0FBRyxXQUF1QjFCOztJQUFBQSxPQUFBQSxpREFBVSxDQUFDTSxXQUFXLENBQUM7Q0FBQSxDQUFDLENBQ3RFLDZDQUE2QztDQUM3QyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLE1BQU07Q0FFTixXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixxREFBcUQ7Q0FDckQsNkNBQTZDO0NBRTdDLCtFQUErRTtDQUUvRSxzQkFBc0I7Q0FDdEIsb0NBQW9DO0NBQ3BDLE1BQU07Q0FFTiw2RUFBNkU7Q0FDN0Usa0VBQWtFO0NBRWxFLHdCQUF3QjtDQUN4QixxQkFBcUI7Q0FDckIsY0FBYztDQUVkLHdCQUF3QjtDQUN4QixtQ0FBbUM7Q0FDbkMsZ0ZBQWdGO0NBQ2hGLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osVUFBVTtDQUVWLG1DQUFtQztDQUNuQyxjQUFjO0NBQ2QscUVBQXFFO0NBQ3JFLDZCQUE2QjtDQUM3QixrQ0FBa0M7Q0FDbEMsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsVUFBVTtDQUNWLFFBQVE7Q0FFUixlQUFlO0NBQ2YseURBQXlEO0NBQ3pELHFCQUFxQjtDQUNyQixnQ0FBZ0M7Q0FDaEMsU0FBUztDQUNULE1BQU07Q0FFTiwyRUFBMkU7SUF4RDlEb0IsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvY29udGV4dC50c3g/NGVmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVDb250ZXh0LFxuICBSZWFjdEVsZW1lbnQsXG4gIHVzZVN0YXRlLFxuICBEaXNwYXRjaCxcbiAgU2V0U3RhdGVBY3Rpb24sXG4gIHVzZUVmZmVjdCxcbiAgdXNlQ29udGV4dCxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xuaW1wb3J0IHsgZmlyZXN0b3JlLCBhdXRoIH0gZnJvbSBcIi4uL2xpYi9maXJlYmFzZVwiO1xuaW1wb3J0IHtcbiAgZ2V0RmlyZXN0b3JlLFxuICBjb2xsZWN0aW9uLFxuICBxdWVyeSxcbiAgd2hlcmUsXG4gIGdldERvY3MsXG4gIGRvYyxcbiAgRG9jdW1lbnREYXRhLFxuICBRdWVyeSxcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5pbnRlcmZhY2UgVXNlckRhdGEge1xuICBlbWFpbDogU3RyaW5nO1xuICB1c2VybmFtZTogU3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVXNlckNvbnRleHRUeXBlIHtcbiAgdXNlcjogVXNlckRhdGEgfCBudWxsO1xuICBzZXRVc2VyOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxVc2VyRGF0YSB8IG51bGw+Pjtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0RWxlbWVudDtcbn1cblxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFVzZXJDb250ZXh0VHlwZT4oe30gYXMgVXNlckNvbnRleHRUeXBlKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aENvbnRleHQoeyBjaGlsZHJlbiB9OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXJEYXRhIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja1VzZXIoKTtcbiAgfSwgW10pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGNoZWNrVXNlcigpIHtcbiAgICBsZXQgdG1wOiBVc2VyRGF0YSA9IHtcbiAgICAgIGVtYWlsOiBcIklES1wiLFxuICAgICAgdXNlcm5hbWU6IFwiTXkgdXNlcm5hbWVcIixcbiAgICB9O1xuXG4gICAgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKTtcblxuICAgIGNvbnN0IHEgPSBxdWVyeShcbiAgICAgIGNvbGxlY3Rpb24oZGIsIFwidXNlcnNcIiksXG4gICAgICB3aGVyZShcInVpZFwiLCBcIj09XCIsIFwiUncwQkRzT0s2d1p0eDQ4cTNTZnAzM3pJb1U0M1wiKVxuICAgICk7XG5cbiAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcbiAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgLy8gZG9jLmRhdGEoKSBpcyBuZXZlciB1bmRlZmluZWQgZm9yIHF1ZXJ5IGRvYyBzbmFwc2hvdHNcbiAgICAgIGNvbnNvbGUubG9nKGRvYy5pZCwgXCIgPT4gXCIsIGRvYy5kYXRhKCkpO1xuICAgIH0pO1xuICAgIHNldFVzZXIodG1wKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBzZXRVc2VyIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VVc2VyID0gKCk6IFVzZXJDb250ZXh0VHlwZSA9PiB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbi8vIGV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuLy8gICB1c2VyOiBudWxsLFxuLy8gICB1c2VybmFtZTogXCJcIixcbi8vIH0pO1xuXG4vLyBpbXBvcnQge1xuLy8gICAgIGNyZWF0ZUNvbnRleHQsXG4vLyAgICAgUmVhY3RFbGVtZW50LFxuLy8gICAgIHVzZVN0YXRlLFxuLy8gICAgIERpc3BhdGNoLFxuLy8gICAgIFNldFN0YXRlQWN0aW9uLFxuLy8gICAgIHVzZUVmZmVjdCxcbi8vICAgICB1c2VDb250ZXh0LFxuLy8gICB9IGZyb20gXCJyZWFjdFwiO1xuLy8gICBpbXBvcnQgeyBDb2duaXRvVXNlciB9IGZyb20gXCJAYXdzLWFtcGxpZnkvYXV0aFwiO1xuLy8gICBpbXBvcnQgeyBBdXRoLCBIdWIgfSBmcm9tIFwiYXdzLWFtcGxpZnlcIjtcblxuLy8gICBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VXNlckNvbnRleHRUeXBlPih7fSBhcyBVc2VyQ29udGV4dFR5cGUpO1xuXG4vLyAgIGludGVyZmFjZSBQcm9wcyB7XG4vLyAgICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0RWxlbWVudDtcbi8vICAgfVxuXG4vLyAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhDb250ZXh0KHsgY2hpbGRyZW4gfTogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xuLy8gICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPENvZ25pdG9Vc2VyIHwgbnVsbD4obnVsbCk7XG5cbi8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgICAgY2hlY2tVc2VyKCk7XG4vLyAgICAgfSwgW10pO1xuXG4vLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICAgIEh1Yi5saXN0ZW4oXCJhdXRoXCIsICgpID0+IHtcbi8vICAgICAgICAgLy8gUGVyZm9ybSBzb21lIGFjdGlvbiB0byB1cGRhdGUgc3RhdGUgd2hlbiBhbiBhdXRoIGV2ZW50IGlzIGRldGVjdGVkXG4vLyAgICAgICAgIGNoZWNrVXNlcigpO1xuLy8gICAgICAgfSk7XG4vLyAgICAgfSk7XG5cbi8vICAgICBhc3luYyBmdW5jdGlvbiBjaGVja1VzZXIoKSB7XG4vLyAgICAgICB0cnkge1xuLy8gICAgICAgICBjb25zdCBhbXBsaWZ5VXNlciA9IGF3YWl0IEF1dGguY3VycmVudEF1dGhlbnRpY2F0ZWRVc2VyKCk7XG4vLyAgICAgICAgIGlmIChhbXBsaWZ5VXNlcikge1xuLy8gICAgICAgICAgIHNldFVzZXIoYW1wbGlmeVVzZXIpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9IGNhdGNoIHtcbi8vICAgICAgICAgc2V0VXNlcihudWxsKTtcbi8vICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIHNldFVzZXIgfX0+XG4vLyAgICAgICAgIHtjaGlsZHJlbn1cbi8vICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4vLyAgICAgKTtcbi8vICAgfVxuXG4vLyAgIGV4cG9ydCBjb25zdCB1c2VVc2VyID0gKCk6IFVzZXJDb250ZXh0VHlwZSA9PiB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiZ2V0RmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwid2hlcmUiLCJnZXREb2NzIiwiVXNlckNvbnRleHQiLCJBdXRoQ29udGV4dCIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJjaGVja1VzZXIiLCJ0bXAiLCJkYiIsInEiLCJxdWVyeVNuYXBzaG90IiwiZW1haWwiLCJ1c2VybmFtZSIsImZvckVhY2giLCJkb2MiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJkYXRhIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/context.tsx\n"));

/***/ })

});