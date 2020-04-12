import React from "react";
import Text from "../Texts/Text/Text";
import Image from "../Images/Image/Image";
import Payload from "../Payloads/Payload/Payload";

const PayloadRenderer = props => {
    if (props.data.content) {
        return <Text data={props.data}/>
    }

    if (props.data.url) {
        return <Image data={props.data}/>;
    }

    return <Payload data={props.data}/>;
};

export default PayloadRenderer;