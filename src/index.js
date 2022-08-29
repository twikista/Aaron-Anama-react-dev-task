import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import { saveStateToLocalStorage } from "./redux/localStoragePersist";

//apolloclient instance
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_SERVER,
  cache: new InMemoryCache(),
});

store.subscribe(() => {
  saveStateToLocalStorage({
    cart: store.getState().cart,
    total: store.getState().total,
    amount: store.getState().amount,
    tax: store.getState().tax,
    currencyDetails: store.getState().currencyDetails,
  });
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
