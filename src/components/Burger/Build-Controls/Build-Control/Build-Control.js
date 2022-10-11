import React from "react";

import classes from "./Build-Control.module.scss";
import Button from "@mui/material/Button";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <Button
      variant="contained"
      className={classes.Less}
      onClick={props.remove}
      disabled={props.disabledInfo}
    >
      Less
    </Button>
    <Button variant="contained" className={classes.More} onClick={props.add}>
      More
    </Button>
  </div>
);

export default buildControl;
