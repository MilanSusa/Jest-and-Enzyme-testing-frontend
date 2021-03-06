import React from 'react';
import {mount} from 'enzyme';
import axiosMock from 'axios';
import ComposedModels from "./ComposedModels";
import ComposedModel from "./ComposedModel/ComposedModel";

describe('<ComposedPersons />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(<ComposedModels data={{}}/>);
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