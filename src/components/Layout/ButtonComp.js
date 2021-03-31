import React from 'react';
import Button from '@material-ui/core/Button';

export default function ButtonComp(props) {
  return (
    <Button type={props?.type === "submit" ? "submit" : "btn"} variant="contained" color="primary">
      {props.children}
    </Button>
  )
}

