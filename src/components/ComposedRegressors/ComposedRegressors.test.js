import React from 'react';
import {mount} from 'enzyme';
import ComposedRegressors from "./ComposedRegressors";
import ComposedModel from "../ComposedModels/ComposedModel/ComposedModel";
import axiosMock from 'axios';

describe('<ComposedRegressors />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(<ComposedRegressors data={{}}/>);
    });

    it('should trigger axios call in useEffect', done => {
        setImmediate(() => {
            wrapper.update();
            done();
        });
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
    });

    it('should not render any ComposedModel components', () => {
        expect(wrapper.find(ComposedModel)).toHaveLength(0);
    });
});