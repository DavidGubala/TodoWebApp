import ReactDOM from 'react-dom';
import TodoApp from "./App";

import './css/Index.css'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // harded for now, having trouble with .env variables
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <TodoApp />
  </ApolloProvider>,
  document.getElementById('root')
);