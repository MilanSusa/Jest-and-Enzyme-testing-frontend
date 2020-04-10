import React from "react";
import Card from "react-bootstrap/Card";

const Text = props => {
    return (
        <Card>
            <Card.Body>
                <p><strong>Text</strong></p>
                <p>ID: {props.data.id}</p>
                <p>Size: {props.data.size}kb</p>
                <p>Content: {props.data.content}</p>
            </Card.Body>
        </Card>
    );
};

export default Text;