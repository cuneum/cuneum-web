import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Panel } from "../../components/Panel";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: "10px",
      flexGrow: 1,
    },
  }),
);

export function Home() {
  const classes = useStyles();
  const items = [];

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {items.map((item, i) => {
          return (
            <Grid item xs={12} md={3} key={`item_${i}`}>
              <Panel image={item.image} title={item.title} subheader={item.subheader} url={item.url} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
