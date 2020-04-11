import React from "react";

const Text = props => {
    return (
        <React.Fragment>
            <p><strong>Text</strong></p>
            <p>ID: {props.data.id}</p>
            <p>Size: {props.data.size}kb</p>
            <p>Content: {props.data.content}</p>
        </React.Fragment>
    );
};

export default Text;