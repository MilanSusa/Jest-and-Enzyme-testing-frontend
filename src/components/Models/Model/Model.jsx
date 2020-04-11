import React from "react";

const Model = props => {
    return (
        <React.Fragment>
            <p><strong>Model</strong></p>
            <p>ID: {props.data.id}</p>
            <p>Url: {props.data.url}</p>
        </React.Fragment>
    );
};

export default Model;