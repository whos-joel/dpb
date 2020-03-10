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
exports.push([module.i, "* {\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 16px;\n  font-family: 'Didact Gothic', sans-serif;\n  color: #555;\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\n.main-row {\n  display: flex;\n  justify-content: center;\n}\n.container {\n  width: 64rem;\n  display: flex;\n}\n#dpb-logo {\n  height: 100%;\n}\nheader {\n  height: 6rem;\n  background-color: white;\n}\nheader .container {\n  width: 64rem;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n}\nheader .container .tel {\n  font-size: 2.5rem;\n  color: #5bb8ed;\n}\nheader .container .tel span {\n  font-size: 1.25rem;\n  color: #555;\n  display: block;\n}\n#hero {\n  background: url(/images/istockphoto-900727014-1024x1024.jpg);\n  background-size: cover;\n  background-position-y: center;\n}\n#hero .container {\n  justify-content: flex-end;\n  padding: 1rem;\n}\n#hero .container .form {\n  background-color: #ffffffd4;\n  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.5);\n  height: 100%;\n  width: 47%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n#hero .container .form h2 {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: normal;\n  color: #37b6ff;\n}\n#hero .container .form .form-group {\n  margin: 0;\n}\n#hero .container .form .form-group input,\n#hero .container .form .form-group textarea {\n  border: 1px solid #999;\n  padding: 0.5rem;\n  width: 100%;\n  color: #555;\n}\n#hero .container .form .form-group label {\n  display: block;\n}\n#hero .container .form .form-group.question-form-group {\n  flex-grow: 1;\n}\n#hero .container .form .form-group button {\n  background-color: #009900;\n  color: #fff;\n  padding: 0.5rem 1rem;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  transition: 0.55s;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n#hero .container .form .form-group button::after {\n  content: \"\";\n  display: block;\n  width: 2rem;\n  height: 2rem;\n  background-image: url(/images/arrow_forward-white.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  margin-left: 1rem;\n}\n#hero .container .form .form-group button:hover {\n  background-color: #00990077;\n}\n#mpaq .container {\n  height: auto;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}\n#mpaq .container img {\n  width: 47%;\n  height: auto;\n}\n#mpaq .container #testimonial {\n  position: relative;\n  background-color: #264763;\n  color: #fff;\n  padding: 0 4.5rem;\n  width: 47%;\n  font-style: italic;\n}\n#mpaq .container #testimonial::before {\n  content: open-quote;\n  font-size: 6rem;\n  line-height: 1;\n  display: flex;\n  justify-content: center;\n  background-color: #c7263c;\n  position: absolute;\n  height: 3rem;\n  width: 3rem;\n  top: 0;\n  left: 0;\n  vertical-align: top;\n  font-style: normal;\n}\n#mpaq .container #testimonial::after {\n  content: close-quote;\n  font-size: 6rem;\n  line-height: 1;\n  display: flex;\n  justify-content: center;\n  background-color: #c7263c;\n  position: absolute;\n  height: 3rem;\n  width: 3rem;\n  bottom: 0;\n  right: 0;\n  vertical-align: top;\n  font-style: normal;\n}\n#about-services {\n  background-color: #dfe8ed;\n  padding: 1rem;\n}\n#about-services .container {\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n}\n#about-services .container #about {\n  width: 47%;\n}\n#about-services .container #services {\n  margin: 1rem;\n  margin-right: 0;\n  padding: 1rem;\n  background-color: #5bb8ed;\n  color: #fff;\n  width: 47%;\n}\n#about-services .container #services h2 {\n  background-color: #264763;\n  margin: -1rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  position: relative;\n}\n#about-services .container #services h2::after {\n  content: \"\";\n  background-image: url(/images/build-24px.svg);\n  background-repeat: no-repeat;\n  background-size: 70%;\n  background-position: center center;\n  background-color: #c7263c;\n  height: 100%;\n  width: 4rem;\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n#about-services .container #services ul {\n  list-style: none;\n  position: relative;\n  margin: 0;\n  padding: 0 0 0 2rem;\n}\n#about-services .container #services ul li {\n  margin: 1rem 0;\n}\n#about-services .container #services ul li::before {\n  content: \"\";\n  background-image: url(/images/arrow_forward-24px.svg);\n  display: flex;\n  height: 1.7rem;\n  width: 1.7rem;\n  position: absolute;\n  left: 0;\n}\n.licenced .container {\n  justify-content: space-between;\n  padding: 1rem;\n  align-items: center;\n}\nfooter {\n  background-color: #264763;\n  color: #dfe8ed;\n}\nfooter .container {\n  padding: 1rem;\n  justify-content: space-between;\n  align-items: center;\n}\nfooter .container .tel {\n  font-size: 2.5rem;\n  color: #dfe8ed;\n}\nfooter .container .tel span {\n  font-size: 1.25rem;\n  color: #dfe8ed;\n  display: block;\n}\n.form-container {\n  padding: 1rem;\n  border: 1px #ccc solid;\n  display: flex;\n  flex-direction: column;\n}\n.form-container form div.form-group {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-end;\n  padding: 1rem 0;\n}\n.form-container form div.form-group div.input-group {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.form-container form div.form-group div.input-group label {\n  min-width: 8rem;\n}\n.form-container form div.form-group div.input-group input {\n  flex-grow: 1;\n  border: 1px #ccc solid;\n  padding: 0.333rem;\n}\n.form-container form div.form-group div.validation {\n  margin-top: 0.1rem;\n  margin-left: 8rem;\n  background-color: #c30b0b;\n  color: #fff;\n  display: none;\n  align-content: center;\n  padding: 0.333rem;\n}\n.form-container form div.form-group.invalid .validation {\n  display: flex;\n}\n.form-container form div.form-group.invalid .input-group input {\n  border-color: #c30b0b;\n  background: #fcd1d1;\n}\n.form-container .result-panel {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.form-container .result-panel.progress::before,\n.form-container .result-panel.progress::after {\n  content: \"\";\n  position: absolute;\n  width: 120px;\n  height: 120px;\n  border: 10px solid #ccc;\n  border-radius: 50%;\n  transform: translate(50% 50%);\n}\n.form-container .result-panel.progress::after {\n  border-color: transparent;\n  border-left-color: #999;\n  animation-name: spin;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n@keyframes spin {\n  form {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-container .result-panel p {\n  text-align: center;\n}\n.form-container .result-panel .form-btn {\n  padding: 6px 12px;\n  background-color: #ccc;\n  border: 1px solid #999;\n  transition: background-color 0.25s;\n}\n.form-container .result-panel .form-btn:hover {\n  background-color: #bbb;\n}\n", "",{"version":3,"sources":["C:/Users/curta/OneDrive/Documents/VS Code/dpb/styles/styles.less","site.less","C:/Users/curta/OneDrive/Documents/VS Code/dpb/styles/form.less"],"names":[],"mappings":"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","file":"site.less","sourcesContent":["@import \"variables.less\";\n*{\n    box-sizing: border-box;\n}\nhtml{\n    font-size: 16px;\n    font-family: 'Didact Gothic', sans-serif;\n    color: #555;\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n}\n\n.main-row{\n    display: flex;\n    justify-content: center;\n}\n\n.container{\n    width: 64rem;\n    display: flex;\n}\n\n#dpb-logo{\n    height: 100%;\n}\n\nheader{\n    height: 6rem;\n    background-color: white;\n  \n    .container{\n        width: 64rem;\n        align-items: center;\n        justify-content: space-between;\n        padding: 1rem;\n\n        .tel{\n            span{\n                font-size: 1.25rem;\n                color: #555;\n                display: block;\n            }\n            font-size: 2.5rem;\n            color: @brand-color;\n        }\n    }\n}\n\n#hero{\n    background: url(/images/istockphoto-900727014-1024x1024.jpg);\n    background-size: cover;\n    background-position-y: center;\n   \n    .container{\n        justify-content: flex-end;\n        padding: 1rem;\n        .form{\n            h2{\n                margin: 0;\n                font-size: 2rem;\n                font-weight: normal;\n                color: #37b6ff;\n            }\n            background-color: #ffffffd4;\n            box-shadow: 0 .0 .5rem .5rem rgba(0, 0, 0, .5);\n            height: 100%;\n            width: 47%;\n            padding: 1rem;\n            display: flex;\n            flex-direction: column;\n            .form-group{\n                margin: 0;\n                input, textarea{\n                    border: 1px solid #999;\n                    padding: .5rem;\n                    width: 100%;\n                    color: #555;\n                }\n               \n                label{\n                    display: block;\n                }\n                &.question-form-group{\n                    flex-grow: 1;\n                }\n                button{\n                    background-color: #009900;\n                    color: #fff;\n                    padding: .5rem 1rem;\n                    border: none;\n                    font-size: 1.5rem;\n                    cursor: pointer;\n                    transition: .55s;\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-between;\n                    &::after{\n                        content:\"\";\n                        display: block;\n                        width: 2rem;\n                        height: 2rem;\n                        background-image: url(/images/arrow_forward-white.svg);\n                        background-repeat: no-repeat;\n                        background-size: contain;\n                        margin-left: 1rem;\n                    }\n                    &:hover{\n                        background-color:  #00990077;\n                    }\n                }\n            }\n        }\n    }\n}\n\n#mpaq{\n    .container{\n        height: auto;\n        justify-content: space-between;\n        align-items: center;\n        padding: 1rem;\n        img{\n            width: 47%;\n            height: auto;\n        }\n        #testimonial{\n            &::before{\n                content: open-quote;\n                font-size:6rem;\n                line-height: 1;\n                display: flex;\n                justify-content: center;\n                background-color: @mpaq-red;\n                position: absolute;\n                height: 3rem;\n                width: 3rem;\n                top:0;\n                left: 0;\n                vertical-align: top;\n                font-style: normal;\n            }\n\n            position: relative;\n            background-color: @mpaq-blue;\n            color: #fff;\n            padding: 0 4.5rem;\n            width: 47%;\n            font-style: italic;\n            &::after{\n                content: close-quote;\n                font-size:6rem;\n                line-height: 1;\n                display: flex;\n                justify-content: center;\n                background-color: @mpaq-red;\n                position: absolute;\n                height: 3rem;\n                width: 3rem;\n                bottom:0;\n                right: 0;\n                vertical-align: top;\n                font-style: normal;\n            }\n        }\n    }\n}\n\n#about-services{\n    background-color:@light;\n    padding: 1rem;\n    .container{\n       align-items: center;\n       justify-content: space-between;\n       padding: 1rem;\n        #about{\n            width: 47%;\n        }\n        #services{\n            margin: 1rem;\n            margin-right: 0;\n            padding: 1rem;\n            background-color:@brand-color;\n            color: #fff;\n            width: 47%;\n            h2{\n                background-color: @mpaq-blue;\n                margin: -1rem;\n                margin-bottom: 1rem;\n                padding: 1rem;\n                position: relative;\n                &::after{\n                    content: \"\";\n                    background-image: url(/images/build-24px.svg);\n                    background-repeat: no-repeat;\n                    background-size: 70%;\n                    background-position: center center;\n                    background-color: @mpaq-red;\n                    height: 100%;\n                    width: 4rem;\n                    display: inline-block;\n                    position: absolute;\n                    right: 0;\n                    top: 0;\n                }\n            }\n            ul{\n                list-style: none;\n                position: relative;\n                margin: 0;\n                padding: 0 0 0 2rem;\n                li{\n                    &::before{\n                        content: \"\";\n                        background-image: url(/images/arrow_forward-24px.svg);\n                        display: flex;\n                        height: 1.7rem;\n                        width: 1.7rem;\n                        position: absolute;\n                        left: 0;\n                    }\n                    margin: 1rem 0;\n                }\n            }\n        }\n    }\n}\n.licenced{\n    .container{\n        justify-content: space-between;\n        padding: 1rem;\n        align-items: center;\n    }\n}\nfooter{\n    background-color:@mpaq-blue;\n    color: @light;\n    .container{\n        padding: 1rem;\n        justify-content: space-between;\n        align-items: center;\n        .tel{\n            span{\n                font-size: 1.25rem;\n                color:@light;\n                display: block;\n            }\n            font-size: 2.5rem;\n            color: @light;\n        }\n    }\n}","* {\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 16px;\n  font-family: 'Didact Gothic', sans-serif;\n  color: #555;\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\n.main-row {\n  display: flex;\n  justify-content: center;\n}\n.container {\n  width: 64rem;\n  display: flex;\n}\n#dpb-logo {\n  height: 100%;\n}\nheader {\n  height: 6rem;\n  background-color: white;\n}\nheader .container {\n  width: 64rem;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n}\nheader .container .tel {\n  font-size: 2.5rem;\n  color: #5bb8ed;\n}\nheader .container .tel span {\n  font-size: 1.25rem;\n  color: #555;\n  display: block;\n}\n#hero {\n  background: url(/images/istockphoto-900727014-1024x1024.jpg);\n  background-size: cover;\n  background-position-y: center;\n}\n#hero .container {\n  justify-content: flex-end;\n  padding: 1rem;\n}\n#hero .container .form {\n  background-color: #ffffffd4;\n  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.5);\n  height: 100%;\n  width: 47%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n#hero .container .form h2 {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: normal;\n  color: #37b6ff;\n}\n#hero .container .form .form-group {\n  margin: 0;\n}\n#hero .container .form .form-group input,\n#hero .container .form .form-group textarea {\n  border: 1px solid #999;\n  padding: 0.5rem;\n  width: 100%;\n  color: #555;\n}\n#hero .container .form .form-group label {\n  display: block;\n}\n#hero .container .form .form-group.question-form-group {\n  flex-grow: 1;\n}\n#hero .container .form .form-group button {\n  background-color: #009900;\n  color: #fff;\n  padding: 0.5rem 1rem;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  transition: 0.55s;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n#hero .container .form .form-group button::after {\n  content: \"\";\n  display: block;\n  width: 2rem;\n  height: 2rem;\n  background-image: url(/images/arrow_forward-white.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  margin-left: 1rem;\n}\n#hero .container .form .form-group button:hover {\n  background-color: #00990077;\n}\n#mpaq .container {\n  height: auto;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}\n#mpaq .container img {\n  width: 47%;\n  height: auto;\n}\n#mpaq .container #testimonial {\n  position: relative;\n  background-color: #264763;\n  color: #fff;\n  padding: 0 4.5rem;\n  width: 47%;\n  font-style: italic;\n}\n#mpaq .container #testimonial::before {\n  content: open-quote;\n  font-size: 6rem;\n  line-height: 1;\n  display: flex;\n  justify-content: center;\n  background-color: #c7263c;\n  position: absolute;\n  height: 3rem;\n  width: 3rem;\n  top: 0;\n  left: 0;\n  vertical-align: top;\n  font-style: normal;\n}\n#mpaq .container #testimonial::after {\n  content: close-quote;\n  font-size: 6rem;\n  line-height: 1;\n  display: flex;\n  justify-content: center;\n  background-color: #c7263c;\n  position: absolute;\n  height: 3rem;\n  width: 3rem;\n  bottom: 0;\n  right: 0;\n  vertical-align: top;\n  font-style: normal;\n}\n#about-services {\n  background-color: #dfe8ed;\n  padding: 1rem;\n}\n#about-services .container {\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n}\n#about-services .container #about {\n  width: 47%;\n}\n#about-services .container #services {\n  margin: 1rem;\n  margin-right: 0;\n  padding: 1rem;\n  background-color: #5bb8ed;\n  color: #fff;\n  width: 47%;\n}\n#about-services .container #services h2 {\n  background-color: #264763;\n  margin: -1rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  position: relative;\n}\n#about-services .container #services h2::after {\n  content: \"\";\n  background-image: url(/images/build-24px.svg);\n  background-repeat: no-repeat;\n  background-size: 70%;\n  background-position: center center;\n  background-color: #c7263c;\n  height: 100%;\n  width: 4rem;\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n#about-services .container #services ul {\n  list-style: none;\n  position: relative;\n  margin: 0;\n  padding: 0 0 0 2rem;\n}\n#about-services .container #services ul li {\n  margin: 1rem 0;\n}\n#about-services .container #services ul li::before {\n  content: \"\";\n  background-image: url(/images/arrow_forward-24px.svg);\n  display: flex;\n  height: 1.7rem;\n  width: 1.7rem;\n  position: absolute;\n  left: 0;\n}\n.licenced .container {\n  justify-content: space-between;\n  padding: 1rem;\n  align-items: center;\n}\nfooter {\n  background-color: #264763;\n  color: #dfe8ed;\n}\nfooter .container {\n  padding: 1rem;\n  justify-content: space-between;\n  align-items: center;\n}\nfooter .container .tel {\n  font-size: 2.5rem;\n  color: #dfe8ed;\n}\nfooter .container .tel span {\n  font-size: 1.25rem;\n  color: #dfe8ed;\n  display: block;\n}\n.form-container {\n  padding: 1rem;\n  border: 1px #ccc solid;\n  display: flex;\n  flex-direction: column;\n}\n.form-container form div.form-group {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-end;\n  padding: 1rem 0;\n}\n.form-container form div.form-group div.input-group {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.form-container form div.form-group div.input-group label {\n  min-width: 8rem;\n}\n.form-container form div.form-group div.input-group input {\n  flex-grow: 1;\n  border: 1px #ccc solid;\n  padding: 0.333rem;\n}\n.form-container form div.form-group div.validation {\n  margin-top: 0.1rem;\n  margin-left: 8rem;\n  background-color: #c30b0b;\n  color: #fff;\n  display: none;\n  align-content: center;\n  padding: 0.333rem;\n}\n.form-container form div.form-group.invalid .validation {\n  display: flex;\n}\n.form-container form div.form-group.invalid .input-group input {\n  border-color: #c30b0b;\n  background: #fcd1d1;\n}\n.form-container .result-panel {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.form-container .result-panel.progress::before,\n.form-container .result-panel.progress::after {\n  content: \"\";\n  position: absolute;\n  width: 120px;\n  height: 120px;\n  border: 10px solid #ccc;\n  border-radius: 50%;\n  transform: translate(50% 50%);\n}\n.form-container .result-panel.progress::after {\n  border-color: transparent;\n  border-left-color: #999;\n  animation-name: spin;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n@keyframes spin {\n  form {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-container .result-panel p {\n  text-align: center;\n}\n.form-container .result-panel .form-btn {\n  padding: 6px 12px;\n  background-color: #ccc;\n  border: 1px solid #999;\n  transition: background-color 0.25s;\n}\n.form-container .result-panel .form-btn:hover {\n  background-color: #bbb;\n}\n","@import \"variables.less\";\n.form-container{\n   \n    padding: 1rem;\n    border: 1px #ccc solid;\n    display: flex;\n    flex-direction: column;\n    form{\n        div.form-group{\n            display: flex;\n            flex-direction: column;\n            align-content: flex-end;\n            padding: 1rem 0;\n            div.input-group{\n                display: flex;\n                flex-direction: row;\n                justify-content: space-between;\n                align-items: center;\n                label{\n                    min-width: 8rem;\n                }\n                input{\n                    flex-grow: 1;\n                    border: 1px #ccc solid;\n                    padding: .333rem;\n                }\n            }\n            div.validation{\n                margin-top: .1rem;\n                margin-left: 8rem;\n                background-color: @invalid-red;\n                color: #fff;\n                display: none;\n                align-content: center;\n                padding: .333rem;\n            }\n            &.invalid{\n                .validation{\n                    display: flex;\n                }\n                .input-group input{\n                    border-color: @invalid-red;\n                    background: lighten(@invalid-red, 50);\n                }\n            }\n        }\n    }\n\n    .result-panel{\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n\n        &.progress{\n            &::before, &::after{\n                content: \"\";\n                position: absolute;\n                width: 120px;\n                height: 120px;\n                border: 10px solid #ccc;\n                border-radius: 50%;\n                transform: translate(50% 50%);\n            }\n            &::after{\n                border-color: transparent;\n                border-left-color: #999;\n                animation-name: spin;\n                animation-duration: 1s;\n                animation-iteration-count: infinite;\n                animation-timing-function: linear;\n            }\n            @keyframes spin {\n                form{ transform: rotate(0deg);}\n                to{ transform: rotate(360deg);}\n            }\n           \n        }\n\n        p{\n            text-align: center;\n        }\n\n        .form-btn{\n            padding: 6px 12px;\n            background-color: #ccc;\n            border: 1px solid #999;\n            transition: background-color .25s;\n            &:hover{\n                background-color: #bbb;\n            }\n        }\n    }\n}"]}]);


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
    setHtmlElements();
    const inputs = document.forms[0].querySelectorAll("input, textarea");
    for (var i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        var validation = [];
        var fieldName = input.previousElementSibling.innerHTML;
        if (input.attributes.getNamedItem("required") !== null)
            validation.push({ validator: required, invalidMessage: `${fieldName} is a required field` });
        if (input.id === "email")
            validation.push({ validator: email, invalidMessage: `Please enter a valid email` });
        if (validation.length > 0) {
            input.validation = validation;
            input.addEventListener("change", inputChanged);
        }
    }
    const btn = document.querySelector("#send-email");
    btn.addEventListener("click", () => {
        if (validateAll()) {
            displayProgress();
            sendEmail(getEmailModel())
                .then((result) => {
                displayResult("Thank you for your inquiry, we will respond to you as soon as possible. If you need to get in contact urgently please call us on <a href=\"0415249977\">0415 249 977</a>.");
            })
                .catch((error) => {
                displayError("Sorry there's been a problem sending your inquiry. Please give us a call on <a href=\"0415249977\">0415 249 977</a> and we'll be more than happy to talk.");
            });
        }
    });
}
exports.onload = onload;
let formContainer;
let form;
let resultPanel;
function setHtmlElements() {
    formContainer = document.querySelector(".form-container");
    form = document.querySelector("#form");
}
function displayProgress() {
    resultPanel = document.createElement("div");
    resultPanel.classList.add("result-panel", "progress");
    resultPanel.style.height = `${form.getBoundingClientRect().height}px`;
    formContainer.appendChild(resultPanel);
    form.style.display = "none";
}
function displayResult(result) {
    resultPanel.classList.remove("progress");
    resultPanel.innerHTML = `<p>${result}</p>`;
    displayFormBtn();
}
function displayFormBtn() {
    let formBtn = document.createElement("a");
    formBtn.innerHTML = "Return to Inquiry Form";
    formBtn.classList.add("form-btn");
    formBtn.addEventListener("click", () => { displayForm(); });
    resultPanel.appendChild(formBtn);
}
function displayError(error) {
    resultPanel.classList.remove("progress");
    resultPanel.classList.add("error");
    resultPanel.innerHTML = `<p>${error}</p>`;
    displayFormBtn();
}
function displayForm() {
    resultPanel.remove();
    form.style.display = "block";
    clearFrom();
}
function clearFrom() {
    const inputs = document.forms[0].querySelectorAll("input, textarea");
    for (const input of inputs) {
        input.value = "";
    }
}
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
    if (validation) {
        const formGroup = input.closest(".form-group");
        const validationElement = formGroup.querySelector(".validation");
        for (let i = 0; i < validation.length; i++) {
            if (validation[i].validator(input.value)) {
                validationCss(formGroup, "valid", "invalid");
                validationElement.innerHTML = "";
                input.isValid = true;
            }
            else {
                validationCss(formGroup, "invalid", "valid");
                validationElement.innerHTML = validation[i].invalidMessage;
                input.isValid = false;
                break;
            }
        }
    }
}
function getEmailModel() {
    return {
        senderName: getInputValue("name"),
        senderEmail: getInputValue("email"),
        subject: "Customer Inquiry",
        telephone: getInputValue("tel"),
        message: getInputValue("question")
    };
}
function sendEmail(model) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            resolve(xhr.response);
        });
        xhr.addEventListener("error", () => {
            reject(xhr.status);
        });
        xhr.open("POST", "https://dpb-emailer.azurewebsites.net/api/SendEmail");
        xhr.send(JSON.stringify(model));
    });
}
function getInputValue(id) {
    return getInputById(id).value;
}
function getInputById(id) {
    return document.forms[0].querySelector(`#${id}`);
}
function validateAll() {
    let isValid = true;
    let inputs = document.forms[0].querySelectorAll("input, textarea");
    for (let input of inputs) {
        validate(input);
        if (input.isValid === false)
            isValid = false;
    }
    return isValid;
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