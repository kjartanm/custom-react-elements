import { createStore } from "redux";
const initStore = {items:[], currentItem: -1};
const todos = (state, action) => {
    switch (action.type) {
        case "SET_CURRENT": {
            return {...state, "currentItem": action.payload };
        }
        case "SET_TODOS": {
            return {...state, "items": action.payload};
        }
        case "REMOVE_TODO": {
            const items  = state.items.filter(item => item.id != action.payload);
            return {...state, items};
        }
        case "TOGGLE_ALL_DONE": {
            const items  = state.items.map(item => {return {...item, done: action.payload}});
            return {...state, items};
        }
        case "TOGGLE_DONE": {
            const items  = state.items.map(item => (item.id == action.payload)?{...item, done: !item.done}:item);
            return {...state, items};
        }
        default: {
            return state;
        }
    }
};

export default createStore(todos, initStore);