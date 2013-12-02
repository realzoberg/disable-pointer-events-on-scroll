// ==UserScript==
// @name disable-pointer-events-on-scroll
// @description 
// @author Ruslan Login
// @license MIT
// @version 1.0
// @include http://*
// @match http://*
// ==/UserScript==



(function (window, undefined) { 

var body = window.document.body,
    timer;

window.addEventListener('scroll', function() {
  clearTimeout(timer);
  if(!body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover')
  }
  
  timer = setTimeout(function(){
    body.classList.remove('disable-hover')
  },500);
}, false);

})(window);
