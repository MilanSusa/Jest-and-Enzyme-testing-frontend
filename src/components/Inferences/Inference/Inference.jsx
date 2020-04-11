import React from "react";

const Inference = props => {
    return (
        <React.Fragment>
            <p><strong>Inference</strong></p>
            <p>ID: {props.data.id}</p>
            <p>Result: {props.data.result}</p>
        </React.Fragment>
    );
};

export default Inference;