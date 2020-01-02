var ContextProxy = (function (React) {
  'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var useState = React.useState;
  var TestContext = React.createContext();
  var TestProvider = function TestProvider(_ref) {
    var children = _ref.children;

    var _useState = useState('Jane Dow!'),
        _useState2 = _slicedToArray(_useState, 2),
        testProp = _useState2[0],
        setTestProp = _useState2[1];

    return React.createElement(TestContext.Provider, {
      value: {
        testProp: testProp,
        setTestProp: setTestProp
      }
    }, children);
  };

  var ContextWrapper = {
    TestContext: TestContext,
    TestProvider: TestProvider
  };

  return ContextWrapper;

}(React));
