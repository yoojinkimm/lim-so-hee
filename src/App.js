
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import React from 'react';
import UserProvider from './providers/UserProvider';
import './App.css';
import {
  LandingPage,
  IntroPage,
  StartPage,
} from './pages'




function App({history}) {
  return (
    <UserProvider 
    render={
      <div className="App">
        <div className="frame">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/intro' component={IntroPage} />
            <Route exact path='/start' component={StartPage} />
          </Switch>
        </Router>
        </div>
      </div>
    } />
  );
}

export default App;
