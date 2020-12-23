import './App.css';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import React from 'react';
import UserProvider from './providers/UserProvider';
import './App.css';



function App({history}) {
  return (
    <UserProvider 
    render={
      <div className="App">
        <div className="frame">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            {/* <Route exact path='/' component={LandingPage} /> */}
          </Switch>
        </Router>
        </div>
      </div>
    } />
  );
}

export default App;
