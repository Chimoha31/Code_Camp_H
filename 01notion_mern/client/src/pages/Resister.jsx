import React from "react";
import { Box, TextField } from "@mui/material";

const Resister = () => {
  return (
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
    </Box>
  );
};

export default Resister;
