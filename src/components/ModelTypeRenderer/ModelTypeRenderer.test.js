import React from 'react';
import {shallow} from 'enzyme';
import ModelTypeRenderer from "./ModelTypeRenderer";

describe('<ModelTypeRenderer />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<ModelTypeRenderer data={{}}/>);
    });

    it('should render Classifier if accuracy is passed as props', () => {
        wrapper.setProps({
            data: {
                accuracy: 0.9
            }
        });
        expect(wrapper.contains(<p><strong>Classifier</strong></p>)).toEqual(true);
    });

    it('should render Regressor if meanSquaredError is passed as props', () => {
        wrapper.setProps({
            data: {
                meanSquaredError: 0.1
            }
        });
        expect(wrapper.contains(<p><strong>Regressor</strong></p>)).toEqual(true);
    });

    it('should render Model if empty object is passed as props', () => {
        expect(wrapper.contains(<p><strong>Model</strong></p>)).toEqual(true);
    });
});
