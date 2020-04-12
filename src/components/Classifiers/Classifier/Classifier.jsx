import React from "react";

const Classifier = props => {
    return (
        <React.Fragment>
            <p><strong>Classifier</strong></p>
            <p>ID: {props.data.id}</p>
            <p>Url: {props.data.url}</p>
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