(function (React, ReactDOM, redux, testStore, TestTheme) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  var ReactDOM__default = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;
  testStore = testStore && testStore.hasOwnProperty('default') ? testStore['default'] : testStore;
  TestTheme = TestTheme && TestTheme.hasOwnProperty('default') ? TestTheme['default'] : TestTheme;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var reactIs_production_min = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports,"__esModule",{value:!0});
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
  60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function z(a){return y(a)===m}
  exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
  exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
  exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
  });

  unwrapExports(reactIs_production_min);
  var reactIs_production_min_1 = reactIs_production_min.typeOf;
  var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
  var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
  var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
  var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
  var reactIs_production_min_6 = reactIs_production_min.Element;
  var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
  var reactIs_production_min_8 = reactIs_production_min.Fragment;
  var reactIs_production_min_9 = reactIs_production_min.Lazy;
  var reactIs_production_min_10 = reactIs_production_min.Memo;
  var reactIs_production_min_11 = reactIs_production_min.Portal;
  var reactIs_production_min_12 = reactIs_production_min.Profiler;
  var reactIs_production_min_13 = reactIs_production_min.StrictMode;
  var reactIs_production_min_14 = reactIs_production_min.Suspense;
  var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
  var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
  var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
  var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
  var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
  var reactIs_production_min_20 = reactIs_production_min.isElement;
  var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
  var reactIs_production_min_22 = reactIs_production_min.isFragment;
  var reactIs_production_min_23 = reactIs_production_min.isLazy;
  var reactIs_production_min_24 = reactIs_production_min.isMemo;
  var reactIs_production_min_25 = reactIs_production_min.isPortal;
  var reactIs_production_min_26 = reactIs_production_min.isProfiler;
  var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
  var reactIs_production_min_28 = reactIs_production_min.isSuspense;

  var reactIs_development = createCommonjsModule(function (module, exports) {
  });

  unwrapExports(reactIs_development);
  var reactIs_development_1 = reactIs_development.typeOf;
  var reactIs_development_2 = reactIs_development.AsyncMode;
  var reactIs_development_3 = reactIs_development.ConcurrentMode;
  var reactIs_development_4 = reactIs_development.ContextConsumer;
  var reactIs_development_5 = reactIs_development.ContextProvider;
  var reactIs_development_6 = reactIs_development.Element;
  var reactIs_development_7 = reactIs_development.ForwardRef;
  var reactIs_development_8 = reactIs_development.Fragment;
  var reactIs_development_9 = reactIs_development.Lazy;
  var reactIs_development_10 = reactIs_development.Memo;
  var reactIs_development_11 = reactIs_development.Portal;
  var reactIs_development_12 = reactIs_development.Profiler;
  var reactIs_development_13 = reactIs_development.StrictMode;
  var reactIs_development_14 = reactIs_development.Suspense;
  var reactIs_development_15 = reactIs_development.isValidElementType;
  var reactIs_development_16 = reactIs_development.isAsyncMode;
  var reactIs_development_17 = reactIs_development.isConcurrentMode;
  var reactIs_development_18 = reactIs_development.isContextConsumer;
  var reactIs_development_19 = reactIs_development.isContextProvider;
  var reactIs_development_20 = reactIs_development.isElement;
  var reactIs_development_21 = reactIs_development.isForwardRef;
  var reactIs_development_22 = reactIs_development.isFragment;
  var reactIs_development_23 = reactIs_development.isLazy;
  var reactIs_development_24 = reactIs_development.isMemo;
  var reactIs_development_25 = reactIs_development.isPortal;
  var reactIs_development_26 = reactIs_development.isProfiler;
  var reactIs_development_27 = reactIs_development.isStrictMode;
  var reactIs_development_28 = reactIs_development.isSuspense;

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_production_min;
  }
  });
  var reactIs_1 = reactIs.isValidElementType;
  var reactIs_2 = reactIs.isContextConsumer;
  var reactIs_3 = reactIs.ForwardRef;

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
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
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
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

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });
  var propTypes_1 = propTypes.elementType;

  var ReactReduxContext = React__default.createContext(null);

  // Default to a dummy "batch" implementation that just runs the callback
  function defaultNoopBatch(callback) {
    callback();
  }

  var batch = defaultNoopBatch; // Allow injecting another batching function later

  var setBatch = function setBatch(newBatch) {
    return batch = newBatch;
  }; // Supply a getter just to skip dealing with ESM bindings

  var getBatch = function getBatch() {
    return batch;
  };

  // well as nesting subscriptions of descendant components, so that we can ensure the
  // ancestor components re-render before descendants

  var CLEARED = null;
  var nullListeners = {
    notify: function notify() {}
  };

  function createListenerCollection() {
    var batch = getBatch(); // the current/next pattern is copied from redux's createStore code.
    // TODO: refactor+expose that code to be reusable here?

    var current = [];
    var next = [];
    return {
      clear: function clear() {
        next = CLEARED;
        current = CLEARED;
      },
      notify: function notify() {
        var listeners = current = next;
        batch(function () {
          for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
          }
        });
      },
      get: function get() {
        return next;
      },
      subscribe: function subscribe(listener) {
        var isSubscribed = true;
        if (next === current) next = current.slice();
        next.push(listener);
        return function unsubscribe() {
          if (!isSubscribed || current === CLEARED) return;
          isSubscribed = false;
          if (next === current) next = current.slice();
          next.splice(next.indexOf(listener), 1);
        };
      }
    };
  }

  var Subscription =
  /*#__PURE__*/
  function () {
    function Subscription(store, parentSub) {
      this.store = store;
      this.parentSub = parentSub;
      this.unsubscribe = null;
      this.listeners = nullListeners;
      this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
    }

    var _proto = Subscription.prototype;

    _proto.addNestedSub = function addNestedSub(listener) {
      this.trySubscribe();
      return this.listeners.subscribe(listener);
    };

    _proto.notifyNestedSubs = function notifyNestedSubs() {
      this.listeners.notify();
    };

    _proto.handleChangeWrapper = function handleChangeWrapper() {
      if (this.onStateChange) {
        this.onStateChange();
      }
    };

    _proto.isSubscribed = function isSubscribed() {
      return Boolean(this.unsubscribe);
    };

    _proto.trySubscribe = function trySubscribe() {
      if (!this.unsubscribe) {
        this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
        this.listeners = createListenerCollection();
      }
    };

    _proto.tryUnsubscribe = function tryUnsubscribe() {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
        this.listeners.clear();
        this.listeners = nullListeners;
      }
    };

    return Subscription;
  }();

  function Provider(_ref) {
    var store = _ref.store,
        context = _ref.context,
        children = _ref.children;
    var contextValue = React.useMemo(function () {
      var subscription = new Subscription(store);
      subscription.onStateChange = subscription.notifyNestedSubs;
      return {
        store: store,
        subscription: subscription
      };
    }, [store]);
    var previousState = React.useMemo(function () {
      return store.getState();
    }, [store]);
    React.useEffect(function () {
      var subscription = contextValue.subscription;
      subscription.trySubscribe();

      if (previousState !== store.getState()) {
        subscription.notifyNestedSubs();
      }

      return function () {
        subscription.tryUnsubscribe();
        subscription.onStateChange = null;
      };
    }, [contextValue, previousState]);
    var Context = context || ReactReduxContext;
    return React__default.createElement(Context.Provider, {
      value: contextValue
    }, children);
  }

  Provider.propTypes = {
    store: propTypes.shape({
      subscribe: propTypes.func.isRequired,
      dispatch: propTypes.func.isRequired,
      getState: propTypes.func.isRequired
    }),
    context: propTypes.object,
    children: propTypes.any
  };

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

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

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  };
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };
  var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

  function getStatics(component) {
    if (reactIs.isMemo(component)) {
      return MEMO_STATICS;
    }

    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
  }

  var defineProperty = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = Object.prototype;
  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
      // don't hoist over string (html) components
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent);

        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
      }

      var keys = getOwnPropertyNames(sourceComponent);

      if (getOwnPropertySymbols$1) {
        keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
      }

      var targetStatics = getStatics(targetComponent);
      var sourceStatics = getStatics(sourceComponent);

      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];

        if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
          var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

          try {
            // Avoid failures from read-only properties
            defineProperty(targetComponent, key, descriptor);
          } catch (e) {}
        }
      }
    }

    return targetComponent;
  }

  var hoistNonReactStatics_cjs = hoistNonReactStatics;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var invariant = function(condition, format, a, b, c, d, e, f) {

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error(
          'Minified exception occurred; use the non-minified dev environment ' +
          'for the full error message and additional helpful warnings.'
        );
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(
          format.replace(/%s/g, function() { return args[argIndex++]; })
        );
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  };

  var invariant_1 = invariant;

  // To get around it, we can conditionally useEffect on the server (no-op) and
  // useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
  // subscription callback always has the selector from the latest render commit
  // available, otherwise a store update may happen between render and the effect,
  // which may cause missed updates; we also must ensure the store subscription
  // is created synchronously, otherwise a store update may occur before the
  // subscription is created and an inconsistent state may be observed

  var isHopefullyDomEnvironment = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
  var useIsomorphicLayoutEffect = isHopefullyDomEnvironment ? React.useLayoutEffect : React.useEffect;

  var EMPTY_ARRAY = [];
  var NO_SUBSCRIPTION_ARRAY = [null, null];

  function storeStateUpdatesReducer(state, action) {
    var updateCount = state[1];
    return [action.payload, updateCount + 1];
  }

  var initStateUpdates = function initStateUpdates() {
    return [null, 0];
  };

  function connectAdvanced(
  /*
    selectorFactory is a func that is responsible for returning the selector function used to
    compute new props from state, props, and dispatch. For example:
        export default connectAdvanced((dispatch, options) => (state, props) => ({
        thing: state.things[props.thingId],
        saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
      }))(YourComponent)
      Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
    outside of their selector as an optimization. Options passed to connectAdvanced are passed to
    the selectorFactory, along with displayName and WrappedComponent, as the second argument.
      Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
    props. Do not use connectAdvanced directly without memoizing results between calls to your
    selector, otherwise the Connect component will re-render on every state or props change.
  */
  selectorFactory, // options object:
  _ref) {
    if (_ref === void 0) {
      _ref = {};
    }

    var _ref2 = _ref,
        _ref2$getDisplayName = _ref2.getDisplayName,
        getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
      return "ConnectAdvanced(" + name + ")";
    } : _ref2$getDisplayName,
        _ref2$methodName = _ref2.methodName,
        methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
        _ref2$renderCountProp = _ref2.renderCountProp,
        renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
        _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
        shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
        _ref2$storeKey = _ref2.storeKey,
        storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
        _ref2$withRef = _ref2.withRef,
        withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
        _ref2$forwardRef = _ref2.forwardRef,
        forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
        _ref2$context = _ref2.context,
        context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context,
        connectOptions = _objectWithoutPropertiesLoose(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

    invariant_1(renderCountProp === undefined, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    invariant_1(!withRef, 'withRef is removed. To access the wrapped instance, use a ref on the connected component');
    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';
    invariant_1(storeKey === 'store', 'storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    var Context = context;
    return function wrapWithConnect(WrappedComponent) {

      var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      var displayName = getDisplayName(wrappedComponentName);

      var selectorFactoryOptions = _extends({}, connectOptions, {
        getDisplayName: getDisplayName,
        methodName: methodName,
        renderCountProp: renderCountProp,
        shouldHandleStateChanges: shouldHandleStateChanges,
        storeKey: storeKey,
        displayName: displayName,
        wrappedComponentName: wrappedComponentName,
        WrappedComponent: WrappedComponent
      });

      var pure = connectOptions.pure;

      function createChildSelector(store) {
        return selectorFactory(store.dispatch, selectorFactoryOptions);
      } // If we aren't running in "pure" mode, we don't want to memoize values.
      // To avoid conditionally calling hooks, we fall back to a tiny wrapper
      // that just executes the given callback immediately.


      var usePureOnlyMemo = pure ? React.useMemo : function (callback) {
        return callback();
      };

      function ConnectFunction(props) {
        var _useMemo = React.useMemo(function () {
          // Distinguish between actual "data" props that were passed to the wrapper component,
          // and values needed to control behavior (forwarded refs, alternate context instances).
          // To maintain the wrapperProps object reference, memoize this destructuring.
          var forwardedRef = props.forwardedRef,
              wrapperProps = _objectWithoutPropertiesLoose(props, ["forwardedRef"]);

          return [props.context, forwardedRef, wrapperProps];
        }, [props]),
            propsContext = _useMemo[0],
            forwardedRef = _useMemo[1],
            wrapperProps = _useMemo[2];

        var ContextToUse = React.useMemo(function () {
          // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
          // Memoize the check that determines which context instance we should use.
          return propsContext && propsContext.Consumer && reactIs_2(React__default.createElement(propsContext.Consumer, null)) ? propsContext : Context;
        }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

        var contextValue = React.useContext(ContextToUse); // The store _must_ exist as either a prop or in context.
        // We'll check to see if it _looks_ like a Redux store first.
        // This allows us to pass through a `store` prop that is just a plain value.

        var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
        var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
        invariant_1(didStoreComeFromProps || didStoreComeFromContext, "Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options.")); // Based on the previous check, one of these must be true

        var store = didStoreComeFromProps ? props.store : contextValue.store;
        var childPropsSelector = React.useMemo(function () {
          // The child props selector needs the store reference as an input.
          // Re-create this selector whenever the store changes.
          return createChildSelector(store);
        }, [store]);

        var _useMemo2 = React.useMemo(function () {
          if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
          // connected to the store via props shouldn't use subscription from context, or vice versa.

          var subscription = new Subscription(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
          // the middle of the notification loop, where `subscription` will then be null. This can
          // probably be avoided if Subscription's listeners logic is changed to not call listeners
          // that have been unsubscribed in the  middle of the notification loop.

          var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
          return [subscription, notifyNestedSubs];
        }, [store, didStoreComeFromProps, contextValue]),
            subscription = _useMemo2[0],
            notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
        // and memoize that value to avoid unnecessary context updates.


        var overriddenContextValue = React.useMemo(function () {
          if (didStoreComeFromProps) {
            // This component is directly subscribed to a store from props.
            // We don't want descendants reading from this store - pass down whatever
            // the existing context value is from the nearest connected ancestor.
            return contextValue;
          } // Otherwise, put this component's subscription instance into context, so that
          // connected descendants won't update until after this component is done


          return _extends({}, contextValue, {
            subscription: subscription
          });
        }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
        // causes a change to the calculated child component props (or we caught an error in mapState)

        var _useReducer = React.useReducer(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
            _useReducer$ = _useReducer[0],
            previousStateUpdateResult = _useReducer$[0],
            forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


        if (previousStateUpdateResult && previousStateUpdateResult.error) {
          throw previousStateUpdateResult.error;
        } // Set up refs to coordinate values between the subscription effect and the render logic


        var lastChildProps = React.useRef();
        var lastWrapperProps = React.useRef(wrapperProps);
        var childPropsFromStoreUpdate = React.useRef();
        var renderIsScheduled = React.useRef(false);
        var actualChildProps = usePureOnlyMemo(function () {
          // Tricky logic here:
          // - This render may have been triggered by a Redux store update that produced new child props
          // - However, we may have gotten new wrapper props after that
          // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
          // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
          // So, we'll use the child props from store update only if the wrapper props are the same as last time.
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          } // TODO We're reading the store directly in render() here. Bad idea?
          // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
          // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
          // to determine what the child props should be.


          return childPropsSelector(store.getState(), wrapperProps);
        }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
        // about useLayoutEffect in SSR, so we try to detect environment and fall back to
        // just useEffect instead to avoid the warning, since neither will run anyway.

        useIsomorphicLayoutEffect(function () {
          // We want to capture the wrapper props and child props we used for later comparisons
          lastWrapperProps.current = wrapperProps;
          lastChildProps.current = actualChildProps;
          renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

          if (childPropsFromStoreUpdate.current) {
            childPropsFromStoreUpdate.current = null;
            notifyNestedSubs();
          }
        }); // Our re-subscribe logic only runs when the store/subscription setup changes

        useIsomorphicLayoutEffect(function () {
          // If we're not subscribed to the store, nothing to do here
          if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

          var didUnsubscribe = false;
          var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

          var checkForUpdates = function checkForUpdates() {
            if (didUnsubscribe) {
              // Don't run stale listeners.
              // Redux doesn't guarantee unsubscriptions happen until next dispatch.
              return;
            }

            var latestStoreState = store.getState();
            var newChildProps, error;

            try {
              // Actually run the selector with the most recent store state and wrapper props
              // to determine what the child props should be
              newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
            } catch (e) {
              error = e;
              lastThrownError = e;
            }

            if (!error) {
              lastThrownError = null;
            } // If the child props haven't changed, nothing to do here - cascade the subscription update


            if (newChildProps === lastChildProps.current) {
              if (!renderIsScheduled.current) {
                notifyNestedSubs();
              }
            } else {
              // Save references to the new child props.  Note that we track the "child props from store update"
              // as a ref instead of a useState/useReducer because we need a way to determine if that value has
              // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
              // forcing another re-render, which we don't want.
              lastChildProps.current = newChildProps;
              childPropsFromStoreUpdate.current = newChildProps;
              renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

              forceComponentUpdateDispatch({
                type: 'STORE_UPDATED',
                payload: {
                  error: error
                }
              });
            }
          }; // Actually subscribe to the nearest connected ancestor (or store)


          subscription.onStateChange = checkForUpdates;
          subscription.trySubscribe(); // Pull data from the store after first render in case the store has
          // changed since we began.

          checkForUpdates();

          var unsubscribeWrapper = function unsubscribeWrapper() {
            didUnsubscribe = true;
            subscription.tryUnsubscribe();
            subscription.onStateChange = null;

            if (lastThrownError) {
              // It's possible that we caught an error due to a bad mapState function, but the
              // parent re-rendered without this component and we're about to unmount.
              // This shouldn't happen as long as we do top-down subscriptions correctly, but
              // if we ever do those wrong, this throw will surface the error in our tests.
              // In that case, throw the error from here so it doesn't get lost.
              throw lastThrownError;
            }
          };

          return unsubscribeWrapper;
        }, [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
        // We memoize the elements for the rendered child component as an optimization.

        var renderedWrappedComponent = React.useMemo(function () {
          return React__default.createElement(WrappedComponent, _extends({}, actualChildProps, {
            ref: forwardedRef
          }));
        }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
        // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

        var renderedChild = React.useMemo(function () {
          if (shouldHandleStateChanges) {
            // If this component is subscribed to store updates, we need to pass its own
            // subscription instance down to our descendants. That means rendering the same
            // Context instance, and putting a different value into the context.
            return React__default.createElement(ContextToUse.Provider, {
              value: overriddenContextValue
            }, renderedWrappedComponent);
          }

          return renderedWrappedComponent;
        }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
        return renderedChild;
      } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


      var Connect = pure ? React__default.memo(ConnectFunction) : ConnectFunction;
      Connect.WrappedComponent = WrappedComponent;
      Connect.displayName = displayName;

      if (forwardRef) {
        var forwarded = React__default.forwardRef(function forwardConnectRef(props, ref) {
          return React__default.createElement(Connect, _extends({}, props, {
            forwardedRef: ref
          }));
        });
        forwarded.displayName = displayName;
        forwarded.WrappedComponent = WrappedComponent;
        return hoistNonReactStatics_cjs(forwarded, WrappedComponent);
      }

      return hoistNonReactStatics_cjs(Connect, WrappedComponent);
    };
  }

  var hasOwn = Object.prototype.hasOwnProperty;

  function is(x, y) {
    if (x === y) {
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }

  function shallowEqual(objA, objB) {
    if (is(objA, objB)) return true;

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
      return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;

    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }

    return true;
  }

  function wrapMapToPropsConstant(getConstant) {
    return function initConstantSelector(dispatch, options) {
      var constant = getConstant(dispatch, options);

      function constantSelector() {
        return constant;
      }

      constantSelector.dependsOnOwnProps = false;
      return constantSelector;
    };
  } // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
  // to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
  // whether mapToProps needs to be invoked when props have changed.
  //
  // A length of one signals that mapToProps does not depend on props from the parent component.
  // A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
  // therefore not reporting its length accurately..

  function getDependsOnOwnProps(mapToProps) {
    return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
  } // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
  // this function wraps mapToProps in a proxy function which does several things:
  //
  //  * Detects whether the mapToProps function being called depends on props, which
  //    is used by selectorFactory to decide if it should reinvoke on props changes.
  //
  //  * On first call, handles mapToProps if returns another function, and treats that
  //    new function as the true mapToProps for subsequent calls.
  //
  //  * On first call, verifies the first result is a plain object, in order to warn
  //    the developer that their mapToProps function is not returning a valid result.
  //

  function wrapMapToPropsFunc(mapToProps, methodName) {
    return function initProxySelector(dispatch, _ref) {
      var displayName = _ref.displayName;

      var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
        return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
      }; // allow detectFactoryAndVerify to get ownProps


      proxy.dependsOnOwnProps = true;

      proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
        proxy.mapToProps = mapToProps;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
        var props = proxy(stateOrDispatch, ownProps);

        if (typeof props === 'function') {
          proxy.mapToProps = props;
          proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
          props = proxy(stateOrDispatch, ownProps);
        }
        return props;
      };

      return proxy;
    };
  }

  function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
    return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps) : undefined;
  }
  function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
    return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
      return {
        dispatch: dispatch
      };
    }) : undefined;
  }
  function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
    return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
      return redux.bindActionCreators(mapDispatchToProps, dispatch);
    }) : undefined;
  }
  var defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

  function whenMapStateToPropsIsFunction(mapStateToProps) {
    return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps) : undefined;
  }
  function whenMapStateToPropsIsMissing(mapStateToProps) {
    return !mapStateToProps ? wrapMapToPropsConstant(function () {
      return {};
    }) : undefined;
  }
  var defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

  function defaultMergeProps(stateProps, dispatchProps, ownProps) {
    return _extends({}, ownProps, {}, stateProps, {}, dispatchProps);
  }
  function wrapMergePropsFunc(mergeProps) {
    return function initMergePropsProxy(dispatch, _ref) {
      var displayName = _ref.displayName,
          pure = _ref.pure,
          areMergedPropsEqual = _ref.areMergedPropsEqual;
      var hasRunOnce = false;
      var mergedProps;
      return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
        var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

        if (hasRunOnce) {
          if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
        } else {
          hasRunOnce = true;
          mergedProps = nextMergedProps;
        }

        return mergedProps;
      };
    };
  }
  function whenMergePropsIsFunction(mergeProps) {
    return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
  }
  function whenMergePropsIsOmitted(mergeProps) {
    return !mergeProps ? function () {
      return defaultMergeProps;
    } : undefined;
  }
  var defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

  function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
    return function impureFinalPropsSelector(state, ownProps) {
      return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
    };
  }
  function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
    var areStatesEqual = _ref.areStatesEqual,
        areOwnPropsEqual = _ref.areOwnPropsEqual,
        areStatePropsEqual = _ref.areStatePropsEqual;
    var hasRunAtLeastOnce = false;
    var state;
    var ownProps;
    var stateProps;
    var dispatchProps;
    var mergedProps;

    function handleFirstCall(firstState, firstOwnProps) {
      state = firstState;
      ownProps = firstOwnProps;
      stateProps = mapStateToProps(state, ownProps);
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      hasRunAtLeastOnce = true;
      return mergedProps;
    }

    function handleNewPropsAndNewState() {
      stateProps = mapStateToProps(state, ownProps);
      if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      return mergedProps;
    }

    function handleNewProps() {
      if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
      if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      return mergedProps;
    }

    function handleNewState() {
      var nextStateProps = mapStateToProps(state, ownProps);
      var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
      stateProps = nextStateProps;
      if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      return mergedProps;
    }

    function handleSubsequentCalls(nextState, nextOwnProps) {
      var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
      var stateChanged = !areStatesEqual(nextState, state);
      state = nextState;
      ownProps = nextOwnProps;
      if (propsChanged && stateChanged) return handleNewPropsAndNewState();
      if (propsChanged) return handleNewProps();
      if (stateChanged) return handleNewState();
      return mergedProps;
    }

    return function pureFinalPropsSelector(nextState, nextOwnProps) {
      return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
    };
  } // TODO: Add more comments
  // If pure is true, the selector returned by selectorFactory will memoize its results,
  // allowing connectAdvanced's shouldComponentUpdate to return false if final
  // props have not changed. If false, the selector will always return a new
  // object and shouldComponentUpdate will always return true.

  function finalPropsSelectorFactory(dispatch, _ref2) {
    var initMapStateToProps = _ref2.initMapStateToProps,
        initMapDispatchToProps = _ref2.initMapDispatchToProps,
        initMergeProps = _ref2.initMergeProps,
        options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

    var mapStateToProps = initMapStateToProps(dispatch, options);
    var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
    var mergeProps = initMergeProps(dispatch, options);

    var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
    return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
  }

  /*
    connect is a facade over connectAdvanced. It turns its args into a compatible
    selectorFactory, which has the signature:

      (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
    
    connect passes its args to connectAdvanced as options, which will in turn pass them to
    selectorFactory each time a Connect component instance is instantiated or hot reloaded.

    selectorFactory returns a final props selector from its mapStateToProps,
    mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
    mergePropsFactories, and pure args.

    The resulting final props selector is called by the Connect component instance whenever
    it receives new props or store state.
   */

  function match(arg, factories, name) {
    for (var i = factories.length - 1; i >= 0; i--) {
      var result = factories[i](arg);
      if (result) return result;
    }

    return function (dispatch, options) {
      throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
    };
  }

  function strictEqual(a, b) {
    return a === b;
  } // createConnect with default args builds the 'official' connect behavior. Calling it with
  // different options opens up some testing and extensibility scenarios


  function createConnect(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$connectHOC = _ref.connectHOC,
        connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
        _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
        mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF,
        _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
        mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro,
        _ref$mergePropsFactor = _ref.mergePropsFactories,
        mergePropsFactories = _ref$mergePropsFactor === void 0 ? defaultMergePropsFactories : _ref$mergePropsFactor,
        _ref$selectorFactory = _ref.selectorFactory,
        selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

    return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
      if (_ref2 === void 0) {
        _ref2 = {};
      }

      var _ref3 = _ref2,
          _ref3$pure = _ref3.pure,
          pure = _ref3$pure === void 0 ? true : _ref3$pure,
          _ref3$areStatesEqual = _ref3.areStatesEqual,
          areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
          _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
          areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
          _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
          areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
          _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
          areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
          extraOptions = _objectWithoutPropertiesLoose(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

      var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
      var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
      var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
      return connectHOC(selectorFactory, _extends({
        // used in error messages
        methodName: 'connect',
        // used to compute Connect's displayName from the wrapped component's displayName.
        getDisplayName: function getDisplayName(name) {
          return "Connect(" + name + ")";
        },
        // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
        shouldHandleStateChanges: Boolean(mapStateToProps),
        // passed through to selectorFactory
        initMapStateToProps: initMapStateToProps,
        initMapDispatchToProps: initMapDispatchToProps,
        initMergeProps: initMergeProps,
        pure: pure,
        areStatesEqual: areStatesEqual,
        areOwnPropsEqual: areOwnPropsEqual,
        areStatePropsEqual: areStatePropsEqual,
        areMergedPropsEqual: areMergedPropsEqual
      }, extraOptions));
    };
  }
  createConnect();

  /**
   * A hook to access the value of the `ReactReduxContext`. This is a low-level
   * hook that you should usually not need to call directly.
   *
   * @returns {any} the value of the `ReactReduxContext`
   *
   * @example
   *
   * import React from 'react'
   * import { useReduxContext } from 'react-redux'
   *
   * export const CounterComponent = ({ value }) => {
   *   const { store } = useReduxContext()
   *   return <div>{store.getState()}</div>
   * }
   */

  function useReduxContext() {
    var contextValue = React.useContext(ReactReduxContext);
    invariant_1(contextValue, 'could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
    return contextValue;
  }

  /**
   * Hook factory, which creates a `useStore` hook bound to a given context.
   *
   * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
   * @returns {Function} A `useStore` hook bound to the specified context.
   */

  function createStoreHook(context) {
    if (context === void 0) {
      context = ReactReduxContext;
    }

    var useReduxContext$1 = context === ReactReduxContext ? useReduxContext : function () {
      return React.useContext(context);
    };
    return function useStore() {
      var _useReduxContext = useReduxContext$1(),
          store = _useReduxContext.store;

      return store;
    };
  }
  /**
   * A hook to access the redux store.
   *
   * @returns {any} the redux store
   *
   * @example
   *
   * import React from 'react'
   * import { useStore } from 'react-redux'
   *
   * export const ExampleComponent = () => {
   *   const store = useStore()
   *   return <div>{store.getState()}</div>
   * }
   */

  var useStore = createStoreHook();

  /**
   * Hook factory, which creates a `useDispatch` hook bound to a given context.
   *
   * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
   * @returns {Function} A `useDispatch` hook bound to the specified context.
   */

  function createDispatchHook(context) {
    if (context === void 0) {
      context = ReactReduxContext;
    }

    var useStore$1 = context === ReactReduxContext ? useStore : createStoreHook(context);
    return function useDispatch() {
      var store = useStore$1();
      return store.dispatch;
    };
  }
  /**
   * A hook to access the redux `dispatch` function.
   *
   * @returns {any|function} redux store's `dispatch` function
   *
   * @example
   *
   * import React, { useCallback } from 'react'
   * import { useDispatch } from 'react-redux'
   *
   * export const CounterComponent = ({ value }) => {
   *   const dispatch = useDispatch()
   *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
   *   return (
   *     <div>
   *       <span>{value}</span>
   *       <button onClick={increaseCounter}>Increase counter</button>
   *     </div>
   *   )
   * }
   */

  var useDispatch = createDispatchHook();

  var refEquality = function refEquality(a, b) {
    return a === b;
  };

  function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
    var _useReducer = React.useReducer(function (s) {
      return s + 1;
    }, 0),
        forceRender = _useReducer[1];

    var subscription = React.useMemo(function () {
      return new Subscription(store, contextSub);
    }, [store, contextSub]);
    var latestSubscriptionCallbackError = React.useRef();
    var latestSelector = React.useRef();
    var latestSelectedState = React.useRef();
    var selectedState;

    try {
      if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
        selectedState = selector(store.getState());
      } else {
        selectedState = latestSelectedState.current;
      }
    } catch (err) {
      var errorMessage = "An error occurred while selecting the store state: " + err.message + ".";

      if (latestSubscriptionCallbackError.current) {
        errorMessage += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\nOriginal stack trace:";
      }

      throw new Error(errorMessage);
    }

    useIsomorphicLayoutEffect(function () {
      latestSelector.current = selector;
      latestSelectedState.current = selectedState;
      latestSubscriptionCallbackError.current = undefined;
    });
    useIsomorphicLayoutEffect(function () {
      function checkForUpdates() {
        try {
          var newSelectedState = latestSelector.current(store.getState());

          if (equalityFn(newSelectedState, latestSelectedState.current)) {
            return;
          }

          latestSelectedState.current = newSelectedState;
        } catch (err) {
          // we ignore all errors here, since when the component
          // is re-rendered, the selectors are called again, and
          // will throw again, if neither props nor store state
          // changed
          latestSubscriptionCallbackError.current = err;
        }

        forceRender({});
      }

      subscription.onStateChange = checkForUpdates;
      subscription.trySubscribe();
      checkForUpdates();
      return function () {
        return subscription.tryUnsubscribe();
      };
    }, [store, subscription]);
    return selectedState;
  }
  /**
   * Hook factory, which creates a `useSelector` hook bound to a given context.
   *
   * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
   * @returns {Function} A `useSelector` hook bound to the specified context.
   */


  function createSelectorHook(context) {
    if (context === void 0) {
      context = ReactReduxContext;
    }

    var useReduxContext$1 = context === ReactReduxContext ? useReduxContext : function () {
      return React.useContext(context);
    };
    return function useSelector(selector, equalityFn) {
      if (equalityFn === void 0) {
        equalityFn = refEquality;
      }

      invariant_1(selector, "You must pass a selector to useSelectors");

      var _useReduxContext = useReduxContext$1(),
          store = _useReduxContext.store,
          contextSub = _useReduxContext.subscription;

      return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
    };
  }
  /**
   * A hook to access the redux store's state. This hook takes a selector function
   * as an argument. The selector is called with the store state.
   *
   * This hook takes an optional equality comparison function as the second parameter
   * that allows you to customize the way the selected state is compared to determine
   * whether the component needs to be re-rendered.
   *
   * @param {Function} selector the selector function
   * @param {Function=} equalityFn the function that will be used to determine equality
   *
   * @returns {any} the selected state
   *
   * @example
   *
   * import React from 'react'
   * import { useSelector } from 'react-redux'
   *
   * export const CounterComponent = () => {
   *   const counter = useSelector(state => state.counter)
   *   return <div>{counter}</div>
   * }
   */

  var useSelector = createSelectorHook();

  setBatch(ReactDOM.unstable_batchedUpdates);

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
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

  function toVal(mix) {
  	var k, y, str='';
  	if (mix) {
  		if (typeof mix === 'object') {
  			if (!!mix.push) {
  				for (k=0; k < mix.length; k++) {
  					if (mix[k] && (y = toVal(mix[k]))) {
  						str && (str += ' ');
  						str += y;
  					}
  				}
  			} else {
  				for (k in mix) {
  					if (mix[k] && (y = toVal(k))) {
  						str && (str += ' ');
  						str += y;
  					}
  				}
  			}
  		} else if (typeof mix !== 'boolean' && !mix.call) {
  			str && (str += ' ');
  			str += mix;
  		}
  	}
  	return str;
  }

  function clsx () {
  	var i=0, x, str='';
  	while (i < arguments.length) {
  		if (x = toVal(arguments[i++])) {
  			str && (str += ' ');
  			str += x;
  		}
  	}
  	return str;
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function isObject(item) {
    return item && _typeof(item) === 'object' && !Array.isArray(item);
  }
  function deepmerge(target, source) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      clone: true
    };
    var output = options.clone ? _extends({}, target) : target;

    if (isObject(target) && isObject(source)) {
      Object.keys(source).forEach(function (key) {
        // Avoid prototype pollution
        if (key === '__proto__') {
          return;
        }

        if (isObject(source[key]) && key in target) {
          output[key] = deepmerge(target[key], source[key], options);
        } else {
          output[key] = source[key];
        }
      });
    }

    return output;
  }

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

  /**
   * @ignore - internal component.
   */

  var FormControlContext = React__default.createContext();

  function useFormControl() {
    return React__default.useContext(FormControlContext);
  }

  var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

  /**
   * This is the list of the style rule name we use as drop in replacement for the built-in
   * pseudo classes (:checked, :disabled, :focused, etc.).
   *
   * Why do they exist in the first place?
   * These classes are used at a specificity of 2.
   * It allows them to override previously definied styles as well as
   * being untouched by simple user overrides.
   */

  var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
  // When new generator function is created, rule counter is reset.
  // We need to reset the rule counter for SSR for each request.
  //
  // It's inspired by
  // https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

  function createGenerateClassName() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _options$disableGloba = options.disableGlobal,
        disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba,
        _options$productionPr = options.productionPrefix,
        productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
        _options$seed = options.seed,
        seed = _options$seed === void 0 ? '' : _options$seed;
    var seedPrefix = seed === '' ? '' : "".concat(seed, "-");
    var ruleCounter = 0;
    return function (rule, styleSheet) {
      ruleCounter += 1;

      var name = styleSheet.options.name; // Is a global static MUI style?

      if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
        // We can use a shorthand class name, we never use the keys to style the components.
        if (pseudoClasses.indexOf(rule.key) !== -1) {
          return "Mui-".concat(rule.key);
        }

        var prefix = "".concat(seedPrefix).concat(name, "-").concat(rule.key);

        if (!styleSheet.options.theme[nested] || seed !== '') {
          return prefix;
        }

        return "".concat(prefix, "-").concat(ruleCounter);
      }

      {
        return "".concat(seedPrefix).concat(productionPrefix).concat(ruleCounter);
      }
    };
  }

  /* eslint-disable no-restricted-syntax */
  function getThemeProps(params) {
    var theme = params.theme,
        name = params.name,
        props = params.props;

    if (!theme || !theme.props || !theme.props[name]) {
      return props;
    } // Resolve default props, code borrow from React source.
    // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


    var defaultProps = theme.props[name];
    var propName;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }

    return props;
  }

  var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof$1(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof$1(document)) === 'object' && document.nodeType === 9;

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var plainObjectConstrurctor = {}.constructor;
  function cloneStyle(style) {
    if (style == null || typeof style !== 'object') return style;
    if (Array.isArray(style)) return style.map(cloneStyle);
    if (style.constructor !== plainObjectConstrurctor) return style;
    var newStyle = {};

    for (var name in style) {
      newStyle[name] = cloneStyle(style[name]);
    }

    return newStyle;
  }

  /**
   * Create a rule instance.
   */

  function createRule(name, decl, options) {
    if (name === void 0) {
      name = 'unnamed';
    }

    var jss = options.jss;
    var declCopy = cloneStyle(decl);
    var rule = jss.plugins.onCreateRule(name, declCopy, options);
    if (rule) return rule; // It is an at-rule and it has no instance.

    if (name[0] === '@') ;

    return null;
  }

  var join = function join(value, by) {
    var result = '';

    for (var i = 0; i < value.length; i++) {
      // Remove !important from the value, it will be readded later.
      if (value[i] === '!important') break;
      if (result) result += by;
      result += value[i];
    }

    return result;
  };
  /**
   * Converts array values to string.
   *
   * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
   * `border: ['1px', '2px']` > `border: 1px, 2px;`
   * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
   * `color: ['red', !important]` > `color: red !important;`
   */


  function toCssValue(value, ignoreImportant) {
    if (ignoreImportant === void 0) {
      ignoreImportant = false;
    }

    if (!Array.isArray(value)) return value;
    var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

    if (Array.isArray(value[0])) {
      for (var i = 0; i < value.length; i++) {
        if (value[i] === '!important') break;
        if (cssValue) cssValue += ', ';
        cssValue += join(value[i], ' ');
      }
    } else cssValue = join(value, ', '); // Add !important, because it was ignored.


    if (!ignoreImportant && value[value.length - 1] === '!important') {
      cssValue += ' !important';
    }

    return cssValue;
  }

  /**
   * Indent a string.
   * http://jsperf.com/array-join-vs-for
   */
  function indentStr(str, indent) {
    var result = '';

    for (var index = 0; index < indent; index++) {
      result += '  ';
    }

    return result + str;
  }
  /**
   * Converts a Rule to CSS string.
   */


  function toCss(selector, style, options) {
    if (options === void 0) {
      options = {};
    }

    var result = '';
    if (!style) return result;
    var _options = options,
        _options$indent = _options.indent,
        indent = _options$indent === void 0 ? 0 : _options$indent;
    var fallbacks = style.fallbacks;
    if (selector) indent++; // Apply fallbacks first.

    if (fallbacks) {
      // Array syntax {fallbacks: [{prop: value}]}
      if (Array.isArray(fallbacks)) {
        for (var index = 0; index < fallbacks.length; index++) {
          var fallback = fallbacks[index];

          for (var prop in fallback) {
            var value = fallback[prop];

            if (value != null) {
              if (result) result += '\n';
              result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
            }
          }
        }
      } else {
        // Object syntax {fallbacks: {prop: value}}
        for (var _prop in fallbacks) {
          var _value = fallbacks[_prop];

          if (_value != null) {
            if (result) result += '\n';
            result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
          }
        }
      }
    }

    for (var _prop2 in style) {
      var _value2 = style[_prop2];

      if (_value2 != null && _prop2 !== 'fallbacks') {
        if (result) result += '\n';
        result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
      }
    } // Allow empty style in this case, because properties will be added dynamically.


    if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

    if (!selector) return result;
    indent--;
    if (result) result = "\n" + result + "\n";
    return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
  }

  var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
  var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
  var escape = (function (str) {
    return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
  });

  var BaseStyleRule =
  /*#__PURE__*/
  function () {
    function BaseStyleRule(key, style, options) {
      this.type = 'style';
      this.key = void 0;
      this.isProcessed = false;
      this.style = void 0;
      this.renderer = void 0;
      this.renderable = void 0;
      this.options = void 0;
      var sheet = options.sheet,
          Renderer = options.Renderer;
      this.key = key;
      this.options = options;
      this.style = style;
      if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
    }
    /**
     * Get or set a style property.
     */


    var _proto = BaseStyleRule.prototype;

    _proto.prop = function prop(name, value, options) {
      // It's a getter.
      if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

      var force = options ? options.force : false;
      if (!force && this.style[name] === value) return this;
      var newValue = value;

      if (!options || options.process !== false) {
        newValue = this.options.jss.plugins.onChangeValue(value, name, this);
      }

      var isEmpty = newValue == null || newValue === false;
      var isDefined = name in this.style; // Value is empty and wasn't defined before.

      if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

      var remove = isEmpty && isDefined;
      if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

      if (this.renderable && this.renderer) {
        if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
        return this;
      }

      var sheet = this.options.sheet;

      if (sheet && sheet.attached) ;

      return this;
    };

    return BaseStyleRule;
  }();
  var StyleRule =
  /*#__PURE__*/
  function (_BaseStyleRule) {
    _inheritsLoose(StyleRule, _BaseStyleRule);

    function StyleRule(key, style, options) {
      var _this;

      _this = _BaseStyleRule.call(this, key, style, options) || this;
      _this.selectorText = void 0;
      _this.id = void 0;
      _this.renderable = void 0;
      var selector = options.selector,
          scoped = options.scoped,
          sheet = options.sheet,
          generateId = options.generateId;

      if (selector) {
        _this.selectorText = selector;
      } else if (scoped !== false) {
        _this.id = generateId(_assertThisInitialized$1(_assertThisInitialized$1(_this)), sheet);
        _this.selectorText = "." + escape(_this.id);
      }

      return _this;
    }
    /**
     * Set selector string.
     * Attention: use this with caution. Most browsers didn't implement
     * selectorText setter, so this may result in rerendering of entire Style Sheet.
     */


    var _proto2 = StyleRule.prototype;

    /**
     * Apply rule to an element inline.
     */
    _proto2.applyTo = function applyTo(renderable) {
      var renderer = this.renderer;

      if (renderer) {
        var json = this.toJSON();

        for (var prop in json) {
          renderer.setProperty(renderable, prop, json[prop]);
        }
      }

      return this;
    }
    /**
     * Returns JSON representation of the rule.
     * Fallbacks are not supported.
     * Useful for inline styles.
     */
    ;

    _proto2.toJSON = function toJSON() {
      var json = {};

      for (var prop in this.style) {
        var value = this.style[prop];
        if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
      }

      return json;
    }
    /**
     * Generates a CSS string.
     */
    ;

    _proto2.toString = function toString(options) {
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, {
        allowEmpty: true
      }) : options;
      return toCss(this.selectorText, this.style, opts);
    };

    _createClass$1(StyleRule, [{
      key: "selector",
      set: function set(selector) {
        if (selector === this.selectorText) return;
        this.selectorText = selector;
        var renderer = this.renderer,
            renderable = this.renderable;
        if (!renderable || !renderer) return;
        var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

        if (!hasChanged) {
          renderer.replaceRule(renderable, this);
        }
      }
      /**
       * Get selector string.
       */
      ,
      get: function get() {
        return this.selectorText;
      }
    }]);

    return StyleRule;
  }(BaseStyleRule);
  var pluginStyleRule = {
    onCreateRule: function onCreateRule(name, style, options) {
      if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
        return null;
      }

      return new StyleRule(name, style, options);
    }
  };

  var defaultToStringOptions = {
    indent: 1,
    children: true
  };
  var atRegExp = /@([\w-]+)/;
  /**
   * Conditional rule for @media, @supports
   */

  var ConditionalRule =
  /*#__PURE__*/
  function () {
    function ConditionalRule(key, styles, options) {
      this.type = 'conditional';
      this.at = void 0;
      this.key = void 0;
      this.query = void 0;
      this.rules = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

      this.query = options.name;
      var atMatch = key.match(atRegExp);
      this.at = atMatch ? atMatch[1] : 'unknown';
      this.options = options;
      this.rules = new RuleList(_extends({}, options, {
        parent: this
      }));

      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }

      this.rules.process();
    }
    /**
     * Get a rule.
     */


    var _proto = ConditionalRule.prototype;

    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Create and register rule, run plugins.
     */
    ;

    _proto.addRule = function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      if (!rule) return null;
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Generates a CSS string.
     */
    ;

    _proto.toString = function toString(options) {
      if (options === void 0) {
        options = defaultToStringOptions;
      }

      if (options.indent == null) options.indent = defaultToStringOptions.indent;
      if (options.children == null) options.children = defaultToStringOptions.children;

      if (options.children === false) {
        return this.query + " {}";
      }

      var children = this.rules.toString(options);
      return children ? this.query + " {\n" + children + "\n}" : '';
    };

    return ConditionalRule;
  }();
  var keyRegExp = /@media|@supports\s+/;
  var pluginConditionalRule = {
    onCreateRule: function onCreateRule(key, styles, options) {
      return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
    }
  };

  var defaultToStringOptions$1 = {
    indent: 1,
    children: true
  };
  var nameRegExp = /@keyframes\s+([\w-]+)/;
  /**
   * Rule for @keyframes
   */

  var KeyframesRule =
  /*#__PURE__*/
  function () {
    function KeyframesRule(key, frames, options) {
      this.type = 'keyframes';
      this.at = '@keyframes';
      this.key = void 0;
      this.name = void 0;
      this.id = void 0;
      this.rules = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      var nameMatch = key.match(nameRegExp);

      if (nameMatch && nameMatch[1]) {
        this.name = nameMatch[1];
      } else {
        this.name = 'noname';
      }

      this.key = this.type + "-" + this.name;
      this.options = options;
      var scoped = options.scoped,
          sheet = options.sheet,
          generateId = options.generateId;
      this.id = scoped === false ? this.name : escape(generateId(this, sheet));
      this.rules = new RuleList(_extends({}, options, {
        parent: this
      }));

      for (var name in frames) {
        this.rules.add(name, frames[name], _extends({}, options, {
          parent: this
        }));
      }

      this.rules.process();
    }
    /**
     * Generates a CSS string.
     */


    var _proto = KeyframesRule.prototype;

    _proto.toString = function toString(options) {
      if (options === void 0) {
        options = defaultToStringOptions$1;
      }

      if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
      if (options.children == null) options.children = defaultToStringOptions$1.children;

      if (options.children === false) {
        return this.at + " " + this.id + " {}";
      }

      var children = this.rules.toString(options);
      if (children) children = "\n" + children + "\n";
      return this.at + " " + this.id + " {" + children + "}";
    };

    return KeyframesRule;
  }();
  var keyRegExp$1 = /@keyframes\s+/;
  var refRegExp = /\$([\w-]+)/g;

  var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
    if (typeof val === 'string') {
      return val.replace(refRegExp, function (match, name) {
        if (name in keyframes) {
          return keyframes[name];
        }
        return match;
      });
    }

    return val;
  };
  /**
   * Replace the reference for a animation name.
   */


  var replaceRef = function replaceRef(style, prop, keyframes) {
    var value = style[prop];
    var refKeyframe = findReferencedKeyframe(value, keyframes);

    if (refKeyframe !== value) {
      style[prop] = refKeyframe;
    }
  };

  var plugin = {
    onCreateRule: function onCreateRule(key, frames, options) {
      return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
    },
    // Animation name ref replacer.
    onProcessStyle: function onProcessStyle(style, rule, sheet) {
      if (rule.type !== 'style' || !sheet) return style;
      if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
      if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
      return style;
    },
    onChangeValue: function onChangeValue(val, prop, rule) {
      var sheet = rule.options.sheet;

      if (!sheet) {
        return val;
      }

      switch (prop) {
        case 'animation':
          return findReferencedKeyframe(val, sheet.keyframes);

        case 'animation-name':
          return findReferencedKeyframe(val, sheet.keyframes);

        default:
          return val;
      }
    }
  };

  var KeyframeRule =
  /*#__PURE__*/
  function (_BaseStyleRule) {
    _inheritsLoose(KeyframeRule, _BaseStyleRule);

    function KeyframeRule() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
      _this.renderable = void 0;
      return _this;
    }

    var _proto = KeyframeRule.prototype;

    /**
     * Generates a CSS string.
     */
    _proto.toString = function toString(options) {
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, {
        allowEmpty: true
      }) : options;
      return toCss(this.key, this.style, opts);
    };

    return KeyframeRule;
  }(BaseStyleRule);
  var pluginKeyframeRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      if (options.parent && options.parent.type === 'keyframes') {
        return new KeyframeRule(key, style, options);
      }

      return null;
    }
  };

  var FontFaceRule =
  /*#__PURE__*/
  function () {
    function FontFaceRule(key, style, options) {
      this.type = 'font-face';
      this.at = '@font-face';
      this.key = void 0;
      this.style = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      this.style = style;
      this.options = options;
    }
    /**
     * Generates a CSS string.
     */


    var _proto = FontFaceRule.prototype;

    _proto.toString = function toString(options) {
      if (Array.isArray(this.style)) {
        var str = '';

        for (var index = 0; index < this.style.length; index++) {
          str += toCss(this.key, this.style[index]);
          if (this.style[index + 1]) str += '\n';
        }

        return str;
      }

      return toCss(this.key, this.style, options);
    };

    return FontFaceRule;
  }();
  var pluginFontFaceRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      return key === '@font-face' ? new FontFaceRule(key, style, options) : null;
    }
  };

  var ViewportRule =
  /*#__PURE__*/
  function () {
    function ViewportRule(key, style, options) {
      this.type = 'viewport';
      this.at = '@viewport';
      this.key = void 0;
      this.style = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      this.style = style;
      this.options = options;
    }
    /**
     * Generates a CSS string.
     */


    var _proto = ViewportRule.prototype;

    _proto.toString = function toString(options) {
      return toCss(this.key, this.style, options);
    };

    return ViewportRule;
  }();
  var pluginViewportRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
    }
  };

  var SimpleRule =
  /*#__PURE__*/
  function () {
    function SimpleRule(key, value, options) {
      this.type = 'simple';
      this.key = void 0;
      this.value = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      this.value = value;
      this.options = options;
    }
    /**
     * Generates a CSS string.
     */
    // eslint-disable-next-line no-unused-vars


    var _proto = SimpleRule.prototype;

    _proto.toString = function toString(options) {
      if (Array.isArray(this.value)) {
        var str = '';

        for (var index = 0; index < this.value.length; index++) {
          str += this.key + " " + this.value[index] + ";";
          if (this.value[index + 1]) str += '\n';
        }

        return str;
      }

      return this.key + " " + this.value + ";";
    };

    return SimpleRule;
  }();
  var keysMap = {
    '@charset': true,
    '@import': true,
    '@namespace': true
  };
  var pluginSimpleRule = {
    onCreateRule: function onCreateRule(key, value, options) {
      return key in keysMap ? new SimpleRule(key, value, options) : null;
    }
  };

  var plugins = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

  var defaultUpdateOptions = {
    process: true
  };
  var forceUpdateOptions = {
    force: true,
    process: true
    /**
     * Contains rules objects and allows adding/removing etc.
     * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
     */

  };

  var RuleList =
  /*#__PURE__*/
  function () {
    // Rules registry for access by .get() method.
    // It contains the same rule registered by name and by selector.
    // Original styles object.
    // Used to ensure correct rules order.
    function RuleList(options) {
      this.map = {};
      this.raw = {};
      this.index = [];
      this.counter = 0;
      this.options = void 0;
      this.classes = void 0;
      this.keyframes = void 0;
      this.options = options;
      this.classes = options.classes;
      this.keyframes = options.keyframes;
    }
    /**
     * Create and register rule.
     *
     * Will not render after Style Sheet was rendered the first time.
     */


    var _proto = RuleList.prototype;

    _proto.add = function add(name, decl, ruleOptions) {
      var _this$options = this.options,
          parent = _this$options.parent,
          sheet = _this$options.sheet,
          jss = _this$options.jss,
          Renderer = _this$options.Renderer,
          generateId = _this$options.generateId,
          scoped = _this$options.scoped;

      var options = _extends({
        classes: this.classes,
        parent: parent,
        sheet: sheet,
        jss: jss,
        Renderer: Renderer,
        generateId: generateId,
        scoped: scoped,
        name: name
      }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
      // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
      // we need to make the key unique within this RuleList instance scope.


      var key = name;

      if (name in this.raw) {
        key = name + "-d" + this.counter++;
      } // We need to save the original decl before creating the rule
      // because cache plugin needs to use it as a key to return a cached rule.


      this.raw[key] = decl;

      if (key in this.classes) {
        // E.g. rules inside of @media container
        options.selector = "." + escape(this.classes[key]);
      }

      var rule = createRule(key, decl, options);
      if (!rule) return null;
      this.register(rule);
      var index = options.index === undefined ? this.index.length : options.index;
      this.index.splice(index, 0, rule);
      return rule;
    }
    /**
     * Get a rule.
     */
    ;

    _proto.get = function get(name) {
      return this.map[name];
    }
    /**
     * Delete a rule.
     */
    ;

    _proto.remove = function remove(rule) {
      this.unregister(rule);
      delete this.raw[rule.key];
      this.index.splice(this.index.indexOf(rule), 1);
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.index.indexOf(rule);
    }
    /**
     * Run `onProcessRule()` plugins on every rule.
     */
    ;

    _proto.process = function process() {
      var plugins$$1 = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
      // we end up with very hard-to-track-down side effects.

      this.index.slice(0).forEach(plugins$$1.onProcessRule, plugins$$1);
    }
    /**
     * Register a rule in `.map`, `.classes` and `.keyframes` maps.
     */
    ;

    _proto.register = function register(rule) {
      this.map[rule.key] = rule;

      if (rule instanceof StyleRule) {
        this.map[rule.selector] = rule;
        if (rule.id) this.classes[rule.key] = rule.id;
      } else if (rule instanceof KeyframesRule && this.keyframes) {
        this.keyframes[rule.name] = rule.id;
      }
    }
    /**
     * Unregister a rule.
     */
    ;

    _proto.unregister = function unregister(rule) {
      delete this.map[rule.key];

      if (rule instanceof StyleRule) {
        delete this.map[rule.selector];
        delete this.classes[rule.key];
      } else if (rule instanceof KeyframesRule) {
        delete this.keyframes[rule.name];
      }
    }
    /**
     * Update the function values with a new data.
     */
    ;

    _proto.update = function update() {
      var name;
      var data;
      var options;

      if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
        name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

        data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe

        options = arguments.length <= 2 ? undefined : arguments[2];
      } else {
        data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

        options = arguments.length <= 1 ? undefined : arguments[1];
        name = null;
      }

      if (name) {
        this.updateOne(this.map[name], data, options);
      } else {
        for (var index = 0; index < this.index.length; index++) {
          this.updateOne(this.index[index], data, options);
        }
      }
    }
    /**
     * Execute plugins, update rule props.
     */
    ;

    _proto.updateOne = function updateOne(rule, data, options) {
      if (options === void 0) {
        options = defaultUpdateOptions;
      }

      var _this$options2 = this.options,
          plugins$$1 = _this$options2.jss.plugins,
          sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

      if (rule.rules instanceof RuleList) {
        rule.rules.update(data, options);
        return;
      }

      var styleRule = rule;
      var style = styleRule.style;
      plugins$$1.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

      if (options.process && style && style !== styleRule.style) {
        // We need to run the plugins in case new `style` relies on syntax plugins.
        plugins$$1.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

        for (var prop in styleRule.style) {
          var nextValue = styleRule.style[prop];
          var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
          // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

          if (nextValue !== prevValue) {
            styleRule.prop(prop, nextValue, forceUpdateOptions);
          }
        } // Remove props.


        for (var _prop in style) {
          var _nextValue = styleRule.style[_prop];
          var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
          // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

          if (_nextValue == null && _nextValue !== _prevValue) {
            styleRule.prop(_prop, null, forceUpdateOptions);
          }
        }
      }
    }
    /**
     * Convert rules to a CSS string.
     */
    ;

    _proto.toString = function toString(options) {
      var str = '';
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;

      for (var index = 0; index < this.index.length; index++) {
        var rule = this.index[index];
        var css = rule.toString(options); // No need to render an empty rule.

        if (!css && !link) continue;
        if (str) str += '\n';
        str += css;
      }

      return str;
    };

    return RuleList;
  }();

  var StyleSheet =
  /*#__PURE__*/
  function () {
    function StyleSheet(styles, options) {
      this.options = void 0;
      this.deployed = void 0;
      this.attached = void 0;
      this.rules = void 0;
      this.renderer = void 0;
      this.classes = void 0;
      this.keyframes = void 0;
      this.queue = void 0;
      this.attached = false;
      this.deployed = false;
      this.classes = {};
      this.keyframes = {};
      this.options = _extends({}, options, {
        sheet: this,
        parent: this,
        classes: this.classes,
        keyframes: this.keyframes
      });

      if (options.Renderer) {
        this.renderer = new options.Renderer(this);
      }

      this.rules = new RuleList(this.options);

      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }

      this.rules.process();
    }
    /**
     * Attach renderable to the render tree.
     */


    var _proto = StyleSheet.prototype;

    _proto.attach = function attach() {
      if (this.attached) return this;
      if (this.renderer) this.renderer.attach();
      this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

      if (!this.deployed) this.deploy();
      return this;
    }
    /**
     * Remove renderable from render tree.
     */
    ;

    _proto.detach = function detach() {
      if (!this.attached) return this;
      if (this.renderer) this.renderer.detach();
      this.attached = false;
      return this;
    }
    /**
     * Add a rule to the current stylesheet.
     * Will insert a rule also after the stylesheet has been rendered first time.
     */
    ;

    _proto.addRule = function addRule(name, decl, options) {
      var queue = this.queue; // Plugins can create rules.
      // In order to preserve the right order, we need to queue all `.addRule` calls,
      // which happen after the first `rules.add()` call.

      if (this.attached && !queue) this.queue = [];
      var rule = this.rules.add(name, decl, options);
      if (!rule) return null;
      this.options.jss.plugins.onProcessRule(rule);

      if (this.attached) {
        if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
        // It will be inserted all together when .attach is called.

        if (queue) queue.push(rule);else {
          this.insertRule(rule);

          if (this.queue) {
            this.queue.forEach(this.insertRule, this);
            this.queue = undefined;
          }
        }
        return rule;
      } // We can't add rules to a detached style node.
      // We will redeploy the sheet once user will attach it.


      this.deployed = false;
      return rule;
    }
    /**
     * Insert rule into the StyleSheet
     */
    ;

    _proto.insertRule = function insertRule(rule) {
      if (this.renderer) {
        this.renderer.insertRule(rule);
      }
    }
    /**
     * Create and add rules.
     * Will render also after Style Sheet was rendered the first time.
     */
    ;

    _proto.addRules = function addRules(styles, options) {
      var added = [];

      for (var name in styles) {
        var rule = this.addRule(name, styles[name], options);
        if (rule) added.push(rule);
      }

      return added;
    }
    /**
     * Get a rule by name.
     */
    ;

    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Delete a rule by name.
     * Returns `true`: if rule has been deleted from the DOM.
     */
    ;

    _proto.deleteRule = function deleteRule(name) {
      var rule = typeof name === 'object' ? name : this.rules.get(name);
      if (!rule) return false;
      this.rules.remove(rule);

      if (this.attached && rule.renderable && this.renderer) {
        return this.renderer.deleteRule(rule.renderable);
      }

      return true;
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Deploy pure CSS string to a renderable.
     */
    ;

    _proto.deploy = function deploy() {
      if (this.renderer) this.renderer.deploy();
      this.deployed = true;
      return this;
    }
    /**
     * Update the function values with a new data.
     */
    ;

    _proto.update = function update() {
      var _this$rules;

      (_this$rules = this.rules).update.apply(_this$rules, arguments);

      return this;
    }
    /**
     * Updates a single rule.
     */
    ;

    _proto.updateOne = function updateOne(rule, data, options) {
      this.rules.updateOne(rule, data, options);
      return this;
    }
    /**
     * Convert rules to a CSS string.
     */
    ;

    _proto.toString = function toString(options) {
      return this.rules.toString(options);
    };

    return StyleSheet;
  }();

  var PluginsRegistry =
  /*#__PURE__*/
  function () {
    function PluginsRegistry() {
      this.plugins = {
        internal: [],
        external: []
      };
      this.registry = void 0;
    }

    var _proto = PluginsRegistry.prototype;

    /**
     * Call `onCreateRule` hooks and return an object if returned by a hook.
     */
    _proto.onCreateRule = function onCreateRule(name, decl, options) {
      for (var i = 0; i < this.registry.onCreateRule.length; i++) {
        var rule = this.registry.onCreateRule[i](name, decl, options);
        if (rule) return rule;
      }

      return null;
    }
    /**
     * Call `onProcessRule` hooks.
     */
    ;

    _proto.onProcessRule = function onProcessRule(rule) {
      if (rule.isProcessed) return;
      var sheet = rule.options.sheet;

      for (var i = 0; i < this.registry.onProcessRule.length; i++) {
        this.registry.onProcessRule[i](rule, sheet);
      }

      if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
      rule.isProcessed = true;
    }
    /**
     * Call `onProcessStyle` hooks.
     */
    ;

    _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
      for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
        // $FlowFixMe
        rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
      }
    }
    /**
     * Call `onProcessSheet` hooks.
     */
    ;

    _proto.onProcessSheet = function onProcessSheet(sheet) {
      for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
        this.registry.onProcessSheet[i](sheet);
      }
    }
    /**
     * Call `onUpdate` hooks.
     */
    ;

    _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
      for (var i = 0; i < this.registry.onUpdate.length; i++) {
        this.registry.onUpdate[i](data, rule, sheet, options);
      }
    }
    /**
     * Call `onChangeValue` hooks.
     */
    ;

    _proto.onChangeValue = function onChangeValue(value, prop, rule) {
      var processedValue = value;

      for (var i = 0; i < this.registry.onChangeValue.length; i++) {
        processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
      }

      return processedValue;
    }
    /**
     * Register a plugin.
     */
    ;

    _proto.use = function use(newPlugin, options) {
      if (options === void 0) {
        options = {
          queue: 'external'
        };
      }

      var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

      if (plugins.indexOf(newPlugin) !== -1) {
        return;
      }

      plugins.push(newPlugin);
      this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
        for (var name in plugin) {
          if (name in registry) {
            registry[name].push(plugin[name]);
          }
        }

        return registry;
      }, {
        onCreateRule: [],
        onProcessRule: [],
        onProcessStyle: [],
        onProcessSheet: [],
        onChangeValue: [],
        onUpdate: []
      });
    };

    return PluginsRegistry;
  }();

  /**
   * Sheets registry to access them all at one place.
   */
  var SheetsRegistry =
  /*#__PURE__*/
  function () {
    function SheetsRegistry() {
      this.registry = [];
    }

    var _proto = SheetsRegistry.prototype;

    /**
     * Register a Style Sheet.
     */
    _proto.add = function add(sheet) {
      var registry = this.registry;
      var index = sheet.options.index;
      if (registry.indexOf(sheet) !== -1) return;

      if (registry.length === 0 || index >= this.index) {
        registry.push(sheet);
        return;
      } // Find a position.


      for (var i = 0; i < registry.length; i++) {
        if (registry[i].options.index > index) {
          registry.splice(i, 0, sheet);
          return;
        }
      }
    }
    /**
     * Reset the registry.
     */
    ;

    _proto.reset = function reset() {
      this.registry = [];
    }
    /**
     * Remove a Style Sheet.
     */
    ;

    _proto.remove = function remove(sheet) {
      var index = this.registry.indexOf(sheet);
      this.registry.splice(index, 1);
    }
    /**
     * Convert all attached sheets to a CSS string.
     */
    ;

    _proto.toString = function toString(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          attached = _ref.attached,
          options = _objectWithoutPropertiesLoose(_ref, ["attached"]);

      var css = '';

      for (var i = 0; i < this.registry.length; i++) {
        var sheet = this.registry[i];

        if (attached != null && sheet.attached !== attached) {
          continue;
        }

        if (css) css += '\n';
        css += sheet.toString(options);
      }

      return css;
    };

    _createClass$1(SheetsRegistry, [{
      key: "index",

      /**
       * Current highest index number.
       */
      get: function get() {
        return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
      }
    }]);

    return SheetsRegistry;
  }();

  /**
   * This is a global sheets registry. Only DomRenderer will add sheets to it.
   * On the server one should use an own SheetsRegistry instance and add the
   * sheets to it, because you need to make sure to create a new registry for
   * each request in order to not leak sheets across requests.
   */

  var sheets = new SheetsRegistry();

  /* eslint-disable */
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var globalThis = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

  var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
  if (globalThis[ns] == null) globalThis[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
  // the current version with just one short number and use it for classes generation
  // we use a counter. Also it is more accurate, because user can manually reevaluate
  // the module.

  var moduleId = globalThis[ns]++;

  /**
   * Returns a function which generates unique class names based on counters.
   * When new generator function is created, rule counter is reseted.
   * We need to reset the rule counter for SSR for each request.
   */
  var createGenerateId = function createGenerateId(options) {
    if (options === void 0) {
      options = {};
    }

    var ruleCounter = 0;
    return function (rule, sheet) {
      ruleCounter += 1;

      var jssId = '';
      var prefix = '';

      if (sheet) {
        if (sheet.options.classNamePrefix) {
          prefix = sheet.options.classNamePrefix;
        }

        if (sheet.options.jss.id != null) {
          jssId = String(sheet.options.jss.id);
        }
      }

      if (options.minify) {
        // Using "c" because a number can't be the first char in a class name.
        return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
      }

      return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
    };
  };

  /**
   * Cache the value from the first time a function is called.
   */
  var memoize = function memoize(fn) {
    var value;
    return function () {
      if (!value) value = fn();
      return value;
    };
  };
  /**
   * Get a style property value.
   */


  function getPropertyValue(cssRule, prop) {
    try {
      // Support CSSTOM.
      if (cssRule.attributeStyleMap) {
        return cssRule.attributeStyleMap.get(prop);
      }

      return cssRule.style.getPropertyValue(prop);
    } catch (err) {
      // IE may throw if property is unknown.
      return '';
    }
  }
  /**
   * Set a style property.
   */


  function setProperty(cssRule, prop, value) {
    try {
      var cssValue = value;

      if (Array.isArray(value)) {
        cssValue = toCssValue(value, true);

        if (value[value.length - 1] === '!important') {
          cssRule.style.setProperty(prop, cssValue, 'important');
          return true;
        }
      } // Support CSSTOM.


      if (cssRule.attributeStyleMap) {
        cssRule.attributeStyleMap.set(prop, cssValue);
      } else {
        cssRule.style.setProperty(prop, cssValue);
      }
    } catch (err) {
      // IE may throw if property is unknown.
      return false;
    }

    return true;
  }
  /**
   * Remove a style property.
   */


  function removeProperty(cssRule, prop) {
    try {
      // Support CSSTOM.
      if (cssRule.attributeStyleMap) {
        cssRule.attributeStyleMap.delete(prop);
      } else {
        cssRule.style.removeProperty(prop);
      }
    } catch (err) {
    }
  }
  /**
   * Set the selector.
   */


  function setSelector(cssRule, selectorText) {
    cssRule.selectorText = selectorText; // Return false if setter was not successful.
    // Currently works in chrome only.

    return cssRule.selectorText === selectorText;
  }
  /**
   * Gets the `head` element upon the first call and caches it.
   * We assume it can't be null.
   */


  var getHead = memoize(function () {
    return document.querySelector('head');
  });
  /**
   * Find attached sheet with an index higher than the passed one.
   */

  function findHigherSheet(registry, options) {
    for (var i = 0; i < registry.length; i++) {
      var sheet = registry[i];

      if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }

    return null;
  }
  /**
   * Find attached sheet with the highest index.
   */


  function findHighestSheet(registry, options) {
    for (var i = registry.length - 1; i >= 0; i--) {
      var sheet = registry[i];

      if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }

    return null;
  }
  /**
   * Find a comment with "jss" inside.
   */


  function findCommentNode(text) {
    var head = getHead();

    for (var i = 0; i < head.childNodes.length; i++) {
      var node = head.childNodes[i];

      if (node.nodeType === 8 && node.nodeValue.trim() === text) {
        return node;
      }
    }

    return null;
  }

  /**
   * Find a node before which we can insert the sheet.
   */
  function findPrevNode(options) {
    var registry = sheets.registry;

    if (registry.length > 0) {
      // Try to insert before the next higher sheet.
      var sheet = findHigherSheet(registry, options);

      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element
        };
      } // Otherwise insert after the last attached.


      sheet = findHighestSheet(registry, options);

      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element.nextSibling
        };
      }
    } // Try to find a comment placeholder if registry is empty.


    var insertionPoint = options.insertionPoint;

    if (insertionPoint && typeof insertionPoint === 'string') {
      var comment = findCommentNode(insertionPoint);

      if (comment) {
        return {
          parent: comment.parentNode,
          node: comment.nextSibling
        };
      } // If user specifies an insertion point and it can't be found in the document -
    }

    return false;
  }
  /**
   * Insert style element into the DOM.
   */


  function insertStyle(style, options) {
    var insertionPoint = options.insertionPoint;
    var nextNode = findPrevNode(options);

    if (nextNode !== false && nextNode.parent) {
      nextNode.parent.insertBefore(style, nextNode.node);
      return;
    } // Works with iframes and any node types.


    if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
      // https://stackoverflow.com/questions/41328728/force-casting-in-flow
      var insertionPointElement = insertionPoint;
      var parentNode = insertionPointElement.parentNode;
      if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);
      return;
    }

    getHead().appendChild(style);
  }
  /**
   * Read jss nonce setting from the page if the user has set it.
   */


  var getNonce = memoize(function () {
    var node = document.querySelector('meta[property="csp-nonce"]');
    return node ? node.getAttribute('content') : null;
  });

  var _insertRule = function insertRule(container, rule, index) {
    var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

    if (index === undefined || index > maxIndex) {
      // eslint-disable-next-line no-param-reassign
      index = maxIndex;
    }

    try {
      if ('insertRule' in container) {
        var c = container;
        c.insertRule(rule, index);
      } // Keyframes rule.
      else if ('appendRule' in container) {
          var _c = container;

          _c.appendRule(rule);
        }
    } catch (err) {
      return false;
    }

    return container.cssRules[index];
  };

  var createStyle = function createStyle() {
    var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
    // insert rules after we insert the style tag.
    // It seems to kick-off the source order specificity algorithm.

    el.textContent = '\n';
    return el;
  };

  var DomRenderer =
  /*#__PURE__*/
  function () {
    // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
    function DomRenderer(sheet) {
      this.getPropertyValue = getPropertyValue;
      this.setProperty = setProperty;
      this.removeProperty = removeProperty;
      this.setSelector = setSelector;
      this.element = void 0;
      this.sheet = void 0;
      this.hasInsertedRules = false;
      // There is no sheet when the renderer is used from a standalone StyleRule.
      if (sheet) sheets.add(sheet);
      this.sheet = sheet;

      var _ref = this.sheet ? this.sheet.options : {},
          media = _ref.media,
          meta = _ref.meta,
          element = _ref.element;

      this.element = element || createStyle();
      this.element.setAttribute('data-jss', '');
      if (media) this.element.setAttribute('media', media);
      if (meta) this.element.setAttribute('data-meta', meta);
      var nonce = getNonce();
      if (nonce) this.element.setAttribute('nonce', nonce);
    }
    /**
     * Insert style element into render tree.
     */


    var _proto = DomRenderer.prototype;

    _proto.attach = function attach() {
      // In the case the element node is external and it is already in the DOM.
      if (this.element.parentNode || !this.sheet) return;
      insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
      // most browsers create a new CSSStyleSheet, except of all IEs.

      var deployed = Boolean(this.sheet && this.sheet.deployed);

      if (this.hasInsertedRules && deployed) {
        this.hasInsertedRules = false;
        this.deploy();
      }
    }
    /**
     * Remove style element from render tree.
     */
    ;

    _proto.detach = function detach() {
      var parentNode = this.element.parentNode;
      if (parentNode) parentNode.removeChild(this.element);
    }
    /**
     * Inject CSS string into element.
     */
    ;

    _proto.deploy = function deploy() {
      var sheet = this.sheet;
      if (!sheet) return;

      if (sheet.options.link) {
        this.insertRules(sheet.rules);
        return;
      }

      this.element.textContent = "\n" + sheet.toString() + "\n";
    }
    /**
     * Insert RuleList into an element.
     */
    ;

    _proto.insertRules = function insertRules(rules, nativeParent) {
      for (var i = 0; i < rules.index.length; i++) {
        this.insertRule(rules.index[i], i, nativeParent);
      }
    }
    /**
     * Insert a rule into element.
     */
    ;

    _proto.insertRule = function insertRule(rule, index, nativeParent) {
      if (nativeParent === void 0) {
        nativeParent = this.element.sheet;
      }

      if (rule.rules) {
        var parent = rule;
        var latestNativeParent = nativeParent;

        if (rule.type === 'conditional' || rule.type === 'keyframes') {
          // We need to render the container without children first.
          latestNativeParent = _insertRule(nativeParent, parent.toString({
            children: false
          }), index);

          if (latestNativeParent === false) {
            return false;
          }
        }

        this.insertRules(parent.rules, latestNativeParent);
        return latestNativeParent;
      } // IE keeps the CSSStyleSheet after style node has been reattached,
      // so we need to check if the `renderable` reference the right style sheet and not
      // rerender those rules.


      if (rule.renderable && rule.renderable.parentStyleSheet === this.element.sheet) {
        return rule.renderable;
      }

      var ruleStr = rule.toString();
      if (!ruleStr) return false;

      var nativeRule = _insertRule(nativeParent, ruleStr, index);

      if (nativeRule === false) {
        return false;
      }

      this.hasInsertedRules = true;
      rule.renderable = nativeRule;
      return nativeRule;
    }
    /**
     * Delete a rule.
     */
    ;

    _proto.deleteRule = function deleteRule(cssRule) {
      var sheet = this.element.sheet;
      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      sheet.deleteRule(index);
      return true;
    }
    /**
     * Get index of a CSS Rule.
     */
    ;

    _proto.indexOf = function indexOf(cssRule) {
      var cssRules = this.element.sheet.cssRules;

      for (var index = 0; index < cssRules.length; index++) {
        if (cssRule === cssRules[index]) return index;
      }

      return -1;
    }
    /**
     * Generate a new CSS rule and replace the existing one.
     *
     * Only used for some old browsers because they can't set a selector.
     */
    ;

    _proto.replaceRule = function replaceRule(cssRule, rule) {
      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      this.element.sheet.deleteRule(index);
      return this.insertRule(rule, index);
    }
    /**
     * Get all rules elements.
     */
    ;

    _proto.getRules = function getRules() {
      return this.element.sheet.cssRules;
    };

    return DomRenderer;
  }();

  var instanceCounter = 0;

  var Jss =
  /*#__PURE__*/
  function () {
    function Jss(options) {
      this.id = instanceCounter++;
      this.version = "10.0.3";
      this.plugins = new PluginsRegistry();
      this.options = {
        id: {
          minify: false
        },
        createGenerateId: createGenerateId,
        Renderer: isBrowser ? DomRenderer : null,
        plugins: []
      };
      this.generateId = createGenerateId({
        minify: false
      });

      for (var i = 0; i < plugins.length; i++) {
        this.plugins.use(plugins[i], {
          queue: 'internal'
        });
      }

      this.setup(options);
    }
    /**
     * Prepares various options, applies plugins.
     * Should not be used twice on the same instance, because there is no plugins
     * deduplication logic.
     */


    var _proto = Jss.prototype;

    _proto.setup = function setup(options) {
      if (options === void 0) {
        options = {};
      }

      if (options.createGenerateId) {
        this.options.createGenerateId = options.createGenerateId;
      }

      if (options.id) {
        this.options.id = _extends({}, this.options.id, options.id);
      }

      if (options.createGenerateId || options.id) {
        this.generateId = this.options.createGenerateId(this.options.id);
      }

      if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

      if ('Renderer' in options) {
        this.options.Renderer = options.Renderer;
      } // eslint-disable-next-line prefer-spread


      if (options.plugins) this.use.apply(this, options.plugins);
      return this;
    }
    /**
     * Create a Style Sheet.
     */
    ;

    _proto.createStyleSheet = function createStyleSheet(styles, options) {
      if (options === void 0) {
        options = {};
      }

      var _options = options,
          index = _options.index;

      if (typeof index !== 'number') {
        index = sheets.index === 0 ? 0 : sheets.index + 1;
      }

      var sheet = new StyleSheet(styles, _extends({}, options, {
        jss: this,
        generateId: options.generateId || this.generateId,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: index
      }));
      this.plugins.onProcessSheet(sheet);
      return sheet;
    }
    /**
     * Detach the Style Sheet and remove it from the registry.
     */
    ;

    _proto.removeStyleSheet = function removeStyleSheet(sheet) {
      sheet.detach();
      sheets.remove(sheet);
      return this;
    }
    /**
     * Create a rule without a Style Sheet.
     * [Deprecated] will be removed in the next major version.
     */
    ;

    _proto.createRule = function createRule$$1(name, style, options) {
      if (style === void 0) {
        style = {};
      }

      if (options === void 0) {
        options = {};
      }

      // Enable rule without name for inline styles.
      if (typeof name === 'object') {
        return this.createRule(undefined, name, style);
      }

      var ruleOptions = _extends({}, options, {
        name: name,
        jss: this,
        Renderer: this.options.Renderer
      });

      if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
      if (!ruleOptions.classes) ruleOptions.classes = {};
      if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

      var rule = createRule(name, style, ruleOptions);

      if (rule) this.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Register plugin. Passed function will be invoked with a rule instance.
     */
    ;

    _proto.use = function use() {
      var _this = this;

      for (var _len = arguments.length, plugins$$1 = new Array(_len), _key = 0; _key < _len; _key++) {
        plugins$$1[_key] = arguments[_key];
      }

      plugins$$1.forEach(function (plugin) {
        _this.plugins.use(plugin);
      });
      return this;
    };

    return Jss;
  }();

  /**
   * Extracts a styles object with only props that contain function values.
   */
  function getDynamicStyles(styles) {
    var to = null;

    for (var key in styles) {
      var value = styles[key];
      var type = typeof value;

      if (type === 'function') {
        if (!to) to = {};
        to[key] = value;
      } else if (type === 'object' && value !== null && !Array.isArray(value)) {
        var extracted = getDynamicStyles(value);

        if (extracted) {
          if (!to) to = {};
          to[key] = extracted;
        }
      }
    }

    return to;
  }

  /**
   * A better abstraction over CSS.
   *
   * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
   * @website https://github.com/cssinjs/jss
   * @license MIT
   */

  /**
   * Export a constant indicating if this browser has CSSTOM support.
   * https://developers.google.com/web/updates/2018/03/cssom
   */
  var hasCSSTOMSupport = typeof CSS !== 'undefined' && CSS && 'number' in CSS;
  /**
   * Creates a new instance of Jss.
   */

  var create = function create(options) {
    return new Jss(options);
  };
  /**
   * A global Jss instance.
   */

  var index = create();

  var now = Date.now();
  var fnValuesNs = "fnValues" + now;
  var fnRuleNs = "fnStyle" + ++now;
  function functionPlugin() {
    return {
      onCreateRule: function onCreateRule(name, decl, options) {
        if (typeof decl !== 'function') return null;
        var rule = createRule(name, {}, options);
        rule[fnRuleNs] = decl;
        return rule;
      },
      onProcessStyle: function onProcessStyle(style, rule) {
        // We need to extract function values from the declaration, so that we can keep core unaware of them.
        // We need to do that only once.
        // We don't need to extract functions on each style update, since this can happen only once.
        // We don't support function values inside of function rules.
        if (fnValuesNs in rule || fnRuleNs in rule) return style;
        var fnValues = {};

        for (var prop in style) {
          var value = style[prop];
          if (typeof value !== 'function') continue;
          delete style[prop];
          fnValues[prop] = value;
        } // $FlowFixMe


        rule[fnValuesNs] = fnValues;
        return style;
      },
      onUpdate: function onUpdate(data, rule, sheet, options) {
        var styleRule = rule;
        var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
        // will be returned from that function.

        if (fnRule) {
          // Empty object will remove all currently defined props
          // in case function rule returns a falsy value.
          styleRule.style = fnRule(data) || {};
        }

        var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

        if (fnValues) {
          for (var prop in fnValues) {
            styleRule.prop(prop, fnValues[prop](data), options);
          }
        }
      }
    };
  }

  var at = '@global';
  var atPrefix = '@global ';

  var GlobalContainerRule =
  /*#__PURE__*/
  function () {
    function GlobalContainerRule(key, styles, options) {
      this.type = 'global';
      this.at = at;
      this.rules = void 0;
      this.options = void 0;
      this.key = void 0;
      this.isProcessed = false;
      this.key = key;
      this.options = options;
      this.rules = new RuleList(_extends({}, options, {
        parent: this
      }));

      for (var selector in styles) {
        this.rules.add(selector, styles[selector]);
      }

      this.rules.process();
    }
    /**
     * Get a rule.
     */


    var _proto = GlobalContainerRule.prototype;

    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Create and register rule, run plugins.
     */
    ;

    _proto.addRule = function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Generates a CSS string.
     */
    ;

    _proto.toString = function toString() {
      return this.rules.toString();
    };

    return GlobalContainerRule;
  }();

  var GlobalPrefixedRule =
  /*#__PURE__*/
  function () {
    function GlobalPrefixedRule(key, style, options) {
      this.type = 'global';
      this.at = at;
      this.options = void 0;
      this.rule = void 0;
      this.isProcessed = false;
      this.key = void 0;
      this.key = key;
      this.options = options;
      var selector = key.substr(atPrefix.length);
      this.rule = options.jss.createRule(selector, style, _extends({}, options, {
        parent: this
      }));
    }

    var _proto2 = GlobalPrefixedRule.prototype;

    _proto2.toString = function toString(options) {
      return this.rule ? this.rule.toString(options) : '';
    };

    return GlobalPrefixedRule;
  }();

  var separatorRegExp = /\s*,\s*/g;

  function addScope(selector, scope) {
    var parts = selector.split(separatorRegExp);
    var scoped = '';

    for (var i = 0; i < parts.length; i++) {
      scoped += scope + " " + parts[i].trim();
      if (parts[i + 1]) scoped += ', ';
    }

    return scoped;
  }

  function handleNestedGlobalContainerRule(rule) {
    var options = rule.options,
        style = rule.style;
    var rules = style ? style[at] : null;
    if (!rules) return;

    for (var name in rules) {
      options.sheet.addRule(name, rules[name], _extends({}, options, {
        selector: addScope(name, rule.selector)
      }));
    }

    delete style[at];
  }

  function handlePrefixedGlobalRule(rule) {
    var options = rule.options,
        style = rule.style;

    for (var prop in style) {
      if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
      var selector = addScope(prop.substr(at.length), rule.selector);
      options.sheet.addRule(selector, style[prop], _extends({}, options, {
        selector: selector
      }));
      delete style[prop];
    }
  }
  /**
   * Convert nested rules to separate, remove them from original styles.
   *
   * @param {Rule} rule
   * @api public
   */


  function jssGlobal() {
    function onCreateRule(name, styles, options) {
      if (!name) return null;

      if (name === at) {
        return new GlobalContainerRule(name, styles, options);
      }

      if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
        return new GlobalPrefixedRule(name, styles, options);
      }

      var parent = options.parent;

      if (parent) {
        if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
          options.scoped = false;
        }
      }

      if (options.scoped === false) {
        options.selector = name;
      }

      return null;
    }

    function onProcessRule(rule) {
      if (rule.type !== 'style') return;
      handleNestedGlobalContainerRule(rule);
      handlePrefixedGlobalRule(rule);
    }

    return {
      onCreateRule: onCreateRule,
      onProcessRule: onProcessRule
    };
  }

  var separatorRegExp$1 = /\s*,\s*/g;
  var parentRegExp = /&/g;
  var refRegExp$1 = /\$([\w-]+)/g;
  /**
   * Convert nested rules to separate, remove them from original styles.
   *
   * @param {Rule} rule
   * @api public
   */

  function jssNested() {
    // Get a function to be used for $ref replacement.
    function getReplaceRef(container, sheet) {
      return function (match, key) {
        var rule = container.getRule(key) || sheet && sheet.getRule(key);

        if (rule) {
          rule = rule;
          return rule.selector;
        }
        return key;
      };
    }

    function replaceParentRefs(nestedProp, parentProp) {
      var parentSelectors = parentProp.split(separatorRegExp$1);
      var nestedSelectors = nestedProp.split(separatorRegExp$1);
      var result = '';

      for (var i = 0; i < parentSelectors.length; i++) {
        var parent = parentSelectors[i];

        for (var j = 0; j < nestedSelectors.length; j++) {
          var nested = nestedSelectors[j];
          if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

          result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
        }
      }

      return result;
    }

    function getOptions(rule, container, prevOptions) {
      // Options has been already created, now we only increase index.
      if (prevOptions) return _extends({}, prevOptions, {
        index: prevOptions.index + 1
      });
      var nestingLevel = rule.options.nestingLevel;
      nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

      var options = _extends({}, rule.options, {
        nestingLevel: nestingLevel,
        index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

      });

      delete options.name;
      return options;
    }

    function onProcessStyle(style, rule, sheet) {
      if (rule.type !== 'style') return style;
      var styleRule = rule;
      var container = styleRule.options.parent;
      var options;
      var replaceRef;

      for (var prop in style) {
        var isNested = prop.indexOf('&') !== -1;
        var isNestedConditional = prop[0] === '@';
        if (!isNested && !isNestedConditional) continue;
        options = getOptions(styleRule, container, options);

        if (isNested) {
          var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
          // all nested rules within the sheet.

          if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

          selector = selector.replace(refRegExp$1, replaceRef);
          container.addRule(selector, style[prop], _extends({}, options, {
            selector: selector
          }));
        } else if (isNestedConditional) {
          // Place conditional right after the parent rule to ensure right ordering.
          container.addRule(prop, {}, options) // Flow expects more options but they aren't required
          // And flow doesn't know this will always be a StyleRule which has the addRule method
          // $FlowFixMe
          .addRule(styleRule.key, style[prop], {
            selector: styleRule.selector
          });
        }

        delete style[prop];
      }

      return style;
    }

    return {
      onProcessStyle: onProcessStyle
    };
  }

  /* eslint-disable no-var, prefer-template */
  var uppercasePattern = /[A-Z]/g;
  var msPattern = /^ms-/;
  var cache = {};

  function toHyphenLower(match) {
    return '-' + match.toLowerCase()
  }

  function hyphenateStyleName(name) {
    if (cache.hasOwnProperty(name)) {
      return cache[name]
    }

    var hName = name.replace(uppercasePattern, toHyphenLower);
    return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
  }

  /**
   * Convert camel cased property names to dash separated.
   *
   * @param {Object} style
   * @return {Object}
   */

  function convertCase(style) {
    var converted = {};

    for (var prop in style) {
      var key = prop.indexOf('--') === 0 ? prop : hyphenateStyleName(prop);
      converted[key] = style[prop];
    }

    if (style.fallbacks) {
      if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
    }

    return converted;
  }
  /**
   * Allow camel cased property names by converting them back to dasherized.
   *
   * @param {Rule} rule
   */


  function camelCase() {
    function onProcessStyle(style) {
      if (Array.isArray(style)) {
        // Handle rules like @font-face, which can have multiple styles in an array
        for (var index = 0; index < style.length; index++) {
          style[index] = convertCase(style[index]);
        }

        return style;
      }

      return convertCase(style);
    }

    function onChangeValue(value, prop, rule) {
      if (prop.indexOf('--') === 0) {
        return value;
      }

      var hyphenatedProp = hyphenateStyleName(prop); // There was no camel case in place

      if (prop === hyphenatedProp) return value;
      rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

      return null;
    }

    return {
      onProcessStyle: onProcessStyle,
      onChangeValue: onChangeValue
    };
  }

  var px = hasCSSTOMSupport && CSS ? CSS.px : 'px';
  var ms = hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
  var percent = hasCSSTOMSupport && CSS ? CSS.percent : '%';
  /**
   * Generated jss-plugin-default-unit CSS property units
   *
   * @type object
   */

  var defaultUnits = {
    // Animation properties
    'animation-delay': ms,
    'animation-duration': ms,
    // Background properties
    'background-position': px,
    'background-position-x': px,
    'background-position-y': px,
    'background-size': px,
    // Border Properties
    border: px,
    'border-bottom': px,
    'border-bottom-left-radius': px,
    'border-bottom-right-radius': px,
    'border-bottom-width': px,
    'border-left': px,
    'border-left-width': px,
    'border-radius': px,
    'border-right': px,
    'border-right-width': px,
    'border-top': px,
    'border-top-left-radius': px,
    'border-top-right-radius': px,
    'border-top-width': px,
    'border-width': px,
    // Margin properties
    margin: px,
    'margin-bottom': px,
    'margin-left': px,
    'margin-right': px,
    'margin-top': px,
    // Padding properties
    padding: px,
    'padding-bottom': px,
    'padding-left': px,
    'padding-right': px,
    'padding-top': px,
    // Mask properties
    'mask-position-x': px,
    'mask-position-y': px,
    'mask-size': px,
    // Width and height properties
    height: px,
    width: px,
    'min-height': px,
    'max-height': px,
    'min-width': px,
    'max-width': px,
    // Position properties
    bottom: px,
    left: px,
    top: px,
    right: px,
    // Shadow properties
    'box-shadow': px,
    'text-shadow': px,
    // Column properties
    'column-gap': px,
    'column-rule': px,
    'column-rule-width': px,
    'column-width': px,
    // Font and text properties
    'font-size': px,
    'font-size-delta': px,
    'letter-spacing': px,
    'text-indent': px,
    'text-stroke': px,
    'text-stroke-width': px,
    'word-spacing': px,
    // Motion properties
    motion: px,
    'motion-offset': px,
    // Outline properties
    outline: px,
    'outline-offset': px,
    'outline-width': px,
    // Perspective properties
    perspective: px,
    'perspective-origin-x': percent,
    'perspective-origin-y': percent,
    // Transform properties
    'transform-origin': percent,
    'transform-origin-x': percent,
    'transform-origin-y': percent,
    'transform-origin-z': percent,
    // Transition properties
    'transition-delay': ms,
    'transition-duration': ms,
    // Alignment properties
    'vertical-align': px,
    'flex-basis': px,
    // Some random properties
    'shape-margin': px,
    size: px,
    // Grid properties
    grid: px,
    'grid-gap': px,
    'grid-row-gap': px,
    'grid-column-gap': px,
    'grid-template-rows': px,
    'grid-template-columns': px,
    'grid-auto-rows': px,
    'grid-auto-columns': px,
    // Not existing properties.
    // Used to avoid issues with jss-plugin-expand integration.
    'box-shadow-x': px,
    'box-shadow-y': px,
    'box-shadow-blur': px,
    'box-shadow-spread': px,
    'font-line-height': px,
    'text-shadow-x': px,
    'text-shadow-y': px,
    'text-shadow-blur': px
  };

  /**
   * Clones the object and adds a camel cased property version.
   */
  function addCamelCasedVersion(obj) {
    var regExp = /(-[a-z])/g;

    var replace = function replace(str) {
      return str[1].toUpperCase();
    };

    var newObj = {};

    for (var _key in obj) {
      newObj[_key] = obj[_key];
      newObj[_key.replace(regExp, replace)] = obj[_key];
    }

    return newObj;
  }

  var units = addCamelCasedVersion(defaultUnits);
  /**
   * Recursive deep style passing function
   */

  function iterate(prop, value, options) {
    if (!value) return value;

    if (Array.isArray(value)) {
      for (var i = 0; i < value.length; i++) {
        value[i] = iterate(prop, value[i], options);
      }
    } else if (typeof value === 'object') {
      if (prop === 'fallbacks') {
        for (var innerProp in value) {
          value[innerProp] = iterate(innerProp, value[innerProp], options);
        }
      } else {
        for (var _innerProp in value) {
          value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
        }
      }
    } else if (typeof value === 'number') {
      if (options[prop]) {
        return "" + value + options[prop];
      }

      if (units[prop]) {
        return typeof units[prop] === 'function' ? units[prop](value).toString() : "" + value + units[prop];
      }

      return value.toString();
    }

    return value;
  }
  /**
   * Add unit to numeric values.
   */


  function defaultUnit(options) {
    if (options === void 0) {
      options = {};
    }

    var camelCasedOptions = addCamelCasedVersion(options);

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;

      for (var prop in style) {
        style[prop] = iterate(prop, style[prop], camelCasedOptions);
      }

      return style;
    }

    function onChangeValue(value, prop) {
      return iterate(prop, value, camelCasedOptions);
    }

    return {
      onProcessStyle: onProcessStyle,
      onChangeValue: onChangeValue
    };
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  // Export javascript style and css style vendor prefixes.
  var js = '';
  var css = '';
  var vendor = '';
  var browser = '';
  var isTouch = isBrowser && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

  if (isBrowser) {
    // Order matters. We need to check Webkit the last one because
    // other vendors use to add Webkit prefixes to some properties
    var jsCssMap = {
      Moz: '-moz-',
      ms: '-ms-',
      O: '-o-',
      Webkit: '-webkit-'
    };

    var _document$createEleme = document.createElement('p'),
        style = _document$createEleme.style;

    var testProp = 'Transform';

    for (var key in jsCssMap) {
      if (key + testProp in style) {
        js = key;
        css = jsCssMap[key];
        break;
      }
    } // Correctly detect the Edge browser.


    if (js === 'Webkit' && 'msHyphens' in style) {
      js = 'ms';
      css = jsCssMap.ms;
      browser = 'edge';
    } // Correctly detect the Safari browser.


    if (js === 'Webkit' && '-apple-trailing-word' in style) {
      vendor = 'apple';
    }
  }
  /**
   * Vendor prefix string for the current browser.
   *
   * @type {{js: String, css: String, vendor: String, browser: String}}
   * @api public
   */


  var prefix = {
    js: js,
    css: css,
    vendor: vendor,
    browser: browser,
    isTouch: isTouch
  };

  /**
   * Test if a keyframe at-rule should be prefixed or not
   *
   * @param {String} vendor prefix string for the current browser.
   * @return {String}
   * @api public
   */

  function supportedKeyframes(key) {
    // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
    if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
    // https://caniuse.com/#search=keyframes

    if (prefix.js === 'ms') return key;
    return "@" + prefix.css + "keyframes" + key.substr(10);
  }

  // https://caniuse.com/#search=appearance

  var appearence = {
    noPrefill: ['appearance'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'appearance') return false;
      if (prefix.js === 'ms') return "-webkit-" + prop;
      return prefix.css + prop;
    }
  };

  // https://caniuse.com/#search=color-adjust

  var colorAdjust = {
    noPrefill: ['color-adjust'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'color-adjust') return false;
      if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
      return prop;
    }
  };

  var regExp = /[-\s]+(.)?/g;
  /**
   * Replaces the letter with the capital letter
   *
   * @param {String} match
   * @param {String} c
   * @return {String}
   * @api private
   */

  function toUpper(match, c) {
    return c ? c.toUpperCase() : '';
  }
  /**
   * Convert dash separated strings to camel-cased.
   *
   * @param {String} str
   * @return {String}
   * @api private
   */


  function camelize(str) {
    return str.replace(regExp, toUpper);
  }

  /**
   * Convert dash separated strings to pascal cased.
   *
   * @param {String} str
   * @return {String}
   * @api private
   */

  function pascalize(str) {
    return camelize("-" + str);
  }

  // but we can use a longhand property instead.
  // https://caniuse.com/#search=mask

  var mask = {
    noPrefill: ['mask'],
    supportedProperty: function supportedProperty(prop, style) {
      if (!/^mask/.test(prop)) return false;

      if (prefix.js === 'Webkit') {
        var longhand = 'mask-image';

        if (camelize(longhand) in style) {
          return prop;
        }

        if (prefix.js + pascalize(longhand) in style) {
          return prefix.css + prop;
        }
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=text-orientation

  var textOrientation = {
    noPrefill: ['text-orientation'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'text-orientation') return false;

      if (prefix.vendor === 'apple' && !prefix.isTouch) {
        return prefix.css + prop;
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=transform

  var transform = {
    noPrefill: ['transform'],
    supportedProperty: function supportedProperty(prop, style, options) {
      if (prop !== 'transform') return false;

      if (options.transform) {
        return prop;
      }

      return prefix.css + prop;
    }
  };

  // https://caniuse.com/#search=transition

  var transition = {
    noPrefill: ['transition'],
    supportedProperty: function supportedProperty(prop, style, options) {
      if (prop !== 'transition') return false;

      if (options.transition) {
        return prop;
      }

      return prefix.css + prop;
    }
  };

  // https://caniuse.com/#search=writing-mode

  var writingMode = {
    noPrefill: ['writing-mode'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'writing-mode') return false;

      if (prefix.js === 'Webkit' || prefix.js === 'ms') {
        return prefix.css + prop;
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=user-select

  var userSelect = {
    noPrefill: ['user-select'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'user-select') return false;

      if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
        return prefix.css + prop;
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=multicolumn
  // https://github.com/postcss/autoprefixer/issues/491
  // https://github.com/postcss/autoprefixer/issues/177

  var breakPropsOld = {
    supportedProperty: function supportedProperty(prop, style) {
      if (!/^break-/.test(prop)) return false;

      if (prefix.js === 'Webkit') {
        var jsProp = "WebkitColumn" + pascalize(prop);
        return jsProp in style ? prefix.css + "column-" + prop : false;
      }

      if (prefix.js === 'Moz') {
        var _jsProp = "page" + pascalize(prop);

        return _jsProp in style ? "page-" + prop : false;
      }

      return false;
    }
  };

  // See https://github.com/postcss/autoprefixer/issues/324.

  var inlineLogicalOld = {
    supportedProperty: function supportedProperty(prop, style) {
      if (!/^(border|margin|padding)-inline/.test(prop)) return false;
      if (prefix.js === 'Moz') return prop;
      var newProp = prop.replace('-inline', '');
      return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
    }
  };

  // Camelization is required because we can't test using.
  // CSS syntax for e.g. in FF.

  var unprefixed = {
    supportedProperty: function supportedProperty(prop, style) {
      return camelize(prop) in style ? prop : false;
    }
  };

  var prefixed = {
    supportedProperty: function supportedProperty(prop, style) {
      var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

      if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

      if (prop[0] === '-' && prop[1] === '-') return prop;
      if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

      if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
      return false;
    }
  };

  // https://caniuse.com/#search=scroll-snap

  var scrollSnap = {
    supportedProperty: function supportedProperty(prop) {
      if (prop.substring(0, 11) !== 'scroll-snap') return false;

      if (prefix.js === 'ms') {
        return "" + prefix.css + prop;
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=overscroll-behavior

  var overscrollBehavior = {
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'overscroll-behavior') return false;

      if (prefix.js === 'ms') {
        return prefix.css + "scroll-chaining";
      }

      return prop;
    }
  };

  var propMap = {
    'flex-grow': 'flex-positive',
    'flex-shrink': 'flex-negative',
    'flex-basis': 'flex-preferred-size',
    'justify-content': 'flex-pack',
    order: 'flex-order',
    'align-items': 'flex-align',
    'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

  }; // Support old flex spec from 2012.

  var flex2012 = {
    supportedProperty: function supportedProperty(prop, style) {
      var newProp = propMap[prop];
      if (!newProp) return false;
      return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
    }
  };

  var propMap$1 = {
    flex: 'box-flex',
    'flex-grow': 'box-flex',
    'flex-direction': ['box-orient', 'box-direction'],
    order: 'box-ordinal-group',
    'align-items': 'box-align',
    'flex-flow': ['box-orient', 'box-direction'],
    'justify-content': 'box-pack'
  };
  var propKeys = Object.keys(propMap$1);

  var prefixCss = function prefixCss(p) {
    return prefix.css + p;
  }; // Support old flex spec from 2009.


  var flex2009 = {
    supportedProperty: function supportedProperty(prop, style, _ref) {
      var multiple = _ref.multiple;

      if (propKeys.indexOf(prop) > -1) {
        var newProp = propMap$1[prop];

        if (!Array.isArray(newProp)) {
          return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
        }

        if (!multiple) return false;

        for (var i = 0; i < newProp.length; i++) {
          if (!(prefix.js + pascalize(newProp[0]) in style)) {
            return false;
          }
        }

        return newProp.map(prefixCss);
      }

      return false;
    }
  };

  // plugins = [
  //   ...plugins,
  //    breakPropsOld,
  //    inlineLogicalOld,
  //    unprefixed,
  //    prefixed,
  //    scrollSnap,
  //    flex2012,
  //    flex2009
  // ]
  // Plugins without 'noPrefill' value, going last.
  // 'flex-*' plugins should be at the bottom.
  // 'flex2009' going after 'flex2012'.
  // 'prefixed' going after 'unprefixed'

  var plugins$1 = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
  var propertyDetectors = plugins$1.filter(function (p) {
    return p.supportedProperty;
  }).map(function (p) {
    return p.supportedProperty;
  });
  var noPrefill = plugins$1.filter(function (p) {
    return p.noPrefill;
  }).reduce(function (a, p) {
    a.push.apply(a, _toConsumableArray(p.noPrefill));
    return a;
  }, []);

  var el;
  var cache$1 = {};

  if (isBrowser) {
    el = document.createElement('p'); // We test every property on vendor prefix requirement.
    // Once tested, result is cached. It gives us up to 70% perf boost.
    // http://jsperf.com/element-style-object-access-vs-plain-object
    //
    // Prefill cache with known css properties to reduce amount of
    // properties we need to feature test at runtime.
    // http://davidwalsh.name/vendor-prefix

    var computed = window.getComputedStyle(document.documentElement, '');

    for (var key$1 in computed) {
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(key$1)) cache$1[computed[key$1]] = computed[key$1];
    } // Properties that cannot be correctly detected using the
    // cache prefill method.


    noPrefill.forEach(function (x) {
      return delete cache$1[x];
    });
  }
  /**
   * Test if a property is supported, returns supported property with vendor
   * prefix if required. Returns `false` if not supported.
   *
   * @param {String} prop dash separated
   * @param {Object} [options]
   * @return {String|Boolean}
   * @api public
   */


  function supportedProperty(prop, options) {
    if (options === void 0) {
      options = {};
    }

    // For server-side rendering.
    if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

    if ( cache$1[prop] != null) {
      return cache$1[prop];
    } // Check if 'transition' or 'transform' natively supported in browser.


    if (prop === 'transition' || prop === 'transform') {
      options[prop] = prop in el.style;
    } // Find a plugin for current prefix property.


    for (var i = 0; i < propertyDetectors.length; i++) {
      cache$1[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

      if (cache$1[prop]) break;
    } // Reset styles for current property.
    // Firefox can even throw an error for invalid properties, e.g., "0".


    try {
      el.style[prop] = '';
    } catch (err) {
      return false;
    }

    return cache$1[prop];
  }

  var cache$1$1 = {};
  var transitionProperties = {
    transition: 1,
    'transition-property': 1,
    '-webkit-transition': 1,
    '-webkit-transition-property': 1
  };
  var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
  var el$1;
  /**
   * Returns prefixed value transition/transform if needed.
   *
   * @param {String} match
   * @param {String} p1
   * @param {String} p2
   * @return {String}
   * @api private
   */

  function prefixTransitionCallback(match, p1, p2) {
    if (p1 === 'var') return 'var';
    if (p1 === 'all') return 'all';
    if (p2 === 'all') return ', all';
    var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
    if (!prefixedValue) return p1 || p2;
    return prefixedValue;
  }

  if (isBrowser) el$1 = document.createElement('p');
  /**
   * Returns prefixed value if needed. Returns `false` if value is not supported.
   *
   * @param {String} property
   * @param {String} value
   * @return {String|Boolean}
   * @api public
   */

  function supportedValue(property, value) {
    // For server-side rendering.
    var prefixedValue = value;
    if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
    // We want only prefixable values here.
    // eslint-disable-next-line no-restricted-globals

    if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
      return prefixedValue;
    } // Create cache key for current value.


    var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

    if ( cache$1$1[cacheKey] != null) {
      return cache$1$1[cacheKey];
    } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


    try {
      // Test value as it is.
      el$1.style[property] = prefixedValue;
    } catch (err) {
      // Return false if value not supported.
      cache$1$1[cacheKey] = false;
      return false;
    } // If 'transition' or 'transition-property' property.


    if (transitionProperties[property]) {
      prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
    } else if (el$1.style[property] === '') {
      // Value with a vendor prefix.
      prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

      if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

      el$1.style[property] = prefixedValue; // Return false if value not supported.

      if (el$1.style[property] === '') {
        cache$1$1[cacheKey] = false;
        return false;
      }
    } // Reset styles for current property.


    el$1.style[property] = ''; // Write current value to cache.

    cache$1$1[cacheKey] = prefixedValue;
    return cache$1$1[cacheKey];
  }

  /**
   * Add vendor prefix to a property name when needed.
   *
   * @api public
   */

  function jssVendorPrefixer() {
    function onProcessRule(rule) {
      if (rule.type === 'keyframes') {
        var atRule = rule;
        atRule.at = supportedKeyframes(atRule.at);
      }
    }

    function prefixStyle(style) {
      for (var prop in style) {
        var value = style[prop];

        if (prop === 'fallbacks' && Array.isArray(value)) {
          style[prop] = value.map(prefixStyle);
          continue;
        }

        var changeProp = false;
        var supportedProp = supportedProperty(prop);
        if (supportedProp && supportedProp !== prop) changeProp = true;
        var changeValue = false;
        var supportedValue$$1 = supportedValue(supportedProp, toCssValue(value));
        if (supportedValue$$1 && supportedValue$$1 !== value) changeValue = true;

        if (changeProp || changeValue) {
          if (changeProp) delete style[prop];
          style[supportedProp || prop] = supportedValue$$1 || value;
        }
      }

      return style;
    }

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      return prefixStyle(style);
    }

    function onChangeValue(value, prop) {
      return supportedValue(prop, toCssValue(value)) || value;
    }

    return {
      onProcessRule: onProcessRule,
      onProcessStyle: onProcessStyle,
      onChangeValue: onChangeValue
    };
  }

  /**
   * Sort props by length.
   */
  function jssPropsSort() {
    var sort = function sort(prop0, prop1) {
      if (prop0.length === prop1.length) {
        return prop0 > prop1 ? 1 : -1;
      }

      return prop0.length - prop1.length;
    };

    return {
      onProcessStyle: function onProcessStyle(style, rule) {
        if (rule.type !== 'style') return style;
        var newStyle = {};
        var props = Object.keys(style).sort(sort);

        for (var i = 0; i < props.length; i++) {
          newStyle[props[i]] = style[props[i]];
        }

        return newStyle;
      }
    };
  }

  function jssPreset() {
    return {
      plugins: [functionPlugin(), jssGlobal(), jssNested(), camelCase(), defaultUnit(), // Disable the vendor prefixer server-side, it does nothing.
      // This way, we can get a performance boost.
      // In the documentation, we are using `autoprefixer` to solve this problem.
      typeof window === 'undefined' ? null : jssVendorPrefixer(), jssPropsSort()]
    };
  }

  function mergeClasses() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var baseClasses = options.baseClasses,
        newClasses = options.newClasses,
        Component = options.Component;

    if (!newClasses) {
      return baseClasses;
    }

    var nextClasses = _extends({}, baseClasses);

    Object.keys(newClasses).forEach(function (key) {

      if (newClasses[key]) {
        nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
      }
    });
    return nextClasses;
  }

  // Used https://github.com/thinkloop/multi-key-cache as inspiration
  var multiKeyStore = {
    set: function set(cache, key1, key2, value) {
      var subCache = cache.get(key1);

      if (!subCache) {
        subCache = new Map();
        cache.set(key1, subCache);
      }

      subCache.set(key2, value);
    },
    get: function get(cache, key1, key2) {
      var subCache = cache.get(key1);
      return subCache ? subCache.get(key2) : undefined;
    },
    delete: function _delete(cache, key1, key2) {
      var subCache = cache.get(key1);
      subCache.delete(key2);
    }
  };

  var ThemeContext = React__default.createContext(null);

  function useTheme() {
    return React__default.useContext(ThemeContext);
  }

  var jss = create(jssPreset()); // Use a singleton or the provided one by the context.
  //
  // The counter-based approach doesn't tolerate any mistake.
  // It's much safer to use the same counter everywhere.

  var generateClassName = createGenerateClassName(); // Exported for test purposes

  var sheetsManager = new Map();
  var defaultOptions = {
    disableGeneration: false,
    generateClassName: generateClassName,
    jss: jss,
    sheetsCache: null,
    sheetsManager: sheetsManager,
    sheetsRegistry: null
  };
  var StylesContext = React__default.createContext(defaultOptions);

  /* eslint-disable import/prefer-default-export */
  // Global index counter to preserve source order.
  // We create the style sheet during at the creation of the component,
  // children are handled after the parents, so the order of style elements would be parent->child.
  // It is a problem though when a parent passes a className
  // which needs to override any child's styles.
  // StyleSheet of the child has a higher specificity, because of the source order.
  // So our solution is to render sheets them in the reverse order child->sheet, so
  // that parent has a higher specificity.
  var indexCounter = -1e9;
  function increment() {
    indexCounter += 1;

    return indexCounter;
  }

  // We use the same empty object to ref count the styles that don't need a theme object.
  var noopTheme = {};

  function getStylesCreator(stylesOrCreator) {
    var themingEnabled = typeof stylesOrCreator === 'function';

    return {
      create: function create(theme, name) {
        var styles;

        try {
          styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
        } catch (err) {

          throw err;
        }

        if (!name || !theme.overrides || !theme.overrides[name]) {
          return styles;
        }

        var overrides = theme.overrides[name];

        var stylesWithOverrides = _extends({}, styles);

        Object.keys(overrides).forEach(function (key) {

          stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key], overrides[key]);
        });
        return stylesWithOverrides;
      },
      options: {}
    };
  }

  function getClasses(_ref, classes, Component) {
    var state = _ref.state,
        stylesOptions = _ref.stylesOptions;

    if (stylesOptions.disableGeneration) {
      return classes || {};
    }

    if (!state.cacheClasses) {
      state.cacheClasses = {
        // Cache for the finalized classes value.
        value: null,
        // Cache for the last used classes prop pointer.
        lastProp: null,
        // Cache for the last used rendered classes pointer.
        lastJSS: {}
      };
    } // Tracks if either the rendered classes or classes prop has changed,
    // requiring the generation of a new finalized classes object.


    var generate = false;

    if (state.classes !== state.cacheClasses.lastJSS) {
      state.cacheClasses.lastJSS = state.classes;
      generate = true;
    }

    if (classes !== state.cacheClasses.lastProp) {
      state.cacheClasses.lastProp = classes;
      generate = true;
    }

    if (generate) {
      state.cacheClasses.value = mergeClasses({
        baseClasses: state.cacheClasses.lastJSS,
        newClasses: classes,
        Component: Component
      });
    }

    return state.cacheClasses.value;
  }

  function attach(_ref2, props) {
    var state = _ref2.state,
        theme = _ref2.theme,
        stylesOptions = _ref2.stylesOptions,
        stylesCreator = _ref2.stylesCreator,
        name = _ref2.name;

    if (stylesOptions.disableGeneration) {
      return;
    }

    var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);

    if (!sheetManager) {
      sheetManager = {
        refs: 0,
        staticSheet: null,
        dynamicStyles: null
      };
      multiKeyStore.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
    }

    var options = _extends({}, stylesCreator.options, {}, stylesOptions, {
      theme: theme,
      flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
    });

    options.generateId = options.serverGenerateClassName || options.generateClassName;
    var sheetsRegistry = stylesOptions.sheetsRegistry;

    if (sheetManager.refs === 0) {
      var staticSheet;

      if (stylesOptions.sheetsCache) {
        staticSheet = multiKeyStore.get(stylesOptions.sheetsCache, stylesCreator, theme);
      }

      var styles = stylesCreator.create(theme, name);

      if (!staticSheet) {
        staticSheet = stylesOptions.jss.createStyleSheet(styles, _extends({
          link: false
        }, options));
        staticSheet.attach();

        if (stylesOptions.sheetsCache) {
          multiKeyStore.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
        }
      }

      if (sheetsRegistry) {
        sheetsRegistry.add(staticSheet);
      }

      sheetManager.staticSheet = staticSheet;
      sheetManager.dynamicStyles = getDynamicStyles(styles);
    }

    if (sheetManager.dynamicStyles) {
      var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends({
        link: true
      }, options));
      dynamicSheet.update(props);
      dynamicSheet.attach();
      state.dynamicSheet = dynamicSheet;
      state.classes = mergeClasses({
        baseClasses: sheetManager.staticSheet.classes,
        newClasses: dynamicSheet.classes
      });

      if (sheetsRegistry) {
        sheetsRegistry.add(dynamicSheet);
      }
    } else {
      state.classes = sheetManager.staticSheet.classes;
    }

    sheetManager.refs += 1;
  }

  function update(_ref3, props) {
    var state = _ref3.state;

    if (state.dynamicSheet) {
      state.dynamicSheet.update(props);
    }
  }

  function detach(_ref4) {
    var state = _ref4.state,
        theme = _ref4.theme,
        stylesOptions = _ref4.stylesOptions,
        stylesCreator = _ref4.stylesCreator;

    if (stylesOptions.disableGeneration) {
      return;
    }

    var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);
    sheetManager.refs -= 1;
    var sheetsRegistry = stylesOptions.sheetsRegistry;

    if (sheetManager.refs === 0) {
      multiKeyStore.delete(stylesOptions.sheetsManager, stylesCreator, theme);
      stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

      if (sheetsRegistry) {
        sheetsRegistry.remove(sheetManager.staticSheet);
      }
    }

    if (state.dynamicSheet) {
      stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

      if (sheetsRegistry) {
        sheetsRegistry.remove(state.dynamicSheet);
      }
    }
  }

  function useSynchronousEffect(func, values) {
    var key = React__default.useRef([]);
    var output; // Store "generation" key. Just returns a new object every time

    var currentKey = React__default.useMemo(function () {
      return {};
    }, values); // eslint-disable-line react-hooks/exhaustive-deps
    // "the first render", or "memo dropped the value"

    if (key.current !== currentKey) {
      key.current = currentKey;
      output = func();
    }

    React__default.useEffect(function () {
      return function () {
        if (output) {
          output();
        }
      };
    }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
    );
  }

  function makeStyles(stylesOrCreator) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var name = options.name,
        classNamePrefixOption = options.classNamePrefix,
        Component = options.Component,
        _options$defaultTheme = options.defaultTheme,
        defaultTheme = _options$defaultTheme === void 0 ? noopTheme : _options$defaultTheme,
        stylesOptions2 = _objectWithoutProperties(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

    var stylesCreator = getStylesCreator(stylesOrCreator);
    var classNamePrefix = name || classNamePrefixOption || 'makeStyles';
    stylesCreator.options = {
      index: increment(),
      name: name,
      meta: classNamePrefix,
      classNamePrefix: classNamePrefix
    };
    return function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var theme = useTheme() || defaultTheme;

      var stylesOptions = _extends({}, React__default.useContext(StylesContext), {}, stylesOptions2);

      var instance = React__default.useRef();
      var shouldUpdate = React__default.useRef();
      useSynchronousEffect(function () {
        var current = {
          name: name,
          state: {},
          stylesCreator: stylesCreator,
          stylesOptions: stylesOptions,
          theme: theme
        };
        attach(current, props);
        shouldUpdate.current = false;
        instance.current = current;
        return function () {
          detach(current);
        };
      }, [theme, stylesCreator]);
      React__default.useEffect(function () {
        if (shouldUpdate.current) {
          update(instance.current, props);
        }

        shouldUpdate.current = true;
      });
      return getClasses(instance.current, props.classes, Component);
    };
  }

  function mergeOuterLocalTheme(outerTheme, localTheme) {
    if (typeof localTheme === 'function') {
      var mergedTheme = localTheme(outerTheme);

      return mergedTheme;
    }

    return _extends({}, outerTheme, {}, localTheme);
  }
  /**
   * This component takes a `theme` prop.
   * It makes the `theme` available down the React tree thanks to React context.
   * This component should preferably be used at **the root of your component tree**.
   */


  function ThemeProvider(props) {
    var children = props.children,
        localTheme = props.theme;
    var outerTheme = useTheme();

    var theme = React__default.useMemo(function () {
      var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

      if (output != null) {
        output[nested] = outerTheme !== null;
      }

      return output;
    }, [localTheme, outerTheme]);
    return React__default.createElement(ThemeContext.Provider, {
      value: theme
    }, children);
  }

  // It does not modify the component passed to it;
  // instead, it returns a new component, with a `classes` property.

  var withStyles = function withStyles(stylesOrCreator) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function (Component) {
      var defaultTheme = options.defaultTheme,
          _options$withTheme = options.withTheme,
          withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
          name = options.name,
          stylesOptions = _objectWithoutProperties(options, ["defaultTheme", "withTheme", "name"]);

      var classNamePrefix = name;

      var useStyles = makeStyles(stylesOrCreator, _extends({
        defaultTheme: defaultTheme,
        Component: Component,
        name: name || Component.displayName,
        classNamePrefix: classNamePrefix
      }, stylesOptions));
      var WithStyles = React__default.forwardRef(function WithStyles(props, ref) {
        var classesProp = props.classes,
            innerRef = props.innerRef,
            other = _objectWithoutProperties(props, ["classes", "innerRef"]);

        var classes = useStyles(props);
        var theme;
        var more = other;

        if (typeof name === 'string' || withTheme) {
          // name and withTheme are invariant in the outer scope
          // eslint-disable-next-line react-hooks/rules-of-hooks
          theme = useTheme() || defaultTheme;

          if (name) {
            more = getThemeProps({
              theme: theme,
              name: name,
              props: other
            });
          } // Provide the theme to the wrapped component.
          // So we don't have to use the `withTheme()` Higher-order Component.


          if (withTheme && !more.theme) {
            more.theme = theme;
          }
        }

        return React__default.createElement(Component, _extends({
          ref: innerRef || ref,
          classes: classes
        }, more));
      });
      // the actual props Component might receive due to merging with defaultProps.
      // So copying it here would give us the same result in the wrapper as well.

      WithStyles.defaultProps = Component.defaultProps;

      hoistNonReactStatics_cjs(WithStyles, Component);

      return WithStyles;
    };
  };

  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

  function createBreakpoints(breakpoints) {
    var _breakpoints$values = breakpoints.values,
        values = _breakpoints$values === void 0 ? {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    } : _breakpoints$values,
        _breakpoints$unit = breakpoints.unit,
        unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
        _breakpoints$step = breakpoints.step,
        step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
        other = _objectWithoutProperties(breakpoints, ["values", "unit", "step"]);

    function up(key) {
      var value = typeof values[key] === 'number' ? values[key] : key;
      return "@media (min-width:".concat(value).concat(unit, ")");
    }

    function down(key) {
      var endIndex = keys.indexOf(key) + 1;
      var upperbound = values[keys[endIndex]];

      if (endIndex === keys.length) {
        // xl down applies to all sizes
        return up('xs');
      }

      var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
      return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
    }

    function between(start, end) {
      var endIndex = keys.indexOf(end) + 1;

      if (endIndex === keys.length) {
        return up(start);
      }

      return "@media (min-width:".concat(values[start]).concat(unit, ") and ") + "(max-width:".concat(values[keys[endIndex]] - step / 100).concat(unit, ")");
    }

    function only(key) {
      return between(key, key);
    }

    function width(key) {
      return values[key];
    }

    return _extends({
      keys: keys,
      values: values,
      up: up,
      down: down,
      between: between,
      only: only,
      width: width
    }, other);
  }

  function createMixins(breakpoints, spacing, mixins) {
    var _toolbar;

    return _extends({
      gutters: function gutters() {
        var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // To deprecate in v4.1
        //       warning(
        //         false,
        //         [
        //           'Material-UI: theme.mixins.gutters() is deprecated.',
        //           'You can use the source of the mixin directly:',
        //           `
        // paddingLeft: theme.spacing(2),
        // paddingRight: theme.spacing(2),
        // [theme.breakpoints.up('sm')]: {
        //   paddingLeft: theme.spacing(3),
        //   paddingRight: theme.spacing(3),
        // },
        // `,
        //         ].join('\n'),
        //       );
        return _extends({
          paddingLeft: spacing(2),
          paddingRight: spacing(2)
        }, styles, _defineProperty({}, breakpoints.up('sm'), _extends({
          paddingLeft: spacing(3),
          paddingRight: spacing(3)
        }, styles[breakpoints.up('sm')])));
      },
      toolbar: (_toolbar = {
        minHeight: 56
      }, _defineProperty(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
        minHeight: 48
      }), _defineProperty(_toolbar, breakpoints.up('sm'), {
        minHeight: 64
      }), _toolbar)
    }, mixins);
  }

  var common = {
    black: '#000',
    white: '#fff'
  };

  var grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161'
  };

  var indigo = {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e',
    A100: '#8c9eff',
    A200: '#536dfe',
    A400: '#3d5afe',
    A700: '#304ffe'
  };

  var pink = {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#f50057',
    A700: '#c51162'
  };

  var red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
  };

  var amber = {
    50: '#fff8e1',
    100: '#ffecb3',
    200: '#ffe082',
    300: '#ffd54f',
    400: '#ffca28',
    500: '#ffc107',
    600: '#ffb300',
    700: '#ffa000',
    800: '#ff8f00',
    900: '#ff6f00',
    A100: '#ffe57f',
    A200: '#ffd740',
    A400: '#ffc400',
    A700: '#ffab00'
  };

  var blue = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff'
  };

  var green = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'
  };

  /* eslint-disable no-use-before-define */

  /**
   * Returns a number whose value is limited to the given range.
   *
   * @param {number} value The value to be clamped
   * @param {number} min The lower boundary of the output range
   * @param {number} max The upper boundary of the output range
   * @returns {number} A number in the range [min, max]
   */
  function clamp(value) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    return Math.min(Math.max(min, value), max);
  }
  /**
   * Converts a color from CSS hex format to CSS rgb format.
   *
   * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
   * @returns {string} A CSS rgb color string
   */


  function hexToRgb(color) {
    color = color.substr(1);
    var re = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
    var colors = color.match(re);

    if (colors && colors[0].length === 1) {
      colors = colors.map(function (n) {
        return n + n;
      });
    }

    return colors ? "rgb(".concat(colors.map(function (n) {
      return parseInt(n, 16);
    }).join(', '), ")") : '';
  }
  /**
   * Converts a color from hsl format to rgb format.
   *
   * @param {string} color - HSL color values
   * @returns {string} rgb color values
   */

  function hslToRgb(color) {
    color = decomposeColor(color);
    var _color = color,
        values = _color.values;
    var h = values[0];
    var s = values[1] / 100;
    var l = values[2] / 100;
    var a = s * Math.min(l, 1 - l);

    var f = function f(n) {
      var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
      return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    };

    var type = 'rgb';
    var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

    if (color.type === 'hsla') {
      type += 'a';
      rgb.push(values[3]);
    }

    return recomposeColor({
      type: type,
      values: rgb
    });
  }
  /**
   * Returns an object with the type and values of a color.
   *
   * Note: Does not support rgb % values.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {object} - A MUI color object: {type: string, values: number[]}
   */

  function decomposeColor(color) {
    // Idempotent
    if (color.type) {
      return color;
    }

    if (color.charAt(0) === '#') {
      return decomposeColor(hexToRgb(color));
    }

    var marker = color.indexOf('(');
    var type = color.substring(0, marker);

    if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
      throw new Error(["Material-UI: unsupported `".concat(color, "` color."), 'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().'].join('\n'));
    }

    var values = color.substring(marker + 1, color.length - 1).split(',');
    values = values.map(function (value) {
      return parseFloat(value);
    });
    return {
      type: type,
      values: values
    };
  }
  /**
   * Converts a color object with type and values to a string.
   *
   * @param {object} color - Decomposed color
   * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
   * @param {array} color.values - [n,n,n] or [n,n,n,n]
   * @returns {string} A CSS color string
   */

  function recomposeColor(color) {
    var type = color.type;
    var values = color.values;

    if (type.indexOf('rgb') !== -1) {
      // Only convert the first 3 values to int (i.e. not alpha)
      values = values.map(function (n, i) {
        return i < 3 ? parseInt(n, 10) : n;
      });
    } else if (type.indexOf('hsl') !== -1) {
      values[1] = "".concat(values[1], "%");
      values[2] = "".concat(values[2], "%");
    }

    return "".concat(type, "(").concat(values.join(', '), ")");
  }
  /**
   * Calculates the contrast ratio between two colors.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   *
   * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} A contrast ratio value in the range 0 - 21.
   */

  function getContrastRatio(foreground, background) {
    var lumA = getLuminance(foreground);
    var lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  }
  /**
   * The relative brightness of any point in a color space,
   * normalized to 0 for darkest black and 1 for lightest white.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} The relative brightness of the color in the range 0 - 1
   */

  function getLuminance(color) {
    color = decomposeColor(color);
    var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
    rgb = rgb.map(function (val) {
      val /= 255; // normalized

      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    }); // Truncate at 3 digits

    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  }
  /**
   * Set the absolute transparency of a color.
   * Any existing alpha values are overwritten.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} value - value to set the alpha channel to in the range 0 -1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function fade(color, value) {
    color = decomposeColor(color);
    value = clamp(value);

    if (color.type === 'rgb' || color.type === 'hsl') {
      color.type += 'a';
    }

    color.values[3] = value;
    return recomposeColor(color);
  }
  /**
   * Darkens a color.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function darken(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] *= 1 - coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
      for (var i = 0; i < 3; i += 1) {
        color.values[i] *= 1 - coefficient;
      }
    }

    return recomposeColor(color);
  }
  /**
   * Lightens a color.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function lighten(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
      for (var i = 0; i < 3; i += 1) {
        color.values[i] += (255 - color.values[i]) * coefficient;
      }
    }

    return recomposeColor(color);
  }

  var light = {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.54)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)',
      // Text hints.
      hint: 'rgba(0, 0, 0, 0.38)'
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common.white,
      default: grey[50]
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.14)',
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)'
    }
  };
  var dark = {
    text: {
      primary: common.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: grey[800],
      default: '#303030'
    },
    action: {
      active: common.white,
      hover: 'rgba(255, 255, 255, 0.1)',
      hoverOpacity: 0.1,
      selected: 'rgba(255, 255, 255, 0.2)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)'
    }
  };

  function addLightOrDark(intent, direction, shade, tonalOffset) {
    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === 'light') {
        intent.light = lighten(intent.main, tonalOffset);
      } else if (direction === 'dark') {
        intent.dark = darken(intent.main, tonalOffset * 1.5);
      }
    }
  }

  function createPalette(palette) {
    var _palette$primary = palette.primary,
        primary = _palette$primary === void 0 ? {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700]
    } : _palette$primary,
        _palette$secondary = palette.secondary,
        secondary = _palette$secondary === void 0 ? {
      light: pink.A200,
      main: pink.A400,
      dark: pink.A700
    } : _palette$secondary,
        _palette$error = palette.error,
        error = _palette$error === void 0 ? {
      light: red[300],
      main: red[500],
      dark: red[700]
    } : _palette$error,
        _palette$warning = palette.warning,
        warning = _palette$warning === void 0 ? {
      light: amber[300],
      main: amber[500],
      dark: amber[700]
    } : _palette$warning,
        _palette$info = palette.info,
        info = _palette$info === void 0 ? {
      light: blue[300],
      main: blue[500],
      dark: blue[700]
    } : _palette$info,
        _palette$success = palette.success,
        success = _palette$success === void 0 ? {
      light: green[300],
      main: green[500],
      dark: green[700]
    } : _palette$success,
        _palette$type = palette.type,
        type = _palette$type === void 0 ? 'light' : _palette$type,
        _palette$contrastThre = palette.contrastThreshold,
        contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
        _palette$tonalOffset = palette.tonalOffset,
        tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
        other = _objectWithoutProperties(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


    function getContrastText(background) {
      if (!background) {
        throw new TypeError("Material-UI: missing background argument in getContrastText(".concat(background, ")."));
      }

      var contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

      return contrastText;
    }

    function augmentColor(color) {
      var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
      var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
      var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
      color = _extends({}, color);

      if (!color.main && color[mainShade]) {
        color.main = color[mainShade];
      }

      addLightOrDark(color, 'light', lightShade, tonalOffset);
      addLightOrDark(color, 'dark', darkShade, tonalOffset);

      if (!color.contrastText) {
        color.contrastText = getContrastText(color.main);
      }

      return color;
    }

    var types = {
      dark: dark,
      light: light
    };

    var paletteOutput = deepmerge(_extends({
      // A collection of common colors.
      common: common,
      // The palette type, can be light or dark.
      type: type,
      // The colors used to represent primary interface elements for a user.
      primary: augmentColor(primary),
      // The colors used to represent secondary interface elements for a user.
      secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
      // The colors used to represent interface elements that the user should be made aware of.
      error: augmentColor(error),
      // The colors used to represent potentially dangerous actions or important messages.
      warning: augmentColor(warning),
      // The colors used to present information to the user that is neutral and not necessarily important.
      info: augmentColor(info),
      // The colors used to indicate the successful completion of an action that user triggered.
      success: augmentColor(success),
      // The grey colors.
      grey: grey,
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: contrastThreshold,
      // Takes a background color and returns the text color that maximizes the contrast.
      getContrastText: getContrastText,
      // Generate a rich color object.
      augmentColor: augmentColor,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: tonalOffset
    }, types[type]), other);
    return paletteOutput;
  }

  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }

  var caseAllCaps = {
    textTransform: 'uppercase'
  };
  var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
  /**
   * @see @link{https://material.io/design/typography/the-type-system.html}
   * @see @link{https://material.io/design/typography/understanding-typography.html}
   */

  function createTypography(palette, typography) {
    var _ref = typeof typography === 'function' ? typography(palette) : typography,
        _ref$fontFamily = _ref.fontFamily,
        fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
        _ref$fontSize = _ref.fontSize,
        fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
        _ref$fontWeightLight = _ref.fontWeightLight,
        fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
        _ref$fontWeightRegula = _ref.fontWeightRegular,
        fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
        _ref$fontWeightMedium = _ref.fontWeightMedium,
        fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
        _ref$fontWeightBold = _ref.fontWeightBold,
        fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
        _ref$htmlFontSize = _ref.htmlFontSize,
        htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
        allVariants = _ref.allVariants,
        pxToRem2 = _ref.pxToRem,
        other = _objectWithoutProperties(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

    var coef = fontSize / 14;

    var pxToRem = pxToRem2 || function (size) {
      return "".concat(size / htmlFontSize * coef, "rem");
    };

    var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
      return _extends({
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        fontSize: pxToRem(size),
        // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
        lineHeight: lineHeight
      }, fontFamily === defaultFontFamily ? {
        letterSpacing: "".concat(round(letterSpacing / size), "em")
      } : {}, {}, casing, {}, allVariants);
    };

    var variants = {
      h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
      h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
      h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
      h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
      h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
      h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
      subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
      subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
      body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
      body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
      button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
      caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
      overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
    };
    return deepmerge(_extends({
      htmlFontSize: htmlFontSize,
      pxToRem: pxToRem,
      round: round,
      // TODO To remove in v5?
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeightLight: fontWeightLight,
      fontWeightRegular: fontWeightRegular,
      fontWeightMedium: fontWeightMedium,
      fontWeightBold: fontWeightBold
    }, variants), other, {
      clone: false // No need to clone deep

    });
  }

  var shadowKeyUmbraOpacity = 0.2;
  var shadowKeyPenumbraOpacity = 0.14;
  var shadowAmbientShadowOpacity = 0.12;

  function createShadow() {
    return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
  } // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


  var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

  var shape = {
    borderRadius: 4
  };

  function createSpacing() {
    var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

    // Already transformed.
    if (spacingInput.mui) {
      return spacingInput;
    } // All components align to an 8dp square baseline grid for mobile, tablet, and desktop.
    // https://material.io/design/layout/understanding-layout.html#pixel-density


    var transform;

    if (typeof spacingInput === 'function') {
      transform = spacingInput;
    } else {

      transform = function transform(factor) {

        return spacingInput * factor;
      };
    }

    var spacing = function spacing() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length === 0) {
        return transform(1);
      }

      if (args.length === 1) {
        return transform(args[0]);
      }

      return args.map(function (factor) {
        var output = transform(factor);
        return typeof output === 'number' ? "".concat(output, "px") : output;
      }).join(' ');
    }; // Backward compatibility, to remove in v5.


    Object.defineProperty(spacing, 'unit', {
      get: function get() {

        return spacingInput;
      }
    });
    spacing.mui = true;
    return spacing;
  }

  // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
  // to learn the context in which each easing should be used.
  var easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  }; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
  // to learn when use what timing

  var duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
  };
  var formatMs = function formatMs(milliseconds) {
    return "".concat(Math.round(milliseconds), "ms");
  };
  /**
   * @param {string|Array} props
   * @param {object} param
   * @param {string} param.prop
   * @param {number} param.duration
   * @param {string} param.easing
   * @param {number} param.delay
   */

  var transitions = {
    easing: easing,
    duration: duration,
    create: function create() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _options$duration = options.duration,
          durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
          _options$easing = options.easing,
          easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
          _options$delay = options.delay,
          delay = _options$delay === void 0 ? 0 : _options$delay,
          other = _objectWithoutProperties(options, ["duration", "easing", "delay"]);

      return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
        return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
      }).join(',');
    },
    getAutoHeightDuration: function getAutoHeightDuration(height) {
      if (!height) {
        return 0;
      }

      var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

      return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
    }
  };

  // We need to centralize the zIndex definitions as they work
  // like global values in the browser.
  var zIndex = {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };

  function createMuiTheme() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _options$breakpoints = options.breakpoints,
        breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
        _options$mixins = options.mixins,
        mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
        _options$palette = options.palette,
        paletteInput = _options$palette === void 0 ? {} : _options$palette,
        spacingInput = options.spacing,
        _options$typography = options.typography,
        typographyInput = _options$typography === void 0 ? {} : _options$typography,
        other = _objectWithoutProperties(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

    var palette = createPalette(paletteInput);
    var breakpoints = createBreakpoints(breakpointsInput);
    var spacing = createSpacing(spacingInput);
    var muiTheme = deepmerge({
      breakpoints: breakpoints,
      direction: 'ltr',
      mixins: createMixins(breakpoints, spacing, mixinsInput),
      overrides: {},
      // Inject custom styles
      palette: palette,
      props: {},
      // Provide default props
      shadows: shadows,
      typography: createTypography(palette, typographyInput),
      spacing: spacing,
      shape: shape,
      transitions: transitions,
      zIndex: zIndex
    }, other);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    muiTheme = args.reduce(function (acc, argument) {
      return deepmerge(acc, argument);
    }, muiTheme);

    return muiTheme;
  }

  var defaultTheme = createMuiTheme();

  function withStyles$1(stylesOrCreator, options) {
    return withStyles(stylesOrCreator, _extends({
      defaultTheme: defaultTheme
    }, options));
  }

  // TODO: Make it private only in v5
  function setRef(ref, value) {
    if (typeof ref === 'function') {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  }

  function useForkRef(refA, refB) {
    /**
     * This will create a new function if the ref props change and are defined.
     * This means react will call the old forkRef with `null` and the new forkRef
     * with the ref. Cleanup naturally emerges from this behavior
     */
    return React__default.useMemo(function () {
      if (refA == null && refB == null) {
        return null;
      }

      return function (refValue) {
        setRef(refA, refValue);
        setRef(refB, refValue);
      };
    }, [refA, refB]);
  }

  var useEnhancedEffect = typeof window !== 'undefined' ? React__default.useLayoutEffect : React__default.useEffect;
  /**
   * https://github.com/facebook/react/issues/14099#issuecomment-440013892
   *
   * @param {function} fn
   */

  function useEventCallback(fn) {
    var ref = React__default.useRef(fn);
    useEnhancedEffect(function () {
      ref.current = fn;
    });
    return React__default.useCallback(function () {
      return (ref.current).apply(void 0, arguments);
    }, []);
  }

  var useEnhancedEffect$1 = typeof window !== 'undefined' && 'production' !== 'test' ? React__default.useLayoutEffect : React__default.useEffect;
  /**
   * NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
   *
   * This component can be useful in a variety of situations:
   * - Escape hatch for broken dependencies not supporting SSR.
   * - Improve the time-to-first paint on the client by only rendering above the fold.
   * - Reduce the rendering time on the server.
   * - Under too heavy server load, you can turn on service degradation.
   */

  function NoSsr(props) {
    var children = props.children,
        _props$defer = props.defer,
        defer = _props$defer === void 0 ? false : _props$defer,
        _props$fallback = props.fallback,
        fallback = _props$fallback === void 0 ? null : _props$fallback;

    var _React$useState = React__default.useState(false),
        mountedState = _React$useState[0],
        setMountedState = _React$useState[1];

    useEnhancedEffect$1(function () {
      if (!defer) {
        setMountedState(true);
      }
    }, [defer]);
    React__default.useEffect(function () {
      if (defer) {
        setMountedState(true);
      }
    }, [defer]); // We need the Fragment here to force react-docgen to recognise NoSsr as a component.

    return React__default.createElement(React__default.Fragment, null, mountedState ? children : fallback);
  }

  // based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} node
   * @return {boolean}
   */

  function focusTriggersKeyboardModality(node) {
    var type = node.type,
        tagName = node.tagName;

    if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !node.readOnly) {
      return true;
    }

    if (node.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Keep track of our keyboard modality state with `hadKeyboardEvent`.
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * @param {KeyboardEvent} event
   */


  function handleKeyDown(event) {
    if (event.metaKey || event.altKey || event.ctrlKey) {
      return;
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   */


  function handlePointerDown() {
    hadKeyboardEvent = false;
  }

  function handleVisibilityChange() {
    if (this.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
    }
  }

  function prepare(doc) {
    doc.addEventListener('keydown', handleKeyDown, true);
    doc.addEventListener('mousedown', handlePointerDown, true);
    doc.addEventListener('pointerdown', handlePointerDown, true);
    doc.addEventListener('touchstart', handlePointerDown, true);
    doc.addEventListener('visibilitychange', handleVisibilityChange, true);
  }

  function isFocusVisible(event) {
    var target = event.target;

    try {
      return target.matches(':focus-visible');
    } catch (error) {} // browsers not implementing :focus-visible will throw a SyntaxError
    // we use our own heuristic for those browsers
    // rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
    // no need for validFocusTarget check. the user does that by attaching it to
    // focusable events only


    return hadKeyboardEvent || focusTriggersKeyboardModality(target);
  }
  /**
   * Should be called if a blur event is fired on a focus-visible element
   */


  function handleBlurVisible() {
    // To detect a tab/window switch, we look for a blur event followed
    // rapidly by a visibility change.
    // If we don't see a visibility change within 100ms, it's probably a
    // regular focus change.
    hadFocusVisibleRecently = true;
    window.clearTimeout(hadFocusVisibleRecentlyTimeout);
    hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
      hadFocusVisibleRecently = false;
    }, 100);
  }

  function useIsFocusVisible() {
    var ref = React__default.useCallback(function (instance) {
      var node = ReactDOM__default.findDOMNode(instance);

      if (node != null) {
        prepare(node.ownerDocument);
      }
    }, []);
    return {
      isFocusVisible: isFocusVisible,
      onBlurVisible: handleBlurVisible,
      ref: ref
    };
  }

  var TransitionGroupContext = React__default.createContext(null);

  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */

  function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
      return mapFn && React.isValidElement(child) ? mapFn(child) : child;
    };

    var result = Object.create(null);
    if (children) React.Children.map(children, function (c) {
      return c;
    }).forEach(function (child) {
      // run the map function here instead so that the key is the computed one
      result[child.key] = mapper(child);
    });
    return result;
  }
  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */

  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list


    var nextKeysPending = Object.create(null);
    var pendingKeys = [];

    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i;
    var childMapping = {};

    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }

      childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`


    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }

  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }

  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function (child) {
      return React.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, 'appear', props),
        enter: getProp(child, 'enter', props),
        exit: getProp(child, 'exit', props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function (key) {
      var child = children[key];
      if (!React.isValidElement(child)) return;
      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;
      var prevChild = prevChildMapping[key];
      var isLeaving = React.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        // item is old (exiting)
        // console.log('leaving', key)
        children[key] = React.cloneElement(child, {
          in: false
        });
      } else if (hasNext && hasPrev && React.isValidElement(prevChild)) {
        // item hasn't changed transition states
        // copy over the last transition props;
        // console.log('unchanged', key)
        children[key] = React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      }
    });
    return children;
  }

  var values = Object.values || function (obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };

  var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
      return child;
    }
    /**
     * The `<TransitionGroup>` component manages a set of transition components
     * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
     * components, `<TransitionGroup>` is a state machine for managing the mounting
     * and unmounting of components over time.
     *
     * Consider the example below. As items are removed or added to the TodoList the
     * `in` prop is toggled automatically by the `<TransitionGroup>`.
     *
     * Note that `<TransitionGroup>`  does not define any animation behavior!
     * Exactly _how_ a list item animates is up to the individual transition
     * component. This means you can mix and match animations across different list
     * items.
     */

  };

  var TransitionGroup =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(TransitionGroup, _React$Component);

    function TransitionGroup(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;

      var handleExited = _this.handleExited.bind(_assertThisInitialized$1(_assertThisInitialized$1(_this))); // Initial children should all be entering, dependent on appear


      _this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: handleExited,
        firstRender: true
      };
      return _this;
    }

    var _proto = TransitionGroup.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };

    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children,
          handleExited = _ref.handleExited,
          firstRender = _ref.firstRender;
      return {
        children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    };

    _proto.handleExited = function handleExited(child, node) {
      var currentChildMapping = getChildMapping(this.props.children);
      if (child.key in currentChildMapping) return;

      if (child.props.onExited) {
        child.props.onExited(node);
      }

      if (this.mounted) {
        this.setState(function (state) {
          var children = _extends({}, state.children);

          delete children[child.key];
          return {
            children: children
          };
        });
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          Component = _this$props.component,
          childFactory = _this$props.childFactory,
          props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

      var contextValue = this.state.contextValue;
      var children = values(this.state.children).map(childFactory);
      delete props.appear;
      delete props.enter;
      delete props.exit;

      if (Component === null) {
        return React__default.createElement(TransitionGroupContext.Provider, {
          value: contextValue
        }, children);
      }

      return React__default.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, React__default.createElement(Component, props, children));
    };

    return TransitionGroup;
  }(React__default.Component);

  TransitionGroup.propTypes =  {};
  TransitionGroup.defaultProps = defaultProps;

  var useEnhancedEffect$2 = typeof window === 'undefined' ? React__default.useEffect : React__default.useLayoutEffect;
  /**
   * @ignore - internal component.
   */

  function Ripple(props) {
    var classes = props.classes,
        _props$pulsate = props.pulsate,
        pulsate = _props$pulsate === void 0 ? false : _props$pulsate,
        rippleX = props.rippleX,
        rippleY = props.rippleY,
        rippleSize = props.rippleSize,
        inProp = props.in,
        _props$onExited = props.onExited,
        onExited = _props$onExited === void 0 ? function () {} : _props$onExited,
        timeout = props.timeout;

    var _React$useState = React__default.useState(false),
        leaving = _React$useState[0],
        setLeaving = _React$useState[1];

    var rippleClassName = clsx(classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
    var rippleStyles = {
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX
    };
    var childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
    var handleExited = useEventCallback(onExited); // Ripple is used for user feedback (e.g. click or press) so we want to apply styles with the highest priority

    useEnhancedEffect$2(function () {
      if (!inProp) {
        // react-transition-group#onExit
        setLeaving(true); // react-transition-group#onExited

        var timeoutId = setTimeout(handleExited, timeout);
        return function () {
          clearTimeout(timeoutId);
        };
      }

      return undefined;
    }, [handleExited, inProp, timeout]);
    return React__default.createElement("span", {
      className: rippleClassName,
      style: rippleStyles
    }, React__default.createElement("span", {
      className: childClassName
    }));
  }

  var DURATION = 550;
  var DELAY_RIPPLE = 80;
  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        overflow: 'hidden',
        pointerEvents: 'none',
        position: 'absolute',
        zIndex: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: 'inherit'
      },

      /* Styles applied to the internal `Ripple` components `ripple` class. */
      ripple: {
        opacity: 0,
        position: 'absolute'
      },

      /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
      rippleVisible: {
        opacity: 0.3,
        transform: 'scale(1)',
        animation: "$enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
      },

      /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
      ripplePulsate: {
        animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
      },

      /* Styles applied to the internal `Ripple` components `child` class. */
      child: {
        opacity: 1,
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: 'currentColor'
      },

      /* Styles applied to the internal `Ripple` components `childLeaving` class. */
      childLeaving: {
        opacity: 0,
        animation: "$exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
      },

      /* Styles applied to the internal `Ripple` components `childPulsate` class. */
      childPulsate: {
        position: 'absolute',
        left: 0,
        top: 0,
        animation: "$pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
      },
      '@keyframes enter': {
        '0%': {
          transform: 'scale(0)',
          opacity: 0.1
        },
        '100%': {
          transform: 'scale(1)',
          opacity: 0.3
        }
      },
      '@keyframes exit': {
        '0%': {
          opacity: 1
        },
        '100%': {
          opacity: 0
        }
      },
      '@keyframes pulsate': {
        '0%': {
          transform: 'scale(1)'
        },
        '50%': {
          transform: 'scale(0.92)'
        },
        '100%': {
          transform: 'scale(1)'
        }
      }
    };
  };
  /**
   * @ignore - internal component.
   *
   * TODO v5: Make private
   */

  var TouchRipple = React__default.forwardRef(function TouchRipple(props, ref) {
    var _props$center = props.center,
        centerProp = _props$center === void 0 ? false : _props$center,
        classes = props.classes,
        className = props.className,
        other = _objectWithoutProperties(props, ["center", "classes", "className"]);

    var _React$useState = React__default.useState([]),
        ripples = _React$useState[0],
        setRipples = _React$useState[1];

    var nextKey = React__default.useRef(0);
    var rippleCallback = React__default.useRef(null);
    React__default.useEffect(function () {
      if (rippleCallback.current) {
        rippleCallback.current();
        rippleCallback.current = null;
      }
    }, [ripples]); // Used to filter out mouse emulated events on mobile.

    var ignoringMouseDown = React__default.useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
    // We don't want to display the ripple for touch scroll events.

    var startTimer = React__default.useRef(null); // This is the hook called once the previous timeout is ready.

    var startTimerCommit = React__default.useRef(null);
    var container = React__default.useRef(null);
    React__default.useEffect(function () {
      return function () {
        clearTimeout(startTimer.current);
      };
    }, []);
    var startCommit = React__default.useCallback(function (params) {
      var pulsate = params.pulsate,
          rippleX = params.rippleX,
          rippleY = params.rippleY,
          rippleSize = params.rippleSize,
          cb = params.cb;
      setRipples(function (oldRipples) {
        return [].concat(_toConsumableArray(oldRipples), [React__default.createElement(Ripple, {
          key: nextKey.current,
          classes: classes,
          timeout: DURATION,
          pulsate: pulsate,
          rippleX: rippleX,
          rippleY: rippleY,
          rippleSize: rippleSize
        })]);
      });
      nextKey.current += 1;
      rippleCallback.current = cb;
    }, [classes]);
    var start = React__default.useCallback(function () {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 ? arguments[2] : undefined;
      var _options$pulsate = options.pulsate,
          pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
          _options$center = options.center,
          center = _options$center === void 0 ? centerProp || options.pulsate : _options$center,
          _options$fakeElement = options.fakeElement,
          fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

      if (event.type === 'mousedown' && ignoringMouseDown.current) {
        ignoringMouseDown.current = false;
        return;
      }

      if (event.type === 'touchstart') {
        ignoringMouseDown.current = true;
      }

      var element = fakeElement ? null : container.current;
      var rect = element ? element.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      }; // Get the size of the ripple

      var rippleX;
      var rippleY;
      var rippleSize;

      if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
        var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }

      if (center) {
        rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

        if (rippleSize % 2 === 0) {
          rippleSize += 1;
        }
      } else {
        var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
      } // Touche devices


      if (event.touches) {
        // Prepare the ripple effect.
        startTimerCommit.current = function () {
          startCommit({
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize,
            cb: cb
          });
        }; // Delay the execution of the ripple effect.


        startTimer.current = setTimeout(function () {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      } else {
        startCommit({
          pulsate: pulsate,
          rippleX: rippleX,
          rippleY: rippleY,
          rippleSize: rippleSize,
          cb: cb
        });
      }
    }, [centerProp, startCommit]);
    var pulsate = React__default.useCallback(function () {
      start({}, {
        pulsate: true
      });
    }, [start]);
    var stop = React__default.useCallback(function (event, cb) {
      clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
      // We still want to show ripple effect.

      if (event.type === 'touchend' && startTimerCommit.current) {
        event.persist();
        startTimerCommit.current();
        startTimerCommit.current = null;
        startTimer.current = setTimeout(function () {
          stop(event, cb);
        });
        return;
      }

      startTimerCommit.current = null;
      setRipples(function (oldRipples) {
        if (oldRipples.length > 0) {
          return oldRipples.slice(1);
        }

        return oldRipples;
      });
      rippleCallback.current = cb;
    }, []);
    React__default.useImperativeHandle(ref, function () {
      return {
        pulsate: pulsate,
        start: start,
        stop: stop
      };
    }, [pulsate, start, stop]);
    return React__default.createElement("span", _extends({
      className: clsx(classes.root, className),
      ref: container
    }, other), React__default.createElement(TransitionGroup, {
      component: null,
      exit: true
    }, ripples));
  }); // TODO cleanup after https://github.com/reactjs/react-docgen/pull/378 is released

  function withMuiName(Component) {
    Component.muiName = 'MuiTouchRipple';
    return Component;
  }
  var TouchRipple$1 = withStyles$1(styles, {
    flip: false,
    name: 'MuiTouchRipple'
  })(withMuiName(React__default.memo(TouchRipple)));

  var styles$1 = {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      WebkitTapHighlightColor: 'transparent',
      backgroundColor: 'transparent',
      // Reset default value
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      border: 0,
      margin: 0,
      // Remove the margin in Safari
      borderRadius: 0,
      padding: 0,
      // Remove the padding in Firefox
      cursor: 'pointer',
      userSelect: 'none',
      verticalAlign: 'middle',
      '-moz-appearance': 'none',
      // Reset
      '-webkit-appearance': 'none',
      // Reset
      textDecoration: 'none',
      // So we take precedent over the style of a native <a /> element.
      color: 'inherit',
      '&::-moz-focus-inner': {
        borderStyle: 'none' // Remove Firefox dotted outline.

      },
      '&$disabled': {
        pointerEvents: 'none',
        // Disable link interactions
        cursor: 'default'
      }
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if keyboard focused. */
    focusVisible: {}
  };
  /**
   * `ButtonBase` contains as few styles as possible.
   * It aims to be a simple building block for creating a button.
   * It contains a load of style reset and some focus/ripple logic.
   */

  var ButtonBase = React__default.forwardRef(function ButtonBase(props, ref) {
    var action = props.action,
        buttonRefProp = props.buttonRef,
        _props$centerRipple = props.centerRipple,
        centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple,
        children = props.children,
        classes = props.classes,
        className = props.className,
        _props$component = props.component,
        component = _props$component === void 0 ? 'button' : _props$component,
        _props$disabled = props.disabled,
        disabled = _props$disabled === void 0 ? false : _props$disabled,
        _props$disableRipple = props.disableRipple,
        disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple,
        _props$disableTouchRi = props.disableTouchRipple,
        disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi,
        _props$focusRipple = props.focusRipple,
        focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple,
        focusVisibleClassName = props.focusVisibleClassName,
        onBlur = props.onBlur,
        onClick = props.onClick,
        onFocus = props.onFocus,
        onFocusVisible = props.onFocusVisible,
        onKeyDown = props.onKeyDown,
        onKeyUp = props.onKeyUp,
        onMouseDown = props.onMouseDown,
        onMouseLeave = props.onMouseLeave,
        onMouseUp = props.onMouseUp,
        onTouchEnd = props.onTouchEnd,
        onTouchMove = props.onTouchMove,
        onTouchStart = props.onTouchStart,
        onDragLeave = props.onDragLeave,
        _props$tabIndex = props.tabIndex,
        tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
        TouchRippleProps = props.TouchRippleProps,
        _props$type = props.type,
        type = _props$type === void 0 ? 'button' : _props$type,
        other = _objectWithoutProperties(props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);

    var buttonRef = React__default.useRef(null);

    function getButtonNode() {
      // #StrictMode ready
      return ReactDOM__default.findDOMNode(buttonRef.current);
    }

    var rippleRef = React__default.useRef(null);

    var _React$useState = React__default.useState(false),
        focusVisible = _React$useState[0],
        setFocusVisible = _React$useState[1];

    if (disabled && focusVisible) {
      setFocusVisible(false);
    }

    var _useIsFocusVisible = useIsFocusVisible(),
        isFocusVisible = _useIsFocusVisible.isFocusVisible,
        onBlurVisible = _useIsFocusVisible.onBlurVisible,
        focusVisibleRef = _useIsFocusVisible.ref;

    React__default.useImperativeHandle(action, function () {
      return {
        focusVisible: function focusVisible() {
          setFocusVisible(true);
          buttonRef.current.focus();
        }
      };
    }, []);
    React__default.useEffect(function () {
      if (focusVisible && focusRipple && !disableRipple) {
        rippleRef.current.pulsate();
      }
    }, [disableRipple, focusRipple, focusVisible]);

    function useRippleHandler(rippleAction, eventCallback) {
      var skipRippleAction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : disableTouchRipple;
      return useEventCallback(function (event) {
        if (eventCallback) {
          eventCallback(event);
        }

        var ignore = skipRippleAction;

        if (!ignore && rippleRef.current) {
          rippleRef.current[rippleAction](event);
        }

        return true;
      });
    }

    var handleMouseDown = useRippleHandler('start', onMouseDown);
    var handleDragLeave = useRippleHandler('stop', onDragLeave);
    var handleMouseUp = useRippleHandler('stop', onMouseUp);
    var handleMouseLeave = useRippleHandler('stop', function (event) {
      if (focusVisible) {
        event.preventDefault();
      }

      if (onMouseLeave) {
        onMouseLeave(event);
      }
    });
    var handleTouchStart = useRippleHandler('start', onTouchStart);
    var handleTouchEnd = useRippleHandler('stop', onTouchEnd);
    var handleTouchMove = useRippleHandler('stop', onTouchMove);
    var handleBlur = useRippleHandler('stop', function (event) {
      if (focusVisible) {
        onBlurVisible(event);
        setFocusVisible(false);
      }

      if (onBlur) {
        onBlur(event);
      }
    }, false);
    var handleFocus = useEventCallback(function (event) {
      if (disabled) {
        return;
      } // Fix for https://github.com/facebook/react/issues/7769


      if (!buttonRef.current) {
        buttonRef.current = event.currentTarget;
      }

      if (isFocusVisible(event)) {
        setFocusVisible(true);

        if (onFocusVisible) {
          onFocusVisible(event);
        }
      }

      if (onFocus) {
        onFocus(event);
      }
    });

    var isNonNativeButton = function isNonNativeButton() {
      var button = getButtonNode();
      return component && component !== 'button' && !(button.tagName === 'A' && button.href);
    };
    /**
     * IE 11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
     */


    var keydownRef = React__default.useRef(false);
    var handleKeyDown = useEventCallback(function (event) {
      // Check if key is already down to avoid repeats being counted as multiple activations
      if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
        keydownRef.current = true;
        event.persist();
        rippleRef.current.stop(event, function () {
          rippleRef.current.start(event);
        });
      }

      if (onKeyDown) {
        onKeyDown(event);
      } // Keyboard accessibility for non interactive elements


      if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter') {
        event.preventDefault();

        if (onClick) {
          onClick(event);
        }
      }
    });
    var handleKeyUp = useEventCallback(function (event) {
      // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
      // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
      if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
        keydownRef.current = false;
        event.persist();
        rippleRef.current.stop(event, function () {
          rippleRef.current.pulsate(event);
        });
      }

      if (onKeyUp) {
        onKeyUp(event);
      } // Keyboard accessibility for non interactive elements


      if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
        event.preventDefault();

        if (onClick) {
          onClick(event);
        }
      }
    });
    var ComponentProp = component;

    if (ComponentProp === 'button' && other.href) {
      ComponentProp = 'a';
    }

    var buttonProps = {};

    if (ComponentProp === 'button') {
      buttonProps.type = type;
      buttonProps.disabled = disabled;
    } else {
      if (ComponentProp !== 'a' || !other.href) {
        buttonProps.role = 'button';
      }

      buttonProps['aria-disabled'] = disabled;
    }

    var handleUserRef = useForkRef(buttonRefProp, ref);
    var handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
    var handleRef = useForkRef(handleUserRef, handleOwnRef);
    return React__default.createElement(ComponentProp, _extends({
      className: clsx(classes.root, className, focusVisible && [classes.focusVisible, focusVisibleClassName], disabled && classes.disabled),
      onBlur: handleBlur,
      onClick: onClick,
      onFocus: handleFocus,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeave,
      onMouseUp: handleMouseUp,
      onDragLeave: handleDragLeave,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
      onTouchStart: handleTouchStart,
      ref: handleRef,
      tabIndex: disabled ? -1 : tabIndex
    }, buttonProps, other), children, !disableRipple && !disabled ? React__default.createElement(NoSsr, null, React__default.createElement(TouchRipple$1, _extends({
      ref: rippleRef,
      center: centerRipple
    }, TouchRippleProps))) : null);
  });
  var ButtonBase$1 = withStyles$1(styles$1, {
    name: 'MuiButtonBase'
  })(ButtonBase);

  // It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
  //
  // A strict capitalization should uppercase the first letter of each word a the sentence.
  // We only handle the first word.
  function capitalize(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var styles$2 = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        textAlign: 'center',
        flex: '0 0 auto',
        fontSize: theme.typography.pxToRem(24),
        padding: 12,
        borderRadius: '50%',
        overflow: 'visible',
        // Explicitly set the default value to solve a bug on IE 11.
        color: theme.palette.action.active,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shortest
        }),
        '&:hover': {
          backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          backgroundColor: 'transparent',
          color: theme.palette.action.disabled
        }
      },

      /* Styles applied to the root element if `edge="start"`. */
      edgeStart: {
        marginLeft: -12,
        '$sizeSmall&': {
          marginLeft: -3
        }
      },

      /* Styles applied to the root element if `edge="end"`. */
      edgeEnd: {
        marginRight: -12,
        '$sizeSmall&': {
          marginRight: -3
        }
      },

      /* Styles applied to the root element if `color="inherit"`. */
      colorInherit: {
        color: 'inherit'
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `size="small"`. */
      sizeSmall: {
        padding: 3,
        fontSize: theme.typography.pxToRem(18)
      },

      /* Styles applied to the children container element. */
      label: {
        width: '100%',
        display: 'flex',
        alignItems: 'inherit',
        justifyContent: 'inherit'
      }
    };
  };
  /**
   * Refer to the [Icons](/components/icons/) section of the documentation
   * regarding the available icon options.
   */

  var IconButton = React__default.forwardRef(function IconButton(props, ref) {
    var _props$edge = props.edge,
        edge = _props$edge === void 0 ? false : _props$edge,
        children = props.children,
        classes = props.classes,
        className = props.className,
        _props$color = props.color,
        color = _props$color === void 0 ? 'default' : _props$color,
        _props$disabled = props.disabled,
        disabled = _props$disabled === void 0 ? false : _props$disabled,
        _props$disableFocusRi = props.disableFocusRipple,
        disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
        _props$size = props.size,
        size = _props$size === void 0 ? 'medium' : _props$size,
        other = _objectWithoutProperties(props, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);

    return React__default.createElement(ButtonBase$1, _extends({
      className: clsx(classes.root, className, color !== 'default' && classes["color".concat(capitalize(color))], disabled && classes.disabled, {
        small: classes["size".concat(capitalize(size))]
      }[size], {
        start: classes.edgeStart,
        end: classes.edgeEnd
      }[edge]),
      centerRipple: true,
      focusRipple: !disableFocusRipple,
      disabled: disabled,
      ref: ref
    }, other), React__default.createElement("span", {
      className: classes.label
    }, children));
  });
  var IconButton$1 = withStyles$1(styles$2, {
    name: 'MuiIconButton'
  })(IconButton);

  var styles$3 = {
    root: {
      padding: 9
    },
    checked: {},
    disabled: {},
    input: {
      cursor: 'inherit',
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      zIndex: 1
    }
  };
  /**
   * @ignore - internal component.
   */

  var SwitchBase = React__default.forwardRef(function SwitchBase(props, ref) {
    var autoFocus = props.autoFocus,
        checkedProp = props.checked,
        checkedIcon = props.checkedIcon,
        classes = props.classes,
        className = props.className,
        defaultChecked = props.defaultChecked,
        disabledProp = props.disabled,
        icon = props.icon,
        id = props.id,
        inputProps = props.inputProps,
        inputRef = props.inputRef,
        name = props.name,
        onBlur = props.onBlur,
        onChange = props.onChange,
        onFocus = props.onFocus,
        readOnly = props.readOnly,
        required = props.required,
        tabIndex = props.tabIndex,
        type = props.type,
        value = props.value,
        other = _objectWithoutProperties(props, ["autoFocus", "checked", "checkedIcon", "classes", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);

    var _React$useRef = React__default.useRef(checkedProp != null),
        isControlled = _React$useRef.current;

    var _React$useState = React__default.useState(Boolean(defaultChecked)),
        checkedState = _React$useState[0],
        setCheckedState = _React$useState[1];

    var checked = isControlled ? checkedProp : checkedState;
    var muiFormControl = useFormControl();

    var handleFocus = function handleFocus(event) {
      if (onFocus) {
        onFocus(event);
      }

      if (muiFormControl && muiFormControl.onFocus) {
        muiFormControl.onFocus(event);
      }
    };

    var handleBlur = function handleBlur(event) {
      if (onBlur) {
        onBlur(event);
      }

      if (muiFormControl && muiFormControl.onBlur) {
        muiFormControl.onBlur(event);
      }
    };

    var handleInputChange = function handleInputChange(event) {
      var newChecked = event.target.checked;

      if (!isControlled) {
        setCheckedState(newChecked);
      }

      if (onChange) {
        onChange(event, newChecked);
      }
    };

    var disabled = disabledProp;

    if (muiFormControl) {
      if (typeof disabled === 'undefined') {
        disabled = muiFormControl.disabled;
      }
    }

    var hasLabelFor = type === 'checkbox' || type === 'radio';
    return React__default.createElement(IconButton$1, _extends({
      component: "span",
      className: clsx(classes.root, className, checked && classes.checked, disabled && classes.disabled),
      disabled: disabled,
      tabIndex: null,
      role: undefined,
      onFocus: handleFocus,
      onBlur: handleBlur,
      ref: ref
    }, other), React__default.createElement("input", _extends({
      autoFocus: autoFocus,
      checked: checkedProp,
      defaultChecked: defaultChecked,
      className: classes.input,
      disabled: disabled,
      id: hasLabelFor && id,
      name: name,
      onChange: handleInputChange,
      readOnly: readOnly,
      ref: inputRef,
      required: required,
      tabIndex: tabIndex,
      type: type,
      value: value
    }, inputProps)), checked ? checkedIcon : icon);
  }); // NB: If changed, please update Checkbox, Switch and Radio
  var SwitchBase$1 = withStyles$1(styles$3, {
    name: 'PrivateSwitchBase'
  })(SwitchBase);

  var styles$4 = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        fill: 'currentColor',
        flexShrink: 0,
        fontSize: theme.typography.pxToRem(24),
        transition: theme.transitions.create('fill', {
          duration: theme.transitions.duration.shorter
        })
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        color: theme.palette.primary.main
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        color: theme.palette.secondary.main
      },

      /* Styles applied to the root element if `color="action"`. */
      colorAction: {
        color: theme.palette.action.active
      },

      /* Styles applied to the root element if `color="error"`. */
      colorError: {
        color: theme.palette.error.main
      },

      /* Styles applied to the root element if `color="disabled"`. */
      colorDisabled: {
        color: theme.palette.action.disabled
      },

      /* Styles applied to the root element if `fontSize="inherit"`. */
      fontSizeInherit: {
        fontSize: 'inherit'
      },

      /* Styles applied to the root element if `fontSize="small"`. */
      fontSizeSmall: {
        fontSize: theme.typography.pxToRem(20)
      },

      /* Styles applied to the root element if `fontSize="large"`. */
      fontSizeLarge: {
        fontSize: theme.typography.pxToRem(35)
      }
    };
  };
  var SvgIcon = React__default.forwardRef(function SvgIcon(props, ref) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        _props$color = props.color,
        color = _props$color === void 0 ? 'inherit' : _props$color,
        _props$component = props.component,
        Component = _props$component === void 0 ? 'svg' : _props$component,
        _props$fontSize = props.fontSize,
        fontSize = _props$fontSize === void 0 ? 'default' : _props$fontSize,
        htmlColor = props.htmlColor,
        titleAccess = props.titleAccess,
        _props$viewBox = props.viewBox,
        viewBox = _props$viewBox === void 0 ? '0 0 24 24' : _props$viewBox,
        other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);

    return React__default.createElement(Component, _extends({
      className: clsx(classes.root, className, color !== 'inherit' && classes["color".concat(capitalize(color))], fontSize !== 'default' && classes["fontSize".concat(capitalize(fontSize))]),
      focusable: "false",
      viewBox: viewBox,
      color: htmlColor,
      "aria-hidden": titleAccess ? null : 'true',
      role: titleAccess ? 'img' : 'presentation',
      ref: ref
    }, other), children, titleAccess ? React__default.createElement("title", null, titleAccess) : null);
  });
  SvgIcon.muiName = 'SvgIcon';
  var SvgIcon$1 = withStyles$1(styles$4, {
    name: 'MuiSvgIcon'
  })(SvgIcon);

  function createSvgIcon(path, displayName) {
    var Component = React__default.memo(React__default.forwardRef(function (props, ref) {
      return React__default.createElement(SvgIcon$1, _extends({}, props, {
        ref: ref
      }), path);
    }));

    Component.muiName = SvgIcon$1.muiName;
    return Component;
  }

  /**
   * @ignore - internal component.
   */

  var CheckBoxOutlineBlankIcon = createSvgIcon(React__default.createElement("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }));

  /**
   * @ignore - internal component.
   */

  var CheckBoxIcon = createSvgIcon(React__default.createElement("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }));

  /**
   * @ignore - internal component.
   */

  var IndeterminateCheckBoxIcon = createSvgIcon(React__default.createElement("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
  }));

  var styles$5 = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        color: theme.palette.text.secondary
      },

      /* Pseudo-class applied to the root element if `checked={true}`. */
      checked: {},

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Pseudo-class applied to the root element if `indeterminate={true}`. */
      indeterminate: {},

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        '&$checked': {
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          }
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        '&$checked': {
          color: theme.palette.secondary.main,
          '&:hover': {
            backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          }
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      }
    };
  };
  var defaultCheckedIcon = React__default.createElement(CheckBoxIcon, null);
  var defaultIcon = React__default.createElement(CheckBoxOutlineBlankIcon, null);
  var defaultIndeterminateIcon = React__default.createElement(IndeterminateCheckBoxIcon, null);
  var Checkbox = React__default.forwardRef(function Checkbox(props, ref) {
    var _props$checkedIcon = props.checkedIcon,
        checkedIcon = _props$checkedIcon === void 0 ? defaultCheckedIcon : _props$checkedIcon,
        classes = props.classes,
        _props$color = props.color,
        color = _props$color === void 0 ? 'secondary' : _props$color,
        _props$disabled = props.disabled,
        disabled = _props$disabled === void 0 ? false : _props$disabled,
        _props$icon = props.icon,
        icon = _props$icon === void 0 ? defaultIcon : _props$icon,
        _props$indeterminate = props.indeterminate,
        indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
        _props$indeterminateI = props.indeterminateIcon,
        indeterminateIcon = _props$indeterminateI === void 0 ? defaultIndeterminateIcon : _props$indeterminateI,
        inputProps = props.inputProps,
        _props$size = props.size,
        size = _props$size === void 0 ? 'medium' : _props$size,
        other = _objectWithoutProperties(props, ["checkedIcon", "classes", "color", "disabled", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"]);

    return React__default.createElement(SwitchBase$1, _extends({
      type: "checkbox",
      classes: {
        root: clsx(classes.root, classes["color".concat(capitalize(color))], indeterminate && classes.indeterminate),
        checked: classes.checked,
        disabled: classes.disabled
      },
      color: color,
      inputProps: _extends({
        'data-indeterminate': indeterminate
      }, inputProps),
      icon: React__default.cloneElement(indeterminate ? indeterminateIcon : icon, {
        fontSize: size === 'small' ? 'small' : 'default'
      }),
      checkedIcon: React__default.cloneElement(indeterminate ? indeterminateIcon : checkedIcon, {
        fontSize: size === 'small' ? 'small' : 'default'
      }),
      ref: ref,
      disabled: disabled
    }, other));
  });
  var Checkbox$1 = withStyles$1(styles$5, {
    name: 'MuiCheckbox'
  })(Checkbox);

  var Module2 = function Module2(_ref) {
    var children = _ref.children;
    var addressee = useSelector(function (state) {
      return state;
    });
    var dispatch = useDispatch();

    function handleClick(e) {
      e.preventDefault();
      dispatch({
        type: 'SET_ADDRESSEE',
        payload: "Donald Duck"
      });
    }

    return React__default.createElement(React__default.Fragment, null, React__default.createElement("h2", {
      style: {
        color: 'red'
      }
    }, "Hello from Module#2, #", addressee, "#  !"), React__default.createElement("button", {
      onClick: handleClick
    }, "Click"), React__default.createElement(Checkbox$1, {
      defaultChecked: true
    }), children);
  };

  var App = function App(_ref2) {
    var children = _ref2.children;
    return React__default.createElement(Provider, {
      store: testStore
    }, React__default.createElement(ThemeProvider, {
      theme: TestTheme
    }, React__default.createElement(Module2, null, children)));
  };

  var Module2Rendrer = (function (el) {
    var app = App({
      children: el.children
    });
    ReactDOM__default.render(app, el);
    return app;
  });

  var ReactModule2Component =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(ReactModule2Component, _HTMLElement);

    function ReactModule2Component() {
      _classCallCheck(this, ReactModule2Component);

      return _possibleConstructorReturn(this, _getPrototypeOf(ReactModule2Component).apply(this, arguments));
    }

    _createClass(ReactModule2Component, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        console.log(Module2Rendrer(this));
      }
    }]);

    return ReactModule2Component;
  }(_wrapNativeSuper(HTMLElement));

  customElements.define('react-test-module2', ReactModule2Component);

}(React, ReactDOM, Redux, testStore, TestTheme));
