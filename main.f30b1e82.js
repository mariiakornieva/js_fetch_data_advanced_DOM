parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n){return o(n)||r(n)||e(n)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(n,t){if(n){if("string"==typeof n)return c(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(n,t):void 0}}function r(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function o(n){if(Array.isArray(n))return c(n)}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function i(n,t,e,r,o,c,i){try{var u=n[c](i),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,o)}function u(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var c=n.apply(t,e);function u(n){i(c,r,o,u,a,"next",n)}function a(n){i(c,r,o,u,a,"throw",n)}u(void 0)})}}var a="https://mate-academy.github.io/phone-catalogue-static/api";function s(n){return fetch("".concat(a).concat(n)).catch(function(n){return alert(n)})}function f(n){return Promise.race(n.map(function(n){return s("/phones/".concat(n,".json"))})).then(function(n){return n.json()})}function l(n){return Promise.allSettled(n.map(function(n){return s("/phones/".concat(n,".json"))})).then(function(n){return Promise.all(n.filter(function(n){return"fulfilled"===n.status}).map(function(n){return n.value.json()}))})}function p(n,t){return d.apply(this,arguments)}function d(){return(d=u(regeneratorRuntime.mark(function t(e,r){var o,c,i,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=n(e),c=[],i=regeneratorRuntime.mark(function n(t){var e,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f(o);case 2:e=n.sent,r=o.findIndex(function(n){return n===e.id}),o.splice(r,1),c.push(e);case 6:case"end":return n.stop()}},n)}),u=0;case 4:if(!(u<r)){t.next=9;break}return t.delegateYield(i(u),"t0",6);case 6:u++,t.next=4;break;case 9:return t.abrupt("return",Promise.all(c));case 10:case"end":return t.stop()}},t)}))).apply(this,arguments)}y().then(f).then(function(n){return m("first-received",n)}).catch(function(n){return v("First received failed",n)}),y().then(l).then(function(n){return m("all-successful",n)}).catch(function(n){return v("All successful failed",n)}),y().then(function(n){return p(n,3)}).then(function(n){return m("fastest",n)}).catch(function(n){return v("N fastest failed",n)});var h=function(n){return Array.isArray(n)?n.map(function(n){return"<li>".concat(n.id.toUpperCase()," - ").concat(n.name,"</li>")}).join(""):"<li>".concat(n.id.toUpperCase()," - ").concat(n.name,"</li>")};function m(n,t){document.body.insertAdjacentHTML("beforeend","\n    <div class=".concat(n,">\n      <h3>\n      ").concat(n.split("-").map(function(n){return n.slice(0,1).toUpperCase()+n.slice(1)}).join(" "),"\n      </h3>\n      <ul>\n        ").concat(h(t),"\n      </ul>\n      </div>\n  "))}function v(n,t){document.body.insertAdjacentHTML("beforeend",'\n    <div class="error">\n      <h3>'.concat(n,"</h3>\n      <p>").concat(t,"</p>\n    </div>\n  "))}function y(){return s("/phones.json").then(function(n){return n.json()}).then(function(n){return n.map(function(n){return n.id})})}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.f30b1e82.js.map