import {
  applyMiddleware,
  combineReducers,
  configureStore,
  createStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { userReducer } from "./redux/user/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({ userAuth: userReducer });

// const rootReducer = combineReducers({

//   reducer
// });

const initialState = {};
//! error on using createStore . use configure store instead of createstore later on
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

// import {
//   applyMiddleware,
//   combineReducers,
//   configureStore,
// } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { userReducer } from "./redux/user/userReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const reducer = combineReducers({ userAuth: userReducer });

// // const rootReducer = combineReducers({

// //   reducer
// // });

// const initialState = {};

// const store = configureStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
