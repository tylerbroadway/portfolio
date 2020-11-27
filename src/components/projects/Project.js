import { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "5rem 0 0 1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const Project = (props) => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  const { title, img, description, tech, repo, demo } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleButtonClick = (url) => {
    console.log(url);
    window.open(url);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={`${title}`} />
      <CardMedia
        className={classes.media}
        image={`${img}`}
        title={`${title}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Button
            className="project-link"
            variant="contained"
            onClick={() => handleButtonClick(repo)}
          >
            View Code
          </Button>
        </IconButton>
        <IconButton>
          <Button
            className="project-link"
            variant="contained"
            onClick={() => handleButtonClick(demo)}
          >
            Live Demo
          </Button>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Technologies Used:</Typography>
          <Typography paragraph>{tech}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Project;
