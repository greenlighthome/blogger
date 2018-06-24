import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'

import Navbar from './components/layout/Navbar'

import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard'
import Login from './components/auth/Login'

const config = {
    issuer: 'https://dev-166057.oktapreview.com/oauth2/default',
    redirect_uri: window.location.origin + '/implicit/callback',
    client_id: '0oafhpqw8nkSDg9Di0h7'
};

function onAuthRequired({history}) {
    history.push('/login')
}

class App extends React.Component {
  render() {
      return (
          <Router>
              <Security issuer={config.issuer}
                        client_id={config.client_id}
                        redirect_uri={config.redirect_uri}
                        onAuthRequired={onAuthRequired}
              >
                  <div className="App">
                      <Navbar/>
                      <Route path="/" exact={true} component={Home}/>
                      <SecureRoute path="/staff" exact={true} component={Dashboard}/>
                      <Route path='/login'  render={() => <Login baseUrl="https://dev-166057.oktapreview.com" />}/>
                      <Route path='/implicit/callback' component={ImplicitCallback}/>
                  </div>
              </Security>
          </Router>
      )
  }
}

export default App