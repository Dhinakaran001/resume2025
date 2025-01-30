import { Box, Typography, Button, IconButton } from "@mui/material";
import React, { useRef, useState } from "react";
import profile_img from "../assets/img/profile_img.JPG";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ScrollableGallery from "./ScrollableGallery";
import Footer from "./Footer";

const hashtag = [
  "#Photoshop",
  "#Illustrator",
  "#GraphicDesign",
  "#WebDevelopment",
];

function Home() {
  const scrollContainerRef = useRef(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const [visibleImages, setVisibleImages] = useState(2);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          mb: 3,
          flexDirection: { sm: "row", xs: "column" },
        }}
      >
        <Box
          sx={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            p: "0px 40px",
            textAlign: { sm: "center", xs: "left" },
          }}
        >
          <img
            src={profile_img}
            alt=""
            height={"100%"}
            width={"100%"}
            style={{ borderRadius: "50%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            margin: { sm: "auto 0px", xs: "20px 0 0 0" },
          }}
        >
          <Box sx={{ textAlign: { sm: "left", xs: "center" } }}>
            <Typography sx={{ fontSize: "22px", fontWeight: 600 }}>
              Sidhart Sai
            </Typography>
            <Typography sx={{ color: "#636869" }}>
              Graphic Designer &nbsp; Bengaluru, India
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: { sm: "flex", xs: "block" } }}>
        <Box sx={{ my: "auto" }}>
          <Button
            variant="contained"
            startIcon={<EmailIcon />}
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#000",
              borderRadius: "20px",
              width: { sm: "auto", xs: "100%" },
            }}
          >
            Contact
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: { sm: "inherit", xs: "center" },
          }}
        >
          <IconButton sx={{ m: 1, backgroundColor: "#ebeeef", color: "#000" }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton sx={{ m: 1, backgroundColor: "#ebeeef", color: "#000" }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton sx={{ m: 1, backgroundColor: "#ebeeef", color: "#000" }}>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography>
          Tech-driven designer with a foundation in web development and a
          passion for crafting cohesive brand identities. Combining creativity
          and technical expertise, I transform ideas into impactful visual
          experiences.
        </Typography>
      </Box>
      <Box sx={{ display: { sm: "flex", xs: "none" } }}>
        {hashtag.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                p: "3px 12px",
                m: "0px 5px",
                backgroundColor: "#ebeeef",
                borderRadius: "20px",
                display: "flex",
              }}
            >
              {item}
            </Box>
          );
        })}
      </Box>
      <Box sx={{ display: { sm: "none", xs: "block" } }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Typography
            sx={{
              p: "3px 12px",
              backgroundColor: "#ebeeef",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            #Photoshop
          </Typography>
          <Typography
            sx={{
              p: "3px 12px",
              backgroundColor: "#ebeeef",
              borderRadius: "20px",
              display: "flex",
              m: "0px 5px",
            }}
          >
            #Illustrator
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              p: "3px 12px",
              backgroundColor: "#ebeeef",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            #GraphicDesign
          </Typography>
          <Typography
            sx={{
              p: "3px 12px",
              backgroundColor: "#ebeeef",
              borderRadius: "20px",
              display: "flex",
            }}
          >
            #WebDevelopment
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mb: 10, display: "inline-block" }}>
        <ScrollableGallery
          scrollContainerRef={scrollContainerRef}
          isAutoScroll={isAutoScroll}
          setIsAutoScroll={setIsAutoScroll}
          visibleImages={visibleImages}
          setVisibleImages={setVisibleImages}
        />
      </Box>
    </Box>
  );
}

export default Home;
