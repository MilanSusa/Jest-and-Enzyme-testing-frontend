import React from 'react';
import {shallow} from 'enzyme';
import PayloadTypeRenderer from "./PayloadTypeRenderer";

describe('<PayloadTypeRenderer />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<PayloadTypeRenderer data={{}}/>);
    });

    it('should render Text if content is passed as props', () => {
        wrapper.setProps({
            data: {
                content: "dummy"
            }
        });
        expect(wrapper.contains(<p><strong>Text</strong></p>)).toEqual(true);
    });

    it('should render Image if url is passed as props', () => {
        wrapper.setProps({
            data: {
                url: "dummy"
            }
        });
        expect(wrapper.contains(<p><strong>Image</strong></p>)).toEqual(true);
    });

    it('should render Payload if empty object is passed as props', () => {
        expect(wrapper.contains(<p><strong>Payload</strong></p>)).toEqual(true);
    });
});
