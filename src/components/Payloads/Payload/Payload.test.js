import React from 'react';
import {shallow} from 'enzyme';
import Payload from "./Payload";
import PayloadTypeRenderer from "../../PayloadTypeRenderer/PayloadTypeRenderer";

describe('<Payload />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Payload data={{}}/>);
    });

    it('should render PayloadTypeRenderer with content as props', () => {
        wrapper.setProps({
            data: {
                content: "dummy"
            }
        });
        expect(wrapper.contains(<PayloadTypeRenderer data={{content: "dummy"}}/>)).toEqual(true);
    });

    it('should render PayloadTypeRenderer sub component with url as props', () => {
        wrapper.setProps({
            data: {
                url: "dummy"
            }
        });
        expect(wrapper.contains(<PayloadTypeRenderer data={{url: "dummy"}}/>)).toEqual(true);
    });

    it('should render PayloadTypeRenderer with empty object as props', () => {
        expect(wrapper.contains(<PayloadTypeRenderer data={{}}/>)).toEqual(true);
    });

    it('should render paragraph with id from props', () => {
        wrapper.setProps({
            data: {
                id: 1
            }
        });
        expect(wrapper.contains(<p>ID: 1</p>)).toEqual(true);
    });

    it('should render paragraph with size from props', () => {
        wrapper.setProps({
            data: {
                size: 20
            }
        });
        expect(wrapper.contains(<p>Size: 20kb</p>)).toEqual(true);
    });
});