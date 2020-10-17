import React from "react";
import SignUp from "../../components/signup/signup.component";
import SignIn from "../../components/signin/signin.component";

function RegisterPage() {
  return (
    <div>
      <h1>Account</h1>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default RegisterPage;
