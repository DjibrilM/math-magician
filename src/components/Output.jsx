import React from "react";
import classes from '../styles/calculator.module.css';

const Output = ({ outputValue, result, error }) => {
    return <div className={classes.output}>
        <div className={classes.resultContainer}>
            <h4>
                {result && !error ? outputValue : result}
            </h4>
        </div>

        <div className={classes.CalculationOutput}>
            <h2>{!result && !error ? outputValue : result}</h2>
            {error && <h1>Error</h1>}
        </div>
    </div>;
};

export default Output;
