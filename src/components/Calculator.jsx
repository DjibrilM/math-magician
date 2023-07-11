import React from "react";
import classes from "../styles/calculator.module.css";
import Column from "./Column";

const column1 = [
    {
        outputOperation: "AC",
        operationSign: "_",
        type: "action"
    },
    {
        outputOperation: "+/-",
        operationSign: "_",
        type: "action"
    },
    {
        outputOperation: "%",
        operationSign: "%",
        type: "calculatorOperation"
    },
    {
        outputOperation: "/",
        operationSign: "÷",
        type: "calculatorOperation"
    }
];


const column2 = [
    {
        outputOperation: "7",
        operationSign: "_",
        type: "value"
    },
    {
        outputOperation: "8",
        operationSign: "_",
        type: "value"
    },
    {
        outputOperation: "9",
        operationSign: "_",
        type: "value"
    },
    {
        outputOperation: "×",
        operationSign: "*",
        type: "calculatorOperation"
    }
];


const column3 = [
    {
        outputOperation: "4",
        operationSign: "_",
        type: "value"
    },
    {
        outputOperation: "5",
        operationSign: "_",
        type: "value"
    },
    {
        outputOperation: "6",
        operationSign: "_",
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
        operationSign: "_",
        type: "value"
    },
    {
        outputOperation: "2",
        operationSign: "_",
        type: "value"
    },
    {
        outputOperation: "3",
        operationSign: "_",
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
        operationSign: "_",
        type: "value"
    },
    {
        outputOperation: ".",
        operationSign: "_",
        type: "value"
    },
    {
        outputOperation: "=",
        operationSign: "_",
        type: "action"
    }
];

const columnsList = [
    column1,
    column2,
    column3,
    column4,
    column5
]


const Calculator = () => {
    return <div className={classes.calculator}>
        <div className={classes.output}></div>
        {columnsList.map((columnData, index) => {
            return <Column key={index} columnData={columnData} />
        })}
    </div>;
};

export default Calculator;
