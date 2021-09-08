/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
//import img from './cafe.jpg';

function createElement(type,class_name, content){
  const element = document.createElement(type);
  element.className = class_name;

  element.innerHTML = content;

  return element;
}

function createImg(source){
  const elementing = new Image()
  elementing.src = img;

  return elementing;
}

function createHome(){
  const content = document.createElement("div");
  content.id = "body";

  content.appendChild(createImg("/src/img/cafe.jpg"));

  content.appendChild(createElement("p","", 
  `“Bing Sat” first started in Canton (Guangzhou) around 1950s to 1960s. “Bing Shi” used to only sell ice-cream, 
  coffee and tea and pastry. Hong Kong “Bing Sat” could only legally operate as “snack licence”. They can only sell drinks, 
  sandwiches and pastries, and were not allowed to operate as a full cooking kitchen. As time past, many of the “Bing Sat” were 
  able to obtain full restaurant licence, which then transformed into modern Tea Diner (Cha Chaan Teng).`));

  content.appendChild(createElement("p","",
  `In the 1950s to 1960s, to meet the needs of blue collar workers, “Bing Shi” imitated Western Steak House and started selling l
  ow-priced steak and set meals. Moving on to 1970s and 1980s, the economy blooms, “Bing Sat” became common among the middle class 
  people. The spending ability increased, and to cater for the demand of the people, “Bing Sat” started expanding their 
  variety of food, which eventually transformed into Modern Tea Diner (Cha Chaan Teng)`));

  console.log(1234);

  return content;
}
  




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/main.js");


const content = document.getElementById("body");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
    button.addEventListener('click', event => {
        changeTab(button);
    })
})

function changeTab(element){
    createTab(element);
}

function createTab(tab){
    content.innerHTML = "";
    const element = _main_js__WEBPACK_IMPORTED_MODULE_0__["default"]
    content.appendChild(element);
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ3hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsZ0RBQVU7QUFDOUI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1Jlc3RhdXJhbnQtUGFnZS8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQtUGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9SZXN0YXVyYW50LVBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1Jlc3RhdXJhbnQtUGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1Jlc3RhdXJhbnQtUGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1Jlc3RhdXJhbnQtUGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBpbWcgZnJvbSAnLi9jYWZlLmpwZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSxjbGFzc19uYW1lLCBjb250ZW50KXtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NfbmFtZTtcblxuICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUltZyhzb3VyY2Upe1xuICBjb25zdCBlbGVtZW50aW5nID0gbmV3IEltYWdlKClcbiAgZWxlbWVudGluZy5zcmMgPSBpbWc7XG5cbiAgcmV0dXJuIGVsZW1lbnRpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuaWQgPSBcImJvZHlcIjtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUltZyhcIi9zcmMvaW1nL2NhZmUuanBnXCIpKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJcIiwgXG4gIGDigJxCaW5nIFNhdOKAnSBmaXJzdCBzdGFydGVkIGluIENhbnRvbiAoR3Vhbmd6aG91KSBhcm91bmQgMTk1MHMgdG8gMTk2MHMuIOKAnEJpbmcgU2hp4oCdIHVzZWQgdG8gb25seSBzZWxsIGljZS1jcmVhbSwgXG4gIGNvZmZlZSBhbmQgdGVhIGFuZCBwYXN0cnkuIEhvbmcgS29uZyDigJxCaW5nIFNhdOKAnSBjb3VsZCBvbmx5IGxlZ2FsbHkgb3BlcmF0ZSBhcyDigJxzbmFjayBsaWNlbmNl4oCdLiBUaGV5IGNhbiBvbmx5IHNlbGwgZHJpbmtzLCBcbiAgc2FuZHdpY2hlcyBhbmQgcGFzdHJpZXMsIGFuZCB3ZXJlIG5vdCBhbGxvd2VkIHRvIG9wZXJhdGUgYXMgYSBmdWxsIGNvb2tpbmcga2l0Y2hlbi4gQXMgdGltZSBwYXN0LCBtYW55IG9mIHRoZSDigJxCaW5nIFNhdOKAnSB3ZXJlIFxuICBhYmxlIHRvIG9idGFpbiBmdWxsIHJlc3RhdXJhbnQgbGljZW5jZSwgd2hpY2ggdGhlbiB0cmFuc2Zvcm1lZCBpbnRvIG1vZGVybiBUZWEgRGluZXIgKENoYSBDaGFhbiBUZW5nKS5gKSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwicFwiLFwiXCIsXG4gIGBJbiB0aGUgMTk1MHMgdG8gMTk2MHMsIHRvIG1lZXQgdGhlIG5lZWRzIG9mIGJsdWUgY29sbGFyIHdvcmtlcnMsIOKAnEJpbmcgU2hp4oCdIGltaXRhdGVkIFdlc3Rlcm4gU3RlYWsgSG91c2UgYW5kIHN0YXJ0ZWQgc2VsbGluZyBsXG4gIG93LXByaWNlZCBzdGVhayBhbmQgc2V0IG1lYWxzLiBNb3Zpbmcgb24gdG8gMTk3MHMgYW5kIDE5ODBzLCB0aGUgZWNvbm9teSBibG9vbXMsIOKAnEJpbmcgU2F04oCdIGJlY2FtZSBjb21tb24gYW1vbmcgdGhlIG1pZGRsZSBjbGFzcyBcbiAgcGVvcGxlLiBUaGUgc3BlbmRpbmcgYWJpbGl0eSBpbmNyZWFzZWQsIGFuZCB0byBjYXRlciBmb3IgdGhlIGRlbWFuZCBvZiB0aGUgcGVvcGxlLCDigJxCaW5nIFNhdOKAnSBzdGFydGVkIGV4cGFuZGluZyB0aGVpciBcbiAgdmFyaWV0eSBvZiBmb29kLCB3aGljaCBldmVudHVhbGx5IHRyYW5zZm9ybWVkIGludG8gTW9kZXJuIFRlYSBEaW5lciAoQ2hhIENoYWFuIFRlbmcpYCkpO1xuXG4gIGNvbnNvbGUubG9nKDEyMzQpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuICBcblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL21haW4uanNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+e1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgY2hhbmdlVGFiKGJ1dHRvbik7XG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIGNoYW5nZVRhYihlbGVtZW50KXtcbiAgICBjcmVhdGVUYWIoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYih0YWIpe1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlSG9tZVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==