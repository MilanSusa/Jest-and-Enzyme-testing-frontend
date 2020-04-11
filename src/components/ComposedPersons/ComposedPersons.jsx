import React, {useEffect, useState} from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import ComposedPerson from "./ComposedPerson/ComposedPerson";

const ComposedPersons = props => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get("http://localhost:8080/api/v1/persons");
            const data = res.data.data;
            setPersons(data);
        })();
    }, []);

    return (
        <Container>
            {persons.map(person => <ComposedPerson key={person.id} data={person}/>)}
        </Container>
    );
};

export default ComposedPersons;