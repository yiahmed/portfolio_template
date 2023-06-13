import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const yahyaImg = "/IMG_2584.jpg";
const sportsApplication = "/sports-application.png";
const projectInfo = [
  {
    title: "About me",
    image: yahyaImg,
    description:
      "Hi there! I am a full-stack developer with a passion for problem-solving and being creative. I am also a fitness enthusiast who enjoys pushing my limits and staying active. As a developer, I am constantly looking for new challenges and opportunities to grow my skills.",
  },
  {
    title: "skills",
    image: yahyaImg,
    description:
      "Currently, I am actively seeking internships to further my knowledge and gain practical experience in the field. One quote that I live by is 'There is no elevator to success, You have to take the stairs' by Zig Ziglar. This quote motivates me to work hard and persevere through any obstacles that come my way.",
  },
  {
    title: "interest",
    image: yahyaImg,
    description:
      "I believe that with dedication and hard work, anything is possible, and I am excited to see where my journey as a developer takes me.",
  },
];

const ProjectCards = () => {
  return (
    <div className="border-2 border-rose-500">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={sportsApplication}
            alt="test image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Place holder text for project title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Place holder text for project description
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            These will be github links
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCards;
