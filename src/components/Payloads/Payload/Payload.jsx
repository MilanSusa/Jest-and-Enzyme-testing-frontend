import React from "react";
import PayloadTypeRenderer from "../../PayloadTypeRenderer/PayloadTypeRenderer";

const Payload = props => {
    return (
        <React.Fragment>
            <PayloadTypeRenderer data={props.data}/>
            <p>ID: {props.data.id}</p>
            <p>Size: {props.data.size}kb</p>
        </React.Fragment>
    );
};

export default Payload;