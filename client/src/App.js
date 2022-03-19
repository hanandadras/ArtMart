import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Auth from './utils/auth';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { setContext } from '@apollo/client/link/context';
import NoMatch from './pages/NoMatch';
import Posts from './components/posts/post';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const httpLink = createHttpLink({
  // uri: 'http://localhost:3001/graphql',
  uri: '/graphql',

});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} ></Route>
            <Route exact path="/login" component={Login} ></Route>
            <Route exact path="/signup" component={Signup} ></Route>

            <Route component={NoMatch} />
          </Switch>
          <Posts></Posts>
          {/* {Auth.loggedIn() ? <Home />:<Signup/>} */}
        </div>
        <Footer />
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
