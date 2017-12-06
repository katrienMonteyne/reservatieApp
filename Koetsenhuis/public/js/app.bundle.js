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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(22);
var toPrimitive = __webpack_require__(24);
var dP = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var koude_dranken = exports.koude_dranken = [{
    "naam": "Cola",
    "prijs": "€ 2,3"
}, {
    "naam": "Cola Light",
    "prijs": "€ 2,3"
}, {
    "naam": "Cola Zero",
    "prijs": "€ 2,3"
}, {
    "naam": "Fanta",
    "prijs": "€ 2,3"
}, {
    "naam": "Ice Tea",
    "prijs": "€ 2,3"
}, {
    "naam": "Sprite",
    "prijs": "€ 2,3"
}, {
    "naam": "Plat Water",
    "prijs": "€ 2,2"
}, {
    "naam": "Bruisend Water",
    "prijs": "€ 2,2"
}, {
    "naam": "Appelsap",
    "prijs": "€ 2,3"
}];

var warme_dranken = exports.warme_dranken = [{
    "naam": "Koffie",
    "prijs": "€ 2,5"
}, {
    "naam": "Thee natuur",
    "prijs": "€ 2,5"
}, {
    "naam": "Thee Citroen",
    "prijs": "€ 2,5"
}, {
    "naam": "Warme Chocolademelk",
    "prijs": "€ 2,7"
}, {
    "naam": "Koffie Verkeerd",
    "prijs": "€ 2,9"
}, {
    "naam": "Koffie cafeïnevrij",
    "prijs": "€ 2,5"
}];

var bieren = exports.bieren = [{
    "naam": "Jupiler",
    "prijs": "€ 2"
}, {
    "naam": "Hoegaarden",
    "prijs": "€ 2,2"
}, {
    "naam": "Kriek",
    "prijs": "€ 3"
}, {
    "naam": "Brugse zot Blond",
    "prijs": "€ 3,8"
}, {
    "naam": "Koffie Verkeerd",
    "prijs": "€ 2,9"
}, {
    "naam": "Koffie cafeïnevrij",
    "prijs": "€ 2,5"
}];

var sterke_dranken = exports.sterke_dranken = [{
    "naam": "Martini wit",
    "prijs": "€ 2"
}, {
    "naam": "Martini rood",
    "prijs": "€ 2,2"
}, {
    "naam": "Porto rood",
    "prijs": "€ 3"
}, {
    "naam": "Porto wit",
    "prijs": "€ 3,8"
}, {
    "naam": "Grand Marnier",
    "prijs": "€ 2,9"
}, {
    "naam": "BLABLA",
    "prijs": "€ 2,5"
}, {
    "naam": "Campari Orange",
    "prijs": "€ 5"
}, {
    "naam": "Cava",
    "prijs": "€ 4"
}];

var titlesOne = exports.titlesOne = ["Koude dranken", "Warme dranken", "Bieren", "Sterke dranken"];
var titlesTwo = exports.titlesTwo = ["Pannenkoeken", "Wafels", "Ijsjes", "Taarten"];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);
module.exports = __webpack_require__(26);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var docid = document.getElementsByTagName("body")[0].getAttribute("id");

if (docid == "menu") {
    var renderMenu = __webpack_require__(9);
}
if (docid == "index") {
    console.log("bla");
    initMap();
}

function initMap() {

    var element = document.getElementById("map");
    console.log(element);

    var uluru = {
        lat: 51.176629,
        lng: 3.153929
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
'user strict';

var _menu = __webpack_require__(11);

var _menu2 = _interopRequireDefault(_menu);

var _dummy = __webpack_require__(6);

var data = _interopRequireWildcard(_dummy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderMenu = function () {

    var ml = new _menu2.default();
    var tableOne = document.querySelectorAll(".menuTable")[0];
    var tableTwo = document.querySelectorAll(".menuTable")[1];

    tableOne.innerHTML = ml.renderHTML(0);
    tableTwo.innerHTML = ml.renderHTML(0);

    var buttonsOne = document.querySelectorAll(".menu_main_first .hexagon");
    var buttonsTwo = document.querySelectorAll(".menu_main_second .hexagon");
    var imagesOne = document.querySelectorAll(".menu_main_first .hexagon img");
    var imagesTwo = document.querySelectorAll(".menu_main_second .hexagon img");

    var allButtons = [buttonsOne, buttonsTwo];
    var allImages = [imagesOne, imagesTwo];

    allButtons.forEach(function (buttons) {

        buttons.forEach(function (button) {

            button.addEventListener("click", function (e) {
                return new function (e) {

                    //klasse naam veranderen => tekst zwart <-> grijs
                    buttons.forEach(function (button) {
                        button.classList.remove("selected");
                    });

                    // zwarte image verwijderen
                    /*    images.forEach((image) => {
                             let imgSource = image.getAttribute("src");
                            if (imgSource.includes("_selected")) {
                                 imgSource = imgSource.replace('_selected', "");
                                 image.setAttribute("src", imgSource);
                            }
                        });*/

                    // Menu lijst inladen van juiste categorie
                    var number = button.classList[2]; // juiste button ophalen
                    if (button.classList.contains("one")) {
                        // controleren welke tabel

                        var rendermenu = ml.renderHTML(number);
                        tableOne.innerHTML = rendermenu;
                        changeTitle(0, data.titlesOne, number);
                        deleteBlackImage(0, number);
                        addBlackImage(0, number);
                    } else if (button.classList.contains("two")) {

                        var _rendermenu = ml.renderHTML(number);
                        tableTwo.innerHTML = _rendermenu;
                        changeTitle(1, data.titlesTwo, number);
                        deleteBlackImage(1, number);
                        addBlackImage(1, number);
                    }

                    //klasse naam toevoegen => tekst zwart <-> grijs
                    button.classList.add("selected");
                }();
            });
        });
    });

    function changeTitle(tableNr, arrTitles, btnNr) {

        var titel = document.querySelectorAll(".menu_main_tekst h1")[tableNr];

        switch (btnNr) {
            case '0':
                titel.innerHTML = arrTitles[0];
                break;
            case '1':
                titel.innerHTML = arrTitles[1];
                break;
            case '2':
                titel.innerHTML = arrTitles[2];
                break;
            case '3':
                titel.innerHTML = arrTitles[3];
                break;
            default:
                titel.innerHTML = arrTitles[4];
                break;
        }
    }

    function deleteBlackImage(tableNr, number) {

        // zwarte image verwijderen

        allImages[tableNr].forEach(function (image) {

            var imgSource = image.getAttribute("src");
            if (imgSource.includes("_selected")) {

                imgSource = imgSource.replace('_selected', "");

                image.setAttribute("src", imgSource);
            }
        });
    }

    function addBlackImage(tableNr, number) {
        // Image veranderen
        //let img = document.querySelectorAll(".hexagon img")[number];

        var img = allImages[tableNr][parseInt(number)];

        var fullSource = "";
        var imgArray = img.getAttribute("src").split(".");
        imgArray.splice(1, 0, "_selected.");

        imgArray.forEach(function (string) {

            fullSource += string;
        });
        //console.log(fullSource);

        img.setAttribute("src", fullSource);
    }
}();

module.export = renderMenu;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(12);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(13);

var _createClass3 = _interopRequireDefault(_createClass2);

var _dummy = __webpack_require__(6);

var data = _interopRequireWildcard(_dummy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuList = function () {
    function MenuList() {
        var categorie = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        (0, _classCallCheck3.default)(this, MenuList);

        this.categorie = categorie;
    }

    (0, _createClass3.default)(MenuList, [{
        key: 'renderHTML',
        value: function renderHTML() {
            var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            var tableContent = "<tr> </tr>";

            var array = void 0;

            switch (number) {
                case '0':
                    array = data.koude_dranken;
                    break;
                case '1':
                    array = data.warme_dranken;
                    break;
                case '2':
                    array = data.bieren;
                    break;
                case '3':
                    array = data.sterke_dranken;
                    break;
                default:
                    array = data.koude_dranken;
                    break;
            }

            array.forEach(function (drank) {

                //console.log(drank);

                if (drank === undefined) {
                    console.log("bla");
                } else {
                    tableContent += "<tr> <td>" + drank.naam + "</td>";

                    tableContent += "<td>" + drank.prijs + "</td>";

                    tableContent += "</tr>";
                }
            });
            //console.log(tableContent)
            return tableContent;
        }
    }]);
    return MenuList;
}();

exports.default = MenuList;
;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(14);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(15), __esModule: true };

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(17);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(0), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var ctx = __webpack_require__(18);
var hide = __webpack_require__(20);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(19);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(0) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(5)(function () {
  return Object.defineProperty(__webpack_require__(23)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);