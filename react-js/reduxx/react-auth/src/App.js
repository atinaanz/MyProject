import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home.component';
import Nav from './components/nav.component';
import Login from './components/login.component';
import Register from './components/register.component';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default function App() {
  return (
    //-- ROUTER--
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Switch>
            <Route path ="/">
              <Home />
            </Route>
            <Route path ="/login">
              <Login />
            </Route>
            <Route path ="/register">
              <Register />
            </Route>
            {/* <Route exact path ="login" component={Login}/>
            <Route exact path ="register" component={Register}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

//export default App;
