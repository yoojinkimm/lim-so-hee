
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import React, {useContext} from 'react';
import UserProvider from './providers/UserProvider';
import './App.css';
import {
  LandingPage,
  IntroPage,
  StartPage,
  DesktopPage,
  SapariPage,
  GmailPage,
  MemoPage,
  WordPage,
  PremierePage,
  IllustPage,
  MayaPage,
  CalendarPage,
  PptPage,
  PhotoPage,
  KakaoPage
} from './pages'


// import { FolderPopup } from './components/index';
// import { UserContext } from './providers/UserProvider';


function App({history}) {
  //  const { finder, setFinder, 
  // f2020, job, taxi } = useContext(UserContext);

  return (
    <UserProvider 
    render={
      <div className="App">
        <div className="frame">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path='/' component={IntroPage} />
            <Route exact path='/intro' component={LandingPage} />
            <Route exact path='/start' component={StartPage} />
            <Route exact path='/desktop' component={DesktopPage} />
             <Route exact path='/sapari' component={SapariPage} />
             <Route exact path='/sapari/gmail' component={GmailPage} />
             <Route exact path='/memo' component={MemoPage} />
             <Route exact path='/word' component={WordPage} />
             <Route exact path='/premiere' component={PremierePage} />
             <Route exact path='/illust' component={IllustPage} />
             <Route exact path='/maya' component={MayaPage} />
             <Route exact path='/calendar' component={CalendarPage} />
             <Route exact path='/ppt' component={PptPage} />
             <Route exact path='/photo' component={PhotoPage} />
             <Route exact path='/kakao' component={KakaoPage} />
          </Switch>
        </Router>

        {/* finder &&
        <FolderPopup show={finder} setShow={setFinder} 
        folderName={'documents'} /> */}
        </div>
      </div>
    } />
  );
}

export default App;
