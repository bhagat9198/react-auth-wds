import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "400px",
    marginBottom: "20px",
    "@media (max-width:450px)": {
      width: "300px",
    },
  },
}));

export default function TextFieldComp(props) {
  const classes = useStyles();

  return (
    <TextField
      label={props?.label}
      variant="outlined"
      type={props?.type}
      className={classes.root}
      inputRef={props?.reff ? props.reff : null}
      required={props?.req ? true : false}
    />
  );
}
