import React from 'react';
import {shallow} from 'enzyme';
import Layout from "./Layout";
import {Switch} from "react-router";

describe('<Layout />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Layout/>);
    });

    it('should render paragraph with text from props', () => {
        wrapper.setProps({
            children: <Switch/>
        });
        expect(wrapper.contains(<Switch/>)).toEqual(true);
    });
});