import React, { useEffect } from 'react';
import './style/App.css';
import Header from "./components/Header";
import SideBar from "./components/SideBar.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmailList from "./components/EmailList.js";
import Mail from "./components/Mail.js";
import SendMail from "./components/SendMail.js";
import { useSelector } from 'react-redux';
import { selectSendMessageBox } from "./features/MailSlicer";
import { selectLoggedInUser, loginUser } from "./features/UserSlice";
import Login from "./components/Login";
import { useDispatch } from "react-redux";
import { auth } from "./components/firebase";


function App() {

  const displayMessageBox = useSelector(selectSendMessageBox);
  const userLoggedIn = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();


    useEffect(() => {
      auth.onAuthStateChanged( user => {
          if(userLoggedIn) {
            dispatch(
              loginUser({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
              })
            )
          }
        })
    }, [])

  
  return (
    <Router>
      { !userLoggedIn ? 
      <Login /> : (

        <div className='app'> 
      <Header />      
    <div className="app__body">
      <SideBar />

      <Switch>
        <Route path='/mail'>
          <Mail />
        </Route>
        <Route path='/'>
          <EmailList />
        </Route>
      </Switch>
    </div> 
    {displayMessageBox && <SendMail /> }          
   </div>
    )}
  </Router>
  
   );
}

export default App;
