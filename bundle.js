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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var logger = __webpack_require__(2);

	logger.log('dupa');

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	function print() {
	  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Log';
	  var fontColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#000000';
	  var backgroundColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#FFFFFF';

	  console.log('%c' + type, 'color:' + fontColor + ';background-color:' + backgroundColor + ';padding:2px 25px;');
	  if (typeof text === 'string') {
	    console.log('%c' + text, 'color:' + backgroundColor + ';');
	  } else {
	    console.log(text);
	  }
	  console.log('%cEnd of ' + type, 'color:' + fontColor + ';background-color:' + backgroundColor + ';padding:2px 25px;');
	}

	function wrapLine(text) {
	  console.log('-----------------');
	  console.log(text);
	  console.log('-----------------');
	}

	function error() {
	  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var typeText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Error';

	  print(text, typeText, '#FFFFFF', '#FF4C4C');
	}

	function log() {
	  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var typeText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Log';

	  print(text, typeText, '#FFFFFF', '#4C4C4C');
	}

	function warning() {
	  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var typeText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Warning';

	  print(text, typeText, '#FFF', '#FFC966');
	}

	function info() {
	  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var typeText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Info';

	  print(text, typeText, '#FFF', '#B1CCD5');
	}

	module.exports = {
	  wrapLine: wrapLine,
	  error: error,
	  log: log,
	  warning: warning,
	  info: info
	};


/***/ }
/******/ ]);