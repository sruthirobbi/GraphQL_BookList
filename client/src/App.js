import React from 'react';
import ApolloCient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks'
import BookList from './components/BookList/BookList';
import AddBook from './components/AddBook/AddBook'

//apollo client set Up
const client = new ApolloCient({
  uri:'http://localhost:5000/graphql'
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Book List</h1>
        <BookList/>
        <AddBook/>
      </div>
    </ApolloProvider>
  );
}

export default App;
