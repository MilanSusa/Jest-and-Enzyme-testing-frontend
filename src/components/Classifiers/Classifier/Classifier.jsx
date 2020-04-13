import React from "react";
import Model from "../../Models/Model/Model";

const Classifier = props => {
    return (
        <React.Fragment>
            <Model data={props.data}/>
            <p>Accuracy: {props.data.accuracy}</p>
            <p>Precision: {props.data.precision}</p>
            <p>Recall: {props.data.recall}</p>
            <p>F1 score: {props.data.f1Score}</p>
            <p>Specificity: {props.data.specificity}</p>
            <p>Sensitivity: {props.data.sensitivity}</p>
            <p>AUC: {props.data.areaUnderTheCurve}</p>
        </React.Fragment>
    );
};

export default Classifier;