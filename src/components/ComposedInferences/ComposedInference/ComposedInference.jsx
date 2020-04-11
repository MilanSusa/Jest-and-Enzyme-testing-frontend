import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Classifier from "../../Classifiers/Classifier/Classifier";
import Regressor from "../../Regressors/Regressor/Regressor";
import Text from "../../Texts/Text/Text";
import Image from "../../Images/Image/Image";
import Person from "../../ComposedPersons/Person/Person";
import Inference from "../../Inferences/Inference/Inference";

const ComposedInference = props => {
    const [model, setModel] = useState(<p><strong>Model</strong></p>);
    const [payload, setPayload] = useState(<p><strong>Payload</strong></p>);

    useEffect(() => {
        updateModel();
        updatePayload();
    }, []);

    const updateModel = () => {
        if (props.data.model.accuracy) {
            setModel(<Classifier data={props.data.model}/>);
        }

        if (props.data.model.meanSquaredError) {
            setModel(<Regressor data={props.data.model}/>);
        }
    };

    const updatePayload = () => {
        if (props.data.payload.content) {
            setPayload(<Text data={props.data.payload}/>);
        }

        if (props.data.payload.url) {
            setPayload(<Image data={props.data.payload}/>);
        }
    };

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
                                {payload}
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
                                {model}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ComposedInference;