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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(6);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var docid = document.getElementsByTagName("body")[0].getAttribute("id");

if (docid == "menu") {
    var renderMenu = __webpack_require__(3);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
'user strict';

var _menu = __webpack_require__(5);

var _menu2 = _interopRequireDefault(_menu);

var _dummy = __webpack_require__(0);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dummy = __webpack_require__(0);

var data = _interopRequireWildcard(_dummy);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuList = function () {
    function MenuList() {
        var categorie = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        _classCallCheck(this, MenuList);

        this.categorie = categorie;
    }

    _createClass(MenuList, [{
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
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);