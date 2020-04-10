import React from "react";
import Card from "react-bootstrap/Card";

const Person = props => {
    return (
        <Card>
            <Card.Body>
                <p><strong>Person</strong></p>
                <p>ID: {props.data.id}</p>
                <p>First name: {props.data.firstName}</p>
                <p>Last name: {props.data.lastName}</p>
                <p>Email: {props.data.email}</p>
            </Card.Body>
        </Card>
    );
};

export default Person;