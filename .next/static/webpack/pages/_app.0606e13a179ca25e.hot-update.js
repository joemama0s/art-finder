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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"useUser\": function() { return /* binding */ useUser; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_tylerquast_coding_art_finder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_tylerquast_coding_art_finder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_tylerquast_coding_art_finder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.tsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nfunction AuthContext(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), user = ref[0], setUser = ref[1];\n    // On load check if the user is logged in\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        // checkUser();\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.onAuthStateChanged)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, function(user) {\n            if (user) {\n                // User is signed in, see docs for a list of available properties\n                // https://firebase.google.com/docs/reference/js/firebase.User\n                var uid = user.uid;\n            // ...\n            } else {\n            // User is signed out\n            // ...\n            }\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setUser(user);\n    }, [\n        user\n    ]);\n    function getUserDetails(uid) {\n        return _getUserDetails.apply(this, arguments);\n    }\n    function _getUserDetails() {\n        _getUserDetails = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_tylerquast_coding_art_finder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(uid) {\n            var db, q, querySnapshot;\n            return _Users_tylerquast_coding_art_finder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)();\n                        q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"users\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.where)(\"uid\", \"==\", user.uid));\n                        _ctx.next = 4;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(q);\n                    case 4:\n                        querySnapshot = _ctx.sent;\n                        querySnapshot.forEach(function(doc) {\n                            // doc.data() is never undefined for query doc snapshots\n                            console.log(doc.id, \" => \", doc.data());\n                            var tmp = {\n                                email: doc.data().email,\n                                username: doc.data().username\n                            };\n                            setUser(tmp);\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getUserDetails.apply(this, arguments);\n    }\n    function checkUser() {\n        return _checkUser.apply(this, arguments);\n    }\n    function _checkUser() {\n        _checkUser = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_tylerquast_coding_art_finder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var db, q, querySnapshot;\n            return _Users_tylerquast_coding_art_finder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _lib_firebase__WEBPACK_IMPORTED_MODULE_3__.auth;\n                        db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)();\n                        q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"users\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.where)(\"uid\", \"==\", \"Rw0BDsOK6wZtx48q3Sfp33zIoU43\"));\n                        _ctx.next = 5;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(q);\n                    case 5:\n                        querySnapshot = _ctx.sent;\n                        querySnapshot.forEach(function(doc) {\n                            // doc.data() is never undefined for query doc snapshots\n                            console.log(doc.id, \" => \", doc.data());\n                            var tmp = {\n                                email: doc.data().email,\n                                username: doc.data().username\n                            };\n                            setUser(tmp);\n                        });\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _checkUser.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user: user,\n            setUser: setUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/tylerquast/coding/art-finder/lib/context.tsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, this);\n};\n_s(AuthContext, \"J2ZUa9KThBV6uW+KTtJO6m6y82E=\");\n_c = AuthContext;\nvar useUser = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(UserContext);\n}; // TODO Delete below when complete (Leave for tyler)\n // export const UserContext = createContext({\n //   user: null,\n //   username: \"\",\n // });\n // import {\n //     createContext,\n //     ReactElement,\n //     useState,\n //     Dispatch,\n //     SetStateAction,\n //     useEffect,\n //     useContext,\n //   } from \"react\";\n //   import { CognitoUser } from \"@aws-amplify/auth\";\n //   import { Auth, Hub } from \"aws-amplify\";\n //   const UserContext = createContext<UserContextType>({} as UserContextType);\n //   interface Props {\n //     children: React.ReactElement;\n //   }\n //   export default function AuthContext({ children }: Props): ReactElement {\n //     const [user, setUser] = useState<CognitoUser | null>(null);\n //     useEffect(() => {\n //       checkUser();\n //     }, []);\n //     useEffect(() => {\n //       Hub.listen(\"auth\", () => {\n //         // Perform some action to update state when an auth event is detected\n //         checkUser();\n //       });\n //     });\n //     async function checkUser() {\n //       try {\n //         const amplifyUser = await Auth.currentAuthenticatedUser();\n //         if (amplifyUser) {\n //           setUser(amplifyUser);\n //         }\n //       } catch {\n //         setUser(null);\n //       }\n //     }\n //     return (\n //       <UserContext.Provider value={{ user, setUser }}>\n //         {children}\n //       </UserContext.Provider>\n //     );\n //   }\n //   export const useUser = (): UserContextType => useContext(UserContext);\n_s1(useUser, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"AuthContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNuQyxjQUFjO0NBQ2QscUVBQXFFO0NBQ3JFLDZCQUE2QjtDQUM3QixrQ0FBa0M7Q0FDbEMsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsVUFBVTtDQUNWLFFBQVE7Q0FFUixlQUFlO0NBQ2YseURBQXlEO0NBQ3pELHFCQUFxQjtDQUNyQixnQ0FBZ0M7Q0FDaEMsU0FBUztDQUNULE1BQU07Q0FFTiwyRUFBMkU7SUExRDlEc0IsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvY29udGV4dC50c3g/NGVmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVDb250ZXh0LFxuICBSZWFjdEVsZW1lbnQsXG4gIHVzZVN0YXRlLFxuICBEaXNwYXRjaCxcbiAgU2V0U3RhdGVBY3Rpb24sXG4gIHVzZUVmZmVjdCxcbiAgdXNlQ29udGV4dCxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xuaW1wb3J0IHsgZmlyZXN0b3JlLCBhdXRoIH0gZnJvbSBcIi4uL2xpYi9maXJlYmFzZVwiO1xuaW1wb3J0IHtcbiAgZ2V0RmlyZXN0b3JlLFxuICBjb2xsZWN0aW9uLFxuICBxdWVyeSxcbiAgd2hlcmUsXG4gIGdldERvY3MsXG4gIGRvYyxcbiAgRG9jdW1lbnREYXRhLFxuICBRdWVyeSxcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcblxuaW50ZXJmYWNlIFVzZXJEYXRhIHtcbiAgZW1haWw6IFN0cmluZztcbiAgdXNlcm5hbWU6IFN0cmluZztcbn1cblxuaW50ZXJmYWNlIFVzZXJDb250ZXh0VHlwZSB7XG4gIHVzZXI6IFVzZXJEYXRhIHwgbnVsbDtcbiAgc2V0VXNlcjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248VXNlckRhdGEgfCBudWxsPj47XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG59XG5cbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxVc2VyQ29udGV4dFR5cGU+KHt9IGFzIFVzZXJDb250ZXh0VHlwZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhDb250ZXh0KHsgY2hpbGRyZW4gfTogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyRGF0YSB8IG51bGw+KG51bGwpO1xuXG4gIC8vIE9uIGxvYWQgY2hlY2sgaWYgdGhlIHVzZXIgaXMgbG9nZ2VkIGluXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY2hlY2tVc2VyKCk7XG5cbiAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIC8vIFVzZXIgaXMgc2lnbmVkIGluLCBzZWUgZG9jcyBmb3IgYSBsaXN0IG9mIGF2YWlsYWJsZSBwcm9wZXJ0aWVzXG4gICAgICAgIC8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3JlZmVyZW5jZS9qcy9maXJlYmFzZS5Vc2VyXG4gICAgICAgIGNvbnN0IHVpZCA9IHVzZXIudWlkO1xuICAgICAgICAvLyAuLi5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVzZXIgaXMgc2lnbmVkIG91dFxuICAgICAgICAvLyAuLi5cbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VXNlcih1c2VyKTtcbiAgfSwgW3VzZXJdKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyRGV0YWlscyh1aWQ6IFN0cmluZykge1xuICAgIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKCk7XG4gICAgY29uc3QgcSA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIFwidXNlcnNcIiksIHdoZXJlKFwidWlkXCIsIFwiPT1cIiwgdXNlci51aWQpKTtcbiAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcbiAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgLy8gZG9jLmRhdGEoKSBpcyBuZXZlciB1bmRlZmluZWQgZm9yIHF1ZXJ5IGRvYyBzbmFwc2hvdHNcbiAgICAgIGNvbnNvbGUubG9nKGRvYy5pZCwgXCIgPT4gXCIsIGRvYy5kYXRhKCkpO1xuICAgICAgbGV0IHRtcDogVXNlckRhdGEgPSB7XG4gICAgICAgIGVtYWlsOiBkb2MuZGF0YSgpLmVtYWlsLFxuICAgICAgICB1c2VybmFtZTogZG9jLmRhdGEoKS51c2VybmFtZSxcbiAgICAgIH07XG4gICAgICBzZXRVc2VyKHRtcCk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjaGVja1VzZXIoKSB7XG4gICAgYXV0aDtcbiAgICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZSgpO1xuICAgIGNvbnN0IHEgPSBxdWVyeShcbiAgICAgIGNvbGxlY3Rpb24oZGIsIFwidXNlcnNcIiksXG4gICAgICB3aGVyZShcInVpZFwiLCBcIj09XCIsIFwiUncwQkRzT0s2d1p0eDQ4cTNTZnAzM3pJb1U0M1wiKVxuICAgICk7XG4gICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG4gICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgIC8vIGRvYy5kYXRhKCkgaXMgbmV2ZXIgdW5kZWZpbmVkIGZvciBxdWVyeSBkb2Mgc25hcHNob3RzXG4gICAgICBjb25zb2xlLmxvZyhkb2MuaWQsIFwiID0+IFwiLCBkb2MuZGF0YSgpKTtcbiAgICAgIGxldCB0bXA6IFVzZXJEYXRhID0ge1xuICAgICAgICBlbWFpbDogZG9jLmRhdGEoKS5lbWFpbCxcbiAgICAgICAgdXNlcm5hbWU6IGRvYy5kYXRhKCkudXNlcm5hbWUsXG4gICAgICB9O1xuICAgICAgc2V0VXNlcih0bXApO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIHNldFVzZXIgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVVzZXIgPSAoKTogVXNlckNvbnRleHRUeXBlID0+IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4vLyBUT0RPIERlbGV0ZSBiZWxvdyB3aGVuIGNvbXBsZXRlIChMZWF2ZSBmb3IgdHlsZXIpXG4vLyBleHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbi8vICAgdXNlcjogbnVsbCxcbi8vICAgdXNlcm5hbWU6IFwiXCIsXG4vLyB9KTtcblxuLy8gaW1wb3J0IHtcbi8vICAgICBjcmVhdGVDb250ZXh0LFxuLy8gICAgIFJlYWN0RWxlbWVudCxcbi8vICAgICB1c2VTdGF0ZSxcbi8vICAgICBEaXNwYXRjaCxcbi8vICAgICBTZXRTdGF0ZUFjdGlvbixcbi8vICAgICB1c2VFZmZlY3QsXG4vLyAgICAgdXNlQ29udGV4dCxcbi8vICAgfSBmcm9tIFwicmVhY3RcIjtcbi8vICAgaW1wb3J0IHsgQ29nbml0b1VzZXIgfSBmcm9tIFwiQGF3cy1hbXBsaWZ5L2F1dGhcIjtcbi8vICAgaW1wb3J0IHsgQXV0aCwgSHViIH0gZnJvbSBcImF3cy1hbXBsaWZ5XCI7XG5cbi8vICAgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFVzZXJDb250ZXh0VHlwZT4oe30gYXMgVXNlckNvbnRleHRUeXBlKTtcblxuLy8gICBpbnRlcmZhY2UgUHJvcHMge1xuLy8gICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4vLyAgIH1cblxuLy8gICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoQ29udGV4dCh7IGNoaWxkcmVuIH06IFByb3BzKTogUmVhY3RFbGVtZW50IHtcbi8vICAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxDb2duaXRvVXNlciB8IG51bGw+KG51bGwpO1xuXG4vLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICAgIGNoZWNrVXNlcigpO1xuLy8gICAgIH0sIFtdKTtcblxuLy8gICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgICBIdWIubGlzdGVuKFwiYXV0aFwiLCAoKSA9PiB7XG4vLyAgICAgICAgIC8vIFBlcmZvcm0gc29tZSBhY3Rpb24gdG8gdXBkYXRlIHN0YXRlIHdoZW4gYW4gYXV0aCBldmVudCBpcyBkZXRlY3RlZFxuLy8gICAgICAgICBjaGVja1VzZXIoKTtcbi8vICAgICAgIH0pO1xuLy8gICAgIH0pO1xuXG4vLyAgICAgYXN5bmMgZnVuY3Rpb24gY2hlY2tVc2VyKCkge1xuLy8gICAgICAgdHJ5IHtcbi8vICAgICAgICAgY29uc3QgYW1wbGlmeVVzZXIgPSBhd2FpdCBBdXRoLmN1cnJlbnRBdXRoZW50aWNhdGVkVXNlcigpO1xuLy8gICAgICAgICBpZiAoYW1wbGlmeVVzZXIpIHtcbi8vICAgICAgICAgICBzZXRVc2VyKGFtcGxpZnlVc2VyKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgfSBjYXRjaCB7XG4vLyAgICAgICAgIHNldFVzZXIobnVsbCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBzZXRVc2VyIH19PlxuLy8gICAgICAgICB7Y2hpbGRyZW59XG4vLyAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuLy8gICAgICk7XG4vLyAgIH1cblxuLy8gICBleHBvcnQgY29uc3QgdXNlVXNlciA9ICgpOiBVc2VyQ29udGV4dFR5cGUgPT4gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsImF1dGgiLCJnZXRGaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJ3aGVyZSIsImdldERvY3MiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJVc2VyQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInVpZCIsImdldFVzZXJEZXRhaWxzIiwiZGIiLCJxIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJkYXRhIiwidG1wIiwiZW1haWwiLCJ1c2VybmFtZSIsImNoZWNrVXNlciIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/context.tsx\n"));

/***/ })

});