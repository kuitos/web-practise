/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Kuitos
	 * @homepage https://github.com/kuitos
	 * @since 2015-08-04. 17:28
	 */
	//import {arrow} from './arrow/arrow';
	//import Person from './class/class';
	//import Ob from './object-literal/object-literal';
	//import TS from './tempalte-string/template-string';
	//import destructur from './destructuring/destructuring';
	//import rest from './rest/rest.js';
	//import letAndConst from './letAndConst/letAndConst.js';
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _iteratorIteratorJs = __webpack_require__(1);

	var _iteratorIteratorJs2 = _interopRequireDefault(_iteratorIteratorJs);

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * @author Kuitos
	 * @homepage https://github.com/kuitos/
	 * @since 2015-08-05
	 */

	"use strict";

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function iterator(array) {

	  var index = 0;

	  return {

	    next: function next() {
	      return index < array.length ? { value: array[index++], done: false } : { value: undefined, done: true };
	    }
	  };
	}

	var it = iterator([1, 2, 3]);
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());

	var data = _defineProperty({

	  data: [1, 2, 3]

	}, Symbol.iterator, function () {

	  var index = 0;
	  var self = this;
	  var length = this.data.length;

	  return {

	    next: function next() {
	      return index < length ? { value: { index: index, value: self.data[index++] }, done: false } : { value: undefined, done: true };
	    }
	  };
	});

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	  for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	    var i = _step.value;

	    console.log(i, data[i]);
	  }
	} catch (err) {
	  _didIteratorError = true;
	  _iteratorError = err;
	} finally {
	  try {
	    if (!_iteratorNormalCompletion && _iterator["return"]) {
	      _iterator["return"]();
	    }
	  } finally {
	    if (_didIteratorError) {
	      throw _iteratorError;
	    }
	  }
	}

/***/ }
/******/ ]);