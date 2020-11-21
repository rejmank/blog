webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image */ "./components/Image.js");


var _jsxFileName = "/mnt/c/projects/nextjs-starter-blog/components/Layout.js",
    _s = $RefreshSig$();




function Layout(_ref) {
  _s();

  var children = _ref.children;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      pathname = _useRouter.pathname;

  var isRoot = pathname === "/";
  var header = isRoot ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "font-black leading-none text-black no-underline text-7xl font-display",
        children: "Rejmank's brain dump"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
    className: "mb-2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "text-2xl font-black text-black no-underline font-display",
        children: "Rejmank's brain dump"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "max-w-screen-sm px-4 py-12 mx-auto antialiased font-body",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: "text-center flex content-center",
      children: [isRoot ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "flex-shrink-0 mb-0 mr-3 w-40 h-46",
        src: __webpack_require__(/*! ../content/assets/profile.png */ "./content/assets/profile.png"),
        webpSrc: __webpack_require__(/*! ../content/assets/profile.png?webp */ "./content/assets/profile.png?webp"),
        previewSrc: __webpack_require__(/*! ../content/assets/profile.png?lqip */ "./content/assets/profile.png?lqip"),
        alt: "Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }, this) : null, header]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: "text-lg font-light",
      children: ["\xA9 ", new Date().getFullYear(), ", Built with", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://nextjs.org/",
        children: "Next.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), "\uD83D\uDD25"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_s(Layout, "QpP2vYJstxsDz0K+Qwttl8PPVoY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImlzUm9vdCIsImhlYWRlciIsInJlcXVpcmUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsbUJBQ3RCQyw2REFBUyxFQURhO0FBQUEsTUFDbkNDLFFBRG1DLGNBQ25DQSxRQURtQzs7QUFFM0MsTUFBTUMsTUFBTSxHQUFHRCxRQUFRLEtBQUssR0FBNUI7QUFFQSxNQUFNRSxNQUFNLEdBQUdELE1BQU0sZ0JBQ25CO0FBQUEsMkJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBQyx1RUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRG1CLGdCQVNuQjtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUEsMkJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBQywwREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBVEY7QUFtQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsMERBQWY7QUFBQSw0QkFDRTtBQUFRLGVBQVMsRUFBQyxpQ0FBbEI7QUFBQSxpQkFDREEsTUFBTSxnQkFBRyxxRUFBQyw4Q0FBRDtBQUNOLGlCQUFTLEVBQUMsbUNBREo7QUFFTixXQUFHLEVBQUVFLG1CQUFPLENBQUMsbUVBQUQsQ0FGTjtBQUdOLGVBQU8sRUFBRUEsbUJBQU8sQ0FBQyw2RUFBRCxDQUhWO0FBSU4sa0JBQVUsRUFBRUEsbUJBQU8sQ0FBQyw2RUFBRCxDQUpiO0FBS04sV0FBRyxFQUFDO0FBTEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILEdBTUQsSUFQSixFQVFHRCxNQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBVUU7QUFBQSxnQkFBT0o7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFXRTtBQUFRLGVBQVMsRUFBQyxvQkFBbEI7QUFBQSwwQkFDSyxJQUFJTSxJQUFKLEdBQVdDLFdBQVgsRUFETCxrQkFDMkMsR0FEM0MsZUFFRTtBQUFHLFlBQUksRUFBQyxxQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztHQTFDdUJSLE07VUFDREUscUQ7OztLQURDRixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLjM5YzAzODI1NjgzMDBhMzAxZjdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi9JbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpc1Jvb3QgPSBwYXRobmFtZSA9PT0gXCIvXCI7XG5cbiAgY29uc3QgaGVhZGVyID0gaXNSb290ID8gKFxuICAgIDxoMT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtYmxhY2sgbGVhZGluZy1ub25lIHRleHQtYmxhY2sgbm8tdW5kZXJsaW5lIHRleHQtN3hsIGZvbnQtZGlzcGxheVwiPlxuICAgICAgICAgIFJlam1hbmsncyBicmFpbiBkdW1wXG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2gxPlxuICApIDogKFxuICAgIDxoMSBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJsYWNrIHRleHQtYmxhY2sgbm8tdW5kZXJsaW5lIGZvbnQtZGlzcGxheVwiPlxuICAgICAgICBSZWptYW5rJ3MgYnJhaW4gZHVtcFxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9oMT5cbiAgKTtcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1zbSBweC00IHB5LTEyIG14LWF1dG8gYW50aWFsaWFzZWQgZm9udC1ib2R5XCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZsZXggY29udGVudC1jZW50ZXJcIj5cbiAgICB7aXNSb290ID8gPEltYWdlXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgbWItMCBtci0zIHctNDAgaC00NlwiXG4gICAgICAgIHNyYz17cmVxdWlyZShcIi4uL2NvbnRlbnQvYXNzZXRzL3Byb2ZpbGUucG5nXCIpfVxuICAgICAgICB3ZWJwU3JjPXtyZXF1aXJlKFwiLi4vY29udGVudC9hc3NldHMvcHJvZmlsZS5wbmc/d2VicFwiKX1cbiAgICAgICAgcHJldmlld1NyYz17cmVxdWlyZShcIi4uL2NvbnRlbnQvYXNzZXRzL3Byb2ZpbGUucG5nP2xxaXBcIil9XG4gICAgICAgIGFsdD1cIlByb2ZpbGVcIlxuICAgICAgLz46IG51bGx9XG4gICAgICAgIHtoZWFkZXJ9PC9oZWFkZXI+XG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbGlnaHRcIj5cbiAgICAgICAgwqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0sIEJ1aWx0IHdpdGh7XCIgXCJ9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCI+TmV4dC5qczwvYT5cbiAgICAgICAgJiMxMjgyOTM7XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=