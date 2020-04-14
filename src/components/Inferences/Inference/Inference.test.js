import React from 'react';
import {shallow} from 'enzyme';
import Inference from "./Inference";

describe('<Inference />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Inference data={{}}/>);
    });

    it('should render paragraph with id from props', () => {
        wrapper.setProps({
            data: {
                id: 1
            }
        });
        expect(wrapper.contains(<p>ID: 1</p>)).toEqual(true);
    });

    it('should render paragraph with result from props', () => {
        wrapper.setProps({
            data: {
                result: "dummy"
            }
        });
        expect(wrapper.contains(<p>Result: dummy</p>)).toEqual(true);
    });
});