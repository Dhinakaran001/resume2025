import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Be from "../assets/img/Be.jpeg";

function Footer() {
  return (
    <Box sx={{ mb: "80px" }}>
      <Box
        sx={{
          textAlign: "center",
          border: "1px solid #ebeeef",
          borderRadius: "20px",
          p: "15px",
          mb: 3,
        }}
      >
        <Box sx={{ p: { sm: "15px 80px", xs: "15px 0px" } }}>
          <Typography
            sx={{ fontSize: { sm: "32", xs: "22px" }, fontWeight: 600, mb: 1 }}
          >
            Let’s work together
          </Typography>
          <Typography>
            Always excited to team up with amazing individuals for interesting
            projects. Let's bring our ideas to life!
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            startIcon={<EmailIcon />}
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#000",
              borderRadius: "10px",
              p: "20px 60px",
              width: { sm: "auto", xs: "100%" },
            }}
          >
            Contact Me
          </Button>
          <IconButton
            sx={{
              m: 2,
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "10px",
              p: { sm: "20px 20px", xs: "15px 15px" },
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            }}
          >
            <img src={Be} alt="Be" width={"24px"} height={"24px"} />
          </IconButton>
          <IconButton
            sx={{
              m: 2,
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "10px",
              p: { sm: "20px 20px", xs: "15px 15px" },
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            sx={{
              m: 2,
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "10px",
              p: { sm: "20px 20px", xs: "15px 15px" },
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          border: "1px solid #ebeeef",
          borderRadius: "20px",
        }}
      >
        <Box sx={{ py: 2, color: "#000" }}>@ 2025</Box>
        <Box
          sx={{
            backgroundColor: "#8F8B8B",
            py: 2,
            borderRadius: "0px 0px 20px 20px",
            color: "#000",
          }}
        >
          Back to Top
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
