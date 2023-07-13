import React, { useState } from "react";
import classes from "../styles/calculator.module.css";
import Column from "./Column";
import Output from "./Output";
import calculate from '../logic/calculate';




const column1 = [
    {
        outputOperation: "AC",
        operationSign: "AC",
        type: "action"
    },
    {
        outputOperation: "+/-",
        operationSign: "+/-",
        type: "action"
    },
    {
        outputOperation: "%",
        operationSign: "%",
        type: "calculatorOperation"
    },
    {
        outputOperation: "÷",
        operationSign: "÷",
        type: "calculatorOperation"
    }
];


const column2 = [
    {
        outputOperation: "7",
        operationSign: "7",
        type: "value"
    },
    {
        outputOperation: "8",
        operationSign: "8",
        type: "value"
    },
    {
        outputOperation: "9",
        operationSign: "9",
        type: "value"
    },
    {
        outputOperation: "×",
        operationSign: "x",
        type: "calculatorOperation"
    }
];

const column3 = [
    {
        outputOperation: "4",
        operationSign: "4",
        type: "value"
    },
    {
        outputOperation: "5",
        operationSign: "5",
        type: "value"
    },
    {
        outputOperation: "6",
        operationSign: "6",
        type: "value"
    },
    {
        outputOperation: "-",
        operationSign: "-",
        type: "calculatorOperation"
    }
];

const column4 = [
    {
        outputOperation: "1",
        operationSign: "1",
        type: "value"
    },
    {
        outputOperation: "2",
        operationSign: "2",
        type: "value"
    },
    {
        outputOperation: "3",
        operationSign: "3",
        type: "value"
    },
    {
        outputOperation: "+",
        operationSign: "+",
        type: "calculatorOperation"
    }
];

const column5 = [
    {
        outputOperation: "0",
        operationSign: "0",
        type: "value"
    },
    {
        outputOperation: ".",
        operationSign: ".",
        type: "value"
    },
    {
        outputOperation: "=",
        operationSign: "=",
        type: "action"
    }
];

const columnsList = [
    column1,
    column2,
    column3,
    column4,
    column5
];


const Calculator = () => {
    const [state, setState] = useState({});

    const outputValue = state.next || state.total || '0';

    const onPress = (dts) => {
        const newState = calculate(state, dts.payload.value);
        setState(newState);

    };

    return <div className={classes.calculator}>
        <Output
            output={outputValue}
            result={state.result}
            error={state.isError}
            outputValue={state.outputValue}
        />

        {columnsList.map((columnData, index) => {
            return <Column
                onPress={onPress}
                key={index}
                columnData={columnData}
            />
        })}
    </div>;
};

export default Calculator;
