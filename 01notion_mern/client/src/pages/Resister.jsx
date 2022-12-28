import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import authApi from "../api/authApi";

const Resister = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get("username").trim();
    const password = data.get("password").trim();
    const confirmPassword = data.get("confirmPassword").trim();
    console.log(username);
    console.log(password);
    console.log(confirmPassword);
    try {
      const res = await authApi.register({
          username,
          password,
          confirmPassword,
        });
      localStorage.setItem("token", res.token)
      console.log("Succesfully resistered account !")
  
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="username"
          label="username"
          margin="normal"
          name="username"
          required
        />
        <TextField
          fullWidth
          id="password"
          label="password"
          margin="normal"
          name="password"
          type="password"
          required
        />
        <TextField
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          margin="normal"
          name="confirmPassword"
          type="password"
          required
        />
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          fullWidth
          type="submit"
          loading={false}
          color="primary"
          variant="outlined"
        >
          Create Account
        </LoadingButton>
      </Box>
      <Button component={Link} to="/login">
        Already have an account? Go to Login.
      </Button>
    </>
  );
};

export default Resister;
