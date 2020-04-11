import React from "react";

const Person = props => {
    return (
        <React.Fragment>
            <p><strong>Person</strong></p>
            <p>ID: {props.data.id}</p>
            <p>First name: {props.data.firstName}</p>
            <p>Last name: {props.data.lastName}</p>
            <p>Email: {props.data.email}</p>
        </React.Fragment>
    );
};

export default Person;