import React from "react";

const Regressor = props => {
    return (
        <React.Fragment>
            <p><strong>Regressor</strong></p>
            <p>ID: {props.data.id}</p>
            <p>Url: {props.data.url}</p>
            <p>MSE: {props.data.meanSquaredError}</p>
            <p>RMSE: {props.data.rootMeanSquaredError}</p>
            <p>MAE: {props.data.meanAbsoluteError}</p>
            <p>R squared: {props.data.coefficientOfDetermination}</p>
        </React.Fragment>
    );
};

export default Regressor;