import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/system";
import notion from "../../assets/images/notion.png";

// Resister & Login 共通design
const AuthLayout = () => {
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 6,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={notion}
            alt=""
            style={{ width: 100, height: 100, marginBottom: 3 }}
          />
          Notion Clone Development
        </Box>
        <Outlet />
      </Container>
    </div>
  );
};

export default AuthLayout;
