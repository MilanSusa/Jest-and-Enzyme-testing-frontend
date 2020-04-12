import React from "react";
import Payload from "../../Payloads/Payload/Payload";

const Text = props => {
    return (
        <React.Fragment>
            <Payload data={props.data}/>
            <p>Content: {props.data.content}</p>
        </React.Fragment>
    );
};

export default Text;