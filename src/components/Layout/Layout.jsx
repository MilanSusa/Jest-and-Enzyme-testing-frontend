import React from "react";
import Navigation from "../Navigation/Navigation";

const Layout = props => {
    return (
        <React.Fragment>
            <Navigation/>
            <br />
            {props.children}
        </React.Fragment>
    );
};

export default Layout;