import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import about_img1 from "../assets/img/about_img1.png";
import about_img2 from "../assets/img/about_img2.png";
import about_img3 from "../assets/img/about_img3.jpg";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import CropOutlinedIcon from "@mui/icons-material/CropOutlined";

const experience = [
  {
    icon: (
      <IconButton
        sx={{
          m: 1,
          backgroundColor: "#e8e6f4",
          color: "#4120ce",
          borderRadius: "10px",
          p: 1,
        }}
      >
        <FingerprintIcon />
      </IconButton>
    ),
    name: "QC Executive",
    description: "Knowledgeworks Innovative Linguistic Solutions Pvt. Ltd.",
    location: "Bengaluru, India",
    year: "Feb 2024 - Aug 2024",
  },
  {
    icon: (
      <IconButton
        sx={{
          m: 1,
          backgroundColor: "#d6ebf0",
          color: "#1b84cc",
          borderRadius: "10px",
          p: 1,
        }}
      >
        <CropOutlinedIcon />
      </IconButton>
    ),
    name: "React developer",
    description: "Be Practical Tech Solutions.",
    location: "Bengaluru, India",
    year: "June 2022 - Nov 2022",
  },
  {
    icon: (
      <IconButton
        sx={{
          m: 1,
          backgroundColor: "#ebeeef",
          color: "#969c9c",
          borderRadius: "10px",
          p: 1,
        }}
      >
        <WorkOutlineIcon />
      </IconButton>
    ),
    name: "Product developer",
    description: "Camp Automation.",
    location: "Bengaluru, India",
    year: "Feb 2022 - May 2022",
  },
];

const education = [
  {
    icon: (
      <IconButton
        sx={{
          m: 1,
          backgroundColor: "#e8e6f4",
          color: "#4120ce",
          borderRadius: "10px",
          p: 1,
        }}
      >
        <FingerprintIcon />
      </IconButton>
    ),
    name: "Master of Computer Application in Information Security Management Services",
    description:
      "A comprehensive program focused on building expertise in cybersecurity, cyber forensics, cloud technology, and data structures. The course provided in-depth knowledge of safeguarding digital assets, investigating cybercrimes, designing secure cloud infrastructures, and optimizing software systems. This specialization emphasized practical and analytical skills to address modern challenges in information security and IT management effectively.",
    location: "Jain Deemed-To-Be University",
    year: "2019 - 2021",
  },
  {
    icon: (
      <IconButton
        sx={{
          m: 1,
          backgroundColor: "#d6ebf0",
          color: "#1b84cc",
          borderRadius: "10px",
          p: 1,
        }}
      >
        <CropOutlinedIcon />
      </IconButton>
    ),
    name: "Bachelor degree in Computer  science",
    description:
      "An interdisciplinary program focused on developing a strong foundation in computer science, physics, and mathematics. The course emphasized problem-solving, analytical reasoning, and computational skills, with a balanced approach to theoretical concepts and practical applications.",
    location: "KLE S Nijalingappa college",
    year: "2016 - 2019",
  },
];

function About() {
  return (
    <Box>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <NavLink to={"/home"}>
          <Typography sx={{ color: "#636869" }}>Home</Typography>
        </NavLink>
        <NavLink to={"/about"}>
          <Typography sx={{ color: "#000" }}>About</Typography>
        </NavLink>
      </Breadcrumbs>
      <Box sx={{ textAlign: "center", mt: 7, mb: 5 }}>
        <Typography sx={{ fontSize: "22px", fontWeight: 600, color: "#000" }}>
          About
        </Typography>
        <Typography sx={{ color: "#636869" }}>
          The journey from developer to{" "}
          <span style={{ fontWeight: 600 }}>Designer.</span>
        </Typography>
      </Box>
      <Box sx={{ gap: 2, display: { sm: "flex", xs: "block" } }}>
        <Box
          sx={{
            width: { sm: "30%", xs: "100%" },
            position: "relative",
          }}
        >
          <img
            className="i-love-codeing"
            src={about_img1}
            alt={"about_img1"}
            style={{
              width: "100%",
              height: "30%",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
        </Box>
        <Box sx={{ width: { sm: "40%", xs: "100%" } }}>
          <img
            src={about_img2}
            alt={"about_img2"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { sm: "30%", xs: "100%" },
            height: { sm: "50%", xs: "100%" },
          }}
        >
          <img
            src={about_img3}
            alt={"about_img3"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ mt: 2, mb: 3 }}>
        <Typography>
          With a strong foundation in technology and a Master's degree in
          Information Security Management Services, I began my career as a web
          developer, honing my technical expertise in crafting functional
          digital experiences. However, my creative instincts and passion for
          storytelling drove me to pivot toward the world of design. I pursued
          an intensive graphic design program, where I successfully completed a
          comprehensive branding project, encompassing logo creation, brand
          identity systems, and visual assets. This transformative experience
          fueled my aspiration to master the art of design, leading me to
          Germany to pursue a second Master's degree in Design.
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Today, I bring a unique blend of technical acumen and creative vision
          to build impactful and cohesive brand identities that resonate with
          audiences globally.
        </Typography>
      </Box>
      <Box
        sx={{
          gap: 2,
          my: 2,
          display: { sm: "flex", xs: "block" },
          flexWrap: "wrap",
          textAlign: { sm: "inherit", xs: "center" },
        }}
      >
        <Box
          sx={{
            textAlign: { sm: "inherit", xs: "center" },
            display: "flex",
            gap: 2,
          }}
        >
          <Typography>Graphic Designer</Typography>
          <Typography>Bengaluru, India</Typography>
        </Box>
        <a
          href="https://www.example.com" // Replace with your desired URL
          target="_blank"
        >
          Download CV
        </a>
      </Box>
      <Box sx={{ mt: 7 }}>
        <Box>
          <Typography
            sx={{ fontSize: "22px", fontWeight: 600, color: "#000", mb: 2 }}
          >
            Experience
          </Typography>
        </Box>
        <Box>
          {experience.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: { sm: "flex", xs: "block" },
                p: 1.5,
                border: "1px solid #ebeeef",
                borderRadius: "20px",
                mb: 2,
                textAlign: { sm: "inherit", xs: "center" },
              }}
            >
              <Box sx={{ width: { sm: "8%", xs: "100%" } }}>{item.icon}</Box>
              <Box sx={{ width: { sm: "92%", xs: "100%" } }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { sm: "space-between", xs: "center" },
                  }}
                >
                  <Typography sx={{ fontWeight: 600, mb: { sm: 0, xs: 1 } }}>
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#636869",
                      display: { sm: "block", xs: "none" },
                    }}
                  >
                    {item.year}
                  </Typography>
                </Box>
                <Box sx={{ mb: { sm: 0, xs: 1 } }}>
                  <Typography sx={{ fontSize: "14px", mr: 1 }}>
                    {item.description}{" "}
                    <span style={{ marginLeft: "5px" }}>{item.location}</span>
                  </Typography>
                </Box>
                <Box sx={{ display: { sm: "none", xs: "block" } }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#636869",
                    }}
                  >
                    {item.year}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ my: 7 }}>
        <Box>
          <Typography
            sx={{ fontSize: "22px", fontWeight: 600, color: "#000", mb: 2 }}
          >
            Education
          </Typography>
        </Box>
        <Box>
          {education.map((item, index) => (
            <Box
              key={index}
              sx={{
                p: 1.5,
                border: "1px solid #ebeeef",
                borderRadius: "20px",
                mb: 2,
                textAlign: { sm: "inherit", xs: "center" },
              }}
            >
              <Box sx={{ display: { sm: "flex", xs: "block" } }}>
                <Box sx={{ width: { sm: "8%", xs: "100%" } }}>{item.icon}</Box>
                <Box sx={{ width: { sm: "92%", xs: "100%" } }}>
                  <Box
                    sx={{
                      display: { sm: "flex", xs: "block" },
                      justifyContent: { sm: "space-between", xs: "center" },
                    }}
                  >
                    <Typography sx={{ fontWeight: 600, mb: { sm: 0, xs: 1 } }}>
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#636869",
                        mb: { sm: 0, xs: 1 },
                        display: { sm: "block", xs: "none" },
                      }}
                    >
                      {item.year}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        display: { sm: "none", xs: "block" },
                        mb: { sm: 0, xs: 1 },
                      }}
                    >
                      {item.location}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      textAlign: {
                        sm: "inherit",
                        xs: "center",
                        mb: { sm: 0, xs: 1 },
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        display: { sm: "block", xs: "none" },
                      }}
                    >
                      {item.location}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#636869",
                        mb: { sm: 0, xs: 1 },
                        display: { sm: "none", xs: "block" },
                      }}
                    >
                      {item.year}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ textAlign: { sm: "inherit", xs: "left" } }}>
                <Typography sx={{ fontSize: "14px", mr: 1 }}>
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default About;
