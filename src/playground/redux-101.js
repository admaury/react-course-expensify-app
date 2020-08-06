import { createStore } from "redux";

// when calling the function, if we pass an object that does not contain the "incrementBy" property => destructuring sets incrementBy to 1
// when calling the function, if we pass NO object, {} is used => destructuring sets incrementBy to 1
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy: incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy,
});

const setCount = ({ count }) => ({
  type: "SET",
  count
});

const resetCount = () => ({
    type: "RESET"
})

// Reducers
// 1. Pure functions : 
//     dont change things outside of the function 
//     + the input depends only on the params 
//     (not on anything outside of the function)
// 2. Never change action or state


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + action.incrementBy,
        };
      case "DECREMENT":
        const decrementBy =
          typeof action.decrementBy === "number" ? action.decrementBy : 1;
        return {
          count: state.count - decrementBy,
        };
      case "SET":
        return {
          count: action.count,
        };
      case "RESET":
        return {
          count: 0,
        };
      default:
        return state;
    }
  }

const store = createStore(countReducer);

const unsuscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  incrementCount({
    incrementBy: 5,
  })
);

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(
  decrementCount({
    decrementBy: 10,
  })
);

store.dispatch(setCount({ count: 101 }));

unsuscribe();
