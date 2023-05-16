import Link from "next/link";
import React from "react";
import StyledLink from "./navbar-components/styledLink";
import HamburgerMenu from "./navbar-components/hamburgerMenu";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-center px-4 space-x-4 border bg-[#03001C] shadow-md overflow-x-auto">
      <div className="hidden sm:flex">
        {/* StyledLink components will be visible on medium and large screens */}
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
