/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* * {
    border: red 1px solid;
} */
body{
    height: 100vh;
    background-color: rgb(250, 250, 250)
    /* background-color: rgb(255, 249, 234) */
}
#content{
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 8fr 1fr;
}
/* Header elements */
header{
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    border-bottom: 10px brown solid;
}
header ul{
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    align-items: end;
    
}

header h1 {
    justify-self: center;
    align-self: center;
}


li{
    display: grid;
    align-items: end;
    justify-items: center;
}
li img{
    height: 100px;
    grid-row: 1/2;
    grid-column: 1/2;
    justify-content: end;
}
li h2{
    grid-row: 1/2;
    grid-column: 1/2;
}
.steam{
    transform: rotate(180deg);
    height: 20px;
    align-self: start;
    display: none;
    opacity: 50%;
  
}
.active{
    display: block;
}
/* Main elements */
main{
    display: grid;
    grid-row: 2/3;
    justify-items: center;

}
main p{
    grid-row: 2/3;
    max-width: 700px;
    padding: 20px;
}
main img{
    height: 400px;
    grid-row: 1/2;
}
.pieCard{
    display: flex;
    flex-direction: column;
}
.pieImg{
    height: 200px;
    width: 200px;
}

.pieCard{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 10px brown solid;
}

.pieCard p {
    width: 550px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;GAEG;AACH;IACI,aAAa;IACb,mCAAmC;IACnC,yCAAyC;AAC7C;AACA;IACI,YAAY;IACZ,aAAa;IACb,+BAA+B;AACnC;AACA,oBAAoB;AACpB;IACI,aAAa;IACb,kCAAkC;IAClC,+BAA+B;AACnC;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,qBAAqB;IACrB,gBAAgB;;AAEpB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,gBAAgB;IAChB,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,aAAa;IACb,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,yBAAyB;IACzB,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,YAAY;;AAEhB;AACA;IACI,cAAc;AAClB;AACA,kBAAkB;AAClB;IACI,aAAa;IACb,aAAa;IACb,qBAAqB;;AAEzB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,aAAa;IACb,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,YAAY;AAChB","sourcesContent":["/* * {\n    border: red 1px solid;\n} */\nbody{\n    height: 100vh;\n    background-color: rgb(250, 250, 250)\n    /* background-color: rgb(255, 249, 234) */\n}\n#content{\n    height: 100%;\n    display: grid;\n    grid-template-rows: 1fr 8fr 1fr;\n}\n/* Header elements */\nheader{\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n    border-bottom: 10px brown solid;\n}\nheader ul{\n    display: flex;\n    justify-content: space-evenly;\n    list-style-type: none;\n    align-items: end;\n    \n}\n\nheader h1 {\n    justify-self: center;\n    align-self: center;\n}\n\n\nli{\n    display: grid;\n    align-items: end;\n    justify-items: center;\n}\nli img{\n    height: 100px;\n    grid-row: 1/2;\n    grid-column: 1/2;\n    justify-content: end;\n}\nli h2{\n    grid-row: 1/2;\n    grid-column: 1/2;\n}\n.steam{\n    transform: rotate(180deg);\n    height: 20px;\n    align-self: start;\n    display: none;\n    opacity: 50%;\n  \n}\n.active{\n    display: block;\n}\n/* Main elements */\nmain{\n    display: grid;\n    grid-row: 2/3;\n    justify-items: center;\n\n}\nmain p{\n    grid-row: 2/3;\n    max-width: 700px;\n    padding: 20px;\n}\nmain img{\n    height: 400px;\n    grid-row: 1/2;\n}\n.pieCard{\n    display: flex;\n    flex-direction: column;\n}\n.pieImg{\n    height: 200px;\n    width: 200px;\n}\n\n.pieCard{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 10px brown solid;\n}\n\n.pieCard p {\n    width: 550px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeContactPage: () => (/* binding */ initializeContactPage)
/* harmony export */ });
  
function initializeContactPage(){
    const contactInfo = document.createElement('p')
    contactInfo.innerHTML = `
    Contact Info:
    <br>Von's Pies Co. 
    <br>PhoneNumber: 7437 7437 7437
    <br>Email: Vonspies@vonspies.pies`
    return contactInfo
}


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFooter: () => (/* binding */ createFooter)
/* harmony export */ });
 
function createFooter(){
    const footerElement = document.createElement('footer');
    footerElement.textContent = 'This is a test'
    return footerElement
};



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _img_pieTab_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/pieTab.svg */ "./src/img/pieTab.svg");
/* harmony import */ var _img_steam_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/steam.svg */ "./src/img/steam.svg");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script.js */ "./src/script.js");





function createHeader() {
    const headerElement = document.createElement('header');
    // Add any other header-specific elements
    
    // children for header
    const headingElement = document.createElement('h1');
    const tabList = document.createElement('ul');
    
    // Children for header tab list
    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');
    
    // Tab ID's
    tabList.id = 'tabs'
    homeTab.id = 'homeTab'
    menuTab.id = 'menuTab'
    contactTab.id = 'contactTab'
    
    // Add the class to each tab
    homeTab.classList.add('tab');
    menuTab.classList.add('tab');
    contactTab.classList.add('tab');
    
    tabList.addEventListener('click', (event) => {
        const contentElement = document.querySelector('#content')
        const clickedTab = event.target.closest('li');
        if (clickedTab.classList.contains('tab')) {
            const clickedElementId = clickedTab.id;
            const newMainContent = (0,_script_js__WEBPACK_IMPORTED_MODULE_2__.populateMain)(clickedElementId);
    
            // Replace the existing main content with the new one
            const existingMainElement = document.querySelector('main');
            contentElement.replaceChild(newMainContent, existingMainElement);
            (0,_script_js__WEBPACK_IMPORTED_MODULE_2__.setActiveTab)(clickedElementId)
        }
    });
    
    
    
    // Children for tabs
    function createTabImg(){
        const tabPieSvg = new Image();
        tabPieSvg.src = _img_pieTab_svg__WEBPACK_IMPORTED_MODULE_0__;
        return tabPieSvg
        
    }
    function createSteamImg(){
        const tabSteam = new Image();
        tabSteam.src = _img_steam_svg__WEBPACK_IMPORTED_MODULE_1__;
        tabSteam.classList.add('steam')
        return tabSteam
    }
    
    const homeTabHeading = document.createElement('h2')
    const menuTabHeading = document.createElement('h2')
    const contactTabHeading = document.createElement('h2')
    
    // Adding content to header elements
    headingElement.textContent = "Von's Pies";
    tabList.appendChild(homeTab);
    tabList.appendChild(menuTab);
    tabList.appendChild(contactTab);
    
    homeTabHeading.textContent = 'Home';
    menuTabHeading.textContent = 'Menu';
    contactTabHeading.textContent = 'Contact';
    
    
    homeTab.appendChild(createTabImg());
    menuTab.appendChild(createTabImg());
    contactTab.appendChild(createTabImg());

    homeTab.appendChild(createSteamImg())
    menuTab.appendChild(createSteamImg())
    contactTab.appendChild(createSteamImg())
    
    homeTab.appendChild(homeTabHeading);
    menuTab.appendChild(menuTabHeading);
    contactTab.appendChild(contactTabHeading);

    // Appending Header
    headerElement.appendChild(headingElement);
    headerElement.appendChild(tabList);
    
    return headerElement;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeHomePage: () => (/* binding */ initializeHomePage)
/* harmony export */ });
/* harmony import */ var _img_vonWithPie1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/vonWithPie1.png */ "./src/img/vonWithPie1.png");

  
function initializeHomePage(){
    // create main elements
    const mainElement = document.createElement('main'); 
    const mainContent = document.createElement('p')
    // adding tags to elements
    mainElement.innerHTML = ''
    mainElement.id = 'main'
    mainContent.id = 'mainContent'
    // filling elements
    mainContent.innerHTML = `Von's famous pies have taken the Netherlands by storm, becoming a sensation in a country more known for 
    its practical cuisine than its culinary adventures.<br>These pies are a stark contrast to the typical Dutch fare, which, let's face it, often prioritizes function over flair.
    <br>With the arrival of Von's Pies, the Dutch have been pleasantly ambushed by a whirlwind of flavors and food with actual texture,
     making many wonder how they ever settled for frikandel and herring.<br>
     <br>Each pie from Von's Pies is a culinary rebellion against the ordinary.<br>Where traditional Dutch meals are comfortably predictable, Von's Pies are daringly unpredictable.
    <br>Their crusts are not just flaky; they're an audacious escape from the monotony of deepfried noodle blocks and potato.
    <br><br>The fillings? A far cry from the usual stamppot, they are a blend of the finest ingredients that could make even the most loyal Dutch foodie question their allegiance to their national staples.
    <br>These pies have become the talk of the town, outshining even the most traditional Dutch snacks.
    <br>It's no longer just about filling the belly; it's about feeding the soul with something unexpectedly extraordinary.
    `
    const vonWithPieElement = new Image()
    vonWithPieElement.src = _img_vonWithPie1_png__WEBPACK_IMPORTED_MODULE_0__

    
    // Appending Main
    mainElement.appendChild(vonWithPieElement);
    mainElement.appendChild(mainContent);

    return {
        frontImg: vonWithPieElement,
        content: mainContent,
    }
};



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeMenuPage: () => (/* binding */ initializeMenuPage)
/* harmony export */ });
/* harmony import */ var _img_pieImgs_chickenPie_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/pieImgs/chickenPie.png */ "./src/img/pieImgs/chickenPie.png");
/* harmony import */ var _img_pieImgs_shepardPie_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/pieImgs/shepardPie.png */ "./src/img/pieImgs/shepardPie.png");
/* harmony import */ var _img_pieImgs_steakAndPeaPie_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/pieImgs/steakAndPeaPie.png */ "./src/img/pieImgs/steakAndPeaPie.png");
/* harmony import */ var _img_pieImgs_tunaMornay_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/pieImgs/tunaMornay.png */ "./src/img/pieImgs/tunaMornay.png");
/* harmony import */ var _img_pieImgs_mexicanBeanPie_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/pieImgs/mexicanBeanPie.png */ "./src/img/pieImgs/mexicanBeanPie.png");






function initializeMenuPage(){
    const pies = [
        {
        "name": "Creamy Chicken ",
        "description": " A classic Australian chicken pie with a puff pastry top, showcasing a golden, flaky crust. Inside, a creamy filling of diced chicken, herbs, and mushrooms is encased, perfectly blending flavors and textures.",
        "image": _img_pieImgs_chickenPie_png__WEBPACK_IMPORTED_MODULE_0__
        },{
        "name": "Chunky Steak & Pea",
        "description": " This pie features a rich, savory steak filling, made with tender chunks of steak, gravy, and diced vegetables. A slice is cut out, revealing the hearty inside, all encased in a golden puff pastry crust.",
        "image": _img_pieImgs_steakAndPeaPie_png__WEBPACK_IMPORTED_MODULE_2__   
        },{
        "name": "Tuna Mornay",
        "description": "A delightful twist on the traditional tuna mornay, transformed into a pie with a flaky puff pastry crust. A slice is removed to display the creamy tuna, cheese, and vegetable filling, offering a glimpse of this comforting dish.",
        "image": _img_pieImgs_tunaMornay_png__WEBPACK_IMPORTED_MODULE_3__
        },{
        "name": "Shepards Pie",
        "description": "A traditional Shepherd's pie presented in a round baking dish. It has a savory minced lamb filling with onions, carrots, and peas, topped with a smooth layer of golden-brown mashed potatoes, lightly crisped, and garnished with fresh herbs.",
        "image": _img_pieImgs_shepardPie_png__WEBPACK_IMPORTED_MODULE_1__
        },{
        "name": "Mexican Chilli Bean Pie",
        "description": "This delightful Mexican chili bean pie is served in a colorful ceramic dish, featuring a spicy filling of chili beans, bell peppers, onions, and corn in a tomato sauce. Topped with a golden cornbread crust, sprinkled with melted cheese and cilantro, it presents a perfect blend of flavors. The vibrant setting and Mexican-inspired decorations add to its festive appeal, making it a visually appealing and flavorful dish.",
        "image": _img_pieImgs_mexicanBeanPie_png__WEBPACK_IMPORTED_MODULE_4__
        },
    ]
    const pieCards = pies.map(pie => {
        
        // create elements for Menupage
        const pieCardElement = document.createElement('div')
        const pieNameElement = document.createElement('h2')
        const pieImgElement = new Image()
        const pieDescElement = document.createElement('p')
        
        // Adding a class to the card
        pieCardElement.classList.add('pieCard')
        pieNameElement.classList.add('pieName')
        pieImgElement.classList.add('pieImg')
        // adding content to elements
        pieImgElement.src = pie.image;
        pieNameElement.innerHTML = pie.name
        pieDescElement.innerHTML = pie.description;
        
        pieCardElement.appendChild(pieImgElement)
        pieCardElement.appendChild(pieNameElement)
        pieCardElement.appendChild(pieDescElement)
        
        return pieCardElement
    })
    return pieCards



};



/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateMain: () => (/* binding */ populateMain),
/* harmony export */   setActiveTab: () => (/* binding */ setActiveTab)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _img_pieImgs_chickenPie_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/pieImgs/chickenPie.png */ "./src/img/pieImgs/chickenPie.png");





function setActiveTab(selectedTabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        const steam = tab.querySelector('.steam')
        if (tab.id === selectedTabId) {
            steam.classList.add('active');
        } else {
            steam.classList.remove('active');
        }
    });
}
function populateMain(clickedElementId){
    const mainElement = document.createElement('main')
    // Clear main
    mainElement.innerHTML = '';
    
    // Adding content to main elements
    
    if(clickedElementId === 'homeTab'){
        const newElements = (0,_home__WEBPACK_IMPORTED_MODULE_0__.initializeHomePage)()
        mainElement.appendChild(newElements.frontImg)
        mainElement.appendChild(newElements.content)
    }else if(clickedElementId === 'menuTab'){
        const pieCards = (0,_menu__WEBPACK_IMPORTED_MODULE_1__.initializeMenuPage)()
        pieCards.forEach(pie =>{
            mainElement.appendChild(pie)
        })
        
    }else if(clickedElementId === 'contactTab'){
        const newElements = (0,_contact__WEBPACK_IMPORTED_MODULE_2__.initializeContactPage)()
        mainElement.appendChild(newElements)
    }
    return mainElement
}

/***/ }),

/***/ "./src/img/pieImgs/chickenPie.png":
/*!****************************************!*\
  !*** ./src/img/pieImgs/chickenPie.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2658ea0911b5201a994.png";

/***/ }),

/***/ "./src/img/pieImgs/mexicanBeanPie.png":
/*!********************************************!*\
  !*** ./src/img/pieImgs/mexicanBeanPie.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bdfb0cd55b249167504.png";

/***/ }),

/***/ "./src/img/pieImgs/shepardPie.png":
/*!****************************************!*\
  !*** ./src/img/pieImgs/shepardPie.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3088c60a2ce985ffe230.png";

/***/ }),

/***/ "./src/img/pieImgs/steakAndPeaPie.png":
/*!********************************************!*\
  !*** ./src/img/pieImgs/steakAndPeaPie.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "65bf11a14a1c6e5b4e71.png";

/***/ }),

/***/ "./src/img/pieImgs/tunaMornay.png":
/*!****************************************!*\
  !*** ./src/img/pieImgs/tunaMornay.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a669fbaba4a2f51e4bb4.png";

/***/ }),

/***/ "./src/img/pieTab.svg":
/*!****************************!*\
  !*** ./src/img/pieTab.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "459a4e5fbba0c913501d.svg";

/***/ }),

/***/ "./src/img/steam.svg":
/*!***************************!*\
  !*** ./src/img/steam.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "921e619398a37d81d6ec.svg";

/***/ }),

/***/ "./src/img/vonWithPie1.png":
/*!*********************************!*\
  !*** ./src/img/vonWithPie1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02f0153057ebe2054035.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script.js */ "./src/script.js");





console.log('Test')

document.addEventListener('DOMContentLoaded', function() {
  // DOM is fully parsed and ready for manipulation
  
  const contentElement = document.querySelector('#content')
  
  // Add the image to our existing div.

  contentElement.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_1__.createHeader)());
  contentElement.appendChild((0,_script_js__WEBPACK_IMPORTED_MODULE_3__.populateMain)('homeTab'));
  contentElement.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_2__.createFooter)());

  
}



);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztVQ3RDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNzQjtBQUNDO0FBQ0E7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsd0RBQVk7QUFDekMsNkJBQTZCLHdEQUFZO0FBQ3pDLDZCQUE2Qix3REFBWTs7QUFFekM7QUFDQTs7OztBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogKiB7XG4gICAgYm9yZGVyOiByZWQgMXB4IHNvbGlkO1xufSAqL1xuYm9keXtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKVxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0OSwgMjM0KSAqL1xufVxuI2NvbnRlbnR7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyIDFmcjtcbn1cbi8qIEhlYWRlciBlbGVtZW50cyAqL1xuaGVhZGVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IGJyb3duIHNvbGlkO1xufVxuaGVhZGVyIHVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgXG59XG5cbmhlYWRlciBoMSB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG5cbmxpe1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5saSBpbWd7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5saSBoMntcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG59XG4uc3RlYW17XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiA1MCU7XG4gIFxufVxuLmFjdGl2ZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi8qIE1haW4gZWxlbWVudHMgKi9cbm1haW57XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXJvdzogMi8zO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxufVxubWFpbiBwe1xuICAgIGdyaWQtcm93OiAyLzM7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxubWFpbiBpbWd7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBncmlkLXJvdzogMS8yO1xufVxuLnBpZUNhcmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnBpZUltZ3tcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuLnBpZUNhcmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxMHB4IGJyb3duIHNvbGlkO1xufVxuXG4ucGllQ2FyZCBwIHtcbiAgICB3aWR0aDogNTUwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztHQUVHO0FBQ0g7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwrQkFBK0I7QUFDbkM7QUFDQSxvQkFBb0I7QUFDcEI7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0Esa0JBQWtCO0FBQ2xCO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixxQkFBcUI7O0FBRXpCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogKiB7XFxuICAgIGJvcmRlcjogcmVkIDFweCBzb2xpZDtcXG59ICovXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0OSwgMjM0KSAqL1xcbn1cXG4jY29udGVudHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnIgMWZyO1xcbn1cXG4vKiBIZWFkZXIgZWxlbWVudHMgKi9cXG5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxuICAgIGJvcmRlci1ib3R0b206IDEwcHggYnJvd24gc29saWQ7XFxufVxcbmhlYWRlciB1bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgXFxufVxcblxcbmhlYWRlciBoMSB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcblxcbmxpe1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbmxpIGltZ3tcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcbmxpIGgye1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG4uc3RlYW17XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG4gIFxcbn1cXG4uYWN0aXZle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLyogTWFpbiBlbGVtZW50cyAqL1xcbm1haW57XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG59XFxubWFpbiBwe1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5tYWluIGltZ3tcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuLnBpZUNhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5waWVJbWd7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnBpZUNhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMTBweCBicm93biBzb2xpZDtcXG59XFxuXFxuLnBpZUNhcmQgcCB7XFxuICAgIHdpZHRoOiA1NTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIiAgXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbnRhY3RQYWdlKCl7XG4gICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb250YWN0SW5mby5pbm5lckhUTUwgPSBgXG4gICAgQ29udGFjdCBJbmZvOlxuICAgIDxicj5Wb24ncyBQaWVzIENvLiBcbiAgICA8YnI+UGhvbmVOdW1iZXI6IDc0MzcgNzQzNyA3NDM3XG4gICAgPGJyPkVtYWlsOiBWb25zcGllc0B2b25zcGllcy5waWVzYFxuICAgIHJldHVybiBjb250YWN0SW5mb1xufVxuIiwiIFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXJFbGVtZW50LnRleHRDb250ZW50ID0gJ1RoaXMgaXMgYSB0ZXN0J1xuICAgIHJldHVybiBmb290ZXJFbGVtZW50XG59O1xuXG4iLCJpbXBvcnQgcGllU1ZHIGZyb20gJy4vaW1nL3BpZVRhYi5zdmcnXG5pbXBvcnQgc3RlYW1TVkcgZnJvbSAnLi9pbWcvc3RlYW0uc3ZnJ1xuaW1wb3J0IHsgc2V0QWN0aXZlVGFiIH0gZnJvbSAnLi9zY3JpcHQuanMnO1xuaW1wb3J0IHsgcG9wdWxhdGVNYWluIH0gZnJvbSAnLi9zY3JpcHQuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAvLyBBZGQgYW55IG90aGVyIGhlYWRlci1zcGVjaWZpYyBlbGVtZW50c1xuICAgIFxuICAgIC8vIGNoaWxkcmVuIGZvciBoZWFkZXJcbiAgICBjb25zdCBoZWFkaW5nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgdGFiTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgXG4gICAgLy8gQ2hpbGRyZW4gZm9yIGhlYWRlciB0YWIgbGlzdFxuICAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIFxuICAgIC8vIFRhYiBJRCdzXG4gICAgdGFiTGlzdC5pZCA9ICd0YWJzJ1xuICAgIGhvbWVUYWIuaWQgPSAnaG9tZVRhYidcbiAgICBtZW51VGFiLmlkID0gJ21lbnVUYWInXG4gICAgY29udGFjdFRhYi5pZCA9ICdjb250YWN0VGFiJ1xuICAgIFxuICAgIC8vIEFkZCB0aGUgY2xhc3MgdG8gZWFjaCB0YWJcbiAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBcbiAgICB0YWJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgICAgICBjb25zdCBjbGlja2VkVGFiID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIGlmIChjbGlja2VkVGFiLmNsYXNzTGlzdC5jb250YWlucygndGFiJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50SWQgPSBjbGlja2VkVGFiLmlkO1xuICAgICAgICAgICAgY29uc3QgbmV3TWFpbkNvbnRlbnQgPSBwb3B1bGF0ZU1haW4oY2xpY2tlZEVsZW1lbnRJZCk7XG4gICAgXG4gICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBleGlzdGluZyBtYWluIGNvbnRlbnQgd2l0aCB0aGUgbmV3IG9uZVxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdNYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChuZXdNYWluQ29udGVudCwgZXhpc3RpbmdNYWluRWxlbWVudCk7XG4gICAgICAgICAgICBzZXRBY3RpdmVUYWIoY2xpY2tlZEVsZW1lbnRJZClcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIFxuICAgIFxuICAgIC8vIENoaWxkcmVuIGZvciB0YWJzXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFiSW1nKCl7XG4gICAgICAgIGNvbnN0IHRhYlBpZVN2ZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0YWJQaWVTdmcuc3JjID0gcGllU1ZHO1xuICAgICAgICByZXR1cm4gdGFiUGllU3ZnXG4gICAgICAgIFxuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVTdGVhbUltZygpe1xuICAgICAgICBjb25zdCB0YWJTdGVhbSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0YWJTdGVhbS5zcmMgPSBzdGVhbVNWRztcbiAgICAgICAgdGFiU3RlYW0uY2xhc3NMaXN0LmFkZCgnc3RlYW0nKVxuICAgICAgICByZXR1cm4gdGFiU3RlYW1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgaG9tZVRhYkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgY29uc3QgbWVudVRhYkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgY29uc3QgY29udGFjdFRhYkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgXG4gICAgLy8gQWRkaW5nIGNvbnRlbnQgdG8gaGVhZGVyIGVsZW1lbnRzXG4gICAgaGVhZGluZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBcIlZvbidzIFBpZXNcIjtcbiAgICB0YWJMaXN0LmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICAgIHRhYkxpc3QuYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gICAgdGFiTGlzdC5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcbiAgICBcbiAgICBob21lVGFiSGVhZGluZy50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBtZW51VGFiSGVhZGluZy50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBjb250YWN0VGFiSGVhZGluZy50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBcbiAgICBcbiAgICBob21lVGFiLmFwcGVuZENoaWxkKGNyZWF0ZVRhYkltZygpKTtcbiAgICBtZW51VGFiLmFwcGVuZENoaWxkKGNyZWF0ZVRhYkltZygpKTtcbiAgICBjb250YWN0VGFiLmFwcGVuZENoaWxkKGNyZWF0ZVRhYkltZygpKTtcblxuICAgIGhvbWVUYWIuYXBwZW5kQ2hpbGQoY3JlYXRlU3RlYW1JbWcoKSlcbiAgICBtZW51VGFiLmFwcGVuZENoaWxkKGNyZWF0ZVN0ZWFtSW1nKCkpXG4gICAgY29udGFjdFRhYi5hcHBlbmRDaGlsZChjcmVhdGVTdGVhbUltZygpKVxuICAgIFxuICAgIGhvbWVUYWIuYXBwZW5kQ2hpbGQoaG9tZVRhYkhlYWRpbmcpO1xuICAgIG1lbnVUYWIuYXBwZW5kQ2hpbGQobWVudVRhYkhlYWRpbmcpO1xuICAgIGNvbnRhY3RUYWIuYXBwZW5kQ2hpbGQoY29udGFjdFRhYkhlYWRpbmcpO1xuXG4gICAgLy8gQXBwZW5kaW5nIEhlYWRlclxuICAgIGhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZ0VsZW1lbnQpO1xuICAgIGhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQodGFiTGlzdCk7XG4gICAgXG4gICAgcmV0dXJuIGhlYWRlckVsZW1lbnQ7XG59IiwiaW1wb3J0IHZvbldpdGhQaWVJbWcgZnJvbSAnLi9pbWcvdm9uV2l0aFBpZTEucG5nJztcbiAgXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUhvbWVQYWdlKCl7XG4gICAgLy8gY3JlYXRlIG1haW4gZWxlbWVudHNcbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTsgXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAvLyBhZGRpbmcgdGFncyB0byBlbGVtZW50c1xuICAgIG1haW5FbGVtZW50LmlubmVySFRNTCA9ICcnXG4gICAgbWFpbkVsZW1lbnQuaWQgPSAnbWFpbidcbiAgICBtYWluQ29udGVudC5pZCA9ICdtYWluQ29udGVudCdcbiAgICAvLyBmaWxsaW5nIGVsZW1lbnRzXG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gYFZvbidzIGZhbW91cyBwaWVzIGhhdmUgdGFrZW4gdGhlIE5ldGhlcmxhbmRzIGJ5IHN0b3JtLCBiZWNvbWluZyBhIHNlbnNhdGlvbiBpbiBhIGNvdW50cnkgbW9yZSBrbm93biBmb3IgXG4gICAgaXRzIHByYWN0aWNhbCBjdWlzaW5lIHRoYW4gaXRzIGN1bGluYXJ5IGFkdmVudHVyZXMuPGJyPlRoZXNlIHBpZXMgYXJlIGEgc3RhcmsgY29udHJhc3QgdG8gdGhlIHR5cGljYWwgRHV0Y2ggZmFyZSwgd2hpY2gsIGxldCdzIGZhY2UgaXQsIG9mdGVuIHByaW9yaXRpemVzIGZ1bmN0aW9uIG92ZXIgZmxhaXIuXG4gICAgPGJyPldpdGggdGhlIGFycml2YWwgb2YgVm9uJ3MgUGllcywgdGhlIER1dGNoIGhhdmUgYmVlbiBwbGVhc2FudGx5IGFtYnVzaGVkIGJ5IGEgd2hpcmx3aW5kIG9mIGZsYXZvcnMgYW5kIGZvb2Qgd2l0aCBhY3R1YWwgdGV4dHVyZSxcbiAgICAgbWFraW5nIG1hbnkgd29uZGVyIGhvdyB0aGV5IGV2ZXIgc2V0dGxlZCBmb3IgZnJpa2FuZGVsIGFuZCBoZXJyaW5nLjxicj5cbiAgICAgPGJyPkVhY2ggcGllIGZyb20gVm9uJ3MgUGllcyBpcyBhIGN1bGluYXJ5IHJlYmVsbGlvbiBhZ2FpbnN0IHRoZSBvcmRpbmFyeS48YnI+V2hlcmUgdHJhZGl0aW9uYWwgRHV0Y2ggbWVhbHMgYXJlIGNvbWZvcnRhYmx5IHByZWRpY3RhYmxlLCBWb24ncyBQaWVzIGFyZSBkYXJpbmdseSB1bnByZWRpY3RhYmxlLlxuICAgIDxicj5UaGVpciBjcnVzdHMgYXJlIG5vdCBqdXN0IGZsYWt5OyB0aGV5J3JlIGFuIGF1ZGFjaW91cyBlc2NhcGUgZnJvbSB0aGUgbW9ub3Rvbnkgb2YgZGVlcGZyaWVkIG5vb2RsZSBibG9ja3MgYW5kIHBvdGF0by5cbiAgICA8YnI+PGJyPlRoZSBmaWxsaW5ncz8gQSBmYXIgY3J5IGZyb20gdGhlIHVzdWFsIHN0YW1wcG90LCB0aGV5IGFyZSBhIGJsZW5kIG9mIHRoZSBmaW5lc3QgaW5ncmVkaWVudHMgdGhhdCBjb3VsZCBtYWtlIGV2ZW4gdGhlIG1vc3QgbG95YWwgRHV0Y2ggZm9vZGllIHF1ZXN0aW9uIHRoZWlyIGFsbGVnaWFuY2UgdG8gdGhlaXIgbmF0aW9uYWwgc3RhcGxlcy5cbiAgICA8YnI+VGhlc2UgcGllcyBoYXZlIGJlY29tZSB0aGUgdGFsayBvZiB0aGUgdG93biwgb3V0c2hpbmluZyBldmVuIHRoZSBtb3N0IHRyYWRpdGlvbmFsIER1dGNoIHNuYWNrcy5cbiAgICA8YnI+SXQncyBubyBsb25nZXIganVzdCBhYm91dCBmaWxsaW5nIHRoZSBiZWxseTsgaXQncyBhYm91dCBmZWVkaW5nIHRoZSBzb3VsIHdpdGggc29tZXRoaW5nIHVuZXhwZWN0ZWRseSBleHRyYW9yZGluYXJ5LlxuICAgIGBcbiAgICBjb25zdCB2b25XaXRoUGllRWxlbWVudCA9IG5ldyBJbWFnZSgpXG4gICAgdm9uV2l0aFBpZUVsZW1lbnQuc3JjID0gdm9uV2l0aFBpZUltZ1xuXG4gICAgXG4gICAgLy8gQXBwZW5kaW5nIE1haW5cbiAgICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZCh2b25XaXRoUGllRWxlbWVudCk7XG4gICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZnJvbnRJbWc6IHZvbldpdGhQaWVFbGVtZW50LFxuICAgICAgICBjb250ZW50OiBtYWluQ29udGVudCxcbiAgICB9XG59O1xuXG4iLCJpbXBvcnQgY2hpY2tlblBpZSBmcm9tICcuL2ltZy9waWVJbWdzL2NoaWNrZW5QaWUucG5nJ1xuaW1wb3J0IHNoZXBhcmRQaWUgZnJvbSAnLi9pbWcvcGllSW1ncy9zaGVwYXJkUGllLnBuZydcbmltcG9ydCBzdGVha0FuZFBlYVBpZSBmcm9tICcuL2ltZy9waWVJbWdzL3N0ZWFrQW5kUGVhUGllLnBuZydcbmltcG9ydCB0dW5hTW9ybmF5IGZyb20gJy4vaW1nL3BpZUltZ3MvdHVuYU1vcm5heS5wbmcnXG5pbXBvcnQgbWV4aWNhbkJlYW5QaWUgZnJvbSAnLi9pbWcvcGllSW1ncy9tZXhpY2FuQmVhblBpZS5wbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplTWVudVBhZ2UoKXtcbiAgICBjb25zdCBwaWVzID0gW1xuICAgICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkNyZWFteSBDaGlja2VuIFwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiIEEgY2xhc3NpYyBBdXN0cmFsaWFuIGNoaWNrZW4gcGllIHdpdGggYSBwdWZmIHBhc3RyeSB0b3AsIHNob3djYXNpbmcgYSBnb2xkZW4sIGZsYWt5IGNydXN0LiBJbnNpZGUsIGEgY3JlYW15IGZpbGxpbmcgb2YgZGljZWQgY2hpY2tlbiwgaGVyYnMsIGFuZCBtdXNocm9vbXMgaXMgZW5jYXNlZCwgcGVyZmVjdGx5IGJsZW5kaW5nIGZsYXZvcnMgYW5kIHRleHR1cmVzLlwiLFxuICAgICAgICBcImltYWdlXCI6IGNoaWNrZW5QaWVcbiAgICAgICAgfSx7XG4gICAgICAgIFwibmFtZVwiOiBcIkNodW5reSBTdGVhayAmIFBlYVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiIFRoaXMgcGllIGZlYXR1cmVzIGEgcmljaCwgc2F2b3J5IHN0ZWFrIGZpbGxpbmcsIG1hZGUgd2l0aCB0ZW5kZXIgY2h1bmtzIG9mIHN0ZWFrLCBncmF2eSwgYW5kIGRpY2VkIHZlZ2V0YWJsZXMuIEEgc2xpY2UgaXMgY3V0IG91dCwgcmV2ZWFsaW5nIHRoZSBoZWFydHkgaW5zaWRlLCBhbGwgZW5jYXNlZCBpbiBhIGdvbGRlbiBwdWZmIHBhc3RyeSBjcnVzdC5cIixcbiAgICAgICAgXCJpbWFnZVwiOiBzdGVha0FuZFBlYVBpZSAgIFxuICAgICAgICB9LHtcbiAgICAgICAgXCJuYW1lXCI6IFwiVHVuYSBNb3JuYXlcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgZGVsaWdodGZ1bCB0d2lzdCBvbiB0aGUgdHJhZGl0aW9uYWwgdHVuYSBtb3JuYXksIHRyYW5zZm9ybWVkIGludG8gYSBwaWUgd2l0aCBhIGZsYWt5IHB1ZmYgcGFzdHJ5IGNydXN0LiBBIHNsaWNlIGlzIHJlbW92ZWQgdG8gZGlzcGxheSB0aGUgY3JlYW15IHR1bmEsIGNoZWVzZSwgYW5kIHZlZ2V0YWJsZSBmaWxsaW5nLCBvZmZlcmluZyBhIGdsaW1wc2Ugb2YgdGhpcyBjb21mb3J0aW5nIGRpc2guXCIsXG4gICAgICAgIFwiaW1hZ2VcIjogdHVuYU1vcm5heVxuICAgICAgICB9LHtcbiAgICAgICAgXCJuYW1lXCI6IFwiU2hlcGFyZHMgUGllXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIHRyYWRpdGlvbmFsIFNoZXBoZXJkJ3MgcGllIHByZXNlbnRlZCBpbiBhIHJvdW5kIGJha2luZyBkaXNoLiBJdCBoYXMgYSBzYXZvcnkgbWluY2VkIGxhbWIgZmlsbGluZyB3aXRoIG9uaW9ucywgY2Fycm90cywgYW5kIHBlYXMsIHRvcHBlZCB3aXRoIGEgc21vb3RoIGxheWVyIG9mIGdvbGRlbi1icm93biBtYXNoZWQgcG90YXRvZXMsIGxpZ2h0bHkgY3Jpc3BlZCwgYW5kIGdhcm5pc2hlZCB3aXRoIGZyZXNoIGhlcmJzLlwiLFxuICAgICAgICBcImltYWdlXCI6IHNoZXBhcmRQaWVcbiAgICAgICAgfSx7XG4gICAgICAgIFwibmFtZVwiOiBcIk1leGljYW4gQ2hpbGxpIEJlYW4gUGllXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGRlbGlnaHRmdWwgTWV4aWNhbiBjaGlsaSBiZWFuIHBpZSBpcyBzZXJ2ZWQgaW4gYSBjb2xvcmZ1bCBjZXJhbWljIGRpc2gsIGZlYXR1cmluZyBhIHNwaWN5IGZpbGxpbmcgb2YgY2hpbGkgYmVhbnMsIGJlbGwgcGVwcGVycywgb25pb25zLCBhbmQgY29ybiBpbiBhIHRvbWF0byBzYXVjZS4gVG9wcGVkIHdpdGggYSBnb2xkZW4gY29ybmJyZWFkIGNydXN0LCBzcHJpbmtsZWQgd2l0aCBtZWx0ZWQgY2hlZXNlIGFuZCBjaWxhbnRybywgaXQgcHJlc2VudHMgYSBwZXJmZWN0IGJsZW5kIG9mIGZsYXZvcnMuIFRoZSB2aWJyYW50IHNldHRpbmcgYW5kIE1leGljYW4taW5zcGlyZWQgZGVjb3JhdGlvbnMgYWRkIHRvIGl0cyBmZXN0aXZlIGFwcGVhbCwgbWFraW5nIGl0IGEgdmlzdWFsbHkgYXBwZWFsaW5nIGFuZCBmbGF2b3JmdWwgZGlzaC5cIixcbiAgICAgICAgXCJpbWFnZVwiOiBtZXhpY2FuQmVhblBpZVxuICAgICAgICB9LFxuICAgIF1cbiAgICBjb25zdCBwaWVDYXJkcyA9IHBpZXMubWFwKHBpZSA9PiB7XG4gICAgICAgIFxuICAgICAgICAvLyBjcmVhdGUgZWxlbWVudHMgZm9yIE1lbnVwYWdlXG4gICAgICAgIGNvbnN0IHBpZUNhcmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgcGllTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgIGNvbnN0IHBpZUltZ0VsZW1lbnQgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBjb25zdCBwaWVEZXNjRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBcbiAgICAgICAgLy8gQWRkaW5nIGEgY2xhc3MgdG8gdGhlIGNhcmRcbiAgICAgICAgcGllQ2FyZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGllQ2FyZCcpXG4gICAgICAgIHBpZU5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BpZU5hbWUnKVxuICAgICAgICBwaWVJbWdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BpZUltZycpXG4gICAgICAgIC8vIGFkZGluZyBjb250ZW50IHRvIGVsZW1lbnRzXG4gICAgICAgIHBpZUltZ0VsZW1lbnQuc3JjID0gcGllLmltYWdlO1xuICAgICAgICBwaWVOYW1lRWxlbWVudC5pbm5lckhUTUwgPSBwaWUubmFtZVxuICAgICAgICBwaWVEZXNjRWxlbWVudC5pbm5lckhUTUwgPSBwaWUuZGVzY3JpcHRpb247XG4gICAgICAgIFxuICAgICAgICBwaWVDYXJkRWxlbWVudC5hcHBlbmRDaGlsZChwaWVJbWdFbGVtZW50KVxuICAgICAgICBwaWVDYXJkRWxlbWVudC5hcHBlbmRDaGlsZChwaWVOYW1lRWxlbWVudClcbiAgICAgICAgcGllQ2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQocGllRGVzY0VsZW1lbnQpXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcGllQ2FyZEVsZW1lbnRcbiAgICB9KVxuICAgIHJldHVybiBwaWVDYXJkc1xuXG5cblxufTtcblxuIiwiaW1wb3J0IHsgaW5pdGlhbGl6ZUhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZU1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IGNoaWNrZW5QaWUgZnJvbSAnLi9pbWcvcGllSW1ncy9jaGlja2VuUGllLnBuZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZVRhYihzZWxlY3RlZFRhYklkKSB7XG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbiAgICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgY29uc3Qgc3RlYW0gPSB0YWIucXVlcnlTZWxlY3RvcignLnN0ZWFtJylcbiAgICAgICAgaWYgKHRhYi5pZCA9PT0gc2VsZWN0ZWRUYWJJZCkge1xuICAgICAgICAgICAgc3RlYW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlTWFpbihjbGlja2VkRWxlbWVudElkKXtcbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICAgIC8vIENsZWFyIG1haW5cbiAgICBtYWluRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICAvLyBBZGRpbmcgY29udGVudCB0byBtYWluIGVsZW1lbnRzXG4gICAgXG4gICAgaWYoY2xpY2tlZEVsZW1lbnRJZCA9PT0gJ2hvbWVUYWInKXtcbiAgICAgICAgY29uc3QgbmV3RWxlbWVudHMgPSBpbml0aWFsaXplSG9tZVBhZ2UoKVxuICAgICAgICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50cy5mcm9udEltZylcbiAgICAgICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudHMuY29udGVudClcbiAgICB9ZWxzZSBpZihjbGlja2VkRWxlbWVudElkID09PSAnbWVudVRhYicpe1xuICAgICAgICBjb25zdCBwaWVDYXJkcyA9IGluaXRpYWxpemVNZW51UGFnZSgpXG4gICAgICAgIHBpZUNhcmRzLmZvckVhY2gocGllID0+e1xuICAgICAgICAgICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQocGllKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9ZWxzZSBpZihjbGlja2VkRWxlbWVudElkID09PSAnY29udGFjdFRhYicpe1xuICAgICAgICBjb25zdCBuZXdFbGVtZW50cyA9IGluaXRpYWxpemVDb250YWN0UGFnZSgpXG4gICAgICAgIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnRzKVxuICAgIH1cbiAgICByZXR1cm4gbWFpbkVsZW1lbnRcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgeyBjcmVhdGVIZWFkZXJ9IGZyb20gJy4vaGVhZGVyLmpzJztcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gJy4vZm9vdGVyLmpzJztcbmltcG9ydCB7IHBvcHVsYXRlTWFpbiB9IGZyb20gJy4vc2NyaXB0LmpzJztcblxuY29uc29sZS5sb2coJ1Rlc3QnKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIC8vIERPTSBpcyBmdWxseSBwYXJzZWQgYW5kIHJlYWR5IGZvciBtYW5pcHVsYXRpb25cbiAgXG4gIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICBcbiAgLy8gQWRkIHRoZSBpbWFnZSB0byBvdXIgZXhpc3RpbmcgZGl2LlxuXG4gIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocG9wdWxhdGVNYWluKCdob21lVGFiJykpO1xuICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgXG59XG5cblxuXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9