import React from 'react';
import {shallow} from 'enzyme';
import Person from "../../Persons/Person/Person";
import Inference from "../../Inferences/Inference/Inference";
import PayloadRenderer from "../../PayloadRenderer/PayloadRenderer";
import ModelRenderer from "../../ModelRenderer/ModelRenderer";
import ComposedModel from "./ComposedModel";

describe('<ComposedModel />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<ComposedModel data={{inferences: []}}/>);
    });

    it('should render ModelRenderer with fields from props', () => {
        wrapper.setProps({
            data: {
                id: 1,
                url: "dummy",
                inferences: []
            }
        });
        expect(wrapper.contains(<ModelRenderer data={{
            id: 1,
            url: "dummy",
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
                        result: "dummy"
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
                        result: "dummy"
                    },
                    {
                        id: 2,
                        result: "dummy"
                    }
                ]
            }
        });
        expect(wrapper.find(Inference)).toHaveLength(2);
    });

    it('should render one Person component if one Inference is present in props', () => {
        wrapper.setProps({
            data: {
                inferences: [
                    {
                        id: 1,
                        result: "dummy"
                    }
                ]
            }
        });
        expect(wrapper.find(Person)).toHaveLength(1);
    });

    it('should render one Person component for each Inference present in props', () => {
        wrapper.setProps({
            data: {
                inferences: [
                    {
                        id: 1,
                        result: "dummy"
                    },
                    {
                        id: 2,
                        result: "dummy"
                    }
                ]
            }
        });
        expect(wrapper.find(Person)).toHaveLength(2);
    });

    it('should render one PayloadRenderer component if one Inference is present in props', () => {
        wrapper.setProps({
            data: {
                inferences: [
                    {
                        id: 1,
                        result: "dummy"
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
                        result: "dummy"
                    },
                    {
                        id: 2,
                        result: "dummy"
                    }
                ]
            }
        });
        expect(wrapper.find(PayloadRenderer)).toHaveLength(2);
    });
});