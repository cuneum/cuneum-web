import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Panel } from "../../Molecules/Panel";
import { Item } from "../../../types";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: "10px",
      flexGrow: 1,
    },
  }),
);

interface Props {
  items: Item[];
}

export function PanelList({ items }: Props) {
  const classes = useStyles();

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
