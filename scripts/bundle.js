!function e(t,n,i){function r(l,a){if(!n[l]){if(!t[l]){var s="function"==typeof require&&require;if(!a&&s)return s(l,!0);if(o)return o(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[l]={exports:{}};t[l][0].call(u.exports,function(e){var n=t[l][1][e];return r(n?n:e)},u,u.exports,e,t,n,i)}return n[l].exports}for(var o="function"==typeof require&&require,l=0;l<i.length;l++)r(i[l]);return r}({1:[function(e,t,n){function i(e){return!!a(e)}function r(e){var t=null!=e&&e.length;return"number"==typeof t&&t>=0&&t%1===0}function o(e){return Object(e)===e&&(r(e)||i(e))}function l(e){var t=a(e);if(t)return t.call(e)}function a(e){if(null!=e){var t=f&&e[f]||e["@@iterator"];if("function"==typeof t)return t}}function s(e,t,n){if(null!=e){if("function"==typeof e.forEach)return e.forEach(t,n);var i=0,o=l(e);if(o){for(var a;!(a=o.next()).done;)if(t.call(n,a.value,i++,e),i>9999999)throw new TypeError("Near-infinite iteration.")}else if(r(e))for(;i<e.length;i++)e.hasOwnProperty(i)&&t.call(n,e[i],i,e)}}function c(e){if(null!=e){var t=l(e);if(t)return t;if(r(e))return new u(e)}}function u(e){this._o=e,this._i=0}var f="function"==typeof Symbol&&Symbol.iterator,p=f||"@@iterator";n.$$iterator=p,n.isIterable=i,n.isArrayLike=r,n.isCollection=o,n.getIterator=l,n.getIteratorMethod=a,n.forEach=s,n.createIterator=c,u.prototype[p]=function(){return this},u.prototype.next=function(){return void 0===this._o||this._i>=this._o.length?(this._o=void 0,{value:void 0,done:!0}):{value:this._o[this._i++],done:!1}}},{}],2:[function(e,t,n){(function(e){!function(e,i){"function"==typeof define&&define.amd?define([],i(e)):"object"==typeof n?t.exports=i(e):e.smoothScroll=i(e)}("undefined"!=typeof e?e:this.window||this.global,function(e){"use strict";var t,n,i,r,o,l={},a="querySelector"in document&&"addEventListener"in e,s={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},c=function(){var e={},t=!1,n=0,i=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=c(!0,e[i],n[i]):e[i]=n[i])};i>n;n++){var o=arguments[n];r(o)}return e},u=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e,t){var n,i,r=t.charAt(0),o="classList"in document.documentElement;for("["===r&&(t=t.substr(1,t.length-2),n=t.split("="),n.length>1&&(i=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document&&1===e.nodeType;e=e.parentNode){if("."===r)if(o){if(e.classList.contains(t.substr(1)))return e}else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(e.className))return e;if("#"===r&&e.id===t.substr(1))return e;if("["===r&&e.hasAttribute(n[0])){if(!i)return e;if(e.getAttribute(n[0])===n[1])return e}if(e.tagName.toLowerCase()===t)return e}return null};l.escapeCharacters=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),i=n.length,r=-1,o="",l=n.charCodeAt(0);++r<i;){if(t=n.charCodeAt(r),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=t>=1&&31>=t||127==t||0===r&&t>=48&&57>=t||1===r&&t>=48&&57>=t&&45===l?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(r):"\\"+n.charAt(r)}return"#"+o};var p=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},d=function(e,t,n){var i=0;if(e.offsetParent)do i+=e.offsetTop,e=e.offsetParent;while(e);return i=Math.max(i-t-n,0),Math.min(i,m()-y())},y=function(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)},m=function(){return Math.max(e.document.body.scrollHeight,e.document.documentElement.scrollHeight,e.document.body.offsetHeight,e.document.documentElement.offsetHeight,e.document.body.clientHeight,e.document.documentElement.clientHeight)},h=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},v=function(t,n){e.history.pushState&&(n||"true"===n)&&"file:"!==e.location.protocol&&e.history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))},g=function(e){return null===e?0:u(e)+e.offsetTop};l.animateScroll=function(n,l,a){var u=h(l?l.getAttribute("data-options"):null),f=c(t||s,a||{},u),y="[object Number]"===Object.prototype.toString.call(n),b=y?null:"#"===n?e.document.documentElement:e.document.querySelector(n);if(y||b){var w=e.pageYOffset;i||(i=e.document.querySelector(f.selectorHeader)),r||(r=g(i));var T,O,E=y?n:d(b,r,parseInt(f.offset,10)),S=E-w,_=m(),L=0;y||v(n,f.updateURL);var M=function(t,i,r){var o=e.pageYOffset;(t==i||o==i||e.innerHeight+o>=_)&&(clearInterval(r),y||(b.focus(),document.activeElement.id!==b.id&&(b.setAttribute("tabindex","-1"),b.focus(),b.style.outline="none")),f.callback(n,l))},j=function(){L+=16,T=L/parseInt(f.speed,10),T=T>1?1:T,O=w+S*p(f.easing,T),e.scrollTo(0,Math.floor(O)),M(O,E,o)},k=function(){clearInterval(o),o=setInterval(j,16)};0===e.pageYOffset&&e.scrollTo(0,0),k()}};var b=function(e){if(0===e.button&&!e.metaKey&&!e.ctrlKey){var n=f(e.target,t.selector);if(n&&"a"===n.tagName.toLowerCase()){if(n.origin!==location.origin||n.pathname!==location.pathname)return;e.preventDefault();var i=l.escapeCharacters(n.hash);l.animateScroll(i,n,t)}}},w=function(e){n||(n=setTimeout(function(){n=null,r=g(i)},66))};return l.destroy=function(){t&&(e.document.removeEventListener("click",b,!1),e.removeEventListener("resize",w,!1),t=null,n=null,i=null,r=null,o=null)},l.init=function(n){a&&(l.destroy(),t=c(s,n||{}),i=e.document.querySelector(t.selectorHeader),r=g(i),e.document.addEventListener("click",b,!1),i&&e.addEventListener("resize",w,!1))},l})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var r=e("./google-map"),o=i(r),l=e("./smooth-scroll"),a=i(l);new o["default"],new a["default"]},{"./google-map":5,"./smooth-scroll":7}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.places={kolbuszowa:{position:{lat:50.246927,lng:21.7802773},title:"Biuro w Kolbuszowej"},rzeszow_graniczna:{position:{lat:50.018363,lng:22.0031903},title:"Biuro na Granicznej 4b LU-8"},rzeszow_hetmanska:{position:{lat:50.0156477,lng:21.9884377},title:"Biuro na Hetmańskiej 120"}},n.bp={small:480,medium:768,large:1024,full:1600}},{}],5:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=e("./map-styles"),a=i(l),s=e("./constants"),c=e("iterall"),u=e("smooth-scroll"),f=i(u),p=document.querySelector(".map"),d=function(){function e(){r(this,e),this.scrollListener=this.scrollListener.bind(this),this.center={lat:50.0171531,lng:21.997},this.loadScript()}return o(e,[{key:"initGoogleMap",value:function(){this.map=new google.maps.Map(p,{zoom:15,center:this.center,scrollwheel:!1,mapTypeControl:!1,streetViewControl:!1,styles:a["default"]}),this.initMarkers(),this.handleMapEvents(),this.setupPlaces()}},{key:"initMarkers",value:function(){var e=this,t={url:"assets/images/marker.png",scaledSize:new google.maps.Size(21,32)};Object.keys(s.places).forEach(function(n){new google.maps.Marker({position:s.places[n].position,title:s.places[n].title,map:e.map,icon:t})})}},{key:"handleMapEvents",value:function(){var e=this;google.maps.event.addDomListener(window,"resize",function(){e.map.setCenter(e.center)})}},{key:"setupPlaces",value:function(){var e=this,t=document.querySelectorAll(".js-places-trigger"),n=function(t){var n=t.getAttribute("data-places-id"),i=window.innerWidth<=s.bp.medium?100:200;e.center=s.places[n].position,e.map.setCenter(e.center),f["default"].animateScroll("#places-map",null,{offset:i,updateURL:!1})};(0,c.forEach)(t,function(t){t.addEventListener("click",n.bind(e,t),!1)})}},{key:"loadScript",value:function(){var e=this,t=document.querySelector(".places__list");this.mapTriggerOffsetTop=t.offsetTop,this.windowHeight=window.innerHeight,window.addEventListener("resize",function(){e.mapTriggerOffsetTop=t.offsetTop,e.windowHeight=window.innerHeight}),window.addEventListener("scroll",this.scrollListener)}},{key:"scrollListener",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;if(this.windowHeight+e>this.mapTriggerOffsetTop){window.removeEventListener("scroll",this.scrollListener),window.initMap=this.initGoogleMap.bind(this);var t=document.createElement("script");t.type="text/javascript",t.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBO-71BQKVYtvqPhnRlo3zZ05NUlp62sw4&callback=initMap",document.body.appendChild(t)}}}]),e}();n["default"]=d},{"./constants":4,"./map-styles":6,iterall:1,"smooth-scroll":2}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=[{featureType:"all",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#6195a0"}]},{featureType:"administrative.locality",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#ff304f"},{visibility:"on"}]},{featureType:"administrative.neighborhood",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#ff304f"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"},{visibility:"on"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#fdfdfd"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#93cfff"},{visibility:"on"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45},{weight:"1.26"},{visibility:"simplified"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#118df0"},{visibility:"simplified"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ececec"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#ff304f"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#eaf6f8"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#eaf6f8"}]}];n["default"]=i},{}],7:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=e("smooth-scroll"),l=i(o),a=function s(){r(this,s),l["default"].init({offset:30})};n["default"]=a},{"smooth-scroll":2}]},{},[3]);
//# sourceMappingURL=bundle.js.map
