import { createStore } from "redux";

const setAddressee = (state = 'John Bow', action) => {
  switch (action.type) {
    case "SET_ADDRESSEE": {
      return action.payload.addressee;
    }
    default: {
      return state;
    }
  }
};

export default createStore(setAddressee, 'Carl Anon');