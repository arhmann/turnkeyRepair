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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar buttons = document.querySelectorAll(\".nav-items-btn\");\nvar sliders = document.querySelectorAll(\".slide\");\nvar btnLeft = document.getElementById(\"item-1\");\nvar btnMiddle = document.getElementById(\"item-2\");\nvar btnRight = document.getElementById(\"item-3\");\nbuttons.forEach(function (btn) {\n  return btn.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    sliders.forEach(function (slide) {\n      slide.classList.add(\"not-active\");\n\n      if (event.target.attributes[1].name == \"data-btnleft\") {\n        btnMiddle.classList.remove(\"active\");\n        btnRight.classList.remove(\"active\");\n        btnLeft.classList.add(\"active\");\n      } else if (event.target.attributes[1].name == \"data-btnmiddle\") {\n        btnLeft.classList.remove(\"active\");\n        btnRight.classList.remove(\"active\");\n        btnMiddle.classList.add(\"active\");\n      } else if (event.target.attributes[1].name == \"data-btnright\") {\n        btnMiddle.classList.remove(\"active\");\n        btnLeft.classList.remove(\"active\");\n        btnRight.classList.add(\"active\");\n      }\n    });\n  });\n});\nvar popupLinks = document.querySelectorAll(\".popup-link\");\nvar body = document.querySelector(\"body\");\nvar lockPadding = document.querySelectorAll(\".lock-padding\");\nvar unlock = true;\nvar timeout = 800;\n\nif (popupLinks.length > 0) {\n  var _loop = function _loop(index) {\n    var popupLink = popupLinks[index];\n    popupLink.addEventListener(\"click\", function (e) {\n      var popupName = popupLink.getAttribute(\"href\").replace(\"#\", \"\");\n      var currentPopup = document.getElementById(popupName);\n      popupOpen(currentPopup);\n      e.preventDefault();\n    });\n  };\n\n  for (var index = 0; index < popupLinks.length; index++) {\n    _loop(index);\n  }\n}\n\nvar popupCloseIcon = document.querySelectorAll(\".close-popup\");\n\nif (popupCloseIcon.length > 0) {\n  var _loop2 = function _loop2(_index) {\n    var el = popupCloseIcon[_index];\n    el.addEventListener(\"click\", function (e) {\n      popupClose(el.closest(\".popup\"));\n      e.preventDefault();\n    });\n  };\n\n  for (var _index = 0; _index < popupCloseIcon.length; _index++) {\n    _loop2(_index);\n  }\n}\n\nfunction popupOpen(curentPopup) {\n  if (curentPopup && unlock) {\n    var popupActive = document.querySelector(\".popup.open\");\n\n    if (popupActive) {\n      popupClose(popupActive, false);\n    } else {\n      bodyLock();\n    }\n\n    curentPopup.classList.add(\"open\");\n    curentPopup.addEventListener(\"click\", function (e) {\n      if (!e.target.closest(\".popup__content\")) {\n        popupClose(e.target.closest(\".popup\"));\n      }\n    });\n  }\n}\n\nfunction popupClose(popupActive) {\n  var doUnLock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n  if (unlock) {\n    popupActive.closest.remove(\"open\");\n\n    if (doUnLock) {\n      bodyUnLock();\n    }\n  }\n}\n\nfunction bodyLock() {\n  var lockPaddingValue = window.innerWidth - document.querySelector(\".wrapper\").offsetWidth + \"px\";\n\n  if (lockPadding.length > 0) {\n    for (var _index2 = 0; _index2 < lockPadding.length; _index2++) {\n      var el = lockPadding[_index2];\n      el.style.paddingRight = lockPaddingValue;\n    }\n  }\n\n  body.style.paddingRight = lockPaddingValue;\n  body.classList.add(\"lock\");\n  unlock = false;\n  setTimeout(function () {\n    unlock = true;\n  }, timeout);\n}\n\nfunction bodyUnLock() {\n  setTimeout(function () {\n    if (lockPadding.length > 0) {\n      for (var _index3 = 0; _index3 < lockPadding.length; _index3++) {\n        var el = lockPadding[_index3];\n        el.style.paddingRight = '0px';\n      }\n    }\n\n    body.style.paddingRight = '0px';\n    body.style.classList.remove(\"lock\");\n  }, timeout);\n  unlock = false;\n  setTimeout(function () {\n    unlock = true;\n  }, timeout);\n}\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });