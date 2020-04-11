import React from "react";

const Payload = props => {
    return (
        <React.Fragment>
            <p><strong>Payload</strong></p>
            <p>ID: {props.data.id}</p>
            <p>Size: {props.data.size}kb</p>
        </React.Fragment>
    );
};

export default Payload;