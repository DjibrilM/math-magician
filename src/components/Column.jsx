import React from "react";
import classes from '../styles/column.module.css';
import Button from "./Button.jsx";


const Column = ({ columnData }) => {
  return <div className={classes.column}>
    {columnData.map((buttonConfiguration, index) => <Button key={index} configuration={buttonConfiguration} />)}
  </div>;
};



export default Column;
