/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/app */ \"./src/utils/app.js\");\n/* harmony import */ var _utils_logout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/logout */ \"./src/utils/logout.js\");\n//import { handleLogin } from \"./utils/handleLogin\";\r\n\r\n\r\n\r\n\r\n//handleLogin();\r\n\r\n// let clickLogin = document.getElementById('login');\r\n// if(clickLogin){\r\n//   clickLogin.addEventListener('click', handleLogin, false);\r\n \r\n// }\r\n\r\n(0,_utils_app__WEBPACK_IMPORTED_MODULE_0__.getItem)();\r\n\r\n\r\ndocument.getElementById('logout').addEventListener('click', _utils_logout__WEBPACK_IMPORTED_MODULE_1__.logout);\r\n// let clickLogout = document.getElementById('logout');\r\n// if(clickLogout){\r\n//   clickLogout.addEventListener('click', logout, false);\r\n \r\n// }\r\n \r\n\r\n\r\n  \r\n\r\n\r\n\n\n//# sourceURL=webpack://gitprobe5/./src/index.js?");

/***/ }),

/***/ "./src/utils/app.js":
/*!**************************!*\
  !*** ./src/utils/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getItem\": () => (/* binding */ getItem)\n/* harmony export */ });\nasync function getItem(){\r\n    const one = document.getElementById('image-dog');\r\n    const response = await fetch('https://dog.ceo/api/breeds/list/all');\r\n    const data = await response.json();\r\n      \r\n      //console.log(data);\r\n      for(const i in data.message){\r\n          const div = document.createElement('div');\r\n          const p = document.createElement('button');\r\n          \r\n          \r\n          p.addEventListener('click', async function()  {\r\n            document.getElementById('page-number').innerText = '1';\r\n            p.setAttribute('id', 'current');\r\n            \r\n            \r\n            \r\n          \r\n              \r\n              let j = 0;\r\n              if(document.getElementById('current')){\r\n                \r\n              const response = await fetch(`https://dog.ceo/api/breed/${i}/images`);\r\n              const data2 = await response.json();\r\n              const imageContainer = document.getElementById('images-container');\r\n              const imageOne = document.getElementById('image-breed');\r\n              let images = data2.message[j];\r\n               \r\n              //console.log(images);\r\n              let a = 1;\r\n              SetLocalStorage();\r\n               \r\n               \r\n               \r\n              \r\n                 \r\n                  \r\n                \r\n               document.getElementById('forward').addEventListener('click', () => {\r\n                 if(a > (a + 1)){\r\n                   a = 1;\r\n                  pageNumber.innerText = `${a}`;\r\n                   console.log(a.length);\r\n                 } else {\r\n                 a = a + 1;\r\n                 \r\n                 document.getElementById('breed-image').src = data2.message[a];\r\n                 \r\n                   \r\n                   const pageNumber = document.getElementById('page-number');\r\n                   pageNumber.innerText = `${a}`;\r\n                  \r\n                   \r\n                   \r\n                   SetLocalStorage();\r\n  \r\n                 }\r\n               })\r\n               \r\n               document.getElementById('backward').addEventListener('click', () => {\r\n                if(a < 1){\r\n                  \r\n                 document.getElementById('page-number').innerText = 1;\r\n               \r\n                } else {\r\n                  \r\n                a = a - 1;\r\n                document.getElementById('breed-image').src = data2.message[a];\r\n                  \r\n                  const pageNumber = document.getElementById('page-number');\r\n                 // console.log(a);\r\n                   pageNumber.innerText = `${a}`;\r\n                   SetLocalStorage();\r\n                }\r\n                \r\n              })\r\n              function SetLocalStorage(){\r\n              const breed = `${i}`;\r\n              const index = `${a}`;\r\n              localStorage.setItem(\"breed\", `${i}`);\r\n              localStorage.setItem(\"index\", `${a}`);\r\n              }  \r\n              \r\n                 document.getElementById('breed-image').src = `${images}`;\r\n                \r\n              }\r\n            \r\n          })\r\n          p.style.background = 'white';\r\n          p.style.border = \"0px solid white\";\r\n          \r\n          const breeds = document.getElementById('breeds');\r\n          //console.log(p);\r\n       \r\n          div.appendChild(p);\r\n          breeds.appendChild(div);\r\n          p.innerText = i;\r\n      }\r\n  }\r\n  getItem();\n\n//# sourceURL=webpack://gitprobe5/./src/utils/app.js?");

/***/ }),

/***/ "./src/utils/handleLogin.js":
/*!**********************************!*\
  !*** ./src/utils/handleLogin.js ***!
  \**********************************/
/***/ (() => {

eval("document.getElementById('login').addEventListener('click', function handleLogin() {\r\n    const inputName = document.getElementById(\"name\");\r\n    const inputPassword = document.getElementById(\"password\");\r\n    const PASSWORD_CHECK = \"123\";\r\n    const name = inputName.value;\r\n    const password = inputPassword.value;\r\n\r\n  if (name && password === PASSWORD_CHECK) {\r\n    localStorage.setItem(\"name\", name);\r\n    localStorage.setItem(\"password\", password);\r\n    window.location = \"/\";\r\n  }\r\n  \r\n \r\n}\r\n);\r\n\n\n//# sourceURL=webpack://gitprobe5/./src/utils/handleLogin.js?");

/***/ }),

/***/ "./src/utils/logout.js":
/*!*****************************!*\
  !*** ./src/utils/logout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logout\": () => (/* binding */ logout)\n/* harmony export */ });\nfunction logout() {\r\n    localStorage.removeItem(\"name\");\r\n    localStorage.removeItem(\"password\");\r\n    localStorage.removeItem(\"breed\");\r\n    localStorage.removeItem(\"index\");\r\n    window.location = \"/login.html\";\r\n    \r\n    }\r\n    \r\n\r\n        \r\n    \r\n  \n\n//# sourceURL=webpack://gitprobe5/./src/utils/logout.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/utils/handleLogin.js");
/******/ 	
/******/ })()
;