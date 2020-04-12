import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Person from "../../Persons/Person/Person";
import Inference from "../../Inferences/Inference/Inference";
import PayloadRenderer from "../../PayloadRenderer/PayloadRenderer";
import ModelRenderer from "../../ModelRenderer/ModelRenderer";

const ComposedInference = props => {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <Inference data={props.data}/>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <PayloadRenderer data={props.data.payload}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Person data={props.data.person}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <ModelRenderer data={props.data.model}/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ComposedInference;