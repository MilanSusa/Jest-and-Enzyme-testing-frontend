import React from 'react';
import {shallow} from 'enzyme';
import Part from "./Part";
import Card from "react-bootstrap/Card";

describe('<Part />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Part data={{}}/>);
    });

    it('should render paragraph with text from props', () => {
        wrapper.setProps({
            text: "dummy"
        });
        expect(wrapper.contains(<Card.Body><strong>dummy</strong></Card.Body>)).toEqual(true);
    });
});