import React, {useEffect, useState} from "react";
import ComposedInference from "./ComposedInference/ComposedInference";
import axios from 'axios';
import Container from "react-bootstrap/Container";

const ComposedInferences = props => {
    const [inferences, setInferences] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get("http://localhost:8080/api/v1/inferences");
            const data = res.data.data;
            setInferences(data);
        })();
    }, []);

    return (
        <Container>
            {inferences ? inferences.map(inference => <ComposedInference key={inference.id} data={inference}/>) : null}
        </Container>
    );
};

export default ComposedInferences;