!function e(t,n,r){function o(l,a){if(!n[l]){if(!t[l]){var s="function"==typeof require&&require;if(!a&&s)return s(l,!0);if(i)return i(l,!0);var u=new Error("Cannot find module '"+l+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[l]={exports:{}};t[l][0].call(c.exports,function(e){var n=t[l][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[l].exports}for(var i="function"==typeof require&&require,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(e,t,n){(function(e){!function(e,r){"function"==typeof define&&define.amd?define([],r(e)):"object"==typeof n?t.exports=r(e):e.smoothScroll=r(e)}("undefined"!=typeof e?e:this.window||this.global,function(e){"use strict";var t,n,r,o,i,l={},a="querySelector"in document&&"addEventListener"in e,s={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},u=function(){var e={},t=!1,n=0,r=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var o=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=u(!0,e[r],n[r]):e[r]=n[r])};r>n;n++){var i=arguments[n];o(i)}return e},c=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e,t){var n,r,o=t.charAt(0),i="classList"in document.documentElement;for("["===o&&(t=t.substr(1,t.length-2),n=t.split("="),n.length>1&&(r=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document&&1===e.nodeType;e=e.parentNode){if("."===o)if(i){if(e.classList.contains(t.substr(1)))return e}else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(e.className))return e;if("#"===o&&e.id===t.substr(1))return e;if("["===o&&e.hasAttribute(n[0])){if(!r)return e;if(e.getAttribute(n[0])===n[1])return e}if(e.tagName.toLowerCase()===t)return e}return null};l.escapeCharacters=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),r=n.length,o=-1,i="",l=n.charCodeAt(0);++o<r;){if(t=n.charCodeAt(o),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=t>=1&&31>=t||127==t||0===o&&t>=48&&57>=t||1===o&&t>=48&&57>=t&&45===l?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(o):"\\"+n.charAt(o)}return"#"+i};var p=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},y=function(e,t,n){var r=0;if(e.offsetParent)do r+=e.offsetTop,e=e.offsetParent;while(e);return r=Math.max(r-t-n,0),Math.min(r,m()-d())},d=function(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)},m=function(){return Math.max(e.document.body.scrollHeight,e.document.documentElement.scrollHeight,e.document.body.offsetHeight,e.document.documentElement.offsetHeight,e.document.body.clientHeight,e.document.documentElement.clientHeight)},h=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},g=function(t,n){e.history.pushState&&(n||"true"===n)&&"file:"!==e.location.protocol&&e.history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))},v=function(e){return null===e?0:c(e)+e.offsetTop};l.animateScroll=function(n,l,a){var c=h(l?l.getAttribute("data-options"):null),f=u(t||s,a||{},c),d="[object Number]"===Object.prototype.toString.call(n),b=d?null:"#"===n?e.document.documentElement:e.document.querySelector(n);if(d||b){var T=e.pageYOffset;r||(r=e.document.querySelector(f.selectorHeader)),o||(o=v(r));var w,O,M=d?n:y(b,o,parseInt(f.offset,10)),E=M-T,j=m(),k=0;d||g(n,f.updateURL);var C=function(t,r,o){var i=e.pageYOffset;(t==r||i==r||e.innerHeight+i>=j)&&(clearInterval(o),d||(b.focus(),document.activeElement.id!==b.id&&(b.setAttribute("tabindex","-1"),b.focus(),b.style.outline="none")),f.callback(n,l))},S=function(){k+=16,w=k/parseInt(f.speed,10),w=w>1?1:w,O=T+E*p(f.easing,w),e.scrollTo(0,Math.floor(O)),C(O,M,i)},x=function(){clearInterval(i),i=setInterval(S,16)};0===e.pageYOffset&&e.scrollTo(0,0),x()}};var b=function(e){if(0===e.button&&!e.metaKey&&!e.ctrlKey){var n=f(e.target,t.selector);if(n&&"a"===n.tagName.toLowerCase()){if(n.origin!==location.origin||n.pathname!==location.pathname)return;e.preventDefault();var r=l.escapeCharacters(n.hash);l.animateScroll(r,n,t)}}},T=function(e){n||(n=setTimeout(function(){n=null,o=v(r)},66))};return l.destroy=function(){t&&(e.document.removeEventListener("click",b,!1),e.removeEventListener("resize",T,!1),t=null,n=null,r=null,o=null,i=null)},l.init=function(n){a&&(l.destroy(),t=u(s,n||{}),r=e.document.querySelector(t.selectorHeader),o=v(r),e.document.addEventListener("click",b,!1),r&&e.addEventListener("resize",T,!1))},l})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=e("./google-map"),i=r(o),l=e("./smooth-scroll"),a=r(l);new i["default"],new a["default"]},{"./google-map":3,"./smooth-scroll":5}],3:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("./map-styles"),a=r(l),s=document.querySelector(".map"),u=function(){function e(){o(this,e),this.center={lat:50.0171531,lng:21.997},this.exportMapCallback()}return i(e,[{key:"initGoogleMap",value:function(){this.map=new google.maps.Map(s,{zoom:15,center:this.center,scrollwheel:!1,mapTypeControl:!1,styles:a["default"]}),this.initMarkers(),this.handleMapEvents()}},{key:"initMarkers",value:function(){new google.maps.Marker({position:{lat:50.0156477,lng:21.9884377},title:"Biuro na Hetmańskiej 120",map:this.map}),new google.maps.Marker({position:{lat:50.018363,lng:22.0031903},title:"Biuro na Granicznej 4b LU-8",map:this.map}),new google.maps.Marker({position:{lat:50.246927,lng:21.7802773},title:"Biuro na Granicznej 4b LU-8",map:this.map})}},{key:"handleMapEvents",value:function(){var e=this;google.maps.event.addDomListener(window,"resize",function(){e.map.setCenter(e.center)})}},{key:"exportMapCallback",value:function(){window.initMap=this.initGoogleMap.bind(this)}}]),e}();n["default"]=u},{"./map-styles":4}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#6195a0"}]},{featureType:"administrative.locality",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#ff304f"},{visibility:"on"}]},{featureType:"administrative.neighborhood",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#ff304f"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"},{visibility:"on"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#93cfff"},{visibility:"on"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45},{weight:"1.26"},{visibility:"simplified"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#118df0"},{visibility:"simplified"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ececec"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#ff304f"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#eaf6f8"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#eaf6f8"}]}];n["default"]=r},{}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=e("smooth-scroll"),l=r(i),a=function s(){o(this,s),l["default"].init()};n["default"]=a},{"smooth-scroll":1}]},{},[2]);
//# sourceMappingURL=bundle.js.map
