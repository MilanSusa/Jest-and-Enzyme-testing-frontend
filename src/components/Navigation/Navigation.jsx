import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = props => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/inferences">Inferences</Nav.Link>
                <Nav.Link href="/persons">Persons</Nav.Link>
                <Nav.Link href="/models">Models</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Navigation;