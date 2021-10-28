import React from "react";

import classes from "./PageTitle.module.css";

const PageTitle = ({ title }) => {
  return (
    <div className={classes.heading}>
      <h3>{title}</h3>
    </div>
  );
};

export default PageTitle;
