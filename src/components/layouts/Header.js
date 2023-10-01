"use client";
import { Box } from "@mui/material";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    console.log("re-render header");
  }, []);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "red",
          height: "10rem",
          width: "100vw",
        }}
      >
        Header
      </Box>
    </>
  );
};
export default Header;
