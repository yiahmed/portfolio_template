import Link from "next/link";
import React from "react";
import LinkTitle from "./linkTitle";
import { useRouter } from "next/router";
import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#63FFDA",
    boxShadow: `${theme.shadows[4]}, 0px 0px 20px #63FFDA`, // Decreased shadow intensity
    transition: "box-shadow 0.1s ease-in-out",
  },
}));

const StyledLink = ({ href, text }) => {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div className="w-full md:w-auto">
      <Link href={href}>
        <StyledButton
          sx={{
            color: "white",
            boxShadow: "md",
            borderRadius: "lg",
          }}
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
