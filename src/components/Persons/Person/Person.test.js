import React from 'react';
import {shallow} from 'enzyme';
import Person from "./Person";

describe('<Person />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Person data={{}}/>);
    });

    it('should render paragraph with id from props', () => {
        wrapper.setProps({
            data: {
                id: 1
            }
        });
        expect(wrapper.contains(<p>ID: 1</p>)).toEqual(true);
    });

    it('should render paragraph with firstName from props', () => {
        wrapper.setProps({
            data: {
                firstName: "dummy"
            }
        });
        expect(wrapper.contains(<p>First name: dummy</p>)).toEqual(true);
    });

    it('should render paragraph with lastName from props', () => {
        wrapper.setProps({
            data: {
                lastName: "dummy"
            }
        });
        expect(wrapper.contains(<p>Last name: dummy</p>)).toEqual(true);
    });

    it('should render paragraph with email from props', () => {
        wrapper.setProps({
            data: {
                email: "dummy@example.com"
            }
        });
        expect(wrapper.contains(<p>E-mail: dummy@example.com</p>)).toEqual(true);
    });
});
