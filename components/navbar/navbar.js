import Link from "next/link";
import React from "react";
import StyledLink from "./navbar-components/styledLink";
import HamburgerMenu from "./navbar-components/hamburgerMenu";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-center px-4 space-x-4 bg-[#0A1A2E] shadow-black shadow-2xl overflow-x-auto h-14 sm:h-16 ">
      <div className="space-x-4 hidden sm:flex">
        <StyledLink href={"/"} text={"Home"} />
        <StyledLink href={"/about"} text={"About"} />
        <StyledLink href={"/project"} text={"Projects"} />
        <StyledLink href={"/contact"} text={"Contact"} />
      </div>
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
