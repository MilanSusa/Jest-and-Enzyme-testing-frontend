import React from "react";
import Container from "react-bootstrap/Container";
import Part from "./Part/Part";

const Parts = props => {
    return (
        <React.Fragment>
            <p className="text-center">
                Testing is performed on the following components and their children:
            </p>
            <Container>
                <Part text="1) Inferences" />
                <Part text="2) Persons" />
                <Part text="3) Models" />
                <Part text="4) Classifiers" />
                <Part text="5) Regressors" />
            </Container>
        </React.Fragment>
    );
};

export default Parts;