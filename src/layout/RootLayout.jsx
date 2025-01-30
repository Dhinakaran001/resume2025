import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import { Box } from "@mui/material";
import ScrollToTop from "./ScrollToTop";

function RootLayout() {
  return (
    <Box sx={{ margin: { xs: "0px", md: "0px 200px" } }}>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default RootLayout;
