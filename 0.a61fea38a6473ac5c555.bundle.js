(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/dist/cjs.js?!../node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../node_modules/sass-resources-loader/lib/loader.js?!../src/components/Landing/styles.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--6-1!../node_modules/sass-loader/dist/cjs.js??ref--6-2!../node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--6-3!../node_modules/sass-resources-loader/lib/loader.js??ref--6-4!../src/components/Landing/styles.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_GameofThrones_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/fonts/GameofThrones.ttf */ "../src/assets/fonts/GameofThrones.ttf");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_GameofThrones_ttf__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: \"Cinzel Decorative\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/cinzeldecorative/v9/daaCSScvJGqLYhG8nNt8KPPswUAPni7TTMxpazyD.woff2) format(\"woff2\"); }\n\n@font-face {\n  font-family: \"HeaderFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n.styles__content_container___MoNwO p {\n  color: #fffff0;\n  font-family: \"Cinzel Decorative\", serif;\n  text-align: center;\n  font-size: 15px;\n  line-height: 1.5; }\n\n.styles__content_container___MoNwO .styles__map_img___2XRAa {\n  object-fit: contain;\n  max-width: 100%; }\n", "",{"version":3,"sources":["webpack://./../src/components/Landing/styles.scss"],"names":[],"mappings":"AA8BA;EACI,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;EAChB,wHACmB,EAAA;;AAGvB;EACI,yBAAyB;EACzB,+DAA8D;EAC9D,mBAAmB;EACnB,kBAAkB,EAAA;;AAkBjB;EAEO,cAjDS;EAkDT,uCAvDoC;EAwDpC,kBAAkB;EAClB,eAAe;EACf,gBAAgB,EAAA;;AANvB;EAUW,mBAAmB;EACnB,eAAe,EAAA","sourcesContent":["// Vars from Webpack config\n$fontsPath: /Users/yevgeniy/repos/got_app/src/assets/fonts;\n$breakpointsmall: \"414\";\n$breakpointmedium: \"768\";\n$breakpointlarge: \"1024\";\n$breakpointxlarge: \"1280\";\n\n// font faces\n$font-family-regular: \"Cinzel Decorative\", serif;\n$font-family-header: \"HeaderFont\", sans-serif;\n\n// colors\n$color-black: #000;\n$color-white: #fffff0;\n$color-cool-grey: #acb0be;\n$color-primary-navy: #01173b;\n$rich-black: #010b13;\n$golden: #e3b130;\n$main-gray: #081a27;\n\n//vars injected by webpack\n$xsmall-breakpoint: 320;\n$small-breakpoint: 414;\n$medium-breakpoint: 768;\n$large-breakpoint: 1024;\n$xlarge-breakpoint: 1280;\n$slarge-breakpoint: 1440;\n\n$container-max-width: 1200px;\n\n@font-face {\n    font-family: \"Cinzel Decorative\";\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://fonts.gstatic.com/s/cinzeldecorative/v9/daaCSScvJGqLYhG8nNt8KPPswUAPni7TTMxpazyD.woff2)\n        format(\"woff2\");\n}\n\n@font-face {\n    font-family: \"HeaderFont\";\n    src: url($fontsPath + \"/GameofThrones.ttf\") format(\"truetype\");\n    font-weight: normal;\n    font-style: normal;\n}\n\n@mixin layout-container {\n    max-width: $container-max-width;\n    width: 100%;\n    padding: 16px 48px 36px;\n    position: relative;\n    box-sizing: border-box;\n}\n\n@mixin typeset($font-family, $font-size, $line-height) {\n    font-family: $font-family;\n    font-size: $font-size;\n    line-height: $line-height;\n}\n\n.content {\n    &_container {\n        p {\n            color: $color-white;\n            font-family: $font-family-regular;\n            text-align: center;\n            font-size: 15px;\n            line-height: 1.5;\n        }\n        .map {\n            &_img {\n                object-fit: contain;\n                max-width: 100%;\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"content_container": "styles__content_container___MoNwO",
	"map_img": "styles__map_img___2XRAa"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../src/components/Landing/index.tsx":
/*!*******************************************!*\
  !*** ../src/components/Landing/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "../src/components/Landing/styles.scss");


const LandingMap = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", { className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].content_container },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Welcome to the Game Of Thrones Guide for the renowned book series. The series of epic fantasy novels is written by George R.R. Martin, Hailed by Time Magazine as the \u2018American Tolkien\u2019, Martin has created what can only be described as one of the best fantasy book series of this day and age. So intriguing was the book series, HBO decided to release one of the most viewed television shows to-date, \u201CGame of Thrones\u201D, where Martin\u2019s saga tells the story of multiple characters in the fictional lands of Westeros and Essos. This guide will provide you with the necessary information the books, as well as the fictional houses and characters that enchant the pages of these epic novels."),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { className: _styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].map_img, src: "../assets/images/gotmap.jpg", alt: "continental-map" })));
};
/* harmony default export */ __webpack_exports__["default"] = (LandingMap);


/***/ }),

/***/ "../src/components/Landing/styles.scss":
/*!*********************************************!*\
  !*** ../src/components/Landing/styles.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_ref_6_2_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_6_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_4_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!../../../node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--6-3!../../../node_modules/sass-resources-loader/lib/loader.js??ref--6-4!./styles.scss */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/dist/cjs.js?!../node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../node_modules/sass-resources-loader/lib/loader.js?!../src/components/Landing/styles.scss");

            

var options = {"injectType":"singletonStyleTag"};

options.insert = "head";
options.singleton = true;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_ref_6_2_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_6_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_4_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_ref_6_2_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_6_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_4_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_ref_6_2_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_6_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_4_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!../../../node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--6-3!../../../node_modules/sass-resources-loader/lib/loader.js??ref--6-4!./styles.scss */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/dist/cjs.js?!../node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../node_modules/sass-resources-loader/lib/loader.js?!../src/components/Landing/styles.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_ref_6_2_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_6_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_4_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!../../../node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--6-3!../../../node_modules/sass-resources-loader/lib/loader.js??ref--6-4!./styles.scss */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/dist/cjs.js?!../node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../node_modules/sass-resources-loader/lib/loader.js?!../src/components/Landing/styles.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_ref_6_2_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_6_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_4_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_ref_6_2_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_6_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_4_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_ref_6_2_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_6_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_4_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_sass_loader_dist_cjs_js_ref_6_2_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_6_3_node_modules_sass_resources_loader_lib_loader_js_ref_6_4_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2NvbXBvbmVudHMvTGFuZGluZy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvbXBvbmVudHMvTGFuZGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb21wb25lbnRzL0xhbmRpbmcvc3R5bGVzLnNjc3M/ZGEwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzRIO0FBQzdCO0FBQ087QUFDckI7QUFDakYsOEJBQThCLG1GQUEyQixDQUFDLHNHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCLENBQUMsdUVBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsZUFBZSx1Q0FBdUMsdUJBQXVCLHFCQUFxQiwrSEFBK0gsRUFBRSxnQkFBZ0IsZ0NBQWdDLDhFQUE4RSx3QkFBd0IsdUJBQXVCLEVBQUUsMENBQTBDLG1CQUFtQiw4Q0FBOEMsdUJBQXVCLG9CQUFvQixxQkFBcUIsRUFBRSxpRUFBaUUsd0JBQXdCLG9CQUFvQixFQUFFLFNBQVMseUdBQXlHLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksYUFBYSxhQUFhLG1CQUFtQixPQUFPLFdBQVcsY0FBYyxjQUFjLFdBQVcsa0JBQWtCLE1BQU0sWUFBWSw0SEFBNEgsNEJBQTRCLDZCQUE2Qiw2QkFBNkIsOEJBQThCLHNFQUFzRSxrREFBa0Qsa0NBQWtDLHdCQUF3Qiw0QkFBNEIsK0JBQStCLHVCQUF1QixtQkFBbUIsc0JBQXNCLHdEQUF3RCx5QkFBeUIsMEJBQTBCLDBCQUEwQiwyQkFBMkIsMkJBQTJCLGlDQUFpQyxnQkFBZ0IseUNBQXlDLHlCQUF5Qix1QkFBdUIsMElBQTBJLEdBQUcsZ0JBQWdCLGtDQUFrQyx5RUFBeUUsMEJBQTBCLHlCQUF5QixHQUFHLDZCQUE2QixzQ0FBc0Msa0JBQWtCLDhCQUE4Qix5QkFBeUIsNkJBQTZCLEdBQUcsNERBQTRELGdDQUFnQyw0QkFBNEIsZ0NBQWdDLEdBQUcsY0FBYyxtQkFBbUIsYUFBYSxrQ0FBa0MsZ0RBQWdELGlDQUFpQyw4QkFBOEIsK0JBQStCLFdBQVcsZ0JBQWdCLHFCQUFxQixzQ0FBc0Msa0NBQWtDLGVBQWUsV0FBVyxPQUFPLEdBQUcscUJBQXFCO0FBQ2w1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2Usc0ZBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNkdkM7QUFBQTtBQUFBO0FBQUE7QUFBeUI7QUFDUztBQUVsQyxNQUFNLFVBQVUsR0FBYSxHQUFnQixFQUFFO0lBQzdDLE9BQU8sQ0FDTCxxRUFBTSxTQUFTLEVBQUUsb0RBQU0sQ0FBQyxpQkFBaUI7UUFDdkMsOHdCQVdJO1FBQ0osb0VBQ0UsU0FBUyxFQUFFLG9EQUFNLENBQUMsT0FBTyxFQUN6QixHQUFHLEVBQUMsNkJBQTZCLEVBQ2pDLEdBQUcsRUFBQyxpQkFBaUIsR0FDckIsQ0FDRyxDQUNSO0FBQ0gsQ0FBQztBQUVjLHlFQUFVOzs7Ozs7Ozs7Ozs7O0FDM0J6QjtBQUFBO0FBQUE7QUFBQTtBQUErRjtBQUMvRixZQUFvVDs7QUFFcFQsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyx5UUFBTzs7O0FBR3hCLElBQUksSUFBVTtBQUNkLE9BQU8seVFBQU87QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQix5UUFBTzs7QUFFM0I7QUFDQSxNQUFNLHFnQkFBbVI7QUFDelIsTUFBTTtBQUFBO0FBQ04sc0NBQXNDLHlRQUFPO0FBQzdDOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCLHlRQUFPOztBQUVqQyxxQkFBcUIseVFBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFZSx3VUFBTyxhQUFhLEUiLCJmaWxlIjoiMC5hNjFmZWEzOGE2NDczYWM1YzU1NS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uLy4uL2Fzc2V0cy9mb250cy9HYW1lb2ZUaHJvbmVzLnR0ZlwiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDaW56ZWwgRGVjb3JhdGl2ZVxcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2NpbnplbGRlY29yYXRpdmUvdjkvZGFhQ1NTY3ZKR3FMWWhHOG5OdDhLUFBzd1VBUG5pN1RUTXhwYXp5RC53b2ZmMikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlYWRlckZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG4uc3R5bGVzX19jb250ZW50X2NvbnRhaW5lcl9fX01vTndPIHAge1xcbiAgY29sb3I6ICNmZmZmZjA7XFxuICBmb250LWZhbWlseTogXFxcIkNpbnplbCBEZWNvcmF0aXZlXFxcIiwgc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBsaW5lLWhlaWdodDogMS41OyB9XFxuXFxuLnN0eWxlc19fY29udGVudF9jb250YWluZXJfX19Nb053TyAuc3R5bGVzX19tYXBfaW1nX19fMlhSQWEge1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIG1heC13aWR0aDogMTAwJTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL3NyYy9jb21wb25lbnRzL0xhbmRpbmcvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBOEJBO0VBQ0ksZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0hBQ21CLEVBQUE7O0FBR3ZCO0VBQ0kseUJBQXlCO0VBQ3pCLCtEQUE4RDtFQUM5RCxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBa0JqQjtFQUVPLGNBakRTO0VBa0RULHVDQXZEb0M7RUF3RHBDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBTnZCO0VBVVcsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBWYXJzIGZyb20gV2VicGFjayBjb25maWdcXG4kZm9udHNQYXRoOiAvVXNlcnMveWV2Z2VuaXkvcmVwb3MvZ290X2FwcC9zcmMvYXNzZXRzL2ZvbnRzO1xcbiRicmVha3BvaW50c21hbGw6IFxcXCI0MTRcXFwiO1xcbiRicmVha3BvaW50bWVkaXVtOiBcXFwiNzY4XFxcIjtcXG4kYnJlYWtwb2ludGxhcmdlOiBcXFwiMTAyNFxcXCI7XFxuJGJyZWFrcG9pbnR4bGFyZ2U6IFxcXCIxMjgwXFxcIjtcXG5cXG4vLyBmb250IGZhY2VzXFxuJGZvbnQtZmFtaWx5LXJlZ3VsYXI6IFxcXCJDaW56ZWwgRGVjb3JhdGl2ZVxcXCIsIHNlcmlmO1xcbiRmb250LWZhbWlseS1oZWFkZXI6IFxcXCJIZWFkZXJGb250XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4vLyBjb2xvcnNcXG4kY29sb3ItYmxhY2s6ICMwMDA7XFxuJGNvbG9yLXdoaXRlOiAjZmZmZmYwO1xcbiRjb2xvci1jb29sLWdyZXk6ICNhY2IwYmU7XFxuJGNvbG9yLXByaW1hcnktbmF2eTogIzAxMTczYjtcXG4kcmljaC1ibGFjazogIzAxMGIxMztcXG4kZ29sZGVuOiAjZTNiMTMwO1xcbiRtYWluLWdyYXk6ICMwODFhMjc7XFxuXFxuLy92YXJzIGluamVjdGVkIGJ5IHdlYnBhY2tcXG4keHNtYWxsLWJyZWFrcG9pbnQ6IDMyMDtcXG4kc21hbGwtYnJlYWtwb2ludDogNDE0O1xcbiRtZWRpdW0tYnJlYWtwb2ludDogNzY4O1xcbiRsYXJnZS1icmVha3BvaW50OiAxMDI0O1xcbiR4bGFyZ2UtYnJlYWtwb2ludDogMTI4MDtcXG4kc2xhcmdlLWJyZWFrcG9pbnQ6IDE0NDA7XFxuXFxuJGNvbnRhaW5lci1tYXgtd2lkdGg6IDEyMDBweDtcXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDaW56ZWwgRGVjb3JhdGl2ZVxcXCI7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2NpbnplbGRlY29yYXRpdmUvdjkvZGFhQ1NTY3ZKR3FMWWhHOG5OdDhLUFBzd1VBUG5pN1RUTXhwYXp5RC53b2ZmMilcXG4gICAgICAgIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVhZGVyRm9udFxcXCI7XFxuICAgIHNyYzogdXJsKCRmb250c1BhdGggKyBcXFwiL0dhbWVvZlRocm9uZXMudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBtaXhpbiBsYXlvdXQtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAkY29udGFpbmVyLW1heC13aWR0aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE2cHggNDhweCAzNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBtaXhpbiB0eXBlc2V0KCRmb250LWZhbWlseSwgJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0KSB7XFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XFxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICAmX2NvbnRhaW5lciB7XFxuICAgICAgICBwIHtcXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktcmVndWxhcjtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgICAgICB9XFxuICAgICAgICAubWFwIHtcXG4gICAgICAgICAgICAmX2ltZyB7XFxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGVudF9jb250YWluZXJcIjogXCJzdHlsZXNfX2NvbnRlbnRfY29udGFpbmVyX19fTW9Od09cIixcblx0XCJtYXBfaW1nXCI6IFwic3R5bGVzX19tYXBfaW1nX19fMlhSQWFcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5zY3NzJ1xuXG5jb25zdCBMYW5kaW5nTWFwOiBSZWFjdC5GQyA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9jb250YWluZXJ9PlxuICAgICAgPHA+XG4gICAgICAgIFdlbGNvbWUgdG8gdGhlIEdhbWUgT2YgVGhyb25lcyBHdWlkZSBmb3IgdGhlIHJlbm93bmVkIGJvb2sgc2VyaWVzLiBUaGVcbiAgICAgICAgc2VyaWVzIG9mIGVwaWMgZmFudGFzeSBub3ZlbHMgaXMgd3JpdHRlbiBieSBHZW9yZ2UgUi5SLiBNYXJ0aW4sIEhhaWxlZFxuICAgICAgICBieSBUaW1lIE1hZ2F6aW5lIGFzIHRoZSDigJhBbWVyaWNhbiBUb2xraWVu4oCZLCBNYXJ0aW4gaGFzIGNyZWF0ZWQgd2hhdCBjYW5cbiAgICAgICAgb25seSBiZSBkZXNjcmliZWQgYXMgb25lIG9mIHRoZSBiZXN0IGZhbnRhc3kgYm9vayBzZXJpZXMgb2YgdGhpcyBkYXkgYW5kXG4gICAgICAgIGFnZS4gU28gaW50cmlndWluZyB3YXMgdGhlIGJvb2sgc2VyaWVzLCBIQk8gZGVjaWRlZCB0byByZWxlYXNlIG9uZSBvZlxuICAgICAgICB0aGUgbW9zdCB2aWV3ZWQgdGVsZXZpc2lvbiBzaG93cyB0by1kYXRlLCDigJxHYW1lIG9mIFRocm9uZXPigJ0sIHdoZXJlXG4gICAgICAgIE1hcnRpbuKAmXMgc2FnYSB0ZWxscyB0aGUgc3Rvcnkgb2YgbXVsdGlwbGUgY2hhcmFjdGVycyBpbiB0aGUgZmljdGlvbmFsXG4gICAgICAgIGxhbmRzIG9mIFdlc3Rlcm9zIGFuZCBFc3Nvcy4gVGhpcyBndWlkZSB3aWxsIHByb3ZpZGUgeW91IHdpdGggdGhlXG4gICAgICAgIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiB0aGUgYm9va3MsIGFzIHdlbGwgYXMgdGhlIGZpY3Rpb25hbCBob3VzZXMgYW5kXG4gICAgICAgIGNoYXJhY3RlcnMgdGhhdCBlbmNoYW50IHRoZSBwYWdlcyBvZiB0aGVzZSBlcGljIG5vdmVscy5cbiAgICAgIDwvcD5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWFwX2ltZ31cbiAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ltYWdlcy9nb3RtYXAuanBnXCJcbiAgICAgICAgYWx0PVwiY29udGluZW50YWwtbWFwXCJcbiAgICAgIC8+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdNYXBcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZXBlZ3p6L3Nhc3MtdmFycy1sb2FkZXIvc3JjL3Nhc3NWYXJzTG9hZGVyLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNi00IS4vc3R5bGVzLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7XCJpbmplY3RUeXBlXCI6XCJzaW5nbGV0b25TdHlsZVRhZ1wifTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gdHJ1ZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGVwZWd6ei9zYXNzLXZhcnMtbG9hZGVyL3NyYy9zYXNzVmFyc0xvYWRlci5qcz8/cmVmLS02LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTYtNCEuL3N0eWxlcy5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzLCB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==