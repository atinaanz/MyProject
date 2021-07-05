import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home.component.js';
import Nav from './components/nav.component.js';
import Login from './components/login.component.js';
import Register from './components/register.component.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>


        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
                <Route exact path ="/" component={Home}/>
                <Route exact path ="/login" component={Login}/>
                <Route exact path ="/register" component={Register}/>                
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
