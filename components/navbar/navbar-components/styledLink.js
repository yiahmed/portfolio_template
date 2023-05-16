import Link from "next/link";
import React from "react";
import LinkTitle from "./linkTitle";
import { useRouter } from "next/router";
import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#865DFF",
    boxShadow: `${theme.shadows[4]}, 0px 0px 20px #865DFF`, // Decreased shadow intensity
    transition: "box-shadow 0.1s ease-in-out",
  },
}));

const StyledLink = ({ href, text }) => {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div className="w-full md:w-auto" >
      <Link href={href}>
        <StyledButton
          className="text-white border shadow-md rounded-lg"
          variant="text"
          size="small"
        >
          <LinkTitle text={text} />
        </StyledButton>
      </Link>
    </div>
  );
};

export default StyledLink;
