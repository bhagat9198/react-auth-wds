import React from "react";
import Navbar from "./Layout/Navbar";
import PaperComp from "./Layout/PaperComp";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldComp from "./Layout/TextFieldComp";
import ButtonComp from "./Layout/ButtonComp";
import BreadcrumbsComp from "./Layout/BreadcrumbsComp";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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

export default function Signup() {
  const paperStyles = useStyles();
  return (
    <>
      <Navbar page={"Signin"} />
      <br />
      <BreadcrumbsComp
        breadLinks={[
          { link: "/", name: "Home" },
          { link: "/signin", name: "Signin" },
        ]}
      />
      <div className={paperStyles.root}>
        <Typography color="primary">
          <h1>Sign In</h1>
        </Typography>

        <PaperComp>
          <br /> <TextFieldComp label={"Email"} />
          <br /> <TextFieldComp label={"Password"} type={"password"} />
          <Typography><Link href="/forgot-password">Forgot Password?</Link></Typography>

          <br /> <ButtonComp>SignIn</ButtonComp>
        </PaperComp>
        <br />
        <Typography>
          Not yet registred? <Link href="/Signup">SignUp</Link>
        </Typography>
      </div>
    </>
  );
}
