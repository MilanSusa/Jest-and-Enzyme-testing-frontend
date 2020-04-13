import React from 'react';
import {shallow} from 'enzyme';
import Payload from "../../Payloads/Payload/Payload";
import Image from "./Image";

describe('<Image />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Image data={{}}/>);
    });

    it('should render Payload with url as props', () => {
        wrapper.setProps({
            data: {
                url: "dummy"
            }
        });
        expect(wrapper.contains(<Payload data={{url: "dummy"}}/>)).toEqual(true);
    });

    it('should render paragraph with url from props', () => {
        wrapper.setProps({
            data: {
                url: "dummy"
            }
        });
        expect(wrapper.contains(<p>Url: dummy</p>)).toEqual(true);
    });
});
