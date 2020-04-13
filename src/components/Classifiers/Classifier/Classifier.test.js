import React from 'react';
import {shallow} from 'enzyme';
import Classifier from "./Classifier";
import Model from "../../Models/Model/Model";

describe('<Classifier />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Classifier data={{}}/>);
    });

    it('should render Model with url as props', () => {
        wrapper.setProps({
            data: {
                url: "dummy"
            }
        });
        expect(wrapper.contains(<Model data={{url: "dummy"}}/>)).toEqual(true);
    });

    it('should render paragraph with accuracy from props', () => {
        wrapper.setProps({
            data: {
                accuracy: 0.1
            }
        });
        expect(wrapper.contains(<p>Accuracy: 0.1</p>)).toEqual(true);
    });

    it('should render paragraph with precision from props', () => {
        wrapper.setProps({
            data: {
                precision: 0.1
            }
        });
        expect(wrapper.contains(<p>Precision: 0.1</p>)).toEqual(true);
    });

    it('should render paragraph with recall from props', () => {
        wrapper.setProps({
            data: {
                recall: 0.1
            }
        });
        expect(wrapper.contains(<p>Recall: 0.1</p>)).toEqual(true);
    });

    it('should render paragraph with f1Score from props', () => {
        wrapper.setProps({
            data: {
                f1Score: 0.1
            }
        });
        expect(wrapper.contains(<p>F1 score: 0.1</p>)).toEqual(true);
    });

    it('should render paragraph with specificity from props', () => {
        wrapper.setProps({
            data: {
                specificity: 0.1
            }
        });
        expect(wrapper.contains(<p>Specificity: 0.1</p>)).toEqual(true);
    });

    it('should render paragraph with sensitivity from props', () => {
        wrapper.setProps({
            data: {
                sensitivity: 0.1
            }
        });
        expect(wrapper.contains(<p>Sensitivity: 0.1</p>)).toEqual(true);
    });

    it('should render paragraph with areaUnderTheCurve from props', () => {
        wrapper.setProps({
            data: {
                areaUnderTheCurve: 0.1
            }
        });
        expect(wrapper.contains(<p>AUC: 0.1</p>)).toEqual(true);
    });
});
