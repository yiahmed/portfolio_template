import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Icon } from "@iconify/react";

const projectInfo = [
  {
    title: "Sports Application",
    image: "/sports-application.png",
    description: "test description",
    gitHubRepo: "https://github.com/yiahmed/counter-redux-typescript",
    vercelLink: "https://sports-application.vercel.app/nba-postseason",
  },
];

const ProjectCards = () => {
  const handleGitHubClick = (githubLink) => {
    window.open(githubLink, "_blank");
  };

  const handleVercelClick = (vercelLink) => {
    window.open(vercelLink, "_blank");
  };

  return (
    <>
      {projectInfo.map((project, index) => (
        <div key={index}>
          <Card sx={{ maxWidth: 345 }} className="bg-[#1e1e1e] text-white">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt="test image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button onClick={() => handleGitHubClick(project.gitHubRepo)}>
                <GitHubIcon
                  className={`text-3xl sm:text-3xl text-white cursor-pointer`}
                  style={{ animationDelay: "1s" }}
                />
              </Button>
              <Button onClick={() => handleVercelClick(project.vercelLink)}>
                <img
                  src="/vercel.svg"
                  alt="next"
                  width={75}
                  className="filter-invert"
                />
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </>
  );
};

export default ProjectCards;
