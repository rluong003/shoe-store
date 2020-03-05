import React from "react";
import SignIn from "../../components/signIn/signIn.jsx";
import SignUp from "../../components/signup/signup.jsx";

import './registraiton-login.styles.scss';


const RegistrationLogin = () => {
    return(
    <div className="reg-login">
        <SignIn />
        <SignUp />
  
    </div>
    )
}

export default RegistrationLogin;
