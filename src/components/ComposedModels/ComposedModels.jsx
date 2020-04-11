import React, {useEffect, useState} from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import ComposedModel from "./ComposedModel/ComposedModel";

const ComposedModels = props => {
    const [models, setModels] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get("http://localhost:8080/api/v1/models");
            const data = res.data.data;
            setModels(data);
        })();
    }, []);

    return (
        <Container>
            {models.map(model => <ComposedModel key={model.id} data={model}/>)}
        </Container>
    );
};

export default ComposedModels;