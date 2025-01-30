import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Capture from "../assets/img/Capture.JPG";
import Capture2 from "../assets/img/Capture2.png";
import Capture3 from "../assets/img/Capture3.JPG";
import Capture4 from "../assets/img/Capture4.png";
import { NavLink } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

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

function ScrollableGallery(props) {
  const { scrollContainerRef, isAutoScroll, setIsAutoScroll, visibleImages } =
    props;

  // Get the exact card width dynamically
  const getCardWidth = () => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector("div:first-child");
      return card ? card.offsetWidth + 8 : 0; // Add gap/margin
    }
    return 0;
  };

  // Automatic scrolling logic
  useEffect(() => {
    let interval;
    if (isAutoScroll) {
      interval = setInterval(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } =
            scrollContainerRef.current;
          const cardWidth = getCardWidth();

          // Scroll by exact card width
          scrollContainerRef.current.scrollBy({
            left: cardWidth,
            behavior: "smooth",
          });

          // Reset to start if at the end
          if (scrollLeft + clientWidth + cardWidth >= scrollWidth) {
            scrollContainerRef.current.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          }
        }
      }, 3000); // Scroll every 3 seconds
    }

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isAutoScroll]);

  // Manual scroll handler
  const handleManualScroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = getCardWidth();
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
    setIsAutoScroll(false);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleManualScroll("right"), // Swipe left to go to the next image
    onSwipedRight: () => handleManualScroll("left"), // Swipe right to go to the previous image
    preventDefaultTouchmoveEvent: true, // Prevent default touch behavior
    trackMouse: true, // Enable mouse swipe for desktop testing
  });

  return (
    <Box sx={{ margin: "20px auto", overflow: "hidden", display: "block" }}>
      {/* Manual Scroll Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
        <Typography sx={{ fontSize: "22px", fontWeight: 600, my: "auto" }}>
          Projects
        </Typography>
        <Box sx={{ display: "flex" }}>
          <NavLink to={"/projects"} style={{ margin: "auto 0px" }}>
            <Button
              variant="contained"
              startIcon={<GridViewRoundedIcon sx={{ color: "#000" }} />}
              sx={{
                textTransform: "capitalize",
                backgroundColor: "#ebeeef",
                borderRadius: "20px",
                color: "#000",
                boxShadow: "none",
                p: "5px 18px",
              }}
            >
              View All
            </Button>
          </NavLink>
          <Box sx={{ display: { sm: "flex", xs: "none" } }}>
            <IconButton
              onClick={() => handleManualScroll("left")}
              sx={{ m: 2, backgroundColor: "#ebeeef", color: "#000" }}
            >
              <KeyboardArrowLeftOutlinedIcon />
            </IconButton>
            <IconButton
              onClick={() => handleManualScroll("right")}
              sx={{ m: 2, backgroundColor: "#ebeeef", color: "#000" }}
            >
              <KeyboardArrowRightOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Scrollable Image Container */}

      <Box
        ref={scrollContainerRef}
        sx={{
          display: { sm: "flex", xs: "none" },
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: 1,
          width: "100%",
          "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Chrome/Edge
        }}
      >
        {projectImage.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: `0 0 calc(100% / ${visibleImages})`,
              borderRadius: "15px",
              overflow: "hidden",
              justifyContent: "center",
              m: 0,
              p: 0,
            }}
          >
            <NavLink to={`/view-project/${item.id}`}>
              <Box
                sx={{
                  textAlign: "center",
                  my: "auto",
                  p: "60px 30px",
                  backgroundColor: "#ebeeef",
                }}
              >
                <img
                  src={item.img}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
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
          </Box>
        ))}
      </Box>
      <Box
        ref={scrollContainerRef}
        {...handlers}
        sx={{
          display: { xs: "flex", sm: "none" },
          overflowX: "auto",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Chrome/Edge
        }}
      >
        {projectImage.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: `0 0 100%`,
              pr: "10px",
              borderRadius: "8px",
              overflow: "hidden",
              justifyContent: "center",
            }}
          >
            <NavLink to={`/view-project/${item.id}`}>
              <Box
                sx={{
                  textAlign: "center",
                  my: "auto",
                  p: "70px 40px",
                  backgroundColor: "#ebeeef",
                }}
              >
                <img
                  src={item.img}
                  alt={`Image ${index + 1}`}
                  style={{ width: "100%", height: "230px", objectFit: "cover" }}
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
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ScrollableGallery;
