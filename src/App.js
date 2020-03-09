import React, { useEffect} from "react";
import "./App.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

import Homepage from "./pages/homepage/homepage.jsx";
import ButtonAppBar from "./components/navbar/navbar.jsx";
import RegistrationLogin from "./components/registration-login/registration-login.jsx";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const App = (props) => {
  const {setCurrentUser} = props;

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        } else {
          setCurrentUser(userAuth);
        }
      });

      return () => {
        unsubscribeFromAuth();
      };
  }, []);

  return (
    <div>
      <BrowserRouter>
      <ButtonAppBar />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/registration-login" 
          render={() => props.curUser ? (<Redirect to='/' />) : (

          <RegistrationLogin />
          )
          } 

          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = ({user}) => ({
  curUser: user.curUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
