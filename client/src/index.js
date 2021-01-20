import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const server = new ApolloClient({
  uri: "http://localhost:8000/",
  onError: (e) => {
    console.log(e);
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={server}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
