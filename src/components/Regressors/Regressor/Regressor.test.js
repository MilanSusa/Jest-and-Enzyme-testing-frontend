import React from 'react';
import {shallow} from 'enzyme';
import Model from "../../Models/Model/Model";
import Regressor from "./Regressor";

describe('<Regressor />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Regressor data={{}}/>);
    });

    it('should render Model with meanSquaredError as props', () => {
        wrapper.setProps({
            data: {
                meanSquaredError: "dummy"
            }
        });
        expect(wrapper.contains(<Model data={{meanSquaredError: "dummy"}}/>)).toEqual(true);
    });

    it('should render paragraph with meanSquaredError from props', () => {
        wrapper.setProps({
            data: {
                meanSquaredError: 0.1
            }
        });
        expect(wrapper.contains(<p>MSE: 0.1</p>)).toEqual(true);
    });

    it('should render paragraph with rootMeanSquaredError from props', () => {
        wrapper.setProps({
            data: {
                rootMeanSquaredError: 0.1
            }
        });
        expect(wrapper.contains(<p>RMSE: 0.1</p>)).toEqual(true);
    });

    it('should render paragraph with meanAbsoluteError from props', () => {
        wrapper.setProps({
            data: {
                meanAbsoluteError: 0.1
            }
        });
        expect(wrapper.contains(<p>MAE: 0.1</p>)).toEqual(true);
    });

    it('should render paragraph with coefficientOfDetermination from props', () => {
        wrapper.setProps({
            data: {
                coefficientOfDetermination: 0.1
            }
        });
        expect(wrapper.contains(<p>R squared: 0.1</p>)).toEqual(true);
    });
});
