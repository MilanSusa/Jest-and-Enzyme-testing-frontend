import React from 'react';
import {shallow} from 'enzyme';
import ComposedPerson from "./ComposedPerson";
import Person from "../../Persons/Person/Person";
import Inference from "../../Inferences/Inference/Inference";
import PayloadRenderer from "../../PayloadRenderer/PayloadRenderer";
import ModelRenderer from "../../ModelRenderer/ModelRenderer";

describe('<ComposedPerson />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<ComposedPerson data={{
            inferences: [
                {
                    model: {},
                    payload: {}
                }
            ]
        }}/>);
    });

    it('should render Person with fields from props', () => {
        wrapper.setProps({
            data: {
                id: 1,
                firstName: "dummy",
                lastName: "dummy",
                email: "dummy@example.com",
                inferences: []
            }
        });
        expect(wrapper.contains(<Person data={{
            id: 1,
            firstName: "dummy",
            lastName: "dummy",
            email: "dummy@example.com",
            inferences: []
        }}/>)).toEqual(true);
    });

    it('should not render any Inference components if none are present in props', () => {
        wrapper.setProps({
            data: {
                inferences: []
            }
        });
        expect(wrapper.find(Inference)).toHaveLength(0);
    });

    it('should render one Inference component if one is present in props', () => {
        wrapper.setProps({
            data: {
                inferences: [
                    {
                        id: 1,
                        result: "dummy",
                        model: {},
                        payload: {}
                    }
                ]
            }
        });
        expect(wrapper.find(Inference)).toHaveLength(1);
    });

    it('should render multiple Inference components if multiple are present in props', () => {
        wrapper.setProps({
            data: {
                inferences: [
                    {
                        id: 1,
                        result: "dummy",
                        model: {},
                        payload: {}
                    },
                    {
                        id: 2,
                        result: "dummy",
                        model: {},
                        payload: {}
                    }
                ]
            }
        });
        expect(wrapper.find(Inference)).toHaveLength(2);
    });

    it('should render one ModelRenderer component if one is present in props', () => {
        wrapper.setProps({
            data: {
                inferences: [
                    {
                        id: 1,
                        result: "dummy",
                        model: {},
                        payload: {}
                    }
                ]
            }
        });
        expect(wrapper.find(ModelRenderer)).toHaveLength(1);
    });

    it('should render one ModelRenderer component for each Inference present in props', () => {
        wrapper.setProps({
            data: {
                inferences: [
                    {
                        id: 1,
                        result: "dummy",
                        model: {},
                        payload: {}
                    },
                    {
                        id: 2,
                        result: "dummy",
                        model: {},
                        payload: {}
                    }
                ]
            }
        });
        expect(wrapper.find(ModelRenderer)).toHaveLength(2);
    });

    it('should render one PayloadRenderer component if one is present in props', () => {
        wrapper.setProps({
            data: {
                inferences: [
                    {
                        id: 1,
                        result: "dummy",
                        model: {},
                        payload: {}
                    }
                ]
            }
        });
        expect(wrapper.find(PayloadRenderer)).toHaveLength(1);
    });

    it('should render one PayloadRenderer component for each Inference present in props', () => {
        wrapper.setProps({
            data: {
                inferences: [
                    {
                        id: 1,
                        result: "dummy",
                        model: {},
                        payload: {}
                    },
                    {
                        id: 2,
                        result: "dummy",
                        model: {},
                        payload: {}
                    }
                ]
            }
        });
        expect(wrapper.find(PayloadRenderer)).toHaveLength(2);
    });
});