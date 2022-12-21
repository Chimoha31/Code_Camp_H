import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { provider, auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
        navigate("/");
        // console.log(result.user);
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
