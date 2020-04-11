import React from "react";

const Image = props => {
    return (
        <React.Fragment>
            <p><strong>Image</strong></p>
            <p>ID: {props.data.id}</p>
            <p>Size: {props.data.size}kb</p>
            <p>Url: {props.data.url}</p>
        </React.Fragment>
    );
};

export default Image;