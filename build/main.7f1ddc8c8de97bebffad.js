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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.utils = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.utils = mod.exports;
    }
  })(undefined, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    // This file is here to replace Lodash.
    // Currently we need to import 70Kb (after optimizations) from lodash just to use 6 functions.
    // This is not worth it. If the uses cases for lodash increase, we should get
    // rid of this.

    var curry = exports.curry = function curry(fn) {
      return function cf() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return args.length >= fn.length ? fn.apply(undefined, args) : function () {
          for (var _len2 = arguments.length, a = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            a[_key2] = arguments[_key2];
          }

          return cf.apply(undefined, [].concat(args, a));
        };
      };
    };

    var isUndefined = exports.isUndefined = function isUndefined(val) {
      return val === undefined;
    };
    var isNull = exports.isNull = function isNull(val) {
      return val === null;
    };
    var isNan = exports.isNan = function isNan(val) {
      return Number.isNaN(val);
    };

    var defaultTo = exports.defaultTo = curry(function (defaults, value) {
      return isUndefined(value) || isNull(value) || isNan(value) ? defaults : value;
    });
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./utils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.utils);
    global.Mediator = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.utils);
      global.Mediator = mod.exports;
    }
  })(undefined, function (exports, _utils) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      } else {
        return Array.from(arr);
      }
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var isDifferent = (0, _utils.curry)(function (a, b) {
      return a !== b;
    });
    var call = (0, _utils.curry)(function (value, fn) {
      return fn(value);
    });
    var apply = (0, _utils.curry)(function (name, value, fn) {
      return fn(name, value);
    });

    var Mediator = function () {
      function Mediator() {
        _classCallCheck(this, Mediator);

        this.handlers = {};
        this.middleware = [];

        return this;
      }

      _createClass(Mediator, [{
        key: 'subscribe',
        value: function subscribe(type, handler) {
          var _this = this;

          this.handlers[type] = this.handlers[type] || [];
          this.handlers[type] = [].concat(_toConsumableArray(this.handlers[type]), [handler]);

          return function () {
            return _this.unsubscribe(type, handler);
          };
        }
      }, {
        key: 'subscribeTimes',
        value: function subscribeTimes(times, type, handler) {
          var _this2 = this;

          var count = 0;
          var fnTimes = function fnTimes(current, max, val) {
            count += 1;
            if (count === times) {
              _this2.unsubscribe(type, fnTimes);
            }

            return handler(val);
          };

          this.subscribe(type, fnTimes);
          return function () {
            return _this2.unsubscribe(type, fnTimes);
          };
        }
      }, {
        key: 'unsubscribe',
        value: function unsubscribe(type, handler) {
          if (this.handlers[type]) {
            this.handlers[type] = this.handlers[type].filter(isDifferent(handler));
          }

          return this;
        }
      }, {
        key: 'dispatch',
        value: function dispatch(type, value) {
          var handlers = this.handlers[type];
          var orValue = (0, _utils.defaultTo)(value);

          if (handlers) {
            var modified = this.middleware.reduce(apply(type), value);
            handlers.map(call(orValue(modified)));
          }

          return this;
        }
      }, {
        key: 'use',
        value: function use(middleware) {
          this.middleware = this.middleware.concat(middleware);
          return this;
        }
      }, {
        key: 'merge',
        value: function merge(mediator) {
          var middleware = mediator.middleware;

          this.middleware = this.middleware.concat(middleware);

          return this;
        }
      }]);

      return Mediator;
    }();

    exports.default = Mediator;
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Couldn't find preset \"stage-0\" relative to directory \"/Users/couto/Development/TVG/GKE/tvg-gtm/node_modules/tvg-conf\"\n    at /Users/couto/Development/TVG/GKE/tvg-gtm/node_modules/babel-core/lib/transformation/file/options/option-manager.js:292:19\n    at Array.map (native)\n    at OptionManager.resolvePresets (/Users/couto/Development/TVG/GKE/tvg-gtm/node_modules/babel-core/lib/transformation/file/options/option-manager.js:274:20)\n    at OptionManager.mergePresets (/Users/couto/Development/TVG/GKE/tvg-gtm/node_modules/babel-core/lib/transformation/file/options/option-manager.js:263:10)\n    at OptionManager.mergeOptions (/Users/couto/Development/TVG/GKE/tvg-gtm/node_modules/babel-core/lib/transformation/file/options/option-manager.js:248:14)\n    at OptionManager.init (/Users/couto/Development/TVG/GKE/tvg-gtm/node_modules/babel-core/lib/transformation/file/options/option-manager.js:367:12)\n    at File.initOptions (/Users/couto/Development/TVG/GKE/tvg-gtm/node_modules/babel-core/lib/transformation/file/index.js:216:65)\n    at new File (/Users/couto/Development/TVG/GKE/tvg-gtm/node_modules/babel-core/lib/transformation/file/index.js:139:24)\n    at Pipeline.transform (/Users/couto/Development/TVG/GKE/tvg-gtm/node_modules/babel-core/lib/transformation/pipeline.js:46:16)\n    at transpile (/Users/couto/Development/TVG/GKE/tvg-gtm/node_modules/babel-loader/lib/index.js:38:20)\n    at Object.module.exports (/Users/couto/Development/TVG/GKE/tvg-gtm/node_modules/babel-loader/lib/index.js:133:12)");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./utils'), require('./Mediator'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.utils, global.Mediator);
    global.index = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.utils, global.Mediator);
      global.index = mod.exports;
    }
  })(undefined, function (exports, _utils, _Mediator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.merge = exports.use = exports.dispatch = exports.unsubscribe = exports.subscribeThrice = exports.subscribeTwice = exports.subscribeOnce = exports.subscribeTimes = exports.subscribe = undefined;

    var _Mediator2 = _interopRequireDefault(_Mediator);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var instance = void 0;

    if (typeof window !== 'undefined' && window.mediator) {
      instance = window.mediator;
    } else if (typeof window !== 'undefined' && !window.mediator) {
      instance = window.mediator = new _Mediator2.default();
    } else {
      instance = new _Mediator2.default();
    }

    var subscribe = exports.subscribe = (0, _utils.curry)(function (name, handler) {
      return instance.subscribe(name, handler);
    });

    var subscribeTimes = exports.subscribeTimes = (0, _utils.curry)(function (count, name, handler) {
      return instance.subscribeTimes(count, name, handler);
    });

    var subscribeOnce = exports.subscribeOnce = subscribeTimes(1);
    var subscribeTwice = exports.subscribeTwice = subscribeTimes(2);
    var subscribeThrice = exports.subscribeThrice = subscribeTimes(3);

    var unsubscribe = exports.unsubscribe = (0, _utils.curry)(function (name, handler) {
      return instance.unsubscribe(name, handler);
    });

    var dispatch = exports.dispatch = (0, _utils.curry)(function (type, value) {
      return instance.dispatch(type, value);
    });

    var use = exports.use = function use(middleware) {
      return instance.use(middleware);
    };
    var merge = exports.merge = function merge(mediator) {
      return instance.merge(mediator);
    };
  });
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tvg_conf__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tvg_conf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tvg_conf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tvg_mediator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tvg_mediator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tvg_mediator__);



/***/ })
/******/ ]);