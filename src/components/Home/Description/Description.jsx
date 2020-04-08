import React from "react";

const Description = props => {
    return (
        <p className="text-center">
            The purpose of this project is to show how React component testing is performed using
            <strong> Jest </strong>
            and
            <strong> Enzyme</strong>.
            <br/>
            <strong>Jest</strong> is a JavaScript Testing Framework with a focus on simplicity. Jest is made and
            maintained by Facebook.
            <br/>
            <strong>Enzyme</strong> is a JavaScript Testing utility for React that makes it easier to test React
            Components' output. Enzyme is made and maintained by Airbnb.
        </p>
    );
};

export default Description;