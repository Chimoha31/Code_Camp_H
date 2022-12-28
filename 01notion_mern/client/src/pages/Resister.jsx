import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const Resister = () => {
  return (
    <>
      <Box component="form">
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
