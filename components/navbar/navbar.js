import Link from "next/link";
import React from "react";
import StyledLink from "./navbar-components/styledLink";

const Navbar = () => {
  return (
    <div
      style={{ height: "7vh" }}
      className="flex items-center justify-center h-full w-full px-4 space-x-4 border bg-[#03001C] shadow-md"
    >
      <StyledLink href={"/"} text={"Home"} />
      <StyledLink href={"/about"} text={"About"} />
      <StyledLink href={"/project"} text={"Projects"} />
      <StyledLink href={"/contact"} text={"Contact"} />
    </div>
  );
};

export default Navbar;
