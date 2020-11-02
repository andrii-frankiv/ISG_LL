import React, { useState, Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import { Provider } from 'mobx-react';

import '../App.css';
import Content from './Content';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { MainStore} from '../stores/MainStore';


const Home = () => (

  <div>
    <h2>Home</h2>
    {}
  </div>
);

const mainStore = new MainStore();


const App = () => {

  return (

  <div className='container'>
    <Provider mainStore={mainStore}>
      <nav className='nav-container'>
        <ul className='nav-elements'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Content'>Content</Link>
          </li>
          <li>
            <Link to='/SignIn'>Sign In</Link>
          </li>
          <li>
            <Link to='/SignUp'>Sign Up</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/Content'><Content /></Route>
        <Route path='/SignIn'><SignIn /></Route>
        <Route path='/SignUp'><SignUp /></Route>
      </Switch>
    </Provider>
  </div>
)
  
}

export default App;