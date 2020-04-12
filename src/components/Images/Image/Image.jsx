import React from "react";
import Payload from "../../Payloads/Payload/Payload";

const Image = props => {
    return (
        <React.Fragment>
            <Payload data={props.data}/>
            <p>Url: {props.data.url}</p>
        </React.Fragment>
    );
};

export default Image;