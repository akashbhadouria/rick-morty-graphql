import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import CharactersList from "./pages/CharactersList";
import CharacterInfo from "./pages/CharacterInfo";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" component={<CharactersList />} />
          <Route path="/:id" component={<CharacterInfo />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
