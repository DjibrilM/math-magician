import React from "react";
import classes from '../styles/column.module.css';
import Button from "./Button.jsx";


const Column = ({ columnData, onPress }) => {
  return <div className={classes.column}>
    {columnData.map((buttonConfiguration, index) => <Button
      key={index}
      configuration={buttonConfiguration}
      oncClick={onPress}
    />)}
  </div>;
};



export default Column;
