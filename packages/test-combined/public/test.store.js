var testStore = (function (redux) {
  'use strict';

  var setAddressee = function setAddressee() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'John Bow';
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case "SET_ADDRESSEE":
        {
          return action.payload;
        }

      default:
        {
          return state;
        }
    }
  };

  var testStore = redux.createStore(setAddressee, 'Carl Anon');

  return testStore;

}(Redux));
