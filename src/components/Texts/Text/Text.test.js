import React from 'react';
import {shallow} from 'enzyme';
import Text from "./Text";
import Payload from "../../Payloads/Payload/Payload";

describe('<Text />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Text data={{}}/>);
    });

    it('should render Payload with content as props', () => {
        wrapper.setProps({
            data: {
                content: "dummy"
            }
        });
        expect(wrapper.contains(<Payload data={{content: "dummy"}}/>)).toEqual(true);
    });

    it('should render paragraph with content from props', () => {
        wrapper.setProps({
            data: {
                content: "dummy"
            }
        });
        expect(wrapper.contains(<p>Content: dummy</p>)).toEqual(true);
    });
});
