import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  BreadcrumbStyle: {
    marginLeft: "100px",
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function BreadcrumbsComp(props) {
  const classes = useStyles();

  let allLinks = props?.breadLinks.map((l, index) => {
    if (index === props.breadLinks.length - 1) {
      return (
        <Typography
          key={l.link}
          color="textPrimary"
          className={classes.linkStyle}
        >
          {l.name}
        </Typography>
      );
    }
    return (
      <Link
        key={l.link}
        color="inherit"
        to={l.link}
        className={classes.linkStyle}
      >
        <strong> {l.name} </strong>
      </Link>
    );
  });

  return (
    <div
      style={{
        marginRight: "50px",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">{allLinks}</Breadcrumbs>
    </div>
  );
}
