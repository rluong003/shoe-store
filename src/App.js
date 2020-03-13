/* eslint-disable react/prop-types */

import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import Homepage from "./pages/homepage/homepage.jsx";
import ButtonAppBar from "./components/navbar/navbar.jsx";
import RegistrationLogin from "./components/registration-login/registration-login.jsx";
import ShopPage from "./pages/shop_page/shop_page.jsx";
import Checkout from "./pages/checkout/checkout.jsx";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { selectCurrentUser } from "./redux/user/user.selectors";

import { createStructuredSelector } from "reselect";

const App = props => {
  const { setCurrentUser } = props;

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <BrowserRouter>
        <ButtonAppBar />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/registration-login"
            render={() =>
              props.curUser ? <Redirect to="/" /> : <RegistrationLogin />
            }
          />
          <Route path="/shop" component={ShopPage} />

          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  curUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
