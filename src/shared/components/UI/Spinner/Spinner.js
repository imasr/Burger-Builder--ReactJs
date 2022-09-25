import React from 'react';

import classes from "./Spinner.module.scss";

const spinner = (props) => (
    // <div className="text-center">
    <div className={classes.Loader}>Loading...</div>
    // </div>
);

export default spinner;