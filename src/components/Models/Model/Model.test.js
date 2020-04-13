import React from 'react';
import {shallow} from 'enzyme';
import Model from "./Model";
import ModelTypeRenderer from "../../ModelTypeRenderer/ModelTypeRenderer";

describe('<Model />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Model data={{}}/>);
    });

    it('should render ModelTypeRenderer with accuracy as props', () => {
        wrapper.setProps({
            data: {
                accuracy: 0.9
            }
        });
        expect(wrapper.contains(<ModelTypeRenderer data={{accuracy: 0.9}}/>)).toEqual(true);
    });

    it('should render ModelTypeRenderer with meanSquaredError as props', () => {
        wrapper.setProps({
            data: {
                meanSquaredError: 0.1
            }
        });
        expect(wrapper.contains(<ModelTypeRenderer data={{meanSquaredError: 0.1}}/>)).toEqual(true);
    });

    it('should render ModelTypeRenderer with empty object as props', () => {
        expect(wrapper.contains(<ModelTypeRenderer data={{}}/>)).toEqual(true);
    });

    it('should render paragraph with id from props', () => {
        wrapper.setProps({
            data: {
                id: 1
            }
        });
        expect(wrapper.contains(<p>ID: 1</p>)).toEqual(true);
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