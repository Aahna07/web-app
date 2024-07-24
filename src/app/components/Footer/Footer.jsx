// src/components/Footer.js
import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "primary.main",
        color: "white",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          My Website
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="inherit"
          component="p"
        >
          © {new Date().getFullYear()} My Website. All rights reserved.
        </Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Terms of Use
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Contact Us
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
