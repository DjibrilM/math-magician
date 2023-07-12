import React from "react";

const Button = ({ configuration, oncClick }) => {

    return (
        <button onClick={() => oncClick({
            type: configuration.type,
            payload: {
                value: configuration.operationSign,
                outputValue: configuration.outputOperation,
            }
        })} >
            {configuration.outputOperation}
        </button>
    );
};


export default Button;
