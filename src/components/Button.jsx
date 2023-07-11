import React from "react";

const Button = ({ configuration }) => {
    return (
        <button >
            {configuration.outputOperation}
        </button>
    );
};


export default Button;
