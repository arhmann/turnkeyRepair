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
eval("\n\nvar buttons = document.querySelectorAll(\".nav-items-btn\");\nvar sliders = document.querySelectorAll(\".slide\");\nvar btnLeft = document.getElementById(\"item-1\");\nvar btnMiddle = document.getElementById(\"item-2\");\nvar btnRight = document.getElementById(\"item-3\");\nbuttons.forEach(function (btn) {\n  return btn.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    sliders.forEach(function (slide) {\n      slide.classList.add(\"not-active\");\n\n      if (event.target.attributes[1].name == \"data-btnleft\") {\n        btnMiddle.classList.remove(\"active\");\n        btnRight.classList.remove(\"active\");\n        btnLeft.classList.add(\"active\");\n      } else if (event.target.attributes[1].name == \"data-btnmiddle\") {\n        btnLeft.classList.remove(\"active\");\n        btnRight.classList.remove(\"active\");\n        btnMiddle.classList.add(\"active\");\n      } else if (event.target.attributes[1].name == \"data-btnright\") {\n        btnMiddle.classList.remove(\"active\");\n        btnLeft.classList.remove(\"active\");\n        btnRight.classList.add(\"active\");\n      }\n    });\n  });\n});\nvar btns = document.querySelectorAll('.btn');\nvar btnClose = document.querySelector('.popup__close');\nvar popup = document.querySelector('.popup');\nvar popupBody = document.querySelector('.popup__body');\nvar xhr = new XMLHttpRequest();\nbtns.forEach(function (btn) {\n  return btn.addEventListener('click', function (e) {\n    popup.style.display = \"block\";\n    popupBody.style.opacity = \"1\";\n    setAJAX();\n  });\n});\nbtnClose.addEventListener('click', function (e) {\n  popup.style.display = \"none\";\n});\nwindow.addEventListener('click', function (e) {\n  console.log(e.target);\n\n  if (e.target === popupBody) {\n    popup.style.display = \"none\";\n    popupBody.style.opacity = 0;\n    setAJAX();\n  }\n});\n\nvar setAJAX = function setAJAX() {\n  xhr.open(\"GET\", \"https://reqres.in/api/products/3\", true);\n  xhr.send();\n\n  xhr.onreadystatechange = function () {\n    if (this.readyState === 4 && this.status === 200) {\n      this.responseText;\n    }\n  };\n};\n/*\r\nconst popupLinks = document.querySelectorAll(\".popup-link\");\r\nconst body = document.querySelector(\"body\");\r\nconst lockPadding = document.querySelectorAll(\".lock-padding\");\r\n\r\nlet unlock = true;\r\nconst timeout = 800;\r\n\r\nif (popupLinks.length > 0) {\r\n  for (let index = 0; index < popupLinks.length; index++) {\r\n    const popupLink = popupLinks[index];\r\n\r\n    popupLink.addEventListener(\"click\", function (e) {\r\n      const popupName = popupLink.getAttribute(\"href\").replace(\"#\", \"\");\r\n      const currentPopup = document.getElementById(popupName);\r\n      popupOpen(currentPopup);\r\n      e.preventDefault();\r\n    });\r\n  }\r\n}\r\n\r\nconst popupCloseIcon = document.querySelectorAll(\".close-popup\");\r\nif (popupCloseIcon.length > 0) {\r\n  for (let index = 0; index < popupCloseIcon.length; index++) {\r\n    const el = popupCloseIcon[index];\r\n    el.addEventListener(\"click\", function (e) {\r\n      popupClose(el.closest(\".popup\"));\r\n      e.preventDefault();\r\n    });\r\n  }\r\n}\r\n\r\nfunction popupOpen(curentPopup) {\r\n  if (curentPopup && unlock) {\r\n    const popupActive = document.querySelector(\".popup.open\");\r\n    if (popupActive) {\r\n      popupClose(popupActive, false);\r\n    } else {\r\n      bodyLock();\r\n    }\r\n    curentPopup.classList.add(\"open\");\r\n    curentPopup.addEventListener(\"click\", function (e) {\r\n      if (!e.target.closest(\".popup__content\")) {\r\n        popupClose(e.target.closest(\".popup\"));\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\nfunction popupClose (popupActive, doUnLock = true) {\r\n  if(unlock) {\r\n    popupActive.closest.remove(\"open\");\r\n    if(doUnLock) {\r\n      bodyUnLock();\r\n    }\r\n  }\r\n}\r\n\r\nfunction bodyLock() {\r\n  const lockPaddingValue =\r\n    window.innerWidth - document.querySelector(\".wrapper\").offsetWidth + \"px\";\r\n\r\n  if (lockPadding.length > 0) {\r\n    for (let index = 0; index < lockPadding.length; index++) {\r\n      const el = lockPadding[index];\r\n      el.style.paddingRight = lockPaddingValue;\r\n    }\r\n  }\r\n\r\n  body.style.paddingRight = lockPaddingValue;\r\n  body.classList.add(\"lock\");\r\n\r\n  unlock = false;\r\n  setTimeout(function () {\r\n    unlock = true;\r\n  }, timeout);\r\n}\r\n\r\nfunction bodyUnLock () {\r\n\r\n  setTimeout(function(){\r\n    if (lockPadding.length > 0) {\r\n    for (let index = 0; index < lockPadding.length; index++){\r\n      const el = lockPadding[index];\r\n      el.style.paddingRight = '0px';\r\n    }\r\n  }\r\n\r\n    body.style.paddingRight = '0px';\r\n    body.style.classList.remove(\"lock\");\r\n    \r\n  }, timeout);\r\n\r\n  unlock = false;\r\n  setTimeout(function() {\r\n    unlock = true;\r\n  }, timeout);\r\n}\r\n*/\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });