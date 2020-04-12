import React from "react";
import Model from "../../Models/Model/Model";

const Regressor = props => {
    return (
        <React.Fragment>
            <Model data={props.data}/>
            <p>MSE: {props.data.meanSquaredError}</p>
            <p>RMSE: {props.data.rootMeanSquaredError}</p>
            <p>MAE: {props.data.meanAbsoluteError}</p>
            <p>R squared: {props.data.coefficientOfDetermination}</p>
        </React.Fragment>
    );
};

export default Regressor;