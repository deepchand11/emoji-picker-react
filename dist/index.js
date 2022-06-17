(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["EmojiPicker"] = factory(require("react"));
	else
		root["EmojiPicker"] = factory(root["react"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(18)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
  EMOJI_PROPERTY_NAME: 'n',
  EMOJI_PROPERTY_UNIFIED: 'u',
  EMOJI_PROPERTY_SKIN_VARIATIONS: 'v',
  EMOJI_PROPERTY_GROUP: 'g',
  GROUP_NAME_PEOPLE: 'smileys_people',
  GROUP_NAME_NATURE: 'animals_nature',
  GROUP_NAME_FOOD: 'food_drink',
  GROUP_NAME_TRAVEL: 'travel_places',
  GROUP_NAME_ACTIVITIES: 'activities',
  GROUP_NAME_OBJECTS: 'objects',
  GROUP_NAME_SYMBOLS: 'symbols',
  GROUP_NAME_FLAGS: 'flags',
  GROUP_NAME_RECENTLY_USED: 'recently_used'
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(20);

var iterableToArrayLimit = __webpack_require__(21);

var unsupportedIterableToArray = __webpack_require__(13);

var nonIterableRest = __webpack_require__(22);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(34);

var iterableToArray = __webpack_require__(35);

var unsupportedIterableToArray = __webpack_require__(13);

var nonIterableSpread = __webpack_require__(36);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}

module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 10 */
/***/ (function(module) {

module.exports = JSON.parse("[\"smileys_people\",\"animals_nature\",\"food_drink\",\"travel_places\",\"activities\",\"objects\",\"symbols\",\"flags\"]");

/***/ }),
/* 11 */
/***/ (function(module) {

module.exports = JSON.parse("{\"smileys_people\":[{\"n\":[\"grinning face\",\"grinning\"],\"u\":\"1f600\"},{\"n\":[\"smiling face with open mouth\",\"smiley\"],\"u\":\"1f603\"},{\"n\":[\"smiling face with open mouth and smiling eyes\",\"smile\"],\"u\":\"1f604\"},{\"n\":[\"grinning face with smiling eyes\",\"grin\"],\"u\":\"1f601\"},{\"n\":[\"smiling face with open mouth and tightly-closed eyes\",\"laughing\",\"satisfied\"],\"u\":\"1f606\"},{\"n\":[\"smiling face with open mouth and cold sweat\",\"sweat_smile\"],\"u\":\"1f605\"},{\"n\":[\"rolling on the floor laughing\",\"rolling_on_the_floor_laughing\"],\"u\":\"1f923\"},{\"n\":[\"face with tears of joy\",\"joy\"],\"u\":\"1f602\"},{\"n\":[\"slightly smiling face\",\"slightly_smiling_face\"],\"u\":\"1f642\"},{\"n\":[\"upside-down face\",\"upside_down_face\"],\"u\":\"1f643\"},{\"n\":[\"winking face\",\"wink\"],\"u\":\"1f609\"},{\"n\":[\"smiling face with smiling eyes\",\"blush\"],\"u\":\"1f60a\"},{\"n\":[\"smiling face with halo\",\"innocent\"],\"u\":\"1f607\"},{\"n\":[\"smiling face with smiling eyes and three hearts\",\"smiling_face_with_3_hearts\"],\"u\":\"1f970\"},{\"n\":[\"smiling face with heart-shaped eyes\",\"heart_eyes\"],\"u\":\"1f60d\"},{\"n\":[\"grinning face with star eyes\",\"star-struck\",\"grinning_face_with_star_eyes\"],\"u\":\"1f929\"},{\"n\":[\"face throwing a kiss\",\"kissing_heart\"],\"u\":\"1f618\"},{\"n\":[\"kissing face\",\"kissing\"],\"u\":\"1f617\"},{\"n\":[\"white smiling face\",\"relaxed\"],\"u\":\"263a-fe0f\"},{\"n\":[\"kissing face with closed eyes\",\"kissing_closed_eyes\"],\"u\":\"1f61a\"},{\"n\":[\"kissing face with smiling eyes\",\"kissing_smiling_eyes\"],\"u\":\"1f619\"},{\"n\":[\"smiling face with tear\",\"smiling_face_with_tear\"],\"u\":\"1f972\"},{\"n\":[\"face savouring delicious food\",\"yum\"],\"u\":\"1f60b\"},{\"n\":[\"face with stuck-out tongue\",\"stuck_out_tongue\"],\"u\":\"1f61b\"},{\"n\":[\"face with stuck-out tongue and winking eye\",\"stuck_out_tongue_winking_eye\"],\"u\":\"1f61c\"},{\"n\":[\"grinning face with one large and one small eye\",\"zany_face\",\"grinning_face_with_one_large_and_one_small_eye\"],\"u\":\"1f92a\"},{\"n\":[\"face with stuck-out tongue and tightly-closed eyes\",\"stuck_out_tongue_closed_eyes\"],\"u\":\"1f61d\"},{\"n\":[\"money-mouth face\",\"money_mouth_face\"],\"u\":\"1f911\"},{\"n\":[\"hugging face\",\"hugging_face\"],\"u\":\"1f917\"},{\"n\":[\"smiling face with smiling eyes and hand covering mouth\",\"face_with_hand_over_mouth\",\"smiling_face_with_smiling_eyes_and_hand_covering_mouth\"],\"u\":\"1f92d\"},{\"n\":[\"face with finger covering closed lips\",\"shushing_face\",\"face_with_finger_covering_closed_lips\"],\"u\":\"1f92b\"},{\"n\":[\"thinking face\",\"thinking_face\"],\"u\":\"1f914\"},{\"n\":[\"zipper-mouth face\",\"zipper_mouth_face\"],\"u\":\"1f910\"},{\"n\":[\"face with one eyebrow raised\",\"face_with_raised_eyebrow\",\"face_with_one_eyebrow_raised\"],\"u\":\"1f928\"},{\"n\":[\"neutral face\",\"neutral_face\"],\"u\":\"1f610\"},{\"n\":[\"expressionless face\",\"expressionless\"],\"u\":\"1f611\"},{\"n\":[\"face without mouth\",\"no_mouth\"],\"u\":\"1f636\"},{\"n\":[\"face in clouds\",\"face_in_clouds\"],\"u\":\"1f636-200d-1f32b-fe0f\"},{\"n\":[\"smirking face\",\"smirk\"],\"u\":\"1f60f\"},{\"n\":[\"unamused face\",\"unamused\"],\"u\":\"1f612\"},{\"n\":[\"face with rolling eyes\",\"face_with_rolling_eyes\"],\"u\":\"1f644\"},{\"n\":[\"grimacing face\",\"grimacing\"],\"u\":\"1f62c\"},{\"n\":[\"face exhaling\",\"face_exhaling\"],\"u\":\"1f62e-200d-1f4a8\"},{\"n\":[\"lying face\",\"lying_face\"],\"u\":\"1f925\"},{\"n\":[\"relieved face\",\"relieved\"],\"u\":\"1f60c\"},{\"n\":[\"pensive face\",\"pensive\"],\"u\":\"1f614\"},{\"n\":[\"sleepy face\",\"sleepy\"],\"u\":\"1f62a\"},{\"n\":[\"drooling face\",\"drooling_face\"],\"u\":\"1f924\"},{\"n\":[\"sleeping face\",\"sleeping\"],\"u\":\"1f634\"},{\"n\":[\"face with medical mask\",\"mask\"],\"u\":\"1f637\"},{\"n\":[\"face with thermometer\",\"face_with_thermometer\"],\"u\":\"1f912\"},{\"n\":[\"face with head-bandage\",\"face_with_head_bandage\"],\"u\":\"1f915\"},{\"n\":[\"nauseated face\",\"nauseated_face\"],\"u\":\"1f922\"},{\"n\":[\"face with open mouth vomiting\",\"face_vomiting\",\"face_with_open_mouth_vomiting\"],\"u\":\"1f92e\"},{\"n\":[\"sneezing face\",\"sneezing_face\"],\"u\":\"1f927\"},{\"n\":[\"overheated face\",\"hot_face\"],\"u\":\"1f975\"},{\"n\":[\"freezing face\",\"cold_face\"],\"u\":\"1f976\"},{\"n\":[\"face with uneven eyes and wavy mouth\",\"woozy_face\"],\"u\":\"1f974\"},{\"n\":[\"dizzy face\",\"dizzy_face\"],\"u\":\"1f635\"},{\"n\":[\"face with spiral eyes\",\"face_with_spiral_eyes\"],\"u\":\"1f635-200d-1f4ab\"},{\"n\":[\"shocked face with exploding head\",\"exploding_head\",\"shocked_face_with_exploding_head\"],\"u\":\"1f92f\"},{\"n\":[\"face with cowboy hat\",\"face_with_cowboy_hat\"],\"u\":\"1f920\"},{\"n\":[\"face with party horn and party hat\",\"partying_face\"],\"u\":\"1f973\"},{\"n\":[\"disguised face\",\"disguised_face\"],\"u\":\"1f978\"},{\"n\":[\"smiling face with sunglasses\",\"sunglasses\"],\"u\":\"1f60e\"},{\"n\":[\"nerd face\",\"nerd_face\"],\"u\":\"1f913\"},{\"n\":[\"face with monocle\",\"face_with_monocle\"],\"u\":\"1f9d0\"},{\"n\":[\"confused face\",\"confused\"],\"u\":\"1f615\"},{\"n\":[\"worried face\",\"worried\"],\"u\":\"1f61f\"},{\"n\":[\"slightly frowning face\",\"slightly_frowning_face\"],\"u\":\"1f641\"},{\"n\":[\"frowning face\",\"white_frowning_face\"],\"u\":\"2639-fe0f\"},{\"n\":[\"face with open mouth\",\"open_mouth\"],\"u\":\"1f62e\"},{\"n\":[\"hushed face\",\"hushed\"],\"u\":\"1f62f\"},{\"n\":[\"astonished face\",\"astonished\"],\"u\":\"1f632\"},{\"n\":[\"flushed face\",\"flushed\"],\"u\":\"1f633\"},{\"n\":[\"face with pleading eyes\",\"pleading_face\"],\"u\":\"1f97a\"},{\"n\":[\"frowning face with open mouth\",\"frowning\"],\"u\":\"1f626\"},{\"n\":[\"anguished face\",\"anguished\"],\"u\":\"1f627\"},{\"n\":[\"fearful face\",\"fearful\"],\"u\":\"1f628\"},{\"n\":[\"face with open mouth and cold sweat\",\"cold_sweat\"],\"u\":\"1f630\"},{\"n\":[\"disappointed but relieved face\",\"disappointed_relieved\"],\"u\":\"1f625\"},{\"n\":[\"crying face\",\"cry\"],\"u\":\"1f622\"},{\"n\":[\"loudly crying face\",\"sob\"],\"u\":\"1f62d\"},{\"n\":[\"face screaming in fear\",\"scream\"],\"u\":\"1f631\"},{\"n\":[\"confounded face\",\"confounded\"],\"u\":\"1f616\"},{\"n\":[\"persevering face\",\"persevere\"],\"u\":\"1f623\"},{\"n\":[\"disappointed face\",\"disappointed\"],\"u\":\"1f61e\"},{\"n\":[\"face with cold sweat\",\"sweat\"],\"u\":\"1f613\"},{\"n\":[\"weary face\",\"weary\"],\"u\":\"1f629\"},{\"n\":[\"tired face\",\"tired_face\"],\"u\":\"1f62b\"},{\"n\":[\"yawning face\",\"yawning_face\"],\"u\":\"1f971\"},{\"n\":[\"face with look of triumph\",\"triumph\"],\"u\":\"1f624\"},{\"n\":[\"pouting face\",\"rage\"],\"u\":\"1f621\"},{\"n\":[\"angry face\",\"angry\"],\"u\":\"1f620\"},{\"n\":[\"serious face with symbols covering mouth\",\"face_with_symbols_on_mouth\",\"serious_face_with_symbols_covering_mouth\"],\"u\":\"1f92c\"},{\"n\":[\"smiling face with horns\",\"smiling_imp\"],\"u\":\"1f608\"},{\"n\":[\"imp\"],\"u\":\"1f47f\"},{\"n\":[\"skull\"],\"u\":\"1f480\"},{\"n\":[\"skull and crossbones\",\"skull_and_crossbones\"],\"u\":\"2620-fe0f\"},{\"n\":[\"pile of poo\",\"hankey\",\"poop\",\"shit\"],\"u\":\"1f4a9\"},{\"n\":[\"clown face\",\"clown_face\"],\"u\":\"1f921\"},{\"n\":[\"japanese ogre\",\"japanese_ogre\"],\"u\":\"1f479\"},{\"n\":[\"japanese goblin\",\"japanese_goblin\"],\"u\":\"1f47a\"},{\"n\":[\"ghost\"],\"u\":\"1f47b\"},{\"n\":[\"extraterrestrial alien\",\"alien\"],\"u\":\"1f47d\"},{\"n\":[\"alien monster\",\"space_invader\"],\"u\":\"1f47e\"},{\"n\":[\"robot face\",\"robot_face\"],\"u\":\"1f916\"},{\"n\":[\"smiling cat face with open mouth\",\"smiley_cat\"],\"u\":\"1f63a\"},{\"n\":[\"grinning cat face with smiling eyes\",\"smile_cat\"],\"u\":\"1f638\"},{\"n\":[\"cat face with tears of joy\",\"joy_cat\"],\"u\":\"1f639\"},{\"n\":[\"smiling cat face with heart-shaped eyes\",\"heart_eyes_cat\"],\"u\":\"1f63b\"},{\"n\":[\"cat face with wry smile\",\"smirk_cat\"],\"u\":\"1f63c\"},{\"n\":[\"kissing cat face with closed eyes\",\"kissing_cat\"],\"u\":\"1f63d\"},{\"n\":[\"weary cat face\",\"scream_cat\"],\"u\":\"1f640\"},{\"n\":[\"crying cat face\",\"crying_cat_face\"],\"u\":\"1f63f\"},{\"n\":[\"pouting cat face\",\"pouting_cat\"],\"u\":\"1f63e\"},{\"n\":[\"see-no-evil monkey\",\"see_no_evil\"],\"u\":\"1f648\"},{\"n\":[\"hear-no-evil monkey\",\"hear_no_evil\"],\"u\":\"1f649\"},{\"n\":[\"speak-no-evil monkey\",\"speak_no_evil\"],\"u\":\"1f64a\"},{\"n\":[\"kiss mark\",\"kiss\"],\"u\":\"1f48b\"},{\"n\":[\"love letter\",\"love_letter\"],\"u\":\"1f48c\"},{\"n\":[\"heart with arrow\",\"cupid\"],\"u\":\"1f498\"},{\"n\":[\"heart with ribbon\",\"gift_heart\"],\"u\":\"1f49d\"},{\"n\":[\"sparkling heart\",\"sparkling_heart\"],\"u\":\"1f496\"},{\"n\":[\"growing heart\",\"heartpulse\"],\"u\":\"1f497\"},{\"n\":[\"beating heart\",\"heartbeat\"],\"u\":\"1f493\"},{\"n\":[\"revolving hearts\",\"revolving_hearts\"],\"u\":\"1f49e\"},{\"n\":[\"two hearts\",\"two_hearts\"],\"u\":\"1f495\"},{\"n\":[\"heart decoration\",\"heart_decoration\"],\"u\":\"1f49f\"},{\"n\":[\"heart exclamation\",\"heavy_heart_exclamation_mark_ornament\"],\"u\":\"2763-fe0f\"},{\"n\":[\"broken heart\",\"broken_heart\"],\"u\":\"1f494\"},{\"n\":[\"heart on fire\",\"heart_on_fire\"],\"u\":\"2764-fe0f-200d-1f525\"},{\"n\":[\"mending heart\",\"mending_heart\"],\"u\":\"2764-fe0f-200d-1fa79\"},{\"n\":[\"heavy black heart\",\"heart\"],\"u\":\"2764-fe0f\"},{\"n\":[\"orange heart\",\"orange_heart\"],\"u\":\"1f9e1\"},{\"n\":[\"yellow heart\",\"yellow_heart\"],\"u\":\"1f49b\"},{\"n\":[\"green heart\",\"green_heart\"],\"u\":\"1f49a\"},{\"n\":[\"blue heart\",\"blue_heart\"],\"u\":\"1f499\"},{\"n\":[\"purple heart\",\"purple_heart\"],\"u\":\"1f49c\"},{\"n\":[\"brown heart\",\"brown_heart\"],\"u\":\"1f90e\"},{\"n\":[\"black heart\",\"black_heart\"],\"u\":\"1f5a4\"},{\"n\":[\"white heart\",\"white_heart\"],\"u\":\"1f90d\"},{\"n\":[\"hundred points symbol\",\"100\"],\"u\":\"1f4af\"},{\"n\":[\"anger symbol\",\"anger\"],\"u\":\"1f4a2\"},{\"n\":[\"collision symbol\",\"boom\",\"collision\"],\"u\":\"1f4a5\"},{\"n\":[\"dizzy symbol\",\"dizzy\"],\"u\":\"1f4ab\"},{\"n\":[\"splashing sweat symbol\",\"sweat_drops\"],\"u\":\"1f4a6\"},{\"n\":[\"dash symbol\",\"dash\"],\"u\":\"1f4a8\"},{\"n\":[\"hole\"],\"u\":\"1f573-fe0f\"},{\"n\":[\"bomb\"],\"u\":\"1f4a3\"},{\"n\":[\"speech balloon\",\"speech_balloon\"],\"u\":\"1f4ac\"},{\"n\":[\"eye in speech bubble\",\"eye-in-speech-bubble\"],\"u\":\"1f441-fe0f-200d-1f5e8-fe0f\"},{\"n\":[\"left speech bubble\",\"left_speech_bubble\"],\"u\":\"1f5e8-fe0f\"},{\"n\":[\"right anger bubble\",\"right_anger_bubble\"],\"u\":\"1f5ef-fe0f\"},{\"n\":[\"thought balloon\",\"thought_balloon\"],\"u\":\"1f4ad\"},{\"n\":[\"sleeping symbol\",\"zzz\"],\"u\":\"1f4a4\"},{\"n\":[\"waving hand sign\",\"wave\"],\"u\":\"1f44b\",\"v\":[\"1f44b-1f3fb\",\"1f44b-1f3fc\",\"1f44b-1f3fd\",\"1f44b-1f3fe\",\"1f44b-1f3ff\"]},{\"n\":[\"raised back of hand\",\"raised_back_of_hand\"],\"u\":\"1f91a\",\"v\":[\"1f91a-1f3fb\",\"1f91a-1f3fc\",\"1f91a-1f3fd\",\"1f91a-1f3fe\",\"1f91a-1f3ff\"]},{\"n\":[\"hand with fingers splayed\",\"raised_hand_with_fingers_splayed\"],\"u\":\"1f590-fe0f\",\"v\":[\"1f590-1f3fb\",\"1f590-1f3fc\",\"1f590-1f3fd\",\"1f590-1f3fe\",\"1f590-1f3ff\"]},{\"n\":[\"raised hand\",\"hand\",\"raised_hand\"],\"u\":\"270b\",\"v\":[\"270b-1f3fb\",\"270b-1f3fc\",\"270b-1f3fd\",\"270b-1f3fe\",\"270b-1f3ff\"]},{\"n\":[\"raised hand with part between middle and ring fingers\",\"spock-hand\"],\"u\":\"1f596\",\"v\":[\"1f596-1f3fb\",\"1f596-1f3fc\",\"1f596-1f3fd\",\"1f596-1f3fe\",\"1f596-1f3ff\"]},{\"n\":[\"ok hand sign\",\"ok_hand\"],\"u\":\"1f44c\",\"v\":[\"1f44c-1f3fb\",\"1f44c-1f3fc\",\"1f44c-1f3fd\",\"1f44c-1f3fe\",\"1f44c-1f3ff\"]},{\"n\":[\"pinched fingers\",\"pinched_fingers\"],\"u\":\"1f90c\",\"v\":[\"1f90c-1f3fb\",\"1f90c-1f3fc\",\"1f90c-1f3fd\",\"1f90c-1f3fe\",\"1f90c-1f3ff\"]},{\"n\":[\"pinching hand\",\"pinching_hand\"],\"u\":\"1f90f\",\"v\":[\"1f90f-1f3fb\",\"1f90f-1f3fc\",\"1f90f-1f3fd\",\"1f90f-1f3fe\",\"1f90f-1f3ff\"]},{\"n\":[\"victory hand\",\"v\"],\"u\":\"270c-fe0f\",\"v\":[\"270c-1f3fb\",\"270c-1f3fc\",\"270c-1f3fd\",\"270c-1f3fe\",\"270c-1f3ff\"]},{\"n\":[\"hand with index and middle fingers crossed\",\"crossed_fingers\",\"hand_with_index_and_middle_fingers_crossed\"],\"u\":\"1f91e\",\"v\":[\"1f91e-1f3fb\",\"1f91e-1f3fc\",\"1f91e-1f3fd\",\"1f91e-1f3fe\",\"1f91e-1f3ff\"]},{\"n\":[\"i love you hand sign\",\"i_love_you_hand_sign\"],\"u\":\"1f91f\",\"v\":[\"1f91f-1f3fb\",\"1f91f-1f3fc\",\"1f91f-1f3fd\",\"1f91f-1f3fe\",\"1f91f-1f3ff\"]},{\"n\":[\"sign of the horns\",\"the_horns\",\"sign_of_the_horns\"],\"u\":\"1f918\",\"v\":[\"1f918-1f3fb\",\"1f918-1f3fc\",\"1f918-1f3fd\",\"1f918-1f3fe\",\"1f918-1f3ff\"]},{\"n\":[\"call me hand\",\"call_me_hand\"],\"u\":\"1f919\",\"v\":[\"1f919-1f3fb\",\"1f919-1f3fc\",\"1f919-1f3fd\",\"1f919-1f3fe\",\"1f919-1f3ff\"]},{\"n\":[\"white left pointing backhand index\",\"point_left\"],\"u\":\"1f448\",\"v\":[\"1f448-1f3fb\",\"1f448-1f3fc\",\"1f448-1f3fd\",\"1f448-1f3fe\",\"1f448-1f3ff\"]},{\"n\":[\"white right pointing backhand index\",\"point_right\"],\"u\":\"1f449\",\"v\":[\"1f449-1f3fb\",\"1f449-1f3fc\",\"1f449-1f3fd\",\"1f449-1f3fe\",\"1f449-1f3ff\"]},{\"n\":[\"white up pointing backhand index\",\"point_up_2\"],\"u\":\"1f446\",\"v\":[\"1f446-1f3fb\",\"1f446-1f3fc\",\"1f446-1f3fd\",\"1f446-1f3fe\",\"1f446-1f3ff\"]},{\"n\":[\"reversed hand with middle finger extended\",\"middle_finger\",\"reversed_hand_with_middle_finger_extended\"],\"u\":\"1f595\",\"v\":[\"1f595-1f3fb\",\"1f595-1f3fc\",\"1f595-1f3fd\",\"1f595-1f3fe\",\"1f595-1f3ff\"]},{\"n\":[\"white down pointing backhand index\",\"point_down\"],\"u\":\"1f447\",\"v\":[\"1f447-1f3fb\",\"1f447-1f3fc\",\"1f447-1f3fd\",\"1f447-1f3fe\",\"1f447-1f3ff\"]},{\"n\":[\"white up pointing index\",\"point_up\"],\"u\":\"261d-fe0f\",\"v\":[\"261d-1f3fb\",\"261d-1f3fc\",\"261d-1f3fd\",\"261d-1f3fe\",\"261d-1f3ff\"]},{\"n\":[\"thumbs up sign\",\"+1\",\"thumbsup\"],\"u\":\"1f44d\",\"v\":[\"1f44d-1f3fb\",\"1f44d-1f3fc\",\"1f44d-1f3fd\",\"1f44d-1f3fe\",\"1f44d-1f3ff\"]},{\"n\":[\"thumbs down sign\",\"-1\",\"thumbsdown\"],\"u\":\"1f44e\",\"v\":[\"1f44e-1f3fb\",\"1f44e-1f3fc\",\"1f44e-1f3fd\",\"1f44e-1f3fe\",\"1f44e-1f3ff\"]},{\"n\":[\"raised fist\",\"fist\"],\"u\":\"270a\",\"v\":[\"270a-1f3fb\",\"270a-1f3fc\",\"270a-1f3fd\",\"270a-1f3fe\",\"270a-1f3ff\"]},{\"n\":[\"fisted hand sign\",\"facepunch\",\"punch\"],\"u\":\"1f44a\",\"v\":[\"1f44a-1f3fb\",\"1f44a-1f3fc\",\"1f44a-1f3fd\",\"1f44a-1f3fe\",\"1f44a-1f3ff\"]},{\"n\":[\"left-facing fist\",\"left-facing_fist\"],\"u\":\"1f91b\",\"v\":[\"1f91b-1f3fb\",\"1f91b-1f3fc\",\"1f91b-1f3fd\",\"1f91b-1f3fe\",\"1f91b-1f3ff\"]},{\"n\":[\"right-facing fist\",\"right-facing_fist\"],\"u\":\"1f91c\",\"v\":[\"1f91c-1f3fb\",\"1f91c-1f3fc\",\"1f91c-1f3fd\",\"1f91c-1f3fe\",\"1f91c-1f3ff\"]},{\"n\":[\"clapping hands sign\",\"clap\"],\"u\":\"1f44f\",\"v\":[\"1f44f-1f3fb\",\"1f44f-1f3fc\",\"1f44f-1f3fd\",\"1f44f-1f3fe\",\"1f44f-1f3ff\"]},{\"n\":[\"person raising both hands in celebration\",\"raised_hands\"],\"u\":\"1f64c\",\"v\":[\"1f64c-1f3fb\",\"1f64c-1f3fc\",\"1f64c-1f3fd\",\"1f64c-1f3fe\",\"1f64c-1f3ff\"]},{\"n\":[\"open hands sign\",\"open_hands\"],\"u\":\"1f450\",\"v\":[\"1f450-1f3fb\",\"1f450-1f3fc\",\"1f450-1f3fd\",\"1f450-1f3fe\",\"1f450-1f3ff\"]},{\"n\":[\"palms up together\",\"palms_up_together\"],\"u\":\"1f932\",\"v\":[\"1f932-1f3fb\",\"1f932-1f3fc\",\"1f932-1f3fd\",\"1f932-1f3fe\",\"1f932-1f3ff\"]},{\"n\":[\"handshake\"],\"u\":\"1f91d\"},{\"n\":[\"person with folded hands\",\"pray\"],\"u\":\"1f64f\",\"v\":[\"1f64f-1f3fb\",\"1f64f-1f3fc\",\"1f64f-1f3fd\",\"1f64f-1f3fe\",\"1f64f-1f3ff\"]},{\"n\":[\"writing hand\",\"writing_hand\"],\"u\":\"270d-fe0f\",\"v\":[\"270d-1f3fb\",\"270d-1f3fc\",\"270d-1f3fd\",\"270d-1f3fe\",\"270d-1f3ff\"]},{\"n\":[\"nail polish\",\"nail_care\"],\"u\":\"1f485\",\"v\":[\"1f485-1f3fb\",\"1f485-1f3fc\",\"1f485-1f3fd\",\"1f485-1f3fe\",\"1f485-1f3ff\"]},{\"n\":[\"selfie\"],\"u\":\"1f933\",\"v\":[\"1f933-1f3fb\",\"1f933-1f3fc\",\"1f933-1f3fd\",\"1f933-1f3fe\",\"1f933-1f3ff\"]},{\"n\":[\"flexed biceps\",\"muscle\"],\"u\":\"1f4aa\",\"v\":[\"1f4aa-1f3fb\",\"1f4aa-1f3fc\",\"1f4aa-1f3fd\",\"1f4aa-1f3fe\",\"1f4aa-1f3ff\"]},{\"n\":[\"mechanical arm\",\"mechanical_arm\"],\"u\":\"1f9be\"},{\"n\":[\"mechanical leg\",\"mechanical_leg\"],\"u\":\"1f9bf\"},{\"n\":[\"leg\"],\"u\":\"1f9b5\",\"v\":[\"1f9b5-1f3fb\",\"1f9b5-1f3fc\",\"1f9b5-1f3fd\",\"1f9b5-1f3fe\",\"1f9b5-1f3ff\"]},{\"n\":[\"foot\"],\"u\":\"1f9b6\",\"v\":[\"1f9b6-1f3fb\",\"1f9b6-1f3fc\",\"1f9b6-1f3fd\",\"1f9b6-1f3fe\",\"1f9b6-1f3ff\"]},{\"n\":[\"ear\"],\"u\":\"1f442\",\"v\":[\"1f442-1f3fb\",\"1f442-1f3fc\",\"1f442-1f3fd\",\"1f442-1f3fe\",\"1f442-1f3ff\"]},{\"n\":[\"ear with hearing aid\",\"ear_with_hearing_aid\"],\"u\":\"1f9bb\",\"v\":[\"1f9bb-1f3fb\",\"1f9bb-1f3fc\",\"1f9bb-1f3fd\",\"1f9bb-1f3fe\",\"1f9bb-1f3ff\"]},{\"n\":[\"nose\"],\"u\":\"1f443\",\"v\":[\"1f443-1f3fb\",\"1f443-1f3fc\",\"1f443-1f3fd\",\"1f443-1f3fe\",\"1f443-1f3ff\"]},{\"n\":[\"brain\"],\"u\":\"1f9e0\"},{\"n\":[\"anatomical heart\",\"anatomical_heart\"],\"u\":\"1fac0\"},{\"n\":[\"lungs\"],\"u\":\"1fac1\"},{\"n\":[\"tooth\"],\"u\":\"1f9b7\"},{\"n\":[\"bone\"],\"u\":\"1f9b4\"},{\"n\":[\"eyes\"],\"u\":\"1f440\"},{\"n\":[\"eye\"],\"u\":\"1f441-fe0f\"},{\"n\":[\"tongue\"],\"u\":\"1f445\"},{\"n\":[\"mouth\",\"lips\"],\"u\":\"1f444\"},{\"n\":[\"baby\"],\"u\":\"1f476\",\"v\":[\"1f476-1f3fb\",\"1f476-1f3fc\",\"1f476-1f3fd\",\"1f476-1f3fe\",\"1f476-1f3ff\"]},{\"n\":[\"child\"],\"u\":\"1f9d2\",\"v\":[\"1f9d2-1f3fb\",\"1f9d2-1f3fc\",\"1f9d2-1f3fd\",\"1f9d2-1f3fe\",\"1f9d2-1f3ff\"]},{\"n\":[\"boy\"],\"u\":\"1f466\",\"v\":[\"1f466-1f3fb\",\"1f466-1f3fc\",\"1f466-1f3fd\",\"1f466-1f3fe\",\"1f466-1f3ff\"]},{\"n\":[\"girl\"],\"u\":\"1f467\",\"v\":[\"1f467-1f3fb\",\"1f467-1f3fc\",\"1f467-1f3fd\",\"1f467-1f3fe\",\"1f467-1f3ff\"]},{\"n\":[\"adult\"],\"u\":\"1f9d1\",\"v\":[\"1f9d1-1f3fb\",\"1f9d1-1f3fc\",\"1f9d1-1f3fd\",\"1f9d1-1f3fe\",\"1f9d1-1f3ff\"]},{\"n\":[\"person with blond hair\",\"person_with_blond_hair\"],\"u\":\"1f471\",\"v\":[\"1f471-1f3fb\",\"1f471-1f3fc\",\"1f471-1f3fd\",\"1f471-1f3fe\",\"1f471-1f3ff\"]},{\"n\":[\"man\"],\"u\":\"1f468\",\"v\":[\"1f468-1f3fb\",\"1f468-1f3fc\",\"1f468-1f3fd\",\"1f468-1f3fe\",\"1f468-1f3ff\"]},{\"n\":[\"bearded person\",\"bearded_person\"],\"u\":\"1f9d4\",\"v\":[\"1f9d4-1f3fb\",\"1f9d4-1f3fc\",\"1f9d4-1f3fd\",\"1f9d4-1f3fe\",\"1f9d4-1f3ff\"]},{\"n\":[\"man: beard\",\"man_with_beard\"],\"u\":\"1f9d4-200d-2642-fe0f\",\"v\":[\"1f9d4-1f3fb-200d-2642-fe0f\",\"1f9d4-1f3fc-200d-2642-fe0f\",\"1f9d4-1f3fd-200d-2642-fe0f\",\"1f9d4-1f3fe-200d-2642-fe0f\",\"1f9d4-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman: beard\",\"woman_with_beard\"],\"u\":\"1f9d4-200d-2640-fe0f\",\"v\":[\"1f9d4-1f3fb-200d-2640-fe0f\",\"1f9d4-1f3fc-200d-2640-fe0f\",\"1f9d4-1f3fd-200d-2640-fe0f\",\"1f9d4-1f3fe-200d-2640-fe0f\",\"1f9d4-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"man: red hair\",\"red_haired_man\"],\"u\":\"1f468-200d-1f9b0\",\"v\":[\"1f468-1f3fb-200d-1f9b0\",\"1f468-1f3fc-200d-1f9b0\",\"1f468-1f3fd-200d-1f9b0\",\"1f468-1f3fe-200d-1f9b0\",\"1f468-1f3ff-200d-1f9b0\"]},{\"n\":[\"man: curly hair\",\"curly_haired_man\"],\"u\":\"1f468-200d-1f9b1\",\"v\":[\"1f468-1f3fb-200d-1f9b1\",\"1f468-1f3fc-200d-1f9b1\",\"1f468-1f3fd-200d-1f9b1\",\"1f468-1f3fe-200d-1f9b1\",\"1f468-1f3ff-200d-1f9b1\"]},{\"n\":[\"man: white hair\",\"white_haired_man\"],\"u\":\"1f468-200d-1f9b3\",\"v\":[\"1f468-1f3fb-200d-1f9b3\",\"1f468-1f3fc-200d-1f9b3\",\"1f468-1f3fd-200d-1f9b3\",\"1f468-1f3fe-200d-1f9b3\",\"1f468-1f3ff-200d-1f9b3\"]},{\"n\":[\"man: bald\",\"bald_man\"],\"u\":\"1f468-200d-1f9b2\",\"v\":[\"1f468-1f3fb-200d-1f9b2\",\"1f468-1f3fc-200d-1f9b2\",\"1f468-1f3fd-200d-1f9b2\",\"1f468-1f3fe-200d-1f9b2\",\"1f468-1f3ff-200d-1f9b2\"]},{\"n\":[\"woman\"],\"u\":\"1f469\",\"v\":[\"1f469-1f3fb\",\"1f469-1f3fc\",\"1f469-1f3fd\",\"1f469-1f3fe\",\"1f469-1f3ff\"]},{\"n\":[\"woman: red hair\",\"red_haired_woman\"],\"u\":\"1f469-200d-1f9b0\",\"v\":[\"1f469-1f3fb-200d-1f9b0\",\"1f469-1f3fc-200d-1f9b0\",\"1f469-1f3fd-200d-1f9b0\",\"1f469-1f3fe-200d-1f9b0\",\"1f469-1f3ff-200d-1f9b0\"]},{\"n\":[\"person: red hair\",\"red_haired_person\"],\"u\":\"1f9d1-200d-1f9b0\",\"v\":[\"1f9d1-1f3fb-200d-1f9b0\",\"1f9d1-1f3fc-200d-1f9b0\",\"1f9d1-1f3fd-200d-1f9b0\",\"1f9d1-1f3fe-200d-1f9b0\",\"1f9d1-1f3ff-200d-1f9b0\"]},{\"n\":[\"woman: curly hair\",\"curly_haired_woman\"],\"u\":\"1f469-200d-1f9b1\",\"v\":[\"1f469-1f3fb-200d-1f9b1\",\"1f469-1f3fc-200d-1f9b1\",\"1f469-1f3fd-200d-1f9b1\",\"1f469-1f3fe-200d-1f9b1\",\"1f469-1f3ff-200d-1f9b1\"]},{\"n\":[\"person: curly hair\",\"curly_haired_person\"],\"u\":\"1f9d1-200d-1f9b1\",\"v\":[\"1f9d1-1f3fb-200d-1f9b1\",\"1f9d1-1f3fc-200d-1f9b1\",\"1f9d1-1f3fd-200d-1f9b1\",\"1f9d1-1f3fe-200d-1f9b1\",\"1f9d1-1f3ff-200d-1f9b1\"]},{\"n\":[\"woman: white hair\",\"white_haired_woman\"],\"u\":\"1f469-200d-1f9b3\",\"v\":[\"1f469-1f3fb-200d-1f9b3\",\"1f469-1f3fc-200d-1f9b3\",\"1f469-1f3fd-200d-1f9b3\",\"1f469-1f3fe-200d-1f9b3\",\"1f469-1f3ff-200d-1f9b3\"]},{\"n\":[\"person: white hair\",\"white_haired_person\"],\"u\":\"1f9d1-200d-1f9b3\",\"v\":[\"1f9d1-1f3fb-200d-1f9b3\",\"1f9d1-1f3fc-200d-1f9b3\",\"1f9d1-1f3fd-200d-1f9b3\",\"1f9d1-1f3fe-200d-1f9b3\",\"1f9d1-1f3ff-200d-1f9b3\"]},{\"n\":[\"woman: bald\",\"bald_woman\"],\"u\":\"1f469-200d-1f9b2\",\"v\":[\"1f469-1f3fb-200d-1f9b2\",\"1f469-1f3fc-200d-1f9b2\",\"1f469-1f3fd-200d-1f9b2\",\"1f469-1f3fe-200d-1f9b2\",\"1f469-1f3ff-200d-1f9b2\"]},{\"n\":[\"person: bald\",\"bald_person\"],\"u\":\"1f9d1-200d-1f9b2\",\"v\":[\"1f9d1-1f3fb-200d-1f9b2\",\"1f9d1-1f3fc-200d-1f9b2\",\"1f9d1-1f3fd-200d-1f9b2\",\"1f9d1-1f3fe-200d-1f9b2\",\"1f9d1-1f3ff-200d-1f9b2\"]},{\"n\":[\"woman: blond hair\",\"blond-haired-woman\"],\"u\":\"1f471-200d-2640-fe0f\",\"v\":[\"1f471-1f3fb-200d-2640-fe0f\",\"1f471-1f3fc-200d-2640-fe0f\",\"1f471-1f3fd-200d-2640-fe0f\",\"1f471-1f3fe-200d-2640-fe0f\",\"1f471-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"man: blond hair\",\"blond-haired-man\"],\"u\":\"1f471-200d-2642-fe0f\",\"v\":[\"1f471-1f3fb-200d-2642-fe0f\",\"1f471-1f3fc-200d-2642-fe0f\",\"1f471-1f3fd-200d-2642-fe0f\",\"1f471-1f3fe-200d-2642-fe0f\",\"1f471-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"older adult\",\"older_adult\"],\"u\":\"1f9d3\",\"v\":[\"1f9d3-1f3fb\",\"1f9d3-1f3fc\",\"1f9d3-1f3fd\",\"1f9d3-1f3fe\",\"1f9d3-1f3ff\"]},{\"n\":[\"older man\",\"older_man\"],\"u\":\"1f474\",\"v\":[\"1f474-1f3fb\",\"1f474-1f3fc\",\"1f474-1f3fd\",\"1f474-1f3fe\",\"1f474-1f3ff\"]},{\"n\":[\"older woman\",\"older_woman\"],\"u\":\"1f475\",\"v\":[\"1f475-1f3fb\",\"1f475-1f3fc\",\"1f475-1f3fd\",\"1f475-1f3fe\",\"1f475-1f3ff\"]},{\"n\":[\"person frowning\",\"person_frowning\"],\"u\":\"1f64d\",\"v\":[\"1f64d-1f3fb\",\"1f64d-1f3fc\",\"1f64d-1f3fd\",\"1f64d-1f3fe\",\"1f64d-1f3ff\"]},{\"n\":[\"man frowning\",\"man-frowning\"],\"u\":\"1f64d-200d-2642-fe0f\",\"v\":[\"1f64d-1f3fb-200d-2642-fe0f\",\"1f64d-1f3fc-200d-2642-fe0f\",\"1f64d-1f3fd-200d-2642-fe0f\",\"1f64d-1f3fe-200d-2642-fe0f\",\"1f64d-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman frowning\",\"woman-frowning\"],\"u\":\"1f64d-200d-2640-fe0f\",\"v\":[\"1f64d-1f3fb-200d-2640-fe0f\",\"1f64d-1f3fc-200d-2640-fe0f\",\"1f64d-1f3fd-200d-2640-fe0f\",\"1f64d-1f3fe-200d-2640-fe0f\",\"1f64d-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"person with pouting face\",\"person_with_pouting_face\"],\"u\":\"1f64e\",\"v\":[\"1f64e-1f3fb\",\"1f64e-1f3fc\",\"1f64e-1f3fd\",\"1f64e-1f3fe\",\"1f64e-1f3ff\"]},{\"n\":[\"man pouting\",\"man-pouting\"],\"u\":\"1f64e-200d-2642-fe0f\",\"v\":[\"1f64e-1f3fb-200d-2642-fe0f\",\"1f64e-1f3fc-200d-2642-fe0f\",\"1f64e-1f3fd-200d-2642-fe0f\",\"1f64e-1f3fe-200d-2642-fe0f\",\"1f64e-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman pouting\",\"woman-pouting\"],\"u\":\"1f64e-200d-2640-fe0f\",\"v\":[\"1f64e-1f3fb-200d-2640-fe0f\",\"1f64e-1f3fc-200d-2640-fe0f\",\"1f64e-1f3fd-200d-2640-fe0f\",\"1f64e-1f3fe-200d-2640-fe0f\",\"1f64e-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"face with no good gesture\",\"no_good\"],\"u\":\"1f645\",\"v\":[\"1f645-1f3fb\",\"1f645-1f3fc\",\"1f645-1f3fd\",\"1f645-1f3fe\",\"1f645-1f3ff\"]},{\"n\":[\"man gesturing no\",\"man-gesturing-no\"],\"u\":\"1f645-200d-2642-fe0f\",\"v\":[\"1f645-1f3fb-200d-2642-fe0f\",\"1f645-1f3fc-200d-2642-fe0f\",\"1f645-1f3fd-200d-2642-fe0f\",\"1f645-1f3fe-200d-2642-fe0f\",\"1f645-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman gesturing no\",\"woman-gesturing-no\"],\"u\":\"1f645-200d-2640-fe0f\",\"v\":[\"1f645-1f3fb-200d-2640-fe0f\",\"1f645-1f3fc-200d-2640-fe0f\",\"1f645-1f3fd-200d-2640-fe0f\",\"1f645-1f3fe-200d-2640-fe0f\",\"1f645-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"face with ok gesture\",\"ok_woman\"],\"u\":\"1f646\",\"v\":[\"1f646-1f3fb\",\"1f646-1f3fc\",\"1f646-1f3fd\",\"1f646-1f3fe\",\"1f646-1f3ff\"]},{\"n\":[\"man gesturing ok\",\"man-gesturing-ok\"],\"u\":\"1f646-200d-2642-fe0f\",\"v\":[\"1f646-1f3fb-200d-2642-fe0f\",\"1f646-1f3fc-200d-2642-fe0f\",\"1f646-1f3fd-200d-2642-fe0f\",\"1f646-1f3fe-200d-2642-fe0f\",\"1f646-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman gesturing ok\",\"woman-gesturing-ok\"],\"u\":\"1f646-200d-2640-fe0f\",\"v\":[\"1f646-1f3fb-200d-2640-fe0f\",\"1f646-1f3fc-200d-2640-fe0f\",\"1f646-1f3fd-200d-2640-fe0f\",\"1f646-1f3fe-200d-2640-fe0f\",\"1f646-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"information desk person\",\"information_desk_person\"],\"u\":\"1f481\",\"v\":[\"1f481-1f3fb\",\"1f481-1f3fc\",\"1f481-1f3fd\",\"1f481-1f3fe\",\"1f481-1f3ff\"]},{\"n\":[\"man tipping hand\",\"man-tipping-hand\"],\"u\":\"1f481-200d-2642-fe0f\",\"v\":[\"1f481-1f3fb-200d-2642-fe0f\",\"1f481-1f3fc-200d-2642-fe0f\",\"1f481-1f3fd-200d-2642-fe0f\",\"1f481-1f3fe-200d-2642-fe0f\",\"1f481-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman tipping hand\",\"woman-tipping-hand\"],\"u\":\"1f481-200d-2640-fe0f\",\"v\":[\"1f481-1f3fb-200d-2640-fe0f\",\"1f481-1f3fc-200d-2640-fe0f\",\"1f481-1f3fd-200d-2640-fe0f\",\"1f481-1f3fe-200d-2640-fe0f\",\"1f481-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"happy person raising one hand\",\"raising_hand\"],\"u\":\"1f64b\",\"v\":[\"1f64b-1f3fb\",\"1f64b-1f3fc\",\"1f64b-1f3fd\",\"1f64b-1f3fe\",\"1f64b-1f3ff\"]},{\"n\":[\"man raising hand\",\"man-raising-hand\"],\"u\":\"1f64b-200d-2642-fe0f\",\"v\":[\"1f64b-1f3fb-200d-2642-fe0f\",\"1f64b-1f3fc-200d-2642-fe0f\",\"1f64b-1f3fd-200d-2642-fe0f\",\"1f64b-1f3fe-200d-2642-fe0f\",\"1f64b-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman raising hand\",\"woman-raising-hand\"],\"u\":\"1f64b-200d-2640-fe0f\",\"v\":[\"1f64b-1f3fb-200d-2640-fe0f\",\"1f64b-1f3fc-200d-2640-fe0f\",\"1f64b-1f3fd-200d-2640-fe0f\",\"1f64b-1f3fe-200d-2640-fe0f\",\"1f64b-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"deaf person\",\"deaf_person\"],\"u\":\"1f9cf\",\"v\":[\"1f9cf-1f3fb\",\"1f9cf-1f3fc\",\"1f9cf-1f3fd\",\"1f9cf-1f3fe\",\"1f9cf-1f3ff\"]},{\"n\":[\"deaf man\",\"deaf_man\"],\"u\":\"1f9cf-200d-2642-fe0f\",\"v\":[\"1f9cf-1f3fb-200d-2642-fe0f\",\"1f9cf-1f3fc-200d-2642-fe0f\",\"1f9cf-1f3fd-200d-2642-fe0f\",\"1f9cf-1f3fe-200d-2642-fe0f\",\"1f9cf-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"deaf woman\",\"deaf_woman\"],\"u\":\"1f9cf-200d-2640-fe0f\",\"v\":[\"1f9cf-1f3fb-200d-2640-fe0f\",\"1f9cf-1f3fc-200d-2640-fe0f\",\"1f9cf-1f3fd-200d-2640-fe0f\",\"1f9cf-1f3fe-200d-2640-fe0f\",\"1f9cf-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"person bowing deeply\",\"bow\"],\"u\":\"1f647\",\"v\":[\"1f647-1f3fb\",\"1f647-1f3fc\",\"1f647-1f3fd\",\"1f647-1f3fe\",\"1f647-1f3ff\"]},{\"n\":[\"man bowing\",\"man-bowing\"],\"u\":\"1f647-200d-2642-fe0f\",\"v\":[\"1f647-1f3fb-200d-2642-fe0f\",\"1f647-1f3fc-200d-2642-fe0f\",\"1f647-1f3fd-200d-2642-fe0f\",\"1f647-1f3fe-200d-2642-fe0f\",\"1f647-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman bowing\",\"woman-bowing\"],\"u\":\"1f647-200d-2640-fe0f\",\"v\":[\"1f647-1f3fb-200d-2640-fe0f\",\"1f647-1f3fc-200d-2640-fe0f\",\"1f647-1f3fd-200d-2640-fe0f\",\"1f647-1f3fe-200d-2640-fe0f\",\"1f647-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"face palm\",\"face_palm\"],\"u\":\"1f926\",\"v\":[\"1f926-1f3fb\",\"1f926-1f3fc\",\"1f926-1f3fd\",\"1f926-1f3fe\",\"1f926-1f3ff\"]},{\"n\":[\"man facepalming\",\"man-facepalming\"],\"u\":\"1f926-200d-2642-fe0f\",\"v\":[\"1f926-1f3fb-200d-2642-fe0f\",\"1f926-1f3fc-200d-2642-fe0f\",\"1f926-1f3fd-200d-2642-fe0f\",\"1f926-1f3fe-200d-2642-fe0f\",\"1f926-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman facepalming\",\"woman-facepalming\"],\"u\":\"1f926-200d-2640-fe0f\",\"v\":[\"1f926-1f3fb-200d-2640-fe0f\",\"1f926-1f3fc-200d-2640-fe0f\",\"1f926-1f3fd-200d-2640-fe0f\",\"1f926-1f3fe-200d-2640-fe0f\",\"1f926-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"shrug\"],\"u\":\"1f937\",\"v\":[\"1f937-1f3fb\",\"1f937-1f3fc\",\"1f937-1f3fd\",\"1f937-1f3fe\",\"1f937-1f3ff\"]},{\"n\":[\"man shrugging\",\"man-shrugging\"],\"u\":\"1f937-200d-2642-fe0f\",\"v\":[\"1f937-1f3fb-200d-2642-fe0f\",\"1f937-1f3fc-200d-2642-fe0f\",\"1f937-1f3fd-200d-2642-fe0f\",\"1f937-1f3fe-200d-2642-fe0f\",\"1f937-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman shrugging\",\"woman-shrugging\"],\"u\":\"1f937-200d-2640-fe0f\",\"v\":[\"1f937-1f3fb-200d-2640-fe0f\",\"1f937-1f3fc-200d-2640-fe0f\",\"1f937-1f3fd-200d-2640-fe0f\",\"1f937-1f3fe-200d-2640-fe0f\",\"1f937-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"health worker\",\"health_worker\"],\"u\":\"1f9d1-200d-2695-fe0f\",\"v\":[\"1f9d1-1f3fb-200d-2695-fe0f\",\"1f9d1-1f3fc-200d-2695-fe0f\",\"1f9d1-1f3fd-200d-2695-fe0f\",\"1f9d1-1f3fe-200d-2695-fe0f\",\"1f9d1-1f3ff-200d-2695-fe0f\"]},{\"n\":[\"man health worker\",\"male-doctor\"],\"u\":\"1f468-200d-2695-fe0f\",\"v\":[\"1f468-1f3fb-200d-2695-fe0f\",\"1f468-1f3fc-200d-2695-fe0f\",\"1f468-1f3fd-200d-2695-fe0f\",\"1f468-1f3fe-200d-2695-fe0f\",\"1f468-1f3ff-200d-2695-fe0f\"]},{\"n\":[\"woman health worker\",\"female-doctor\"],\"u\":\"1f469-200d-2695-fe0f\",\"v\":[\"1f469-1f3fb-200d-2695-fe0f\",\"1f469-1f3fc-200d-2695-fe0f\",\"1f469-1f3fd-200d-2695-fe0f\",\"1f469-1f3fe-200d-2695-fe0f\",\"1f469-1f3ff-200d-2695-fe0f\"]},{\"n\":[\"student\"],\"u\":\"1f9d1-200d-1f393\",\"v\":[\"1f9d1-1f3fb-200d-1f393\",\"1f9d1-1f3fc-200d-1f393\",\"1f9d1-1f3fd-200d-1f393\",\"1f9d1-1f3fe-200d-1f393\",\"1f9d1-1f3ff-200d-1f393\"]},{\"n\":[\"man student\",\"male-student\"],\"u\":\"1f468-200d-1f393\",\"v\":[\"1f468-1f3fb-200d-1f393\",\"1f468-1f3fc-200d-1f393\",\"1f468-1f3fd-200d-1f393\",\"1f468-1f3fe-200d-1f393\",\"1f468-1f3ff-200d-1f393\"]},{\"n\":[\"woman student\",\"female-student\"],\"u\":\"1f469-200d-1f393\",\"v\":[\"1f469-1f3fb-200d-1f393\",\"1f469-1f3fc-200d-1f393\",\"1f469-1f3fd-200d-1f393\",\"1f469-1f3fe-200d-1f393\",\"1f469-1f3ff-200d-1f393\"]},{\"n\":[\"teacher\"],\"u\":\"1f9d1-200d-1f3eb\",\"v\":[\"1f9d1-1f3fb-200d-1f3eb\",\"1f9d1-1f3fc-200d-1f3eb\",\"1f9d1-1f3fd-200d-1f3eb\",\"1f9d1-1f3fe-200d-1f3eb\",\"1f9d1-1f3ff-200d-1f3eb\"]},{\"n\":[\"man teacher\",\"male-teacher\"],\"u\":\"1f468-200d-1f3eb\",\"v\":[\"1f468-1f3fb-200d-1f3eb\",\"1f468-1f3fc-200d-1f3eb\",\"1f468-1f3fd-200d-1f3eb\",\"1f468-1f3fe-200d-1f3eb\",\"1f468-1f3ff-200d-1f3eb\"]},{\"n\":[\"woman teacher\",\"female-teacher\"],\"u\":\"1f469-200d-1f3eb\",\"v\":[\"1f469-1f3fb-200d-1f3eb\",\"1f469-1f3fc-200d-1f3eb\",\"1f469-1f3fd-200d-1f3eb\",\"1f469-1f3fe-200d-1f3eb\",\"1f469-1f3ff-200d-1f3eb\"]},{\"n\":[\"judge\"],\"u\":\"1f9d1-200d-2696-fe0f\",\"v\":[\"1f9d1-1f3fb-200d-2696-fe0f\",\"1f9d1-1f3fc-200d-2696-fe0f\",\"1f9d1-1f3fd-200d-2696-fe0f\",\"1f9d1-1f3fe-200d-2696-fe0f\",\"1f9d1-1f3ff-200d-2696-fe0f\"]},{\"n\":[\"man judge\",\"male-judge\"],\"u\":\"1f468-200d-2696-fe0f\",\"v\":[\"1f468-1f3fb-200d-2696-fe0f\",\"1f468-1f3fc-200d-2696-fe0f\",\"1f468-1f3fd-200d-2696-fe0f\",\"1f468-1f3fe-200d-2696-fe0f\",\"1f468-1f3ff-200d-2696-fe0f\"]},{\"n\":[\"woman judge\",\"female-judge\"],\"u\":\"1f469-200d-2696-fe0f\",\"v\":[\"1f469-1f3fb-200d-2696-fe0f\",\"1f469-1f3fc-200d-2696-fe0f\",\"1f469-1f3fd-200d-2696-fe0f\",\"1f469-1f3fe-200d-2696-fe0f\",\"1f469-1f3ff-200d-2696-fe0f\"]},{\"n\":[\"farmer\"],\"u\":\"1f9d1-200d-1f33e\",\"v\":[\"1f9d1-1f3fb-200d-1f33e\",\"1f9d1-1f3fc-200d-1f33e\",\"1f9d1-1f3fd-200d-1f33e\",\"1f9d1-1f3fe-200d-1f33e\",\"1f9d1-1f3ff-200d-1f33e\"]},{\"n\":[\"man farmer\",\"male-farmer\"],\"u\":\"1f468-200d-1f33e\",\"v\":[\"1f468-1f3fb-200d-1f33e\",\"1f468-1f3fc-200d-1f33e\",\"1f468-1f3fd-200d-1f33e\",\"1f468-1f3fe-200d-1f33e\",\"1f468-1f3ff-200d-1f33e\"]},{\"n\":[\"woman farmer\",\"female-farmer\"],\"u\":\"1f469-200d-1f33e\",\"v\":[\"1f469-1f3fb-200d-1f33e\",\"1f469-1f3fc-200d-1f33e\",\"1f469-1f3fd-200d-1f33e\",\"1f469-1f3fe-200d-1f33e\",\"1f469-1f3ff-200d-1f33e\"]},{\"n\":[\"cook\"],\"u\":\"1f9d1-200d-1f373\",\"v\":[\"1f9d1-1f3fb-200d-1f373\",\"1f9d1-1f3fc-200d-1f373\",\"1f9d1-1f3fd-200d-1f373\",\"1f9d1-1f3fe-200d-1f373\",\"1f9d1-1f3ff-200d-1f373\"]},{\"n\":[\"man cook\",\"male-cook\"],\"u\":\"1f468-200d-1f373\",\"v\":[\"1f468-1f3fb-200d-1f373\",\"1f468-1f3fc-200d-1f373\",\"1f468-1f3fd-200d-1f373\",\"1f468-1f3fe-200d-1f373\",\"1f468-1f3ff-200d-1f373\"]},{\"n\":[\"woman cook\",\"female-cook\"],\"u\":\"1f469-200d-1f373\",\"v\":[\"1f469-1f3fb-200d-1f373\",\"1f469-1f3fc-200d-1f373\",\"1f469-1f3fd-200d-1f373\",\"1f469-1f3fe-200d-1f373\",\"1f469-1f3ff-200d-1f373\"]},{\"n\":[\"mechanic\"],\"u\":\"1f9d1-200d-1f527\",\"v\":[\"1f9d1-1f3fb-200d-1f527\",\"1f9d1-1f3fc-200d-1f527\",\"1f9d1-1f3fd-200d-1f527\",\"1f9d1-1f3fe-200d-1f527\",\"1f9d1-1f3ff-200d-1f527\"]},{\"n\":[\"man mechanic\",\"male-mechanic\"],\"u\":\"1f468-200d-1f527\",\"v\":[\"1f468-1f3fb-200d-1f527\",\"1f468-1f3fc-200d-1f527\",\"1f468-1f3fd-200d-1f527\",\"1f468-1f3fe-200d-1f527\",\"1f468-1f3ff-200d-1f527\"]},{\"n\":[\"woman mechanic\",\"female-mechanic\"],\"u\":\"1f469-200d-1f527\",\"v\":[\"1f469-1f3fb-200d-1f527\",\"1f469-1f3fc-200d-1f527\",\"1f469-1f3fd-200d-1f527\",\"1f469-1f3fe-200d-1f527\",\"1f469-1f3ff-200d-1f527\"]},{\"n\":[\"factory worker\",\"factory_worker\"],\"u\":\"1f9d1-200d-1f3ed\",\"v\":[\"1f9d1-1f3fb-200d-1f3ed\",\"1f9d1-1f3fc-200d-1f3ed\",\"1f9d1-1f3fd-200d-1f3ed\",\"1f9d1-1f3fe-200d-1f3ed\",\"1f9d1-1f3ff-200d-1f3ed\"]},{\"n\":[\"man factory worker\",\"male-factory-worker\"],\"u\":\"1f468-200d-1f3ed\",\"v\":[\"1f468-1f3fb-200d-1f3ed\",\"1f468-1f3fc-200d-1f3ed\",\"1f468-1f3fd-200d-1f3ed\",\"1f468-1f3fe-200d-1f3ed\",\"1f468-1f3ff-200d-1f3ed\"]},{\"n\":[\"woman factory worker\",\"female-factory-worker\"],\"u\":\"1f469-200d-1f3ed\",\"v\":[\"1f469-1f3fb-200d-1f3ed\",\"1f469-1f3fc-200d-1f3ed\",\"1f469-1f3fd-200d-1f3ed\",\"1f469-1f3fe-200d-1f3ed\",\"1f469-1f3ff-200d-1f3ed\"]},{\"n\":[\"office worker\",\"office_worker\"],\"u\":\"1f9d1-200d-1f4bc\",\"v\":[\"1f9d1-1f3fb-200d-1f4bc\",\"1f9d1-1f3fc-200d-1f4bc\",\"1f9d1-1f3fd-200d-1f4bc\",\"1f9d1-1f3fe-200d-1f4bc\",\"1f9d1-1f3ff-200d-1f4bc\"]},{\"n\":[\"man office worker\",\"male-office-worker\"],\"u\":\"1f468-200d-1f4bc\",\"v\":[\"1f468-1f3fb-200d-1f4bc\",\"1f468-1f3fc-200d-1f4bc\",\"1f468-1f3fd-200d-1f4bc\",\"1f468-1f3fe-200d-1f4bc\",\"1f468-1f3ff-200d-1f4bc\"]},{\"n\":[\"woman office worker\",\"female-office-worker\"],\"u\":\"1f469-200d-1f4bc\",\"v\":[\"1f469-1f3fb-200d-1f4bc\",\"1f469-1f3fc-200d-1f4bc\",\"1f469-1f3fd-200d-1f4bc\",\"1f469-1f3fe-200d-1f4bc\",\"1f469-1f3ff-200d-1f4bc\"]},{\"n\":[\"scientist\"],\"u\":\"1f9d1-200d-1f52c\",\"v\":[\"1f9d1-1f3fb-200d-1f52c\",\"1f9d1-1f3fc-200d-1f52c\",\"1f9d1-1f3fd-200d-1f52c\",\"1f9d1-1f3fe-200d-1f52c\",\"1f9d1-1f3ff-200d-1f52c\"]},{\"n\":[\"man scientist\",\"male-scientist\"],\"u\":\"1f468-200d-1f52c\",\"v\":[\"1f468-1f3fb-200d-1f52c\",\"1f468-1f3fc-200d-1f52c\",\"1f468-1f3fd-200d-1f52c\",\"1f468-1f3fe-200d-1f52c\",\"1f468-1f3ff-200d-1f52c\"]},{\"n\":[\"woman scientist\",\"female-scientist\"],\"u\":\"1f469-200d-1f52c\",\"v\":[\"1f469-1f3fb-200d-1f52c\",\"1f469-1f3fc-200d-1f52c\",\"1f469-1f3fd-200d-1f52c\",\"1f469-1f3fe-200d-1f52c\",\"1f469-1f3ff-200d-1f52c\"]},{\"n\":[\"technologist\"],\"u\":\"1f9d1-200d-1f4bb\",\"v\":[\"1f9d1-1f3fb-200d-1f4bb\",\"1f9d1-1f3fc-200d-1f4bb\",\"1f9d1-1f3fd-200d-1f4bb\",\"1f9d1-1f3fe-200d-1f4bb\",\"1f9d1-1f3ff-200d-1f4bb\"]},{\"n\":[\"man technologist\",\"male-technologist\"],\"u\":\"1f468-200d-1f4bb\",\"v\":[\"1f468-1f3fb-200d-1f4bb\",\"1f468-1f3fc-200d-1f4bb\",\"1f468-1f3fd-200d-1f4bb\",\"1f468-1f3fe-200d-1f4bb\",\"1f468-1f3ff-200d-1f4bb\"]},{\"n\":[\"woman technologist\",\"female-technologist\"],\"u\":\"1f469-200d-1f4bb\",\"v\":[\"1f469-1f3fb-200d-1f4bb\",\"1f469-1f3fc-200d-1f4bb\",\"1f469-1f3fd-200d-1f4bb\",\"1f469-1f3fe-200d-1f4bb\",\"1f469-1f3ff-200d-1f4bb\"]},{\"n\":[\"singer\"],\"u\":\"1f9d1-200d-1f3a4\",\"v\":[\"1f9d1-1f3fb-200d-1f3a4\",\"1f9d1-1f3fc-200d-1f3a4\",\"1f9d1-1f3fd-200d-1f3a4\",\"1f9d1-1f3fe-200d-1f3a4\",\"1f9d1-1f3ff-200d-1f3a4\"]},{\"n\":[\"man singer\",\"male-singer\"],\"u\":\"1f468-200d-1f3a4\",\"v\":[\"1f468-1f3fb-200d-1f3a4\",\"1f468-1f3fc-200d-1f3a4\",\"1f468-1f3fd-200d-1f3a4\",\"1f468-1f3fe-200d-1f3a4\",\"1f468-1f3ff-200d-1f3a4\"]},{\"n\":[\"woman singer\",\"female-singer\"],\"u\":\"1f469-200d-1f3a4\",\"v\":[\"1f469-1f3fb-200d-1f3a4\",\"1f469-1f3fc-200d-1f3a4\",\"1f469-1f3fd-200d-1f3a4\",\"1f469-1f3fe-200d-1f3a4\",\"1f469-1f3ff-200d-1f3a4\"]},{\"n\":[\"artist\"],\"u\":\"1f9d1-200d-1f3a8\",\"v\":[\"1f9d1-1f3fb-200d-1f3a8\",\"1f9d1-1f3fc-200d-1f3a8\",\"1f9d1-1f3fd-200d-1f3a8\",\"1f9d1-1f3fe-200d-1f3a8\",\"1f9d1-1f3ff-200d-1f3a8\"]},{\"n\":[\"man artist\",\"male-artist\"],\"u\":\"1f468-200d-1f3a8\",\"v\":[\"1f468-1f3fb-200d-1f3a8\",\"1f468-1f3fc-200d-1f3a8\",\"1f468-1f3fd-200d-1f3a8\",\"1f468-1f3fe-200d-1f3a8\",\"1f468-1f3ff-200d-1f3a8\"]},{\"n\":[\"woman artist\",\"female-artist\"],\"u\":\"1f469-200d-1f3a8\",\"v\":[\"1f469-1f3fb-200d-1f3a8\",\"1f469-1f3fc-200d-1f3a8\",\"1f469-1f3fd-200d-1f3a8\",\"1f469-1f3fe-200d-1f3a8\",\"1f469-1f3ff-200d-1f3a8\"]},{\"n\":[\"pilot\"],\"u\":\"1f9d1-200d-2708-fe0f\",\"v\":[\"1f9d1-1f3fb-200d-2708-fe0f\",\"1f9d1-1f3fc-200d-2708-fe0f\",\"1f9d1-1f3fd-200d-2708-fe0f\",\"1f9d1-1f3fe-200d-2708-fe0f\",\"1f9d1-1f3ff-200d-2708-fe0f\"]},{\"n\":[\"man pilot\",\"male-pilot\"],\"u\":\"1f468-200d-2708-fe0f\",\"v\":[\"1f468-1f3fb-200d-2708-fe0f\",\"1f468-1f3fc-200d-2708-fe0f\",\"1f468-1f3fd-200d-2708-fe0f\",\"1f468-1f3fe-200d-2708-fe0f\",\"1f468-1f3ff-200d-2708-fe0f\"]},{\"n\":[\"woman pilot\",\"female-pilot\"],\"u\":\"1f469-200d-2708-fe0f\",\"v\":[\"1f469-1f3fb-200d-2708-fe0f\",\"1f469-1f3fc-200d-2708-fe0f\",\"1f469-1f3fd-200d-2708-fe0f\",\"1f469-1f3fe-200d-2708-fe0f\",\"1f469-1f3ff-200d-2708-fe0f\"]},{\"n\":[\"astronaut\"],\"u\":\"1f9d1-200d-1f680\",\"v\":[\"1f9d1-1f3fb-200d-1f680\",\"1f9d1-1f3fc-200d-1f680\",\"1f9d1-1f3fd-200d-1f680\",\"1f9d1-1f3fe-200d-1f680\",\"1f9d1-1f3ff-200d-1f680\"]},{\"n\":[\"man astronaut\",\"male-astronaut\"],\"u\":\"1f468-200d-1f680\",\"v\":[\"1f468-1f3fb-200d-1f680\",\"1f468-1f3fc-200d-1f680\",\"1f468-1f3fd-200d-1f680\",\"1f468-1f3fe-200d-1f680\",\"1f468-1f3ff-200d-1f680\"]},{\"n\":[\"woman astronaut\",\"female-astronaut\"],\"u\":\"1f469-200d-1f680\",\"v\":[\"1f469-1f3fb-200d-1f680\",\"1f469-1f3fc-200d-1f680\",\"1f469-1f3fd-200d-1f680\",\"1f469-1f3fe-200d-1f680\",\"1f469-1f3ff-200d-1f680\"]},{\"n\":[\"firefighter\"],\"u\":\"1f9d1-200d-1f692\",\"v\":[\"1f9d1-1f3fb-200d-1f692\",\"1f9d1-1f3fc-200d-1f692\",\"1f9d1-1f3fd-200d-1f692\",\"1f9d1-1f3fe-200d-1f692\",\"1f9d1-1f3ff-200d-1f692\"]},{\"n\":[\"man firefighter\",\"male-firefighter\"],\"u\":\"1f468-200d-1f692\",\"v\":[\"1f468-1f3fb-200d-1f692\",\"1f468-1f3fc-200d-1f692\",\"1f468-1f3fd-200d-1f692\",\"1f468-1f3fe-200d-1f692\",\"1f468-1f3ff-200d-1f692\"]},{\"n\":[\"woman firefighter\",\"female-firefighter\"],\"u\":\"1f469-200d-1f692\",\"v\":[\"1f469-1f3fb-200d-1f692\",\"1f469-1f3fc-200d-1f692\",\"1f469-1f3fd-200d-1f692\",\"1f469-1f3fe-200d-1f692\",\"1f469-1f3ff-200d-1f692\"]},{\"n\":[\"police officer\",\"cop\"],\"u\":\"1f46e\",\"v\":[\"1f46e-1f3fb\",\"1f46e-1f3fc\",\"1f46e-1f3fd\",\"1f46e-1f3fe\",\"1f46e-1f3ff\"]},{\"n\":[\"man police officer\",\"male-police-officer\"],\"u\":\"1f46e-200d-2642-fe0f\",\"v\":[\"1f46e-1f3fb-200d-2642-fe0f\",\"1f46e-1f3fc-200d-2642-fe0f\",\"1f46e-1f3fd-200d-2642-fe0f\",\"1f46e-1f3fe-200d-2642-fe0f\",\"1f46e-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman police officer\",\"female-police-officer\"],\"u\":\"1f46e-200d-2640-fe0f\",\"v\":[\"1f46e-1f3fb-200d-2640-fe0f\",\"1f46e-1f3fc-200d-2640-fe0f\",\"1f46e-1f3fd-200d-2640-fe0f\",\"1f46e-1f3fe-200d-2640-fe0f\",\"1f46e-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"detective\",\"sleuth_or_spy\"],\"u\":\"1f575-fe0f\",\"v\":[\"1f575-1f3fb\",\"1f575-1f3fc\",\"1f575-1f3fd\",\"1f575-1f3fe\",\"1f575-1f3ff\"]},{\"n\":[\"man detective\",\"male-detective\"],\"u\":\"1f575-fe0f-200d-2642-fe0f\",\"v\":[\"1f575-1f3fb-200d-2642-fe0f\",\"1f575-1f3fc-200d-2642-fe0f\",\"1f575-1f3fd-200d-2642-fe0f\",\"1f575-1f3fe-200d-2642-fe0f\",\"1f575-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman detective\",\"female-detective\"],\"u\":\"1f575-fe0f-200d-2640-fe0f\",\"v\":[\"1f575-1f3fb-200d-2640-fe0f\",\"1f575-1f3fc-200d-2640-fe0f\",\"1f575-1f3fd-200d-2640-fe0f\",\"1f575-1f3fe-200d-2640-fe0f\",\"1f575-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"guardsman\"],\"u\":\"1f482\",\"v\":[\"1f482-1f3fb\",\"1f482-1f3fc\",\"1f482-1f3fd\",\"1f482-1f3fe\",\"1f482-1f3ff\"]},{\"n\":[\"man guard\",\"male-guard\"],\"u\":\"1f482-200d-2642-fe0f\",\"v\":[\"1f482-1f3fb-200d-2642-fe0f\",\"1f482-1f3fc-200d-2642-fe0f\",\"1f482-1f3fd-200d-2642-fe0f\",\"1f482-1f3fe-200d-2642-fe0f\",\"1f482-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman guard\",\"female-guard\"],\"u\":\"1f482-200d-2640-fe0f\",\"v\":[\"1f482-1f3fb-200d-2640-fe0f\",\"1f482-1f3fc-200d-2640-fe0f\",\"1f482-1f3fd-200d-2640-fe0f\",\"1f482-1f3fe-200d-2640-fe0f\",\"1f482-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"ninja\"],\"u\":\"1f977\",\"v\":[\"1f977-1f3fb\",\"1f977-1f3fc\",\"1f977-1f3fd\",\"1f977-1f3fe\",\"1f977-1f3ff\"]},{\"n\":[\"construction worker\",\"construction_worker\"],\"u\":\"1f477\",\"v\":[\"1f477-1f3fb\",\"1f477-1f3fc\",\"1f477-1f3fd\",\"1f477-1f3fe\",\"1f477-1f3ff\"]},{\"n\":[\"man construction worker\",\"male-construction-worker\"],\"u\":\"1f477-200d-2642-fe0f\",\"v\":[\"1f477-1f3fb-200d-2642-fe0f\",\"1f477-1f3fc-200d-2642-fe0f\",\"1f477-1f3fd-200d-2642-fe0f\",\"1f477-1f3fe-200d-2642-fe0f\",\"1f477-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman construction worker\",\"female-construction-worker\"],\"u\":\"1f477-200d-2640-fe0f\",\"v\":[\"1f477-1f3fb-200d-2640-fe0f\",\"1f477-1f3fc-200d-2640-fe0f\",\"1f477-1f3fd-200d-2640-fe0f\",\"1f477-1f3fe-200d-2640-fe0f\",\"1f477-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"prince\"],\"u\":\"1f934\",\"v\":[\"1f934-1f3fb\",\"1f934-1f3fc\",\"1f934-1f3fd\",\"1f934-1f3fe\",\"1f934-1f3ff\"]},{\"n\":[\"princess\"],\"u\":\"1f478\",\"v\":[\"1f478-1f3fb\",\"1f478-1f3fc\",\"1f478-1f3fd\",\"1f478-1f3fe\",\"1f478-1f3ff\"]},{\"n\":[\"man with turban\",\"man_with_turban\"],\"u\":\"1f473\",\"v\":[\"1f473-1f3fb\",\"1f473-1f3fc\",\"1f473-1f3fd\",\"1f473-1f3fe\",\"1f473-1f3ff\"]},{\"n\":[\"man wearing turban\",\"man-wearing-turban\"],\"u\":\"1f473-200d-2642-fe0f\",\"v\":[\"1f473-1f3fb-200d-2642-fe0f\",\"1f473-1f3fc-200d-2642-fe0f\",\"1f473-1f3fd-200d-2642-fe0f\",\"1f473-1f3fe-200d-2642-fe0f\",\"1f473-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman wearing turban\",\"woman-wearing-turban\"],\"u\":\"1f473-200d-2640-fe0f\",\"v\":[\"1f473-1f3fb-200d-2640-fe0f\",\"1f473-1f3fc-200d-2640-fe0f\",\"1f473-1f3fd-200d-2640-fe0f\",\"1f473-1f3fe-200d-2640-fe0f\",\"1f473-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"man with gua pi mao\",\"man_with_gua_pi_mao\"],\"u\":\"1f472\",\"v\":[\"1f472-1f3fb\",\"1f472-1f3fc\",\"1f472-1f3fd\",\"1f472-1f3fe\",\"1f472-1f3ff\"]},{\"n\":[\"person with headscarf\",\"person_with_headscarf\"],\"u\":\"1f9d5\",\"v\":[\"1f9d5-1f3fb\",\"1f9d5-1f3fc\",\"1f9d5-1f3fd\",\"1f9d5-1f3fe\",\"1f9d5-1f3ff\"]},{\"n\":[\"man in tuxedo\",\"person_in_tuxedo\"],\"u\":\"1f935\",\"v\":[\"1f935-1f3fb\",\"1f935-1f3fc\",\"1f935-1f3fd\",\"1f935-1f3fe\",\"1f935-1f3ff\"]},{\"n\":[\"man in tuxedo\",\"man_in_tuxedo\"],\"u\":\"1f935-200d-2642-fe0f\",\"v\":[\"1f935-1f3fb-200d-2642-fe0f\",\"1f935-1f3fc-200d-2642-fe0f\",\"1f935-1f3fd-200d-2642-fe0f\",\"1f935-1f3fe-200d-2642-fe0f\",\"1f935-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman in tuxedo\",\"woman_in_tuxedo\"],\"u\":\"1f935-200d-2640-fe0f\",\"v\":[\"1f935-1f3fb-200d-2640-fe0f\",\"1f935-1f3fc-200d-2640-fe0f\",\"1f935-1f3fd-200d-2640-fe0f\",\"1f935-1f3fe-200d-2640-fe0f\",\"1f935-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"bride with veil\",\"bride_with_veil\"],\"u\":\"1f470\",\"v\":[\"1f470-1f3fb\",\"1f470-1f3fc\",\"1f470-1f3fd\",\"1f470-1f3fe\",\"1f470-1f3ff\"]},{\"n\":[\"man with veil\",\"man_with_veil\"],\"u\":\"1f470-200d-2642-fe0f\",\"v\":[\"1f470-1f3fb-200d-2642-fe0f\",\"1f470-1f3fc-200d-2642-fe0f\",\"1f470-1f3fd-200d-2642-fe0f\",\"1f470-1f3fe-200d-2642-fe0f\",\"1f470-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman with veil\",\"woman_with_veil\"],\"u\":\"1f470-200d-2640-fe0f\",\"v\":[\"1f470-1f3fb-200d-2640-fe0f\",\"1f470-1f3fc-200d-2640-fe0f\",\"1f470-1f3fd-200d-2640-fe0f\",\"1f470-1f3fe-200d-2640-fe0f\",\"1f470-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"pregnant woman\",\"pregnant_woman\"],\"u\":\"1f930\",\"v\":[\"1f930-1f3fb\",\"1f930-1f3fc\",\"1f930-1f3fd\",\"1f930-1f3fe\",\"1f930-1f3ff\"]},{\"n\":[\"breast-feeding\"],\"u\":\"1f931\",\"v\":[\"1f931-1f3fb\",\"1f931-1f3fc\",\"1f931-1f3fd\",\"1f931-1f3fe\",\"1f931-1f3ff\"]},{\"n\":[\"woman feeding baby\",\"woman_feeding_baby\"],\"u\":\"1f469-200d-1f37c\",\"v\":[\"1f469-1f3fb-200d-1f37c\",\"1f469-1f3fc-200d-1f37c\",\"1f469-1f3fd-200d-1f37c\",\"1f469-1f3fe-200d-1f37c\",\"1f469-1f3ff-200d-1f37c\"]},{\"n\":[\"man feeding baby\",\"man_feeding_baby\"],\"u\":\"1f468-200d-1f37c\",\"v\":[\"1f468-1f3fb-200d-1f37c\",\"1f468-1f3fc-200d-1f37c\",\"1f468-1f3fd-200d-1f37c\",\"1f468-1f3fe-200d-1f37c\",\"1f468-1f3ff-200d-1f37c\"]},{\"n\":[\"person feeding baby\",\"person_feeding_baby\"],\"u\":\"1f9d1-200d-1f37c\",\"v\":[\"1f9d1-1f3fb-200d-1f37c\",\"1f9d1-1f3fc-200d-1f37c\",\"1f9d1-1f3fd-200d-1f37c\",\"1f9d1-1f3fe-200d-1f37c\",\"1f9d1-1f3ff-200d-1f37c\"]},{\"n\":[\"baby angel\",\"angel\"],\"u\":\"1f47c\",\"v\":[\"1f47c-1f3fb\",\"1f47c-1f3fc\",\"1f47c-1f3fd\",\"1f47c-1f3fe\",\"1f47c-1f3ff\"]},{\"n\":[\"father christmas\",\"santa\"],\"u\":\"1f385\",\"v\":[\"1f385-1f3fb\",\"1f385-1f3fc\",\"1f385-1f3fd\",\"1f385-1f3fe\",\"1f385-1f3ff\"]},{\"n\":[\"mother christmas\",\"mrs_claus\",\"mother_christmas\"],\"u\":\"1f936\",\"v\":[\"1f936-1f3fb\",\"1f936-1f3fc\",\"1f936-1f3fd\",\"1f936-1f3fe\",\"1f936-1f3ff\"]},{\"n\":[\"mx claus\",\"mx_claus\"],\"u\":\"1f9d1-200d-1f384\",\"v\":[\"1f9d1-1f3fb-200d-1f384\",\"1f9d1-1f3fc-200d-1f384\",\"1f9d1-1f3fd-200d-1f384\",\"1f9d1-1f3fe-200d-1f384\",\"1f9d1-1f3ff-200d-1f384\"]},{\"n\":[\"superhero\"],\"u\":\"1f9b8\",\"v\":[\"1f9b8-1f3fb\",\"1f9b8-1f3fc\",\"1f9b8-1f3fd\",\"1f9b8-1f3fe\",\"1f9b8-1f3ff\"]},{\"n\":[\"man superhero\",\"male_superhero\"],\"u\":\"1f9b8-200d-2642-fe0f\",\"v\":[\"1f9b8-1f3fb-200d-2642-fe0f\",\"1f9b8-1f3fc-200d-2642-fe0f\",\"1f9b8-1f3fd-200d-2642-fe0f\",\"1f9b8-1f3fe-200d-2642-fe0f\",\"1f9b8-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman superhero\",\"female_superhero\"],\"u\":\"1f9b8-200d-2640-fe0f\",\"v\":[\"1f9b8-1f3fb-200d-2640-fe0f\",\"1f9b8-1f3fc-200d-2640-fe0f\",\"1f9b8-1f3fd-200d-2640-fe0f\",\"1f9b8-1f3fe-200d-2640-fe0f\",\"1f9b8-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"supervillain\"],\"u\":\"1f9b9\",\"v\":[\"1f9b9-1f3fb\",\"1f9b9-1f3fc\",\"1f9b9-1f3fd\",\"1f9b9-1f3fe\",\"1f9b9-1f3ff\"]},{\"n\":[\"man supervillain\",\"male_supervillain\"],\"u\":\"1f9b9-200d-2642-fe0f\",\"v\":[\"1f9b9-1f3fb-200d-2642-fe0f\",\"1f9b9-1f3fc-200d-2642-fe0f\",\"1f9b9-1f3fd-200d-2642-fe0f\",\"1f9b9-1f3fe-200d-2642-fe0f\",\"1f9b9-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman supervillain\",\"female_supervillain\"],\"u\":\"1f9b9-200d-2640-fe0f\",\"v\":[\"1f9b9-1f3fb-200d-2640-fe0f\",\"1f9b9-1f3fc-200d-2640-fe0f\",\"1f9b9-1f3fd-200d-2640-fe0f\",\"1f9b9-1f3fe-200d-2640-fe0f\",\"1f9b9-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"mage\"],\"u\":\"1f9d9\",\"v\":[\"1f9d9-1f3fb\",\"1f9d9-1f3fc\",\"1f9d9-1f3fd\",\"1f9d9-1f3fe\",\"1f9d9-1f3ff\"]},{\"n\":[\"man mage\",\"male_mage\"],\"u\":\"1f9d9-200d-2642-fe0f\",\"v\":[\"1f9d9-1f3fb-200d-2642-fe0f\",\"1f9d9-1f3fc-200d-2642-fe0f\",\"1f9d9-1f3fd-200d-2642-fe0f\",\"1f9d9-1f3fe-200d-2642-fe0f\",\"1f9d9-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman mage\",\"female_mage\"],\"u\":\"1f9d9-200d-2640-fe0f\",\"v\":[\"1f9d9-1f3fb-200d-2640-fe0f\",\"1f9d9-1f3fc-200d-2640-fe0f\",\"1f9d9-1f3fd-200d-2640-fe0f\",\"1f9d9-1f3fe-200d-2640-fe0f\",\"1f9d9-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"fairy\"],\"u\":\"1f9da\",\"v\":[\"1f9da-1f3fb\",\"1f9da-1f3fc\",\"1f9da-1f3fd\",\"1f9da-1f3fe\",\"1f9da-1f3ff\"]},{\"n\":[\"man fairy\",\"male_fairy\"],\"u\":\"1f9da-200d-2642-fe0f\",\"v\":[\"1f9da-1f3fb-200d-2642-fe0f\",\"1f9da-1f3fc-200d-2642-fe0f\",\"1f9da-1f3fd-200d-2642-fe0f\",\"1f9da-1f3fe-200d-2642-fe0f\",\"1f9da-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman fairy\",\"female_fairy\"],\"u\":\"1f9da-200d-2640-fe0f\",\"v\":[\"1f9da-1f3fb-200d-2640-fe0f\",\"1f9da-1f3fc-200d-2640-fe0f\",\"1f9da-1f3fd-200d-2640-fe0f\",\"1f9da-1f3fe-200d-2640-fe0f\",\"1f9da-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"vampire\"],\"u\":\"1f9db\",\"v\":[\"1f9db-1f3fb\",\"1f9db-1f3fc\",\"1f9db-1f3fd\",\"1f9db-1f3fe\",\"1f9db-1f3ff\"]},{\"n\":[\"man vampire\",\"male_vampire\"],\"u\":\"1f9db-200d-2642-fe0f\",\"v\":[\"1f9db-1f3fb-200d-2642-fe0f\",\"1f9db-1f3fc-200d-2642-fe0f\",\"1f9db-1f3fd-200d-2642-fe0f\",\"1f9db-1f3fe-200d-2642-fe0f\",\"1f9db-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman vampire\",\"female_vampire\"],\"u\":\"1f9db-200d-2640-fe0f\",\"v\":[\"1f9db-1f3fb-200d-2640-fe0f\",\"1f9db-1f3fc-200d-2640-fe0f\",\"1f9db-1f3fd-200d-2640-fe0f\",\"1f9db-1f3fe-200d-2640-fe0f\",\"1f9db-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"merperson\"],\"u\":\"1f9dc\",\"v\":[\"1f9dc-1f3fb\",\"1f9dc-1f3fc\",\"1f9dc-1f3fd\",\"1f9dc-1f3fe\",\"1f9dc-1f3ff\"]},{\"n\":[\"merman\"],\"u\":\"1f9dc-200d-2642-fe0f\",\"v\":[\"1f9dc-1f3fb-200d-2642-fe0f\",\"1f9dc-1f3fc-200d-2642-fe0f\",\"1f9dc-1f3fd-200d-2642-fe0f\",\"1f9dc-1f3fe-200d-2642-fe0f\",\"1f9dc-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"mermaid\"],\"u\":\"1f9dc-200d-2640-fe0f\",\"v\":[\"1f9dc-1f3fb-200d-2640-fe0f\",\"1f9dc-1f3fc-200d-2640-fe0f\",\"1f9dc-1f3fd-200d-2640-fe0f\",\"1f9dc-1f3fe-200d-2640-fe0f\",\"1f9dc-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"elf\"],\"u\":\"1f9dd\",\"v\":[\"1f9dd-1f3fb\",\"1f9dd-1f3fc\",\"1f9dd-1f3fd\",\"1f9dd-1f3fe\",\"1f9dd-1f3ff\"]},{\"n\":[\"man elf\",\"male_elf\"],\"u\":\"1f9dd-200d-2642-fe0f\",\"v\":[\"1f9dd-1f3fb-200d-2642-fe0f\",\"1f9dd-1f3fc-200d-2642-fe0f\",\"1f9dd-1f3fd-200d-2642-fe0f\",\"1f9dd-1f3fe-200d-2642-fe0f\",\"1f9dd-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman elf\",\"female_elf\"],\"u\":\"1f9dd-200d-2640-fe0f\",\"v\":[\"1f9dd-1f3fb-200d-2640-fe0f\",\"1f9dd-1f3fc-200d-2640-fe0f\",\"1f9dd-1f3fd-200d-2640-fe0f\",\"1f9dd-1f3fe-200d-2640-fe0f\",\"1f9dd-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"genie\"],\"u\":\"1f9de\"},{\"n\":[\"man genie\",\"male_genie\"],\"u\":\"1f9de-200d-2642-fe0f\"},{\"n\":[\"woman genie\",\"female_genie\"],\"u\":\"1f9de-200d-2640-fe0f\"},{\"n\":[\"zombie\"],\"u\":\"1f9df\"},{\"n\":[\"man zombie\",\"male_zombie\"],\"u\":\"1f9df-200d-2642-fe0f\"},{\"n\":[\"woman zombie\",\"female_zombie\"],\"u\":\"1f9df-200d-2640-fe0f\"},{\"n\":[\"face massage\",\"massage\"],\"u\":\"1f486\",\"v\":[\"1f486-1f3fb\",\"1f486-1f3fc\",\"1f486-1f3fd\",\"1f486-1f3fe\",\"1f486-1f3ff\"]},{\"n\":[\"man getting massage\",\"man-getting-massage\"],\"u\":\"1f486-200d-2642-fe0f\",\"v\":[\"1f486-1f3fb-200d-2642-fe0f\",\"1f486-1f3fc-200d-2642-fe0f\",\"1f486-1f3fd-200d-2642-fe0f\",\"1f486-1f3fe-200d-2642-fe0f\",\"1f486-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman getting massage\",\"woman-getting-massage\"],\"u\":\"1f486-200d-2640-fe0f\",\"v\":[\"1f486-1f3fb-200d-2640-fe0f\",\"1f486-1f3fc-200d-2640-fe0f\",\"1f486-1f3fd-200d-2640-fe0f\",\"1f486-1f3fe-200d-2640-fe0f\",\"1f486-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"haircut\"],\"u\":\"1f487\",\"v\":[\"1f487-1f3fb\",\"1f487-1f3fc\",\"1f487-1f3fd\",\"1f487-1f3fe\",\"1f487-1f3ff\"]},{\"n\":[\"man getting haircut\",\"man-getting-haircut\"],\"u\":\"1f487-200d-2642-fe0f\",\"v\":[\"1f487-1f3fb-200d-2642-fe0f\",\"1f487-1f3fc-200d-2642-fe0f\",\"1f487-1f3fd-200d-2642-fe0f\",\"1f487-1f3fe-200d-2642-fe0f\",\"1f487-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman getting haircut\",\"woman-getting-haircut\"],\"u\":\"1f487-200d-2640-fe0f\",\"v\":[\"1f487-1f3fb-200d-2640-fe0f\",\"1f487-1f3fc-200d-2640-fe0f\",\"1f487-1f3fd-200d-2640-fe0f\",\"1f487-1f3fe-200d-2640-fe0f\",\"1f487-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"pedestrian\",\"walking\"],\"u\":\"1f6b6\",\"v\":[\"1f6b6-1f3fb\",\"1f6b6-1f3fc\",\"1f6b6-1f3fd\",\"1f6b6-1f3fe\",\"1f6b6-1f3ff\"]},{\"n\":[\"man walking\",\"man-walking\"],\"u\":\"1f6b6-200d-2642-fe0f\",\"v\":[\"1f6b6-1f3fb-200d-2642-fe0f\",\"1f6b6-1f3fc-200d-2642-fe0f\",\"1f6b6-1f3fd-200d-2642-fe0f\",\"1f6b6-1f3fe-200d-2642-fe0f\",\"1f6b6-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman walking\",\"woman-walking\"],\"u\":\"1f6b6-200d-2640-fe0f\",\"v\":[\"1f6b6-1f3fb-200d-2640-fe0f\",\"1f6b6-1f3fc-200d-2640-fe0f\",\"1f6b6-1f3fd-200d-2640-fe0f\",\"1f6b6-1f3fe-200d-2640-fe0f\",\"1f6b6-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"standing person\",\"standing_person\"],\"u\":\"1f9cd\",\"v\":[\"1f9cd-1f3fb\",\"1f9cd-1f3fc\",\"1f9cd-1f3fd\",\"1f9cd-1f3fe\",\"1f9cd-1f3ff\"]},{\"n\":[\"man standing\",\"man_standing\"],\"u\":\"1f9cd-200d-2642-fe0f\",\"v\":[\"1f9cd-1f3fb-200d-2642-fe0f\",\"1f9cd-1f3fc-200d-2642-fe0f\",\"1f9cd-1f3fd-200d-2642-fe0f\",\"1f9cd-1f3fe-200d-2642-fe0f\",\"1f9cd-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman standing\",\"woman_standing\"],\"u\":\"1f9cd-200d-2640-fe0f\",\"v\":[\"1f9cd-1f3fb-200d-2640-fe0f\",\"1f9cd-1f3fc-200d-2640-fe0f\",\"1f9cd-1f3fd-200d-2640-fe0f\",\"1f9cd-1f3fe-200d-2640-fe0f\",\"1f9cd-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"kneeling person\",\"kneeling_person\"],\"u\":\"1f9ce\",\"v\":[\"1f9ce-1f3fb\",\"1f9ce-1f3fc\",\"1f9ce-1f3fd\",\"1f9ce-1f3fe\",\"1f9ce-1f3ff\"]},{\"n\":[\"man kneeling\",\"man_kneeling\"],\"u\":\"1f9ce-200d-2642-fe0f\",\"v\":[\"1f9ce-1f3fb-200d-2642-fe0f\",\"1f9ce-1f3fc-200d-2642-fe0f\",\"1f9ce-1f3fd-200d-2642-fe0f\",\"1f9ce-1f3fe-200d-2642-fe0f\",\"1f9ce-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman kneeling\",\"woman_kneeling\"],\"u\":\"1f9ce-200d-2640-fe0f\",\"v\":[\"1f9ce-1f3fb-200d-2640-fe0f\",\"1f9ce-1f3fc-200d-2640-fe0f\",\"1f9ce-1f3fd-200d-2640-fe0f\",\"1f9ce-1f3fe-200d-2640-fe0f\",\"1f9ce-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"person with white cane\",\"person_with_probing_cane\"],\"u\":\"1f9d1-200d-1f9af\",\"v\":[\"1f9d1-1f3fb-200d-1f9af\",\"1f9d1-1f3fc-200d-1f9af\",\"1f9d1-1f3fd-200d-1f9af\",\"1f9d1-1f3fe-200d-1f9af\",\"1f9d1-1f3ff-200d-1f9af\"]},{\"n\":[\"man with white cane\",\"man_with_probing_cane\"],\"u\":\"1f468-200d-1f9af\",\"v\":[\"1f468-1f3fb-200d-1f9af\",\"1f468-1f3fc-200d-1f9af\",\"1f468-1f3fd-200d-1f9af\",\"1f468-1f3fe-200d-1f9af\",\"1f468-1f3ff-200d-1f9af\"]},{\"n\":[\"woman with white cane\",\"woman_with_probing_cane\"],\"u\":\"1f469-200d-1f9af\",\"v\":[\"1f469-1f3fb-200d-1f9af\",\"1f469-1f3fc-200d-1f9af\",\"1f469-1f3fd-200d-1f9af\",\"1f469-1f3fe-200d-1f9af\",\"1f469-1f3ff-200d-1f9af\"]},{\"n\":[\"person in motorized wheelchair\",\"person_in_motorized_wheelchair\"],\"u\":\"1f9d1-200d-1f9bc\",\"v\":[\"1f9d1-1f3fb-200d-1f9bc\",\"1f9d1-1f3fc-200d-1f9bc\",\"1f9d1-1f3fd-200d-1f9bc\",\"1f9d1-1f3fe-200d-1f9bc\",\"1f9d1-1f3ff-200d-1f9bc\"]},{\"n\":[\"man in motorized wheelchair\",\"man_in_motorized_wheelchair\"],\"u\":\"1f468-200d-1f9bc\",\"v\":[\"1f468-1f3fb-200d-1f9bc\",\"1f468-1f3fc-200d-1f9bc\",\"1f468-1f3fd-200d-1f9bc\",\"1f468-1f3fe-200d-1f9bc\",\"1f468-1f3ff-200d-1f9bc\"]},{\"n\":[\"woman in motorized wheelchair\",\"woman_in_motorized_wheelchair\"],\"u\":\"1f469-200d-1f9bc\",\"v\":[\"1f469-1f3fb-200d-1f9bc\",\"1f469-1f3fc-200d-1f9bc\",\"1f469-1f3fd-200d-1f9bc\",\"1f469-1f3fe-200d-1f9bc\",\"1f469-1f3ff-200d-1f9bc\"]},{\"n\":[\"person in manual wheelchair\",\"person_in_manual_wheelchair\"],\"u\":\"1f9d1-200d-1f9bd\",\"v\":[\"1f9d1-1f3fb-200d-1f9bd\",\"1f9d1-1f3fc-200d-1f9bd\",\"1f9d1-1f3fd-200d-1f9bd\",\"1f9d1-1f3fe-200d-1f9bd\",\"1f9d1-1f3ff-200d-1f9bd\"]},{\"n\":[\"man in manual wheelchair\",\"man_in_manual_wheelchair\"],\"u\":\"1f468-200d-1f9bd\",\"v\":[\"1f468-1f3fb-200d-1f9bd\",\"1f468-1f3fc-200d-1f9bd\",\"1f468-1f3fd-200d-1f9bd\",\"1f468-1f3fe-200d-1f9bd\",\"1f468-1f3ff-200d-1f9bd\"]},{\"n\":[\"woman in manual wheelchair\",\"woman_in_manual_wheelchair\"],\"u\":\"1f469-200d-1f9bd\",\"v\":[\"1f469-1f3fb-200d-1f9bd\",\"1f469-1f3fc-200d-1f9bd\",\"1f469-1f3fd-200d-1f9bd\",\"1f469-1f3fe-200d-1f9bd\",\"1f469-1f3ff-200d-1f9bd\"]},{\"n\":[\"runner\",\"running\"],\"u\":\"1f3c3\",\"v\":[\"1f3c3-1f3fb\",\"1f3c3-1f3fc\",\"1f3c3-1f3fd\",\"1f3c3-1f3fe\",\"1f3c3-1f3ff\"]},{\"n\":[\"man running\",\"man-running\"],\"u\":\"1f3c3-200d-2642-fe0f\",\"v\":[\"1f3c3-1f3fb-200d-2642-fe0f\",\"1f3c3-1f3fc-200d-2642-fe0f\",\"1f3c3-1f3fd-200d-2642-fe0f\",\"1f3c3-1f3fe-200d-2642-fe0f\",\"1f3c3-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman running\",\"woman-running\"],\"u\":\"1f3c3-200d-2640-fe0f\",\"v\":[\"1f3c3-1f3fb-200d-2640-fe0f\",\"1f3c3-1f3fc-200d-2640-fe0f\",\"1f3c3-1f3fd-200d-2640-fe0f\",\"1f3c3-1f3fe-200d-2640-fe0f\",\"1f3c3-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"dancer\"],\"u\":\"1f483\",\"v\":[\"1f483-1f3fb\",\"1f483-1f3fc\",\"1f483-1f3fd\",\"1f483-1f3fe\",\"1f483-1f3ff\"]},{\"n\":[\"man dancing\",\"man_dancing\"],\"u\":\"1f57a\",\"v\":[\"1f57a-1f3fb\",\"1f57a-1f3fc\",\"1f57a-1f3fd\",\"1f57a-1f3fe\",\"1f57a-1f3ff\"]},{\"n\":[\"person in suit levitating\",\"man_in_business_suit_levitating\"],\"u\":\"1f574-fe0f\",\"v\":[\"1f574-1f3fb\",\"1f574-1f3fc\",\"1f574-1f3fd\",\"1f574-1f3fe\",\"1f574-1f3ff\"]},{\"n\":[\"woman with bunny ears\",\"dancers\"],\"u\":\"1f46f\"},{\"n\":[\"men with bunny ears\",\"men-with-bunny-ears-partying\",\"man-with-bunny-ears-partying\"],\"u\":\"1f46f-200d-2642-fe0f\"},{\"n\":[\"women with bunny ears\",\"women-with-bunny-ears-partying\",\"woman-with-bunny-ears-partying\"],\"u\":\"1f46f-200d-2640-fe0f\"},{\"n\":[\"person in steamy room\",\"person_in_steamy_room\"],\"u\":\"1f9d6\",\"v\":[\"1f9d6-1f3fb\",\"1f9d6-1f3fc\",\"1f9d6-1f3fd\",\"1f9d6-1f3fe\",\"1f9d6-1f3ff\"]},{\"n\":[\"man in steamy room\",\"man_in_steamy_room\"],\"u\":\"1f9d6-200d-2642-fe0f\",\"v\":[\"1f9d6-1f3fb-200d-2642-fe0f\",\"1f9d6-1f3fc-200d-2642-fe0f\",\"1f9d6-1f3fd-200d-2642-fe0f\",\"1f9d6-1f3fe-200d-2642-fe0f\",\"1f9d6-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman in steamy room\",\"woman_in_steamy_room\"],\"u\":\"1f9d6-200d-2640-fe0f\",\"v\":[\"1f9d6-1f3fb-200d-2640-fe0f\",\"1f9d6-1f3fc-200d-2640-fe0f\",\"1f9d6-1f3fd-200d-2640-fe0f\",\"1f9d6-1f3fe-200d-2640-fe0f\",\"1f9d6-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"person climbing\",\"person_climbing\"],\"u\":\"1f9d7\",\"v\":[\"1f9d7-1f3fb\",\"1f9d7-1f3fc\",\"1f9d7-1f3fd\",\"1f9d7-1f3fe\",\"1f9d7-1f3ff\"]},{\"n\":[\"man climbing\",\"man_climbing\"],\"u\":\"1f9d7-200d-2642-fe0f\",\"v\":[\"1f9d7-1f3fb-200d-2642-fe0f\",\"1f9d7-1f3fc-200d-2642-fe0f\",\"1f9d7-1f3fd-200d-2642-fe0f\",\"1f9d7-1f3fe-200d-2642-fe0f\",\"1f9d7-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman climbing\",\"woman_climbing\"],\"u\":\"1f9d7-200d-2640-fe0f\",\"v\":[\"1f9d7-1f3fb-200d-2640-fe0f\",\"1f9d7-1f3fc-200d-2640-fe0f\",\"1f9d7-1f3fd-200d-2640-fe0f\",\"1f9d7-1f3fe-200d-2640-fe0f\",\"1f9d7-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"fencer\"],\"u\":\"1f93a\"},{\"n\":[\"horse racing\",\"horse_racing\"],\"u\":\"1f3c7\",\"v\":[\"1f3c7-1f3fb\",\"1f3c7-1f3fc\",\"1f3c7-1f3fd\",\"1f3c7-1f3fe\",\"1f3c7-1f3ff\"]},{\"n\":[\"skier\"],\"u\":\"26f7-fe0f\"},{\"n\":[\"snowboarder\"],\"u\":\"1f3c2\",\"v\":[\"1f3c2-1f3fb\",\"1f3c2-1f3fc\",\"1f3c2-1f3fd\",\"1f3c2-1f3fe\",\"1f3c2-1f3ff\"]},{\"n\":[\"person golfing\",\"golfer\"],\"u\":\"1f3cc-fe0f\",\"v\":[\"1f3cc-1f3fb\",\"1f3cc-1f3fc\",\"1f3cc-1f3fd\",\"1f3cc-1f3fe\",\"1f3cc-1f3ff\"]},{\"n\":[\"man golfing\",\"man-golfing\"],\"u\":\"1f3cc-fe0f-200d-2642-fe0f\",\"v\":[\"1f3cc-1f3fb-200d-2642-fe0f\",\"1f3cc-1f3fc-200d-2642-fe0f\",\"1f3cc-1f3fd-200d-2642-fe0f\",\"1f3cc-1f3fe-200d-2642-fe0f\",\"1f3cc-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman golfing\",\"woman-golfing\"],\"u\":\"1f3cc-fe0f-200d-2640-fe0f\",\"v\":[\"1f3cc-1f3fb-200d-2640-fe0f\",\"1f3cc-1f3fc-200d-2640-fe0f\",\"1f3cc-1f3fd-200d-2640-fe0f\",\"1f3cc-1f3fe-200d-2640-fe0f\",\"1f3cc-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"surfer\"],\"u\":\"1f3c4\",\"v\":[\"1f3c4-1f3fb\",\"1f3c4-1f3fc\",\"1f3c4-1f3fd\",\"1f3c4-1f3fe\",\"1f3c4-1f3ff\"]},{\"n\":[\"man surfing\",\"man-surfing\"],\"u\":\"1f3c4-200d-2642-fe0f\",\"v\":[\"1f3c4-1f3fb-200d-2642-fe0f\",\"1f3c4-1f3fc-200d-2642-fe0f\",\"1f3c4-1f3fd-200d-2642-fe0f\",\"1f3c4-1f3fe-200d-2642-fe0f\",\"1f3c4-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman surfing\",\"woman-surfing\"],\"u\":\"1f3c4-200d-2640-fe0f\",\"v\":[\"1f3c4-1f3fb-200d-2640-fe0f\",\"1f3c4-1f3fc-200d-2640-fe0f\",\"1f3c4-1f3fd-200d-2640-fe0f\",\"1f3c4-1f3fe-200d-2640-fe0f\",\"1f3c4-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"rowboat\"],\"u\":\"1f6a3\",\"v\":[\"1f6a3-1f3fb\",\"1f6a3-1f3fc\",\"1f6a3-1f3fd\",\"1f6a3-1f3fe\",\"1f6a3-1f3ff\"]},{\"n\":[\"man rowing boat\",\"man-rowing-boat\"],\"u\":\"1f6a3-200d-2642-fe0f\",\"v\":[\"1f6a3-1f3fb-200d-2642-fe0f\",\"1f6a3-1f3fc-200d-2642-fe0f\",\"1f6a3-1f3fd-200d-2642-fe0f\",\"1f6a3-1f3fe-200d-2642-fe0f\",\"1f6a3-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman rowing boat\",\"woman-rowing-boat\"],\"u\":\"1f6a3-200d-2640-fe0f\",\"v\":[\"1f6a3-1f3fb-200d-2640-fe0f\",\"1f6a3-1f3fc-200d-2640-fe0f\",\"1f6a3-1f3fd-200d-2640-fe0f\",\"1f6a3-1f3fe-200d-2640-fe0f\",\"1f6a3-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"swimmer\"],\"u\":\"1f3ca\",\"v\":[\"1f3ca-1f3fb\",\"1f3ca-1f3fc\",\"1f3ca-1f3fd\",\"1f3ca-1f3fe\",\"1f3ca-1f3ff\"]},{\"n\":[\"man swimming\",\"man-swimming\"],\"u\":\"1f3ca-200d-2642-fe0f\",\"v\":[\"1f3ca-1f3fb-200d-2642-fe0f\",\"1f3ca-1f3fc-200d-2642-fe0f\",\"1f3ca-1f3fd-200d-2642-fe0f\",\"1f3ca-1f3fe-200d-2642-fe0f\",\"1f3ca-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman swimming\",\"woman-swimming\"],\"u\":\"1f3ca-200d-2640-fe0f\",\"v\":[\"1f3ca-1f3fb-200d-2640-fe0f\",\"1f3ca-1f3fc-200d-2640-fe0f\",\"1f3ca-1f3fd-200d-2640-fe0f\",\"1f3ca-1f3fe-200d-2640-fe0f\",\"1f3ca-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"person bouncing ball\",\"person_with_ball\"],\"u\":\"26f9-fe0f\",\"v\":[\"26f9-1f3fb\",\"26f9-1f3fc\",\"26f9-1f3fd\",\"26f9-1f3fe\",\"26f9-1f3ff\"]},{\"n\":[\"man bouncing ball\",\"man-bouncing-ball\"],\"u\":\"26f9-fe0f-200d-2642-fe0f\",\"v\":[\"26f9-1f3fb-200d-2642-fe0f\",\"26f9-1f3fc-200d-2642-fe0f\",\"26f9-1f3fd-200d-2642-fe0f\",\"26f9-1f3fe-200d-2642-fe0f\",\"26f9-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman bouncing ball\",\"woman-bouncing-ball\"],\"u\":\"26f9-fe0f-200d-2640-fe0f\",\"v\":[\"26f9-1f3fb-200d-2640-fe0f\",\"26f9-1f3fc-200d-2640-fe0f\",\"26f9-1f3fd-200d-2640-fe0f\",\"26f9-1f3fe-200d-2640-fe0f\",\"26f9-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"person lifting weights\",\"weight_lifter\"],\"u\":\"1f3cb-fe0f\",\"v\":[\"1f3cb-1f3fb\",\"1f3cb-1f3fc\",\"1f3cb-1f3fd\",\"1f3cb-1f3fe\",\"1f3cb-1f3ff\"]},{\"n\":[\"man lifting weights\",\"man-lifting-weights\"],\"u\":\"1f3cb-fe0f-200d-2642-fe0f\",\"v\":[\"1f3cb-1f3fb-200d-2642-fe0f\",\"1f3cb-1f3fc-200d-2642-fe0f\",\"1f3cb-1f3fd-200d-2642-fe0f\",\"1f3cb-1f3fe-200d-2642-fe0f\",\"1f3cb-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman lifting weights\",\"woman-lifting-weights\"],\"u\":\"1f3cb-fe0f-200d-2640-fe0f\",\"v\":[\"1f3cb-1f3fb-200d-2640-fe0f\",\"1f3cb-1f3fc-200d-2640-fe0f\",\"1f3cb-1f3fd-200d-2640-fe0f\",\"1f3cb-1f3fe-200d-2640-fe0f\",\"1f3cb-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"bicyclist\"],\"u\":\"1f6b4\",\"v\":[\"1f6b4-1f3fb\",\"1f6b4-1f3fc\",\"1f6b4-1f3fd\",\"1f6b4-1f3fe\",\"1f6b4-1f3ff\"]},{\"n\":[\"man biking\",\"man-biking\"],\"u\":\"1f6b4-200d-2642-fe0f\",\"v\":[\"1f6b4-1f3fb-200d-2642-fe0f\",\"1f6b4-1f3fc-200d-2642-fe0f\",\"1f6b4-1f3fd-200d-2642-fe0f\",\"1f6b4-1f3fe-200d-2642-fe0f\",\"1f6b4-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman biking\",\"woman-biking\"],\"u\":\"1f6b4-200d-2640-fe0f\",\"v\":[\"1f6b4-1f3fb-200d-2640-fe0f\",\"1f6b4-1f3fc-200d-2640-fe0f\",\"1f6b4-1f3fd-200d-2640-fe0f\",\"1f6b4-1f3fe-200d-2640-fe0f\",\"1f6b4-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"mountain bicyclist\",\"mountain_bicyclist\"],\"u\":\"1f6b5\",\"v\":[\"1f6b5-1f3fb\",\"1f6b5-1f3fc\",\"1f6b5-1f3fd\",\"1f6b5-1f3fe\",\"1f6b5-1f3ff\"]},{\"n\":[\"man mountain biking\",\"man-mountain-biking\"],\"u\":\"1f6b5-200d-2642-fe0f\",\"v\":[\"1f6b5-1f3fb-200d-2642-fe0f\",\"1f6b5-1f3fc-200d-2642-fe0f\",\"1f6b5-1f3fd-200d-2642-fe0f\",\"1f6b5-1f3fe-200d-2642-fe0f\",\"1f6b5-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman mountain biking\",\"woman-mountain-biking\"],\"u\":\"1f6b5-200d-2640-fe0f\",\"v\":[\"1f6b5-1f3fb-200d-2640-fe0f\",\"1f6b5-1f3fc-200d-2640-fe0f\",\"1f6b5-1f3fd-200d-2640-fe0f\",\"1f6b5-1f3fe-200d-2640-fe0f\",\"1f6b5-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"person doing cartwheel\",\"person_doing_cartwheel\"],\"u\":\"1f938\",\"v\":[\"1f938-1f3fb\",\"1f938-1f3fc\",\"1f938-1f3fd\",\"1f938-1f3fe\",\"1f938-1f3ff\"]},{\"n\":[\"man cartwheeling\",\"man-cartwheeling\"],\"u\":\"1f938-200d-2642-fe0f\",\"v\":[\"1f938-1f3fb-200d-2642-fe0f\",\"1f938-1f3fc-200d-2642-fe0f\",\"1f938-1f3fd-200d-2642-fe0f\",\"1f938-1f3fe-200d-2642-fe0f\",\"1f938-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman cartwheeling\",\"woman-cartwheeling\"],\"u\":\"1f938-200d-2640-fe0f\",\"v\":[\"1f938-1f3fb-200d-2640-fe0f\",\"1f938-1f3fc-200d-2640-fe0f\",\"1f938-1f3fd-200d-2640-fe0f\",\"1f938-1f3fe-200d-2640-fe0f\",\"1f938-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"wrestlers\"],\"u\":\"1f93c\"},{\"n\":[\"men wrestling\",\"man-wrestling\"],\"u\":\"1f93c-200d-2642-fe0f\"},{\"n\":[\"women wrestling\",\"woman-wrestling\"],\"u\":\"1f93c-200d-2640-fe0f\"},{\"n\":[\"water polo\",\"water_polo\"],\"u\":\"1f93d\",\"v\":[\"1f93d-1f3fb\",\"1f93d-1f3fc\",\"1f93d-1f3fd\",\"1f93d-1f3fe\",\"1f93d-1f3ff\"]},{\"n\":[\"man playing water polo\",\"man-playing-water-polo\"],\"u\":\"1f93d-200d-2642-fe0f\",\"v\":[\"1f93d-1f3fb-200d-2642-fe0f\",\"1f93d-1f3fc-200d-2642-fe0f\",\"1f93d-1f3fd-200d-2642-fe0f\",\"1f93d-1f3fe-200d-2642-fe0f\",\"1f93d-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman playing water polo\",\"woman-playing-water-polo\"],\"u\":\"1f93d-200d-2640-fe0f\",\"v\":[\"1f93d-1f3fb-200d-2640-fe0f\",\"1f93d-1f3fc-200d-2640-fe0f\",\"1f93d-1f3fd-200d-2640-fe0f\",\"1f93d-1f3fe-200d-2640-fe0f\",\"1f93d-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"handball\"],\"u\":\"1f93e\",\"v\":[\"1f93e-1f3fb\",\"1f93e-1f3fc\",\"1f93e-1f3fd\",\"1f93e-1f3fe\",\"1f93e-1f3ff\"]},{\"n\":[\"man playing handball\",\"man-playing-handball\"],\"u\":\"1f93e-200d-2642-fe0f\",\"v\":[\"1f93e-1f3fb-200d-2642-fe0f\",\"1f93e-1f3fc-200d-2642-fe0f\",\"1f93e-1f3fd-200d-2642-fe0f\",\"1f93e-1f3fe-200d-2642-fe0f\",\"1f93e-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman playing handball\",\"woman-playing-handball\"],\"u\":\"1f93e-200d-2640-fe0f\",\"v\":[\"1f93e-1f3fb-200d-2640-fe0f\",\"1f93e-1f3fc-200d-2640-fe0f\",\"1f93e-1f3fd-200d-2640-fe0f\",\"1f93e-1f3fe-200d-2640-fe0f\",\"1f93e-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"juggling\"],\"u\":\"1f939\",\"v\":[\"1f939-1f3fb\",\"1f939-1f3fc\",\"1f939-1f3fd\",\"1f939-1f3fe\",\"1f939-1f3ff\"]},{\"n\":[\"man juggling\",\"man-juggling\"],\"u\":\"1f939-200d-2642-fe0f\",\"v\":[\"1f939-1f3fb-200d-2642-fe0f\",\"1f939-1f3fc-200d-2642-fe0f\",\"1f939-1f3fd-200d-2642-fe0f\",\"1f939-1f3fe-200d-2642-fe0f\",\"1f939-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman juggling\",\"woman-juggling\"],\"u\":\"1f939-200d-2640-fe0f\",\"v\":[\"1f939-1f3fb-200d-2640-fe0f\",\"1f939-1f3fc-200d-2640-fe0f\",\"1f939-1f3fd-200d-2640-fe0f\",\"1f939-1f3fe-200d-2640-fe0f\",\"1f939-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"person in lotus position\",\"person_in_lotus_position\"],\"u\":\"1f9d8\",\"v\":[\"1f9d8-1f3fb\",\"1f9d8-1f3fc\",\"1f9d8-1f3fd\",\"1f9d8-1f3fe\",\"1f9d8-1f3ff\"]},{\"n\":[\"man in lotus position\",\"man_in_lotus_position\"],\"u\":\"1f9d8-200d-2642-fe0f\",\"v\":[\"1f9d8-1f3fb-200d-2642-fe0f\",\"1f9d8-1f3fc-200d-2642-fe0f\",\"1f9d8-1f3fd-200d-2642-fe0f\",\"1f9d8-1f3fe-200d-2642-fe0f\",\"1f9d8-1f3ff-200d-2642-fe0f\"]},{\"n\":[\"woman in lotus position\",\"woman_in_lotus_position\"],\"u\":\"1f9d8-200d-2640-fe0f\",\"v\":[\"1f9d8-1f3fb-200d-2640-fe0f\",\"1f9d8-1f3fc-200d-2640-fe0f\",\"1f9d8-1f3fd-200d-2640-fe0f\",\"1f9d8-1f3fe-200d-2640-fe0f\",\"1f9d8-1f3ff-200d-2640-fe0f\"]},{\"n\":[\"bath\"],\"u\":\"1f6c0\",\"v\":[\"1f6c0-1f3fb\",\"1f6c0-1f3fc\",\"1f6c0-1f3fd\",\"1f6c0-1f3fe\",\"1f6c0-1f3ff\"]},{\"n\":[\"sleeping accommodation\",\"sleeping_accommodation\"],\"u\":\"1f6cc\",\"v\":[\"1f6cc-1f3fb\",\"1f6cc-1f3fc\",\"1f6cc-1f3fd\",\"1f6cc-1f3fe\",\"1f6cc-1f3ff\"]},{\"n\":[\"people holding hands\",\"people_holding_hands\"],\"u\":\"1f9d1-200d-1f91d-200d-1f9d1\",\"v\":[\"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb\",\"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc\",\"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd\",\"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe\",\"1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff\",\"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb\",\"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc\",\"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd\",\"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe\",\"1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff\",\"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb\",\"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc\",\"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd\",\"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe\",\"1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff\",\"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb\",\"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc\",\"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd\",\"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe\",\"1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff\",\"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb\",\"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc\",\"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd\",\"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe\",\"1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff\"]},{\"n\":[\"two women holding hands\",\"two_women_holding_hands\",\"women_holding_hands\"],\"u\":\"1f46d\",\"v\":[\"1f46d-1f3fb\",\"1f46d-1f3fc\",\"1f46d-1f3fd\",\"1f46d-1f3fe\",\"1f46d-1f3ff\",\"1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc\",\"1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd\",\"1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe\",\"1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff\",\"1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb\",\"1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd\",\"1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe\",\"1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff\",\"1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb\",\"1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc\",\"1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe\",\"1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff\",\"1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb\",\"1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc\",\"1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd\",\"1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff\",\"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb\",\"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc\",\"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd\",\"1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe\"]},{\"n\":[\"man and woman holding hands\",\"man_and_woman_holding_hands\",\"woman_and_man_holding_hands\",\"couple\"],\"u\":\"1f46b\",\"v\":[\"1f46b-1f3fb\",\"1f46b-1f3fc\",\"1f46b-1f3fd\",\"1f46b-1f3fe\",\"1f46b-1f3ff\",\"1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc\",\"1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd\",\"1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe\",\"1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff\",\"1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb\",\"1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd\",\"1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe\",\"1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff\",\"1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb\",\"1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc\",\"1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe\",\"1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff\",\"1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb\",\"1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc\",\"1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd\",\"1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff\",\"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb\",\"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc\",\"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd\",\"1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe\"]},{\"n\":[\"two men holding hands\",\"two_men_holding_hands\",\"men_holding_hands\"],\"u\":\"1f46c\",\"v\":[\"1f46c-1f3fb\",\"1f46c-1f3fc\",\"1f46c-1f3fd\",\"1f46c-1f3fe\",\"1f46c-1f3ff\",\"1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc\",\"1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd\",\"1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe\",\"1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff\",\"1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb\",\"1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd\",\"1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe\",\"1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff\",\"1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb\",\"1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc\",\"1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe\",\"1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff\",\"1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb\",\"1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc\",\"1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd\",\"1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff\",\"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb\",\"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc\",\"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd\",\"1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe\"]},{\"n\":[\"kiss\",\"couplekiss\"],\"u\":\"1f48f\",\"v\":[\"1f48f-1f3fb\",\"1f48f-1f3fc\",\"1f48f-1f3fd\",\"1f48f-1f3fe\",\"1f48f-1f3ff\",\"1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc\",\"1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd\",\"1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe\",\"1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff\",\"1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb\",\"1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd\",\"1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe\",\"1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff\",\"1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb\",\"1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc\",\"1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe\",\"1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff\",\"1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb\",\"1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc\",\"1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd\",\"1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff\",\"1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb\",\"1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc\",\"1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd\",\"1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe\"]},{\"n\":[\"kiss: woman, man\",\"woman-kiss-man\"],\"u\":\"1f469-200d-2764-fe0f-200d-1f48b-200d-1f468\",\"v\":[\"1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb\",\"1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc\",\"1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd\",\"1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe\",\"1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff\"]},{\"n\":[\"kiss: man, man\",\"man-kiss-man\"],\"u\":\"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468\",\"v\":[\"1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb\",\"1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc\",\"1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd\",\"1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe\",\"1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff\",\"1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb\",\"1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc\",\"1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd\",\"1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe\",\"1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff\",\"1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb\",\"1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc\",\"1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd\",\"1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe\",\"1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff\",\"1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb\",\"1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc\",\"1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd\",\"1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe\",\"1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff\",\"1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb\",\"1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc\",\"1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd\",\"1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe\",\"1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff\"]},{\"n\":[\"kiss: woman, woman\",\"woman-kiss-woman\"],\"u\":\"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469\",\"v\":[\"1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb\",\"1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc\",\"1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd\",\"1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe\",\"1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff\"]},{\"n\":[\"couple with heart\",\"couple_with_heart\"],\"u\":\"1f491\",\"v\":[\"1f491-1f3fb\",\"1f491-1f3fc\",\"1f491-1f3fd\",\"1f491-1f3fe\",\"1f491-1f3ff\",\"1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc\",\"1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd\",\"1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe\",\"1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff\",\"1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb\",\"1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd\",\"1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe\",\"1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff\",\"1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb\",\"1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc\",\"1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe\",\"1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff\",\"1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb\",\"1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc\",\"1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd\",\"1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff\",\"1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb\",\"1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc\",\"1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd\",\"1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe\"]},{\"n\":[\"couple with heart: woman, man\",\"woman-heart-man\"],\"u\":\"1f469-200d-2764-fe0f-200d-1f468\",\"v\":[\"1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb\",\"1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc\",\"1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd\",\"1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe\",\"1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff\"]},{\"n\":[\"couple with heart: man, man\",\"man-heart-man\"],\"u\":\"1f468-200d-2764-fe0f-200d-1f468\",\"v\":[\"1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb\",\"1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc\",\"1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd\",\"1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe\",\"1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff\",\"1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb\",\"1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc\",\"1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd\",\"1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe\",\"1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff\",\"1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb\",\"1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc\",\"1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd\",\"1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe\",\"1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff\",\"1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb\",\"1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc\",\"1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd\",\"1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe\",\"1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff\",\"1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb\",\"1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc\",\"1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd\",\"1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe\",\"1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff\"]},{\"n\":[\"couple with heart: woman, woman\",\"woman-heart-woman\"],\"u\":\"1f469-200d-2764-fe0f-200d-1f469\",\"v\":[\"1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb\",\"1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc\",\"1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd\",\"1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe\",\"1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe\",\"1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe\",\"1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe\",\"1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe\",\"1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff\"]},{\"n\":[\"family\"],\"u\":\"1f46a\"},{\"n\":[\"family: man, woman, boy\",\"man-woman-boy\"],\"u\":\"1f468-200d-1f469-200d-1f466\"},{\"n\":[\"family: man, woman, girl\",\"man-woman-girl\"],\"u\":\"1f468-200d-1f469-200d-1f467\"},{\"n\":[\"family: man, woman, girl, boy\",\"man-woman-girl-boy\"],\"u\":\"1f468-200d-1f469-200d-1f467-200d-1f466\"},{\"n\":[\"family: man, woman, boy, boy\",\"man-woman-boy-boy\"],\"u\":\"1f468-200d-1f469-200d-1f466-200d-1f466\"},{\"n\":[\"family: man, woman, girl, girl\",\"man-woman-girl-girl\"],\"u\":\"1f468-200d-1f469-200d-1f467-200d-1f467\"},{\"n\":[\"family: man, man, boy\",\"man-man-boy\"],\"u\":\"1f468-200d-1f468-200d-1f466\"},{\"n\":[\"family: man, man, girl\",\"man-man-girl\"],\"u\":\"1f468-200d-1f468-200d-1f467\"},{\"n\":[\"family: man, man, girl, boy\",\"man-man-girl-boy\"],\"u\":\"1f468-200d-1f468-200d-1f467-200d-1f466\"},{\"n\":[\"family: man, man, boy, boy\",\"man-man-boy-boy\"],\"u\":\"1f468-200d-1f468-200d-1f466-200d-1f466\"},{\"n\":[\"family: man, man, girl, girl\",\"man-man-girl-girl\"],\"u\":\"1f468-200d-1f468-200d-1f467-200d-1f467\"},{\"n\":[\"family: woman, woman, boy\",\"woman-woman-boy\"],\"u\":\"1f469-200d-1f469-200d-1f466\"},{\"n\":[\"family: woman, woman, girl\",\"woman-woman-girl\"],\"u\":\"1f469-200d-1f469-200d-1f467\"},{\"n\":[\"family: woman, woman, girl, boy\",\"woman-woman-girl-boy\"],\"u\":\"1f469-200d-1f469-200d-1f467-200d-1f466\"},{\"n\":[\"family: woman, woman, boy, boy\",\"woman-woman-boy-boy\"],\"u\":\"1f469-200d-1f469-200d-1f466-200d-1f466\"},{\"n\":[\"family: woman, woman, girl, girl\",\"woman-woman-girl-girl\"],\"u\":\"1f469-200d-1f469-200d-1f467-200d-1f467\"},{\"n\":[\"family: man, boy\",\"man-boy\"],\"u\":\"1f468-200d-1f466\"},{\"n\":[\"family: man, boy, boy\",\"man-boy-boy\"],\"u\":\"1f468-200d-1f466-200d-1f466\"},{\"n\":[\"family: man, girl\",\"man-girl\"],\"u\":\"1f468-200d-1f467\"},{\"n\":[\"family: man, girl, boy\",\"man-girl-boy\"],\"u\":\"1f468-200d-1f467-200d-1f466\"},{\"n\":[\"family: man, girl, girl\",\"man-girl-girl\"],\"u\":\"1f468-200d-1f467-200d-1f467\"},{\"n\":[\"family: woman, boy\",\"woman-boy\"],\"u\":\"1f469-200d-1f466\"},{\"n\":[\"family: woman, boy, boy\",\"woman-boy-boy\"],\"u\":\"1f469-200d-1f466-200d-1f466\"},{\"n\":[\"family: woman, girl\",\"woman-girl\"],\"u\":\"1f469-200d-1f467\"},{\"n\":[\"family: woman, girl, boy\",\"woman-girl-boy\"],\"u\":\"1f469-200d-1f467-200d-1f466\"},{\"n\":[\"family: woman, girl, girl\",\"woman-girl-girl\"],\"u\":\"1f469-200d-1f467-200d-1f467\"},{\"n\":[\"speaking head\",\"speaking_head_in_silhouette\"],\"u\":\"1f5e3-fe0f\"},{\"n\":[\"bust in silhouette\",\"bust_in_silhouette\"],\"u\":\"1f464\"},{\"n\":[\"busts in silhouette\",\"busts_in_silhouette\"],\"u\":\"1f465\"},{\"n\":[\"people hugging\",\"people_hugging\"],\"u\":\"1fac2\"},{\"n\":[\"footprints\"],\"u\":\"1f463\"}],\"animals_nature\":[{\"n\":[\"monkey face\",\"monkey_face\"],\"u\":\"1f435\"},{\"n\":[\"monkey\"],\"u\":\"1f412\"},{\"n\":[\"gorilla\"],\"u\":\"1f98d\"},{\"n\":[\"orangutan\"],\"u\":\"1f9a7\"},{\"n\":[\"dog face\",\"dog\"],\"u\":\"1f436\"},{\"n\":[\"dog\",\"dog2\"],\"u\":\"1f415\"},{\"n\":[\"guide dog\",\"guide_dog\"],\"u\":\"1f9ae\"},{\"n\":[\"service dog\",\"service_dog\"],\"u\":\"1f415-200d-1f9ba\"},{\"n\":[\"poodle\"],\"u\":\"1f429\"},{\"n\":[\"wolf face\",\"wolf\"],\"u\":\"1f43a\"},{\"n\":[\"fox face\",\"fox_face\"],\"u\":\"1f98a\"},{\"n\":[\"raccoon\"],\"u\":\"1f99d\"},{\"n\":[\"cat face\",\"cat\"],\"u\":\"1f431\"},{\"n\":[\"cat\",\"cat2\"],\"u\":\"1f408\"},{\"n\":[\"black cat\",\"black_cat\"],\"u\":\"1f408-200d-2b1b\"},{\"n\":[\"lion face\",\"lion_face\"],\"u\":\"1f981\"},{\"n\":[\"tiger face\",\"tiger\"],\"u\":\"1f42f\"},{\"n\":[\"tiger\",\"tiger2\"],\"u\":\"1f405\"},{\"n\":[\"leopard\"],\"u\":\"1f406\"},{\"n\":[\"horse face\",\"horse\"],\"u\":\"1f434\"},{\"n\":[\"horse\",\"racehorse\"],\"u\":\"1f40e\"},{\"n\":[\"unicorn face\",\"unicorn_face\"],\"u\":\"1f984\"},{\"n\":[\"zebra face\",\"zebra_face\"],\"u\":\"1f993\"},{\"n\":[\"deer\"],\"u\":\"1f98c\"},{\"n\":[\"bison\"],\"u\":\"1f9ac\"},{\"n\":[\"cow face\",\"cow\"],\"u\":\"1f42e\"},{\"n\":[\"ox\"],\"u\":\"1f402\"},{\"n\":[\"water buffalo\",\"water_buffalo\"],\"u\":\"1f403\"},{\"n\":[\"cow\",\"cow2\"],\"u\":\"1f404\"},{\"n\":[\"pig face\",\"pig\"],\"u\":\"1f437\"},{\"n\":[\"pig\",\"pig2\"],\"u\":\"1f416\"},{\"n\":[\"boar\"],\"u\":\"1f417\"},{\"n\":[\"pig nose\",\"pig_nose\"],\"u\":\"1f43d\"},{\"n\":[\"ram\"],\"u\":\"1f40f\"},{\"n\":[\"sheep\"],\"u\":\"1f411\"},{\"n\":[\"goat\"],\"u\":\"1f410\"},{\"n\":[\"dromedary camel\",\"dromedary_camel\"],\"u\":\"1f42a\"},{\"n\":[\"bactrian camel\",\"camel\"],\"u\":\"1f42b\"},{\"n\":[\"llama\"],\"u\":\"1f999\"},{\"n\":[\"giraffe face\",\"giraffe_face\"],\"u\":\"1f992\"},{\"n\":[\"elephant\"],\"u\":\"1f418\"},{\"n\":[\"mammoth\"],\"u\":\"1f9a3\"},{\"n\":[\"rhinoceros\"],\"u\":\"1f98f\"},{\"n\":[\"hippopotamus\"],\"u\":\"1f99b\"},{\"n\":[\"mouse face\",\"mouse\"],\"u\":\"1f42d\"},{\"n\":[\"mouse\",\"mouse2\"],\"u\":\"1f401\"},{\"n\":[\"rat\"],\"u\":\"1f400\"},{\"n\":[\"hamster face\",\"hamster\"],\"u\":\"1f439\"},{\"n\":[\"rabbit face\",\"rabbit\"],\"u\":\"1f430\"},{\"n\":[\"rabbit\",\"rabbit2\"],\"u\":\"1f407\"},{\"n\":[\"chipmunk\"],\"u\":\"1f43f-fe0f\"},{\"n\":[\"beaver\"],\"u\":\"1f9ab\"},{\"n\":[\"hedgehog\"],\"u\":\"1f994\"},{\"n\":[\"bat\"],\"u\":\"1f987\"},{\"n\":[\"bear face\",\"bear\"],\"u\":\"1f43b\"},{\"n\":[\"polar bear\",\"polar_bear\"],\"u\":\"1f43b-200d-2744-fe0f\"},{\"n\":[\"koala\"],\"u\":\"1f428\"},{\"n\":[\"panda face\",\"panda_face\"],\"u\":\"1f43c\"},{\"n\":[\"sloth\"],\"u\":\"1f9a5\"},{\"n\":[\"otter\"],\"u\":\"1f9a6\"},{\"n\":[\"skunk\"],\"u\":\"1f9a8\"},{\"n\":[\"kangaroo\"],\"u\":\"1f998\"},{\"n\":[\"badger\"],\"u\":\"1f9a1\"},{\"n\":[\"paw prints\",\"feet\",\"paw_prints\"],\"u\":\"1f43e\"},{\"n\":[\"turkey\"],\"u\":\"1f983\"},{\"n\":[\"chicken\"],\"u\":\"1f414\"},{\"n\":[\"rooster\"],\"u\":\"1f413\"},{\"n\":[\"hatching chick\",\"hatching_chick\"],\"u\":\"1f423\"},{\"n\":[\"baby chick\",\"baby_chick\"],\"u\":\"1f424\"},{\"n\":[\"front-facing baby chick\",\"hatched_chick\"],\"u\":\"1f425\"},{\"n\":[\"bird\"],\"u\":\"1f426\"},{\"n\":[\"penguin\"],\"u\":\"1f427\"},{\"n\":[\"dove\",\"dove_of_peace\"],\"u\":\"1f54a-fe0f\"},{\"n\":[\"eagle\"],\"u\":\"1f985\"},{\"n\":[\"duck\"],\"u\":\"1f986\"},{\"n\":[\"swan\"],\"u\":\"1f9a2\"},{\"n\":[\"owl\"],\"u\":\"1f989\"},{\"n\":[\"dodo\"],\"u\":\"1f9a4\"},{\"n\":[\"feather\"],\"u\":\"1fab6\"},{\"n\":[\"flamingo\"],\"u\":\"1f9a9\"},{\"n\":[\"peacock\"],\"u\":\"1f99a\"},{\"n\":[\"parrot\"],\"u\":\"1f99c\"},{\"n\":[\"frog face\",\"frog\"],\"u\":\"1f438\"},{\"n\":[\"crocodile\"],\"u\":\"1f40a\"},{\"n\":[\"turtle\"],\"u\":\"1f422\"},{\"n\":[\"lizard\"],\"u\":\"1f98e\"},{\"n\":[\"snake\"],\"u\":\"1f40d\"},{\"n\":[\"dragon face\",\"dragon_face\"],\"u\":\"1f432\"},{\"n\":[\"dragon\"],\"u\":\"1f409\"},{\"n\":[\"sauropod\"],\"u\":\"1f995\"},{\"n\":[\"t-rex\"],\"u\":\"1f996\"},{\"n\":[\"spouting whale\",\"whale\"],\"u\":\"1f433\"},{\"n\":[\"whale\",\"whale2\"],\"u\":\"1f40b\"},{\"n\":[\"dolphin\",\"flipper\"],\"u\":\"1f42c\"},{\"n\":[\"seal\"],\"u\":\"1f9ad\"},{\"n\":[\"fish\"],\"u\":\"1f41f\"},{\"n\":[\"tropical fish\",\"tropical_fish\"],\"u\":\"1f420\"},{\"n\":[\"blowfish\"],\"u\":\"1f421\"},{\"n\":[\"shark\"],\"u\":\"1f988\"},{\"n\":[\"octopus\"],\"u\":\"1f419\"},{\"n\":[\"spiral shell\",\"shell\"],\"u\":\"1f41a\"},{\"n\":[\"snail\"],\"u\":\"1f40c\"},{\"n\":[\"butterfly\"],\"u\":\"1f98b\"},{\"n\":[\"bug\"],\"u\":\"1f41b\"},{\"n\":[\"ant\"],\"u\":\"1f41c\"},{\"n\":[\"honeybee\",\"bee\"],\"u\":\"1f41d\"},{\"n\":[\"beetle\"],\"u\":\"1fab2\"},{\"n\":[\"lady beetle\",\"ladybug\",\"lady_beetle\"],\"u\":\"1f41e\"},{\"n\":[\"cricket\"],\"u\":\"1f997\"},{\"n\":[\"cockroach\"],\"u\":\"1fab3\"},{\"n\":[\"spider\"],\"u\":\"1f577-fe0f\"},{\"n\":[\"spider web\",\"spider_web\"],\"u\":\"1f578-fe0f\"},{\"n\":[\"scorpion\"],\"u\":\"1f982\"},{\"n\":[\"mosquito\"],\"u\":\"1f99f\"},{\"n\":[\"fly\"],\"u\":\"1fab0\"},{\"n\":[\"worm\"],\"u\":\"1fab1\"},{\"n\":[\"microbe\"],\"u\":\"1f9a0\"},{\"n\":[\"bouquet\"],\"u\":\"1f490\"},{\"n\":[\"cherry blossom\",\"cherry_blossom\"],\"u\":\"1f338\"},{\"n\":[\"white flower\",\"white_flower\"],\"u\":\"1f4ae\"},{\"n\":[\"rosette\"],\"u\":\"1f3f5-fe0f\"},{\"n\":[\"rose\"],\"u\":\"1f339\"},{\"n\":[\"wilted flower\",\"wilted_flower\"],\"u\":\"1f940\"},{\"n\":[\"hibiscus\"],\"u\":\"1f33a\"},{\"n\":[\"sunflower\"],\"u\":\"1f33b\"},{\"n\":[\"blossom\"],\"u\":\"1f33c\"},{\"n\":[\"tulip\"],\"u\":\"1f337\"},{\"n\":[\"seedling\"],\"u\":\"1f331\"},{\"n\":[\"potted plant\",\"potted_plant\"],\"u\":\"1fab4\"},{\"n\":[\"evergreen tree\",\"evergreen_tree\"],\"u\":\"1f332\"},{\"n\":[\"deciduous tree\",\"deciduous_tree\"],\"u\":\"1f333\"},{\"n\":[\"palm tree\",\"palm_tree\"],\"u\":\"1f334\"},{\"n\":[\"cactus\"],\"u\":\"1f335\"},{\"n\":[\"ear of rice\",\"ear_of_rice\"],\"u\":\"1f33e\"},{\"n\":[\"herb\"],\"u\":\"1f33f\"},{\"n\":[\"shamrock\"],\"u\":\"2618-fe0f\"},{\"n\":[\"four leaf clover\",\"four_leaf_clover\"],\"u\":\"1f340\"},{\"n\":[\"maple leaf\",\"maple_leaf\"],\"u\":\"1f341\"},{\"n\":[\"fallen leaf\",\"fallen_leaf\"],\"u\":\"1f342\"},{\"n\":[\"leaf fluttering in wind\",\"leaves\"],\"u\":\"1f343\"}],\"food_drink\":[{\"n\":[\"grapes\"],\"u\":\"1f347\"},{\"n\":[\"melon\"],\"u\":\"1f348\"},{\"n\":[\"watermelon\"],\"u\":\"1f349\"},{\"n\":[\"tangerine\"],\"u\":\"1f34a\"},{\"n\":[\"lemon\"],\"u\":\"1f34b\"},{\"n\":[\"banana\"],\"u\":\"1f34c\"},{\"n\":[\"pineapple\"],\"u\":\"1f34d\"},{\"n\":[\"mango\"],\"u\":\"1f96d\"},{\"n\":[\"red apple\",\"apple\"],\"u\":\"1f34e\"},{\"n\":[\"green apple\",\"green_apple\"],\"u\":\"1f34f\"},{\"n\":[\"pear\"],\"u\":\"1f350\"},{\"n\":[\"peach\"],\"u\":\"1f351\"},{\"n\":[\"cherries\"],\"u\":\"1f352\"},{\"n\":[\"strawberry\"],\"u\":\"1f353\"},{\"n\":[\"blueberries\"],\"u\":\"1fad0\"},{\"n\":[\"kiwifruit\"],\"u\":\"1f95d\"},{\"n\":[\"tomato\"],\"u\":\"1f345\"},{\"n\":[\"olive\"],\"u\":\"1fad2\"},{\"n\":[\"coconut\"],\"u\":\"1f965\"},{\"n\":[\"avocado\"],\"u\":\"1f951\"},{\"n\":[\"aubergine\",\"eggplant\"],\"u\":\"1f346\"},{\"n\":[\"potato\"],\"u\":\"1f954\"},{\"n\":[\"carrot\"],\"u\":\"1f955\"},{\"n\":[\"ear of maize\",\"corn\"],\"u\":\"1f33d\"},{\"n\":[\"hot pepper\",\"hot_pepper\"],\"u\":\"1f336-fe0f\"},{\"n\":[\"bell pepper\",\"bell_pepper\"],\"u\":\"1fad1\"},{\"n\":[\"cucumber\"],\"u\":\"1f952\"},{\"n\":[\"leafy green\",\"leafy_green\"],\"u\":\"1f96c\"},{\"n\":[\"broccoli\"],\"u\":\"1f966\"},{\"n\":[\"garlic\"],\"u\":\"1f9c4\"},{\"n\":[\"onion\"],\"u\":\"1f9c5\"},{\"n\":[\"mushroom\"],\"u\":\"1f344\"},{\"n\":[\"peanuts\"],\"u\":\"1f95c\"},{\"n\":[\"chestnut\"],\"u\":\"1f330\"},{\"n\":[\"bread\"],\"u\":\"1f35e\"},{\"n\":[\"croissant\"],\"u\":\"1f950\"},{\"n\":[\"baguette bread\",\"baguette_bread\"],\"u\":\"1f956\"},{\"n\":[\"flatbread\"],\"u\":\"1fad3\"},{\"n\":[\"pretzel\"],\"u\":\"1f968\"},{\"n\":[\"bagel\"],\"u\":\"1f96f\"},{\"n\":[\"pancakes\"],\"u\":\"1f95e\"},{\"n\":[\"waffle\"],\"u\":\"1f9c7\"},{\"n\":[\"cheese wedge\",\"cheese_wedge\"],\"u\":\"1f9c0\"},{\"n\":[\"meat on bone\",\"meat_on_bone\"],\"u\":\"1f356\"},{\"n\":[\"poultry leg\",\"poultry_leg\"],\"u\":\"1f357\"},{\"n\":[\"cut of meat\",\"cut_of_meat\"],\"u\":\"1f969\"},{\"n\":[\"bacon\"],\"u\":\"1f953\"},{\"n\":[\"hamburger\"],\"u\":\"1f354\"},{\"n\":[\"french fries\",\"fries\"],\"u\":\"1f35f\"},{\"n\":[\"slice of pizza\",\"pizza\"],\"u\":\"1f355\"},{\"n\":[\"hot dog\",\"hotdog\"],\"u\":\"1f32d\"},{\"n\":[\"sandwich\"],\"u\":\"1f96a\"},{\"n\":[\"taco\"],\"u\":\"1f32e\"},{\"n\":[\"burrito\"],\"u\":\"1f32f\"},{\"n\":[\"tamale\"],\"u\":\"1fad4\"},{\"n\":[\"stuffed flatbread\",\"stuffed_flatbread\"],\"u\":\"1f959\"},{\"n\":[\"falafel\"],\"u\":\"1f9c6\"},{\"n\":[\"egg\"],\"u\":\"1f95a\"},{\"n\":[\"cooking\",\"fried_egg\"],\"u\":\"1f373\"},{\"n\":[\"shallow pan of food\",\"shallow_pan_of_food\"],\"u\":\"1f958\"},{\"n\":[\"pot of food\",\"stew\"],\"u\":\"1f372\"},{\"n\":[\"fondue\"],\"u\":\"1fad5\"},{\"n\":[\"bowl with spoon\",\"bowl_with_spoon\"],\"u\":\"1f963\"},{\"n\":[\"green salad\",\"green_salad\"],\"u\":\"1f957\"},{\"n\":[\"popcorn\"],\"u\":\"1f37f\"},{\"n\":[\"butter\"],\"u\":\"1f9c8\"},{\"n\":[\"salt shaker\",\"salt\"],\"u\":\"1f9c2\"},{\"n\":[\"canned food\",\"canned_food\"],\"u\":\"1f96b\"},{\"n\":[\"bento box\",\"bento\"],\"u\":\"1f371\"},{\"n\":[\"rice cracker\",\"rice_cracker\"],\"u\":\"1f358\"},{\"n\":[\"rice ball\",\"rice_ball\"],\"u\":\"1f359\"},{\"n\":[\"cooked rice\",\"rice\"],\"u\":\"1f35a\"},{\"n\":[\"curry and rice\",\"curry\"],\"u\":\"1f35b\"},{\"n\":[\"steaming bowl\",\"ramen\"],\"u\":\"1f35c\"},{\"n\":[\"spaghetti\"],\"u\":\"1f35d\"},{\"n\":[\"roasted sweet potato\",\"sweet_potato\"],\"u\":\"1f360\"},{\"n\":[\"oden\"],\"u\":\"1f362\"},{\"n\":[\"sushi\"],\"u\":\"1f363\"},{\"n\":[\"fried shrimp\",\"fried_shrimp\"],\"u\":\"1f364\"},{\"n\":[\"fish cake with swirl design\",\"fish_cake\"],\"u\":\"1f365\"},{\"n\":[\"moon cake\",\"moon_cake\"],\"u\":\"1f96e\"},{\"n\":[\"dango\"],\"u\":\"1f361\"},{\"n\":[\"dumpling\"],\"u\":\"1f95f\"},{\"n\":[\"fortune cookie\",\"fortune_cookie\"],\"u\":\"1f960\"},{\"n\":[\"takeout box\",\"takeout_box\"],\"u\":\"1f961\"},{\"n\":[\"crab\"],\"u\":\"1f980\"},{\"n\":[\"lobster\"],\"u\":\"1f99e\"},{\"n\":[\"shrimp\"],\"u\":\"1f990\"},{\"n\":[\"squid\"],\"u\":\"1f991\"},{\"n\":[\"oyster\"],\"u\":\"1f9aa\"},{\"n\":[\"soft ice cream\",\"icecream\"],\"u\":\"1f366\"},{\"n\":[\"shaved ice\",\"shaved_ice\"],\"u\":\"1f367\"},{\"n\":[\"ice cream\",\"ice_cream\"],\"u\":\"1f368\"},{\"n\":[\"doughnut\"],\"u\":\"1f369\"},{\"n\":[\"cookie\"],\"u\":\"1f36a\"},{\"n\":[\"birthday cake\",\"birthday\"],\"u\":\"1f382\"},{\"n\":[\"shortcake\",\"cake\"],\"u\":\"1f370\"},{\"n\":[\"cupcake\"],\"u\":\"1f9c1\"},{\"n\":[\"pie\"],\"u\":\"1f967\"},{\"n\":[\"chocolate bar\",\"chocolate_bar\"],\"u\":\"1f36b\"},{\"n\":[\"candy\"],\"u\":\"1f36c\"},{\"n\":[\"lollipop\"],\"u\":\"1f36d\"},{\"n\":[\"custard\"],\"u\":\"1f36e\"},{\"n\":[\"honey pot\",\"honey_pot\"],\"u\":\"1f36f\"},{\"n\":[\"baby bottle\",\"baby_bottle\"],\"u\":\"1f37c\"},{\"n\":[\"glass of milk\",\"glass_of_milk\"],\"u\":\"1f95b\"},{\"n\":[\"hot beverage\",\"coffee\"],\"u\":\"2615\"},{\"n\":[\"teapot\"],\"u\":\"1fad6\"},{\"n\":[\"teacup without handle\",\"tea\"],\"u\":\"1f375\"},{\"n\":[\"sake bottle and cup\",\"sake\"],\"u\":\"1f376\"},{\"n\":[\"bottle with popping cork\",\"champagne\"],\"u\":\"1f37e\"},{\"n\":[\"wine glass\",\"wine_glass\"],\"u\":\"1f377\"},{\"n\":[\"cocktail glass\",\"cocktail\"],\"u\":\"1f378\"},{\"n\":[\"tropical drink\",\"tropical_drink\"],\"u\":\"1f379\"},{\"n\":[\"beer mug\",\"beer\"],\"u\":\"1f37a\"},{\"n\":[\"clinking beer mugs\",\"beers\"],\"u\":\"1f37b\"},{\"n\":[\"clinking glasses\",\"clinking_glasses\"],\"u\":\"1f942\"},{\"n\":[\"tumbler glass\",\"tumbler_glass\"],\"u\":\"1f943\"},{\"n\":[\"cup with straw\",\"cup_with_straw\"],\"u\":\"1f964\"},{\"n\":[\"bubble tea\",\"bubble_tea\"],\"u\":\"1f9cb\"},{\"n\":[\"beverage box\",\"beverage_box\"],\"u\":\"1f9c3\"},{\"n\":[\"mate drink\",\"mate_drink\"],\"u\":\"1f9c9\"},{\"n\":[\"ice cube\",\"ice_cube\"],\"u\":\"1f9ca\"},{\"n\":[\"chopsticks\"],\"u\":\"1f962\"},{\"n\":[\"fork and knife with plate\",\"knife_fork_plate\"],\"u\":\"1f37d-fe0f\"},{\"n\":[\"fork and knife\",\"fork_and_knife\"],\"u\":\"1f374\"},{\"n\":[\"spoon\"],\"u\":\"1f944\"},{\"n\":[\"hocho\",\"knife\"],\"u\":\"1f52a\"},{\"n\":[\"amphora\"],\"u\":\"1f3fa\"}],\"travel_places\":[{\"n\":[\"earth globe europe-africa\",\"earth_africa\"],\"u\":\"1f30d\"},{\"n\":[\"earth globe americas\",\"earth_americas\"],\"u\":\"1f30e\"},{\"n\":[\"earth globe asia-australia\",\"earth_asia\"],\"u\":\"1f30f\"},{\"n\":[\"globe with meridians\",\"globe_with_meridians\"],\"u\":\"1f310\"},{\"n\":[\"world map\",\"world_map\"],\"u\":\"1f5fa-fe0f\"},{\"n\":[\"silhouette of japan\",\"japan\"],\"u\":\"1f5fe\"},{\"n\":[\"compass\"],\"u\":\"1f9ed\"},{\"n\":[\"snow-capped mountain\",\"snow_capped_mountain\"],\"u\":\"1f3d4-fe0f\"},{\"n\":[\"mountain\"],\"u\":\"26f0-fe0f\"},{\"n\":[\"volcano\"],\"u\":\"1f30b\"},{\"n\":[\"mount fuji\",\"mount_fuji\"],\"u\":\"1f5fb\"},{\"n\":[\"camping\"],\"u\":\"1f3d5-fe0f\"},{\"n\":[\"beach with umbrella\",\"beach_with_umbrella\"],\"u\":\"1f3d6-fe0f\"},{\"n\":[\"desert\"],\"u\":\"1f3dc-fe0f\"},{\"n\":[\"desert island\",\"desert_island\"],\"u\":\"1f3dd-fe0f\"},{\"n\":[\"national park\",\"national_park\"],\"u\":\"1f3de-fe0f\"},{\"n\":[\"stadium\"],\"u\":\"1f3df-fe0f\"},{\"n\":[\"classical building\",\"classical_building\"],\"u\":\"1f3db-fe0f\"},{\"n\":[\"building construction\",\"building_construction\"],\"u\":\"1f3d7-fe0f\"},{\"n\":[\"brick\",\"bricks\"],\"u\":\"1f9f1\"},{\"n\":[\"rock\"],\"u\":\"1faa8\"},{\"n\":[\"wood\"],\"u\":\"1fab5\"},{\"n\":[\"hut\"],\"u\":\"1f6d6\"},{\"n\":[\"houses\",\"house_buildings\"],\"u\":\"1f3d8-fe0f\"},{\"n\":[\"derelict house\",\"derelict_house_building\"],\"u\":\"1f3da-fe0f\"},{\"n\":[\"house building\",\"house\"],\"u\":\"1f3e0\"},{\"n\":[\"house with garden\",\"house_with_garden\"],\"u\":\"1f3e1\"},{\"n\":[\"office building\",\"office\"],\"u\":\"1f3e2\"},{\"n\":[\"japanese post office\",\"post_office\"],\"u\":\"1f3e3\"},{\"n\":[\"european post office\",\"european_post_office\"],\"u\":\"1f3e4\"},{\"n\":[\"hospital\"],\"u\":\"1f3e5\"},{\"n\":[\"bank\"],\"u\":\"1f3e6\"},{\"n\":[\"hotel\"],\"u\":\"1f3e8\"},{\"n\":[\"love hotel\",\"love_hotel\"],\"u\":\"1f3e9\"},{\"n\":[\"convenience store\",\"convenience_store\"],\"u\":\"1f3ea\"},{\"n\":[\"school\"],\"u\":\"1f3eb\"},{\"n\":[\"department store\",\"department_store\"],\"u\":\"1f3ec\"},{\"n\":[\"factory\"],\"u\":\"1f3ed\"},{\"n\":[\"japanese castle\",\"japanese_castle\"],\"u\":\"1f3ef\"},{\"n\":[\"european castle\",\"european_castle\"],\"u\":\"1f3f0\"},{\"n\":[\"wedding\"],\"u\":\"1f492\"},{\"n\":[\"tokyo tower\",\"tokyo_tower\"],\"u\":\"1f5fc\"},{\"n\":[\"statue of liberty\",\"statue_of_liberty\"],\"u\":\"1f5fd\"},{\"n\":[\"church\"],\"u\":\"26ea\"},{\"n\":[\"mosque\"],\"u\":\"1f54c\"},{\"n\":[\"hindu temple\",\"hindu_temple\"],\"u\":\"1f6d5\"},{\"n\":[\"synagogue\"],\"u\":\"1f54d\"},{\"n\":[\"shinto shrine\",\"shinto_shrine\"],\"u\":\"26e9-fe0f\"},{\"n\":[\"kaaba\"],\"u\":\"1f54b\"},{\"n\":[\"fountain\"],\"u\":\"26f2\"},{\"n\":[\"tent\"],\"u\":\"26fa\"},{\"n\":[\"foggy\"],\"u\":\"1f301\"},{\"n\":[\"night with stars\",\"night_with_stars\"],\"u\":\"1f303\"},{\"n\":[\"cityscape\"],\"u\":\"1f3d9-fe0f\"},{\"n\":[\"sunrise over mountains\",\"sunrise_over_mountains\"],\"u\":\"1f304\"},{\"n\":[\"sunrise\"],\"u\":\"1f305\"},{\"n\":[\"cityscape at dusk\",\"city_sunset\"],\"u\":\"1f306\"},{\"n\":[\"sunset over buildings\",\"city_sunrise\"],\"u\":\"1f307\"},{\"n\":[\"bridge at night\",\"bridge_at_night\"],\"u\":\"1f309\"},{\"n\":[\"hot springs\",\"hotsprings\"],\"u\":\"2668-fe0f\"},{\"n\":[\"carousel horse\",\"carousel_horse\"],\"u\":\"1f3a0\"},{\"n\":[\"ferris wheel\",\"ferris_wheel\"],\"u\":\"1f3a1\"},{\"n\":[\"roller coaster\",\"roller_coaster\"],\"u\":\"1f3a2\"},{\"n\":[\"barber pole\",\"barber\"],\"u\":\"1f488\"},{\"n\":[\"circus tent\",\"circus_tent\"],\"u\":\"1f3aa\"},{\"n\":[\"steam locomotive\",\"steam_locomotive\"],\"u\":\"1f682\"},{\"n\":[\"railway car\",\"railway_car\"],\"u\":\"1f683\"},{\"n\":[\"high-speed train\",\"bullettrain_side\"],\"u\":\"1f684\"},{\"n\":[\"high-speed train with bullet nose\",\"bullettrain_front\"],\"u\":\"1f685\"},{\"n\":[\"train\",\"train2\"],\"u\":\"1f686\"},{\"n\":[\"metro\"],\"u\":\"1f687\"},{\"n\":[\"light rail\",\"light_rail\"],\"u\":\"1f688\"},{\"n\":[\"station\"],\"u\":\"1f689\"},{\"n\":[\"tram\"],\"u\":\"1f68a\"},{\"n\":[\"monorail\"],\"u\":\"1f69d\"},{\"n\":[\"mountain railway\",\"mountain_railway\"],\"u\":\"1f69e\"},{\"n\":[\"tram car\",\"train\"],\"u\":\"1f68b\"},{\"n\":[\"bus\"],\"u\":\"1f68c\"},{\"n\":[\"oncoming bus\",\"oncoming_bus\"],\"u\":\"1f68d\"},{\"n\":[\"trolleybus\"],\"u\":\"1f68e\"},{\"n\":[\"minibus\"],\"u\":\"1f690\"},{\"n\":[\"ambulance\"],\"u\":\"1f691\"},{\"n\":[\"fire engine\",\"fire_engine\"],\"u\":\"1f692\"},{\"n\":[\"police car\",\"police_car\"],\"u\":\"1f693\"},{\"n\":[\"oncoming police car\",\"oncoming_police_car\"],\"u\":\"1f694\"},{\"n\":[\"taxi\"],\"u\":\"1f695\"},{\"n\":[\"oncoming taxi\",\"oncoming_taxi\"],\"u\":\"1f696\"},{\"n\":[\"automobile\",\"car\",\"red_car\"],\"u\":\"1f697\"},{\"n\":[\"oncoming automobile\",\"oncoming_automobile\"],\"u\":\"1f698\"},{\"n\":[\"recreational vehicle\",\"blue_car\"],\"u\":\"1f699\"},{\"n\":[\"pickup truck\",\"pickup_truck\"],\"u\":\"1f6fb\"},{\"n\":[\"delivery truck\",\"truck\"],\"u\":\"1f69a\"},{\"n\":[\"articulated lorry\",\"articulated_lorry\"],\"u\":\"1f69b\"},{\"n\":[\"tractor\"],\"u\":\"1f69c\"},{\"n\":[\"racing car\",\"racing_car\"],\"u\":\"1f3ce-fe0f\"},{\"n\":[\"motorcycle\",\"racing_motorcycle\"],\"u\":\"1f3cd-fe0f\"},{\"n\":[\"motor scooter\",\"motor_scooter\"],\"u\":\"1f6f5\"},{\"n\":[\"manual wheelchair\",\"manual_wheelchair\"],\"u\":\"1f9bd\"},{\"n\":[\"motorized wheelchair\",\"motorized_wheelchair\"],\"u\":\"1f9bc\"},{\"n\":[\"auto rickshaw\",\"auto_rickshaw\"],\"u\":\"1f6fa\"},{\"n\":[\"bicycle\",\"bike\"],\"u\":\"1f6b2\"},{\"n\":[\"scooter\"],\"u\":\"1f6f4\"},{\"n\":[\"skateboard\"],\"u\":\"1f6f9\"},{\"n\":[\"roller skate\",\"roller_skate\"],\"u\":\"1f6fc\"},{\"n\":[\"bus stop\",\"busstop\"],\"u\":\"1f68f\"},{\"n\":[\"motorway\"],\"u\":\"1f6e3-fe0f\"},{\"n\":[\"railway track\",\"railway_track\"],\"u\":\"1f6e4-fe0f\"},{\"n\":[\"oil drum\",\"oil_drum\"],\"u\":\"1f6e2-fe0f\"},{\"n\":[\"fuel pump\",\"fuelpump\"],\"u\":\"26fd\"},{\"n\":[\"police cars revolving light\",\"rotating_light\"],\"u\":\"1f6a8\"},{\"n\":[\"horizontal traffic light\",\"traffic_light\"],\"u\":\"1f6a5\"},{\"n\":[\"vertical traffic light\",\"vertical_traffic_light\"],\"u\":\"1f6a6\"},{\"n\":[\"octagonal sign\",\"octagonal_sign\"],\"u\":\"1f6d1\"},{\"n\":[\"construction sign\",\"construction\"],\"u\":\"1f6a7\"},{\"n\":[\"anchor\"],\"u\":\"2693\"},{\"n\":[\"sailboat\",\"boat\"],\"u\":\"26f5\"},{\"n\":[\"canoe\"],\"u\":\"1f6f6\"},{\"n\":[\"speedboat\"],\"u\":\"1f6a4\"},{\"n\":[\"passenger ship\",\"passenger_ship\"],\"u\":\"1f6f3-fe0f\"},{\"n\":[\"ferry\"],\"u\":\"26f4-fe0f\"},{\"n\":[\"motor boat\",\"motor_boat\"],\"u\":\"1f6e5-fe0f\"},{\"n\":[\"ship\"],\"u\":\"1f6a2\"},{\"n\":[\"airplane\"],\"u\":\"2708-fe0f\"},{\"n\":[\"small airplane\",\"small_airplane\"],\"u\":\"1f6e9-fe0f\"},{\"n\":[\"airplane departure\",\"airplane_departure\"],\"u\":\"1f6eb\"},{\"n\":[\"airplane arriving\",\"airplane_arriving\"],\"u\":\"1f6ec\"},{\"n\":[\"parachute\"],\"u\":\"1fa82\"},{\"n\":[\"seat\"],\"u\":\"1f4ba\"},{\"n\":[\"helicopter\"],\"u\":\"1f681\"},{\"n\":[\"suspension railway\",\"suspension_railway\"],\"u\":\"1f69f\"},{\"n\":[\"mountain cableway\",\"mountain_cableway\"],\"u\":\"1f6a0\"},{\"n\":[\"aerial tramway\",\"aerial_tramway\"],\"u\":\"1f6a1\"},{\"n\":[\"satellite\"],\"u\":\"1f6f0-fe0f\"},{\"n\":[\"rocket\"],\"u\":\"1f680\"},{\"n\":[\"flying saucer\",\"flying_saucer\"],\"u\":\"1f6f8\"},{\"n\":[\"bellhop bell\",\"bellhop_bell\"],\"u\":\"1f6ce-fe0f\"},{\"n\":[\"luggage\"],\"u\":\"1f9f3\"},{\"n\":[\"hourglass\"],\"u\":\"231b\"},{\"n\":[\"hourglass with flowing sand\",\"hourglass_flowing_sand\"],\"u\":\"23f3\"},{\"n\":[\"watch\"],\"u\":\"231a\"},{\"n\":[\"alarm clock\",\"alarm_clock\"],\"u\":\"23f0\"},{\"n\":[\"stopwatch\"],\"u\":\"23f1-fe0f\"},{\"n\":[\"timer clock\",\"timer_clock\"],\"u\":\"23f2-fe0f\"},{\"n\":[\"mantelpiece clock\",\"mantelpiece_clock\"],\"u\":\"1f570-fe0f\"},{\"n\":[\"clock face twelve oclock\",\"clock12\"],\"u\":\"1f55b\"},{\"n\":[\"clock face twelve-thirty\",\"clock1230\"],\"u\":\"1f567\"},{\"n\":[\"clock face one oclock\",\"clock1\"],\"u\":\"1f550\"},{\"n\":[\"clock face one-thirty\",\"clock130\"],\"u\":\"1f55c\"},{\"n\":[\"clock face two oclock\",\"clock2\"],\"u\":\"1f551\"},{\"n\":[\"clock face two-thirty\",\"clock230\"],\"u\":\"1f55d\"},{\"n\":[\"clock face three oclock\",\"clock3\"],\"u\":\"1f552\"},{\"n\":[\"clock face three-thirty\",\"clock330\"],\"u\":\"1f55e\"},{\"n\":[\"clock face four oclock\",\"clock4\"],\"u\":\"1f553\"},{\"n\":[\"clock face four-thirty\",\"clock430\"],\"u\":\"1f55f\"},{\"n\":[\"clock face five oclock\",\"clock5\"],\"u\":\"1f554\"},{\"n\":[\"clock face five-thirty\",\"clock530\"],\"u\":\"1f560\"},{\"n\":[\"clock face six oclock\",\"clock6\"],\"u\":\"1f555\"},{\"n\":[\"clock face six-thirty\",\"clock630\"],\"u\":\"1f561\"},{\"n\":[\"clock face seven oclock\",\"clock7\"],\"u\":\"1f556\"},{\"n\":[\"clock face seven-thirty\",\"clock730\"],\"u\":\"1f562\"},{\"n\":[\"clock face eight oclock\",\"clock8\"],\"u\":\"1f557\"},{\"n\":[\"clock face eight-thirty\",\"clock830\"],\"u\":\"1f563\"},{\"n\":[\"clock face nine oclock\",\"clock9\"],\"u\":\"1f558\"},{\"n\":[\"clock face nine-thirty\",\"clock930\"],\"u\":\"1f564\"},{\"n\":[\"clock face ten oclock\",\"clock10\"],\"u\":\"1f559\"},{\"n\":[\"clock face ten-thirty\",\"clock1030\"],\"u\":\"1f565\"},{\"n\":[\"clock face eleven oclock\",\"clock11\"],\"u\":\"1f55a\"},{\"n\":[\"clock face eleven-thirty\",\"clock1130\"],\"u\":\"1f566\"},{\"n\":[\"new moon symbol\",\"new_moon\"],\"u\":\"1f311\"},{\"n\":[\"waxing crescent moon symbol\",\"waxing_crescent_moon\"],\"u\":\"1f312\"},{\"n\":[\"first quarter moon symbol\",\"first_quarter_moon\"],\"u\":\"1f313\"},{\"n\":[\"waxing gibbous moon symbol\",\"moon\",\"waxing_gibbous_moon\"],\"u\":\"1f314\"},{\"n\":[\"full moon symbol\",\"full_moon\"],\"u\":\"1f315\"},{\"n\":[\"waning gibbous moon symbol\",\"waning_gibbous_moon\"],\"u\":\"1f316\"},{\"n\":[\"last quarter moon symbol\",\"last_quarter_moon\"],\"u\":\"1f317\"},{\"n\":[\"waning crescent moon symbol\",\"waning_crescent_moon\"],\"u\":\"1f318\"},{\"n\":[\"crescent moon\",\"crescent_moon\"],\"u\":\"1f319\"},{\"n\":[\"new moon with face\",\"new_moon_with_face\"],\"u\":\"1f31a\"},{\"n\":[\"first quarter moon with face\",\"first_quarter_moon_with_face\"],\"u\":\"1f31b\"},{\"n\":[\"last quarter moon with face\",\"last_quarter_moon_with_face\"],\"u\":\"1f31c\"},{\"n\":[\"thermometer\"],\"u\":\"1f321-fe0f\"},{\"n\":[\"black sun with rays\",\"sunny\"],\"u\":\"2600-fe0f\"},{\"n\":[\"full moon with face\",\"full_moon_with_face\"],\"u\":\"1f31d\"},{\"n\":[\"sun with face\",\"sun_with_face\"],\"u\":\"1f31e\"},{\"n\":[\"ringed planet\",\"ringed_planet\"],\"u\":\"1fa90\"},{\"n\":[\"white medium star\",\"star\"],\"u\":\"2b50\"},{\"n\":[\"glowing star\",\"star2\"],\"u\":\"1f31f\"},{\"n\":[\"shooting star\",\"stars\"],\"u\":\"1f320\"},{\"n\":[\"milky way\",\"milky_way\"],\"u\":\"1f30c\"},{\"n\":[\"cloud\"],\"u\":\"2601-fe0f\"},{\"n\":[\"sun behind cloud\",\"partly_sunny\"],\"u\":\"26c5\"},{\"n\":[\"cloud with lightning and rain\",\"thunder_cloud_and_rain\"],\"u\":\"26c8-fe0f\"},{\"n\":[\"sun behind small cloud\",\"mostly_sunny\",\"sun_small_cloud\"],\"u\":\"1f324-fe0f\"},{\"n\":[\"sun behind large cloud\",\"barely_sunny\",\"sun_behind_cloud\"],\"u\":\"1f325-fe0f\"},{\"n\":[\"sun behind rain cloud\",\"partly_sunny_rain\",\"sun_behind_rain_cloud\"],\"u\":\"1f326-fe0f\"},{\"n\":[\"cloud with rain\",\"rain_cloud\"],\"u\":\"1f327-fe0f\"},{\"n\":[\"cloud with snow\",\"snow_cloud\"],\"u\":\"1f328-fe0f\"},{\"n\":[\"cloud with lightning\",\"lightning\",\"lightning_cloud\"],\"u\":\"1f329-fe0f\"},{\"n\":[\"tornado\",\"tornado_cloud\"],\"u\":\"1f32a-fe0f\"},{\"n\":[\"fog\"],\"u\":\"1f32b-fe0f\"},{\"n\":[\"wind face\",\"wind_blowing_face\"],\"u\":\"1f32c-fe0f\"},{\"n\":[\"cyclone\"],\"u\":\"1f300\"},{\"n\":[\"rainbow\"],\"u\":\"1f308\"},{\"n\":[\"closed umbrella\",\"closed_umbrella\"],\"u\":\"1f302\"},{\"n\":[\"umbrella\"],\"u\":\"2602-fe0f\"},{\"n\":[\"umbrella with rain drops\",\"umbrella_with_rain_drops\"],\"u\":\"2614\"},{\"n\":[\"umbrella on ground\",\"umbrella_on_ground\"],\"u\":\"26f1-fe0f\"},{\"n\":[\"high voltage sign\",\"zap\"],\"u\":\"26a1\"},{\"n\":[\"snowflake\"],\"u\":\"2744-fe0f\"},{\"n\":[\"snowman\"],\"u\":\"2603-fe0f\"},{\"n\":[\"snowman without snow\",\"snowman_without_snow\"],\"u\":\"26c4\"},{\"n\":[\"comet\"],\"u\":\"2604-fe0f\"},{\"n\":[\"fire\"],\"u\":\"1f525\"},{\"n\":[\"droplet\"],\"u\":\"1f4a7\"},{\"n\":[\"water wave\",\"ocean\"],\"u\":\"1f30a\"}],\"activities\":[{\"n\":[\"jack-o-lantern\",\"jack_o_lantern\"],\"u\":\"1f383\"},{\"n\":[\"christmas tree\",\"christmas_tree\"],\"u\":\"1f384\"},{\"n\":[\"fireworks\"],\"u\":\"1f386\"},{\"n\":[\"firework sparkler\",\"sparkler\"],\"u\":\"1f387\"},{\"n\":[\"firecracker\"],\"u\":\"1f9e8\"},{\"n\":[\"sparkles\"],\"u\":\"2728\"},{\"n\":[\"balloon\"],\"u\":\"1f388\"},{\"n\":[\"party popper\",\"tada\"],\"u\":\"1f389\"},{\"n\":[\"confetti ball\",\"confetti_ball\"],\"u\":\"1f38a\"},{\"n\":[\"tanabata tree\",\"tanabata_tree\"],\"u\":\"1f38b\"},{\"n\":[\"pine decoration\",\"bamboo\"],\"u\":\"1f38d\"},{\"n\":[\"japanese dolls\",\"dolls\"],\"u\":\"1f38e\"},{\"n\":[\"carp streamer\",\"flags\"],\"u\":\"1f38f\"},{\"n\":[\"wind chime\",\"wind_chime\"],\"u\":\"1f390\"},{\"n\":[\"moon viewing ceremony\",\"rice_scene\"],\"u\":\"1f391\"},{\"n\":[\"red gift envelope\",\"red_envelope\"],\"u\":\"1f9e7\"},{\"n\":[\"ribbon\"],\"u\":\"1f380\"},{\"n\":[\"wrapped present\",\"gift\"],\"u\":\"1f381\"},{\"n\":[\"reminder ribbon\",\"reminder_ribbon\"],\"u\":\"1f397-fe0f\"},{\"n\":[\"admission tickets\",\"admission_tickets\"],\"u\":\"1f39f-fe0f\"},{\"n\":[\"ticket\"],\"u\":\"1f3ab\"},{\"n\":[\"military medal\",\"medal\"],\"u\":\"1f396-fe0f\"},{\"n\":[\"trophy\"],\"u\":\"1f3c6\"},{\"n\":[\"sports medal\",\"sports_medal\"],\"u\":\"1f3c5\"},{\"n\":[\"first place medal\",\"first_place_medal\"],\"u\":\"1f947\"},{\"n\":[\"second place medal\",\"second_place_medal\"],\"u\":\"1f948\"},{\"n\":[\"third place medal\",\"third_place_medal\"],\"u\":\"1f949\"},{\"n\":[\"soccer ball\",\"soccer\"],\"u\":\"26bd\"},{\"n\":[\"baseball\"],\"u\":\"26be\"},{\"n\":[\"softball\"],\"u\":\"1f94e\"},{\"n\":[\"basketball and hoop\",\"basketball\"],\"u\":\"1f3c0\"},{\"n\":[\"volleyball\"],\"u\":\"1f3d0\"},{\"n\":[\"american football\",\"football\"],\"u\":\"1f3c8\"},{\"n\":[\"rugby football\",\"rugby_football\"],\"u\":\"1f3c9\"},{\"n\":[\"tennis racquet and ball\",\"tennis\"],\"u\":\"1f3be\"},{\"n\":[\"flying disc\",\"flying_disc\"],\"u\":\"1f94f\"},{\"n\":[\"bowling\"],\"u\":\"1f3b3\"},{\"n\":[\"cricket bat and ball\",\"cricket_bat_and_ball\"],\"u\":\"1f3cf\"},{\"n\":[\"field hockey stick and ball\",\"field_hockey_stick_and_ball\"],\"u\":\"1f3d1\"},{\"n\":[\"ice hockey stick and puck\",\"ice_hockey_stick_and_puck\"],\"u\":\"1f3d2\"},{\"n\":[\"lacrosse stick and ball\",\"lacrosse\"],\"u\":\"1f94d\"},{\"n\":[\"table tennis paddle and ball\",\"table_tennis_paddle_and_ball\"],\"u\":\"1f3d3\"},{\"n\":[\"badminton racquet and shuttlecock\",\"badminton_racquet_and_shuttlecock\"],\"u\":\"1f3f8\"},{\"n\":[\"boxing glove\",\"boxing_glove\"],\"u\":\"1f94a\"},{\"n\":[\"martial arts uniform\",\"martial_arts_uniform\"],\"u\":\"1f94b\"},{\"n\":[\"goal net\",\"goal_net\"],\"u\":\"1f945\"},{\"n\":[\"flag in hole\",\"golf\"],\"u\":\"26f3\"},{\"n\":[\"ice skate\",\"ice_skate\"],\"u\":\"26f8-fe0f\"},{\"n\":[\"fishing pole and fish\",\"fishing_pole_and_fish\"],\"u\":\"1f3a3\"},{\"n\":[\"diving mask\",\"diving_mask\"],\"u\":\"1f93f\"},{\"n\":[\"running shirt with sash\",\"running_shirt_with_sash\"],\"u\":\"1f3bd\"},{\"n\":[\"ski and ski boot\",\"ski\"],\"u\":\"1f3bf\"},{\"n\":[\"sled\"],\"u\":\"1f6f7\"},{\"n\":[\"curling stone\",\"curling_stone\"],\"u\":\"1f94c\"},{\"n\":[\"direct hit\",\"dart\"],\"u\":\"1f3af\"},{\"n\":[\"yo-yo\"],\"u\":\"1fa80\"},{\"n\":[\"kite\"],\"u\":\"1fa81\"},{\"n\":[\"billiards\",\"8ball\"],\"u\":\"1f3b1\"},{\"n\":[\"crystal ball\",\"crystal_ball\"],\"u\":\"1f52e\"},{\"n\":[\"magic wand\",\"magic_wand\"],\"u\":\"1fa84\"},{\"n\":[\"nazar amulet\",\"nazar_amulet\"],\"u\":\"1f9ff\"},{\"n\":[\"video game\",\"video_game\"],\"u\":\"1f3ae\"},{\"n\":[\"joystick\"],\"u\":\"1f579-fe0f\"},{\"n\":[\"slot machine\",\"slot_machine\"],\"u\":\"1f3b0\"},{\"n\":[\"game die\",\"game_die\"],\"u\":\"1f3b2\"},{\"n\":[\"jigsaw puzzle piece\",\"jigsaw\"],\"u\":\"1f9e9\"},{\"n\":[\"teddy bear\",\"teddy_bear\"],\"u\":\"1f9f8\"},{\"n\":[\"pinata\"],\"u\":\"1fa85\"},{\"n\":[\"nesting dolls\",\"nesting_dolls\"],\"u\":\"1fa86\"},{\"n\":[\"black spade suit\",\"spades\"],\"u\":\"2660-fe0f\"},{\"n\":[\"black heart suit\",\"hearts\"],\"u\":\"2665-fe0f\"},{\"n\":[\"black diamond suit\",\"diamonds\"],\"u\":\"2666-fe0f\"},{\"n\":[\"black club suit\",\"clubs\"],\"u\":\"2663-fe0f\"},{\"n\":[\"chess pawn\",\"chess_pawn\"],\"u\":\"265f-fe0f\"},{\"n\":[\"playing card black joker\",\"black_joker\"],\"u\":\"1f0cf\"},{\"n\":[\"mahjong tile red dragon\",\"mahjong\"],\"u\":\"1f004\"},{\"n\":[\"flower playing cards\",\"flower_playing_cards\"],\"u\":\"1f3b4\"},{\"n\":[\"performing arts\",\"performing_arts\"],\"u\":\"1f3ad\"},{\"n\":[\"framed picture\",\"frame_with_picture\"],\"u\":\"1f5bc-fe0f\"},{\"n\":[\"artist palette\",\"art\"],\"u\":\"1f3a8\"},{\"n\":[\"spool of thread\",\"thread\"],\"u\":\"1f9f5\"},{\"n\":[\"sewing needle\",\"sewing_needle\"],\"u\":\"1faa1\"},{\"n\":[\"ball of yarn\",\"yarn\"],\"u\":\"1f9f6\"},{\"n\":[\"knot\"],\"u\":\"1faa2\"}],\"objects\":[{\"n\":[\"eyeglasses\"],\"u\":\"1f453\"},{\"n\":[\"sunglasses\",\"dark_sunglasses\"],\"u\":\"1f576-fe0f\"},{\"n\":[\"goggles\"],\"u\":\"1f97d\"},{\"n\":[\"lab coat\",\"lab_coat\"],\"u\":\"1f97c\"},{\"n\":[\"safety vest\",\"safety_vest\"],\"u\":\"1f9ba\"},{\"n\":[\"necktie\"],\"u\":\"1f454\"},{\"n\":[\"t-shirt\",\"shirt\",\"tshirt\"],\"u\":\"1f455\"},{\"n\":[\"jeans\"],\"u\":\"1f456\"},{\"n\":[\"scarf\"],\"u\":\"1f9e3\"},{\"n\":[\"gloves\"],\"u\":\"1f9e4\"},{\"n\":[\"coat\"],\"u\":\"1f9e5\"},{\"n\":[\"socks\"],\"u\":\"1f9e6\"},{\"n\":[\"dress\"],\"u\":\"1f457\"},{\"n\":[\"kimono\"],\"u\":\"1f458\"},{\"n\":[\"sari\"],\"u\":\"1f97b\"},{\"n\":[\"one-piece swimsuit\",\"one-piece_swimsuit\"],\"u\":\"1fa71\"},{\"n\":[\"briefs\"],\"u\":\"1fa72\"},{\"n\":[\"shorts\"],\"u\":\"1fa73\"},{\"n\":[\"bikini\"],\"u\":\"1f459\"},{\"n\":[\"womans clothes\",\"womans_clothes\"],\"u\":\"1f45a\"},{\"n\":[\"purse\"],\"u\":\"1f45b\"},{\"n\":[\"handbag\"],\"u\":\"1f45c\"},{\"n\":[\"pouch\"],\"u\":\"1f45d\"},{\"n\":[\"shopping bags\",\"shopping_bags\"],\"u\":\"1f6cd-fe0f\"},{\"n\":[\"school satchel\",\"school_satchel\"],\"u\":\"1f392\"},{\"n\":[\"thong sandal\",\"thong_sandal\"],\"u\":\"1fa74\"},{\"n\":[\"mans shoe\",\"mans_shoe\",\"shoe\"],\"u\":\"1f45e\"},{\"n\":[\"athletic shoe\",\"athletic_shoe\"],\"u\":\"1f45f\"},{\"n\":[\"hiking boot\",\"hiking_boot\"],\"u\":\"1f97e\"},{\"n\":[\"flat shoe\",\"womans_flat_shoe\"],\"u\":\"1f97f\"},{\"n\":[\"high-heeled shoe\",\"high_heel\"],\"u\":\"1f460\"},{\"n\":[\"womans sandal\",\"sandal\"],\"u\":\"1f461\"},{\"n\":[\"ballet shoes\",\"ballet_shoes\"],\"u\":\"1fa70\"},{\"n\":[\"womans boots\",\"boot\"],\"u\":\"1f462\"},{\"n\":[\"crown\"],\"u\":\"1f451\"},{\"n\":[\"womans hat\",\"womans_hat\"],\"u\":\"1f452\"},{\"n\":[\"top hat\",\"tophat\"],\"u\":\"1f3a9\"},{\"n\":[\"graduation cap\",\"mortar_board\"],\"u\":\"1f393\"},{\"n\":[\"billed cap\",\"billed_cap\"],\"u\":\"1f9e2\"},{\"n\":[\"military helmet\",\"military_helmet\"],\"u\":\"1fa96\"},{\"n\":[\"rescue worker’s helmet\",\"helmet_with_white_cross\"],\"u\":\"26d1-fe0f\"},{\"n\":[\"prayer beads\",\"prayer_beads\"],\"u\":\"1f4ff\"},{\"n\":[\"lipstick\"],\"u\":\"1f484\"},{\"n\":[\"ring\"],\"u\":\"1f48d\"},{\"n\":[\"gem stone\",\"gem\"],\"u\":\"1f48e\"},{\"n\":[\"speaker with cancellation stroke\",\"mute\"],\"u\":\"1f507\"},{\"n\":[\"speaker\"],\"u\":\"1f508\"},{\"n\":[\"speaker with one sound wave\",\"sound\"],\"u\":\"1f509\"},{\"n\":[\"speaker with three sound waves\",\"loud_sound\"],\"u\":\"1f50a\"},{\"n\":[\"public address loudspeaker\",\"loudspeaker\"],\"u\":\"1f4e2\"},{\"n\":[\"cheering megaphone\",\"mega\"],\"u\":\"1f4e3\"},{\"n\":[\"postal horn\",\"postal_horn\"],\"u\":\"1f4ef\"},{\"n\":[\"bell\"],\"u\":\"1f514\"},{\"n\":[\"bell with cancellation stroke\",\"no_bell\"],\"u\":\"1f515\"},{\"n\":[\"musical score\",\"musical_score\"],\"u\":\"1f3bc\"},{\"n\":[\"musical note\",\"musical_note\"],\"u\":\"1f3b5\"},{\"n\":[\"multiple musical notes\",\"notes\"],\"u\":\"1f3b6\"},{\"n\":[\"studio microphone\",\"studio_microphone\"],\"u\":\"1f399-fe0f\"},{\"n\":[\"level slider\",\"level_slider\"],\"u\":\"1f39a-fe0f\"},{\"n\":[\"control knobs\",\"control_knobs\"],\"u\":\"1f39b-fe0f\"},{\"n\":[\"microphone\"],\"u\":\"1f3a4\"},{\"n\":[\"headphone\",\"headphones\"],\"u\":\"1f3a7\"},{\"n\":[\"radio\"],\"u\":\"1f4fb\"},{\"n\":[\"saxophone\"],\"u\":\"1f3b7\"},{\"n\":[\"accordion\"],\"u\":\"1fa97\"},{\"n\":[\"guitar\"],\"u\":\"1f3b8\"},{\"n\":[\"musical keyboard\",\"musical_keyboard\"],\"u\":\"1f3b9\"},{\"n\":[\"trumpet\"],\"u\":\"1f3ba\"},{\"n\":[\"violin\"],\"u\":\"1f3bb\"},{\"n\":[\"banjo\"],\"u\":\"1fa95\"},{\"n\":[\"drum with drumsticks\",\"drum_with_drumsticks\"],\"u\":\"1f941\"},{\"n\":[\"long drum\",\"long_drum\"],\"u\":\"1fa98\"},{\"n\":[\"mobile phone\",\"iphone\"],\"u\":\"1f4f1\"},{\"n\":[\"mobile phone with rightwards arrow at left\",\"calling\"],\"u\":\"1f4f2\"},{\"n\":[\"black telephone\",\"phone\",\"telephone\"],\"u\":\"260e-fe0f\"},{\"n\":[\"telephone receiver\",\"telephone_receiver\"],\"u\":\"1f4de\"},{\"n\":[\"pager\"],\"u\":\"1f4df\"},{\"n\":[\"fax machine\",\"fax\"],\"u\":\"1f4e0\"},{\"n\":[\"battery\"],\"u\":\"1f50b\"},{\"n\":[\"electric plug\",\"electric_plug\"],\"u\":\"1f50c\"},{\"n\":[\"personal computer\",\"computer\"],\"u\":\"1f4bb\"},{\"n\":[\"desktop computer\",\"desktop_computer\"],\"u\":\"1f5a5-fe0f\"},{\"n\":[\"printer\"],\"u\":\"1f5a8-fe0f\"},{\"n\":[\"keyboard\"],\"u\":\"2328-fe0f\"},{\"n\":[\"computer mouse\",\"three_button_mouse\"],\"u\":\"1f5b1-fe0f\"},{\"n\":[\"trackball\"],\"u\":\"1f5b2-fe0f\"},{\"n\":[\"minidisc\"],\"u\":\"1f4bd\"},{\"n\":[\"floppy disk\",\"floppy_disk\"],\"u\":\"1f4be\"},{\"n\":[\"optical disc\",\"cd\"],\"u\":\"1f4bf\"},{\"n\":[\"dvd\"],\"u\":\"1f4c0\"},{\"n\":[\"abacus\"],\"u\":\"1f9ee\"},{\"n\":[\"movie camera\",\"movie_camera\"],\"u\":\"1f3a5\"},{\"n\":[\"film frames\",\"film_frames\"],\"u\":\"1f39e-fe0f\"},{\"n\":[\"film projector\",\"film_projector\"],\"u\":\"1f4fd-fe0f\"},{\"n\":[\"clapper board\",\"clapper\"],\"u\":\"1f3ac\"},{\"n\":[\"television\",\"tv\"],\"u\":\"1f4fa\"},{\"n\":[\"camera\"],\"u\":\"1f4f7\"},{\"n\":[\"camera with flash\",\"camera_with_flash\"],\"u\":\"1f4f8\"},{\"n\":[\"video camera\",\"video_camera\"],\"u\":\"1f4f9\"},{\"n\":[\"videocassette\",\"vhs\"],\"u\":\"1f4fc\"},{\"n\":[\"left-pointing magnifying glass\",\"mag\"],\"u\":\"1f50d\"},{\"n\":[\"right-pointing magnifying glass\",\"mag_right\"],\"u\":\"1f50e\"},{\"n\":[\"candle\"],\"u\":\"1f56f-fe0f\"},{\"n\":[\"electric light bulb\",\"bulb\"],\"u\":\"1f4a1\"},{\"n\":[\"electric torch\",\"flashlight\"],\"u\":\"1f526\"},{\"n\":[\"izakaya lantern\",\"izakaya_lantern\",\"lantern\"],\"u\":\"1f3ee\"},{\"n\":[\"diya lamp\",\"diya_lamp\"],\"u\":\"1fa94\"},{\"n\":[\"notebook with decorative cover\",\"notebook_with_decorative_cover\"],\"u\":\"1f4d4\"},{\"n\":[\"closed book\",\"closed_book\"],\"u\":\"1f4d5\"},{\"n\":[\"open book\",\"book\",\"open_book\"],\"u\":\"1f4d6\"},{\"n\":[\"green book\",\"green_book\"],\"u\":\"1f4d7\"},{\"n\":[\"blue book\",\"blue_book\"],\"u\":\"1f4d8\"},{\"n\":[\"orange book\",\"orange_book\"],\"u\":\"1f4d9\"},{\"n\":[\"books\"],\"u\":\"1f4da\"},{\"n\":[\"notebook\"],\"u\":\"1f4d3\"},{\"n\":[\"ledger\"],\"u\":\"1f4d2\"},{\"n\":[\"page with curl\",\"page_with_curl\"],\"u\":\"1f4c3\"},{\"n\":[\"scroll\"],\"u\":\"1f4dc\"},{\"n\":[\"page facing up\",\"page_facing_up\"],\"u\":\"1f4c4\"},{\"n\":[\"newspaper\"],\"u\":\"1f4f0\"},{\"n\":[\"rolled-up newspaper\",\"rolled_up_newspaper\"],\"u\":\"1f5de-fe0f\"},{\"n\":[\"bookmark tabs\",\"bookmark_tabs\"],\"u\":\"1f4d1\"},{\"n\":[\"bookmark\"],\"u\":\"1f516\"},{\"n\":[\"label\"],\"u\":\"1f3f7-fe0f\"},{\"n\":[\"money bag\",\"moneybag\"],\"u\":\"1f4b0\"},{\"n\":[\"coin\"],\"u\":\"1fa99\"},{\"n\":[\"banknote with yen sign\",\"yen\"],\"u\":\"1f4b4\"},{\"n\":[\"banknote with dollar sign\",\"dollar\"],\"u\":\"1f4b5\"},{\"n\":[\"banknote with euro sign\",\"euro\"],\"u\":\"1f4b6\"},{\"n\":[\"banknote with pound sign\",\"pound\"],\"u\":\"1f4b7\"},{\"n\":[\"money with wings\",\"money_with_wings\"],\"u\":\"1f4b8\"},{\"n\":[\"credit card\",\"credit_card\"],\"u\":\"1f4b3\"},{\"n\":[\"receipt\"],\"u\":\"1f9fe\"},{\"n\":[\"chart with upwards trend and yen sign\",\"chart\"],\"u\":\"1f4b9\"},{\"n\":[\"envelope\",\"email\"],\"u\":\"2709-fe0f\"},{\"n\":[\"e-mail symbol\",\"e-mail\"],\"u\":\"1f4e7\"},{\"n\":[\"incoming envelope\",\"incoming_envelope\"],\"u\":\"1f4e8\"},{\"n\":[\"envelope with downwards arrow above\",\"envelope_with_arrow\"],\"u\":\"1f4e9\"},{\"n\":[\"outbox tray\",\"outbox_tray\"],\"u\":\"1f4e4\"},{\"n\":[\"inbox tray\",\"inbox_tray\"],\"u\":\"1f4e5\"},{\"n\":[\"package\"],\"u\":\"1f4e6\"},{\"n\":[\"closed mailbox with raised flag\",\"mailbox\"],\"u\":\"1f4eb\"},{\"n\":[\"closed mailbox with lowered flag\",\"mailbox_closed\"],\"u\":\"1f4ea\"},{\"n\":[\"open mailbox with raised flag\",\"mailbox_with_mail\"],\"u\":\"1f4ec\"},{\"n\":[\"open mailbox with lowered flag\",\"mailbox_with_no_mail\"],\"u\":\"1f4ed\"},{\"n\":[\"postbox\"],\"u\":\"1f4ee\"},{\"n\":[\"ballot box with ballot\",\"ballot_box_with_ballot\"],\"u\":\"1f5f3-fe0f\"},{\"n\":[\"pencil\",\"pencil2\"],\"u\":\"270f-fe0f\"},{\"n\":[\"black nib\",\"black_nib\"],\"u\":\"2712-fe0f\"},{\"n\":[\"fountain pen\",\"lower_left_fountain_pen\"],\"u\":\"1f58b-fe0f\"},{\"n\":[\"pen\",\"lower_left_ballpoint_pen\"],\"u\":\"1f58a-fe0f\"},{\"n\":[\"paintbrush\",\"lower_left_paintbrush\"],\"u\":\"1f58c-fe0f\"},{\"n\":[\"crayon\",\"lower_left_crayon\"],\"u\":\"1f58d-fe0f\"},{\"n\":[\"memo\",\"pencil\"],\"u\":\"1f4dd\"},{\"n\":[\"briefcase\"],\"u\":\"1f4bc\"},{\"n\":[\"file folder\",\"file_folder\"],\"u\":\"1f4c1\"},{\"n\":[\"open file folder\",\"open_file_folder\"],\"u\":\"1f4c2\"},{\"n\":[\"card index dividers\",\"card_index_dividers\"],\"u\":\"1f5c2-fe0f\"},{\"n\":[\"calendar\",\"date\"],\"u\":\"1f4c5\"},{\"n\":[\"tear-off calendar\",\"calendar\"],\"u\":\"1f4c6\"},{\"n\":[\"spiral notepad\",\"spiral_note_pad\"],\"u\":\"1f5d2-fe0f\"},{\"n\":[\"spiral calendar\",\"spiral_calendar_pad\"],\"u\":\"1f5d3-fe0f\"},{\"n\":[\"card index\",\"card_index\"],\"u\":\"1f4c7\"},{\"n\":[\"chart with upwards trend\",\"chart_with_upwards_trend\"],\"u\":\"1f4c8\"},{\"n\":[\"chart with downwards trend\",\"chart_with_downwards_trend\"],\"u\":\"1f4c9\"},{\"n\":[\"bar chart\",\"bar_chart\"],\"u\":\"1f4ca\"},{\"n\":[\"clipboard\"],\"u\":\"1f4cb\"},{\"n\":[\"pushpin\"],\"u\":\"1f4cc\"},{\"n\":[\"round pushpin\",\"round_pushpin\"],\"u\":\"1f4cd\"},{\"n\":[\"paperclip\"],\"u\":\"1f4ce\"},{\"n\":[\"linked paperclips\",\"linked_paperclips\"],\"u\":\"1f587-fe0f\"},{\"n\":[\"straight ruler\",\"straight_ruler\"],\"u\":\"1f4cf\"},{\"n\":[\"triangular ruler\",\"triangular_ruler\"],\"u\":\"1f4d0\"},{\"n\":[\"black scissors\",\"scissors\"],\"u\":\"2702-fe0f\"},{\"n\":[\"card file box\",\"card_file_box\"],\"u\":\"1f5c3-fe0f\"},{\"n\":[\"file cabinet\",\"file_cabinet\"],\"u\":\"1f5c4-fe0f\"},{\"n\":[\"wastebasket\"],\"u\":\"1f5d1-fe0f\"},{\"n\":[\"lock\"],\"u\":\"1f512\"},{\"n\":[\"open lock\",\"unlock\"],\"u\":\"1f513\"},{\"n\":[\"lock with ink pen\",\"lock_with_ink_pen\"],\"u\":\"1f50f\"},{\"n\":[\"closed lock with key\",\"closed_lock_with_key\"],\"u\":\"1f510\"},{\"n\":[\"key\"],\"u\":\"1f511\"},{\"n\":[\"old key\",\"old_key\"],\"u\":\"1f5dd-fe0f\"},{\"n\":[\"hammer\"],\"u\":\"1f528\"},{\"n\":[\"axe\"],\"u\":\"1fa93\"},{\"n\":[\"pick\"],\"u\":\"26cf-fe0f\"},{\"n\":[\"hammer and pick\",\"hammer_and_pick\"],\"u\":\"2692-fe0f\"},{\"n\":[\"hammer and wrench\",\"hammer_and_wrench\"],\"u\":\"1f6e0-fe0f\"},{\"n\":[\"dagger\",\"dagger_knife\"],\"u\":\"1f5e1-fe0f\"},{\"n\":[\"crossed swords\",\"crossed_swords\"],\"u\":\"2694-fe0f\"},{\"n\":[\"pistol\",\"gun\"],\"u\":\"1f52b\"},{\"n\":[\"boomerang\"],\"u\":\"1fa83\"},{\"n\":[\"bow and arrow\",\"bow_and_arrow\"],\"u\":\"1f3f9\"},{\"n\":[\"shield\"],\"u\":\"1f6e1-fe0f\"},{\"n\":[\"carpentry saw\",\"carpentry_saw\"],\"u\":\"1fa9a\"},{\"n\":[\"wrench\"],\"u\":\"1f527\"},{\"n\":[\"screwdriver\"],\"u\":\"1fa9b\"},{\"n\":[\"nut and bolt\",\"nut_and_bolt\"],\"u\":\"1f529\"},{\"n\":[\"gear\"],\"u\":\"2699-fe0f\"},{\"n\":[\"clamp\",\"compression\"],\"u\":\"1f5dc-fe0f\"},{\"n\":[\"balance scale\",\"scales\"],\"u\":\"2696-fe0f\"},{\"n\":[\"probing cane\",\"probing_cane\"],\"u\":\"1f9af\"},{\"n\":[\"link symbol\",\"link\"],\"u\":\"1f517\"},{\"n\":[\"chains\"],\"u\":\"26d3-fe0f\"},{\"n\":[\"hook\"],\"u\":\"1fa9d\"},{\"n\":[\"toolbox\"],\"u\":\"1f9f0\"},{\"n\":[\"magnet\"],\"u\":\"1f9f2\"},{\"n\":[\"ladder\"],\"u\":\"1fa9c\"},{\"n\":[\"alembic\"],\"u\":\"2697-fe0f\"},{\"n\":[\"test tube\",\"test_tube\"],\"u\":\"1f9ea\"},{\"n\":[\"petri dish\",\"petri_dish\"],\"u\":\"1f9eb\"},{\"n\":[\"dna double helix\",\"dna\"],\"u\":\"1f9ec\"},{\"n\":[\"microscope\"],\"u\":\"1f52c\"},{\"n\":[\"telescope\"],\"u\":\"1f52d\"},{\"n\":[\"satellite antenna\",\"satellite_antenna\"],\"u\":\"1f4e1\"},{\"n\":[\"syringe\"],\"u\":\"1f489\"},{\"n\":[\"drop of blood\",\"drop_of_blood\"],\"u\":\"1fa78\"},{\"n\":[\"pill\"],\"u\":\"1f48a\"},{\"n\":[\"adhesive bandage\",\"adhesive_bandage\"],\"u\":\"1fa79\"},{\"n\":[\"stethoscope\"],\"u\":\"1fa7a\"},{\"n\":[\"door\"],\"u\":\"1f6aa\"},{\"n\":[\"elevator\"],\"u\":\"1f6d7\"},{\"n\":[\"mirror\"],\"u\":\"1fa9e\"},{\"n\":[\"window\"],\"u\":\"1fa9f\"},{\"n\":[\"bed\"],\"u\":\"1f6cf-fe0f\"},{\"n\":[\"couch and lamp\",\"couch_and_lamp\"],\"u\":\"1f6cb-fe0f\"},{\"n\":[\"chair\"],\"u\":\"1fa91\"},{\"n\":[\"toilet\"],\"u\":\"1f6bd\"},{\"n\":[\"plunger\"],\"u\":\"1faa0\"},{\"n\":[\"shower\"],\"u\":\"1f6bf\"},{\"n\":[\"bathtub\"],\"u\":\"1f6c1\"},{\"n\":[\"mouse trap\",\"mouse_trap\"],\"u\":\"1faa4\"},{\"n\":[\"razor\"],\"u\":\"1fa92\"},{\"n\":[\"lotion bottle\",\"lotion_bottle\"],\"u\":\"1f9f4\"},{\"n\":[\"safety pin\",\"safety_pin\"],\"u\":\"1f9f7\"},{\"n\":[\"broom\"],\"u\":\"1f9f9\"},{\"n\":[\"basket\"],\"u\":\"1f9fa\"},{\"n\":[\"roll of paper\",\"roll_of_paper\"],\"u\":\"1f9fb\"},{\"n\":[\"bucket\"],\"u\":\"1faa3\"},{\"n\":[\"bar of soap\",\"soap\"],\"u\":\"1f9fc\"},{\"n\":[\"toothbrush\"],\"u\":\"1faa5\"},{\"n\":[\"sponge\"],\"u\":\"1f9fd\"},{\"n\":[\"fire extinguisher\",\"fire_extinguisher\"],\"u\":\"1f9ef\"},{\"n\":[\"shopping trolley\",\"shopping_trolley\"],\"u\":\"1f6d2\"},{\"n\":[\"smoking symbol\",\"smoking\"],\"u\":\"1f6ac\"},{\"n\":[\"coffin\"],\"u\":\"26b0-fe0f\"},{\"n\":[\"headstone\"],\"u\":\"1faa6\"},{\"n\":[\"funeral urn\",\"funeral_urn\"],\"u\":\"26b1-fe0f\"},{\"n\":[\"moyai\"],\"u\":\"1f5ff\"},{\"n\":[\"placard\"],\"u\":\"1faa7\"}],\"symbols\":[{\"n\":[\"automated teller machine\",\"atm\"],\"u\":\"1f3e7\"},{\"n\":[\"put litter in its place symbol\",\"put_litter_in_its_place\"],\"u\":\"1f6ae\"},{\"n\":[\"potable water symbol\",\"potable_water\"],\"u\":\"1f6b0\"},{\"n\":[\"wheelchair symbol\",\"wheelchair\"],\"u\":\"267f\"},{\"n\":[\"mens symbol\",\"mens\"],\"u\":\"1f6b9\"},{\"n\":[\"womens symbol\",\"womens\"],\"u\":\"1f6ba\"},{\"n\":[\"restroom\"],\"u\":\"1f6bb\"},{\"n\":[\"baby symbol\",\"baby_symbol\"],\"u\":\"1f6bc\"},{\"n\":[\"water closet\",\"wc\"],\"u\":\"1f6be\"},{\"n\":[\"passport control\",\"passport_control\"],\"u\":\"1f6c2\"},{\"n\":[\"customs\"],\"u\":\"1f6c3\"},{\"n\":[\"baggage claim\",\"baggage_claim\"],\"u\":\"1f6c4\"},{\"n\":[\"left luggage\",\"left_luggage\"],\"u\":\"1f6c5\"},{\"n\":[\"warning sign\",\"warning\"],\"u\":\"26a0-fe0f\"},{\"n\":[\"children crossing\",\"children_crossing\"],\"u\":\"1f6b8\"},{\"n\":[\"no entry\",\"no_entry\"],\"u\":\"26d4\"},{\"n\":[\"no entry sign\",\"no_entry_sign\"],\"u\":\"1f6ab\"},{\"n\":[\"no bicycles\",\"no_bicycles\"],\"u\":\"1f6b3\"},{\"n\":[\"no smoking symbol\",\"no_smoking\"],\"u\":\"1f6ad\"},{\"n\":[\"do not litter symbol\",\"do_not_litter\"],\"u\":\"1f6af\"},{\"n\":[\"non-potable water symbol\",\"non-potable_water\"],\"u\":\"1f6b1\"},{\"n\":[\"no pedestrians\",\"no_pedestrians\"],\"u\":\"1f6b7\"},{\"n\":[\"no mobile phones\",\"no_mobile_phones\"],\"u\":\"1f4f5\"},{\"n\":[\"no one under eighteen symbol\",\"underage\"],\"u\":\"1f51e\"},{\"n\":[\"radioactive\",\"radioactive_sign\"],\"u\":\"2622-fe0f\"},{\"n\":[\"biohazard\",\"biohazard_sign\"],\"u\":\"2623-fe0f\"},{\"n\":[\"upwards black arrow\",\"arrow_up\"],\"u\":\"2b06-fe0f\"},{\"n\":[\"north east arrow\",\"arrow_upper_right\"],\"u\":\"2197-fe0f\"},{\"n\":[\"black rightwards arrow\",\"arrow_right\"],\"u\":\"27a1-fe0f\"},{\"n\":[\"south east arrow\",\"arrow_lower_right\"],\"u\":\"2198-fe0f\"},{\"n\":[\"downwards black arrow\",\"arrow_down\"],\"u\":\"2b07-fe0f\"},{\"n\":[\"south west arrow\",\"arrow_lower_left\"],\"u\":\"2199-fe0f\"},{\"n\":[\"leftwards black arrow\",\"arrow_left\"],\"u\":\"2b05-fe0f\"},{\"n\":[\"north west arrow\",\"arrow_upper_left\"],\"u\":\"2196-fe0f\"},{\"n\":[\"up down arrow\",\"arrow_up_down\"],\"u\":\"2195-fe0f\"},{\"n\":[\"left right arrow\",\"left_right_arrow\"],\"u\":\"2194-fe0f\"},{\"n\":[\"leftwards arrow with hook\",\"leftwards_arrow_with_hook\"],\"u\":\"21a9-fe0f\"},{\"n\":[\"rightwards arrow with hook\",\"arrow_right_hook\"],\"u\":\"21aa-fe0f\"},{\"n\":[\"arrow pointing rightwards then curving upwards\",\"arrow_heading_up\"],\"u\":\"2934-fe0f\"},{\"n\":[\"arrow pointing rightwards then curving downwards\",\"arrow_heading_down\"],\"u\":\"2935-fe0f\"},{\"n\":[\"clockwise downwards and upwards open circle arrows\",\"arrows_clockwise\"],\"u\":\"1f503\"},{\"n\":[\"anticlockwise downwards and upwards open circle arrows\",\"arrows_counterclockwise\"],\"u\":\"1f504\"},{\"n\":[\"back with leftwards arrow above\",\"back\"],\"u\":\"1f519\"},{\"n\":[\"end with leftwards arrow above\",\"end\"],\"u\":\"1f51a\"},{\"n\":[\"on with exclamation mark with left right arrow above\",\"on\"],\"u\":\"1f51b\"},{\"n\":[\"soon with rightwards arrow above\",\"soon\"],\"u\":\"1f51c\"},{\"n\":[\"top with upwards arrow above\",\"top\"],\"u\":\"1f51d\"},{\"n\":[\"place of worship\",\"place_of_worship\"],\"u\":\"1f6d0\"},{\"n\":[\"atom symbol\",\"atom_symbol\"],\"u\":\"269b-fe0f\"},{\"n\":[\"om\",\"om_symbol\"],\"u\":\"1f549-fe0f\"},{\"n\":[\"star of david\",\"star_of_david\"],\"u\":\"2721-fe0f\"},{\"n\":[\"wheel of dharma\",\"wheel_of_dharma\"],\"u\":\"2638-fe0f\"},{\"n\":[\"yin yang\",\"yin_yang\"],\"u\":\"262f-fe0f\"},{\"n\":[\"latin cross\",\"latin_cross\"],\"u\":\"271d-fe0f\"},{\"n\":[\"orthodox cross\",\"orthodox_cross\"],\"u\":\"2626-fe0f\"},{\"n\":[\"star and crescent\",\"star_and_crescent\"],\"u\":\"262a-fe0f\"},{\"n\":[\"peace symbol\",\"peace_symbol\"],\"u\":\"262e-fe0f\"},{\"n\":[\"menorah with nine branches\",\"menorah_with_nine_branches\"],\"u\":\"1f54e\"},{\"n\":[\"six pointed star with middle dot\",\"six_pointed_star\"],\"u\":\"1f52f\"},{\"n\":[\"aries\"],\"u\":\"2648\"},{\"n\":[\"taurus\"],\"u\":\"2649\"},{\"n\":[\"gemini\"],\"u\":\"264a\"},{\"n\":[\"cancer\"],\"u\":\"264b\"},{\"n\":[\"leo\"],\"u\":\"264c\"},{\"n\":[\"virgo\"],\"u\":\"264d\"},{\"n\":[\"libra\"],\"u\":\"264e\"},{\"n\":[\"scorpius\"],\"u\":\"264f\"},{\"n\":[\"sagittarius\"],\"u\":\"2650\"},{\"n\":[\"capricorn\"],\"u\":\"2651\"},{\"n\":[\"aquarius\"],\"u\":\"2652\"},{\"n\":[\"pisces\"],\"u\":\"2653\"},{\"n\":[\"ophiuchus\"],\"u\":\"26ce\"},{\"n\":[\"twisted rightwards arrows\",\"twisted_rightwards_arrows\"],\"u\":\"1f500\"},{\"n\":[\"clockwise rightwards and leftwards open circle arrows\",\"repeat\"],\"u\":\"1f501\"},{\"n\":[\"clockwise rightwards and leftwards open circle arrows with circled one overlay\",\"repeat_one\"],\"u\":\"1f502\"},{\"n\":[\"black right-pointing triangle\",\"arrow_forward\"],\"u\":\"25b6-fe0f\"},{\"n\":[\"black right-pointing double triangle\",\"fast_forward\"],\"u\":\"23e9\"},{\"n\":[\"next track button\",\"black_right_pointing_double_triangle_with_vertical_bar\"],\"u\":\"23ed-fe0f\"},{\"n\":[\"play or pause button\",\"black_right_pointing_triangle_with_double_vertical_bar\"],\"u\":\"23ef-fe0f\"},{\"n\":[\"black left-pointing triangle\",\"arrow_backward\"],\"u\":\"25c0-fe0f\"},{\"n\":[\"black left-pointing double triangle\",\"rewind\"],\"u\":\"23ea\"},{\"n\":[\"last track button\",\"black_left_pointing_double_triangle_with_vertical_bar\"],\"u\":\"23ee-fe0f\"},{\"n\":[\"up-pointing small red triangle\",\"arrow_up_small\"],\"u\":\"1f53c\"},{\"n\":[\"black up-pointing double triangle\",\"arrow_double_up\"],\"u\":\"23eb\"},{\"n\":[\"down-pointing small red triangle\",\"arrow_down_small\"],\"u\":\"1f53d\"},{\"n\":[\"black down-pointing double triangle\",\"arrow_double_down\"],\"u\":\"23ec\"},{\"n\":[\"pause button\",\"double_vertical_bar\"],\"u\":\"23f8-fe0f\"},{\"n\":[\"stop button\",\"black_square_for_stop\"],\"u\":\"23f9-fe0f\"},{\"n\":[\"record button\",\"black_circle_for_record\"],\"u\":\"23fa-fe0f\"},{\"n\":[\"eject button\",\"eject\"],\"u\":\"23cf-fe0f\"},{\"n\":[\"cinema\"],\"u\":\"1f3a6\"},{\"n\":[\"low brightness symbol\",\"low_brightness\"],\"u\":\"1f505\"},{\"n\":[\"high brightness symbol\",\"high_brightness\"],\"u\":\"1f506\"},{\"n\":[\"antenna with bars\",\"signal_strength\"],\"u\":\"1f4f6\"},{\"n\":[\"vibration mode\",\"vibration_mode\"],\"u\":\"1f4f3\"},{\"n\":[\"mobile phone off\",\"mobile_phone_off\"],\"u\":\"1f4f4\"},{\"n\":[\"female sign\",\"female_sign\"],\"u\":\"2640-fe0f\"},{\"n\":[\"male sign\",\"male_sign\"],\"u\":\"2642-fe0f\"},{\"n\":[\"transgender symbol\",\"transgender_symbol\"],\"u\":\"26a7-fe0f\"},{\"n\":[\"heavy multiplication x\",\"heavy_multiplication_x\"],\"u\":\"2716-fe0f\"},{\"n\":[\"heavy plus sign\",\"heavy_plus_sign\"],\"u\":\"2795\"},{\"n\":[\"heavy minus sign\",\"heavy_minus_sign\"],\"u\":\"2796\"},{\"n\":[\"heavy division sign\",\"heavy_division_sign\"],\"u\":\"2797\"},{\"n\":[\"infinity\"],\"u\":\"267e-fe0f\"},{\"n\":[\"double exclamation mark\",\"bangbang\"],\"u\":\"203c-fe0f\"},{\"n\":[\"exclamation question mark\",\"interrobang\"],\"u\":\"2049-fe0f\"},{\"n\":[\"black question mark ornament\",\"question\"],\"u\":\"2753\"},{\"n\":[\"white question mark ornament\",\"grey_question\"],\"u\":\"2754\"},{\"n\":[\"white exclamation mark ornament\",\"grey_exclamation\"],\"u\":\"2755\"},{\"n\":[\"heavy exclamation mark symbol\",\"exclamation\",\"heavy_exclamation_mark\"],\"u\":\"2757\"},{\"n\":[\"wavy dash\",\"wavy_dash\"],\"u\":\"3030-fe0f\"},{\"n\":[\"currency exchange\",\"currency_exchange\"],\"u\":\"1f4b1\"},{\"n\":[\"heavy dollar sign\",\"heavy_dollar_sign\"],\"u\":\"1f4b2\"},{\"n\":[\"medical symbol\",\"medical_symbol\",\"staff_of_aesculapius\"],\"u\":\"2695-fe0f\"},{\"n\":[\"black universal recycling symbol\",\"recycle\"],\"u\":\"267b-fe0f\"},{\"n\":[\"fleur-de-lis\",\"fleur_de_lis\"],\"u\":\"269c-fe0f\"},{\"n\":[\"trident emblem\",\"trident\"],\"u\":\"1f531\"},{\"n\":[\"name badge\",\"name_badge\"],\"u\":\"1f4db\"},{\"n\":[\"japanese symbol for beginner\",\"beginner\"],\"u\":\"1f530\"},{\"n\":[\"heavy large circle\",\"o\"],\"u\":\"2b55\"},{\"n\":[\"white heavy check mark\",\"white_check_mark\"],\"u\":\"2705\"},{\"n\":[\"ballot box with check\",\"ballot_box_with_check\"],\"u\":\"2611-fe0f\"},{\"n\":[\"heavy check mark\",\"heavy_check_mark\"],\"u\":\"2714-fe0f\"},{\"n\":[\"cross mark\",\"x\"],\"u\":\"274c\"},{\"n\":[\"negative squared cross mark\",\"negative_squared_cross_mark\"],\"u\":\"274e\"},{\"n\":[\"curly loop\",\"curly_loop\"],\"u\":\"27b0\"},{\"n\":[\"double curly loop\",\"loop\"],\"u\":\"27bf\"},{\"n\":[\"part alternation mark\",\"part_alternation_mark\"],\"u\":\"303d-fe0f\"},{\"n\":[\"eight spoked asterisk\",\"eight_spoked_asterisk\"],\"u\":\"2733-fe0f\"},{\"n\":[\"eight pointed black star\",\"eight_pointed_black_star\"],\"u\":\"2734-fe0f\"},{\"n\":[\"sparkle\"],\"u\":\"2747-fe0f\"},{\"n\":[\"copyright sign\",\"copyright\"],\"u\":\"00a9-fe0f\"},{\"n\":[\"registered sign\",\"registered\"],\"u\":\"00ae-fe0f\"},{\"n\":[\"trade mark sign\",\"tm\"],\"u\":\"2122-fe0f\"},{\"n\":[\"hash key\",\"hash\"],\"u\":\"0023-fe0f-20e3\"},{\"n\":[\"keycap: *\",\"keycap_star\"],\"u\":\"002a-fe0f-20e3\"},{\"n\":[\"keycap 0\",\"zero\"],\"u\":\"0030-fe0f-20e3\"},{\"n\":[\"keycap 1\",\"one\"],\"u\":\"0031-fe0f-20e3\"},{\"n\":[\"keycap 2\",\"two\"],\"u\":\"0032-fe0f-20e3\"},{\"n\":[\"keycap 3\",\"three\"],\"u\":\"0033-fe0f-20e3\"},{\"n\":[\"keycap 4\",\"four\"],\"u\":\"0034-fe0f-20e3\"},{\"n\":[\"keycap 5\",\"five\"],\"u\":\"0035-fe0f-20e3\"},{\"n\":[\"keycap 6\",\"six\"],\"u\":\"0036-fe0f-20e3\"},{\"n\":[\"keycap 7\",\"seven\"],\"u\":\"0037-fe0f-20e3\"},{\"n\":[\"keycap 8\",\"eight\"],\"u\":\"0038-fe0f-20e3\"},{\"n\":[\"keycap 9\",\"nine\"],\"u\":\"0039-fe0f-20e3\"},{\"n\":[\"keycap ten\",\"keycap_ten\"],\"u\":\"1f51f\"},{\"n\":[\"input symbol for latin capital letters\",\"capital_abcd\"],\"u\":\"1f520\"},{\"n\":[\"input symbol for latin small letters\",\"abcd\"],\"u\":\"1f521\"},{\"n\":[\"input symbol for numbers\",\"1234\"],\"u\":\"1f522\"},{\"n\":[\"input symbol for symbols\",\"symbols\"],\"u\":\"1f523\"},{\"n\":[\"input symbol for latin letters\",\"abc\"],\"u\":\"1f524\"},{\"n\":[\"negative squared latin capital letter a\",\"a\"],\"u\":\"1f170-fe0f\"},{\"n\":[\"negative squared ab\",\"ab\"],\"u\":\"1f18e\"},{\"n\":[\"negative squared latin capital letter b\",\"b\"],\"u\":\"1f171-fe0f\"},{\"n\":[\"squared cl\",\"cl\"],\"u\":\"1f191\"},{\"n\":[\"squared cool\",\"cool\"],\"u\":\"1f192\"},{\"n\":[\"squared free\",\"free\"],\"u\":\"1f193\"},{\"n\":[\"information source\",\"information_source\"],\"u\":\"2139-fe0f\"},{\"n\":[\"squared id\",\"id\"],\"u\":\"1f194\"},{\"n\":[\"circled latin capital letter m\",\"m\"],\"u\":\"24c2-fe0f\"},{\"n\":[\"squared new\",\"new\"],\"u\":\"1f195\"},{\"n\":[\"squared ng\",\"ng\"],\"u\":\"1f196\"},{\"n\":[\"negative squared latin capital letter o\",\"o2\"],\"u\":\"1f17e-fe0f\"},{\"n\":[\"squared ok\",\"ok\"],\"u\":\"1f197\"},{\"n\":[\"negative squared latin capital letter p\",\"parking\"],\"u\":\"1f17f-fe0f\"},{\"n\":[\"squared sos\",\"sos\"],\"u\":\"1f198\"},{\"n\":[\"squared up with exclamation mark\",\"up\"],\"u\":\"1f199\"},{\"n\":[\"squared vs\",\"vs\"],\"u\":\"1f19a\"},{\"n\":[\"squared katakana koko\",\"koko\"],\"u\":\"1f201\"},{\"n\":[\"squared katakana sa\",\"sa\"],\"u\":\"1f202-fe0f\"},{\"n\":[\"squared cjk unified ideograph-6708\",\"u6708\"],\"u\":\"1f237-fe0f\"},{\"n\":[\"squared cjk unified ideograph-6709\",\"u6709\"],\"u\":\"1f236\"},{\"n\":[\"squared cjk unified ideograph-6307\",\"u6307\"],\"u\":\"1f22f\"},{\"n\":[\"circled ideograph advantage\",\"ideograph_advantage\"],\"u\":\"1f250\"},{\"n\":[\"squared cjk unified ideograph-5272\",\"u5272\"],\"u\":\"1f239\"},{\"n\":[\"squared cjk unified ideograph-7121\",\"u7121\"],\"u\":\"1f21a\"},{\"n\":[\"squared cjk unified ideograph-7981\",\"u7981\"],\"u\":\"1f232\"},{\"n\":[\"circled ideograph accept\",\"accept\"],\"u\":\"1f251\"},{\"n\":[\"squared cjk unified ideograph-7533\",\"u7533\"],\"u\":\"1f238\"},{\"n\":[\"squared cjk unified ideograph-5408\",\"u5408\"],\"u\":\"1f234\"},{\"n\":[\"squared cjk unified ideograph-7a7a\",\"u7a7a\"],\"u\":\"1f233\"},{\"n\":[\"circled ideograph congratulation\",\"congratulations\"],\"u\":\"3297-fe0f\"},{\"n\":[\"circled ideograph secret\",\"secret\"],\"u\":\"3299-fe0f\"},{\"n\":[\"squared cjk unified ideograph-55b6\",\"u55b6\"],\"u\":\"1f23a\"},{\"n\":[\"squared cjk unified ideograph-6e80\",\"u6e80\"],\"u\":\"1f235\"},{\"n\":[\"large red circle\",\"red_circle\"],\"u\":\"1f534\"},{\"n\":[\"large orange circle\",\"large_orange_circle\"],\"u\":\"1f7e0\"},{\"n\":[\"large yellow circle\",\"large_yellow_circle\"],\"u\":\"1f7e1\"},{\"n\":[\"large green circle\",\"large_green_circle\"],\"u\":\"1f7e2\"},{\"n\":[\"large blue circle\",\"large_blue_circle\"],\"u\":\"1f535\"},{\"n\":[\"large purple circle\",\"large_purple_circle\"],\"u\":\"1f7e3\"},{\"n\":[\"large brown circle\",\"large_brown_circle\"],\"u\":\"1f7e4\"},{\"n\":[\"medium black circle\",\"black_circle\"],\"u\":\"26ab\"},{\"n\":[\"medium white circle\",\"white_circle\"],\"u\":\"26aa\"},{\"n\":[\"large red square\",\"large_red_square\"],\"u\":\"1f7e5\"},{\"n\":[\"large orange square\",\"large_orange_square\"],\"u\":\"1f7e7\"},{\"n\":[\"large yellow square\",\"large_yellow_square\"],\"u\":\"1f7e8\"},{\"n\":[\"large green square\",\"large_green_square\"],\"u\":\"1f7e9\"},{\"n\":[\"large blue square\",\"large_blue_square\"],\"u\":\"1f7e6\"},{\"n\":[\"large purple square\",\"large_purple_square\"],\"u\":\"1f7ea\"},{\"n\":[\"large brown square\",\"large_brown_square\"],\"u\":\"1f7eb\"},{\"n\":[\"black large square\",\"black_large_square\"],\"u\":\"2b1b\"},{\"n\":[\"white large square\",\"white_large_square\"],\"u\":\"2b1c\"},{\"n\":[\"black medium square\",\"black_medium_square\"],\"u\":\"25fc-fe0f\"},{\"n\":[\"white medium square\",\"white_medium_square\"],\"u\":\"25fb-fe0f\"},{\"n\":[\"black medium small square\",\"black_medium_small_square\"],\"u\":\"25fe\"},{\"n\":[\"white medium small square\",\"white_medium_small_square\"],\"u\":\"25fd\"},{\"n\":[\"black small square\",\"black_small_square\"],\"u\":\"25aa-fe0f\"},{\"n\":[\"white small square\",\"white_small_square\"],\"u\":\"25ab-fe0f\"},{\"n\":[\"large orange diamond\",\"large_orange_diamond\"],\"u\":\"1f536\"},{\"n\":[\"large blue diamond\",\"large_blue_diamond\"],\"u\":\"1f537\"},{\"n\":[\"small orange diamond\",\"small_orange_diamond\"],\"u\":\"1f538\"},{\"n\":[\"small blue diamond\",\"small_blue_diamond\"],\"u\":\"1f539\"},{\"n\":[\"up-pointing red triangle\",\"small_red_triangle\"],\"u\":\"1f53a\"},{\"n\":[\"down-pointing red triangle\",\"small_red_triangle_down\"],\"u\":\"1f53b\"},{\"n\":[\"diamond shape with a dot inside\",\"diamond_shape_with_a_dot_inside\"],\"u\":\"1f4a0\"},{\"n\":[\"radio button\",\"radio_button\"],\"u\":\"1f518\"},{\"n\":[\"white square button\",\"white_square_button\"],\"u\":\"1f533\"},{\"n\":[\"black square button\",\"black_square_button\"],\"u\":\"1f532\"}],\"flags\":[{\"n\":[\"chequered flag\",\"checkered_flag\"],\"u\":\"1f3c1\"},{\"n\":[\"triangular flag on post\",\"triangular_flag_on_post\"],\"u\":\"1f6a9\"},{\"n\":[\"crossed flags\",\"crossed_flags\"],\"u\":\"1f38c\"},{\"n\":[\"waving black flag\",\"waving_black_flag\"],\"u\":\"1f3f4\"},{\"n\":[\"white flag\",\"waving_white_flag\"],\"u\":\"1f3f3-fe0f\"},{\"n\":[\"rainbow flag\",\"rainbow-flag\"],\"u\":\"1f3f3-fe0f-200d-1f308\"},{\"n\":[\"transgender flag\",\"transgender_flag\"],\"u\":\"1f3f3-fe0f-200d-26a7-fe0f\"},{\"n\":[\"pirate flag\",\"pirate_flag\"],\"u\":\"1f3f4-200d-2620-fe0f\"},{\"n\":[\"ascension island flag\",\"flag-ac\"],\"u\":\"1f1e6-1f1e8\"},{\"n\":[\"andorra flag\",\"flag-ad\"],\"u\":\"1f1e6-1f1e9\"},{\"n\":[\"united arab emirates flag\",\"flag-ae\"],\"u\":\"1f1e6-1f1ea\"},{\"n\":[\"afghanistan flag\",\"flag-af\"],\"u\":\"1f1e6-1f1eb\"},{\"n\":[\"antigua & barbuda flag\",\"flag-ag\"],\"u\":\"1f1e6-1f1ec\"},{\"n\":[\"anguilla flag\",\"flag-ai\"],\"u\":\"1f1e6-1f1ee\"},{\"n\":[\"albania flag\",\"flag-al\"],\"u\":\"1f1e6-1f1f1\"},{\"n\":[\"armenia flag\",\"flag-am\"],\"u\":\"1f1e6-1f1f2\"},{\"n\":[\"angola flag\",\"flag-ao\"],\"u\":\"1f1e6-1f1f4\"},{\"n\":[\"antarctica flag\",\"flag-aq\"],\"u\":\"1f1e6-1f1f6\"},{\"n\":[\"argentina flag\",\"flag-ar\"],\"u\":\"1f1e6-1f1f7\"},{\"n\":[\"american samoa flag\",\"flag-as\"],\"u\":\"1f1e6-1f1f8\"},{\"n\":[\"austria flag\",\"flag-at\"],\"u\":\"1f1e6-1f1f9\"},{\"n\":[\"australia flag\",\"flag-au\"],\"u\":\"1f1e6-1f1fa\"},{\"n\":[\"aruba flag\",\"flag-aw\"],\"u\":\"1f1e6-1f1fc\"},{\"n\":[\"åland islands flag\",\"flag-ax\"],\"u\":\"1f1e6-1f1fd\"},{\"n\":[\"azerbaijan flag\",\"flag-az\"],\"u\":\"1f1e6-1f1ff\"},{\"n\":[\"bosnia & herzegovina flag\",\"flag-ba\"],\"u\":\"1f1e7-1f1e6\"},{\"n\":[\"barbados flag\",\"flag-bb\"],\"u\":\"1f1e7-1f1e7\"},{\"n\":[\"bangladesh flag\",\"flag-bd\"],\"u\":\"1f1e7-1f1e9\"},{\"n\":[\"belgium flag\",\"flag-be\"],\"u\":\"1f1e7-1f1ea\"},{\"n\":[\"burkina faso flag\",\"flag-bf\"],\"u\":\"1f1e7-1f1eb\"},{\"n\":[\"bulgaria flag\",\"flag-bg\"],\"u\":\"1f1e7-1f1ec\"},{\"n\":[\"bahrain flag\",\"flag-bh\"],\"u\":\"1f1e7-1f1ed\"},{\"n\":[\"burundi flag\",\"flag-bi\"],\"u\":\"1f1e7-1f1ee\"},{\"n\":[\"benin flag\",\"flag-bj\"],\"u\":\"1f1e7-1f1ef\"},{\"n\":[\"st. barthélemy flag\",\"flag-bl\"],\"u\":\"1f1e7-1f1f1\"},{\"n\":[\"bermuda flag\",\"flag-bm\"],\"u\":\"1f1e7-1f1f2\"},{\"n\":[\"brunei flag\",\"flag-bn\"],\"u\":\"1f1e7-1f1f3\"},{\"n\":[\"bolivia flag\",\"flag-bo\"],\"u\":\"1f1e7-1f1f4\"},{\"n\":[\"caribbean netherlands flag\",\"flag-bq\"],\"u\":\"1f1e7-1f1f6\"},{\"n\":[\"brazil flag\",\"flag-br\"],\"u\":\"1f1e7-1f1f7\"},{\"n\":[\"bahamas flag\",\"flag-bs\"],\"u\":\"1f1e7-1f1f8\"},{\"n\":[\"bhutan flag\",\"flag-bt\"],\"u\":\"1f1e7-1f1f9\"},{\"n\":[\"bouvet island flag\",\"flag-bv\"],\"u\":\"1f1e7-1f1fb\"},{\"n\":[\"botswana flag\",\"flag-bw\"],\"u\":\"1f1e7-1f1fc\"},{\"n\":[\"belarus flag\",\"flag-by\"],\"u\":\"1f1e7-1f1fe\"},{\"n\":[\"belize flag\",\"flag-bz\"],\"u\":\"1f1e7-1f1ff\"},{\"n\":[\"canada flag\",\"flag-ca\"],\"u\":\"1f1e8-1f1e6\"},{\"n\":[\"cocos (keeling) islands flag\",\"flag-cc\"],\"u\":\"1f1e8-1f1e8\"},{\"n\":[\"congo - kinshasa flag\",\"flag-cd\"],\"u\":\"1f1e8-1f1e9\"},{\"n\":[\"central african republic flag\",\"flag-cf\"],\"u\":\"1f1e8-1f1eb\"},{\"n\":[\"congo - brazzaville flag\",\"flag-cg\"],\"u\":\"1f1e8-1f1ec\"},{\"n\":[\"switzerland flag\",\"flag-ch\"],\"u\":\"1f1e8-1f1ed\"},{\"n\":[\"côte d’ivoire flag\",\"flag-ci\"],\"u\":\"1f1e8-1f1ee\"},{\"n\":[\"cook islands flag\",\"flag-ck\"],\"u\":\"1f1e8-1f1f0\"},{\"n\":[\"chile flag\",\"flag-cl\"],\"u\":\"1f1e8-1f1f1\"},{\"n\":[\"cameroon flag\",\"flag-cm\"],\"u\":\"1f1e8-1f1f2\"},{\"n\":[\"china flag\",\"cn\",\"flag-cn\"],\"u\":\"1f1e8-1f1f3\"},{\"n\":[\"colombia flag\",\"flag-co\"],\"u\":\"1f1e8-1f1f4\"},{\"n\":[\"clipperton island flag\",\"flag-cp\"],\"u\":\"1f1e8-1f1f5\"},{\"n\":[\"costa rica flag\",\"flag-cr\"],\"u\":\"1f1e8-1f1f7\"},{\"n\":[\"cuba flag\",\"flag-cu\"],\"u\":\"1f1e8-1f1fa\"},{\"n\":[\"cape verde flag\",\"flag-cv\"],\"u\":\"1f1e8-1f1fb\"},{\"n\":[\"curaçao flag\",\"flag-cw\"],\"u\":\"1f1e8-1f1fc\"},{\"n\":[\"christmas island flag\",\"flag-cx\"],\"u\":\"1f1e8-1f1fd\"},{\"n\":[\"cyprus flag\",\"flag-cy\"],\"u\":\"1f1e8-1f1fe\"},{\"n\":[\"czechia flag\",\"flag-cz\"],\"u\":\"1f1e8-1f1ff\"},{\"n\":[\"germany flag\",\"de\",\"flag-de\"],\"u\":\"1f1e9-1f1ea\"},{\"n\":[\"diego garcia flag\",\"flag-dg\"],\"u\":\"1f1e9-1f1ec\"},{\"n\":[\"djibouti flag\",\"flag-dj\"],\"u\":\"1f1e9-1f1ef\"},{\"n\":[\"denmark flag\",\"flag-dk\"],\"u\":\"1f1e9-1f1f0\"},{\"n\":[\"dominica flag\",\"flag-dm\"],\"u\":\"1f1e9-1f1f2\"},{\"n\":[\"dominican republic flag\",\"flag-do\"],\"u\":\"1f1e9-1f1f4\"},{\"n\":[\"algeria flag\",\"flag-dz\"],\"u\":\"1f1e9-1f1ff\"},{\"n\":[\"ceuta & melilla flag\",\"flag-ea\"],\"u\":\"1f1ea-1f1e6\"},{\"n\":[\"ecuador flag\",\"flag-ec\"],\"u\":\"1f1ea-1f1e8\"},{\"n\":[\"estonia flag\",\"flag-ee\"],\"u\":\"1f1ea-1f1ea\"},{\"n\":[\"egypt flag\",\"flag-eg\"],\"u\":\"1f1ea-1f1ec\"},{\"n\":[\"western sahara flag\",\"flag-eh\"],\"u\":\"1f1ea-1f1ed\"},{\"n\":[\"eritrea flag\",\"flag-er\"],\"u\":\"1f1ea-1f1f7\"},{\"n\":[\"spain flag\",\"es\",\"flag-es\"],\"u\":\"1f1ea-1f1f8\"},{\"n\":[\"ethiopia flag\",\"flag-et\"],\"u\":\"1f1ea-1f1f9\"},{\"n\":[\"european union flag\",\"flag-eu\"],\"u\":\"1f1ea-1f1fa\"},{\"n\":[\"finland flag\",\"flag-fi\"],\"u\":\"1f1eb-1f1ee\"},{\"n\":[\"fiji flag\",\"flag-fj\"],\"u\":\"1f1eb-1f1ef\"},{\"n\":[\"falkland islands flag\",\"flag-fk\"],\"u\":\"1f1eb-1f1f0\"},{\"n\":[\"micronesia flag\",\"flag-fm\"],\"u\":\"1f1eb-1f1f2\"},{\"n\":[\"faroe islands flag\",\"flag-fo\"],\"u\":\"1f1eb-1f1f4\"},{\"n\":[\"france flag\",\"fr\",\"flag-fr\"],\"u\":\"1f1eb-1f1f7\"},{\"n\":[\"gabon flag\",\"flag-ga\"],\"u\":\"1f1ec-1f1e6\"},{\"n\":[\"united kingdom flag\",\"gb\",\"uk\",\"flag-gb\"],\"u\":\"1f1ec-1f1e7\"},{\"n\":[\"grenada flag\",\"flag-gd\"],\"u\":\"1f1ec-1f1e9\"},{\"n\":[\"georgia flag\",\"flag-ge\"],\"u\":\"1f1ec-1f1ea\"},{\"n\":[\"french guiana flag\",\"flag-gf\"],\"u\":\"1f1ec-1f1eb\"},{\"n\":[\"guernsey flag\",\"flag-gg\"],\"u\":\"1f1ec-1f1ec\"},{\"n\":[\"ghana flag\",\"flag-gh\"],\"u\":\"1f1ec-1f1ed\"},{\"n\":[\"gibraltar flag\",\"flag-gi\"],\"u\":\"1f1ec-1f1ee\"},{\"n\":[\"greenland flag\",\"flag-gl\"],\"u\":\"1f1ec-1f1f1\"},{\"n\":[\"gambia flag\",\"flag-gm\"],\"u\":\"1f1ec-1f1f2\"},{\"n\":[\"guinea flag\",\"flag-gn\"],\"u\":\"1f1ec-1f1f3\"},{\"n\":[\"guadeloupe flag\",\"flag-gp\"],\"u\":\"1f1ec-1f1f5\"},{\"n\":[\"equatorial guinea flag\",\"flag-gq\"],\"u\":\"1f1ec-1f1f6\"},{\"n\":[\"greece flag\",\"flag-gr\"],\"u\":\"1f1ec-1f1f7\"},{\"n\":[\"south georgia & south sandwich islands flag\",\"flag-gs\"],\"u\":\"1f1ec-1f1f8\"},{\"n\":[\"guatemala flag\",\"flag-gt\"],\"u\":\"1f1ec-1f1f9\"},{\"n\":[\"guam flag\",\"flag-gu\"],\"u\":\"1f1ec-1f1fa\"},{\"n\":[\"guinea-bissau flag\",\"flag-gw\"],\"u\":\"1f1ec-1f1fc\"},{\"n\":[\"guyana flag\",\"flag-gy\"],\"u\":\"1f1ec-1f1fe\"},{\"n\":[\"hong kong sar china flag\",\"flag-hk\"],\"u\":\"1f1ed-1f1f0\"},{\"n\":[\"heard & mcdonald islands flag\",\"flag-hm\"],\"u\":\"1f1ed-1f1f2\"},{\"n\":[\"honduras flag\",\"flag-hn\"],\"u\":\"1f1ed-1f1f3\"},{\"n\":[\"croatia flag\",\"flag-hr\"],\"u\":\"1f1ed-1f1f7\"},{\"n\":[\"haiti flag\",\"flag-ht\"],\"u\":\"1f1ed-1f1f9\"},{\"n\":[\"hungary flag\",\"flag-hu\"],\"u\":\"1f1ed-1f1fa\"},{\"n\":[\"canary islands flag\",\"flag-ic\"],\"u\":\"1f1ee-1f1e8\"},{\"n\":[\"indonesia flag\",\"flag-id\"],\"u\":\"1f1ee-1f1e9\"},{\"n\":[\"ireland flag\",\"flag-ie\"],\"u\":\"1f1ee-1f1ea\"},{\"n\":[\"israel flag\",\"flag-il\"],\"u\":\"1f1ee-1f1f1\"},{\"n\":[\"isle of man flag\",\"flag-im\"],\"u\":\"1f1ee-1f1f2\"},{\"n\":[\"india flag\",\"flag-in\"],\"u\":\"1f1ee-1f1f3\"},{\"n\":[\"british indian ocean territory flag\",\"flag-io\"],\"u\":\"1f1ee-1f1f4\"},{\"n\":[\"iraq flag\",\"flag-iq\"],\"u\":\"1f1ee-1f1f6\"},{\"n\":[\"iran flag\",\"flag-ir\"],\"u\":\"1f1ee-1f1f7\"},{\"n\":[\"iceland flag\",\"flag-is\"],\"u\":\"1f1ee-1f1f8\"},{\"n\":[\"italy flag\",\"it\",\"flag-it\"],\"u\":\"1f1ee-1f1f9\"},{\"n\":[\"jersey flag\",\"flag-je\"],\"u\":\"1f1ef-1f1ea\"},{\"n\":[\"jamaica flag\",\"flag-jm\"],\"u\":\"1f1ef-1f1f2\"},{\"n\":[\"jordan flag\",\"flag-jo\"],\"u\":\"1f1ef-1f1f4\"},{\"n\":[\"japan flag\",\"jp\",\"flag-jp\"],\"u\":\"1f1ef-1f1f5\"},{\"n\":[\"kenya flag\",\"flag-ke\"],\"u\":\"1f1f0-1f1ea\"},{\"n\":[\"kyrgyzstan flag\",\"flag-kg\"],\"u\":\"1f1f0-1f1ec\"},{\"n\":[\"cambodia flag\",\"flag-kh\"],\"u\":\"1f1f0-1f1ed\"},{\"n\":[\"kiribati flag\",\"flag-ki\"],\"u\":\"1f1f0-1f1ee\"},{\"n\":[\"comoros flag\",\"flag-km\"],\"u\":\"1f1f0-1f1f2\"},{\"n\":[\"st. kitts & nevis flag\",\"flag-kn\"],\"u\":\"1f1f0-1f1f3\"},{\"n\":[\"north korea flag\",\"flag-kp\"],\"u\":\"1f1f0-1f1f5\"},{\"n\":[\"south korea flag\",\"kr\",\"flag-kr\"],\"u\":\"1f1f0-1f1f7\"},{\"n\":[\"kuwait flag\",\"flag-kw\"],\"u\":\"1f1f0-1f1fc\"},{\"n\":[\"cayman islands flag\",\"flag-ky\"],\"u\":\"1f1f0-1f1fe\"},{\"n\":[\"kazakhstan flag\",\"flag-kz\"],\"u\":\"1f1f0-1f1ff\"},{\"n\":[\"laos flag\",\"flag-la\"],\"u\":\"1f1f1-1f1e6\"},{\"n\":[\"lebanon flag\",\"flag-lb\"],\"u\":\"1f1f1-1f1e7\"},{\"n\":[\"st. lucia flag\",\"flag-lc\"],\"u\":\"1f1f1-1f1e8\"},{\"n\":[\"liechtenstein flag\",\"flag-li\"],\"u\":\"1f1f1-1f1ee\"},{\"n\":[\"sri lanka flag\",\"flag-lk\"],\"u\":\"1f1f1-1f1f0\"},{\"n\":[\"liberia flag\",\"flag-lr\"],\"u\":\"1f1f1-1f1f7\"},{\"n\":[\"lesotho flag\",\"flag-ls\"],\"u\":\"1f1f1-1f1f8\"},{\"n\":[\"lithuania flag\",\"flag-lt\"],\"u\":\"1f1f1-1f1f9\"},{\"n\":[\"luxembourg flag\",\"flag-lu\"],\"u\":\"1f1f1-1f1fa\"},{\"n\":[\"latvia flag\",\"flag-lv\"],\"u\":\"1f1f1-1f1fb\"},{\"n\":[\"libya flag\",\"flag-ly\"],\"u\":\"1f1f1-1f1fe\"},{\"n\":[\"morocco flag\",\"flag-ma\"],\"u\":\"1f1f2-1f1e6\"},{\"n\":[\"monaco flag\",\"flag-mc\"],\"u\":\"1f1f2-1f1e8\"},{\"n\":[\"moldova flag\",\"flag-md\"],\"u\":\"1f1f2-1f1e9\"},{\"n\":[\"montenegro flag\",\"flag-me\"],\"u\":\"1f1f2-1f1ea\"},{\"n\":[\"st. martin flag\",\"flag-mf\"],\"u\":\"1f1f2-1f1eb\"},{\"n\":[\"madagascar flag\",\"flag-mg\"],\"u\":\"1f1f2-1f1ec\"},{\"n\":[\"marshall islands flag\",\"flag-mh\"],\"u\":\"1f1f2-1f1ed\"},{\"n\":[\"north macedonia flag\",\"flag-mk\"],\"u\":\"1f1f2-1f1f0\"},{\"n\":[\"mali flag\",\"flag-ml\"],\"u\":\"1f1f2-1f1f1\"},{\"n\":[\"myanmar (burma) flag\",\"flag-mm\"],\"u\":\"1f1f2-1f1f2\"},{\"n\":[\"mongolia flag\",\"flag-mn\"],\"u\":\"1f1f2-1f1f3\"},{\"n\":[\"macao sar china flag\",\"flag-mo\"],\"u\":\"1f1f2-1f1f4\"},{\"n\":[\"northern mariana islands flag\",\"flag-mp\"],\"u\":\"1f1f2-1f1f5\"},{\"n\":[\"martinique flag\",\"flag-mq\"],\"u\":\"1f1f2-1f1f6\"},{\"n\":[\"mauritania flag\",\"flag-mr\"],\"u\":\"1f1f2-1f1f7\"},{\"n\":[\"montserrat flag\",\"flag-ms\"],\"u\":\"1f1f2-1f1f8\"},{\"n\":[\"malta flag\",\"flag-mt\"],\"u\":\"1f1f2-1f1f9\"},{\"n\":[\"mauritius flag\",\"flag-mu\"],\"u\":\"1f1f2-1f1fa\"},{\"n\":[\"maldives flag\",\"flag-mv\"],\"u\":\"1f1f2-1f1fb\"},{\"n\":[\"malawi flag\",\"flag-mw\"],\"u\":\"1f1f2-1f1fc\"},{\"n\":[\"mexico flag\",\"flag-mx\"],\"u\":\"1f1f2-1f1fd\"},{\"n\":[\"malaysia flag\",\"flag-my\"],\"u\":\"1f1f2-1f1fe\"},{\"n\":[\"mozambique flag\",\"flag-mz\"],\"u\":\"1f1f2-1f1ff\"},{\"n\":[\"namibia flag\",\"flag-na\"],\"u\":\"1f1f3-1f1e6\"},{\"n\":[\"new caledonia flag\",\"flag-nc\"],\"u\":\"1f1f3-1f1e8\"},{\"n\":[\"niger flag\",\"flag-ne\"],\"u\":\"1f1f3-1f1ea\"},{\"n\":[\"norfolk island flag\",\"flag-nf\"],\"u\":\"1f1f3-1f1eb\"},{\"n\":[\"nigeria flag\",\"flag-ng\"],\"u\":\"1f1f3-1f1ec\"},{\"n\":[\"nicaragua flag\",\"flag-ni\"],\"u\":\"1f1f3-1f1ee\"},{\"n\":[\"netherlands flag\",\"flag-nl\"],\"u\":\"1f1f3-1f1f1\"},{\"n\":[\"norway flag\",\"flag-no\"],\"u\":\"1f1f3-1f1f4\"},{\"n\":[\"nepal flag\",\"flag-np\"],\"u\":\"1f1f3-1f1f5\"},{\"n\":[\"nauru flag\",\"flag-nr\"],\"u\":\"1f1f3-1f1f7\"},{\"n\":[\"niue flag\",\"flag-nu\"],\"u\":\"1f1f3-1f1fa\"},{\"n\":[\"new zealand flag\",\"flag-nz\"],\"u\":\"1f1f3-1f1ff\"},{\"n\":[\"oman flag\",\"flag-om\"],\"u\":\"1f1f4-1f1f2\"},{\"n\":[\"panama flag\",\"flag-pa\"],\"u\":\"1f1f5-1f1e6\"},{\"n\":[\"peru flag\",\"flag-pe\"],\"u\":\"1f1f5-1f1ea\"},{\"n\":[\"french polynesia flag\",\"flag-pf\"],\"u\":\"1f1f5-1f1eb\"},{\"n\":[\"papua new guinea flag\",\"flag-pg\"],\"u\":\"1f1f5-1f1ec\"},{\"n\":[\"philippines flag\",\"flag-ph\"],\"u\":\"1f1f5-1f1ed\"},{\"n\":[\"pakistan flag\",\"flag-pk\"],\"u\":\"1f1f5-1f1f0\"},{\"n\":[\"poland flag\",\"flag-pl\"],\"u\":\"1f1f5-1f1f1\"},{\"n\":[\"st. pierre & miquelon flag\",\"flag-pm\"],\"u\":\"1f1f5-1f1f2\"},{\"n\":[\"pitcairn islands flag\",\"flag-pn\"],\"u\":\"1f1f5-1f1f3\"},{\"n\":[\"puerto rico flag\",\"flag-pr\"],\"u\":\"1f1f5-1f1f7\"},{\"n\":[\"palestinian territories flag\",\"flag-ps\"],\"u\":\"1f1f5-1f1f8\"},{\"n\":[\"portugal flag\",\"flag-pt\"],\"u\":\"1f1f5-1f1f9\"},{\"n\":[\"palau flag\",\"flag-pw\"],\"u\":\"1f1f5-1f1fc\"},{\"n\":[\"paraguay flag\",\"flag-py\"],\"u\":\"1f1f5-1f1fe\"},{\"n\":[\"qatar flag\",\"flag-qa\"],\"u\":\"1f1f6-1f1e6\"},{\"n\":[\"réunion flag\",\"flag-re\"],\"u\":\"1f1f7-1f1ea\"},{\"n\":[\"romania flag\",\"flag-ro\"],\"u\":\"1f1f7-1f1f4\"},{\"n\":[\"serbia flag\",\"flag-rs\"],\"u\":\"1f1f7-1f1f8\"},{\"n\":[\"russia flag\",\"ru\",\"flag-ru\"],\"u\":\"1f1f7-1f1fa\"},{\"n\":[\"rwanda flag\",\"flag-rw\"],\"u\":\"1f1f7-1f1fc\"},{\"n\":[\"saudi arabia flag\",\"flag-sa\"],\"u\":\"1f1f8-1f1e6\"},{\"n\":[\"solomon islands flag\",\"flag-sb\"],\"u\":\"1f1f8-1f1e7\"},{\"n\":[\"seychelles flag\",\"flag-sc\"],\"u\":\"1f1f8-1f1e8\"},{\"n\":[\"sudan flag\",\"flag-sd\"],\"u\":\"1f1f8-1f1e9\"},{\"n\":[\"sweden flag\",\"flag-se\"],\"u\":\"1f1f8-1f1ea\"},{\"n\":[\"singapore flag\",\"flag-sg\"],\"u\":\"1f1f8-1f1ec\"},{\"n\":[\"st. helena flag\",\"flag-sh\"],\"u\":\"1f1f8-1f1ed\"},{\"n\":[\"slovenia flag\",\"flag-si\"],\"u\":\"1f1f8-1f1ee\"},{\"n\":[\"svalbard & jan mayen flag\",\"flag-sj\"],\"u\":\"1f1f8-1f1ef\"},{\"n\":[\"slovakia flag\",\"flag-sk\"],\"u\":\"1f1f8-1f1f0\"},{\"n\":[\"sierra leone flag\",\"flag-sl\"],\"u\":\"1f1f8-1f1f1\"},{\"n\":[\"san marino flag\",\"flag-sm\"],\"u\":\"1f1f8-1f1f2\"},{\"n\":[\"senegal flag\",\"flag-sn\"],\"u\":\"1f1f8-1f1f3\"},{\"n\":[\"somalia flag\",\"flag-so\"],\"u\":\"1f1f8-1f1f4\"},{\"n\":[\"suriname flag\",\"flag-sr\"],\"u\":\"1f1f8-1f1f7\"},{\"n\":[\"south sudan flag\",\"flag-ss\"],\"u\":\"1f1f8-1f1f8\"},{\"n\":[\"são tomé & príncipe flag\",\"flag-st\"],\"u\":\"1f1f8-1f1f9\"},{\"n\":[\"el salvador flag\",\"flag-sv\"],\"u\":\"1f1f8-1f1fb\"},{\"n\":[\"sint maarten flag\",\"flag-sx\"],\"u\":\"1f1f8-1f1fd\"},{\"n\":[\"syria flag\",\"flag-sy\"],\"u\":\"1f1f8-1f1fe\"},{\"n\":[\"eswatini flag\",\"flag-sz\"],\"u\":\"1f1f8-1f1ff\"},{\"n\":[\"tristan da cunha flag\",\"flag-ta\"],\"u\":\"1f1f9-1f1e6\"},{\"n\":[\"turks & caicos islands flag\",\"flag-tc\"],\"u\":\"1f1f9-1f1e8\"},{\"n\":[\"chad flag\",\"flag-td\"],\"u\":\"1f1f9-1f1e9\"},{\"n\":[\"french southern territories flag\",\"flag-tf\"],\"u\":\"1f1f9-1f1eb\"},{\"n\":[\"togo flag\",\"flag-tg\"],\"u\":\"1f1f9-1f1ec\"},{\"n\":[\"thailand flag\",\"flag-th\"],\"u\":\"1f1f9-1f1ed\"},{\"n\":[\"tajikistan flag\",\"flag-tj\"],\"u\":\"1f1f9-1f1ef\"},{\"n\":[\"tokelau flag\",\"flag-tk\"],\"u\":\"1f1f9-1f1f0\"},{\"n\":[\"timor-leste flag\",\"flag-tl\"],\"u\":\"1f1f9-1f1f1\"},{\"n\":[\"turkmenistan flag\",\"flag-tm\"],\"u\":\"1f1f9-1f1f2\"},{\"n\":[\"tunisia flag\",\"flag-tn\"],\"u\":\"1f1f9-1f1f3\"},{\"n\":[\"tonga flag\",\"flag-to\"],\"u\":\"1f1f9-1f1f4\"},{\"n\":[\"turkey flag\",\"flag-tr\"],\"u\":\"1f1f9-1f1f7\"},{\"n\":[\"trinidad & tobago flag\",\"flag-tt\"],\"u\":\"1f1f9-1f1f9\"},{\"n\":[\"tuvalu flag\",\"flag-tv\"],\"u\":\"1f1f9-1f1fb\"},{\"n\":[\"taiwan flag\",\"flag-tw\"],\"u\":\"1f1f9-1f1fc\"},{\"n\":[\"tanzania flag\",\"flag-tz\"],\"u\":\"1f1f9-1f1ff\"},{\"n\":[\"ukraine flag\",\"flag-ua\"],\"u\":\"1f1fa-1f1e6\"},{\"n\":[\"uganda flag\",\"flag-ug\"],\"u\":\"1f1fa-1f1ec\"},{\"n\":[\"u.s. outlying islands flag\",\"flag-um\"],\"u\":\"1f1fa-1f1f2\"},{\"n\":[\"united nations flag\",\"flag-un\"],\"u\":\"1f1fa-1f1f3\"},{\"n\":[\"united states flag\",\"us\",\"flag-us\"],\"u\":\"1f1fa-1f1f8\"},{\"n\":[\"uruguay flag\",\"flag-uy\"],\"u\":\"1f1fa-1f1fe\"},{\"n\":[\"uzbekistan flag\",\"flag-uz\"],\"u\":\"1f1fa-1f1ff\"},{\"n\":[\"vatican city flag\",\"flag-va\"],\"u\":\"1f1fb-1f1e6\"},{\"n\":[\"st. vincent & grenadines flag\",\"flag-vc\"],\"u\":\"1f1fb-1f1e8\"},{\"n\":[\"venezuela flag\",\"flag-ve\"],\"u\":\"1f1fb-1f1ea\"},{\"n\":[\"british virgin islands flag\",\"flag-vg\"],\"u\":\"1f1fb-1f1ec\"},{\"n\":[\"u.s. virgin islands flag\",\"flag-vi\"],\"u\":\"1f1fb-1f1ee\"},{\"n\":[\"vietnam flag\",\"flag-vn\"],\"u\":\"1f1fb-1f1f3\"},{\"n\":[\"vanuatu flag\",\"flag-vu\"],\"u\":\"1f1fb-1f1fa\"},{\"n\":[\"wallis & futuna flag\",\"flag-wf\"],\"u\":\"1f1fc-1f1eb\"},{\"n\":[\"samoa flag\",\"flag-ws\"],\"u\":\"1f1fc-1f1f8\"},{\"n\":[\"kosovo flag\",\"flag-xk\"],\"u\":\"1f1fd-1f1f0\"},{\"n\":[\"yemen flag\",\"flag-ye\"],\"u\":\"1f1fe-1f1ea\"},{\"n\":[\"mayotte flag\",\"flag-yt\"],\"u\":\"1f1fe-1f1f9\"},{\"n\":[\"south africa flag\",\"flag-za\"],\"u\":\"1f1ff-1f1e6\"},{\"n\":[\"zambia flag\",\"flag-zm\"],\"u\":\"1f1ff-1f1f2\"},{\"n\":[\"zimbabwe flag\",\"flag-zw\"],\"u\":\"1f1ff-1f1fc\"},{\"n\":[\"england flag\",\"flag-england\"],\"u\":\"1f3f4-e0067-e0062-e0065-e006e-e0067-e007f\"},{\"n\":[\"scotland flag\",\"flag-scotland\"],\"u\":\"1f3f4-e0067-e0062-e0073-e0063-e0074-e007f\"},{\"n\":[\"wales flag\",\"flag-wales\"],\"u\":\"1f3f4-e0067-e0062-e0077-e006c-e0073-e007f\"}]}");

/***/ }),
/* 12 */
/***/ (function(module) {

module.exports = JSON.parse("[\"neutral\",\"1f3fb\",\"1f3fc\",\"1f3fd\",\"1f3fe\",\"1f3ff\"]");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(14);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(17);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 16 */
/***/ (function(module) {

module.exports = JSON.parse("[\"1f6fc\",\"1f90c\",\"1fac0\",\"1fac1\",\"1f977\",\"1fac2\",\"1f6fb\",\"1faa0\",\"1faa4\",\"1faa3\",\"1faa5\",\"1faa6\",\"1faa7\",\"1fa9c\",\"1f6d7\",\"1fa9e\",\"1fa9f\",\"1fa9d\",\"1fa9b\",\"1fa99\",\"1fa83\",\"1fa9a\",\"1fa98\",\"1faa1\",\"1faa2\",\"1fa74\",\"1fa96\",\"1fa97\",\"1fa86\",\"1fa84\",\"1fa85\",\"1f6d6\",\"1fab5\",\"1faa8\",\"1f9cb\",\"1fad6\",\"1fad5\",\"1fad4\",\"1fad3\",\"1fad1\",\"1fab4\",\"1fad0\",\"1fad2\",\"1fab1\",\"1fab3\",\"1fab0\",\"1fab2\",\"1f9ad\",\"1f9a4\",\"1fab6\",\"1f972\",\"1f978\",\"1f9ac\",\"1f9a3\",\"1f9ab\",\"1f4a9\",\"2640-fe0f\",\"2642-fe0f\",\"1f1e7-1f1f1\",\"1f1e7-1f1f6\",\"1f1e9-1f1ec\",\"1f1ea-1f1e6\",\"1f1ea-1f1ed\",\"1f1eb-1f1f0\",\"1f1ec-1f1eb\",\"1f1f2-1f1eb\",\"1f1f2-1f1f6\",\"1f1f3-1f1e8\",\"1f1f5-1f1f2\",\"1f1fc-1f1eb\",\"1f636-200d-1f32b-fe0f\",\"1f62e-200d-1f4a8\",\"1f635-200d-1f4ab\",\"2764-fe0f-200d-1f525\",\"1f9d4-200d-2642-fe0f\",\"1f9d4-200d-2640-fe0f\",\"2764-fe0f-200d-1fa79\",\"1f468-200d-1f9b0\",\"1f468-200d-1f9b1\",\"1f468-200d-1f9b2\",\"1f468-200d-1f9b3\",\"1f469-200d-1f9b0\",\"1f9d1-200d-1f9b0\",\"1f469-200d-1f9b1\",\"1f9d1-200d-1f9b1\",\"1f469-200d-1f9b3\",\"1f9d1-200d-1f9b3\",\"1f469-200d-1f9b2\",\"1f9cf-200d-2642-fe0f\",\"1f9cf-200d-2640-fe0f\",\"1f9d1-200d-2695-fe0f\",\"1f9d1-200d-1f393\",\"1f9d1-200d-1f3a4\",\"1f9d1-200d-1f4bb\",\"1f9d1-200d-1f3a8\",\"1f9d1-200d-2708-fe0f\",\"1f9d1-200d-1f692\",\"1f935-200d-2642-fe0f\",\"1f935-200d-2640-fe0f\",\"1f470-200d-2642-fe0f\",\"1f470-200d-2640-fe0f\",\"1f469-200d-1f37c\",\"1f468-200d-1f37c\",\"1f9d1-200d-1f37c\",\"1f9d1-200d-1f384\",\"1f9b8-200d-2642-fe0f\",\"1f9b8-200d-2640-fe0f\",\"1f9b9-200d-2642-fe0f\",\"1f9b9-200d-2640-fe0f\",\"1f9cd-200d-2642-fe0f\",\"1f9cd-200d-2640-fe0f\",\"1f9ce-200d-2642-fe0f\",\"1f9ce-200d-2640-fe0f\",\"1f9d1-200d-1f9af\",\"1f468-200d-1f9af\",\"1f469-200d-1f9af\",\"1f9d1-200d-1f9b2\",\"1f9d1-200d-1f3eb\",\"1f9d1-200d-2696-fe0f\",\"1f9d1-200d-1f33e\",\"1f9d1-200d-1f373\",\"1f9d1-200d-1f527\",\"1f9d1-200d-1f680\",\"1f9d1-200d-1f9bc\",\"1f468-200d-1f9bc\",\"1f469-200d-1f9bc\",\"1f469-200d-1f9bd\",\"1f43b-200d-2744-fe0f\",\"1f1f7-1f1ea\",\"1f1fd-1f1f0\",\"1f1fe-1f1f9\",\"1f9d1-200d-1f3ed\",\"1f9d1-200d-1f4bc\",\"1f9d1-200d-1f52c\",\"1f9d1-200d-1f9bd\",\"1f468-200d-1f9bd\",\"1f415-200d-1f9ba\",\"1f408-200d-2b1b\",\"1f9d1-200d-1f91d-200d-1f9d1\",\"1f1ec-1f1f5\",\"1f1ec-1f1f8\",\"1f1f9-1f1eb\"]");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(19);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(6);
            var content = __webpack_require__(24);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(25);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(26);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(27);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(28);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(31);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(32);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(33);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
// Module
exports.push([module.i, ".emoji-picker-react .emoji-categories button {\n  height: 40px;\n  width: 30px;\n  padding: 5px 0;\n  background-repeat: no-repeat;\n  background-size: 20px;\n  background-position: 50% 50%;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 0.1s;\n}\n\n.emoji-picker-react .emoji-categories button:focus-visible,\n.emoji-picker-react .emoji-categories button:focus:where(:not(.active)) {\n  background-color: #99c2f160;\n}\n\n.emoji-picker-react .active-category-indicator-wrapper {\n  position: relative;\n  width: 100%;\n}\n\n.emoji-picker-react\n  .active-category-indicator-wrapper\n  .active-category-indicator {\n  background: #99c2f1;\n  height: 3px;\n  width: 5px;\n  position: absolute;\n  bottom: 3px;\n  border-radius: 5px;\n  transition: 0.3s;\n  width: 30px;\n}\n\n.emoji-picker-react .emoji-categories button.icn-activities {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.emoji-picker-react .emoji-categories button.icn-animals_nature {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.emoji-picker-react .emoji-categories button.icn-flags {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.emoji-picker-react .emoji-categories button.icn-food_drink {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n.emoji-picker-react .emoji-categories button.icn-objects {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n.emoji-picker-react .emoji-categories button.icn-smileys_people {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n.emoji-picker-react .emoji-categories button.icn-symbols {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.emoji-picker-react .emoji-categories button.icn-travel_places {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n\n.emoji-picker-react .emoji-categories {\n  padding: 0 15px;\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n}\n\n.emoji-picker-react .emoji-categories.inactive button,\n.emoji-picker-react .emoji-categories.inactive button.active,\n.emoji-picker-react .emoji-categories.inactive button:hover {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.emoji-picker-react .emoji-categories button.active {\n  opacity: 1;\n}\n\n.emoji-picker-react .emoji-categories button:hover {\n  opacity: 0.7;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32 0C14.355 0 0 14.355 0 32s14.355 32 32 32 32-14.355 32-32S49.645 0 32 0zm29.624 36.731l-3.885-6.439 2.681-7.88a29.867 29.867 0 0 1 1.204 14.319zm-7.558 15.567a.994.994 0 0 0-.408-.02L43.98 53.83a.993.993 0 0 0-.123-.345l-5.502-9.17 8.896-13.7h8.428a.992.992 0 0 0 .105.312l5.236 8.678a29.956 29.956 0 0 1-6.954 12.693zm-10.085 3.557l7.688-1.232a29.958 29.958 0 0 1-11.706 6.296l4.018-5.064zM12.65 9.1a29.858 29.858 0 0 1 18.628-7.082.982.982 0 0 0 .24.376l5.525 5.214-2.185 8.156-14.237 5.465c-.052-.042-.093-.094-.154-.126l-8.87-4.701L12.65 9.1zm25.736-2.976l-4.283-4.042a29.763 29.763 0 0 1 10.989 2.931l-6.706 1.111zM21.93 38.737l-.816-15.554L35.655 17.6l9.803 12.106-8.483 13.063-15.045-4.032zm37.375-19.141c-.031.054-.072.098-.093.159l-3.015 8.86h-9.048L36.882 15.937l2.113-7.887 8.27-1.371a.979.979 0 0 0 .453-.218 30.2 30.2 0 0 1 11.587 13.135zm-48.994-8.289l-.802 5.561-5.349 3.975a30.035 30.035 0 0 1 6.151-9.536zm-7.255 12.82c.044-.023.09-.037.131-.068l7.737-5.751 8.158 4.323.888 16.936c.002.025.013.048.016.073l-7.71 7.629c-.066.065-.105.145-.149.222L4.734 44.32c-.028-.012-.057-.009-.085-.018A29.822 29.822 0 0 1 2 32c0-2.725.372-5.362 1.056-7.873zm3.022 22.945l5.415 2.322 4.141 7.729a30.222 30.222 0 0 1-9.556-10.051zm12.759 11.879c-.019-.064-.025-.131-.058-.192l-5.317-9.924c.076-.043.155-.08.22-.145l8.027-7.942 14.507 3.888 5.927 9.879c.05.083.11.154.178.217l-5.449 6.867c-1.587.26-3.213.401-4.872.401-4.72 0-9.186-1.099-13.163-3.049z'/%3E%3C/svg%3E"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 470 470'%3E%3Cpath d='M401.17 68.83C356.784 24.444 297.771 0 235 0S113.216 24.444 68.83 68.83 0 172.229 0 235s24.444 121.784 68.83 166.17S172.229 470 235 470s121.784-24.444 166.17-68.83S470 297.771 470 235s-24.444-121.784-68.83-166.17zM235 455c-121.309 0-220-98.691-220-220S113.691 15 235 15s220 98.691 220 220-98.691 220-220 220z'/%3E%3Cpath d='M382.5 173.979c3.532 0 6.735 1.824 8.568 4.879a7.499 7.499 0 0 0 12.864 0c1.833-3.055 5.036-4.879 8.568-4.879 4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5c-5.461 0-10.724 1.829-15 5.039-4.276-3.21-9.539-5.039-15-5.039-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5zM322.5 135.459c3.532 0 6.735 1.824 8.568 4.879a7.499 7.499 0 0 0 12.864 0c1.833-3.055 5.036-4.879 8.568-4.879 4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5c-5.461 0-10.724 1.829-15 5.039-4.276-3.21-9.539-5.039-15-5.039-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5zM117.5 173.979c3.532 0 6.735 1.824 8.568 4.879a7.499 7.499 0 0 0 12.864 0c1.833-3.055 5.036-4.879 8.568-4.879 4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5c-5.461 0-10.724 1.829-15 5.039-4.276-3.21-9.539-5.039-15-5.039-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5zM436.826 253.173a7.5 7.5 0 0 0-5.443-2.6c-12.664-.4-24.343-7.548-32.041-19.608a7.5 7.5 0 0 0-12.643-.001c-7.974 12.489-20.074 19.652-33.2 19.652-13.089 0-25.177-7.164-33.162-19.656a7.502 7.502 0 0 0-12.635-.004c-8 12.494-20.098 19.66-33.192 19.66-13.098 0-25.189-7.164-33.175-19.656a7.5 7.5 0 0 0-12.64.004c-7.974 12.489-20.069 19.652-33.187 19.652-13.098 0-25.19-7.164-33.176-19.656a7.502 7.502 0 0 0-12.635-.004c-8 12.494-20.098 19.66-33.191 19.66-13.099 0-25.19-7.164-33.175-19.655a7.5 7.5 0 0 0-12.64.004c-7.699 12.061-19.389 19.207-32.07 19.608a7.494 7.494 0 0 0-5.443 2.6 7.497 7.497 0 0 0-1.769 5.767c5.786 49.506 29.545 95.215 66.901 128.706C135.964 421.407 184.509 440 235 440c45.241 0 88.17-14.518 124.145-41.982a7.498 7.498 0 0 0 1.41-10.512 7.496 7.496 0 0 0-10.512-1.41C316.705 411.547 276.924 425 235 425c-93.882 0-173.276-68.424-187.68-160.366 11.265-2.217 21.561-8.215 29.707-17.284 10.49 11.584 24.673 18.267 39.476 18.267 14.808 0 29.002-6.691 39.505-18.291 10.493 11.6 24.685 18.291 39.498 18.291 14.828 0 29.022-6.689 39.511-18.284 10.493 11.595 24.682 18.284 39.491 18.284 14.808 0 29.002-6.691 39.505-18.291 10.493 11.6 24.679 18.291 39.485 18.291 14.826 0 29.018-6.681 39.505-18.264 8.14 9.065 18.422 15.061 29.671 17.278-6.044 38.177-24.008 74.246-51.068 102.269a7.5 7.5 0 1 0 10.791 10.419c31.08-32.185 51.038-74.226 56.198-118.38a7.495 7.495 0 0 0-1.769-5.766z'/%3E%3Cpath d='M289.513 310.616c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h10c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-10zM358.49 280.616h-10c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h10c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5zM111.503 280.616c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h10c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-10zM235 191.25c30.327 0 55-24.673 55-55s-24.673-55-55-55-55 24.673-55 55 24.673 55 55 55zm0-95c22.056 0 40 17.944 40 40s-17.944 40-40 40-40-17.944-40-40 17.944-40 40-40z'/%3E%3C/svg%3E"

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 502 502'%3E%3Cpath d='M428.484 73.516C381.076 26.108 318.044 0 251 0S120.924 26.108 73.516 73.516 0 183.956 0 251s26.108 130.076 73.516 177.484S183.956 502 251 502s130.076-26.108 177.484-73.516C475.892 381.076 502 318.044 502 251s-26.108-130.076-73.516-177.484zM283.829 39h58.868c58.354 25.338 104.274 74.079 125.849 134.317h-41.725a21.139 21.139 0 0 0-19.587 13.087 21.139 21.139 0 0 0 4.595 23.104l3.3 3.3c4.638 4.637 4.638 12.184 0 16.821a11.42 11.42 0 0 1-8.13 3.368 11.422 11.422 0 0 1-8.13-3.368l-7.969-7.969c-13.135-13.135-30.599-20.369-49.175-20.369h-6.397v-8.036c0-19.265-7.502-37.376-21.124-50.999l-9.952-9.952c-10.216-10.216-23.799-15.843-38.247-15.843h-19.931c-7.721 0-14.98 3.007-20.439 8.466l-5.17 5.169c-5.459 5.459-8.466 12.718-8.466 20.439a4.736 4.736 0 0 1-4.73 4.73h-8.66v-12.154c0-8.648 3.368-16.78 9.483-22.895l5.849-5.849c5.244-5.243 8.131-12.214 8.131-19.629V92.71c0-.394.32-.713.713-.713H320.5c12.407 0 22.5-10.093 22.5-22.5S332.907 47 320.5 47h-36.671c-2.206 0-4-1.794-4-4s1.794-4 4-4zm74.893 252.437l-5.452 5.484a155.066 155.066 0 0 0-22.913 29.41l-9.918 16.5-12.403 20.492a48.673 48.673 0 0 0-7.036 25.21v.615a.857.857 0 0 1-.856.856h-.004a8.78 8.78 0 0 1-6.247-2.586 8.776 8.776 0 0 1-2.589-6.25c0-12.58-4.899-24.407-13.794-33.303l-4.591-4.591c-6.947-6.947-10.773-16.183-10.773-26.007v-29.475c0-14.806-12.045-26.851-26.852-26.851H231.8c-8.349 0-15.142-6.792-15.142-15.142v-15.343c0-9.034 7.35-16.384 16.384-16.384h79.886l24.099 24.1c6.003 6.003 9.309 13.984 9.309 22.473v11.464c0 8.56 5.082 15.955 12.386 19.328zM20 251c0-9.444.583-18.752 1.69-27.902h30.619c10.153 0 19.698 3.954 26.876 11.133l8.781 8.78c7.527 7.527 17.534 11.672 28.179 11.672 5.65 0 10.962 2.2 14.957 6.195l.193.193c7.233 7.233 11.217 16.851 11.217 27.081v17.886c0 13.63-5.308 26.444-14.945 36.082l-19.15 19.15c-13.442 13.443-21.939 30.512-24.58 49.002C44.303 368.799 20 312.684 20 251zm231 231c-56.288 0-107.93-20.247-148.049-53.827v-5.423c0-17.881 6.963-34.693 19.607-47.337l19.15-19.15c13.415-13.416 20.803-31.252 20.803-50.224v-17.886c0-15.573-6.064-30.213-17.075-41.224l-.193-.192c-7.772-7.772-18.106-12.053-29.099-12.053a19.72 19.72 0 0 1-14.036-5.814l-8.781-8.781c-10.957-10.956-25.524-16.99-41.019-16.99h-27.3C47.126 98.635 140.047 20 251 20c7.743 0 15.396.39 22.946 1.138-8.316 3.774-14.117 12.151-14.117 21.862 0 13.234 10.766 24 24 24H320.5c1.378 0 2.5 1.122 2.5 2.5s-1.122 2.5-2.5 2.5h-97.713c-11.421 0-20.713 9.292-20.713 20.713v2.028a7.706 7.706 0 0 1-2.273 5.486l-5.85 5.85c-9.893 9.893-15.341 23.047-15.341 37.037v13.574c0 10.245 8.334 18.58 18.579 18.58h10.081c13.636 0 24.73-11.094 24.73-24.73 0-2.379.926-4.615 2.608-6.297l5.169-5.169c.203-.203.414-.393.632-.574.167.195.334.389.518.574l19.932 19.932c-3.833 3.911-3.813 10.186.068 14.068 1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929l7-7c3.905-3.905 3.905-10.237 0-14.143l-15.45-15.45c8.875.156 17.197 3.677 23.489 9.97l9.953 9.952c9.844 9.844 15.266 22.934 15.266 36.856v.817H233.04c-20.062 0-36.384 16.322-36.384 36.384V245.8c0 19.377 15.765 35.142 35.142 35.142h3.493a6.86 6.86 0 0 1 6.852 6.851v29.475c0 15.167 5.906 29.425 16.63 40.15l4.591 4.591c5.118 5.118 7.937 11.923 7.937 19.161 0 7.705 3.001 14.948 8.451 20.396 5.446 5.443 12.685 8.44 20.384 8.44h.015C311.648 410 321 400.644 321 389.149v-.614a28.68 28.68 0 0 1 4.146-14.854l12.409-20.502a.226.226 0 0 1 .016-.026l9.928-16.517a135.064 135.064 0 0 1 19.955-25.613l11.147-11.213c4.428-4.455 5.731-11.08 3.319-16.879s-8.029-9.546-14.31-9.546a1.274 1.274 0 0 1-1.273-1.273v-11.464c0-13.832-5.386-26.835-15.167-36.616l-2.215-2.215c10.49 1.524 20.173 6.357 27.804 13.988l7.969 7.969c6.141 6.141 14.207 9.211 22.272 9.211s16.132-3.07 22.272-9.211c6.024-6.024 9.341-14.033 9.341-22.553 0-8.519-3.317-16.528-9.341-22.553l-3.3-3.3c-.198-.198-.567-.567-.26-1.308.307-.741.829-.741 1.109-.741h47.888C479.468 211.761 482 231.09 482 251c0 127.374-103.626 231-231 231z'/%3E%3Cpath d='M184 85c5.523 0 10-4.477 10-10V54.494c0-5.523-4.477-10-10-10s-10 4.477-10 10V75c0 5.523 4.477 10 10 10zM450.39 314.63c-5.176-1.93-10.935.702-12.863 5.877C408.652 397.961 333.692 450 251 450c-5.523 0-10 4.477-10 10s4.477 10 10 10c45.543 0 89.207-13.849 126.272-40.048 36.24-25.617 63.556-61.046 78.995-102.458 1.929-5.175-.702-10.934-5.877-12.864zM202.433 444.034a198.232 198.232 0 0 1-28.554-9.526c-5.092-2.144-10.954.249-13.096 5.339-2.142 5.09.249 10.954 5.339 13.096a218.202 218.202 0 0 0 31.445 10.491c.817.205 1.635.303 2.44.303 4.478 0 8.554-3.03 9.692-7.57 1.344-5.358-1.909-10.79-7.266-12.133z'/%3E%3C/svg%3E"

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M337.502 61.244c-46.267-19.341-98.094-21.573-145.933-6.282-5.497 1.758-8.528 7.638-6.772 13.134 1.758 5.497 7.64 8.528 13.134 6.772 43.115-13.782 89.819-11.772 131.51 5.657 1.317.55 2.682.811 4.026.811 4.087 0 7.969-2.415 9.644-6.422 2.228-5.324-.284-11.445-5.609-13.67zM368.323 77.252a11.31 11.31 0 0 0-.375-.239c-4.925-3.009-11.356-1.458-14.364 3.467-2.984 4.884-1.483 11.249 3.346 14.29a10.398 10.398 0 0 0 5.587 1.626c3.377 0 6.69-1.633 8.704-4.654 3.201-4.801 1.904-11.289-2.898-14.49zM447.293 161.884c-4.081-4.08-10.698-4.08-14.778 0l-14.629 14.629c-4.08 4.081-4.08 10.698 0 14.778 2.04 2.041 4.715 3.06 7.388 3.06s5.349-1.02 7.389-3.06l14.629-14.629c4.081-4.081 4.081-10.698.001-14.778zM83.999 214.617c-4.081-4.08-10.698-4.08-14.778 0l-14.629 14.629c-4.08 4.081-4.08 10.698 0 14.778 2.04 2.041 4.715 3.06 7.388 3.06s5.349-1.02 7.39-3.06l14.629-14.629c4.081-4.082 4.081-10.698 0-14.778zM115.508 100.235c-4.081-4.08-10.698-4.08-14.778 0l-14.629 14.629c-4.08 4.081-4.08 10.698 0 14.778 2.04 2.041 4.715 3.06 7.388 3.06s5.348-1.02 7.39-3.06l14.629-14.629c4.081-4.081 4.081-10.698 0-14.778zM386.754 116.24h-20.688c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449h20.688c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449zM151.326 161.908l-14.618-14.618c-4.081-4.08-10.698-4.081-14.778 0s-4.08 10.698 0 14.778l14.618 14.618a10.413 10.413 0 0 0 7.388 3.06c2.674 0 5.349-1.02 7.39-3.06 4.081-4.081 4.081-10.698 0-14.778zM411.753 229.241l-14.618-14.617c-4.08-4.081-10.696-4.08-14.777 0s-4.08 10.697 0 14.777l14.618 14.617c2.041 2.041 4.715 3.06 7.388 3.06s5.348-1.021 7.388-3.06c4.083-4.08 4.082-10.696.001-14.777zM318.326 126.607l-14.617-14.617c-4.081-4.08-10.698-4.081-14.778 0s-4.08 10.698 0 14.778l14.617 14.617a10.414 10.414 0 0 0 7.388 3.061 10.42 10.42 0 0 0 7.39-3.061c4.08-4.081 4.08-10.698 0-14.778zM195.194 97.387c-3.904-4.25-10.515-4.528-14.763-.622l-15.22 13.989c-4.249 3.905-4.527 10.515-.622 14.763a10.42 10.42 0 0 0 7.696 3.378c2.528 0 5.063-.911 7.068-2.756l15.22-13.989c4.248-3.905 4.526-10.515.621-14.763zM256.153 145.241H255.865c-5.762 0-10.437 4.665-10.449 10.429-.011 5.771 4.658 10.457 10.429 10.469H256.134c5.762 0 10.438-4.664 10.449-10.429.01-5.771-4.659-10.458-10.43-10.469z'/%3E%3Cpath d='M437.019 74.981C388.668 26.628 324.38 0 256 0S123.332 26.628 74.981 74.981C26.629 123.333 0 187.62 0 256c0 68.38 26.628 132.668 74.981 181.019C123.333 485.371 187.62 512 256 512c68.38 0 132.668-26.628 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.628-132.668-74.981-181.019zM256 491.102c-94.256 0-175.718-55.763-213.173-136.024 6.781-.56 13.126-3.458 18.112-8.35 5.756-5.647 9.057-13.495 9.057-21.531v-9.364c0-7.449 6.027-13.624 13.435-13.767 3.561-.079 6.976 1.322 9.617 3.913 2.77 2.718 4.359 6.484 4.359 10.332v23.709c0 18.754 15.222 34.302 33.932 34.66.221.004.442.006.664.006 8.973 0 17.47-3.499 23.989-9.895 6.751-6.623 10.623-15.826 10.623-25.25v-18.215c20.172 27.524 52.723 45.432 89.384 45.432 52.209 0 96.09-36.312 107.73-85.007a10.027 10.027 0 0 1 2.18 6.23v25.773c0 19.673 15.968 35.984 35.596 36.361.233.004.464.006.696.006 9.409 0 18.321-3.671 25.161-10.38 7.086-6.951 11.149-16.61 11.149-26.5v-24.856c0-2.83 1.17-5.6 3.21-7.602 1.927-1.889 4.429-2.882 6.986-2.854 5.403.104 9.8 4.612 9.8 10.05v2.721c0 14.409 10.071 26.69 23.526 30.04C453.848 418.996 363.189 491.102 256 491.102zm223.405-200.399v-2.721c0-16.741-13.591-30.624-30.297-30.944-8.235-.159-16.057 2.978-22.022 8.829-6.021 5.906-9.473 14.113-9.473 22.52v24.856c0 4.314-1.782 8.536-4.886 11.582-2.97 2.912-6.846 4.462-10.82 4.397-8.326-.16-15.099-7.098-15.099-15.468v-25.773c0-13.154-8.392-24.538-20.091-28.971.027-1.001.043-2.004.043-3.011 0-46.06-29.007-87.788-72.182-103.836-5.411-2.01-11.425.745-13.434 6.154-2.01 5.409.745 11.424 6.154 13.434 35.027 13.021 58.562 46.877 58.562 84.248 0 49.549-40.312 89.861-89.861 89.861-49.549 0-89.861-40.312-89.861-89.861 0-37.372 23.535-71.228 58.565-84.246 5.409-2.01 8.164-8.026 6.154-13.434s-8.022-8.165-13.434-6.154C174.248 168.21 145.239 209.938 145.239 256a110.22 110.22 0 0 0 7.085 38.971 30.145 30.145 0 0 0-6.607 18.808v25.763c0 3.848-1.589 7.614-4.359 10.332-2.642 2.591-6.036 3.973-9.617 3.913-7.407-.142-13.434-6.317-13.434-13.766v-23.709c0-9.424-3.872-18.627-10.623-25.251-6.681-6.554-15.435-10.081-24.652-9.889-18.71.358-33.932 15.907-33.932 34.66v9.364c0 2.461-1.019 4.871-2.794 6.613-1.668 1.635-3.808 2.506-6.034 2.47-3.374-.065-6.387-2.139-7.733-5.21-7.543-23.011-11.64-47.569-11.64-73.07C20.898 126.365 126.365 20.898 256 20.898S491.102 126.365 491.102 256c0 15.182-1.464 30.026-4.227 44.414-4.281-1.138-7.47-5.083-7.47-9.711z'/%3E%3C/svg%3E"

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 58.153 58.153'%3E%3Cpath d='M40.076 29.153h-7.142a3.995 3.995 0 0 0-2.858-2.858V16.153a1 1 0 1 0-2 0v10.142c-1.72.447-3 1.999-3 3.858 0 2.206 1.794 4 4 4 1.858 0 3.411-1.28 3.858-3h7.142a1 1 0 1 0 0-2zm-11 3c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z'/%3E%3Cpath d='M50.188 9.764l4.096 4.096a1 1 0 0 0 1.414 0c3.167-3.166 3.167-8.319 0-11.485s-8.319-3.166-11.485 0a.997.997 0 0 0 0 1.414l4.561 4.561-1.699 1.699c-4.78-4.284-11.089-6.896-17.998-6.896s-13.218 2.612-17.998 6.896l-1.7-1.699 4.561-4.561a.997.997 0 0 0 0-1.414c-3.166-3.166-8.318-3.166-11.485 0s-3.167 8.319 0 11.485a1 1 0 0 0 1.414 0l4.096-4.096 1.676 1.676c-4.679 4.857-7.565 11.453-7.565 18.713 0 9.898 5.357 18.564 13.321 23.265l-3.028 3.028a.999.999 0 1 0 1.414 1.414l3.45-3.45c3.578 1.754 7.597 2.743 11.843 2.743s8.265-.989 11.843-2.743l3.45 3.45a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-3.028-3.028c7.964-4.701 13.321-13.367 13.321-23.265 0-7.26-2.886-13.856-7.565-18.713l1.677-1.676zm4.095-5.975c2.146 2.146 2.362 5.502.649 7.893L46.391 3.14a6.13 6.13 0 0 1 7.892.649zM3.22 11.681c-1.713-2.39-1.497-5.746.649-7.892s5.502-2.361 7.892-.649L3.22 11.681zm25.856 43.472c-13.785 0-25-11.215-25-25s11.215-25 25-25 25 11.215 25 25-11.214 25-25 25z'/%3E%3Cpath d='M29.076 10.032a1 1 0 0 0 1-1v-1a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1zM29.076 50.032a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1zM50.076 31.032h1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM8.076 29.032h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM43.926 13.768l-.707.707a.999.999 0 1 0 1.414 1.414l.707-.707a.999.999 0 1 0-1.414-1.414zM13.52 44.174l-.707.707a.999.999 0 1 0 1.414 1.414l.707-.707a.999.999 0 1 0-1.414-1.414zM44.633 44.174a.999.999 0 1 0-1.414 1.414l.707.707a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-.707-.707zM14.227 13.768a.999.999 0 1 0-1.414 1.414l.707.707a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-.707-.707z'/%3E%3C/svg%3E"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33 33'%3E%3Cpath d='M16.5 33C7.402 33 0 25.598 0 16.5S7.402 0 16.5 0 33 7.402 33 16.5 25.598 33 16.5 33zm0-32C7.953 1 1 7.953 1 16.5S7.953 32 16.5 32 32 25.047 32 16.5 25.047 1 16.5 1z'/%3E%3Cpath d='M16.5 33a16.38 16.38 0 0 1-9.549-3.06.5.5 0 1 1 .116-.876c4.146-1.535 4.815-2.781 4.815-5.169 0-.631-.142-.838-.398-1.214-.339-.494-.803-1.171-1.129-2.939-.048-.254-.089-.274-.316-.384-.606-.292-1.163-.712-1.309-2.628 0-.928.32-1.441.585-1.708-.058-.33-.153-.899-.242-1.519-.453-2.777-.473-6.178 3.433-7.759 3.404-1.38 6.121-.626 6.974.273.604.019 2.162.177 3.246 1.438 1.668 1.94 1.137 6.363.955 7.562.266.261.589.767.589 1.675-.146 1.954-.703 2.375-1.31 2.666-.228.11-.269.129-.316.384-.326 1.768-.789 2.445-1.128 2.939-.257.375-.398.583-.398 1.214 0 2.388.669 3.634 4.815 5.169a.498.498 0 0 1 .116.876A16.38 16.38 0 0 1 16.5 33zm-8.183-3.349C10.779 31.191 13.589 32 16.5 32s5.721-.809 8.183-2.349c-3.474-1.426-4.565-2.864-4.565-5.755 0-.941.278-1.348.573-1.779.304-.444.682-.996.971-2.556.139-.754.576-.964.865-1.103.311-.149.631-.303.744-1.803-.001-.764-.344-.972-.358-.98a.533.533 0 0 1-.264-.537c.248-1.329.656-5.474-.681-7.031-.913-1.062-2.352-1.091-2.626-1.08-.046-.004-.091-.005-.134-.016-.13-.033-.35-.146-.417-.262-.272-.466-2.641-1.403-5.91-.08-3.231 1.308-3.238 4.112-2.819 6.682.138.957.289 1.784.29 1.788a.5.5 0 0 1-.283.544c.003 0-.339.209-.339 1.008.112 1.461.433 1.616.743 1.765.289.139.727.349.866 1.103.288 1.56.666 2.112.97 2.556.296.431.574.838.574 1.779 0 2.894-1.091 4.332-4.566 5.757z'/%3E%3C/svg%3E"

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 490.4 490.4'%3E%3Cpath d='M229 381.2c4.4 4.4 10.1 6.8 16.3 6.8 6.2 0 12-2.4 16.3-6.8l96.3-96.3c15.7-15.7 24.4-36.6 24.4-58.7 0-22.2-8.6-43.1-24.3-58.8-15.7-15.7-36.6-24.3-58.7-24.3-20 0-38.9 7-54 19.9-15.1-13-34.1-20-54.1-20-22.2 0-43 8.6-58.7 24.3s-24.3 36.6-24.3 58.8 8.7 43 24.4 58.7l96.4 96.4zm-79.3-196.7c11.1-11.1 25.7-17.1 41.4-17.1s30.4 6.1 41.5 17.2l4 4c4.8 4.8 12.5 4.8 17.3 0l3.9-3.9c11.1-11.1 25.8-17.2 41.5-17.2 15.6 0 30.3 6.1 41.4 17.2 11.1 11.1 17.2 25.8 17.1 41.4 0 15.7-6.1 30.4-17.2 41.5l-95.3 95.3-95.5-95.5c-11.1-11.1-17.2-25.8-17.2-41.4 0-15.7 6.1-30.4 17.1-41.5z'/%3E%3Cpath d='M245.2 490.4c135.2 0 245.2-110 245.2-245.2S380.4 0 245.2 0 0 110 0 245.2s110 245.2 245.2 245.2zm0-465.9c121.7 0 220.7 99 220.7 220.7s-99 220.7-220.7 220.7-220.7-99-220.7-220.7 99-220.7 220.7-220.7z'/%3E%3C/svg%3E"

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 470 470'%3E%3Cpath d='M401.17 68.83C356.784 24.444 297.771 0 235 0S113.216 24.444 68.83 68.83C24.444 113.215 0 172.229 0 235s24.444 121.785 68.83 166.17C113.216 445.556 172.229 470 235 470s121.784-24.444 166.17-68.83C445.556 356.785 470 297.771 470 235s-24.444-121.785-68.83-166.17zM235 455c-121.309 0-220-98.691-220-220S113.691 15 235 15s220 98.691 220 220-98.691 220-220 220z'/%3E%3Ccircle cx='235' cy='97.5' r='7.5'/%3E%3Cpath d='M437.56 242.365a7.501 7.501 0 0 0-5.467-2.365h-26.046v-22.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5V240H372.5v-52.5a7.5 7.5 0 0 0-3.525-6.36L292.5 133.343V97.5A7.5 7.5 0 0 0 285 90h-13.253C268.262 72.905 253.109 60 235 60s-33.262 12.905-36.747 30H185a7.5 7.5 0 0 0-7.5 7.5V130h-25v-22.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5V130H105a7.5 7.5 0 0 0-7.5 7.5v102.499l-59.593-.01a7.504 7.504 0 0 0-7.487 7.969c3.523 56.171 29.666 105.984 69.187 140.798.281.291.587.556.911.799 23.389 20.362 51.39 35.496 82.128 43.638.307.102.622.184.946.246A204.258 204.258 0 0 0 235 440c17.409 0 34.679-2.229 51.386-6.558a7.297 7.297 0 0 0 1.002-.262 203.842 203.842 0 0 0 50.574-20.966c30.222-17.629 55.631-42.86 73.479-72.965a7.5 7.5 0 0 0-12.902-7.65 189.49 189.49 0 0 1-26.039 34.299V255h51.438a188.457 188.457 0 0 1-12.616 50.728 7.499 7.499 0 0 0 4.156 9.758 7.498 7.498 0 0 0 9.758-4.157 203.511 203.511 0 0 0 14.342-63.359 7.499 7.499 0 0 0-2.018-5.605zM192.5 175h85v215h-85V175zm0-70H205a7.5 7.5 0 0 0 7.5-7.5c0-12.407 10.094-22.5 22.5-22.5s22.5 10.093 22.5 22.5a7.5 7.5 0 0 0 7.5 7.5h12.5v55h-85v-55zM46.059 254.99l51.441.009V307.5c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5V145h65v245H175c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h2.5v11.078c-24.056-7.668-46.091-20.018-65-35.997V337.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v28.458c-28.127-29.492-46.937-68.033-51.441-110.968zM192.5 420.179V405h85v15.106A187.644 187.644 0 0 1 235 425a189.427 189.427 0 0 1-42.5-4.821zm100-4.235V405h2.5c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-2.5V151.032l65 40.625v188.307a191.989 191.989 0 0 1-65 35.98z'/%3E%3Cpath d='M325 320a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM325 280a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM325 240a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM325 200a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM145 345a7.5 7.5 0 0 0 7.5-7.5v-10c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10a7.5 7.5 0 0 0 7.5 7.5zM145 305a7.5 7.5 0 0 0 7.5-7.5v-10c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10a7.5 7.5 0 0 0 7.5 7.5zM145 265a7.5 7.5 0 0 0 7.5-7.5v-10c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10a7.5 7.5 0 0 0 7.5 7.5zM145 185a7.5 7.5 0 0 0 7.5-7.5v-10c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10a7.5 7.5 0 0 0 7.5 7.5zM145 225a7.5 7.5 0 0 0 7.5-7.5v-10c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10a7.5 7.5 0 0 0 7.5 7.5zM235 350a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM235 310a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM235 270a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM235 230a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM235 190a7.5 7.5 0 0 0-7.5 7.5v10c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10a7.5 7.5 0 0 0-7.5-7.5zM215 145h40c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-40c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z'/%3E%3C/svg%3E"

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(14);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(6);
            var content = __webpack_require__(38);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".emoji-picker-react img.emoji-img {\n  height: 25px;\n  width: 25px;\n  margin: 5px;\n}\n\n.emoji-picker-react .native {\n  height: 25px;\n  width: 25px;\n  margin: 5px;\n  font-size: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Noto Color Emoji', 'Apple Color Emoji', 'Segoe UI Emoji', Times,\n    Symbola, Aegyptus, Code2000, Code2001, Code2002, Musica, serif, LastResort;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(6);
            var content = __webpack_require__(40);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".emoji-picker-react .emoji {\n  position: relative;\n}\n\n.emoji-picker-react .emoji.has-skin-variation button:before {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  right: -2px;\n  bottom: 0px;\n  position: absolute;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(0, 0, 0, 0.1);\n  transform: rotate(135deg);\n  z-index: 1;\n}\n\n.emoji-picker-react .emoji.has-skin-variation button:hover:before,\n.emoji-picker-react .emoji.has-skin-variation button:focus-visible:before {\n  border-bottom: 4px solid rgba(0, 0, 0, 0.4);\n}\n\n.emoji-picker-react .emoji button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: inherit;\n  border-radius: 5px;\n  transition: 0.1s background;\n  padding: 0;\n  margin: 0;\n}\n\n.emoji-picker-react .emoji button:hover,\n.emoji-picker-react .emoji button:focus-visible,\n.emoji-picker-react .emoji button:focus {\n  background-color: currentColor;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(6);
            var content = __webpack_require__(42);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".emoji-picker-react .emoji-group {\n  clear: both;\n  padding: 0 15px;\n  list-style: none;\n  margin: 0;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n}\n\n.emoji-picker-react .emoji-group:before {\n  content: attr(data-display-name);\n  color: #aaa;\n  font-size: 14px;\n  position: sticky;\n  background: rgba(255, 255, 255, 0.95);\n  width: 100%;\n  z-index: 1;\n  top: 0;\n  text-transform: uppercase;\n  line-height: 45px;\n  font-weight: 700;\n}\n\n.emoji-picker-react .emoji-group:after {\n  content: '';\n  flex: 1000;\n  order: 99999;\n  flex-basis: 25px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(6);
            var content = __webpack_require__(44);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".emoji-picker-react div.skin-tones-list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  position: absolute;\n  top: 13px;\n  right: 40px;\n}\n\n.emoji-picker-react div.skin-tones-list button {\n  background-color: currentColor;\n  position: absolute;\n  border-radius: 2px;\n  transition: transform 0.3s ease;\n}\n.emoji-picker-react div.skin-tones-list button:focus {\n  border: 1px solid #a6a6a6;\n  border-radius: 3px;\n  height: 14px;\n  width: 14px;\n  top: -2px;\n  left: -2px;\n}\n\n.emoji-picker-react div.skin-tones-list button {\n  height: 10px;\n  width: 10px;\n  padding: 0;\n  display: block;\n}\n\n.emoji-picker-react div.skin-tones-list button:focus {\n  padding: 2px;\n}\n\n.emoji-picker-react div.skin-tones-list button#tneutral {\n  color: #ffd225;\n}\n.emoji-picker-react div.skin-tones-list button#t1f3fb {\n  color: #ffdfbd;\n}\n.emoji-picker-react div.skin-tones-list button#t1f3fc {\n  color: #e9c197;\n}\n.emoji-picker-react div.skin-tones-list button#t1f3fd {\n  color: #c88e62;\n}\n.emoji-picker-react div.skin-tones-list button#t1f3fe {\n  color: #a86637;\n}\n.emoji-picker-react div.skin-tones-list button#t1f3ff {\n  color: #60463a;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(6);
            var content = __webpack_require__(46);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".emoji-picker-react input.emoji-search {\n  width: calc(100% - 30px);\n  margin-left: 15px;\n  outline: none;\n  box-shadow: none;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #efefef;\n  border-radius: 3px;\n  transition: border 0.1s;\n}\n\n.emoji-picker-react input.emoji-search:focus {\n  border: 1px solid #d6d6d6;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(6);
            var content = __webpack_require__(48);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".emoji-picker-react .variation-wrapper {\n  position: relative;\n}\n\n.emoji-picker-react .variation-list {\n  background: #f4f4f4;\n  border-bottom: 1px solid #efefef;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: space-evenly;\n  list-style-type: none;\n  transition: transform 0.1s;\n  transform: translateY(-100%);\n}\n\n.emoji-picker-react .variation-list.visible {\n  transform: translateY(0);\n}\n\n.emoji-picker-react .variation-list button {\n  display: flex;\n}\n\n.emoji-picker-react .variation-list button {\n  border-radius: 5px;\n  transition: background 0.1s;\n  background: none;\n  padding: 0;\n}\n\n.emoji-picker-react .variation-list button:hover {\n  background-color: #dbdbdb;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(6);
            var content = __webpack_require__(50);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "aside.emoji-picker-react {\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  height: 320px;\n  width: 280px;\n  font-family: sans-serif;\n  border: 1px solid #efefef;\n  border-radius: 5px;\n  box-sizing: border-box;\n  box-shadow: 0 5px 10px #efefef;\n  overflow: hidden;\n  position: relative;\n}\n\naside.emoji-picker-react .content-wrapper-epr {\n  flex: 1;\n  overflow-y: hidden;\n  position: relative;\n}\n\n.emoji-picker-react .emoji-scroll-wrapper {\n  overflow-y: scroll;\n  position: relative;\n  height: 100%;\n  box-sizing: border-box;\n}\n\naside.emoji-picker-react .content-wrapper-epr:before {\n  content: attr(data-name);\n  color: #aaa;\n  font-size: 11px;\n  display: block;\n  position: absolute;\n  right: 8%;\n  z-index: 10;\n  line-height: 45px;\n  max-height: 45px;\n  overflow: hidden;\n  max-width: 100px;\n  text-overflow: ellipsis;\n  text-align: right;\n}\n\naside.emoji-picker-react button {\n  border: none;\n  cursor: pointer;\n  outline: none;\n  background: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SKIN_TONE_NEUTRAL", function() { return /* reexport */ SKIN_TONE_NEUTRAL; });
__webpack_require__.d(__webpack_exports__, "SKIN_TONE_LIGHT", function() { return /* reexport */ SKIN_TONE_LIGHT; });
__webpack_require__.d(__webpack_exports__, "SKIN_TONE_MEDIUM_LIGHT", function() { return /* reexport */ SKIN_TONE_MEDIUM_LIGHT; });
__webpack_require__.d(__webpack_exports__, "SKIN_TONE_MEDIUM", function() { return /* reexport */ SKIN_TONE_MEDIUM; });
__webpack_require__.d(__webpack_exports__, "SKIN_TONE_MEDIUM_DARK", function() { return /* reexport */ SKIN_TONE_MEDIUM_DARK; });
__webpack_require__.d(__webpack_exports__, "SKIN_TONE_DARK", function() { return /* reexport */ SKIN_TONE_DARK; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(3);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(15);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./lib/constants/index.js
var constants = __webpack_require__(2);

// CONCATENATED MODULE: ./src/lib/propTypes/index.js


var _PropTypes$shape;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var propTypes_emoji = prop_types_default.a.shape((_PropTypes$shape = {}, defineProperty_default()(_PropTypes$shape, constants["EMOJI_PROPERTY_NAME"], prop_types_default.a.arrayOf(prop_types_default.a.string)), defineProperty_default()(_PropTypes$shape, constants["EMOJI_PROPERTY_UNIFIED"], prop_types_default.a.string), defineProperty_default()(_PropTypes$shape, constants["EMOJI_PROPERTY_SKIN_VARIATIONS"], prop_types_default.a.arrayOf(prop_types_default.a.string)), defineProperty_default()(_PropTypes$shape, constants["EMOJI_PROPERTY_GROUP"], prop_types_default.a.string), _PropTypes$shape));
var groupNamesPropType = prop_types_default.a.shape({
  smileys_people: prop_types_default.a.string,
  animals_nature: prop_types_default.a.string,
  food_drink: prop_types_default.a.string,
  travel_places: prop_types_default.a.string,
  activities: prop_types_default.a.string,
  objects: prop_types_default.a.string,
  symbols: prop_types_default.a.string,
  flags: prop_types_default.a.string,
  recently_used: prop_types_default.a.string
});
var configPropsShape = prop_types_default.a.shape(_objectSpread({}, configPropTypes));
var configPropTypes = {
  emojiUrl: prop_types_default.a.string,
  preload: prop_types_default.a.bool,
  skinTone: prop_types_default.a.string,
  groupNames: groupNamesPropType,
  "native": prop_types_default.a.bool,
  groupVisibility: prop_types_default.a.objectOf(prop_types_default.a.bool),
  disableAutoFocus: prop_types_default.a.bool,
  disableSearchBar: prop_types_default.a.bool,
  disableSkinTonePicker: prop_types_default.a.bool
};
var customEmojiPropTypes = {
  customGroups: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    name: prop_types_default.a.string,
    icon: prop_types_default.a.string,
    emojis: {
      name: prop_types_default.a.string,
      url: prop_types_default.a.string
    }
  }))
};
// EXTERNAL MODULE: ./src/groups.json
var groups = __webpack_require__(10);

// CONCATENATED MODULE: ./src/lib/constants/index.js


var _GROUP_NAMES_ENGLISH;


var PROPERTY_DATA_NAME = 'data-name';
var GROUP_NAMES_ENGLISH = (_GROUP_NAMES_ENGLISH = {}, defineProperty_default()(_GROUP_NAMES_ENGLISH, constants["GROUP_NAME_PEOPLE"], 'smileys & people'), defineProperty_default()(_GROUP_NAMES_ENGLISH, constants["GROUP_NAME_NATURE"], 'animals & nature'), defineProperty_default()(_GROUP_NAMES_ENGLISH, constants["GROUP_NAME_FOOD"], 'food & drink'), defineProperty_default()(_GROUP_NAMES_ENGLISH, constants["GROUP_NAME_TRAVEL"], 'travel & places'), defineProperty_default()(_GROUP_NAMES_ENGLISH, constants["GROUP_NAME_OBJECTS"], constants["GROUP_NAME_OBJECTS"]), defineProperty_default()(_GROUP_NAMES_ENGLISH, constants["GROUP_NAME_ACTIVITIES"], constants["GROUP_NAME_ACTIVITIES"]), defineProperty_default()(_GROUP_NAMES_ENGLISH, constants["GROUP_NAME_SYMBOLS"], constants["GROUP_NAME_SYMBOLS"]), defineProperty_default()(_GROUP_NAMES_ENGLISH, constants["GROUP_NAME_FLAGS"], constants["GROUP_NAME_FLAGS"]), defineProperty_default()(_GROUP_NAMES_ENGLISH, constants["GROUP_NAME_RECENTLY_USED"], 'Recently Used'), _GROUP_NAMES_ENGLISH);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(4);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./src/PickerContext/index.js



function PickerContext_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function PickerContext_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PickerContext_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PickerContext_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var PickerContext = /*#__PURE__*/Object(external_react_["createContext"])({});
function PickerContextProvider(_ref) {
  var children = _ref.children,
      config = _ref.config,
      recentlyUsed = _ref.recentlyUsed,
      onEmojiClick = _ref.onEmojiClick;
  var activeCategoryState = Object(external_react_["useState"])(null);
  var filterState = Object(external_react_["useState"])([]);
  var filterResult = Object(external_react_["useState"])(null);
  var seenGroupsState = Object(external_react_["useState"])(defineProperty_default()({}, constants["GROUP_NAME_PEOPLE"], true));
  var missingEmojiState = Object(external_react_["useState"])({});
  var variationMenuState = Object(external_react_["useState"])(null);
  var skinToneSpreadState = Object(external_react_["useState"])(false);
  var activeSkinToneState = Object(external_react_["useState"])(config.skinTone);
  var hideEmojisState = Object(external_react_["useState"])(config.hideEmojis);
  return /*#__PURE__*/external_react_["createElement"](PickerContext.Provider, {
    value: {
      activeCategoryState: activeCategoryState,
      filterState: filterState,
      filterResult: filterResult,
      seenGroupsState: seenGroupsState,
      missingEmojiState: missingEmojiState,
      variationMenuState: variationMenuState,
      skinToneSpreadState: skinToneSpreadState,
      activeSkinToneState: activeSkinToneState,
      config: config,
      recentlyUsed: recentlyUsed,
      onEmojiClick: onEmojiClick,
      hideEmojisState: hideEmojisState
    }
  }, children);
}
PickerContextProvider.propTypes = {
  children: prop_types_default.a.node
};
function useActiveCategory() {
  var _useContext$activeCat = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).activeCategoryState, 1),
      activeCategory = _useContext$activeCat[0];

  return activeCategory;
}
function useSetActiveCategory() {
  var _useContext$activeCat2 = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).activeCategoryState, 2),
      setActiveCategory = _useContext$activeCat2[1];

  var setSeenGroups = useSetSeenGroups();
  return function (categoryName) {
    setActiveCategory(categoryName);
    setSeenGroups(categoryName);
  };
}
function useSetFilter() {
  var _useContext$filterSta = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).filterState, 2),
      dispatch = _useContext$filterSta[1];

  var _useContext$filterRes = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).filterResult, 2),
      setFilterResult = _useContext$filterRes[1];

  return function (_ref2) {
    var filter = _ref2.filter,
        filterResult = _ref2.filterResult;
    dispatch(filter);
    setFilterResult(filterResult);
  };
}
function useFilterValue() {
  var _useContext$filterSta2 = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).filterState, 1),
      value = _useContext$filterSta2[0];

  return value;
}
function useFilterResult() {
  var _useContext$filterRes2 = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).filterResult, 1),
      result = _useContext$filterRes2[0];

  return result;
}
function useSeenGroups() {
  var _useContext$seenGroup = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).seenGroupsState, 1),
      seenGroups = _useContext$seenGroup[0];

  return seenGroups;
}
function useSetSeenGroups() {
  var _useContext$seenGroup2 = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).seenGroupsState, 2),
      setSeenGroups = _useContext$seenGroup2[1];

  return function (group) {
    setSeenGroups(function () {
      var seenGroups = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return seenGroups[group] ? seenGroups : PickerContext_objectSpread(PickerContext_objectSpread({}, seenGroups), {}, defineProperty_default()({}, group, true));
    });
  };
}
function useSetMissingEmoji() {
  var _useContext$missingEm = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).missingEmojiState, 2),
      setMissingEmoji = _useContext$missingEm[1];

  return function (emoji) {
    setMissingEmoji(function (missingEmoji) {
      return PickerContext_objectSpread(PickerContext_objectSpread({}, missingEmoji), {}, defineProperty_default()({}, emoji, true));
    });
  };
}
function useMissingEmojis() {
  var _useContext$missingEm2 = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).missingEmojiState, 1),
      missingEmojis = _useContext$missingEm2[0];

  return missingEmojis;
}
function useVariationMenuValue() {
  var _useContext$variation = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).variationMenuState, 1),
      value = _useContext$variation[0];

  return value;
}
function useOpenVariationMenu() {
  var _useContext$variation2 = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).variationMenuState, 2),
      setVariationMenu = _useContext$variation2[1];

  return function (emoji) {
    setVariationMenu(function (activeVariation) {
      if (activeVariation === emoji) {
        return activeVariation;
      }

      return emoji;
    });
  };
}
function useCloseVariationMenu() {
  var _useContext$variation3 = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).variationMenuState, 2),
      setVariationMenu = _useContext$variation3[1];

  return function () {
    setVariationMenu(function (current) {
      if (current) {
        return null;
      }
    });
  };
}
function useSkinToneSpreadValue() {
  var _useContext$skinToneS = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).skinToneSpreadState, 1),
      skinToneSpread = _useContext$skinToneS[0];

  return skinToneSpread;
}
function useToggleSpreadSkinTones() {
  var _useContext$skinToneS2 = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).skinToneSpreadState, 2),
      setSkinToneSpread = _useContext$skinToneS2[1];

  return function () {
    return setSkinToneSpread(function (skinToneSpread) {
      return !skinToneSpread;
    });
  };
}
function useCollapseSkinTones() {
  var _useContext$skinToneS3 = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).skinToneSpreadState, 2),
      skinTonesOpen = _useContext$skinToneS3[0],
      setSkinToneSpread = _useContext$skinToneS3[1];

  return function () {
    if (skinTonesOpen) setSkinToneSpread(false);
  };
}
function useExpendSkinTones() {
  var _useContext$skinToneS4 = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).skinToneSpreadState, 2),
      setSkinToneSpread = _useContext$skinToneS4[1];

  return function () {
    return setSkinToneSpread(true);
  };
}
function useActiveSkinTone() {
  var _useContext$activeSki = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).activeSkinToneState, 1),
      activeSkinTone = _useContext$activeSki[0];

  return activeSkinTone;
}
function useSetActiveSkinTone() {
  var _useContext$activeSki2 = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).activeSkinToneState, 2),
      setActiveSkinTone = _useContext$activeSki2[1];

  return function (skinTone) {
    setActiveSkinTone(skinTone);
  };
}
function useConfig() {
  return Object(external_react_["useContext"])(PickerContext).config;
}
function useRecentlyUsed() {
  return Object(external_react_["useContext"])(PickerContext).recentlyUsed;
}
function useOnEmojiClick() {
  return Object(external_react_["useContext"])(PickerContext).onEmojiClick;
}
function useHideEmojis() {
  var _useContext$hideEmoji = slicedToArray_default()(Object(external_react_["useContext"])(PickerContext).hideEmojisState, 1),
      hideEmojisSpread = _useContext$hideEmoji[0];

  return hideEmojisSpread;
}
PickerContextProvider.propTypes = {
  children: prop_types_default.a.node,
  config: configPropsShape,
  recentlyUsed: prop_types_default.a.arrayOf(prop_types_default.a.object),
  onEmojiClick: prop_types_default.a.func
};
// EXTERNAL MODULE: ./src/components/CategoriesNav/style.css
var CategoriesNav_style = __webpack_require__(23);

// CONCATENATED MODULE: ./src/components/CategoriesNav/index.js


function CategoriesNav_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function CategoriesNav_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CategoriesNav_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CategoriesNav_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var CategoriesNav_CategoriesNav = function CategoriesNav(_ref) {
  var emojiListRef = _ref.emojiListRef,
      categoriesNavRef = _ref.categoriesNavRef,
      customGroups = _ref.customGroups;
  var setSeenGroups = useSetSeenGroups();
  var filter = useFilterValue();

  var _useConfig = useConfig(),
      groupVisibility = _useConfig.groupVisibility;

  var activeCategory = useActiveCategory();
  var setActiveCategory = useSetActiveCategory();
  var inactive = false;

  if (filter && filter.length) {
    inactive = true;
  }

  var handleClick = function handleClick(_ref2) {
    var target = _ref2.target;

    if (inactive) {
      return;
    }

    var id = target.getAttribute(PROPERTY_DATA_NAME);

    if (!emojiListRef || !emojiListRef.current || !id) {
      return;
    }

    setActiveCategory(id);
    setSeenGroups(id);
    var current = emojiListRef.current;
    var category = current.querySelector("[".concat(PROPERTY_DATA_NAME, "=\"").concat(id, "\"]"));
    current.scrollTop = category.offsetTop;
  };

  var $group;
  var left = 0;
  var index = 0;
  var barOpacity = '0';

  if (categoriesNavRef && categoriesNavRef.current) {
    $group = categoriesNavRef.current.querySelector("[".concat(PROPERTY_DATA_NAME, "=\"").concat(activeCategory, "\"]"));

    if ($group) {
      left = $group && $group.offsetLeft || categoriesNavRef.current.firstChild.offsetLeft;
      barOpacity = '1';
    } else {
      left = categoriesNavRef.current.firstChild.offsetLeft;
      barOpacity = '0';
    }
  }

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("nav", {
    onClick: handleClick,
    className: classnames_default()('emoji-categories', {
      inactive: inactive
    }),
    ref: categoriesNavRef
  }, groups.map(function (group, i) {
    if (groupVisibility[group] === false) {
      return null;
    }

    var active = activeCategory === group;

    if (active) {
      index = i;
    }

    return /*#__PURE__*/external_react_default.a.createElement("button", {
      key: group,
      type: "button",
      className: classnames_default()("icn-".concat(group), {
        active: active
      }),
      "data-name": group
    });
  }), !(Array.isArray(customGroups) && customGroups.length) ? null : customGroups.map(function (group, i) {
    if (groupVisibility[group.name] === false) {
      return null;
    }

    var active = activeCategory === group.name;

    if (active) {
      index = i;
    }

    var groupName = group.name.replace(' ', '-').toLowerCase();
    return /*#__PURE__*/external_react_default.a.createElement("button", {
      key: groupName,
      type: "button",
      className: classnames_default()("icn-".concat(groupName), {
        active: active
      }),
      style: {
        backgroundImage: "url(".concat(group.icon, ")")
      },
      "data-name": groupName
    });
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "active-category-indicator-wrapper"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "active-category-indicator",
    style: CategoriesNav_objectSpread({
      transform: "translateX(".concat(Math.max(left + index / 2, left), "px)"),
      opacity: barOpacity
    }, inactive && {
      display: 'none',
      opacity: '0',
      transform: 'translateX(0)'
    })
  })));
};

/* harmony default export */ var components_CategoriesNav = (CategoriesNav_CategoriesNav);
CategoriesNav_CategoriesNav.propTypes = CategoriesNav_objectSpread({
  emojiListRef: prop_types_default.a.shape({
    current: prop_types_default.a.instanceOf(Element)
  }),
  categoriesNavRef: prop_types_default.a.shape({
    current: prop_types_default.a.instanceOf(Element)
  })
}, customEmojiPropTypes);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(9);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(5);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./src/emojis.json
var emojis = __webpack_require__(11);

// CONCATENATED MODULE: ./lib/emojiStorage/index.js



var emojiStorage_initEmojis = function initEmojis(groupedEmojis) {
  var storage = {
    groups: {},
    emojis: {}
  };

  var _loop = function _loop(group) {
    groupedEmojis[group].reduce(function (storage, current) {
      var unified = current[constants["EMOJI_PROPERTY_UNIFIED"]];
      current[constants["EMOJI_PROPERTY_GROUP"]] = group;
      storage.emojis[unified] = current;
      storage.groups[group] = storage.groups[group] || [];
      storage.groups[group].push(unified);
      return storage;
    }, storage);
  };

  for (var group in groupedEmojis) {
    _loop(group);
  }

  return storage;
};

/* harmony default export */ var emojiStorage = (emojiStorage_initEmojis(emojis));
// CONCATENATED MODULE: ./src/lib/globalObject/index.js
var globalObject;

try {
  globalObject = window;
} catch (e) {
  globalObject = {};
}

/* harmony default export */ var lib_globalObject = (globalObject);
// CONCATENATED MODULE: ./src/hooks/useIntersectionObserver.js






var useIntersectionObserver_useIntersectionObserver = function useIntersectionObserver(root, activeCategoryRef, filterResultRef, renderOne) {
  var observer = Object(external_react_["useRef"])(null);
  var setActiveCategory = useSetActiveCategory();
  var setSeenGroups = useSetSeenGroups();
  Object(external_react_["useEffect"])(function () {
    var refActiveCategory = activeCategoryRef.current;

    if (lib_globalObject.IntersectionObserver !== undefined && root.current && !filterResultRef.current && !renderOne) {
      observer.current = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var target = entry.target;
          var id = target.getAttribute(PROPERTY_DATA_NAME);

          if (entry.intersectionRatio === 0) {
            return;
          }

          setSeenGroups(id);

          if (!refActiveCategory) {
            setActiveCategory(id);
          }
        });
      }, {
        root: root.current.parentElement
      });
    }

    if (observer.current) {
      toConsumableArray_default()(root.current.querySelectorAll('.emoji-group')).forEach(function (target) {
        observer.current.observe(target, {
          threshold: 1
        });
      });

      return function () {
        observer.current.disconnect();
      };
    }
  }, [root.current, renderOne]);
};

/* harmony default export */ var hooks_useIntersectionObserver = (useIntersectionObserver_useIntersectionObserver);
// CONCATENATED MODULE: ./src/hooks/useScrollUpOnFilterChange.js


var useScrollUpOnFilterChange_useScrollUpOnFilterChange = function useScrollUpOnFilterChange(value, emojiListRef) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  var ref = Object(external_react_["useRef"])(); // Store current value in ref

  Object(external_react_["useEffect"])(function () {
    if (emojiListRef && emojiListRef.current) {
      emojiListRef.current.scrollTop = 0;
    }

    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)

  return ref.current;
};

/* harmony default export */ var hooks_useScrollUpOnFilterChange = (useScrollUpOnFilterChange_useScrollUpOnFilterChange);
// CONCATENATED MODULE: ./src/lib/setEmojiName/index.js


var setEmojiName_setEmojiName = function setEmojiName() {
  var emojiName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var emojiListRef = arguments.length > 1 ? arguments[1] : undefined;
  var className = '.content-wrapper-epr';
  var node = emojiListRef && emojiListRef.current ? emojiListRef.current.closest("".concat(className)) : document.querySelector(".emoji-picker-react ".concat(className));
  node.setAttribute(PROPERTY_DATA_NAME, emojiName);
};

/* harmony default export */ var lib_setEmojiName = (setEmojiName_setEmojiName);
// CONCATENATED MODULE: ./src/lib/isUnicodeSupported/index.js
var isUnicodeSupported = function isUnicodeSupported() {
  var originalUnified = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var modifiedUnified = '';
  var unified = originalUnified;
  modifiedUnified = unified.split('-').map(function (hex) {
    return parseInt(hex, 16);
  }).map(function (hex) {
    return String.fromCodePoint(hex);
  }).join('');
  var ctx = document.createElement('canvas').getContext('2d');
  ctx.canvas.width = ctx.canvas.height = 1;
  ctx.fillText(modifiedUnified, -4, 4);
  return ctx.getImageData(0, 0, 1, 1).data[3] > 0;
};

/* harmony default export */ var lib_isUnicodeSupported = (isUnicodeSupported);
// CONCATENATED MODULE: ./src/hooks/useEmojiUrl.js


var useEmojiUrl_useEmojiUrl = function useEmojiUrl(unified) {
  var config = useConfig();
  return unified ? "".concat(config.emojiUrl, "/").concat(unified, ".png") : config.emojiUrl;
};

/* harmony default export */ var hooks_useEmojiUrl = (useEmojiUrl_useEmojiUrl);
// CONCATENATED MODULE: ./src/lib/emojiSrc/index.js


var emojiSrc_emojiSrc = function emojiSrc(unified) {
  return {
    src: hooks_useEmojiUrl(unified)
  };
};

/* harmony default export */ var lib_emojiSrc = (emojiSrc_emojiSrc);
// EXTERNAL MODULE: ./src/components/EmojiImg/style.css
var EmojiImg_style = __webpack_require__(37);

// CONCATENATED MODULE: ./src/components/EmojiImg/index.js







var EmojiImg_EmojiImg = function EmojiImg(_ref) {
  var unified = _ref.unified,
      _ref$shouldLoad = _ref.shouldLoad,
      shouldLoad = _ref$shouldLoad === void 0 ? true : _ref$shouldLoad,
      _ref$native = _ref["native"],
      _native = _ref$native === void 0 ? false : _ref$native;

  return _native ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "native"
  }, unified.split('-').map(function (hex) {
    return parseInt(hex, 16);
  }).map(function (hex) {
    return String.fromCodePoint(hex);
  }).join('')) : /*#__PURE__*/external_react_default.a.createElement(Img, {
    shouldLoad: shouldLoad,
    unified: unified
  });
};

function Img(_ref2) {
  var unified = _ref2.unified,
      shouldLoad = _ref2.shouldLoad;
  var setMissingEmoji = useSetMissingEmoji();
  var src = lib_emojiSrc(unified);
  return /*#__PURE__*/external_react_default.a.createElement("img", extends_default()({
    className: "emoji-img",
    onError: function onError() {
      return setMissingEmoji(unified);
    }
  }, shouldLoad && src));
}

/* harmony default export */ var components_EmojiImg = (EmojiImg_EmojiImg);
Img.propTypes = {
  unified: prop_types_default.a.string,
  shouldLoad: prop_types_default.a.bool
};
EmojiImg_EmojiImg.propTypes = {
  unified: prop_types_default.a.string,
  shouldLoad: prop_types_default.a.bool,
  "native": prop_types_default.a.bool
};
// CONCATENATED MODULE: ./src/components/Emoji/colors.js
var PASTEL_BLUE = '#aeeff0';
var PASTEL_RED = '#ffe0e0';
var PASTEL_GREEN = '#d6f8b8';
var PASTEL_PURPLE = '#c6cfff';
var PASTEL_YELLOW = '#f1f0d1';
// EXTERNAL MODULE: ./src/components/Emoji/style.css
var Emoji_style = __webpack_require__(39);

// CONCATENATED MODULE: ./src/components/Emoji/index.js


function Emoji_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Emoji_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Emoji_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Emoji_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var pastels = [PASTEL_BLUE, PASTEL_RED, PASTEL_GREEN, PASTEL_PURPLE, PASTEL_YELLOW];

var bgColor = function bgColor(order) {
  return pastels[order % pastels.length];
};

var mouseDownTimeout = null;

var handleMouseUp = function handleMouseUp() {
  return clearTimeout(mouseDownTimeout);
};

var Emoji_Emoji = function Emoji(_ref) {
  var emoji = _ref.emoji,
      shouldLoad = _ref.shouldLoad,
      hidden = _ref.hidden,
      activeSkinTone = _ref.activeSkinTone,
      openVariationMenu = _ref.openVariationMenu,
      variationMenuOpenRef = _ref.variationMenuOpenRef,
      handleMouseEnter = _ref.handleMouseEnter,
      handleMouseLeave = _ref.handleMouseLeave,
      onEmojiClick = _ref.onEmojiClick,
      index = _ref.index,
      _ref$native = _ref["native"],
      _native = _ref$native === void 0 ? false : _ref$native;

  var hasSkinVariation = emoji[constants["EMOJI_PROPERTY_SKIN_VARIATIONS"]];
  var unified;

  var style = Emoji_objectSpread(Emoji_objectSpread({}, hidden && {
    display: 'none'
  }), {}, {
    color: bgColor(index)
  });

  if (hasSkinVariation && emoji[constants["EMOJI_PROPERTY_SKIN_VARIATIONS"]]) {
    unified = emoji[constants["EMOJI_PROPERTY_SKIN_VARIATIONS"]].find(function (u) {
      return u.indexOf(activeSkinTone) >= 0;
    });
  }

  if (!unified) {
    unified = emoji[constants["EMOJI_PROPERTY_UNIFIED"]];
  }

  var handleMouseDown = function handleMouseDown() {
    if (!hasSkinVariation || !openVariationMenu) {
      return;
    }

    mouseDownTimeout = setTimeout(function () {
      openVariationMenu(emoji);
    }, 500);
  };

  var handleEmojiClick = function handleEmojiClick(e) {
    if (variationMenuOpenRef && variationMenuOpenRef.current) {
      return;
    }

    onEmojiClick(e, unified, emoji, activeSkinTone);
  };

  return /*#__PURE__*/external_react_default.a.createElement("li", {
    style: style,
    className: classnames_default()('emoji', {
      'has-skin-variation': hasSkinVariation && openVariationMenu
    })
  }, /*#__PURE__*/external_react_default.a.createElement("button", {
    onMouseDown: handleMouseDown,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    type: "button",
    onClick: handleEmojiClick
  }, /*#__PURE__*/external_react_default.a.createElement(components_EmojiImg, {
    unified: unified,
    shouldLoad: shouldLoad,
    "native": _native
  })));
};

/* harmony default export */ var components_Emoji = (Emoji_Emoji);
Emoji_Emoji.propTypes = {
  emoji: propTypes_emoji,
  shouldLoad: prop_types_default.a.bool,
  hidden: prop_types_default.a.bool,
  activeSkinTone: prop_types_default.a.string,
  openVariationMenu: prop_types_default.a.func,
  variationMenuOpenRef: prop_types_default.a.shape({
    current: prop_types_default.a.bool
  }),
  handleMouseEnter: prop_types_default.a.func,
  handleMouseLeave: prop_types_default.a.func,
  onEmojiClick: prop_types_default.a.func,
  index: prop_types_default.a.number,
  "native": prop_types_default.a.bool
};
// EXTERNAL MODULE: ./src/hiddenEmojis.json
var hiddenEmojis = __webpack_require__(16);

// EXTERNAL MODULE: ./src/components/EmojiList/style.css
var EmojiList_style = __webpack_require__(41);

// CONCATENATED MODULE: ./src/components/EmojiList/index.js





function EmojiList_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function EmojiList_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { EmojiList_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { EmojiList_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

















var EmojiList_createEmojiList = function createEmojiList(name, _ref) {
  var emojiListRef = _ref.emojiListRef;
  var filterResult = useFilterResult();
  var missingEmoji = useMissingEmojis();
  var openVariationMenu = useOpenVariationMenu();
  var variationMenu = useVariationMenuValue();
  var activeSkinTone = useActiveSkinTone();
  var onEmojiClick = useOnEmojiClick();
  var config = useConfig();
  var seenGroups = useSeenGroups();
  var hideEmojis = useHideEmojis();
  var variationMenuOpenRef = Object(external_react_["useRef"])(!!variationMenu);
  var unsetEmojiName = Object(external_react_["useCallback"])(function () {
    return lib_setEmojiName('', emojiListRef);
  });
  Object(external_react_["useEffect"])(function () {
    variationMenuOpenRef.current = !!variationMenu;
  }, [variationMenu]);
  var shouldLoad = config.preload || !!(seenGroups[name] || filterResult || typeof lib_globalObject.IntersectionObserver !== 'function');
  return Object(external_react_["useMemo"])(function () {
    var listToUse = filterResult ? Object.keys(filterResult[name] || {}) : emojiStorage.groups[name];
    var emojisNotReq = [].concat(toConsumableArray_default()(hiddenEmojis), [hideEmojis]);
    var modifiedListToUse = listToUse.filter(function (li) {
      return !emojisNotReq.includes(li);
    });
    return modifiedListToUse.reduce(function (accumulator, emojiName, index) {
      if (missingEmoji && missingEmoji[emojiName]) {
        return accumulator;
      }

      var emoji = emojiStorage.emojis[emojiName];
      var hidden = !modifiedListToUse.length;

      if (!accumulator.shown && !hidden) {
        accumulator.shown = true;
      }

      if (!lib_isUnicodeSupported(emojiName)) {
        return accumulator;
      }

      accumulator.list.push( /*#__PURE__*/external_react_default.a.createElement(components_Emoji, {
        emoji: emoji,
        openVariationMenu: openVariationMenu,
        activeSkinTone: activeSkinTone,
        handleMouseLeave: unsetEmojiName,
        variationMenuOpenRef: variationMenuOpenRef,
        handleMouseEnter: function handleMouseEnter() {
          return lib_setEmojiName(emoji[constants["EMOJI_PROPERTY_NAME"]][0], emojiListRef);
        },
        hidden: hidden,
        shouldLoad: shouldLoad,
        onEmojiClick: onEmojiClick,
        index: index,
        key: emoji[constants["EMOJI_PROPERTY_UNIFIED"]],
        "native": config["native"]
      }));
      return accumulator;
    }, {
      list: [],
      shown: false
    });
  }, [activeSkinTone, filterResult, shouldLoad, missingEmoji, hideEmojis, config["native"]]);
};

var EmojiList_EmojiList = function EmojiList(_ref2) {
  var emojiListRef = _ref2.emojiListRef;
  var activeCategory = useActiveCategory();

  var _useConfig = useConfig(),
      groupNames = _useConfig.groupNames;

  var filterResult = useFilterResult();
  var filter = useFilterValue();
  var activeCategoryRef = Object(external_react_["useRef"])(activeCategory);
  var filterResultRef = Object(external_react_["useRef"])(filterResult);

  var _useState = Object(external_react_["useState"])(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      renderOne = _useState2[0],
      setRenderOne = _useState2[1];

  var searchTerm = filter !== null && filter !== void 0 && filter.length ? filter[filter.length - 1].value : '';
  Object(external_react_["useEffect"])(function () {
    if (!searchTerm) {
      requestAnimationFrame(function () {
        setRenderOne(true);
      });
    }
  }, [searchTerm]);
  Object(external_react_["useEffect"])(function () {
    if (renderOne) {
      requestAnimationFrame(function () {
        setRenderOne(false);
      });
    }
  }, [renderOne]);
  hooks_useIntersectionObserver(emojiListRef, activeCategoryRef, filterResultRef, renderOne);
  hooks_useScrollUpOnFilterChange(filterResult, emojiListRef);
  var props = {
    emojiListRef: emojiListRef,
    searchTerm: searchTerm,
    groupNames: groupNames
  };
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(EmojiList_ListRender, extends_default()({
    name: groups[0]
  }, props)), !renderOne && groups.slice(1).map(function (name) {
    return /*#__PURE__*/external_react_default.a.createElement(EmojiList_ListRender, extends_default()({
      key: name,
      name: name
    }, props));
  }));
};

var EmojiList_ListRender = /*#__PURE__*/external_react_default.a.memo(function ListRender(_ref3) {
  var name = _ref3.name,
      emojiListRef = _ref3.emojiListRef,
      groupNames = _ref3.groupNames;

  var _useConfig2 = useConfig(),
      groupVisibility = _useConfig2.groupVisibility;

  if (groupVisibility[name] === false) {
    return null;
  }

  var _createEmojiList = EmojiList_createEmojiList(name, {
    emojiListRef: emojiListRef
  }),
      list = _createEmojiList.list,
      shown = _createEmojiList.shown;

  var style = EmojiList_objectSpread({}, !shown && {
    display: 'none'
  });

  return /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "emoji-group",
    "data-name": name,
    "data-display-name": groupNames[name],
    key: name,
    style: style
  }, list);
});
/* harmony default export */ var components_EmojiList = (EmojiList_EmojiList);
EmojiList_EmojiList.propTypes = {
  emojiListRef: prop_types_default.a.shape({
    current: prop_types_default.a.instanceOf(Element)
  }),
  unsetEmojiName: prop_types_default.a.func
};
EmojiList_ListRender.propTypes = {
  name: prop_types_default.a.string,
  searchTerm: prop_types_default.a.string,
  emojiListRef: prop_types_default.a.shape({
    current: prop_types_default.a.instanceOf(Element)
  }),
  groupNames: groupNamesPropType
};
// CONCATENATED MODULE: ./src/components/RecentlyUsed/index.js









var RecentlyUsed_RecentlyUsed = function RecentlyUsed(_ref) {
  var emojiListRef = _ref.emojiListRef;
  var filterResult = useFilterResult();
  var missingEmoji = useMissingEmojis();
  var onEmojiClick = useOnEmojiClick();
  var config = useConfig();
  var recentlyUsed = useRecentlyUsed();
  var unsetEmojiName = Object(external_react_["useCallback"])(function () {
    return lib_setEmojiName('', emojiListRef);
  });

  if (!recentlyUsed.length || filterResult || config.groupVisibility[constants["GROUP_NAME_RECENTLY_USED"]] === false) {
    return null;
  }

  return /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "emoji-group",
    "data-display-name": config.groupNames[constants["GROUP_NAME_RECENTLY_USED"]],
    "data-name": constants["GROUP_NAME_RECENTLY_USED"]
  }, recentlyUsed.map(function (item, index) {
    var unified = item[constants["EMOJI_PROPERTY_UNIFIED"]];
    var emoji = emojiStorage.emojis[unified];

    if (missingEmoji[unified] || !emoji) {
      return null;
    }

    return /*#__PURE__*/external_react_default.a.createElement(components_Emoji, extends_default()({
      key: index,
      emoji: emoji
    }, item[constants["EMOJI_PROPERTY_SKIN_VARIATIONS"]] && {
      activeSkinTone: item[constants["EMOJI_PROPERTY_SKIN_VARIATIONS"]]
    }, {
      index: index,
      "native": config["native"],
      handleMouseLeave: unsetEmojiName,
      onEmojiClick: onEmojiClick,
      handleMouseEnter: function handleMouseEnter() {
        return lib_setEmojiName(emoji[constants["EMOJI_PROPERTY_NAME"]][0], emojiListRef);
      },
      shouldLoad: true
    }));
  }));
};

/* harmony default export */ var components_RecentlyUsed = (RecentlyUsed_RecentlyUsed);
RecentlyUsed_RecentlyUsed.propTypes = {
  unsetEmojiName: prop_types_default.a.func,
  emojiListRef: prop_types_default.a.shape({
    current: prop_types_default.a.instanceOf(Element)
  })
};
// CONCATENATED MODULE: ./lib/reduceBatch/index.js
var reduceBatch = function reduceBatch(array, cb, initialValue) {
  var batchSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  var accumulator = initialValue;
  return new Promise(function (resolve) {
    var index = 0;

    var batch = function batch() {
      for (var i = index; i < index + batchSize && i < array.length; i++) {
        accumulator = cb(accumulator, array[i], i, array);
      }

      index += batchSize;

      if (index < array.length) {
        setTimeout(function () {
          batch();
        });
      } else {
        return resolve(accumulator);
      }
    };

    batch();
  });
};

/* harmony default export */ var lib_reduceBatch = (reduceBatch);
// CONCATENATED MODULE: ./lib/initSearch/index.js




var allEmojis = Array.prototype.concat.apply([], Object.values(emojis));
/* harmony default export */ var initSearch = (lib_reduceBatch(allEmojis, function (accumulator, emoji) {
  if (!emoji) {
    return accumulator;
  }

  return emoji[constants["EMOJI_PROPERTY_NAME"]].reduce(function (accumulator, term) {
    return [].concat(toConsumableArray_default()(accumulator), toConsumableArray_default()((term || '').split(/[- _]/))).filter(Boolean);
  }, []).reduce(function (accumulator, term) {
    var key = term.toLowerCase();
    accumulator[key] = accumulator[key] || new Set();
    accumulator[key].add(emoji[constants["EMOJI_PROPERTY_UNIFIED"]]);
    return accumulator;
  }, accumulator);
}, {}).then(function (searchTerms) {
  return lib_reduceBatch(Object.keys(searchTerms), function (accumulator, term) {
    if (!term) {
      return accumulator;
    }

    var chars = term.split('').filter(Boolean);
    return (chars || []).reduce(function (accumulator, _char) {
      accumulator[_char] = accumulator[_char] || [];

      if (!accumulator[_char].includes(term)) {
        accumulator[_char].push(term);
      }

      return accumulator;
    }, accumulator);
  }, {}).then(function (mappedSearchTerms) {
    return {
      searchTerms: searchTerms,
      mappedSearchTerms: mappedSearchTerms
    };
  });
}));
// CONCATENATED MODULE: ./src/hooks/useFilter.js






var useFilter_searchTerms = {},
    mappedSearchTerms = {};
initSearch.then(function (res) {
  useFilter_searchTerms = res.searchTerms;
  mappedSearchTerms = res.mappedSearchTerms;
});

var useFilter_useFilter = function useFilter() {
  var filter = useFilterValue();
  var setFilter = useSetFilter();

  var handleChange = function handleChange(_ref) {
    var value = _ref.target.value;
    var prevKey = filter[filter.length - 1];
    var nextFilter;
    value = value.trim().toLowerCase();

    if (prevKey && prevKey.value === value) {
      return;
    }

    if (value.length === 1) {
      nextFilter = [{
        value: value,
        terms: mappedSearchTerms[value] || []
      }];
    } else if (prevKey && value.length > prevKey.value.length && value.includes(prevKey.value)) {
      nextFilter = [].concat(toConsumableArray_default()(filter), [{
        value: value,
        terms: prevKey.terms.filter(function (term) {
          return term.includes(value);
        })
      }]);
    } else if (prevKey && value.length < prevKey.value.length && prevKey.value.includes(value)) {
      var sliceIndex = 0;

      for (var index = filter.length; index > 0; index--) {
        if (value.includes(filter[index - 1].value)) {
          sliceIndex = index;
          break;
        }
      }

      filter.length = sliceIndex;
      nextFilter = toConsumableArray_default()(filter);
    } else if (filter.length === 0 || !value.includes(prevKey.value)) {
      nextFilter = [{
        value: value,
        terms: (mappedSearchTerms[value[0]] || []).filter(function (term) {
          return term.includes(value);
        })
      }];
    }

    var last = nextFilter && nextFilter[nextFilter.length - 1];
    var filterPresent = !!(last && last.value);

    if (!filterPresent) {
      setFilter({
        filter: nextFilter,
        filterResult: null
      });
      return;
    }

    lib_reduceBatch(last && last.terms || [], function (accumulator, term) {
      if (!useFilter_searchTerms[term]) {
        return accumulator;
      }

      return toConsumableArray_default()(useFilter_searchTerms[term] || []).reduce(function (accumulator, unified) {
        var group = emojiStorage.emojis[unified][constants["EMOJI_PROPERTY_GROUP"]];
        accumulator[group] = accumulator[group] || {};
        accumulator[group][unified] = true;
        return accumulator;
      }, accumulator);
    }, {}).then(function (filterResult) {
      setFilter({
        filter: nextFilter,
        filterResult: filterResult
      });
    });
  };

  return handleChange;
};

/* harmony default export */ var hooks_useFilter = (useFilter_useFilter);
// EXTERNAL MODULE: ./src/skinTones.json
var skinTones = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/SkinTones/constants.js
var SKIN_TONE_NEUTRAL = 'neutral';
var SKIN_TONE_LIGHT = '1f3fb';
var SKIN_TONE_MEDIUM_LIGHT = '1f3fc';
var SKIN_TONE_MEDIUM = '1f3fe';
var SKIN_TONE_MEDIUM_DARK = '1f3ff';
var SKIN_TONE_DARK = '1f3fd';
var DATA_NAME = 'tones';
// EXTERNAL MODULE: ./src/components/SkinTones/style.css
var SkinTones_style = __webpack_require__(43);

// CONCATENATED MODULE: ./src/components/SkinTones/index.js








var SkinTones_SkinTones = function SkinTones(_ref) {
  var skinToneSpreadRef = _ref.skinToneSpreadRef;
  var isOpen = useSkinToneSpreadValue();
  var setActiveSkinTone = useSetActiveSkinTone();
  var activeSkinTone = useActiveSkinTone();
  var collapseSkinTones = useCollapseSkinTones();
  var expandSkinTones = useExpendSkinTones();
  Object(external_react_["useEffect"])(function () {
    collapseSkinTones();
  }, [activeSkinTone]);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "skin-tones-list",
    ref: skinToneSpreadRef
  }, skinTones.map(function (tone, i) {
    var isActive = tone === activeSkinTone;
    return /*#__PURE__*/external_react_default.a.createElement("button", {
      key: tone,
      id: "t".concat(tone),
      tabIndex: i + 1,
      style: {
        transform: "translateX(-".concat(isOpen ? i * 20 : 0, "px) scale(").concat(isActive ? '1.5' : 1, ")"),
        zIndex: isActive ? 2 : 1
      },
      onClick: function onClick() {
        if (isOpen) {
          setActiveSkinTone(tone);
        } else {
          expandSkinTones();
        }
      }
    });
  }));
};

/* harmony default export */ var components_SkinTones = (SkinTones_SkinTones);
SkinTones_SkinTones.propTypes = {
  skinToneSpreadRef: prop_types_default.a.shape({
    current: prop_types_default.a.instanceOf(Element)
  })
};
// EXTERNAL MODULE: ./src/components/Search/style.css
var Search_style = __webpack_require__(45);

// CONCATENATED MODULE: ./src/components/Search/index.js







function Search(_ref) {
  var _ref$searchPlaceholde = _ref.searchPlaceholder,
      searchPlaceholder = _ref$searchPlaceholde === void 0 ? null : _ref$searchPlaceholde,
      emojiSearchRef = _ref.emojiSearchRef,
      skinToneSpreadRef = _ref.skinToneSpreadRef;
  var config = useConfig();
  var onChange = hooks_useFilter();

  if (config.disableSearchBar) {
    return null;
  }

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/external_react_default.a.createElement("input", {
    placeholder: searchPlaceholder,
    className: "emoji-search",
    onChange: onChange,
    autoFocus: !config.disableAutoFocus,
    ref: emojiSearchRef
  }), config.disableSkinTonePicker ? null : /*#__PURE__*/external_react_default.a.createElement(components_SkinTones, {
    skinToneSpreadRef: skinToneSpreadRef
  }));
}

/* harmony default export */ var components_Search = (Search);
Search.propTypes = {
  searchPlaceholder: prop_types_default.a.string,
  emojiSearchRef: prop_types_default.a.shape({
    current: prop_types_default.a.instanceOf(Element)
  }),
  skinToneSpreadRef: prop_types_default.a.shape({
    current: prop_types_default.a.instanceOf(Element)
  })
};
// EXTERNAL MODULE: ./src/components/VariationsMenu/style.css
var VariationsMenu_style = __webpack_require__(47);

// CONCATENATED MODULE: ./src/components/VariationsMenu/index.js










var VariationsMenu_VariationsMenu = function VariationsMenu() {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      showMenu = _useState2[0],
      setShowMenu = _useState2[1];

  var closeVariations = useCloseVariationMenu();
  var variationMenu = useVariationMenuValue();
  var activeSkinTone = useActiveSkinTone();
  var onEmojiClick = useOnEmojiClick();
  var config = useConfig();
  Object(external_react_["useEffect"])(function () {
    if (variationMenu && !showMenu) {
      setShowMenu(true);
    }

    return function () {
      setShowMenu(false);
    };
  }, [variationMenu]);

  if (!variationMenu) {
    return null;
  }

  var classes = classnames_default()('variation-list', {
    visible: showMenu
  });
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "variations-wrapper"
  }, /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: classes
  }, skinTones.map(function (tone) {
    var unified = variationMenu[constants["EMOJI_PROPERTY_SKIN_VARIATIONS"]].find(function (v) {
      return v.includes(tone);
    }) || variationMenu[constants["EMOJI_PROPERTY_UNIFIED"]];

    var handleClick = function handleClick(e) {
      closeVariations(e);
      return onEmojiClick(e, unified, variationMenu, activeSkinTone);
    };

    return /*#__PURE__*/external_react_default.a.createElement("li", {
      key: unified
    }, /*#__PURE__*/external_react_default.a.createElement("button", {
      onClick: handleClick,
      onMouseDown: function onMouseDown(e) {
        return e.stopPropagation();
      }
    }, /*#__PURE__*/external_react_default.a.createElement(components_EmojiImg, {
      "native": config["native"],
      unified: unified
    })));
  })));
};

/* harmony default export */ var components_VariationsMenu = (VariationsMenu_VariationsMenu);
VariationsMenu_VariationsMenu.propTypes = {
  closeVariations: prop_types_default.a.func
};
// CONCATENATED MODULE: ./node_modules/tinykeys/dist/tinykeys.module.js
var t=["Shift","Meta","Alt","Control"],tinykeys_module_e="object"==typeof navigator&&/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Control";function n(t,e){return"function"==typeof t.getModifierState&&t.getModifierState(e)}function r(t){return t.trim().split(" ").map(function(t){var n=t.split(/\b\+/),r=n.pop();return[n=n.map(function(t){return"$mod"===t?tinykeys_module_e:t}),r]})}function o(e,o){var i;void 0===o&&(o={});var u=null!=(i=o.timeout)?i:1e3,a=Object.keys(e).map(function(t){return[r(t),e[t]]}),f=new Map,c=null;return function(e){e instanceof KeyboardEvent&&(a.forEach(function(r){var o=r[0],i=r[1],u=f.get(o)||o;!function(e,r){return!(r[1].toUpperCase()!==e.key.toUpperCase()&&r[1]!==e.code||r[0].find(function(t){return!n(e,t)})||t.find(function(t){return!r[0].includes(t)&&r[1]!==t&&n(e,t)}))}(e,u[0])?n(e,e.key)||f.delete(o):u.length>1?f.set(o,u.slice(1)):(f.delete(o),i(e))}),c&&clearTimeout(c),c=setTimeout(f.clear.bind(f),u))}}function tinykeys_module_i(t,e,n){var r;void 0===n&&(n={});var i=null!=(r=n.event)?r:"keydown",u=o(e,n);return t.addEventListener(i,u),function(){t.removeEventListener(i,u)}}/* harmony default export */ var tinykeys_module = (tinykeys_module_i);
//# sourceMappingURL=tinykeys.module.js.map

// CONCATENATED MODULE: ./src/lib/KeyboardNavigation/index.js
var withCatch = function withCatch(cb) {
  return function () {
    try {
      cb.apply(void 0, arguments);
    } catch (_unused) {}
  };
};
var getGridInfo = function getGridInfo() {
  var grid = getCurrentEmojiListGroup();
  var active = getActiveElement().parentElement;
  var activeIndex = Array.prototype.indexOf.call(grid.children, active);
  var numOfItems = grid.children.length;
  var baseOffset = grid.children[0].offsetTop;
  var breakIndex = Array.prototype.findIndex.call(grid.children, function (item) {
    return item.offsetTop > baseOffset;
  });
  var itemsPerRow = breakIndex === -1 ? numOfItems : breakIndex;
  var currentColumn = activeIndex % itemsPerRow;
  return {
    activeIndex: activeIndex,
    itemsPerRow: itemsPerRow,
    numOfItems: numOfItems,
    currentColumn: currentColumn,
    gridChildren: grid.children
  };
};
var getElementBoundariesInfo = function getElementBoundariesInfo(_ref) {
  var activeIndex = _ref.activeIndex,
      itemsPerRow = _ref.itemsPerRow,
      numOfItems = _ref.numOfItems;
  var isTopRow = activeIndex <= itemsPerRow - 1;
  var isBottomRow = activeIndex >= numOfItems - itemsPerRow;
  var isLeftColumn = activeIndex % itemsPerRow === 0;
  var isRightColumn = activeIndex % itemsPerRow === itemsPerRow - 1 || activeIndex === numOfItems - 1;
  var isLastRow = activeIndex >= numOfItems - numOfItems % itemsPerRow || numOfItems % itemsPerRow === 0;
  return {
    isTopRow: isTopRow,
    isBottomRow: isBottomRow,
    isLeftColumn: isLeftColumn,
    isRightColumn: isRightColumn,
    isLastRow: isLastRow
  };
};
var getActiveElement = function getActiveElement() {
  return document.activeElement;
};
var getCurrentEmojiListGroup = function getCurrentEmojiListGroup() {
  return getActiveElement().closest('.emoji-group');
};

var closestEmoji = function closestEmoji() {
  return getActiveElement().closest('.emoji');
};

var getNextEmoji = function getNextEmoji() {
  var nextEmoji = closestEmoji().nextElementSibling;
  if (!nextEmoji) return null;
  return nextEmoji.firstChild;
};
var getPrevEmoji = function getPrevEmoji() {
  var prevSibling = closestEmoji().previousElementSibling;
  if (!prevSibling) return null;
  return prevSibling.firstChild;
};
var focusElement = withCatch(function (element) {
  if (element) requestAnimationFrame(function () {
    return element.focus();
  });
});
var focusPrevCategory = function focusPrevCategory() {
  var _getActiveElement;

  var prevSibling = (_getActiveElement = getActiveElement()) === null || _getActiveElement === void 0 ? void 0 : _getActiveElement.previousElementSibling;
  focusElement(prevSibling);
};
var focusNextCategory = function focusNextCategory() {
  var _getActiveElement2;

  var nextSibling = (_getActiveElement2 = getActiveElement()) === null || _getActiveElement2 === void 0 ? void 0 : _getActiveElement2.nextElementSibling;
  focusElement(nextSibling);
};
var getEmojiGroupName = function getEmojiGroupName(emojiGroup) {
  return emojiGroup.getAttribute('data-name');
};
// CONCATENATED MODULE: ./src/hooks/consts.js
var RIGHT = 'right';
var LEFT = 'left';
var DOWN = 'down';
var UP = 'up';
// CONCATENATED MODULE: ./src/hooks/useKeyboardNavigation.js







var useKeyboardNavigation_useKeyboardNavigation = function useKeyboardNavigation(_ref) {
  var categoriesNavRef = _ref.categoriesNavRef,
      emojiSearchRef = _ref.emojiSearchRef,
      emojiListRef = _ref.emojiListRef,
      skinToneSpreadRef = _ref.skinToneSpreadRef;
  var setActiveCategory = useSetActiveCategory();
  var toggleSkinTonesSpread = useToggleSpreadSkinTones();
  var activeSkinTone = useActiveSkinTone();
  var isSkinToneSpreadOpen = useSkinToneSpreadValue();
  Object(external_react_["useEffect"])(function () {
    return tinykeys_module(categoriesNavRef.current, {
      ArrowLeft: focusPrevCategory,
      ArrowRight: focusNextCategory,
      ArrowDown: focusNextSection,
      Escape: exitEmojiList
    });
  }, []);
  Object(external_react_["useEffect"])(function () {
    if (!emojiSearchRef.current) return;
    return tinykeys_module(emojiSearchRef.current, {
      ArrowRight: focusSkinTonePicker,
      ArrowUp: focusPrevSection,
      ArrowDown: focusNextSection
    });
  }, [activeSkinTone]);
  Object(external_react_["useEffect"])(function () {
    if (!emojiSearchRef.current) return;
    return tinykeys_module(skinToneSpreadRef.current, {
      ArrowLeft: isSkinToneSpreadOpen ? focusNextSkinTone : exitSkinTones,
      ArrowRight: focusPrevSkinTone,
      Escape: exitSkinTones,
      Enter: exitSkinTones
    });
  }, [activeSkinTone, isSkinToneSpreadOpen]);
  Object(external_react_["useEffect"])(function () {
    return tinykeys_module(emojiListRef.current, {
      ArrowRight: withPreventDefault(function () {
        return navigateGrid(RIGHT);
      }),
      ArrowLeft: withPreventDefault(function () {
        return navigateGrid(LEFT);
      }),
      ArrowUp: withPreventDefault(function () {
        return navigateGrid(UP);
      }),
      ArrowDown: withPreventDefault(function () {
        return navigateGrid(DOWN);
      }),
      Escape: exitEmojiList
    });
  }, []);

  function exitEmojiList() {
    focusSearch();
    scrollEmojiListToTop();
  }

  var updateActiveItem = function updateActiveItem(newActiveItem) {
    focusElement(newActiveItem === null || newActiveItem === void 0 ? void 0 : newActiveItem.firstChild);
  };

  var navigateGrid = withCatch(function (direction) {
    var _getGridInfo = getGridInfo(),
        activeIndex = _getGridInfo.activeIndex,
        itemsPerRow = _getGridInfo.itemsPerRow,
        numOfItems = _getGridInfo.numOfItems,
        currentColumn = _getGridInfo.currentColumn,
        gridChildren = _getGridInfo.gridChildren;

    var _getElementBoundaries = getElementBoundariesInfo({
      activeIndex: activeIndex,
      itemsPerRow: itemsPerRow,
      numOfItems: numOfItems
    }),
        isTopRow = _getElementBoundaries.isTopRow,
        isBottomRow = _getElementBoundaries.isBottomRow,
        isLastRow = _getElementBoundaries.isLastRow,
        isLeftColumn = _getElementBoundaries.isLeftColumn,
        isRightColumn = _getElementBoundaries.isRightColumn;

    switch (direction) {
      case UP:
        if (isTopRow && !focusPrevEmojiListGroup(currentColumn, itemsPerRow)) focusPrevSection();else updateActiveItem(gridChildren[activeIndex - itemsPerRow]);
        break;

      case DOWN:
        if (isBottomRow) {
          if (isLastRow) focusNextEmojiListGroup(currentColumn);else updateActiveItem(gridChildren[numOfItems - 1]);
        } else updateActiveItem(gridChildren[activeIndex + itemsPerRow]);

        break;

      case LEFT:
        {
          var prevEmoji = getPrevEmoji();
          if (isLeftColumn) prevEmoji ? focusElement(prevEmoji) : focusPrevEmojiListGroupOnLastItem();else focusElement(prevEmoji);
          break;
        }

      case RIGHT:
        {
          var nextEmoji = getNextEmoji();
          if (isRightColumn) nextEmoji ? focusElement(nextEmoji) : focusNextEmojiListGroup();else focusElement(nextEmoji);
          break;
        }
    }
  });
  var sections = [];
  Object(external_react_["useEffect"])(function () {
    sections = [{
      //categories
      focus: function focus() {
        return focusElement(categoriesNavRef.current.firstChild);
      },
      rootElement: categoriesNavRef
    }, emojiSearchRef.current && {
      // search bar
      focus: function focus() {
        return focusElement(emojiSearchRef.current);
      },
      rootElement: emojiSearchRef
    }, {
      //emoji list'
      focus: function focus() {
        var firstEmoji = emojiListRef.current.querySelector('.emoji');
        focusElement(firstEmoji === null || firstEmoji === void 0 ? void 0 : firstEmoji.firstChild);
      },
      rootElement: emojiListRef
    }].filter(Boolean);
  }, [activeSkinTone, isSkinToneSpreadOpen]);

  var focusNextEmojiListGroup = function focusNextEmojiListGroup() {
    var columnIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var currentEmojiGroup = getCurrentEmojiListGroup();
    var nextEmojiGroup = currentEmojiGroup.nextSibling;

    if (nextEmojiGroup) {
      focusElement(nextEmojiGroup.children[columnIndex].firstChild);
      var categoryName = getEmojiGroupName(nextEmojiGroup);
      setActiveCategory(categoryName);
    }
  };

  var focusPrevEmojiListGroupOnLastItem = function focusPrevEmojiListGroupOnLastItem() {
    var _prevEmojiGroup$lastC;

    var currentEmojiGroup = getCurrentEmojiListGroup();
    var prevEmojiGroup = currentEmojiGroup.previousSibling;
    focusElement(prevEmojiGroup === null || prevEmojiGroup === void 0 ? void 0 : (_prevEmojiGroup$lastC = prevEmojiGroup.lastChild) === null || _prevEmojiGroup$lastC === void 0 ? void 0 : _prevEmojiGroup$lastC.firstChild);
    return prevEmojiGroup;
  };

  var focusPrevEmojiListGroup = function focusPrevEmojiListGroup(columnIndex, itemsPerRow) {
    var currentEmojiGroup = getCurrentEmojiListGroup();
    var prevEmojiGroup = currentEmojiGroup.previousSibling;

    if (prevEmojiGroup) {
      var numOfItems = prevEmojiGroup.children.length;
      var nextFocusIndex;

      for (var i = numOfItems - 1; i >= 0; i--) {
        if (i % itemsPerRow === columnIndex) {
          nextFocusIndex = i;
          break;
        }
      }

      var isInLastRow = nextFocusIndex >= numOfItems - numOfItems % itemsPerRow || numOfItems % itemsPerRow === 0;
      if (!isInLastRow) nextFocusIndex = numOfItems - 1;
      focusElement(prevEmojiGroup.children[nextFocusIndex].firstChild);
      var categoryName = getEmojiGroupName(prevEmojiGroup);
      setActiveCategory(categoryName);
    }

    return prevEmojiGroup;
  };

  var exitSkinTones = withCatch(function () {
    focusSearch();
  });
  var focusSearch = withCatch(function () {
    if (emojiSearchRef.current) {
      focusElement(emojiSearchRef.current);
    }
  });

  var focusPrevSkinTone = function focusPrevSkinTone() {
    var current = getActiveElement();

    if (current) {
      var prev = current.previousSibling;
      focusElement(prev);
    }
  };

  var focusNextSkinTone = function focusNextSkinTone() {
    var current = getActiveElement();

    if (current) {
      var next = current.nextSibling;
      focusElement(next);
    }
  };

  var focusActiveSkinTone = function focusActiveSkinTone() {
    focusElement(getActiveSkinToneElement());
  };

  var getActiveSkinToneElement = function getActiveSkinToneElement() {
    return skinToneSpreadRef.current.querySelector("#t".concat(activeSkinTone));
  };

  var focusSkinTonePicker = withCatch(function () {
    if (!skinToneSpreadRef.current) return;
    toggleSkinTonesSpread();
    focusActiveSkinTone();
  });

  var getCurrentSectionIndex = function getCurrentSectionIndex() {
    var activeElement = getActiveElement();
    var currentSectionIndex = sections.findIndex(function (section) {
      return section.rootElement.current.contains(activeElement);
    });
    return currentSectionIndex;
  };

  var scrollEmojiListToTop = withCatch(function () {
    requestAnimationFrame(function () {
      emojiListRef.current.scrollTop = 0;
    });
  });
  var focusNextSection = withPreventDefault(withCatch(function () {
    var currentSectionIndex = getCurrentSectionIndex();

    if (currentSectionIndex < sections.length) {
      currentSectionIndex += 1;
      focusElement(sections[currentSectionIndex]);
      scrollEmojiListToTop();
    }
  }));
  var focusPrevSection = withCatch(function () {
    var currentSectionIndex = getCurrentSectionIndex();

    if (currentSectionIndex !== 0) {
      currentSectionIndex -= 1;
      focusElement(sections[currentSectionIndex]);
      scrollEmojiListToTop();
    }
  });
};

/* harmony default export */ var hooks_useKeyboardNavigation = (useKeyboardNavigation_useKeyboardNavigation);
useKeyboardNavigation_useKeyboardNavigation.propTypes = {
  categoriesNavRef: prop_types_default.a.shape({
    current: prop_types_default.a.instanceOf(Element)
  }),
  emojiSearchRef: prop_types_default.a.shape({
    current: prop_types_default.a.instanceOf(Element)
  }),
  emojiListRef: prop_types_default.a.shape({
    current: prop_types_default.a.instanceOf(Element)
  }),
  skinToneSpreadRef: prop_types_default.a.shape({
    current: prop_types_default.a.instanceOf(Element)
  })
};

function withPreventDefault(callback) {
  return function (event) {
    event.preventDefault();
    return callback(event);
  };
}
// CONCATENATED MODULE: ./src/lib/recentlyUsed/index.js



function recentlyUsed_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function recentlyUsed_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { recentlyUsed_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { recentlyUsed_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var RECENTLY_USED_KEY = 'epr_ru';
var recentlyUsed_getRecentlyUsed = function getRecentlyUsed() {
  try {
    if (!lib_globalObject.localStorage) {
      return [];
    }

    var ruList = lib_globalObject.localStorage.getItem(RECENTLY_USED_KEY);
    return !ruList ? [] : JSON.parse(ruList);
  } catch (e) {
    return [];
  }
};
var recentlyUsed_setRecentlyUsed = function setRecentlyUsed(_ref) {
  var unified = _ref.unified,
      originalUnified = _ref.originalUnified;

  try {
    if (!lib_globalObject.localStorage) {
      return;
    }

    var unifiedParts = unified.split('-');
    var skinVariation = '';

    if (unified !== originalUnified && unifiedParts.length > 1) {
      skinVariation = unifiedParts[1];
    }

    var ruList = [recentlyUsed_objectSpread(defineProperty_default()({}, constants["EMOJI_PROPERTY_UNIFIED"], originalUnified), skinVariation && defineProperty_default()({}, constants["EMOJI_PROPERTY_SKIN_VARIATIONS"], skinVariation))].concat(toConsumableArray_default()(recentlyUsed_getRecentlyUsed().filter(function (item) {
      return item[constants["EMOJI_PROPERTY_UNIFIED"]] !== originalUnified;
    })));
    var output = ruList.splice(0, 14);
    lib_globalObject.localStorage.setItem(RECENTLY_USED_KEY, JSON.stringify(output));
  } catch (e) {
    return;
  }
};
// CONCATENATED MODULE: ./src/lib/emojiOutput/index.js


var emojiOutput_emojiOutput = function emojiOutput(unified, emoji, activeSkinTone) {
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return Object.assign({
    unified: unified,
    emoji: unified.split('-').map(function (hex) {
      return parseInt(hex, 16);
    }).map(function (hex) {
      return String.fromCodePoint(hex);
    }).join(''),
    originalUnified: emoji[constants["EMOJI_PROPERTY_UNIFIED"]],
    names: emoji[constants["EMOJI_PROPERTY_NAME"]],
    activeSkinTone: activeSkinTone
  }, extra);
};

/* harmony default export */ var lib_emojiOutput = (emojiOutput_emojiOutput);
// CONCATENATED MODULE: ./src/lib/clickHandler/index.js



var clickHandler_clickHandler = function clickHandler() {
  var onClickRef = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (e, unified, emoji, activeSkinTone) {
    var output = lib_emojiOutput(unified, emoji, activeSkinTone);
    recentlyUsed_setRecentlyUsed(output);
    return onClickRef.current && onClickRef.current(e, output);
  };
};

/* harmony default export */ var lib_clickHandler = (clickHandler_clickHandler);
// EXTERNAL MODULE: ./src/style.css
var src_style = __webpack_require__(49);

// CONCATENATED MODULE: ./src/index.js


var _excluded = ["emojiUrl", "onEmojiClick", "preload", "native", "skinTone", "disableAutoFocus", "disableSearchBar", "disableSkinTonePicker", "groupNames", "groupVisibility", "hideEmojis"];

function src_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function src_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { src_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { src_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

















var src_EmojiPicker = function EmojiPicker(_ref) {
  var _ref$emojiUrl = _ref.emojiUrl,
      emojiUrl = _ref$emojiUrl === void 0 ? "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64" : _ref$emojiUrl,
      onEmojiClick = _ref.onEmojiClick,
      _ref$preload = _ref.preload,
      preload = _ref$preload === void 0 ? false : _ref$preload,
      _ref$native = _ref["native"],
      _native = _ref$native === void 0 ? false : _ref$native,
      _ref$skinTone = _ref.skinTone,
      skinTone = _ref$skinTone === void 0 ? SKIN_TONE_NEUTRAL : _ref$skinTone,
      _ref$disableAutoFocus = _ref.disableAutoFocus,
      disableAutoFocus = _ref$disableAutoFocus === void 0 ? false : _ref$disableAutoFocus,
      _ref$disableSearchBar = _ref.disableSearchBar,
      disableSearchBar = _ref$disableSearchBar === void 0 ? false : _ref$disableSearchBar,
      _ref$disableSkinToneP = _ref.disableSkinTonePicker,
      disableSkinTonePicker = _ref$disableSkinToneP === void 0 ? false : _ref$disableSkinToneP,
      _ref$groupNames = _ref.groupNames,
      groupNames = _ref$groupNames === void 0 ? {} : _ref$groupNames,
      _ref$groupVisibility = _ref.groupVisibility,
      groupVisibility = _ref$groupVisibility === void 0 ? {} : _ref$groupVisibility,
      _ref$hideEmojis = _ref.hideEmojis,
      hideEmojis = _ref$hideEmojis === void 0 ? [] : _ref$hideEmojis,
      props = objectWithoutProperties_default()(_ref, _excluded);

  var onClickRef = Object(external_react_["useRef"])(onEmojiClick);
  onClickRef.current = onEmojiClick;
  return /*#__PURE__*/external_react_default.a.createElement(PickerContextProvider, {
    config: {
      skinTone: skinTone,
      emojiUrl: emojiUrl,
      preload: preload,
      "native": _native,
      groupNames: Object.assign(GROUP_NAMES_ENGLISH, groupNames),
      groupVisibility: groupVisibility,
      disableSearchBar: disableSearchBar,
      disableAutoFocus: disableAutoFocus,
      disableSkinTonePicker: disableSkinTonePicker,
      hideEmojis: hideEmojis
    },
    recentlyUsed: recentlyUsed_getRecentlyUsed(),
    onEmojiClick: lib_clickHandler(onClickRef)
  }, /*#__PURE__*/external_react_default.a.createElement(src_EmojiPickerContent, props));
};

var src_EmojiPickerContent = function EmojiPickerContent(_ref2) {
  var _ref2$pickerStyle = _ref2.pickerStyle,
      pickerStyle = _ref2$pickerStyle === void 0 ? {} : _ref2$pickerStyle,
      _ref2$searchPlacehold = _ref2.searchPlaceholder,
      searchPlaceholder = _ref2$searchPlacehold === void 0 ? null : _ref2$searchPlacehold;
  var emojiPickerRef = Object(external_react_["useRef"])(null);
  var emojiListRef = Object(external_react_["useRef"])(null);
  var emojiSearchRef = Object(external_react_["useRef"])(null);
  var skinToneSpreadRef = Object(external_react_["useRef"])(null);
  var categoriesNavRef = Object(external_react_["useRef"])(null);
  hooks_useKeyboardNavigation({
    categoriesNavRef: categoriesNavRef,
    emojiSearchRef: emojiSearchRef,
    emojiListRef: emojiListRef,
    skinToneSpreadRef: skinToneSpreadRef
  });
  return /*#__PURE__*/external_react_default.a.createElement(Aside, {
    pickerStyle: pickerStyle,
    emojiPickerAsideRef: emojiPickerRef,
    skinToneSpreadRef: skinToneSpreadRef
  }, /*#__PURE__*/external_react_default.a.createElement(components_CategoriesNav, {
    emojiListRef: emojiListRef,
    categoriesNavRef: categoriesNavRef
  }), /*#__PURE__*/external_react_default.a.createElement(components_Search, {
    searchPlaceholder: searchPlaceholder,
    emojiSearchRef: emojiSearchRef,
    skinToneSpreadRef: skinToneSpreadRef
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content-wrapper-epr"
  }, /*#__PURE__*/external_react_default.a.createElement(components_VariationsMenu, null), /*#__PURE__*/external_react_default.a.createElement("section", {
    className: "emoji-scroll-wrapper",
    ref: emojiListRef
  }, /*#__PURE__*/external_react_default.a.createElement(components_RecentlyUsed, {
    emojiListRef: emojiListRef
  }), /*#__PURE__*/external_react_default.a.createElement(components_EmojiList, {
    emojiListRef: emojiListRef
  }))));
};

function Aside(_ref3) {
  var children = _ref3.children,
      pickerStyle = _ref3.pickerStyle,
      emojiPickerAsideRef = _ref3.emojiPickerAsideRef,
      skinToneSpreadRef = _ref3.skinToneSpreadRef;
  var closeVariations = useCloseVariationMenu();
  var collapseSkinTones = useCollapseSkinTones();
  return /*#__PURE__*/external_react_default.a.createElement("aside", {
    className: "emoji-picker-react",
    style: pickerStyle,
    onScroll: function onScroll() {
      closeVariations();
      collapseSkinTones();
    },
    onMouseDown: function onMouseDown(e) {
      closeVariations();

      if (!skinToneSpreadRef.current.contains(e.target)) {
        collapseSkinTones();
      }
    },
    ref: emojiPickerAsideRef
  }, children);
}

Aside.propTypes = {
  children: prop_types_default.a.node,
  pickerStyle: prop_types_default.a.object,
  emojiPickerAsideRef: prop_types_default.a.shape({
    current: prop_types_default.a.instanceOf(Element)
  }),
  skinToneSpreadRef: prop_types_default.a.shape({
    current: prop_types_default.a.instanceOf(Element)
  })
};
src_EmojiPickerContent.propTypes = {
  pickerStyle: prop_types_default.a.objectOf(prop_types_default.a.string),
  searchPlaceholder: prop_types_default.a.string
};

/* harmony default export */ var src_0 = __webpack_exports__["default"] = (src_EmojiPicker);
src_EmojiPicker.propTypes = src_objectSpread(src_objectSpread({
  onEmojiClick: prop_types_default.a.func,
  pickerStyle: prop_types_default.a.objectOf(prop_types_default.a.string)
}, customEmojiPropTypes), configPropTypes);

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map