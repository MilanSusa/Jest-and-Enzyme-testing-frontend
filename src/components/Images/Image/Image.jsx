import React from "react";
import Card from "react-bootstrap/Card";

const Image = props => {
    return (
        <Card>
            <Card.Body>
                <p><strong>Image</strong></p>
                <p>ID: {props.data.id}</p>
                <p>Size: {props.data.size}kb</p>
                <p>Url: {props.data.url}</p>
            </Card.Body>
        </Card>
    );
};

export default Image;