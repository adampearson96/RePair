/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  box-sizing: border-box;\\n}\\n\\nimg {\\n  max-width: 100%;\\n}\\n\\nhtml,\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  font-size: 16px;\\n  font-family: vinyl, sans-serif;\\n  font-weight: 400;\\n  text-transform: uppercase;\\n}\\n\\n.btn {\\n  display: inline-block;\\n  width: 100%;\\n  max-width: 245px;\\n  line-height: 50px;\\n  padding: 0 1rem;\\n  text-decoration: none;\\n  border-radius: 4px;\\n  text-align: center;\\n}\\n\\nh2 {\\n  display: block;\\n  margin: 0;\\n  font-size: 2.125rem;\\n  line-height: 0.8823529412;\\n}\\n\\n@-webkit-keyframes reveal {\\n  from {\\n    opacity: 0;\\n  }\\n\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes reveal {\\n  from {\\n    opacity: 0;\\n  }\\n\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\nheader {\\n  display: block;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  background: rgba(22, 29, 52, 0.25);\\n  z-index: 15;\\n}\\n\\nheader .container {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin: 0 auto;\\n  width: 100%;\\n  max-width: 1140px;\\n  padding: 1.125rem 1rem;\\n}\\n\\nheader .container a.logo {\\n  flex: 0 1 auto;\\n  order: 2;\\n}\\n\\nheader .container a.logo svg {\\n  width: auto;\\n  height: 25px;\\n  fill: #ffffff;\\n}\\n\\nheader .container ul.icons {\\n  flex: 0 1 auto;\\n  order: 3;\\n  list-style: none;\\n  font-size: 0;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nheader .container ul.icons li {\\n  display: inline-block;\\n  width: auto;\\n  height: 24px;\\n}\\n\\nheader .container ul.icons li#chat, header .container ul.icons li#profile {\\n  display: none;\\n}\\n\\nheader .container ul.icons li svg {\\n  display: block;\\n  width: auto;\\n  height: 100%;\\n}\\n\\nheader .container button.menu-toggle {\\n  flex: 0 1 auto;\\n  position: relative;\\n  order: 1;\\n  font-size: 0;\\n  width: 21px;\\n  height: 24px;\\n  padding: 0;\\n  margin: 0;\\n  border: none;\\n  background: none;\\n  outline: none;\\n}\\n\\nheader .container button.menu-toggle:focus {\\n  box-shadow: 0 0 0 3px rgba(22, 29, 52, 0.25);\\n}\\n\\nheader .container button.menu-toggle span {\\n  display: block;\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 21px;\\n  height: 3px;\\n  border-radius: 1px;\\n  background: #ffffff;\\n}\\n\\nheader .container button.menu-toggle span:nth-child(2) {\\n  top: 10.5px;\\n}\\n\\nheader .container button.menu-toggle span:nth-child(3) {\\n  top: auto;\\n  bottom: 0;\\n}\\n\\n.hero-section {\\n  display: block;\\n  position: relative;\\n  width: 100%;\\n  background: #161D34;\\n  background: linear-gradient(180deg, #223c68 0%, #161d34 100%);\\n}\\n\\n.hero-section .container {\\n  display: flex;\\n  position: relative;\\n  flex-flow: column nowrap;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin: 0 auto;\\n  width: 100%;\\n  max-width: 1140px;\\n  padding: 65px 0 0 0;\\n  min-height: 100vh;\\n  overflow: hidden;\\n}\\n\\n.hero-section .container .col {\\n  display: block;\\n  flex: 0 1 auto;\\n  position: relative;\\n  padding: 1rem;\\n  width: 100%;\\n}\\n\\n.hero-section .container .col.col-1 {\\n  padding: 3rem 1rem 1rem 1rem;\\n}\\n\\n.hero-section .container .col.col-1 h2 {\\n  color: #ffffff;\\n  text-align: center;\\n}\\n\\n.hero-section .container .col.col-1 h2 span {\\n  color: #F7D32B;\\n}\\n\\n.hero-section .container .col.col-1 a.btn {\\n  display: none;\\n}\\n\\n.hero-section .container .col.col-2 {\\n  padding: 1rem 1rem 3rem 1rem;\\n  text-align: center;\\n}\\n\\n.hero-section .container .col.col-2 img {\\n  max-width: unset;\\n  width: 100%;\\n  height: auto;\\n  position: relative;\\n  z-index: 3;\\n  -webkit-animation: 1s reveal ease-in-out;\\n          animation: 1s reveal ease-in-out;\\n  -webkit-animation-fill-mode: forwards;\\n          animation-fill-mode: forwards;\\n  -webkit-animation-delay: 1s;\\n          animation-delay: 1s;\\n  opacity: 0;\\n}\\n\\n.hero-section .container .col.col-2 a.btn {\\n  color: #ffffff;\\n  position: relative;\\n  background: #161D34;\\n  font-size: 2.125rem;\\n  -webkit-animation: 0.5s reveal ease-in-out;\\n          animation: 0.5s reveal ease-in-out;\\n  -webkit-animation-fill-mode: forwards;\\n          animation-fill-mode: forwards;\\n  -webkit-animation-delay: 1.25s;\\n          animation-delay: 1.25s;\\n  opacity: 0;\\n  z-index: 3;\\n}\\n\\n.hero-section .container .col.col-2 .triangle {\\n  display: block;\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  pointer-events: none;\\n  width: 100%;\\n  -webkit-animation: 1s reveal ease-in-out;\\n          animation: 1s reveal ease-in-out;\\n  -webkit-animation-fill-mode: forwards;\\n          animation-fill-mode: forwards;\\n  opacity: 0;\\n}\\n\\n.hero-section .container .col.col-2 .triangle svg {\\n  display: block;\\n  width: 100%;\\n  height: auto;\\n}\\n\\n.hero-section .container .col.col-2 .triangle.blue {\\n  z-index: 1;\\n}\\n\\n.hero-section .container .col.col-2 .triangle.blue svg polygon {\\n  fill: #223C68;\\n}\\n\\n.hero-section .container .col.col-2 .triangle.yellow {\\n  z-index: 2;\\n  -webkit-animation-delay: 0.25s;\\n          animation-delay: 0.25s;\\n}\\n\\n.hero-section .container .col.col-2 .triangle.yellow svg polygon {\\n  fill: #F7D32B;\\n}\\n\\n.row-one {\\n  display: block;\\n  position: relative;\\n  width: 100%;\\n  background: #161D34;\\n  background: linear-gradient(180deg, #f64040 0%, #223c68 100%);\\n}\\n\\n.row-one .container {\\n  display: flex;\\n  position: relative;\\n  flex-flow: column nowrap;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin: 0 auto;\\n  width: 100%;\\n  max-width: 1140px;\\n  overflow: hidden;\\n}\\n\\n.row-one .container .col {\\n  display: block;\\n  flex: 0 1 auto;\\n  position: relative;\\n  width: 100%;\\n}\\n\\n.row-one .container .col.col-1 {\\n  text-align: right;\\n  padding: 2rem 1rem 1rem;\\n}\\n\\n.row-one .container .col.col-1 h2 {\\n  color: #ffffff;\\n  line-height: 1;\\n}\\n\\n.row-one .container .col.col-1 p {\\n  color: #ffffff;\\n  font-size: 1.125rem;\\n  line-height: 1;\\n  margin: 0;\\n  max-width: 145px;\\n  margin: 0 0 0 auto;\\n}\\n\\n.row-one .container .col.col-2 {\\n  text-align: center;\\n  padding: 1rem 1rem 3rem 1rem;\\n}\\n\\n.row-one .container .col.col-2 img {\\n  display: block;\\n  width: 575px;\\n  max-width: unset;\\n  height: auto;\\n  margin: -115px 0 0 -200px;\\n}\\n\\n.row-one .container .col.col-2 a.btn {\\n  background: #ffffff;\\n  color: #3C3D63;\\n  max-width: 100%;\\n  width: 100%;\\n  font-size: 2.125rem;\\n}\\n\\n.row-two {\\n  display: block;\\n  position: relative;\\n  width: 100%;\\n  background: #ffffff;\\n}\\n\\n.row-two .container {\\n  display: flex;\\n  flex-flow: column nowrap;\\n  position: relative;\\n  width: 100%;\\n}\\n\\n.row-two .container .col {\\n  display: block;\\n  flex: 0 1 auto;\\n  width: 100%;\\n}\\n\\n.row-two .container .col.col-1 img {\\n  display: block;\\n  width: 100%;\\n  height: auto;\\n}\\n\\n.row-two .container .col.col-2 {\\n  padding: 1rem;\\n}\\n\\n.row-two .container .col.col-2 .content {\\n  display: flex;\\n  flex-flow: column wrap;\\n  width: 100%;\\n}\\n\\n.row-two .container .col.col-2 .content .left {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  align-items: center;\\n}\\n\\n.row-two .container .col.col-2 .content .left img {\\n  display: block;\\n  width: 154px;\\n  max-width: 100%;\\n  font-size: 0;\\n  flex: 0 1 auto;\\n}\\n\\n.row-two .container .col.col-2 .content .left .wrapper {\\n  display: block;\\n  flex: 0 1 auto;\\n}\\n\\n.row-two .container .col.col-2 .content .left .wrapper span.stars {\\n  display: block;\\n}\\n\\n.row-two .container .col.col-2 .content .left .wrapper span.stars svg {\\n  width: auto;\\n  height: 0.75rem;\\n  margin: 0 0 1rem 0;\\n}\\n\\n.row-two .container .col.col-2 .content .left .wrapper span.stars svg path {\\n  fill: #F2A94A;\\n}\\n\\n.row-two .container .col.col-2 .content .left .wrapper h2 {\\n  color: #161D34;\\n}\\n\\n.row-two .container .col.col-2 .content .left .wrapper span.flavour {\\n  display: block;\\n  font-size: 1.125rem;\\n  line-height: 1.6666666667;\\n  color: #223C68;\\n}\\n\\n.row-two .container .col.col-2 .content .left .wrapper span.price {\\n  display: block;\\n  color: #161D34;\\n  font-size: 1.75rem;\\n  line-height: 1.0714285714;\\n}\\n\\n.row-two .container .col.col-2 .content .right .wrapper {\\n  display: none;\\n}\\n\\n.row-two .container .col.col-2 .content .right ul.options {\\n  display: block;\\n  list-style-type: none;\\n  position: relative;\\n  width: 100%;\\n  padding: 0;\\n  margin: 1rem 0;\\n  font-size: 0;\\n}\\n\\n.row-two .container .col.col-2 .content .right ul.options li {\\n  display: inline-block;\\n  width: -ms-calc(20% - .8rem);\\n  width: calc(20% - .4rem);\\n  margin-right: 0.5rem;\\n}\\n\\n.row-two .container .col.col-2 .content .right ul.options li:last-child {\\n  margin-right: 0;\\n}\\n\\n.row-two .container .col.col-2 .content .right ul.options li a {\\n  display: block;\\n  width: 100%;\\n  border: 1px solid #EEEEEE;\\n  border-radius: 4px;\\n  position: relative;\\n}\\n\\n.row-two .container .col.col-2 .content .right ul.options li a.active {\\n  border: 1px solid #518C81;\\n}\\n\\n.row-two .container .col.col-2 .content .right ul.options li a.active:after {\\n  display: block;\\n  position: absolute;\\n  content: \\\"\\\";\\n  width: 10px;\\n  height: 17px;\\n  bottom: 0;\\n  right: 0;\\n}\\n\\n.row-two .container .col.col-2 .content .right a.btn {\\n  font-size: 1.5rem;\\n  line-height: 40px;\\n  width: 100%;\\n  max-width: 100%;\\n  color: #ffffff;\\n}\\n\\n.row-two .container .col.col-2 .content .right a.btn svg {\\n  display: inline-block;\\n  height: 1.5rem;\\n  vertical-align: text-top;\\n  margin-right: 0.5rem;\\n}\\n\\n.row-two .container .col.col-2 .content .right a.btn svg path {\\n  fill: #ffffff;\\n}\\n\\n.row-two .container .col.col-2 .content .right a.btn.add-to-basket {\\n  background: #223C68;\\n  margin-bottom: 1rem;\\n}\\n\\n.row-two .container .col.col-2 .content .right a.btn.quick-buy {\\n  background: #F7D32B;\\n}\\n\\n.row-three {\\n  display: block;\\n  position: relative;\\n  width: 100%;\\n  background: #ffffff;\\n}\\n\\n.row-three .container {\\n  display: flex;\\n  flex-flow: column nowrap;\\n  position: relative;\\n  width: 100%;\\n}\\n\\n.row-three .container .col {\\n  display: block;\\n  flex: 0 1 auto;\\n  width: 100%;\\n}\\n\\n.row-three .container .col.col-1 img {\\n  display: block;\\n  width: 100%;\\n  height: auto;\\n}\\n\\n.row-three .container .col.col-2 {\\n  padding: 1rem;\\n  text-align: center;\\n}\\n\\n.row-three .container .col.col-2 p {\\n  color: #161D34;\\n  font-size: 1.25rem;\\n  line-height: 1.15;\\n  margin: 0;\\n}\\n\\n.row-three .container .col.col-2 blockquote {\\n  color: #161D34;\\n  font-size: 2.1875rem;\\n  line-height: 1.1714285714;\\n  margin: 0;\\n}\\n\\n.row-three .container .col.col-2 blockquote span {\\n  color: #223C68;\\n}\\n\\n.row-three .container .col.col-2 span.stars {\\n  display: block;\\n}\\n\\n.row-three .container .col.col-2 span.stars svg {\\n  width: auto;\\n  height: 1.875rem;\\n  margin: 0 0 1rem 0;\\n}\\n\\n.row-three .container .col.col-2 span.stars svg path {\\n  fill: #F2A94A;\\n}\\n\\n.row-three .container .col.col-2 img.trustpilot-logo {\\n  display: block;\\n  margin: 1rem auto 2rem auto;\\n  width: 172px;\\n}\\n\\n.row-three .container .col.col-2 a.btn {\\n  background: #223C68;\\n  color: #ffffff;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.scss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--4-1!../node_modules/postcss-loader/src!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/main.scss?");

/***/ })

/******/ });