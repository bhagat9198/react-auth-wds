import React from "react";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '40px'
  },
}));


export default function PaperComp(props) {
  const paperStyles = useStyles();
  return <Paper className={paperStyles.root} elevation={3}>{props.children}</Paper>;
}
