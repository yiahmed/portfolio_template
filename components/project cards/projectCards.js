import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const yahyaImg = "/IMG_2584.jpg";
const sportsApplication = "/sports-application.png";
const projectInfo = [
  {
    title: "Sports Application",
    image: "/sports-application.png",
    description: "test description",
  },
];

const ProjectCards = () => {
  const [showIcons, setShowIcons] = useState(false);
  const handleGitHubClick = () => {
    window.open("https://github.com/yiahmed", "_blank");
  };

  return (
    <>
      {projectInfo.map((project, index) => (
        <div key={index}>
          <Card sx={{ maxWidth: 345 }}>
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
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button onClick={handleGitHubClick}>
                <GitHubIcon
                  className={`text-3xl sm:text-3xl text-black  cursor-pointer`}
                  style={{ animationDelay: "1s" }}
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
