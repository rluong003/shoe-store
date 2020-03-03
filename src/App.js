import React, {useState, useEffect,useRef} from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.jsx";
import ButtonAppBar from "./components/navbar/navbar.jsx";
import registrationLogin from "./components/registration-login/registration-login.jsx";

import {auth} from './firebase/firebase.utils';

function App() {

const [currentUser, setUser] = useState({
  curUser: null
});

const unsubscribeFromAuth = useRef(null);

useEffect( () => {

return unsubscribeFromAuth.current = auth.onAuthStateChanged(user => {
  setUser({curUser: user});

});

}, [] );

  return (
    <div>
      <ButtonAppBar currentUser ={currentUser}/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/registration-login" component={registrationLogin} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );


}

export default App;
