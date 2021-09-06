/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function createElement(type,class_name, content){
  const element = document.createElement(type);
  element.className = class_name;

  element.innerHTML = content;

  return element;
}

function createImg(source){
  const elementing = document.createElement("img");
  elementing.src = source;

  return elementing;
}

function createContent(){
  const content = document.createElement("div");
  content.className = "body";

  content.appendChild(createImg("/src/cafe.jpg"));

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

  console.log(content)

  return content;
}
  
const body = document.body;
  
body.appendChild(createContent());
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZXN0YXVyYW50LVBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLGNsYXNzX25hbWUsIGNvbnRlbnQpe1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc19uYW1lO1xuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1nKHNvdXJjZSl7XG4gIGNvbnN0IGVsZW1lbnRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBlbGVtZW50aW5nLnNyYyA9IHNvdXJjZTtcblxuICByZXR1cm4gZWxlbWVudGluZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpe1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc05hbWUgPSBcImJvZHlcIjtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUltZyhcIi9zcmMvY2FmZS5qcGdcIikpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInBcIixcIlwiLCBcbiAgYOKAnEJpbmcgU2F04oCdIGZpcnN0IHN0YXJ0ZWQgaW4gQ2FudG9uIChHdWFuZ3pob3UpIGFyb3VuZCAxOTUwcyB0byAxOTYwcy4g4oCcQmluZyBTaGnigJ0gdXNlZCB0byBvbmx5IHNlbGwgaWNlLWNyZWFtLCBcbiAgY29mZmVlIGFuZCB0ZWEgYW5kIHBhc3RyeS4gSG9uZyBLb25nIOKAnEJpbmcgU2F04oCdIGNvdWxkIG9ubHkgbGVnYWxseSBvcGVyYXRlIGFzIOKAnHNuYWNrIGxpY2VuY2XigJ0uIFRoZXkgY2FuIG9ubHkgc2VsbCBkcmlua3MsIFxuICBzYW5kd2ljaGVzIGFuZCBwYXN0cmllcywgYW5kIHdlcmUgbm90IGFsbG93ZWQgdG8gb3BlcmF0ZSBhcyBhIGZ1bGwgY29va2luZyBraXRjaGVuLiBBcyB0aW1lIHBhc3QsIG1hbnkgb2YgdGhlIOKAnEJpbmcgU2F04oCdIHdlcmUgXG4gIGFibGUgdG8gb2J0YWluIGZ1bGwgcmVzdGF1cmFudCBsaWNlbmNlLCB3aGljaCB0aGVuIHRyYW5zZm9ybWVkIGludG8gbW9kZXJuIFRlYSBEaW5lciAoQ2hhIENoYWFuIFRlbmcpLmApKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJcIixcbiAgYEluIHRoZSAxOTUwcyB0byAxOTYwcywgdG8gbWVldCB0aGUgbmVlZHMgb2YgYmx1ZSBjb2xsYXIgd29ya2Vycywg4oCcQmluZyBTaGnigJ0gaW1pdGF0ZWQgV2VzdGVybiBTdGVhayBIb3VzZSBhbmQgc3RhcnRlZCBzZWxsaW5nIGxcbiAgb3ctcHJpY2VkIHN0ZWFrIGFuZCBzZXQgbWVhbHMuIE1vdmluZyBvbiB0byAxOTcwcyBhbmQgMTk4MHMsIHRoZSBlY29ub215IGJsb29tcywg4oCcQmluZyBTYXTigJ0gYmVjYW1lIGNvbW1vbiBhbW9uZyB0aGUgbWlkZGxlIGNsYXNzIFxuICBwZW9wbGUuIFRoZSBzcGVuZGluZyBhYmlsaXR5IGluY3JlYXNlZCwgYW5kIHRvIGNhdGVyIGZvciB0aGUgZGVtYW5kIG9mIHRoZSBwZW9wbGUsIOKAnEJpbmcgU2F04oCdIHN0YXJ0ZWQgZXhwYW5kaW5nIHRoZWlyIFxuICB2YXJpZXR5IG9mIGZvb2QsIHdoaWNoIGV2ZW50dWFsbHkgdHJhbnNmb3JtZWQgaW50byBNb2Rlcm4gVGVhIERpbmVyIChDaGEgQ2hhYW4gVGVuZylgKSk7XG5cbiAgY29uc29sZS5sb2coY29udGVudClcblxuICByZXR1cm4gY29udGVudDtcbn1cbiAgXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgXG5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRlbnQoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9