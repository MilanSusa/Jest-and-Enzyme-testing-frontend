import React from 'react';
import {mount} from 'enzyme';
import axiosMock from 'axios';
import ComposedInferences from "./ComposedInferences";
import ComposedInference from "./ComposedInference/ComposedInference";

describe('<ComposedInferences />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(<ComposedInferences data={{}}/>);
    });

    it('should trigger axios call in useEffect', done => {
        setImmediate(() => {
            wrapper.update();
            done();
        });
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
    });

    it('should not render any ComposedInference components', () => {
        expect(wrapper.find(ComposedInference)).toHaveLength(0);
    });
});