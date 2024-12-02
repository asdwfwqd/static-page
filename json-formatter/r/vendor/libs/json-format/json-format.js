// drag.js
; (function ($, window, document, undefined) {
	//定义的构造函数
	var Drag = function (ele, opt) {
		this.$ele = ele,
			this.x = 0,
			this.y = 0,
			this.min = 0,
			this.max = 0,
			this.boxWidth = 0,
			this.boxHeight = 0,
			this.defaults = {
				parent: 'parent',
				randomPosition: true,
				direction: 'all',
				handler: false,
				dragStart: function (x, y) { },
				dragEnd: function (x, y) { },
				dragMove: function (x, y) { }
			},
			this.options = $.extend({}, this.defaults, opt)
	}
	//定义方法
	Drag.prototype = {
		initSize: function () {
			var parent = this.options.parent;
			var element = this.$ele;
			if (parent == 'parent') {
				parent = element.parent();
			} else {
				parent = element.parents(parent);
			}
			this.boxWidth = parent.outerWidth();
			this.boxHeight = parent.outerHeight();
		},
		run: function () {
			var $this = this;
			var element = this.$ele;
			var randomPosition = this.options.randomPosition; //位置
			var direction = this.options.direction; //方向
			var handler = this.options.handler;
			var parent = this.options.parent;
			var isDown = false;//记录鼠标是否按下
			var fun = this.options;//使用外部函数
			var X = 0,
				Y = 0,
				moveX,
				moveY;
			// 防止重叠
			element.find('*').not('img').mousedown(function (e) {
				e.stopPropagation();
			});
			//初始化验证
			if (parent == 'parent') {
				parent = element.parent();
			} else {
				parent = element.parents(parent);
			}
			if (!handler) {
				handler = element;
			} else {
				handler = element.find(handler);
			}
			//初始化
			parent.css({ position: 'relative' });
			element.css({ position: 'absolute' });
			//子节点和元素大小初始化
			var sonWidth = 0, sonHeight = 0;
			initSize();
			if (randomPosition) { randomPlace(); }
			$(window).resize(function () {
				initSize();
				if (randomPosition) { randomPlace(); }
			});
			//子节点和元素大小初始化函数
			function initSize() {
				$this.boxWidth = parent.outerWidth();
				$this.boxHeight = parent.outerHeight();
				sonWidth = element.outerWidth();
				sonHeight = element.outerHeight();
			}
			//位置随机函数
			function randomPlace() {
				if (randomPosition) {
					var randX = parseInt(Math.random() * ($this.boxWidth - sonWidth));
					var randY = parseInt(Math.random() * ($this.boxHeight - sonHeight));
					if (direction.toLowerCase() == 'x') {
						element.css({ left: randX });
					} else if (direction.toLowerCase() == 'y') {
						element.css({ top: randY });
					} else {
						element.css({ left: randX, top: randY });
					}
				}
			}
			handler.mousedown(function (e) {
				isDown = true;
				X = e.pageX;
				Y = e.pageY;
				$this.x = element.position().left;
				$this.y = element.position().top;
				element.addClass('on');
				fun.dragStart(parseInt(element.css('left')), parseInt(element.css('top')));
				return false;
			});
			$(document).mouseup(function (e) {
				if (!isDown) return;
				fun.dragEnd(parseInt(element.css('left')), parseInt(element.css('top')));
				element.removeClass('on');
				isDown = false;
			});
			$(document).mousemove(function (e) {
				if (!isDown) { return }
				moveX = $this.x + e.pageX - X;
				moveY = $this.y + e.pageY - Y;
				function thisXMove() {//x坐标移动
					if (isDown == true) {
						element.css({ left: moveX });
					} else {
						return;
					}
					if (moveX < $this.options.min) {
						element.css({ left: $this.options.min });
					}
					if (moveX > ($this.boxWidth - sonWidth - $this.options.max)) {
						element.css({ left: $this.boxWidth - sonWidth - $this.options.max });
					}
					return moveX;
				}
				function thisYMove() {//y坐标移动
					if (isDown == true) {
						element.css({ top: moveY });
					} else {
						return;
					}
					if (moveY < 0) {
						element.css({ top: 0 });
					}
					if (moveY > ($this.boxHeight - sonHeight)) {
						element.css({ top: $this.boxHeight - sonHeight });
					}
					return moveY;
				}
				function thisAllMove() { //全部移动
					if (isDown == true) {
						element.css({ left: moveX, top: moveY });
					} else {
						return;
					}
					if (moveX < this.options.min) {
						element.css({ left: $this.options.min });
					}
					if (moveX > ($this.boxWidth - sonWidth - $this.options.max)) {
						element.css({ left: $this.boxWidth - sonWidth - $this.options.max });
					}
					if (moveY < 0) {
						element.css({ top: 0 });
					}
					if (moveY > ($this.boxHeight - sonHeight)) {
						element.css({ top: $this.boxHeight - sonHeight });
					}
				}
				if (isDown) {
					fun.dragMove(parseInt(element.css('left')), parseInt(element.css('top')));
				} else {

				}
				if (direction.toLowerCase() == "x") {
					thisXMove();
				} else if (direction.toLowerCase() == "y") {
					thisYMove();
				} else {
					thisAllMove();
				}
			});
		}
	}

	//组合
	$.fn.myDrag = function (options) {
		//创建实体
		var drag = new Drag(this, options);
		//调用方法
		drag.run();
		return drag;
	}
})(jQuery, window, document);

// autosize.js
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
	return /******/ (function() { // webpackBootstrap
		/******/ 	var __webpack_modules__ = ({

			/***/ "./node_modules/autosize/dist/autosize.js":
			/*!************************************************!*\
              !*** ./node_modules/autosize/dist/autosize.js ***!
              \************************************************/
			/***/ (function(module) {

				eval("(function (global, factory) {\n\t true ? module.exports = factory() :\n\t0;\n}(this, (function () {\n\tvar assignedElements = new Map();\n\n\tfunction assign(ta) {\n\t  if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || assignedElements.has(ta)) return;\n\t  var previousHeight = null;\n\n\t  function cacheScrollTops(el) {\n\t    var arr = [];\n\n\t    while (el && el.parentNode && el.parentNode instanceof Element) {\n\t      if (el.parentNode.scrollTop) {\n\t        arr.push([el.parentNode, el.parentNode.scrollTop]);\n\t      }\n\n\t      el = el.parentNode;\n\t    }\n\n\t    return function () {\n\t      return arr.forEach(function (_ref) {\n\t        var node = _ref[0],\n\t            scrollTop = _ref[1];\n\t        node.style.scrollBehavior = 'auto';\n\t        node.scrollTop = scrollTop;\n\t        node.style.scrollBehavior = null;\n\t      });\n\t    };\n\t  }\n\n\t  var computed = window.getComputedStyle(ta);\n\n\t  function setHeight(_ref2) {\n\t    var _ref2$restoreTextAlig = _ref2.restoreTextAlign,\n\t        restoreTextAlign = _ref2$restoreTextAlig === void 0 ? null : _ref2$restoreTextAlig,\n\t        _ref2$testForHeightRe = _ref2.testForHeightReduction,\n\t        testForHeightReduction = _ref2$testForHeightRe === void 0 ? true : _ref2$testForHeightRe;\n\t    var initialOverflowY = computed.overflowY;\n\n\t    if (ta.scrollHeight === 0) {\n\t      // If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.\n\t      return;\n\t    } // disallow vertical resizing\n\n\n\t    if (computed.resize === 'vertical') {\n\t      ta.style.resize = 'none';\n\t    } else if (computed.resize === 'both') {\n\t      ta.style.resize = 'horizontal';\n\t    }\n\n\t    var restoreScrollTops; // remove inline height style to accurately measure situations where the textarea should shrink\n\t    // however, skip this step if the new value appends to the previous value, as textarea height should only have grown\n\n\t    if (testForHeightReduction) {\n\t      // ensure the scrollTop values of parent elements are not modified as a consequence of shrinking the textarea height\n\t      restoreScrollTops = cacheScrollTops(ta);\n\t      ta.style.height = '';\n\t    }\n\n\t    var newHeight;\n\n\t    if (computed.boxSizing === 'content-box') {\n\t      newHeight = ta.scrollHeight - (parseFloat(computed.paddingTop) + parseFloat(computed.paddingBottom));\n\t    } else {\n\t      newHeight = ta.scrollHeight + parseFloat(computed.borderTopWidth) + parseFloat(computed.borderBottomWidth);\n\t    }\n\n\t    if (computed.maxHeight !== 'none' && newHeight > parseFloat(computed.maxHeight)) {\n\t      if (computed.overflowY === 'hidden') {\n\t        ta.style.overflow = 'scroll';\n\t      }\n\n\t      newHeight = parseFloat(computed.maxHeight);\n\t    } else if (computed.overflowY !== 'hidden') {\n\t      ta.style.overflow = 'hidden';\n\t    }\n\n\t    ta.style.height = newHeight + 'px';\n\n\t    if (restoreTextAlign) {\n\t      ta.style.textAlign = restoreTextAlign;\n\t    }\n\n\t    if (restoreScrollTops) {\n\t      restoreScrollTops();\n\t    }\n\n\t    if (previousHeight !== newHeight) {\n\t      ta.dispatchEvent(new Event('autosize:resized', {\n\t        bubbles: true\n\t      }));\n\t      previousHeight = newHeight;\n\t    }\n\n\t    if (initialOverflowY !== computed.overflow && !restoreTextAlign) {\n\t      var textAlign = computed.textAlign;\n\n\t      if (computed.overflow === 'hidden') {\n\t        // Webkit fails to reflow text after overflow is hidden,\n\t        // even if hiding overflow would allow text to fit more compactly.\n\t        // The following is intended to force the necessary text reflow.\n\t        ta.style.textAlign = textAlign === 'start' ? 'end' : 'start';\n\t      }\n\n\t      setHeight({\n\t        restoreTextAlign: textAlign,\n\t        testForHeightReduction: true\n\t      });\n\t    }\n\t  }\n\n\t  function fullSetHeight() {\n\t    setHeight({\n\t      testForHeightReduction: true,\n\t      restoreTextAlign: null\n\t    });\n\t  }\n\n\t  var handleInput = function () {\n\t    var previousValue = ta.value;\n\t    return function () {\n\t      setHeight({\n\t        // if previousValue is '', check for height shrinkage because the placeholder may be taking up space instead\n\t        // if new value is merely appending to previous value, skip checking for height deduction\n\t        testForHeightReduction: previousValue === '' || !ta.value.startsWith(previousValue),\n\t        restoreTextAlign: null\n\t      });\n\t      previousValue = ta.value;\n\t    };\n\t  }();\n\n\t  var destroy = function (style) {\n\t    ta.removeEventListener('autosize:destroy', destroy);\n\t    ta.removeEventListener('autosize:update', fullSetHeight);\n\t    ta.removeEventListener('input', handleInput);\n\t    window.removeEventListener('resize', fullSetHeight); // future todo: consider replacing with ResizeObserver\n\n\t    Object.keys(style).forEach(function (key) {\n\t      return ta.style[key] = style[key];\n\t    });\n\t    assignedElements[\"delete\"](ta);\n\t  }.bind(ta, {\n\t    height: ta.style.height,\n\t    resize: ta.style.resize,\n\t    textAlign: ta.style.textAlign,\n\t    overflowY: ta.style.overflowY,\n\t    overflowX: ta.style.overflowX,\n\t    wordWrap: ta.style.wordWrap\n\t  });\n\n\t  ta.addEventListener('autosize:destroy', destroy);\n\t  ta.addEventListener('autosize:update', fullSetHeight);\n\t  ta.addEventListener('input', handleInput);\n\t  window.addEventListener('resize', fullSetHeight); // future todo: consider replacing with ResizeObserver\n\n\t  ta.style.overflowX = 'hidden';\n\t  ta.style.wordWrap = 'break-word';\n\t  assignedElements.set(ta, {\n\t    destroy: destroy,\n\t    update: fullSetHeight\n\t  });\n\t  fullSetHeight();\n\t}\n\n\tfunction destroy(ta) {\n\t  var methods = assignedElements.get(ta);\n\n\t  if (methods) {\n\t    methods.destroy();\n\t  }\n\t}\n\n\tfunction update(ta) {\n\t  var methods = assignedElements.get(ta);\n\n\t  if (methods) {\n\t    methods.update();\n\t  }\n\t}\n\n\tvar autosize = null; // Do nothing in Node.js environment\n\n\tif (typeof window === 'undefined') {\n\t  autosize = function autosize(el) {\n\t    return el;\n\t  };\n\n\t  autosize.destroy = function (el) {\n\t    return el;\n\t  };\n\n\t  autosize.update = function (el) {\n\t    return el;\n\t  };\n\t} else {\n\t  autosize = function autosize(el, options) {\n\t    if (el) {\n\t      Array.prototype.forEach.call(el.length ? el : [el], function (x) {\n\t        return assign(x);\n\t      });\n\t    }\n\n\t    return el;\n\t  };\n\n\t  autosize.destroy = function (el) {\n\t    if (el) {\n\t      Array.prototype.forEach.call(el.length ? el : [el], destroy);\n\t    }\n\n\t    return el;\n\t  };\n\n\t  autosize.update = function (el) {\n\t    if (el) {\n\t      Array.prototype.forEach.call(el.length ? el : [el], update);\n\t    }\n\n\t    return el;\n\t  };\n\t}\n\n\tvar autosize$1 = autosize;\n\n\treturn autosize$1;\n\n})));\n\n\n//# sourceURL=webpack://Vuexy/./node_modules/autosize/dist/autosize.js?");

				/***/ }),

			/***/ "./libs/autosize/autosize.js":
			/*!***********************************!*\
              !*** ./libs/autosize/autosize.js ***!
              \***********************************/
			/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

				"use strict";
				eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   autosize: function() { return /* reexport module object */ autosize_dist_autosize__WEBPACK_IMPORTED_MODULE_0__; }\n/* harmony export */ });\n/* harmony import */ var autosize_dist_autosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! autosize/dist/autosize */ \"./node_modules/autosize/dist/autosize.js\");\n/* harmony import */ var autosize_dist_autosize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(autosize_dist_autosize__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack://Vuexy/./libs/autosize/autosize.js?");

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
			/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
			/******/
			/******/ 		// Return the exports of the module
			/******/ 		return module.exports;
			/******/ 	}
		/******/
		/************************************************************************/
		/******/ 	/* webpack/runtime/compat get default export */
		/******/ 	!function() {
			/******/ 		// getDefaultExport function for compatibility with non-harmony modules
			/******/ 		__webpack_require__.n = function(module) {
				/******/ 			var getter = module && module.__esModule ?
					/******/ 				function() { return module['default']; } :
					/******/ 				function() { return module; };
				/******/ 			__webpack_require__.d(getter, { a: getter });
				/******/ 			return getter;
				/******/ 		};
			/******/ 	}();
		/******/
		/******/ 	/* webpack/runtime/define property getters */
		/******/ 	!function() {
			/******/ 		// define getter functions for harmony exports
			/******/ 		__webpack_require__.d = function(exports, definition) {
				/******/ 			for(var key in definition) {
					/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
						/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
						/******/ 				}
					/******/ 			}
				/******/ 		};
			/******/ 	}();
		/******/
		/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
		/******/ 	!function() {
			/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
			/******/ 	}();
		/******/
		/******/ 	/* webpack/runtime/make namespace object */
		/******/ 	!function() {
			/******/ 		// define __esModule on exports
			/******/ 		__webpack_require__.r = function(exports) {
				/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
					/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
					/******/ 			}
				/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
				/******/ 		};
			/******/ 	}();
		/******/
		/************************************************************************/
		/******/
		/******/ 	// startup
		/******/ 	// Load entry module and return exports
		/******/ 	// This entry module can't be inlined because the eval devtool is used.
		/******/ 	var __webpack_exports__ = __webpack_require__("./libs/autosize/autosize.js");
		/******/
		/******/ 	return __webpack_exports__;
		/******/ })()
		;
});

// bignumber.min.js
/* bignumber.js v9.0.0 https://github.com/MikeMcl/bignumber.js/LICENCE */!function(e){"use strict";var r,x=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,L=Math.ceil,U=Math.floor,I="[BigNumber Error] ",T=I+"Number primitive has more than 15 significant digits: ",C=1e14,M=14,G=9007199254740991,k=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],F=1e7,q=1e9;function j(e){var r=0|e;return 0<e||e===r?r:r-1}function $(e){for(var r,n,t=1,i=e.length,o=e[0]+"";t<i;){for(r=e[t++]+"",n=M-r.length;n--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function z(e,r){var n,t,i=e.c,o=r.c,s=e.s,f=r.s,u=e.e,l=r.e;if(!s||!f)return null;if(n=i&&!i[0],t=o&&!o[0],n||t)return n?t?0:-f:s;if(s!=f)return s;if(n=s<0,t=u==l,!i||!o)return t?0:!i^n?1:-1;if(!t)return l<u^n?1:-1;for(f=(u=i.length)<(l=o.length)?u:l,s=0;s<f;s++)if(i[s]!=o[s])return i[s]>o[s]^n?1:-1;return u==l?0:l<u^n?1:-1}function H(e,r,n,t){if(e<r||n<e||e!==U(e))throw Error(I+(t||"Argument")+("number"==typeof e?e<r||n<e?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function V(e){var r=e.c.length-1;return j(e.e/M)==r&&e.c[r]%2!=0}function W(e,r){return(1<e.length?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function X(e,r,n){var t,i;if(r<0){for(i=n+".";++r;i+=n);e=i+e}else if(++r>(t=e.length)){for(i=n,r-=t;--r;i+=n);e+=i}else r<t&&(e=e.slice(0,r)+"."+e.slice(r));return e}(r=function e(r){var v,a,h,n,l,s,f,u,c,g,t=B.prototype={constructor:B,toString:null,valueOf:null},w=new B(1),N=20,O=4,p=-7,d=21,m=-1e7,y=1e7,b=!1,o=1,E=0,A={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},S="0123456789abcdefghijklmnopqrstuvwxyz";function B(e,r){var n,t,i,o,s,f,u,l,c=this;if(!(c instanceof B))return new B(e,r);if(null==r){if(e&&!0===e._isBigNumber)return c.s=e.s,void(!e.c||e.e>y?c.c=c.e=null:e.e<m?c.c=[c.e=0]:(c.e=e.e,c.c=e.c.slice()));if((f="number"==typeof e)&&0*e==0){if(c.s=1/e<0?(e=-e,-1):1,e===~~e){for(o=0,s=e;10<=s;s/=10,o++);return void(c.c=y<o?c.e=null:(c.e=o,[e]))}l=String(e)}else{if(!x.test(l=String(e)))return h(c,l,f);c.s=45==l.charCodeAt(0)?(l=l.slice(1),-1):1}-1<(o=l.indexOf("."))&&(l=l.replace(".","")),0<(s=l.search(/e/i))?(o<0&&(o=s),o+=+l.slice(s+1),l=l.substring(0,s)):o<0&&(o=l.length)}else{if(H(r,2,S.length,"Base"),10==r)return D(c=new B(e),N+c.e+1,O);if(l=String(e),f="number"==typeof e){if(0*e!=0)return h(c,l,f,r);if(c.s=1/e<0?(l=l.slice(1),-1):1,B.DEBUG&&15<l.replace(/^0\.0*|\./,"").length)throw Error(T+e)}else c.s=45===l.charCodeAt(0)?(l=l.slice(1),-1):1;for(n=S.slice(0,r),o=s=0,u=l.length;s<u;s++)if(n.indexOf(t=l.charAt(s))<0){if("."==t){if(o<s){o=u;continue}}else if(!i&&(l==l.toUpperCase()&&(l=l.toLowerCase())||l==l.toLowerCase()&&(l=l.toUpperCase()))){i=!0,s=-1,o=0;continue}return h(c,String(e),f,r)}f=!1,-1<(o=(l=a(l,r,10,c.s)).indexOf("."))?l=l.replace(".",""):o=l.length}for(s=0;48===l.charCodeAt(s);s++);for(u=l.length;48===l.charCodeAt(--u););if(l=l.slice(s,++u)){if(u-=s,f&&B.DEBUG&&15<u&&(G<e||e!==U(e)))throw Error(T+c.s*e);if((o=o-s-1)>y)c.c=c.e=null;else if(o<m)c.c=[c.e=0];else{if(c.e=o,c.c=[],s=(o+1)%M,o<0&&(s+=M),s<u){for(s&&c.c.push(+l.slice(0,s)),u-=M;s<u;)c.c.push(+l.slice(s,s+=M));s=M-(l=l.slice(s)).length}else s-=u;for(;s--;l+="0");c.c.push(+l)}}else c.c=[c.e=0]}function i(e,r,n,t){var i,o,s,f,u;if(null==n?n=O:H(n,0,8),!e.c)return e.toString();if(i=e.c[0],s=e.e,null==r)u=$(e.c),u=1==t||2==t&&(s<=p||d<=s)?W(u,s):X(u,s,"0");else if(o=(e=D(new B(e),r,n)).e,f=(u=$(e.c)).length,1==t||2==t&&(r<=o||o<=p)){for(;f<r;u+="0",f++);u=W(u,o)}else if(r-=s,u=X(u,o,"0"),f<o+1){if(0<--r)for(u+=".";r--;u+="0");}else if(0<(r+=o-f))for(o+1==f&&(u+=".");r--;u+="0");return e.s<0&&i?"-"+u:u}function R(e,r){for(var n,t=1,i=new B(e[0]);t<e.length;t++){if(!(n=new B(e[t])).s){i=n;break}r.call(i,n)&&(i=n)}return i}function _(e,r,n){for(var t=1,i=r.length;!r[--i];r.pop());for(i=r[0];10<=i;i/=10,t++);return(n=t+n*M-1)>y?e.c=e.e=null:e.c=n<m?[e.e=0]:(e.e=n,r),e}function D(e,r,n,t){var i,o,s,f,u,l,c,a=e.c,h=k;if(a){e:{for(i=1,f=a[0];10<=f;f/=10,i++);if((o=r-i)<0)o+=M,s=r,c=(u=a[l=0])/h[i-s-1]%10|0;else if((l=L((o+1)/M))>=a.length){if(!t)break e;for(;a.length<=l;a.push(0));u=c=0,s=(o%=M)-M+(i=1)}else{for(u=f=a[l],i=1;10<=f;f/=10,i++);c=(s=(o%=M)-M+i)<0?0:u/h[i-s-1]%10|0}if(t=t||r<0||null!=a[l+1]||(s<0?u:u%h[i-s-1]),t=n<4?(c||t)&&(0==n||n==(e.s<0?3:2)):5<c||5==c&&(4==n||t||6==n&&(0<o?0<s?u/h[i-s]:0:a[l-1])%10&1||n==(e.s<0?8:7)),r<1||!a[0])return a.length=0,t?(r-=e.e+1,a[0]=h[(M-r%M)%M],e.e=-r||0):a[0]=e.e=0,e;if(0==o?(a.length=l,f=1,l--):(a.length=l+1,f=h[M-o],a[l]=0<s?U(u/h[i-s]%h[s])*f:0),t)for(;;){if(0==l){for(o=1,s=a[0];10<=s;s/=10,o++);for(s=a[0]+=f,f=1;10<=s;s/=10,f++);o!=f&&(e.e++,a[0]==C&&(a[0]=1));break}if(a[l]+=f,a[l]!=C)break;a[l--]=0,f=1}for(o=a.length;0===a[--o];a.pop());}e.e>y?e.c=e.e=null:e.e<m&&(e.c=[e.e=0])}return e}function P(e){var r,n=e.e;return null===n?e.toString():(r=$(e.c),r=n<=p||d<=n?W(r,n):X(r,n,"0"),e.s<0?"-"+r:r)}return B.clone=e,B.ROUND_UP=0,B.ROUND_DOWN=1,B.ROUND_CEIL=2,B.ROUND_FLOOR=3,B.ROUND_HALF_UP=4,B.ROUND_HALF_DOWN=5,B.ROUND_HALF_EVEN=6,B.ROUND_HALF_CEIL=7,B.ROUND_HALF_FLOOR=8,B.EUCLID=9,B.config=B.set=function(e){var r,n;if(null!=e){if("object"!=typeof e)throw Error(I+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(H(n=e[r],0,q,r),N=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(H(n=e[r],0,8,r),O=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&((n=e[r])&&n.pop?(H(n[0],-q,0,r),H(n[1],0,q,r),p=n[0],d=n[1]):(H(n,-q,q,r),p=-(d=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if((n=e[r])&&n.pop)H(n[0],-q,-1,r),H(n[1],1,q,r),m=n[0],y=n[1];else{if(H(n,-q,q,r),!n)throw Error(I+r+" cannot be zero: "+n);m=-(y=n<0?-n:n)}if(e.hasOwnProperty(r="CRYPTO")){if((n=e[r])!==!!n)throw Error(I+r+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw b=!n,Error(I+"crypto unavailable");b=n}else b=n}if(e.hasOwnProperty(r="MODULO_MODE")&&(H(n=e[r],0,9,r),o=n),e.hasOwnProperty(r="POW_PRECISION")&&(H(n=e[r],0,q,r),E=n),e.hasOwnProperty(r="FORMAT")){if("object"!=typeof(n=e[r]))throw Error(I+r+" not an object: "+n);A=n}if(e.hasOwnProperty(r="ALPHABET")){if("string"!=typeof(n=e[r])||/^.$|[+-.\s]|(.).*\1/.test(n))throw Error(I+r+" invalid: "+n);S=n}}return{DECIMAL_PLACES:N,ROUNDING_MODE:O,EXPONENTIAL_AT:[p,d],RANGE:[m,y],CRYPTO:b,MODULO_MODE:o,POW_PRECISION:E,FORMAT:A,ALPHABET:S}},B.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!B.DEBUG)return!0;var r,n,t=e.c,i=e.e,o=e.s;e:if("[object Array]"=={}.toString.call(t)){if((1===o||-1===o)&&-q<=i&&i<=q&&i===U(i)){if(0===t[0]){if(0===i&&1===t.length)return!0;break e}if((r=(i+1)%M)<1&&(r+=M),String(t[0]).length==r){for(r=0;r<t.length;r++)if((n=t[r])<0||C<=n||n!==U(n))break e;if(0!==n)return!0}}}else if(null===t&&null===i&&(null===o||1===o||-1===o))return!0;throw Error(I+"Invalid BigNumber: "+e)},B.maximum=B.max=function(){return R(arguments,t.lt)},B.minimum=B.min=function(){return R(arguments,t.gt)},B.random=(n=9007199254740992,l=Math.random()*n&2097151?function(){return U(Math.random()*n)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var r,n,t,i,o,s=0,f=[],u=new B(w);if(null==e?e=N:H(e,0,q),i=L(e/M),b)if(crypto.getRandomValues){for(r=crypto.getRandomValues(new Uint32Array(i*=2));s<i;)9e15<=(o=131072*r[s]+(r[s+1]>>>11))?(n=crypto.getRandomValues(new Uint32Array(2)),r[s]=n[0],r[s+1]=n[1]):(f.push(o%1e14),s+=2);s=i/2}else{if(!crypto.randomBytes)throw b=!1,Error(I+"crypto unavailable");for(r=crypto.randomBytes(i*=7);s<i;)9e15<=(o=281474976710656*(31&r[s])+1099511627776*r[s+1]+4294967296*r[s+2]+16777216*r[s+3]+(r[s+4]<<16)+(r[s+5]<<8)+r[s+6])?crypto.randomBytes(7).copy(r,s):(f.push(o%1e14),s+=7);s=i/7}if(!b)for(;s<i;)(o=l())<9e15&&(f[s++]=o%1e14);for(i=f[--s],e%=M,i&&e&&(o=k[M-e],f[s]=U(i/o)*o);0===f[s];f.pop(),s--);if(s<0)f=[t=0];else{for(t=-1;0===f[0];f.splice(0,1),t-=M);for(s=1,o=f[0];10<=o;o/=10,s++);s<M&&(t-=M-s)}return u.e=t,u.c=f,u}),B.sum=function(){for(var e=1,r=arguments,n=new B(r[0]);e<r.length;)n=n.plus(r[e++]);return n},a=function(){var d="0123456789";function m(e,r,n,t){for(var i,o,s=[0],f=0,u=e.length;f<u;){for(o=s.length;o--;s[o]*=r);for(s[0]+=t.indexOf(e.charAt(f++)),i=0;i<s.length;i++)s[i]>n-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/n|0,s[i]%=n)}return s.reverse()}return function(e,r,n,t,i){var o,s,f,u,l,c,a,h,g=e.indexOf("."),p=N,w=O;for(0<=g&&(u=E,E=0,e=e.replace(".",""),c=(h=new B(r)).pow(e.length-g),E=u,h.c=m(X($(c.c),c.e,"0"),10,n,d),h.e=h.c.length),f=u=(a=m(e,r,n,i?(o=S,d):(o=d,S))).length;0==a[--u];a.pop());if(!a[0])return o.charAt(0);if(g<0?--f:(c.c=a,c.e=f,c.s=t,a=(c=v(c,h,p,w,n)).c,l=c.r,f=c.e),g=a[s=f+p+1],u=n/2,l=l||s<0||null!=a[s+1],l=w<4?(null!=g||l)&&(0==w||w==(c.s<0?3:2)):u<g||g==u&&(4==w||l||6==w&&1&a[s-1]||w==(c.s<0?8:7)),s<1||!a[0])e=l?X(o.charAt(1),-p,o.charAt(0)):o.charAt(0);else{if(a.length=s,l)for(--n;++a[--s]>n;)a[s]=0,s||(++f,a=[1].concat(a));for(u=a.length;!a[--u];);for(g=0,e="";g<=u;e+=o.charAt(a[g++]));e=X(e,f,o.charAt(0))}return e}}(),v=function(){function S(e,r,n){var t,i,o,s,f=0,u=e.length,l=r%F,c=r/F|0;for(e=e.slice();u--;)f=((i=l*(o=e[u]%F)+(t=c*o+(s=e[u]/F|0)*l)%F*F+f)/n|0)+(t/F|0)+c*s,e[u]=i%n;return f&&(e=[f].concat(e)),e}function R(e,r,n,t){var i,o;if(n!=t)o=t<n?1:-1;else for(i=o=0;i<n;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function _(e,r,n,t){for(var i=0;n--;)e[n]-=i,i=e[n]<r[n]?1:0,e[n]=i*t+e[n]-r[n];for(;!e[0]&&1<e.length;e.splice(0,1));}return function(e,r,n,t,i){var o,s,f,u,l,c,a,h,g,p,w,d,m,v,N,O,y,b=e.s==r.s?1:-1,E=e.c,A=r.c;if(!(E&&E[0]&&A&&A[0]))return new B(e.s&&r.s&&(E?!A||E[0]!=A[0]:A)?E&&0==E[0]||!A?0*b:b/0:NaN);for(g=(h=new B(b)).c=[],b=n+(s=e.e-r.e)+1,i||(i=C,s=j(e.e/M)-j(r.e/M),b=b/M|0),f=0;A[f]==(E[f]||0);f++);if(A[f]>(E[f]||0)&&s--,b<0)g.push(1),u=!0;else{for(v=E.length,O=A.length,b+=2,1<(l=U(i/(A[f=0]+1)))&&(A=S(A,l,i),E=S(E,l,i),O=A.length,v=E.length),m=O,w=(p=E.slice(0,O)).length;w<O;p[w++]=0);y=A.slice(),y=[0].concat(y),N=A[0],A[1]>=i/2&&N++;do{if(l=0,(o=R(A,p,O,w))<0){if(d=p[0],O!=w&&(d=d*i+(p[1]||0)),1<(l=U(d/N)))for(i<=l&&(l=i-1),a=(c=S(A,l,i)).length,w=p.length;1==R(c,p,a,w);)l--,_(c,O<a?y:A,a,i),a=c.length,o=1;else 0==l&&(o=l=1),a=(c=A.slice()).length;if(a<w&&(c=[0].concat(c)),_(p,c,w,i),w=p.length,-1==o)for(;R(A,p,O,w)<1;)l++,_(p,O<w?y:A,w,i),w=p.length}else 0===o&&(l++,p=[0]);g[f++]=l,p[0]?p[w++]=E[m]||0:(p=[E[m]],w=1)}while((m++<v||null!=p[0])&&b--);u=null!=p[0],g[0]||g.splice(0,1)}if(i==C){for(f=1,b=g[0];10<=b;b/=10,f++);D(h,n+(h.e=f+s*M-1)+1,t,u)}else h.e=s,h.r=+u;return h}}(),s=/^(-?)0([xbo])(?=\w[\w.]*$)/i,f=/^([^.]+)\.$/,u=/^\.([^.]+)$/,c=/^-?(Infinity|NaN)$/,g=/^\s*\+(?=[\w.])|^\s+|\s+$/g,h=function(e,r,n,t){var i,o=n?r:r.replace(g,"");if(c.test(o))e.s=isNaN(o)?null:o<0?-1:1;else{if(!n&&(o=o.replace(s,function(e,r,n){return i="x"==(n=n.toLowerCase())?16:"b"==n?2:8,t&&t!=i?e:r}),t&&(i=t,o=o.replace(f,"$1").replace(u,"0.$1")),r!=o))return new B(o,i);if(B.DEBUG)throw Error(I+"Not a"+(t?" base "+t:"")+" number: "+r);e.s=null}e.c=e.e=null},t.absoluteValue=t.abs=function(){var e=new B(this);return e.s<0&&(e.s=1),e},t.comparedTo=function(e,r){return z(this,new B(e,r))},t.decimalPlaces=t.dp=function(e,r){var n,t,i;if(null!=e)return H(e,0,q),null==r?r=O:H(r,0,8),D(new B(this),e+this.e+1,r);if(!(n=this.c))return null;if(t=((i=n.length-1)-j(this.e/M))*M,i=n[i])for(;i%10==0;i/=10,t--);return t<0&&(t=0),t},t.dividedBy=t.div=function(e,r){return v(this,new B(e,r),N,O)},t.dividedToIntegerBy=t.idiv=function(e,r){return v(this,new B(e,r),0,1)},t.exponentiatedBy=t.pow=function(e,r){var n,t,i,o,s,f,u,l,c=this;if((e=new B(e)).c&&!e.isInteger())throw Error(I+"Exponent not an integer: "+P(e));if(null!=r&&(r=new B(r)),s=14<e.e,!c.c||!c.c[0]||1==c.c[0]&&!c.e&&1==c.c.length||!e.c||!e.c[0])return l=new B(Math.pow(+P(c),s?2-V(e):+P(e))),r?l.mod(r):l;if(f=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new B(NaN);(t=!f&&c.isInteger()&&r.isInteger())&&(c=c.mod(r))}else{if(9<e.e&&(0<c.e||c.e<-1||(0==c.e?1<c.c[0]||s&&24e7<=c.c[1]:c.c[0]<8e13||s&&c.c[0]<=9999975e7)))return o=c.s<0&&V(e)?-0:0,-1<c.e&&(o=1/o),new B(f?1/o:o);E&&(o=L(E/M+2))}for(u=s?(n=new B(.5),f&&(e.s=1),V(e)):(i=Math.abs(+P(e)))%2,l=new B(w);;){if(u){if(!(l=l.times(c)).c)break;o?l.c.length>o&&(l.c.length=o):t&&(l=l.mod(r))}if(i){if(0===(i=U(i/2)))break;u=i%2}else if(D(e=e.times(n),e.e+1,1),14<e.e)u=V(e);else{if(0==(i=+P(e)))break;u=i%2}c=c.times(c),o?c.c&&c.c.length>o&&(c.c.length=o):t&&(c=c.mod(r))}return t?l:(f&&(l=w.div(l)),r?l.mod(r):o?D(l,E,O,void 0):l)},t.integerValue=function(e){var r=new B(this);return null==e?e=O:H(e,0,8),D(r,r.e+1,e)},t.isEqualTo=t.eq=function(e,r){return 0===z(this,new B(e,r))},t.isFinite=function(){return!!this.c},t.isGreaterThan=t.gt=function(e,r){return 0<z(this,new B(e,r))},t.isGreaterThanOrEqualTo=t.gte=function(e,r){return 1===(r=z(this,new B(e,r)))||0===r},t.isInteger=function(){return!!this.c&&j(this.e/M)>this.c.length-2},t.isLessThan=t.lt=function(e,r){return z(this,new B(e,r))<0},t.isLessThanOrEqualTo=t.lte=function(e,r){return-1===(r=z(this,new B(e,r)))||0===r},t.isNaN=function(){return!this.s},t.isNegative=function(){return this.s<0},t.isPositive=function(){return 0<this.s},t.isZero=function(){return!!this.c&&0==this.c[0]},t.minus=function(e,r){var n,t,i,o,s=this,f=s.s;if(r=(e=new B(e,r)).s,!f||!r)return new B(NaN);if(f!=r)return e.s=-r,s.plus(e);var u=s.e/M,l=e.e/M,c=s.c,a=e.c;if(!u||!l){if(!c||!a)return c?(e.s=-r,e):new B(a?s:NaN);if(!c[0]||!a[0])return a[0]?(e.s=-r,e):new B(c[0]?s:3==O?-0:0)}if(u=j(u),l=j(l),c=c.slice(),f=u-l){for((i=(o=f<0)?(f=-f,c):(l=u,a)).reverse(),r=f;r--;i.push(0));i.reverse()}else for(t=(o=(f=c.length)<(r=a.length))?f:r,f=r=0;r<t;r++)if(c[r]!=a[r]){o=c[r]<a[r];break}if(o&&(i=c,c=a,a=i,e.s=-e.s),0<(r=(t=a.length)-(n=c.length)))for(;r--;c[n++]=0);for(r=C-1;f<t;){if(c[--t]<a[t]){for(n=t;n&&!c[--n];c[n]=r);--c[n],c[t]+=C}c[t]-=a[t]}for(;0==c[0];c.splice(0,1),--l);return c[0]?_(e,c,l):(e.s=3==O?-1:1,e.c=[e.e=0],e)},t.modulo=t.mod=function(e,r){var n,t,i=this;return e=new B(e,r),!i.c||!e.s||e.c&&!e.c[0]?new B(NaN):!e.c||i.c&&!i.c[0]?new B(i):(9==o?(t=e.s,e.s=1,n=v(i,e,0,3),e.s=t,n.s*=t):n=v(i,e,0,o),(e=i.minus(n.times(e))).c[0]||1!=o||(e.s=i.s),e)},t.multipliedBy=t.times=function(e,r){var n,t,i,o,s,f,u,l,c,a,h,g,p,w,d,m=this,v=m.c,N=(e=new B(e,r)).c;if(!(v&&N&&v[0]&&N[0]))return!m.s||!e.s||v&&!v[0]&&!N||N&&!N[0]&&!v?e.c=e.e=e.s=null:(e.s*=m.s,v&&N?(e.c=[0],e.e=0):e.c=e.e=null),e;for(t=j(m.e/M)+j(e.e/M),e.s*=m.s,(u=v.length)<(a=N.length)&&(p=v,v=N,N=p,i=u,u=a,a=i),i=u+a,p=[];i--;p.push(0));for(w=C,d=F,i=a;0<=--i;){for(n=0,h=N[i]%d,g=N[i]/d|0,o=i+(s=u);i<o;)n=((l=h*(l=v[--s]%d)+(f=g*l+(c=v[s]/d|0)*h)%d*d+p[o]+n)/w|0)+(f/d|0)+g*c,p[o--]=l%w;p[o]=n}return n?++t:p.splice(0,1),_(e,p,t)},t.negated=function(){var e=new B(this);return e.s=-e.s||null,e},t.plus=function(e,r){var n,t=this,i=t.s;if(r=(e=new B(e,r)).s,!i||!r)return new B(NaN);if(i!=r)return e.s=-r,t.minus(e);var o=t.e/M,s=e.e/M,f=t.c,u=e.c;if(!o||!s){if(!f||!u)return new B(i/0);if(!f[0]||!u[0])return u[0]?e:new B(f[0]?t:0*i)}if(o=j(o),s=j(s),f=f.slice(),i=o-s){for((n=0<i?(s=o,u):(i=-i,f)).reverse();i--;n.push(0));n.reverse()}for((i=f.length)-(r=u.length)<0&&(n=u,u=f,f=n,r=i),i=0;r;)i=(f[--r]=f[r]+u[r]+i)/C|0,f[r]=C===f[r]?0:f[r]%C;return i&&(f=[i].concat(f),++s),_(e,f,s)},t.precision=t.sd=function(e,r){var n,t,i;if(null!=e&&e!==!!e)return H(e,1,q),null==r?r=O:H(r,0,8),D(new B(this),e,r);if(!(n=this.c))return null;if(t=(i=n.length-1)*M+1,i=n[i]){for(;i%10==0;i/=10,t--);for(i=n[0];10<=i;i/=10,t++);}return e&&this.e+1>t&&(t=this.e+1),t},t.shiftedBy=function(e){return H(e,-G,G),this.times("1e"+e)},t.squareRoot=t.sqrt=function(){var e,r,n,t,i,o=this,s=o.c,f=o.s,u=o.e,l=N+4,c=new B("0.5");if(1!==f||!s||!s[0])return new B(!f||f<0&&(!s||s[0])?NaN:s?o:1/0);if((n=0==(f=Math.sqrt(+P(o)))||f==1/0?(((r=$(s)).length+u)%2==0&&(r+="0"),f=Math.sqrt(+r),u=j((u+1)/2)-(u<0||u%2),new B(r=f==1/0?"1e"+u:(r=f.toExponential()).slice(0,r.indexOf("e")+1)+u)):new B(f+"")).c[0])for((f=(u=n.e)+l)<3&&(f=0);;)if(i=n,n=c.times(i.plus(v(o,i,l,1))),$(i.c).slice(0,f)===(r=$(n.c)).slice(0,f)){if(n.e<u&&--f,"9999"!=(r=r.slice(f-3,f+1))&&(t||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(D(n,n.e+N+2,1),e=!n.times(n).eq(o));break}if(!t&&(D(i,i.e+N+2,0),i.times(i).eq(o))){n=i;break}l+=4,f+=4,t=1}return D(n,n.e+N+1,O,e)},t.toExponential=function(e,r){return null!=e&&(H(e,0,q),e++),i(this,e,r,1)},t.toFixed=function(e,r){return null!=e&&(H(e,0,q),e=e+this.e+1),i(this,e,r)},t.toFormat=function(e,r,n){var t;if(null==n)null!=e&&r&&"object"==typeof r?(n=r,r=null):e&&"object"==typeof e?(n=e,e=r=null):n=A;else if("object"!=typeof n)throw Error(I+"Argument not an object: "+n);if(t=this.toFixed(e,r),this.c){var i,o=t.split("."),s=+n.groupSize,f=+n.secondaryGroupSize,u=n.groupSeparator||"",l=o[0],c=o[1],a=this.s<0,h=a?l.slice(1):l,g=h.length;if(f&&(i=s,s=f,g-=f=i),0<s&&0<g){for(i=g%s||s,l=h.substr(0,i);i<g;i+=s)l+=u+h.substr(i,s);0<f&&(l+=u+h.slice(i)),a&&(l="-"+l)}t=c?l+(n.decimalSeparator||"")+((f=+n.fractionGroupSize)?c.replace(new RegExp("\\d{"+f+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):c):l}return(n.prefix||"")+t+(n.suffix||"")},t.toFraction=function(e){var r,n,t,i,o,s,f,u,l,c,a,h,g=this,p=g.c;if(null!=e&&(!(f=new B(e)).isInteger()&&(f.c||1!==f.s)||f.lt(w)))throw Error(I+"Argument "+(f.isInteger()?"out of range: ":"not an integer: ")+P(f));if(!p)return new B(g);for(r=new B(w),l=n=new B(w),t=u=new B(w),h=$(p),o=r.e=h.length-g.e-1,r.c[0]=k[(s=o%M)<0?M+s:s],e=!e||0<f.comparedTo(r)?0<o?r:l:f,s=y,y=1/0,f=new B(h),u.c[0]=0;c=v(f,r,0,1),1!=(i=n.plus(c.times(t))).comparedTo(e);)n=t,t=i,l=u.plus(c.times(i=l)),u=i,r=f.minus(c.times(i=r)),f=i;return i=v(e.minus(n),t,0,1),u=u.plus(i.times(l)),n=n.plus(i.times(t)),u.s=l.s=g.s,a=v(l,t,o*=2,O).minus(g).abs().comparedTo(v(u,n,o,O).minus(g).abs())<1?[l,t]:[u,n],y=s,a},t.toNumber=function(){return+P(this)},t.toPrecision=function(e,r){return null!=e&&H(e,1,q),i(this,e,r,2)},t.toString=function(e){var r,n=this,t=n.s,i=n.e;return null===i?t?(r="Infinity",t<0&&(r="-"+r)):r="NaN":(r=null==e?i<=p||d<=i?W($(n.c),i):X($(n.c),i,"0"):10===e?X($((n=D(new B(n),N+i+1,O)).c),n.e,"0"):(H(e,2,S.length,"Base"),a(X($(n.c),i,"0"),10,e,t,!0)),t<0&&n.c[0]&&(r="-"+r)),r},t.valueOf=t.toJSON=function(){return P(this)},t._isBigNumber=!0,null!=r&&B.set(r),B}()).default=r.BigNumber=r,"function"==typeof define&&define.amd?define(function(){return r}):"undefined"!=typeof module&&module.exports?module.exports=r:(e||(e="undefined"!=typeof self&&self?self:window),e.BigNumber=r)}(this);

// jquery.json.js
/*!
 * jQuery Json Plugin (with Transition Definitions)
 * Examples and documentation at: http://json.cn/
 * Copyright (c) 2012-2013  China.Ren.
 * Version: 1.0.2 (19-OCT-2013)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.3.1 or later
 */
var JSONFormat = (function(){
	var _toString = Object.prototype.toString;
	var _bigNums = [];
	function hide(obj){
		var data_type = $(obj).parent().attr('data-type');
		var data_size = $(obj).parent().attr('data-size');

		$(obj).parent().hide();
		var span = document.createElement('span');
		span.className = 'custom-plus';
		if (data_type === 'array') {
			span.innerHTML = '<i  style="cursor:pointer;" class="ti ti-square-rounded-plus"></i>Array[<span class="json_number">' + data_size + '</span>]';
			$(obj).parent().before(span)
		}else{
			span.innerHTML = '<i  style="cursor:pointer;" class="ti ti-square-rounded-plus"></i>Object{...}';
			$(obj).parent().before(span)
		}

	}

	function show(obj){
		$(obj).parent().next().show();
		$(obj).parent().remove()
	}

	$('#json-target').on('click', '.ti-square-rounded-plus', function(e) {
		show(this)
	})

	$('#json-target').on('click', '.ti-square-rounded-minus', function(e) {
		hide(this)
	})

	function format(object, indent_count){
		var html_fragment = '';
		switch(_typeof(object)){
			case 'Null' :0
				html_fragment = _format_null(object);
				break;
			case 'Boolean' :
				html_fragment = _format_boolean(object);
				break;
			case 'Number' :
				html_fragment = _format_number(object);
				break;
			case 'String' :
				//replace blank to html blank to display in html.
				object  = object.replace(/ /g,"%yxpnbspyxp;");
				html_fragment = _format_string(object);
				break;
			case 'Array' :
				html_fragment = _format_array(object, indent_count);
				break;
			case 'Object' :
				if(object instanceof BigNumber){
					html_fragment = _format_number(object.toFixed());
				}else{
					html_fragment = _format_object(object, indent_count);
				}
				break;
		}
		return html_fragment;
	};

	function _format_null(object){
		return '<span class="json_null" contenteditable="true">null</span>';
	}

	function _format_boolean(object){
		return '<span class="json_boolean" contenteditable="true">' + object + '</span>';
	}

	function _format_number(object){
		return '<span class="json_number" contenteditable="true">' + object + '</span>';
	}

	function _format_string(object){
		// 2023-2-20禁用
		object = object.replace(/\</g,"%yxplt;");
		object = object.replace(/\>/g,"%yxpgt;");
		// 2023-2-20禁用
		if(0 <= object.search(/^http/)){
			object = '<a href="' + object + '" target="_blank" class="json_link">' + object + '</a>'
		}
		return '<span class="json_string" contenteditable="true">"' + object + '"</span>';
	}

	function _format_array(object, indent_count){
		var tmp_array = [];
		for(var i = 0, size = object.length; i < size; ++i){
			tmp_array.push(indent_tab(indent_count) + format(object[i], indent_count + 1));
		}
		return '<span data-type="array" data-size="' + tmp_array.length + '"><i  style="cursor:pointer;" class="ti ti-square-rounded-minus"></i>[<br/>'
			+ tmp_array.join(',<br/>')
			+ '<br/>' + indent_tab(indent_count - 1) + ']</span>';
	}

	function _format_object(object, indent_count){
		var tmp_array = [];
		for(var key in object){
			var keyRe = key.replace('jsondotcnprefixyxp', '');
			tmp_array.push( indent_tab(indent_count) + '<span class="json_key" contenteditable="true">"' + keyRe + '"</span>:<span class="json_nbsp">%yxpnbspyxp;</span>' +  format(object[key], indent_count + 1));
		}
		return '<span  data-type="object"><i  style="cursor:pointer;" class="ti ti-square-rounded-minus"></i>{<br/>'
			+ tmp_array.join(',<br/>')
			+ '<br/>' + indent_tab(indent_count - 1) + '}</span>';
	}

	function indent_tab(indent_count){
		return (new Array(indent_count + 1)).join('<span class="json_nbsp">%yxpnbspyxp;%yxpnbspyxp;%yxpnbspyxp;%yxpnbspyxp;</span>');
	}

	function _typeof(object){
		var tf = typeof object,
			ts = _toString.call(object);
		return null === object ? 'Null' :
			'undefined' == tf ? 'Undefined'   :
				'boolean' == tf ? 'Boolean'   :
					'number' == tf ? 'Number'   :
						'string' == tf ? 'String'   :
							'[object Function]' == ts ? 'Function' :
								'[object Array]' == ts ? 'Array' :
									'[object Date]' == ts ? 'Date' : 'Object';
	};

	function loadCssString(){
		var style = document.createElement('style');
		style.type = 'text/css';
		var code = Array.prototype.slice.apply(arguments).join('');
		try{
			style.appendChild(document.createTextNode(code));
		}catch(ex){
			style.styleSheet.cssText = code;
		}
		document.getElementsByTagName('head')[0].appendChild(style);
	}

	loadCssString(
		'.json_key{ color: #92278f;font-weight:bold;}',
		'.json_null{color: #f1592a;font-weight:bold;}',
		'.json_string{ color: #3ab54a;font-weight:bold;}',
		'.json_number{ color: #25aae2;font-weight:bold;}',
		'.json_boolean{ color: #f98280;font-weight:bold;}',
		'.json_link{ color: #61D2D6;font-weight:bold;}',
		'.json_nbsp{ letter-spacing: 4px; }',
		'.json_array_brackets{}');

	var _JSONFormat = function(origin_data){
		// this.data = origin_data ? origin_data :
		//     JSON && JSON.parse ? JSON.parse(origin_data) : eval('(' + origin_data + ')');
		// let stringedJSON = origin_data.replace(/:\s*\"(.*)?\[(.*)?\](.*)?\"\s*(,)?/g, ': "$1jsonbracketsdoctor$2jsonbracketsdoctor$3"$4');
		// 将s”: 78替换成s": jsondotcnprefix78 =======
		let stringedJSON = origin_data.replace(/([^\\]")\s*:\s*([-+Ee0-9.]+)\s*(,)?/g, function (match, p1, p2, p3) {
			return ((p1 || '') + ': ' + '"jsondotcnprefix' + (p2 || '') + '"' + (p3 || ''));
		});
		// 将字符串“1，2，3”中的数字添加前缀，以免在下面匹配时被替换
		stringedJSON = stringedJSON.replace(/("\s*)((\\"|[^"])*)\s*(")/g, function(match, p1, p2, p3, p4) {
			// console.log(p2)
			var replaceStr = p2.replace(/(,|^)(\s*)(\d+)(\s*)(?=,|$)/g, function(match, p1, p2, p3) {
				return ((p1 || '') + 'jsondotyxpprefixyxp' + (p2 || '') + (p3 || ''));
			});
			replaceStr = replaceStr.replace(/(\[)\s*(\d+)/g, function (match, p1, p2) {
				return ((p1 || '') + 'jsondotyxpprefixyxp' + (p2 || ''));
			});
			replaceStr = replaceStr.replace(/(\d+)(])/g, function (match, p1, p2){
				return ('jsondotyxpprefixyxp' + (p1 || '') + (p2 || ''));
			});
			return p1 + replaceStr + p4;
		});
		// 将,78,替换成,jsondotcnprefix78,
		stringedJSON = stringedJSON.replace(/(,|^)\s*(\d+)\s*(?=,|$)/g, function (match, p1, p2){
			return (p1 + '"jsondotcnprefix' + (p2 || '') + '"');
		});
		// 将s": [78替换成s" [jsondotcnprefix78
		stringedJSON = stringedJSON.replace(/([^\\]")\s*:\s*(\[)\s*([-+Ee0-9.]+)\s*(,)?\s*(])?/g, function(match, p1, p2, p3, p4, p5){
			return ((p1 || '') + ': ' + (p2 || '') + '"jsondotcnprefix' + (p3 || '') + '"' + (p4 || '') + (p5 || ''));
		});
		// 将,78],"替换成,jsondotcnprefix78],"
		stringedJSON = stringedJSON.replace(/(,)\s*([-+Ee0-9.]+)\s*(])\s*/g, function (match, p1, p2, p3){
			return ((p1 || '') + '"jsondotcnprefix' + (p2 || '') + '"' + (p3 || ''));
		});
		// stringedJSON = stringedJSON.replace(/(\[)\s*([-+Ee0-9.]+)\s*(,)?\s*(\])?/g, '$1"jsondotcnprefix$2"$3$4');
		// stringedJSON = stringedJSON.replace(/(,)\s*([-+Ee0-9.]+)\s*(\])?/g, '$1"jsondotcnprefix$2"$3');
		stringedJSON = stringedJSON.replace(/"([-+Ee0-9.]+)"\s*:\s*/g, function (match, p1) {
			return ('"jsondotcnprefixyxp' + (p1 || '') + '": ');
		});
		stringedJSON = stringedJSON.replace(/jsondotyxpprefixyxp/g, '');
		// console.log(stringedJSON)
		try {
			var temp = JSON.parse(stringedJSON, (key, value) => {
				// only changing strings
				if (typeof value !== 'string') return value;
				// only changing number strings
				if (!value.startsWith('jsondotcnprefix')) return value;
				// chop off the prefix
				value = value.slice('jsondotcnprefix'.length);
				// pick your favorite arbitrary-precision library
				return new BigNumber(value);
			});
			this.data = temp;
		} catch (e) {
			this.data = JSON.parse(origin_data);
			console.log(e);
		} finally {

		}
		//this.data = o;//JSON.parse(origin_data);
	};

	_JSONFormat.prototype = {
		constructor : JSONFormat,
		toString : function(){
			return format(this.data, 1);
		}
	}

	return _JSONFormat;

})();

// jquery.xml2json.js
/*
 ### jQuery XML to JSON Plugin v1.3 - 2013-02-18 ###
 * http://www.fyneworks.com/ - diego@fyneworks.com
	* Licensed under http://en.wikipedia.org/wiki/MIT_License
 ###
 Website: http://www.fyneworks.com/jquery/xml-to-json/
*//*
 # INSPIRED BY: http://www.terracoder.com/
           AND: http://www.thomasfrank.se/xml_to_json.html
											AND: http://www.kawa.net/works/js/xml/objtree-e.html
*//*
 This simple script converts XML (document of code) into a JSON object. It is the combination of 2
 'xml to json' great parsers (see below) which allows for both 'simple' and 'extended' parsing modes.
*/
// Avoid collisions
;if(window.jQuery) (function($){

	// Add function to jQuery namespace
	$.extend({

		// converts xml documents and xml text to json object
		xml2json: function(xml, extended) {
			if(!xml) return {}; // quick fail

			//### PARSER LIBRARY
			// Core function
			function parseXML(node, simple){
				if(!node) return null;
				var txt = '', obj = null, att = null;
				var nt = node.nodeType, nn = jsVar(node.localName || node.nodeName);
				var nv = node.text || node.nodeValue || '';
				/*DBG*/ //if(window.console) console.log(['x2j',nn,nt,nv.length+' bytes']);
				if(node.childNodes){
					if(node.childNodes.length>0){
						/*DBG*/ //if(window.console) console.log(['x2j',nn,'CHILDREN',node.childNodes]);
						$.each(node.childNodes, function(n,cn){
							var cnt = cn.nodeType, cnn = jsVar(cn.localName || cn.nodeName);
							var cnv = cn.text || cn.nodeValue || '';
							/*DBG*/ //if(window.console) console.log(['x2j',nn,'node>a',cnn,cnt,cnv]);
							if(cnt == 8){
								/*DBG*/ //if(window.console) console.log(['x2j',nn,'node>b',cnn,'COMMENT (ignore)']);
								return; // ignore comment node
							}
							else if(cnt == 3 || cnt == 4 || !cnn){
								// ignore white-space in between tags
								if(cnv.match(/^\s+$/)){
									/*DBG*/ //if(window.console) console.log(['x2j',nn,'node>c',cnn,'WHITE-SPACE (ignore)']);
									return;
								};
								/*DBG*/ //if(window.console) console.log(['x2j',nn,'node>d',cnn,'TEXT']);
								txt += cnv.replace(/^\s+/,'').replace(/\s+$/,'');
								// make sure we ditch trailing spaces from markup
							}
							else{
								/*DBG*/ //if(window.console) console.log(['x2j',nn,'node>e',cnn,'OBJECT']);
								obj = obj || {};
								if(obj[cnn]){
									/*DBG*/ //if(window.console) console.log(['x2j',nn,'node>f',cnn,'ARRAY']);

									// http://forum.jquery.com/topic/jquery-jquery-xml2json-problems-when-siblings-of-the-same-tagname-only-have-a-textnode-as-a-child
									if(!obj[cnn].length) obj[cnn] = myArr(obj[cnn]);
									obj[cnn] = myArr(obj[cnn]);

									obj[cnn][ obj[cnn].length ] = parseXML(cn, true/* simple */);
									obj[cnn].length = obj[cnn].length;
								}
								else{
									/*DBG*/ //if(window.console) console.log(['x2j',nn,'node>g',cnn,'dig deeper...']);
									obj[cnn] = parseXML(cn);
								};
							};
						});
					};//node.childNodes.length>0
				};//node.childNodes
				if(node.attributes){
					if(node.attributes.length>0){
						/*DBG*/ //if(window.console) console.log(['x2j',nn,'ATTRIBUTES',node.attributes])
						att = {}; obj = obj || {};
						$.each(node.attributes, function(a,at){
							var atn = jsVar('@'+at.name), atv = at.value;
							att[atn] = atv;
							if(obj[atn]){
								/*DBG*/ //if(window.console) console.log(['x2j',nn,'attr>',atn,'ARRAY']);

								// http://forum.jquery.com/topic/jquery-jquery-xml2json-problems-when-siblings-of-the-same-tagname-only-have-a-textnode-as-a-child
								//if(!obj[atn].length) obj[atn] = myArr(obj[atn]);//[ obj[ atn ] ];
								obj[cnn] = myArr(obj[cnn]);

								obj[atn][ obj[atn].length ] = atv;
								obj[atn].length = obj[atn].length;
							}
							else{
								/*DBG*/ //if(window.console) console.log(['x2j',nn,'attr>',atn,'TEXT']);
								obj[atn] = atv;
							};
						});
						//obj['attributes'] = att;
					};//node.attributes.length>0
				};//node.attributes
				if(obj){
					obj = $.extend( (txt!='' ? new String(txt) : {}),/* {text:txt},*/ obj || {}/*, att || {}*/);
					//txt = (obj.text) ? (typeof(obj.text)=='object' ? obj.text : [obj.text || '']).concat([txt]) : txt;
					txt = (obj.text) ? ([obj.text || '']).concat([txt]) : txt;
					if(txt) obj.text = txt;
					txt = '';
				};
				var out = obj || txt;
				//console.log([extended, simple, out]);
				if(extended){
					if(txt) out = {};//new String(out);
					txt = out.text || txt || '';
					if(txt) out.text = txt;
					if(!simple) out = myArr(out);
				};
				return out;
			};// parseXML
			// Core Function End
			// Utility functions
			var jsVar = function(s){ return String(s || '').replace(/-/g,"_"); };

			// NEW isNum function: 01/09/2010
			// Thanks to Emile Grau, GigaTecnologies S.L., www.gigatransfer.com, www.mygigamail.com
			function isNum(s){
				// based on utility function isNum from xml2json plugin (http://www.fyneworks.com/ - diego@fyneworks.com)
				// few bugs corrected from original function :
				// - syntax error : regexp.test(string) instead of string.test(reg)
				// - regexp modified to accept  comma as decimal mark (latin syntax : 25,24 )
				// - regexp modified to reject if no number before decimal mark  : ".7" is not accepted
				// - string is "trimmed", allowing to accept space at the beginning and end of string
				var regexp=/^((-)?([0-9]+)(([\.\,]{0,1})([0-9]+))?$)/
				return (typeof s == "number") || regexp.test(String((s && typeof s == "string") ? jQuery.trim(s) : ''));
			};
			// OLD isNum function: (for reference only)
			//var isNum = function(s){ return (typeof s == "number") || String((s && typeof s == "string") ? s : '').test(/^((-)?([0-9]*)((\.{0,1})([0-9]+))?$)/); };

			var myArr = function(o){

				// http://forum.jquery.com/topic/jquery-jquery-xml2json-problems-when-siblings-of-the-same-tagname-only-have-a-textnode-as-a-child
				//if(!o.length) o = [ o ]; o.length=o.length;
				if(!$.isArray(o)) o = [ o ]; o.length=o.length;

				// here is where you can attach additional functionality, such as searching and sorting...
				return o;
			};
			// Utility functions End
			//### PARSER LIBRARY END

			// Convert plain text to xml
			if(typeof xml=='string') xml = $.text2xml(xml);

			// Quick fail if not xml (or if this is a node)
			if(!xml.nodeType) return;
			if(xml.nodeType == 3 || xml.nodeType == 4) return xml.nodeValue;

			// Find xml root node
			var root = (xml.nodeType == 9) ? xml.documentElement : xml;

			// Convert xml to json
			var out = parseXML(root, true /* simple */);

			// Clean-up memory
			xml = null; root = null;

			// Send output
			return out;
		},

		// Convert text to XML DOM
		text2xml: function(str) {
			// NOTE: I'd like to use jQuery for this, but jQuery makes all tags uppercase
			//return $(xml)[0];

			/* prior to jquery 1.9 */
			/*
            var out;
            try{
             var xml = ((!$.support.opacity && !$.support.style))?new ActiveXObject("Microsoft.XMLDOM"):new DOMParser();
             xml.async = false;
            }catch(e){ throw new Error("XML Parser could not be instantiated") };
            try{
             if((!$.support.opacity && !$.support.style)) out = (xml.loadXML(str))?xml:false;
             else out = xml.parseFromString(str, "text/xml");
            }catch(e){ throw new Error("Error parsing XML string") };
            return out;
            */

			/* jquery 1.9+ */
			return $.parseXML(str);
		}

	}); // extend $

})(jQuery);

// jquery.json2xml.js
/**
 * JSON to XML jQuery plugin. Provides quick way to convert JSON object to XML
 * string. To some extent, allows control over XML output.
 * Just as jQuery itself, this plugin is released under both MIT & GPL licences.
 *
 * @version 1.02
 * @author Micha Korecki, www.michalkorecki.com
 */
(function($) {
	/**
	 * Converts JSON object to XML string.
	 *
	 * @param json object to convert
	 * @param options additional parameters
	 * @return XML string
	 */
	$.json2xml = function(json, options) {
		settings = {};
		settings = $.extend(true, settings, defaultSettings, options || { });
		let stringedJSON = json.replace(/([^\\]")\s*:\s*([-+Ee0-9.]+)\s*(,)?/g, function (match, p1, p2, p3) {
			return ((p1 || '') + ': ' + '"jsondotcnprefix' + (p2 || '') + '"' + (p3 || ''));
		});
		// 将字符串“1，2，3”中的数字添加前缀，以免在下面匹配时被替换
		stringedJSON = stringedJSON.replace(/(")\s*((\\"|[^"])*)\s*(")/g, function(match, p1, p2, p3, p4) {
			// console.log(p2)
			var replaceStr = p2.replace(/(,|^)(\s*)(\d+)(\s*)(?=,|$)/g, function(match, p1, p2, p3) {
				return ((p1 || '') + 'jsondotyxpprefixyxp' + (p2 || '') + (p3 || ''));
			});
			replaceStr = replaceStr.replace(/(\[)\s*(\d+)/g, function (match, p1, p2) {
				return ((p1 || '') + 'jsondotyxpprefixyxp' + (p2 || ''));
			});
			replaceStr = replaceStr.replace(/(\d+)(])/g, function (match, p1, p2){
				return ('jsondotyxpprefixyxp' + (p1 || '') + (p2 || ''));
			});
			return p1 + replaceStr + p4;
		});
		// 将,78,替换成,jsondotcnprefix78,
		stringedJSON = stringedJSON.replace(/(,|^)\s*(\d+)\s*(?=,|$)/g, function (match, p1, p2){
			return (p1 + '"jsondotcnprefix' + (p2 || '') + '"');
		});
		// 将s": [78替换成s" [jsondotcnprefix78
		stringedJSON = stringedJSON.replace(/([^\\]")\s*:\s*(\[)\s*([-+Ee0-9.]+)\s*(,)?\s*(])?/g, function(match, p1, p2, p3, p4, p5){
			return ((p1 || '') + ': ' + (p2 || '') + '"jsondotcnprefix' + (p3 || '') + '"' + (p4 || '') + (p5 || ''));
		});
		// 将,78],"替换成,jsondotcnprefix78],"
		stringedJSON = stringedJSON.replace(/(,)\s*([-+Ee0-9.]+)\s*(])\s*/g, function (match, p1, p2, p3){
			return ((p1 || '') + '"jsondotcnprefix' + (p2 || '') + '"' + (p3 || ''));
		});
		// stringedJSON = stringedJSON.replace(/(\[)\s*([-+Ee0-9.]+)\s*(,)?\s*(\])?/g, '$1"jsondotcnprefix$2"$3$4');
		// stringedJSON = stringedJSON.replace(/(,)\s*([-+Ee0-9.]+)\s*(\])?/g, '$1"jsondotcnprefix$2"$3');
		stringedJSON = stringedJSON.replace(/"([-+Ee0-9.]+)"\s*:\s*/g, function (match, p1) {
			return ('"jsondotcnprefixyxp' + (p1 || '') + '": ');
		});
		stringedJSON = stringedJSON.replace(/jsondotyxpprefixyxp/g, '');
		try {
			var temp = JSON.parse(stringedJSON, (key, value) => {
				// only changing strings
				if (typeof value !== 'string') return value;
				// only changing number strings
				if (!value.startsWith('jsondotcnprefix')) return value;
				// chop off the prefix
				return value.slice('jsondotcnprefix'.length);
			});
			json = temp;
		} catch (e) {
			json = JSON.parse(json);
		} finally {

		}
		return '<?xml version="1.0" encoding="UTF-8"?>\n'+convertToXml(json, settings.rootTagName, '', 0);
	};

	var defaultSettings = {
		formatOutput: true,
		formatTextNodes: false,
		indentString: '  ',
		rootTagName: 'root',
		ignore: [],
		replace: [],
		nodes: [],
		///TODO: exceptions system
		exceptions: []
	};

	/**
	 * This is actual settings object used throught plugin, default settings
	 * are stored separately to prevent overriding when using multiple times.
	 */
	var settings = {};

	/**
	 * Core function parsing JSON to XML. It iterates over object properties and
	 * creates XML attributes appended to main tag, if property is primitive
	 * value (eg. string, number).
	 * Otherwise, if it's array or object, new node is created and appened to
	 * parent tag.
	 * You can alter this behaviour by providing values in settings.ignore,
	 * settings.replace and settings.nodes arrays.
	 *
	 * @param json object to parse
	 * @param tagName name of tag created for parsed object
	 * @param parentPath path to properly identify elements in ignore, replace
	 * 	      and nodes arrays
	 * @param depth current element's depth
	 * @return XML string
	 */
	var convertToXml = function(json, tagName, parentPath, depth) {
		var suffix = (settings.formatOutput) ? '\r\n' : '';
		var indent = (settings.formatOutput) ? getIndent(depth) : '';
		var xmlTag = indent + '<' + tagName;
		var children = '';

		for (var key in json) {
			if (json.hasOwnProperty(key)) {
				var propertyPath = parentPath + key;
				var propertyName = getPropertyName(parentPath, key);
				// element not in ignore array, process
				if ($.inArray(propertyPath, settings.ignore) == -1) {
					// array, create new child element
					if ($.isArray(json[key])) {
						children += createNodeFromArray(json[key], propertyName,
							propertyPath + '.', depth + 1, suffix);
					}
					// object, new child element aswell
					else if (typeof(json[key]) === 'object') {
						children += convertToXml(json[key], propertyName,
							propertyPath + '.', depth + 1);
					}
					// primitive value property as attribute
					else {
						// unless it's explicitly defined it should be node
						if ( propertyName.indexOf('@')==-1) {
							children += createTextNode(propertyName, json[key],
								depth, suffix);
						}
						else {
							propertyName = propertyName.replace('@','');
							xmlTag += ' ' + propertyName + '="' +  json[key] + '"';
						}
					}
				}
			}
		}
		// close tag properly
		if (children !== '') {
			xmlTag += '>' + suffix + children + indent + '</' + tagName + '>' + suffix;
		}
		else {
			xmlTag += '/>' + suffix;
		}
		xmlTag = xmlTag.replace(/jsondotcnprefixyxp/g, '');
		return xmlTag;
	};


	/**
	 * Creates indent string for provided depth value. See settings for details.
	 *
	 * @param depth
	 * @return indent string
	 */
	var getIndent = function(depth) {
		var output = '';
		for (var i = 0; i < depth; i++) {
			output += settings.indentString;
		}
		return output;
	};


	/**
	 * Checks settings.replace array for provided name, if it exists returns
	 * replacement name. Else, original name is returned.
	 *
	 * @param parentPath path to this element's parent
	 * @param name name of element to look up
	 * @return element's final name
	 */
	var getPropertyName = function(parentPath, name) {
		var index = settings.replace.length;
		var searchName = parentPath + name;
		while (index--) {
			// settings.replace array consists of {original : replacement}
			// objects
			if (settings.replace[index].hasOwnProperty(searchName)) {
				return settings.replace[index][searchName];
			}
		}
		return name;
	};

	/**
	 * Creates XML node from javascript array object.
	 *
	 * @param source
	 * @param name XML element name
	 * @param path parent element path string
	 * @param depth
	 * @param suffix node suffix (whether to format output or not)
	 * @return XML tag string for provided array
	 */
	var createNodeFromArray = function(source, name, path, depth, suffix) {
		var xmlNode = '';
		if (source.length > 0) {
			for (var index in source) {
				// array's element isn't object - it's primitive value, which
				// means array might need to be converted to text nodes
				if (typeof(source[index]) !== 'object') {
					// empty strings will be converted to empty nodes
					if (source[index] === "") {
						xmlNode += getIndent(depth) + '<' + name + '/>' + suffix;
					}
					else {
						var textPrefix = (settings.formatTextNodes)
							? suffix + getIndent(depth + 1) : '';
						var textSuffix = (settings.formatTextNodes)
							? suffix + getIndent(depth) : '';
						xmlNode += getIndent(depth) + '<' + name + '>'
							+ textPrefix + source[index] + textSuffix
							+ '</' + name + '>' + suffix;
					}
				}
				// else regular conversion applies
				else {
					xmlNode += convertToXml(source[index], name, path, depth);
				}
			}
		}
		// array is empty, also creating empty XML node
		else {
			xmlNode += getIndent(depth) + '<' + name + '/>' + suffix;
		}
		return xmlNode;
	};

	/**
	 * Creates node containing text only.
	 *
	 * @param name node's name
	 * @param text node text string
	 * @param parentDepth this node's parent element depth
	 * @param suffix node suffix (whether to format output or not)
	 * @return XML tag string
	 */
	var createTextNode = function(name, text, parentDepth, suffix) {
		// unformatted text node: <node>value</node>
		// formatting includes value indentation and new lines
		var textPrefix = (settings.formatTextNodes)
			? suffix + getIndent(parentDepth + 2) : '';
		var textSuffix = (settings.formatTextNodes)
			? suffix + getIndent(parentDepth + 1) : '';
		var xmlNode = getIndent(parentDepth + 1) + '<' + name + '>'
			+ textPrefix + text + textSuffix
			+ '</' + name + '>' + suffix;
		return xmlNode;
	};
})(jQuery);

// json2.js

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
	this.JSON = {};
}

(function () {

	function f(n) {
		// Format integers to have at least two digits.
		return n < 10 ? '0' + n : n;
	}

	if (typeof Date.prototype.toJSON !== 'function') {

		Date.prototype.toJSON = function (key) {

			return isFinite(this.valueOf()) ?
				this.getUTCFullYear()   + '-' +
				f(this.getUTCMonth() + 1) + '-' +
				f(this.getUTCDate())      + 'T' +
				f(this.getUTCHours())     + ':' +
				f(this.getUTCMinutes())   + ':' +
				f(this.getUTCSeconds())   + 'Z' : null;
		};

		String.prototype.toJSON =
			Number.prototype.toJSON =
				Boolean.prototype.toJSON = function (key) {
					return this.valueOf();
				};
	}

	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		gap,
		indent,
		meta = {    // table of character substitutions
			'\b': '\\b',
			'\t': '\\t',
			'\n': '\\n',
			'\f': '\\f',
			'\r': '\\r',
			'"' : '\\"',
			'\\': '\\\\'
		},
		rep;


	function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

		escapable.lastIndex = 0;
		return escapable.test(string) ?
			'"' + string.replace(escapable, function (a) {
				var c = meta[a];
				return typeof c === 'string' ? c :
					'\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
			}) + '"' :
			'"' + string + '"';
	}


	function str(key, holder) {

// Produce a string from holder[key].

		var i,          // The loop counter.
			k,          // The member key.
			v,          // The member value.
			length,
			mind = gap,
			partial,
			value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

		if (value && typeof value === 'object' &&
			typeof value.toJSON === 'function') {
			value = value.toJSON(key);
		}

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

		if (typeof rep === 'function') {
			value = rep.call(holder, key, value);
		}

// What happens next depends on the value's type.

		switch (typeof value) {
			case 'string':
				return quote(value);

			case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

				return isFinite(value) ? String(value) : 'null';

			case 'boolean':
			case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

				return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

			case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

				if (!value) {
					return 'null';
				}

// Make an array to hold the partial results of stringifying this object value.

				gap += indent;
				partial = [];

// Is the value an array?

				if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

					length = value.length;
					for (i = 0; i < length; i += 1) {
						partial[i] = str(i, value) || 'null';
					}

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

					v = partial.length === 0 ? '[]' :
						gap ? '[\n' + gap +
							partial.join(',\n' + gap) + '\n' +
							mind + ']' :
							'[' + partial.join(',') + ']';
					gap = mind;
					return v;
				}

// If the replacer is an array, use it to select the members to be stringified.

				if (rep && typeof rep === 'object') {
					length = rep.length;
					for (i = 0; i < length; i += 1) {
						k = rep[i];
						if (typeof k === 'string') {
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (gap ? ': ' : ':') + v);
							}
						}
					}
				} else {

// Otherwise, iterate through all of the keys in the object.

					for (k in value) {
						if (Object.hasOwnProperty.call(value, k)) {
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (gap ? ': ' : ':') + v);
							}
						}
					}
				}

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

				v = partial.length === 0 ? '{}' :
					gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
						mind + '}' : '{' + partial.join(',') + '}';
				gap = mind;
				return v;
		}
	}

// If the JSON object does not yet have a stringify method, give it one.

	if (typeof JSON.stringify !== 'function') {
		JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

			var i;
			gap = '';
			indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

			if (typeof space === 'number') {
				for (i = 0; i < space; i += 1) {
					indent += ' ';
				}

// If the space parameter is a string, it will be used as the indent string.

			} else if (typeof space === 'string') {
				indent = space;
			}

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

			rep = replacer;
			if (replacer && typeof replacer !== 'function' &&
				(typeof replacer !== 'object' ||
					typeof replacer.length !== 'number')) {
				throw new Error('JSON.stringify');
			}

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

			return str('', {'': value});
		};
	}


// If the JSON object does not yet have a parse method, give it one.

	if (typeof JSON.parse !== 'function') {
		JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

			var j;

			function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

				var k, v, value = holder[key];
				if (value && typeof value === 'object') {
					for (k in value) {
						if (Object.hasOwnProperty.call(value, k)) {
							v = walk(value, k);
							if (v !== undefined) {
								value[k] = v;
							} else {
								delete value[k];
							}
						}
					}
				}
				return reviver.call(holder, key, value);
			}


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

			cx.lastIndex = 0;
			if (cx.test(text)) {
				text = text.replace(cx, function (a) {
					return '\\u' +
						('0000' + a.charCodeAt(0).toString(16)).slice(-4);
				});
			}

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

			if (/^[\],:{}\s]*$/.
			test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
			replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
			replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

				j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

				return typeof reviver === 'function' ?
					walk({'': j}, '') : j;
			}

// If the text is not JSON parseable, then a SyntaxError is thrown.

			throw new SyntaxError('JSON.parse');
		};
	}
}());

// jsonlint.js
var jsonlint = function() {
	var a = !0,
		b = !1,
		c = {},
		d = function() {
			var a = {
					trace: function() {},
					yy: {},
					symbols_: {
						error: 2,
						JSONString: 3,
						STRING: 4,
						JSONNumber: 5,
						NUMBER: 6,
						JSONNullLiteral: 7,
						NULL: 8,
						JSONBooleanLiteral: 9,
						TRUE: 10,
						FALSE: 11,
						JSONText: 12,
						JSONValue: 13,
						EOF: 14,
						JSONObject: 15,
						JSONArray: 16,
						"{": 17,
						"}": 18,
						JSONMemberList: 19,
						JSONMember: 20,
						":": 21,
						",": 22,
						"[": 23,
						"]": 24,
						JSONElementList: 25,
						$accept: 0,
						$end: 1
					},
					terminals_: {
						2: "error",
						4: "<code>STRING</code>",
						6: "<code>NUMBER</code>",
						8: "<code>NULL</code>",
						10: "<code>TRUE</code>",
						11: "<code>FALSE</code>",
						14: "<code>EOF</code>",
						17: "<code>{</code>",
						18: "<code>}</code>",
						21: "<code>:</code>",
						22: "<code>,</code>",
						23: "<code>[</code>",
						24: "<code>]</code>"
					},
					productions_: [0, [3, 1],
						[5, 1],
						[7, 1],
						[9, 1],
						[9, 1],
						[12, 2],
						[13, 1],
						[13, 1],
						[13, 1],
						[13, 1],
						[13, 1],
						[13, 1],
						[15, 2],
						[15, 3],
						[20, 3],
						[19, 1],
						[19, 3],
						[16, 2],
						[16, 3],
						[25, 1],
						[25, 3]
					],
					performAction: function(b, c, d, e, f, g, h) {
						var i = g.length - 1;
						switch (f) {
							case 1:
								this.$ = b.replace(/\\(\\|")/g, "$1").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, " ").replace(/\\v/g, "").replace(/\\f/g, "\f").replace(/\\b/g, "\b");
								break;
							case 2:
								this.$ = Number(b);
								/*
                                if((this.$+"")!=(b+""))
                                {
                                    // Number(1.0) =》1, 这个问题没有修复。 弃用这个方法
                                    this.$ = b+"";
                                }*/

								break;
							case 3:
								this.$ = null;
								break;
							case 4:
								this.$ = !0;
								break;
							case 5:
								this.$ = !1;
								break;
							case 6:
								return this.$ = g[i - 1];
							case 13:
								this.$ = {};
								break;
							case 14:
								this.$ = g[i - 1];
								break;
							case 15:
								this.$ = [g[i - 2], g[i]];
								break;
							case 16:
								this.$ = {}, this.$[g[i][0]] = g[i][1];
								break;
							case 17:
								this.$ = g[i - 2], g[i - 2][g[i][0]] = g[i][1];
								break;
							case 18:
								this.$ = [];
								break;
							case 19:
								this.$ = g[i - 1];
								break;
							case 20:
								this.$ = [g[i]];
								break;
							case 21:
								this.$ = g[i - 2], g[i - 2].push(g[i])
						}
					},
					table: [{
						3: 5,
						4: [1, 12],
						5: 6,
						6: [1, 13],
						7: 3,
						8: [1, 9],
						9: 4,
						10: [1, 10],
						11: [1, 11],
						12: 1,
						13: 2,
						15: 7,
						16: 8,
						17: [1, 14],
						23: [1, 15]
					}, {
						1: [3]
					}, {
						14: [1, 16]
					}, {
						14: [2, 7],
						18: [2, 7],
						22: [2, 7],
						24: [2, 7]
					}, {
						14: [2, 8],
						18: [2, 8],
						22: [2, 8],
						24: [2, 8]
					}, {
						14: [2, 9],
						18: [2, 9],
						22: [2, 9],
						24: [2, 9]
					}, {
						14: [2, 10],
						18: [2, 10],
						22: [2, 10],
						24: [2, 10]
					}, {
						14: [2, 11],
						18: [2, 11],
						22: [2, 11],
						24: [2, 11]
					}, {
						14: [2, 12],
						18: [2, 12],
						22: [2, 12],
						24: [2, 12]
					}, {
						14: [2, 3],
						18: [2, 3],
						22: [2, 3],
						24: [2, 3]
					}, {
						14: [2, 4],
						18: [2, 4],
						22: [2, 4],
						24: [2, 4]
					}, {
						14: [2, 5],
						18: [2, 5],
						22: [2, 5],
						24: [2, 5]
					}, {
						14: [2, 1],
						18: [2, 1],
						21: [2, 1],
						22: [2, 1],
						24: [2, 1]
					}, {
						14: [2, 2],
						18: [2, 2],
						22: [2, 2],
						24: [2, 2]
					}, {
						3: 20,
						4: [1, 12],
						18: [1, 17],
						19: 18,
						20: 19
					}, {
						3: 5,
						4: [1, 12],
						5: 6,
						6: [1, 13],
						7: 3,
						8: [1, 9],
						9: 4,
						10: [1, 10],
						11: [1, 11],
						13: 23,
						15: 7,
						16: 8,
						17: [1, 14],
						23: [1, 15],
						24: [1, 21],
						25: 22
					}, {
						1: [2, 6]
					}, {
						14: [2, 13],
						18: [2, 13],
						22: [2, 13],
						24: [2, 13]
					}, {
						18: [1, 24],
						22: [1, 25]
					}, {
						18: [2, 16],
						22: [2, 16]
					}, {
						21: [1, 26]
					}, {
						14: [2, 18],
						18: [2, 18],
						22: [2, 18],
						24: [2, 18]
					}, {
						22: [1, 28],
						24: [1, 27]
					}, {
						22: [2, 20],
						24: [2, 20]
					}, {
						14: [2, 14],
						18: [2, 14],
						22: [2, 14],
						24: [2, 14]
					}, {
						3: 20,
						4: [1, 12],
						20: 29
					}, {
						3: 5,
						4: [1, 12],
						5: 6,
						6: [1, 13],
						7: 3,
						8: [1, 9],
						9: 4,
						10: [1, 10],
						11: [1, 11],
						13: 30,
						15: 7,
						16: 8,
						17: [1, 14],
						23: [1, 15]
					}, {
						14: [2, 19],
						18: [2, 19],
						22: [2, 19],
						24: [2, 19]
					}, {
						3: 5,
						4: [1, 12],
						5: 6,
						6: [1, 13],
						7: 3,
						8: [1, 9],
						9: 4,
						10: [1, 10],
						11: [1, 11],
						13: 31,
						15: 7,
						16: 8,
						17: [1, 14],
						23: [1, 15]
					}, {
						18: [2, 17],
						22: [2, 17]
					}, {
						18: [2, 15],
						22: [2, 15]
					}, {
						22: [2, 21],
						24: [2, 21]
					}],
					defaultActions: {
						16: [2, 6]
					},
					parseError: function(b, c) {
						throw new Error(b)
					},
					parse: function(b) {
						function o(a) {
							d.length = d.length - 2 * a, e.length = e.length - a, f.length = f.length - a
						}
						function p() {
							var a;
							return a = c.lexer.lex() || 1, typeof a != "number" && (a = c.symbols_[a] || a), a
						}
						var c = this,
							d = [0],
							e = [null],
							f = [],
							g = this.table,
							h = "",
							i = 0,
							j = 0,
							k = 0,
							l = 2,
							m = 1;
						this.lexer.setInput(b), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, typeof this.lexer.yylloc == "undefined" && (this.lexer.yylloc = {});
						var n = this.lexer.yylloc;
						f.push(n), typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
						var q, r, s, t, u, v, w = {},
							x, y, z, A;
						for (;;) {



							s = d[d.length - 1], this.defaultActions[s] ? t = this.defaultActions[s] : (q == null && (q = p()), t = g[s] && g[s][q]);

							if (typeof t == "undefined" || !t.length || !t[0]) {
								if (!k) {
									A = [];
									for (x in g[s]) this.terminals_[x] && x > 2 && A.push("'" + this.terminals_[x] + "'");
									var B = "";
									this.lexer.showPosition ? B = "在第"+ (i + 1)+"行发生解析错误 "+ ":<br/>" + this.lexer.showPosition() + "<br/>此处缺少" + A.join(", ") + "字符, 实际上是一个 '" + this.terminals_[q] + "'" : B = "在第"+ (i + 1)+"行发生解析错误 " + ": 本应该是 " + (q == 1 ? "结尾输入" : "'" + (this.terminals_[q] || q) + "'"), this.parseError(B, {
										text: this.lexer.match,
										token: this.terminals_[q] || q,
										line: this.lexer.yylineno,
										loc: n,
										expected: A
									})
								}
								if (k == 3) {
									if (q == m) throw new Error(B || "解析意外终止.");
									j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, n = this.lexer.yylloc, q = p()
								}
								for (;;) {
									if (l.toString() in g[s]) break;
									if (s == 0) throw new Error(B || "解析意外终止.");
									o(1), s = d[d.length - 1]
								}
								r = q, q = l, s = d[d.length - 1], t = g[s] && g[s][l], k = 3
							}
							if (t[0] instanceof Array && t.length > 1) throw new Error("解析错误: multiple actions possible at state: " + s + ", token: " + q);


							switch (t[0]) {
								case 1:
									d.push(q), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(t[1]), q = null, r ? (q = r, r = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, n = this.lexer.yylloc, k > 0 && k--);
									break;
								case 2:
									y = this.productions_[t[1]][1], w.$ = e[e.length - y], w._$ = {
										first_line: f[f.length - (y || 1)].first_line,
										last_line: f[f.length - 1].last_line,
										first_column: f[f.length - (y || 1)].first_column,
										last_column: f[f.length - 1].last_column
									};

									v = this.performAction.call(w, h, j, i, this.yy, t[1], e, f);

									if (typeof v != "undefined")
									{
										return v;
									}
									y && (d = d.slice(0, -1 * y * 2), e = e.slice(0, -1 * y), f = f.slice(0, -1 * y)), d.push(this.productions_[t[1]][0]), e.push(w.$), f.push(w._$), z = g[d[d.length - 2]][d[d.length - 1]], d.push(z);
									break;
								case 3:

									return !0
							}
						}

						return !0
					}
				},
				b = function() {
					var a = {
						EOF: 1,
						parseError: function(b, c) {
							if (!this.yy.parseError) throw new Error(b);
							this.yy.parseError(b, c)
						},
						setInput: function(a) {
							return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
								first_line: 1,
								first_column: 0,
								last_line: 1,
								last_column: 0
							}, this
						},
						input: function() {
							var a = this._input[0];
							this.yytext += a, this.yyleng++, this.match += a, this.matched += a;
							var b = a.match(/\n/);
							return b && this.yylineno++, this._input = this._input.slice(1), a
						},
						unput: function(a) {
							return this._input = a + this._input, this
						},
						more: function() {
							return this._more = !0, this
						},
						less: function(a) {
							this._input = this.match.slice(a) + this._input
						},
						pastInput: function() {
							var a = this.matched.substr(0, this.matched.length - this.match.length);
							return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "")
						},
						upcomingInput: function() {
							var a = this.match;
							return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "")
						},
						showPosition: function() {
							var a = this.pastInput(),
								b = (new Array(a.length + 1 - 5)).join("%yxpnbspyxp;");
							return "<code>"+ a + this.upcomingInput() + "</code><br/>" + b + '<i class="fa fa-arrow-up" style="color:green;"></i>'
						},
						next: function() {
							if (this.done) return this.EOF;
							this._input || (this.done = !0);
							var a, b, c, d, e, f;
							this._more || (this.yytext = "", this.match = "");
							var g = this._currentRules();
							for (var h = 0; h < g.length; h++) {
								c = this._input.match(this.rules[g[h]]);
								if (c && (!b || c[0].length > b[0].length)) {
									b = c, d = h;
									if (!this.options.flex) break
								}
							}
							if (b) {
								f = b[0].match(/\n.*/g), f && (this.yylineno += f.length), this.yylloc = {
									first_line: this.yylloc.last_line,
									last_line: this.yylineno + 1,
									first_column: this.yylloc.last_column,
									last_column: f ? f[f.length - 1].length - 1 : this.yylloc.last_column + b[0].length
								}, this.yytext += b[0], this.match += b[0], this.yyleng = this.yytext.length, this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], a = this.performAction.call(this, this.yy, this, g[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1);
								if (a) return a;
								return
							}
							if (this._input === "") return this.EOF;
							this.parseError("词汇错误发生在第" + (this.yylineno + 1) + "行. 不能识别的字符.<br/>" + this.showPosition(), {
								text: "",
								token: null,
								line: this.yylineno
							})
						},
						lex: function() {
							var b = this.next();
							return typeof b != "undefined" ? b : this.lex()
						},
						begin: function(b) {
							this.conditionStack.push(b)
						},
						popState: function() {
							return this.conditionStack.pop()
						},
						_currentRules: function() {
							return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
						},
						topState: function() {
							return this.conditionStack[this.conditionStack.length - 2]
						},
						pushState: function(b) {
							this.begin(b)
						}
					};
					return a.options = {}, a.performAction = function(b, c, d, e) {
						var f = e;
						switch (d) {
							case 0:
								break;
							case 1:
								return 6;
							case 2:
								return c.yytext = c.yytext.substr(1, c.yyleng - 2), 4;
							case 3:
								return 17;
							case 4:
								return 18;
							case 5:
								return 23;
							case 6:
								return 24;
							case 7:
								return 22;
							case 8:
								return 21;
							case 9:
								return 10;
							case 10:
								return 11;
							case 11:
								return 8;
							case 12:
								return 14;
							case 13:
								return "INVALID"
						}
					}, a.rules = [/^(?:\s+)/, /^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/, /^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/, /^(?:\{)/, /^(?:\})/, /^(?:\[)/, /^(?:\])/, /^(?:,)/, /^(?::)/, /^(?:true\b)/, /^(?:false\b)/, /^(?:null\b)/, /^(?:$)/, /^(?:.)/], a.conditions = {
						INITIAL: {
							rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
							inclusive: !0
						}
					}, a
				}();
			return a.lexer = b, a
		}();
	return typeof a != "undefined" && typeof c != "undefined" && (c.parser = d, c.parse = function() {
		return d.parse.apply(d, arguments)
	}, c.main = function(d) {
		if (!d[1]) throw new Error("Usage: " + d[0] + " FILE");
		if (typeof process != "undefined") var e = a("fs").readFileSync(a("path").join(process.cwd(), d[1]), "utf8");
		else var f = a("file").path(a("file").cwd()),
			e = f.join(d[1]).read({
				charset: "utf-8"
			});
		return c.parser.parse(e)
	}, typeof b != "undefined" && a.main === b && c.main(typeof process != "undefined" ? process.argv.slice(1) : a("system").args)), c
}();

// textarea-line-number
document.addEventListener('DOMContentLoaded', () => {
	const textarea = document.getElementById('json-src');
	const lineNumbersEle = document.getElementById('line-numbers');

	if (textarea && lineNumbersEle) {
		const textareaStyles = window.getComputedStyle(textarea);
		[
			'fontFamily',
			'fontSize',
			'fontWeight',
			'letterSpacing',
			'lineHeight',
			'padding',
		].forEach((property) => {
			lineNumbersEle.style[property] = textareaStyles[property];
		});

		const parseValue = (v) => v.endsWith('px') ? parseInt(v.slice(0, -2), 10) : 0;

		const font = `${textareaStyles.fontSize} ${textareaStyles.fontFamily}`;
		const paddingLeft = parseValue(textareaStyles.paddingLeft);
		const paddingRight = parseValue(textareaStyles.paddingRight);

		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		context.font = font;

		const calculateNumLines = (str) => {
			const textareaWidth = textarea.getBoundingClientRect().width - paddingLeft - paddingRight;
			const words = str.split(' ');
			let lineCount = 0;
			let currentLine = '';
			for (let i = 0; i < words.length; i++) {
				const wordWidth = context.measureText(words[i] + ' ').width;
				const lineWidth = context.measureText(currentLine).width;

				if (lineWidth + wordWidth > textareaWidth) {
					lineCount++;
					currentLine = words[i] + ' ';
				} else {
					currentLine += words[i] + ' ';
				}
			}

			if (currentLine.trim() !== '') {
				lineCount++;
			}

			return lineCount;
		};

		const calculateLineNumbers = () => {
			const lines = textarea.value.split('\n');
			const numLines = lines.map((line) => calculateNumLines(line));

			let lineNumbers = [];
			let i = 1;
			while (numLines.length > 0) {
				const numLinesOfSentence = numLines.shift();
				lineNumbers.push(i);
				if (numLinesOfSentence > 1) {
					Array(numLinesOfSentence - 1)
						.fill('')
						.forEach((_) => lineNumbers.push(''));
				}
				i++;
			}

			return lineNumbers;
		};

		const displayLineNumbers = () => {
			const lineNumbers = calculateLineNumbers();
			lineNumbersEle.innerHTML = Array.from({
				length: lineNumbers.length
			}, (_, i) => `<div>${lineNumbers[i] || '&nbsp;'}</div>`).join('');
		};

		textarea.addEventListener('input', () => {
			displayLineNumbers();
		});

		displayLineNumbers();

		const ro = new ResizeObserver(() => {
			const rect = textarea.getBoundingClientRect();
			lineNumbersEle.style.height = `${rect.height}px`;
			displayLineNumbers();
		});
		ro.observe(textarea);

		textarea.addEventListener('scroll', () => {
			lineNumbersEle.scrollTop = textarea.scrollTop;
		});
	}
});

// FileSaver.js
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}