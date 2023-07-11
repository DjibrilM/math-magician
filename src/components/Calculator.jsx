import React, { useReducer } from "react";
import classes from "../styles/calculator.module.css";
import Column from "./Column";
import Output from "./Output";

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
        operationSign: "/",
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
        operationSign: "*",
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

const calculatorReducer = (state, actions) => {
    switch (actions.type) {
        case "value": {
            const newState = state;
            newState.outputValue = newState.outputValue + actions.payload.outputValue;
            newState.calculationInput = newState.calculationInput + actions.payload.value;
            return { ...newState, result: "", isError: false };
        }

        case "calculatorOperation": {
            let newState = state;
            let inputArr = newState.calculationInput.split("");
            let outputArr = newState.outputValue.split("");
            const lastChar = ++inputArr[inputArr.length - 1];

            if (Number.isNaN(lastChar)) {
                inputArr[inputArr.length - 1] = actions.payload.value;
                outputArr[inputArr.length - 1] = actions.payload.outputValue;

                inputArr = inputArr.join("");
                outputArr = outputArr.join("");

                newState.calculationInput = inputArr;
                newState.outputValue = outputArr;

                return { ...newState, result: "", isError: false };
            } else {
                newState.calculationInput = newState.calculationInput + actions.payload.value;
                newState.outputValue = newState.outputValue + actions.payload.outputValue;
                return { ...newState, result: "", isError: false };
            }
        }

        case "action": {
            const newState = state;
            if (actions.payload.value === "AC" && !Number.isNaN(state.result)) {
                newState.calculationInput = ""
                newState.outputValue = "";
                newState.result = "";

                return { ...newState, result: "", isError: false };
            } else if (actions.payload.value === "+/-") {
                return { ...state, result: "", isError: false };
            } else if (actions.payload.value === "=") {
                try {
                    const evaluateCalculation = eval(state.calculationInput);
                    return { ...state, result: evaluateCalculation, isError: false }
                } catch (error) {
                    return { ...state, isError: true }
                }
            }
        }
    }
};


const Calculator = () => {
    const [state, dispatch] = useReducer(calculatorReducer, {
        outputValue: "",
        calculationInput: "",
        result: "",
        isError: false,
    });

    const onPress = (dts) => {
        dispatch(dts);
    };

    return <div className={classes.calculator}>
        <Output
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
