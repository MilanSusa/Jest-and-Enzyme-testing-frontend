import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Person from "../../Persons/Person/Person";
import Inference from "../../Inferences/Inference/Inference";
import ModelRenderer from "../../ModelRenderer/ModelRenderer";
import PayloadRenderer from "../../PayloadRenderer/PayloadRenderer";

const ComposedModel = props => {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <ModelRenderer data={props.data}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><strong>Inferences:</strong></p>
                    </Col>
                </Row>
                {props.data.inferences.map(inference => {
                    return (
                        <Card key={inference.id}>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Inference data={inference}/>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <PayloadRenderer data={inference.payload}/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Person data={inference.person}/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

export default ComposedModel;