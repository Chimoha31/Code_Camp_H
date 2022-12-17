import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { provider, auth } from "../../firebase/firebase";

const Login = () => {
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>Get started !</p>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
