import React from "react";
import classes from '../styles/calculator.module.css';

const Output = ({ output }) => {
    return <div className={classes.output}>
        <div className={classes.CalculationOutput}>
            <h1>{output}</h1>
        </div>
    </div>;
};

export default Output;
