import { Box, Breadcrumbs, Button, Grid2, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Capture from "../assets/img/Capture.JPG";
import Capture2 from "../assets/img/Capture2.png";
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

function Projects() {
  const [filter, setFilter] = useState("All");

  // Filter data based on the selected category
  const filteredData =
    filter === "All"
      ? projectImage
      : projectImage.filter((item) => item.category === filter);

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
            <Grid2
              container
              spacing={{ xs: 1, md: 2 }}
              columns={{ xs: 12, sm: 6 }}
            >
              {filteredData.map((item, index) => (
                <Grid2 item xs={12} sm={6} sx={{ mb: 2 }} key={index}>
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
            <Grid2
              container
              spacing={{ xs: 1, md: 2 }}
              columns={{ xs: 12, sm: 6 }}
            >
              {filteredData.map((item, index) => (
                <Grid2 item xs={12} sm={6} sx={{ mb: 2 }} key={index}>
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
