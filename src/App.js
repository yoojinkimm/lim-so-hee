
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import React, {useState, useEffect} from 'react';
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
  KakaoPage,
  KakaoChatPage,
  EndingPage,

  MobilePage
} from './pages'


// import { FolderPopup } from './components/index';
// import { UserContext } from './providers/UserProvider';

import { Dock } from './components/index';


function App({history}) {
  //  const { finder, setFinder, 
  // f2020, job, taxi } = useContext(UserContext);
  var filter = "win16|win32|win64|mac|macintel";

  const [device, setDevice] = useState('PC')

  useEffect(() => {
    if(navigator.platform){
      console.log(navigator.platform)
      if(0 > filter.indexOf(navigator.platform.toLowerCase())){
        setDevice("Mobile");
      }
    }
  }, [])

  return (
    <UserProvider 
    render={
      <div className="App">
        {device === 'PC'
        ?
        <>
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
             <Route exact path='/kakao/chat' component={KakaoChatPage} />

             <Route exact path='/ending' component={EndingPage} />
          </Switch>
           <Dock />
        </Router>
        </div>
        <div className="frame-mobile">
          <MobilePage />
        </div>
        </>
        :
        <div className="frame-mobile">
          <MobilePage />
        </div>
        }
      </div>
    } />
  );
}

export default App;
