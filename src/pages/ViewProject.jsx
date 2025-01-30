import React from "react";
import { Box, Breadcrumbs, Divider, Grid2, Typography } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Capture from "../assets/img/Capture.JPG";
import Capture2 from "../assets/img/Capture2.png";
import Capture4 from "../assets/img/Capture4.png";
import Capture5 from "../assets/img/Capture5.png";
import Capture6 from "../assets/img/Capture6.png";
import Picture4 from "../assets/img/Picture4.png";
import Picture3 from "../assets/img/Picture3.png";
import Picture2 from "../assets/img/Picture2.png";
import Picture1 from "../assets/img/Picture1.png";

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
    subImg: [
      { img: Picture4, title: "Green sustainable city" },
      { img: Picture3, title: "Floating city" },
      { img: Picture2, title: "Underwater city" },
      { img: Picture1, title: "Post apocalyptic city" },
    ],
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

function ViewProject() {
  const { id } = useParams();

  const filteredData = projectImage.filter(
    (item) => item.id === parseInt(id)
  )[0];

  const allData = projectImage.filter(
    (item) =>
      item.id !== parseInt(id) && item.category === filteredData.category
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
          <Typography sx={{ color: "#636869" }}>Projects</Typography>
        </NavLink>
        <Typography sx={{ color: "#000" }}>{filteredData.name}</Typography>
      </Breadcrumbs>
      <Box sx={{ mt: 4 }}>
        <img
          src={filteredData.img}
          alt=""
          width={"100%"}
          height={"100%"}
          style={{ borderRadius: "20px" }}
        />
      </Box>
      <Box sx={{ textAlign: { sm: "left", xs: "center" }, mt: 4 }}>
        <Typography sx={{ fontSize: "34px", fontWeight: 600 }}>
          {filteredData.name}
        </Typography>
        <Typography
          sx={{ fontSize: "32px", fontWeight: 600, color: "#636869" }}
        >
          {filteredData.title}
        </Typography>
      </Box>
      <Divider sx={{ my: 4 }} />
      {filteredData.isLink && (
        <>
          <Box sx={{ textAlign: { sm: "left", xs: "center" } }}>
            <Typography sx={{ color: "#636869", fontWeight: 600 }}>
              Links
            </Typography>
            <a href={filteredData.link} target="_blank" className="link">
              Behance
            </a>
          </Box>
          <Divider sx={{ my: 4 }} />
        </>
      )}
      <Box sx={{ mb: 3 }}>
        <Typography>{filteredData.description}</Typography>
      </Box>

      {!filteredData.isLink && (
        <Grid2 container spacing={{ xs: 1, md: 2 }} sx={{ mb: 5 }}>
          {filteredData.subImg.map((item, index) => (
            <Grid2 item size={{ xs: 12, sm: 6 }} key={index} sx={{ mb: 1 }}>
              <Box sx={{ width: "100%" }}>
                <img
                  src={item.img}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  style={{ borderRadius: "15px" }}
                />
              </Box>
              <Typography sx={{ textAlign: "center" }}>{item.title}</Typography>
            </Grid2>
          ))}
        </Grid2>
      )}
      <Box sx={{ mb: 5 }}>
        <Typography
          sx={{ fontSize: "22px", fontWeight: 600, color: "#000", mb: 2 }}
        >
          You may also like
        </Typography>
        <Grid2 container spacing={{ xs: 1, md: 2 }}>
          {allData.map((item, index) => (
            <Grid2 item size={{ xs: 12, sm: 6 }} sx={{ mb: 2 }} key={index}>
              <NavLink to={`/view-project/${item.id}`}>
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
    </Box>
  );
}

export default ViewProject;
