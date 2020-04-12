import React from "react";

const PayloadTypeRenderer = props => {
    if (props.data.content) {
        return <p><strong>Text</strong></p>;
    }

    if (props.data.url) {
        return <p><strong>Image</strong></p>;
    }

    return <p><strong>Payload</strong></p>;
};

export default PayloadTypeRenderer;