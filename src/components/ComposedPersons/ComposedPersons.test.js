import React from 'react';
import {mount} from 'enzyme';
import axiosMock from 'axios';
import ComposedPersons from "./ComposedPersons";
import ComposedPerson from "./ComposedPerson/ComposedPerson";

describe('<ComposedPersons />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(<ComposedPersons data={{}}/>);
    });

    it('should trigger axios call in useEffect', done => {
        setImmediate(() => {
            wrapper.update();
            done();
        });
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
    });

    it('should not render any ComposedPerson components', () => {
        expect(wrapper.find(ComposedPerson)).toHaveLength(0);
    });
});