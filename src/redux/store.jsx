import { createStore } from "redux";
import { userReducer } from "./addListReducer";

// Enable Redux DevTools if available
const store = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
