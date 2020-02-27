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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./styles/site.less":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/less-loader/dist/cjs.js??ref--5-2!./styles/site.less ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "html {\n  font-size: 16px;\n  color: #666;\n}\n* {\n  box-sizing: border-box;\n}\n.form-container {\n  margin: 1rem;\n  padding: 1rem;\n  border: 1px #ccc solid;\n  display: flex;\n  flex-direction: column;\n}\n.form-container form div.form-group {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-end;\n  padding: 1rem 0;\n}\n.form-container form div.form-group div.input-group {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.form-container form div.form-group div.input-group label {\n  min-width: 8rem;\n}\n.form-container form div.form-group div.input-group input {\n  flex-grow: 1;\n  border: 1px #ccc solid;\n  padding: 0.333rem;\n}\n.form-container form div.form-group div.validation {\n  margin-top: 0.1rem;\n  margin-left: 8rem;\n  background-color: #ccc;\n  color: #fff;\n  display: none;\n  align-content: center;\n  padding: 0.333rem;\n}\n.form-container form div.form-group.invalid .validation {\n  display: flex;\n}\n.form-container form div.form-group.invalid .input-group input {\n  border-color: #ccc;\n  background: #ffffff;\n}\n", "",{"version":3,"sources":["G:/Projects/VsCode/Webpack/styles/site.less","site.less"],"names":[],"mappings":"AAGA;EACI,eAAA;EACA,WAAA;ACFJ;ADKA;EACI,sBAAA;ACHJ;ADMA;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;ACJJ;ADDA;EAQY,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,eAAA;ACJZ;ADPA;EAagB,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;ACHhB;ADbA;EAkBoB,eAAA;ACFpB;ADhBA;EAqBoB,YAAA;EACA,sBAAA;EACA,iBAAA;ACFpB;ADrBA;EA2BgB,kBAAA;EACA,iBAAA;EACA,sBAAA;EACA,WAAA;EACA,aAAA;EACA,qBAAA;EACA,iBAAA;ACHhB;ADKY;EAEQ,aAAA;ACJpB;ADEY;EAKQ,kBAAA;EACA,mBAAA;ACJpB","file":"site.less","sourcesContent":["// @invalid-red: rgb(195, 11, 11);\n@invalid-red: #ccc;\n\nhtml{\n    font-size: 16px;\n    color: #666;\n}\n\n*{\n    box-sizing: border-box;\n}\n\n.form-container{\n    margin: 1rem;\n    padding: 1rem;\n    border: 1px #ccc solid;\n    display: flex;\n    flex-direction: column;\n    form{\n        div.form-group{\n            display: flex;\n            flex-direction: column;\n            align-content: flex-end;\n            padding: 1rem 0;\n            div.input-group{\n                display: flex;\n                flex-direction: row;\n                justify-content: space-between;\n                align-items: center;\n                label{\n                    min-width: 8rem;\n                }\n                input{\n                    flex-grow: 1;\n                    border: 1px #ccc solid;\n                    padding: .333rem;\n                }\n            }\n            div.validation{\n                margin-top: .1rem;\n                margin-left: 8rem;\n                background-color: @invalid-red;\n                color: #fff;\n                display: none;\n                align-content: center;\n                padding: .333rem;\n            }\n            &.invalid{\n                .validation{\n                    display: flex;\n                }\n                .input-group input{\n                    border-color: @invalid-red;\n                    background: lighten(@invalid-red, 50);\n                }\n            }\n        }\n    }\n}","html {\n  font-size: 16px;\n  color: #666;\n}\n* {\n  box-sizing: border-box;\n}\n.form-container {\n  margin: 1rem;\n  padding: 1rem;\n  border: 1px #ccc solid;\n  display: flex;\n  flex-direction: column;\n}\n.form-container form div.form-group {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-end;\n  padding: 1rem 0;\n}\n.form-container form div.form-group div.input-group {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.form-container form div.form-group div.input-group label {\n  min-width: 8rem;\n}\n.form-container form div.form-group div.input-group input {\n  flex-grow: 1;\n  border: 1px #ccc solid;\n  padding: 0.333rem;\n}\n.form-container form div.form-group div.validation {\n  margin-top: 0.1rem;\n  margin-left: 8rem;\n  background-color: #ccc;\n  color: #fff;\n  display: none;\n  align-content: center;\n  padding: 0.333rem;\n}\n.form-container form div.form-group.invalid .validation {\n  display: flex;\n}\n.form-container form div.form-group.invalid .input-group input {\n  border-color: #ccc;\n  background: #ffffff;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./../styles/site.less */ "./styles/site.less");
const validation_1 = __webpack_require__(/*! ./validation */ "./src/validation.ts");
window.onload = validation_1.onload;


/***/ }),

/***/ "./src/validation.ts":
/*!***************************!*\
  !*** ./src/validation.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function onload() {
    const inputs = document.forms[0].querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        var validation = [];
        var fieldName = input.previousElementSibling.innerHTML;
        if (input.attributes.getNamedItem("required") !== null)
            validation.push({ validator: required, inValidMessage: `${fieldName} is a required field` });
        if (input.id === "email")
            validation.push({ validator: email, inValidMessage: `Please enter a valid email` });
        if (validation.length > 0) {
            input.validation = validation;
            input.addEventListener("change", inputChanged);
        }
        //(input as HTMLInputElement).onchange = inputChange;
    }
}
exports.onload = onload;
function inputChanged(ev) {
    const input = ev.target;
    validate(input);
    input.addEventListener("keyup", inputKeyup);
}
function inputKeyup(ev) {
    const input = ev.target;
    validate(input);
}
function validate(input) {
    const validation = input.validation;
    const formGroup = input.closest(".form-group");
    const validationElement = formGroup.querySelector(".validation");
    for (let i = 0; i < validation.length; i++) {
        if (validation[i].validator(input.value)) {
            validationCss(formGroup, "valid", "invalid");
            validationElement.innerHTML = "";
        }
        else {
            validationCss(formGroup, "invalid", "valid");
            validationElement.innerHTML = validation[i].inValidMessage;
            break;
        }
    }
}
function validationCss(element, cssToAdd, cssToRemove) {
    if (!element.classList.contains(cssToAdd))
        element.classList.add(cssToAdd);
    if (element.classList.contains(cssToRemove))
        element.classList.remove(cssToRemove);
}
function required(val) {
    return val !== undefined && val !== "";
}
function email(val) {
    if (val === undefined)
        return true;
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(val);
}


/***/ }),

/***/ "./styles/site.less":
/*!**************************!*\
  !*** ./styles/site.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/less-loader/dist/cjs.js??ref--5-2!./site.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./styles/site.less");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=main.js.map