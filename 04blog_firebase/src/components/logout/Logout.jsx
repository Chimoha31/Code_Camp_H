import React from "react";
import "./Logout.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        navigate("/login");
        console.log("Logout!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>Log out here</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default Logout;
