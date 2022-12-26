import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { blue } from "@mui/material/colors";
import AuthLayout from "./components/layout/AuthLayout";
import Login from "./pages/Login";
import Resister from "./pages/Resister";

const App = () => {
  const theme = createTheme({
    palette: { primary: blue },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/resister" element={<Resister />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
