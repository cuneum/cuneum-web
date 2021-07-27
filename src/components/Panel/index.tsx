import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";

interface Props {
  title: string;
  subheader: string;
  image: string;
  url: string;
}

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    height: 360,
  },
  media: {
    height: 200,
  },
  header: {
    padding: 12,
  },
  title: {
    fontSize: "1em",
  },
  subheader: {
    fontSize: "0.7em",
  },
  link: {
    textDecoration: "none",
  },
});

export function Panel({ title, subheader, image, url }: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={{ pathname: url }} component={CardActionArea} disableRipple>
        <CardMedia className={classes.media} image={image} />
        <CardHeader
          className={classes.header}
          classes={{
            title: classes.title,
            subheader: classes.subheader,
          }}
          title={title}
          subheader={subheader}
        />
      </Link>
      <CardActions disableSpacing>
        <IconButton>
          <DoneIcon />
        </IconButton>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
