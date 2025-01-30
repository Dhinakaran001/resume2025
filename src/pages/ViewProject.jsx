import React from "react";
import { Box, Breadcrumbs, Divider, Grid2, Typography } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Capture from "../assets/img/Capture.JPG";
import Capture2 from "../assets/img/Capture2.png";
import Capture3 from "../assets/img/Capture3.JPG";
import Capture4 from "../assets/img/Capture4.png";

const projectImage = [
  {
    id: 1,
    img: Capture,
    name: "Queen's hive",
    title: "Logo design and Branding",
    category: "Personal",
    description:
      "A comprehensive branding project focused on creating a distinct identity for Queens Hive. The project included designing a modern, elegant logo, developing cohesive brand assets, and crafting a visual language that reflects the brand's essence of sophistication and creativity. The outcome was a polished, memorable brand identity that resonates with its target audience.",
  },
  {
    id: 2,
    img: Capture2,
    name: "Queen's hive",
    title: "Logo design and Branding",
    description:
      "A captivating digital artwork created using Photoshop, featuring a lone man in a trekking suit standing at the center, surrounded by majestic mountains, a luminous moon, drifting clouds, and serene trees in the background. The piece evokes a sense of adventure and tranquility, blending vibrant colors and intricate details to bring the beauty of nature and the spirit of exploration to life.",
    category: "Personal",
  },
  {
    id: 3,
    img: Capture4,
    name: "Queen's hive",
    title: "Logo design and Branding",
    description:
      "A vibrant and dynamic poster designed in Adobe Illustrator to promote the delivery of farm-fresh vegetables within 10 minutes. The artwork features bold typography, colorful illustrations of fresh produce, and a modern layout that emphasizes speed and quality. The design effectively captures the essence of freshness and convenience, making it visually appealing and engaging for the target audience.",
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
        <img src={filteredData.img} alt="" width={"100%"} height={"100%"} />
      </Box>
      <Box sx={{ textAlign: { sm: "left", xs: "center" } }}>
        <Typography
          sx={{ fontSize: "34px", fontWeight: 600, color: "#636869" }}
        >
          {filteredData.name}
        </Typography>
        <Typography sx={{ fontSize: "34px", fontWeight: 600 }}>
          {filteredData.title}
        </Typography>
      </Box>
      <Divider sx={{ my: 4 }} />
      <Box sx={{ textAlign: { sm: "left", xs: "center" } }}>
        <Typography sx={{ color: "#636869", fontWeight: 600 }}>
          Links
        </Typography>
        <a
          href="https://www.example.com" // Replace with your desired URL
          target="_blank"
          className="link"
        >
          Behance
        </a>
      </Box>
      <Divider sx={{ my: 4 }} />
      <Box sx={{ mb: 3 }}>
        <Typography>{filteredData.description}</Typography>
      </Box>
      <Box sx={{ mb: 5 }}>
        <Typography
          sx={{ fontSize: "22px", fontWeight: 600, color: "#000", mb: 2 }}
        >
          You may also like
        </Typography>
        <Grid2 container spacing={{ xs: 1, md: 2 }}>
          {allData.map((item, index) => (
            <Grid2 item sm={6} xs={12} sx={{ mb: 2 }} key={index}>
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
