import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import StyledLink from "./styledLink";

export default function HamburgerMenu() {
  const [open, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState(open);
  };

  return (
    <div className="w-full flex justify-end sm:hidden">
    <Box className="bg-[#03001C]">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        sx={{
          mr: 2,
          display: {
            xs: "block",
            sm: "none",
            color: "#fff",
          },
        }}
      >
        <MenuIcon sx={{fontSize: 45}}/>
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box sx={{ p: 2, height: 1, backgroundColor: "#03001C" }}>
          <IconButton sx={{ mb: 2 }}>
            <CloseIcon onClick={toggleDrawer(false)} sx={{ color: "#fff" }} />
          </IconButton>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ mb: 2 }}>
            <ListItemButton>
              <StyledLink href={"/"} text={"Home"} />
            </ListItemButton>

            <ListItemButton>
              <StyledLink href={"/about"} text={"About"} />
            </ListItemButton>

            <ListItemButton>
              <StyledLink href={"/project"} text={"Projects"} />
            </ListItemButton>

            <ListItemButton>
              <StyledLink href={"/contact"} text={"Contact"} />
            </ListItemButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
          ></Box>
        </Box>
      </Drawer>
    </Box>
    </div>
  );
}
