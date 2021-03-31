import React from "react";
import Navbar from "./Layout/Navbar";
import PaperComp from "./Layout/PaperComp";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextFieldComp from "./Layout/TextFieldComp";
import ButtonComp from "./Layout/ButtonComp";
import BreadcrumbsComp from "./Layout/BreadcrumbsComp";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    textAlign: "center",
    flexDirection: "column",
  },
}));

export default function ForgotPassword() {
  const classes = useStyles();
  return (
    <>
      <Navbar page={"ForgotPassword"} />
      <br />
      <BreadcrumbsComp
        breadLinks={[
          { link: "/", name: "Home" },
          { link: "/signin", name: "Signin" },
          { link: "/forget-password", name: "Forgot Password" },
        ]}
      />

      <div className={classes.root}>
        <Typography color="primary">
          <h1>Forgot Password</h1>
        </Typography>
        <PaperComp>
        <br /> <TextFieldComp label={"Email"} />
        <br /> <ButtonComp>Send Email</ButtonComp>

        </PaperComp>
      </div>
    </>
  );
}
