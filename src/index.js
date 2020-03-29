import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { carReducer } from "./reducers";
import "bulma/css/bulma.css";
import "./styles.scss";

// const reducer = () => {
//   return {
//     car: {
//       name: "2019 Ford Mustang"
//     }
//   };
// };

const store = createStore(
  carReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log("this is the store", store);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
