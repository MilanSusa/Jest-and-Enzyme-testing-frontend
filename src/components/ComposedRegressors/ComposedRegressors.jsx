import React, {useEffect, useState} from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import ComposedModel from "../ComposedModels/ComposedModel/ComposedModel";

const ComposedRegressors = props => {
    const [models, setModels] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get("http://localhost:8080/api/v1/regressors");
            const data = res.data.data;
            setModels(data);
        })();
    }, []);

    return (
        <Container>
            {models ? models.map(model => <ComposedModel key={model.id} data={model}/>) : null}
        </Container>
    );
};

export default ComposedRegressors;