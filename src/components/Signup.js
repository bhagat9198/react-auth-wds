import React, { useState, useRef } from "react";
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
  
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const cPassRef = useRef();

  const submitSignupHandler = (e) => {
    e.preventDefault();

    const fNameVal = fnameRef.current.value;
    const lNameVal = lnameRef.current.value;
    const emailVal = emailRef.current.value;
    const passVal = passRef.current.value;
    const cPassVal = cPassRef.current.value;

    console.log(fNameVal, lNameVal, emailVal, passVal, cPassVal);

    if(passVal !== cPassVal) {
      return;
    }

    
  };

  return (
    <>
      <Navbar page={"Signup"} />
      <br />
      <BreadcrumbsComp
        breadLinks={[
          { link: "/", name: "Home" },
          { link: "/signup", name: "Signup" },
        ]}
      />
      <div className={paperStyles.root}>
        <Typography color="primary" component={"div"}>
          <h1>Sign Up</h1>
        </Typography>

        <PaperComp>
          <form onSubmit={submitSignupHandler}>
            <TextFieldComp label={"First Name"} reff={fnameRef} req={true}/>
            <br />
            <TextFieldComp label={"Last Name"} reff={lnameRef} req={true} />
            <br /> <TextFieldComp label={"Email"}  type={"email"} reff={emailRef} req={true} />
            <br /> <TextFieldComp label={"Password"} type={"password"} reff={passRef} req={true} />
            <br /> <TextFieldComp label={"Confirm Password"} type={"password"} reff={cPassRef} req={true} />
            <br /> <ButtonComp type={"submit"}>SignUp</ButtonComp>
          </form>
        </PaperComp>
        <br />
        <Typography>
          Already have a account? <Link href="/Signin">SignIn</Link>
        </Typography>
      </div>
    </>
  );
}
