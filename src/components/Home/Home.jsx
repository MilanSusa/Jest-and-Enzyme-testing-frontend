import React from "react";
import Logo from "../Logo/Logo";
import Description from "./Description/Description";
import Parts from "./Parts/Parts";

const Home = props => {
    return (
        <React.Fragment>
            <Logo />
            <Description />
            <Parts />
        </React.Fragment>
    );
};

export default Home;