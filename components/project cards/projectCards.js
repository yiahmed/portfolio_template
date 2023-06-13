import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { PropaneTank } from "@mui/icons-material";

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
  return (
    <>
      {projectInfo.map((project, index) => (
        <div className="border-2 border-rose-500" key={index}>
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
              <Button size="small" color="primary">
                These will be GitHub links
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </>
  );
};

export default ProjectCards;
