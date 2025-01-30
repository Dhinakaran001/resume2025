import { Box, Breadcrumbs, Button, Grid2, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Capture from "../assets/img/Capture.JPG";
import Capture2 from "../assets/img/Capture2.png";
import Capture4 from "../assets/img/Capture4.png";
import Capture5 from "../assets/img/Capture5.png";
import Capture6 from "../assets/img/Capture6.png";

const projectImage = [
  {
    id: 1,
    img: Capture,
    name: "Queen's hive",
    title: "Logo design and Branding",
    category: "Personal",
    link: "https://www.behance.net/gallery/180335929/Queens-Hive",
    isLink: true,
    description:
      "A comprehensive branding project focused on creating a distinct identity for Queens Hive. The project included designing a modern, elegant logo, developing cohesive brand assets, and crafting a visual language that reflects the brand's essence of sophistication and creativity. The outcome was a polished, memorable brand identity that resonates with its target audience.",
  },
  {
    id: 2,
    img: Capture2,
    name: "Explorer",
    title: "Digital art",
    link: "https://www.behance.net/gallery/180218883/Digital-painting",
    isLink: true,
    description:
      "A captivating digital artwork created using Photoshop, featuring a lone man in a trekking suit standing at the center, surrounded by majestic mountains, a luminous moon, drifting clouds, and serene trees in the background. The piece evokes a sense of adventure and tranquility, blending vibrant colors and intricate details to bring the beauty of nature and the spirit of exploration to life.",
    category: "Personal",
  },
  {
    id: 3,
    img: Capture4,
    name: "Farm Fresh",
    title: "Illustrator art",
    link: "https://www.behance.net/gallery/180218393/Poster-design",
    isLink: true,
    description:
      "A vibrant and dynamic poster designed in Adobe Illustrator to promote the delivery of farm-fresh vegetables within 10 minutes. The artwork features bold typography, colorful illustrations of fresh produce, and a modern layout that emphasizes speed and quality. The design effectively captures the essence of freshness and convenience, making it visually appealing and engaging for the target audience.",
    category: "Personal",
  },
  {
    id: 4,
    img: Capture5,
    name: "Futuristic Cities",
    title: "AI design using Runwayml",
    link: "",
    isLink: false,
    description:
      "My work using Runway ML involved leveraging its AI-powered generative tools to create a futuristic cityscape from a text prompt. The process likely included Text-to-Image Generation: You provided a descriptive text prompt, and Runway ML's AI models transformed it into a visual representation.	Customization & Refinement: You may have adjusted parameters like style, color, or composition to fine-tune the output.",
    category: "Others",
  },
  {
    id: 5,
    img: Capture6,
    name: "Dancing model",
    title: "Web AR design",
    link: "https://truth-transparent-elm.glitch.me",
    isLink: true,
    description:
      "The dancing model, created using MidJourney, is a plain, colorless figure focused solely on executing basic dance moves. Without elaborate textures or colors, the model emphasizes pure motion and form, showcasing the fundamental essence of dance. The movements are likely smooth and natural, capturing rhythm, balance, and fluidity without distractions. This minimalist approach highlights pose, gesture, and motion dynamics, making it an ideal base for further refinement or animation.",
    category: "Others",
  },
];

function Projects() {
  const [filter, setFilter] = useState("All");

  // Filter data based on the selected category
  const filteredPersonalData = projectImage.filter(
    (item) => item.category === "Personal"
  );

  const filteredOthersData = projectImage.filter(
    (item) => item.category === "Others"
  );

  return (
    <Box>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <NavLink to={"/home"}>
          <Typography sx={{ color: "#636869" }}>Home</Typography>
        </NavLink>
        <NavLink to={"/projects"}>
          <Typography sx={{ color: "#000" }}>Projects</Typography>
        </NavLink>
      </Breadcrumbs>
      <Box sx={{ textAlign: "center", my: 7 }}>
        <Typography sx={{ fontSize: "22px", fontWeight: 600, color: "#000" }}>
          Projects
        </Typography>
        <Typography sx={{ color: "#636869", px: { sm: 20, xs: 0 } }}>
          Fusing artistry and precision to bring unique design concepts to life
          in each project.
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Button
          onClick={() => setFilter("All")}
          sx={{
            textTransform: "capitalize",
            backgroundColor: filter === "All" ? "#000" : "#ebeeef",
            color: filter === "All" ? "#fff" : "#000",
            borderRadius: "20px",
            p: "5px 8px",
            m: 1,
          }}
        >
          All
        </Button>
        <Button
          onClick={() => setFilter("Personal")}
          sx={{
            textTransform: "capitalize",
            backgroundColor: filter === "Personal" ? "#000" : "#ebeeef",
            color: filter === "Personal" ? "#fff" : "#000",
            borderRadius: "20px",
            p: "5px 8px",
            m: 1,
          }}
        >
          Personal
        </Button>
        <Button
          onClick={() => setFilter("Others")}
          sx={{
            textTransform: "capitalize",
            backgroundColor: filter === "Others" ? "#000" : "#ebeeef",
            color: filter === "Others" ? "#fff" : "#000",
            borderRadius: "20px",
            p: "5px 8px",
            m: 1,
          }}
        >
          Others
        </Button>
      </Box>
      {(filter === "All" || filter === "Personal") && (
        <>
          <Box sx={{ mb: 5 }}>
            <Typography
              sx={{ fontSize: "22px", fontWeight: 600, color: "#000", mb: 2 }}
            >
              Personal
            </Typography>
            <Grid2 container spacing={{ xs: 1, md: 2 }}>
              {filteredPersonalData.map((item, index) => (
                <Grid2 item size={{ xs: 12, sm: 6 }} sx={{ mb: 2 }} key={index}>
                  <NavLink to={`/view-project/${item.id.toString()}`}>
                    <Box
                      sx={{
                        textAlign: "center",
                        my: "auto",
                        p: "70px 40px",
                        backgroundColor: "#ebeeef",
                        borderRadius: "15px",
                      }}
                    >
                      <img
                        src={item.img}
                        alt={`Image ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "230px",
                          objectFit: "cover",
                          borderRadius: "15px",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
                        {item.name}
                      </Typography>
                      <Typography sx={{ textAlign: "center" }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </NavLink>
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </>
      )}
      {(filter === "All" || filter === "Others") && (
        <>
          <Box sx={{ mb: 5 }}>
            <Typography
              sx={{ fontSize: "22px", fontWeight: 600, color: "#000", mb: 2 }}
            >
              Others
            </Typography>
            <Grid2 container spacing={{ xs: 1, md: 2 }}>
              {filteredOthersData.map((item, index) => (
                <Grid2 item size={{ xs: 12, sm: 6 }} sx={{ mb: 2 }} key={index}>
                  <NavLink to={`/view-project/${item.id.toString()}`}>
                    <Box
                      sx={{
                        textAlign: "center",
                        my: "auto",
                        p: "70px 40px",
                        backgroundColor: "#ebeeef",
                        borderRadius: "15px",
                      }}
                    >
                      <img
                        src={item.img}
                        alt={`Image ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "230px",
                          objectFit: "cover",
                          borderRadius: "15px",
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
                        {item.name}
                      </Typography>
                      <Typography sx={{ textAlign: "center" }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </NavLink>
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Projects;
