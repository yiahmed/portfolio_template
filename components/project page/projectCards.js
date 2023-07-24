import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const projectInfo = [
  {
    id: 1,
    title: "Sports Application",
    image: "/sports-application.png",
    description:
      "With up-to-date information, our app offers a comprehensive view of the 2022/2023 postseason, showcasing the complete list of teams that have qualified for the playoffs. Stay ahead of the game by delving into detailed rosters and player statistics.",
    gitHubRepo: "https://github.com/yiahmed/counter-redux-typescript",
    vercelLink: "https://sports-application.vercel.app/nba-postseason",
  },
  {
    id: 2,
    title: "My Portfolio",
    image: "/portfolio.png",
    description:
      "My personal portfolio site is built with NextJS, Material UI, TailwindCSS",
    gitHubRepo: "https://github.com/yiahmed/portfolio_template",
    vercelLink: "https://my-portfolio-yiahmed.vercel.app/",
  },
  {
    id: 3,
    title: "Firebase Auth React Native",
    image: "/firebase-auth.PNG",
    description:
      "A simple React Native application displaying a login screen allowing user creation/authentication and sign in functionality using Firebase Auth",
    gitHubRepo: "https://github.com/yiahmed/auth-native-practice",
    vercelLink: "",
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
    <div className="flex flex-col md:flex-row lg:flex-row py-1">
      {projectInfo.map((project, index) => (
        <div key={index} className="px-4 py-2 lg:py-0">
          <Card
            sx={{
              maxWidth: 345,
              bgcolor: "#1e1e1e",
              color: "white",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              className="image-container"
              image={project.image}
              alt="test image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2">{project.description}</Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => handleGitHubClick(project.gitHubRepo)}>
                <GitHubIcon
                  className={`text-3xl sm:text-3xl text-white cursor-pointer`}
                  style={{ animationDelay: "1s" }}
                />
              </Button>
              {project.vercelLink ? (
                <Button onClick={() => handleVercelClick(project.vercelLink)}>
                  <img
                    src="/vercel.svg"
                    alt="next"
                    width={75}
                    className="filter-invert"
                  />
                </Button>
              ) : null}
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
