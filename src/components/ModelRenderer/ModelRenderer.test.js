import React from 'react';
import {shallow} from 'enzyme';
import ModelRenderer from "./ModelRenderer";
import Classifier from "../Classifiers/Classifier/Classifier";
import Regressor from "../Regressors/Regressor/Regressor";
import Model from "../Models/Model/Model";

describe('<ModelRenderer />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<ModelRenderer data={{}}/>);
    });

    it('should render Classifier if accuracy is passed as props', () => {
        wrapper.setProps({
            data: {
                accuracy: 0.1
            }
        });
        expect(wrapper.contains(<Classifier data={{accuracy: 0.1}}/>)).toEqual(true);
    });

    it('should render Regressor if meanSquaredError is passed as props', () => {
        wrapper.setProps({
            data: {
                meanSquaredError: 0.1
            }
        });
        expect(wrapper.contains(<Regressor data={{meanSquaredError: 0.1}}/>)).toEqual(true);
    });

    it('should render Model if empty object is passed as props', () => {
        expect(wrapper.contains(<Model data={{}}/>)).toEqual(true);
    });
});