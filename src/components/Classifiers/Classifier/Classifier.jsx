import React from "react";
import Card from "react-bootstrap/Card";

const Classifier = props => {
    return (
        <Card>
            <Card.Body>
                <p><strong>Classifier</strong></p>
                <p>ID: {props.data.id}</p>
                <p>Accuracy: {props.data.accuracy}</p>
                <p>Precision: {props.data.precision}</p>
                <p>Recall: {props.data.recall}</p>
                <p>F1 score: {props.data.f1Score}</p>
                <p>Specificity: {props.data.specificity}</p>
                <p>Sensitivity: {props.data.sensitivity}</p>
                <p>AUC: {props.data.areaUnderTheCurve}</p>
            </Card.Body>
        </Card>
    );
};

export default Classifier;