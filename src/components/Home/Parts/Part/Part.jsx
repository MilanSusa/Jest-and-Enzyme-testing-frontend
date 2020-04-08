import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import React from "react";

const Part = props => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body><strong>{props.text}</strong></Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Part;