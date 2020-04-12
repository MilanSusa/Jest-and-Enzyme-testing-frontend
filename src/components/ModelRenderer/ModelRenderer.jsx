import Classifier from "../Classifiers/Classifier/Classifier";
import React from "react";
import Regressor from "../Regressors/Regressor/Regressor";
import Model from "../Models/Model/Model";

const ModelRenderer = props => {
    if (props.data.accuracy) {
        return <Classifier data={props.data}/>
    }

    if (props.data.meanSquaredError) {
        return <Regressor data={props.data}/>;
    }

    return <Model data={props.data}/>;
};

export default ModelRenderer;