import React from 'react';
import {shallow} from 'enzyme';
import PayloadRenderer from "./PayloadRenderer";
import Text from "../Texts/Text/Text";
import Image from "../Images/Image/Image";
import Payload from "../Payloads/Payload/Payload";

describe('<PayloadRenderer />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<PayloadRenderer data={{}}/>);
    });

    it('should render Text if content is passed as props', () => {
        wrapper.setProps({
            data: {
                content: "dummy"
            }
        });
        expect(wrapper.contains(<Text data={{content: "dummy"}}/>)).toEqual(true);
    });

    it('should render Image if url is passed as props', () => {
        wrapper.setProps({
            data: {
                url: "dummy"
            }
        });
        expect(wrapper.contains(<Image data={{url: "dummy"}}/>)).toEqual(true);
    });

    it('should render Payload if empty object is passed as props', () => {
        expect(wrapper.contains(<Payload data={{}}/>)).toEqual(true);
    });
});