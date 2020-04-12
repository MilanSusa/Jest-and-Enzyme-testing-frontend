import React from "react";

const ModelTypeRenderer = props => {
    if (props.data.accuracy) {
        return <p><strong>Classifier</strong></p>;
    }

    if (props.data.meanSquaredError) {
        return <p><strong>Regressor</strong></p>
    }

    return <p><strong>Model</strong></p>
};

export default ModelTypeRenderer;