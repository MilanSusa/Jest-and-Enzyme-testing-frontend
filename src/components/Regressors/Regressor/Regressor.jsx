import React from "react";
import Card from "react-bootstrap/Card";

const Regressor = props => {
    return (
        <Card>
            <Card.Body>
                <p><strong>Regressor</strong></p>
                <p>ID: {props.data.id}</p>
                <p>MSE: {props.data.meanSquaredError}</p>
                <p>RMSE: {props.data.rootMeanSquaredError}</p>
                <p>MAE: {props.data.meanAbsoluteError}</p>
                <p>R squared: {props.data.coefficientOfDetermination}</p>
            </Card.Body>
        </Card>
    );
};

export default Regressor;