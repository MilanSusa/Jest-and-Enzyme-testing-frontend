import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import ComposedInferences from "./components/ComposedInferences/ComposedInferences";

const App = () => {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/inferences" render={props => <ComposedInferences {...props} />}/>
                    <Route path="/" exact component={Home}/>
                    <Redirect to="/"/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
