import React, { useState, useEffect} from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.jsx";
import ButtonAppBar from "./components/navbar/navbar.jsx";
import registrationLogin from "./components/registration-login/registration-login.jsx";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const App = () => {
  const [currentUser, setUser] = useState({
    curUser: null
  });

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            setUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        } else {
          setUser({ curUser: userAuth });
        }
      });

      return () => {
        unsubscribeFromAuth();
      };
  }, []);

  return (
    <div>
      <BrowserRouter>
      <ButtonAppBar currentUser={currentUser} />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/registration-login" component={registrationLogin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
