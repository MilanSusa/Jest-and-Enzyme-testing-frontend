import React from "react";
import ModelTypeRenderer from "../../ModelTypeRenderer/ModelTypeRenderer";

const Model = props => {
    return (
        <React.Fragment>
            <ModelTypeRenderer data={props.data}/>
            <p>ID: {props.data.id}</p>
            <p>Url: {props.data.url}</p>
        </React.Fragment>
    );
};

export default Model;