import React from 'react';
import {shallow} from 'enzyme';
import Person from "../../Persons/Person/Person";
import Inference from "../../Inferences/Inference/Inference";
import PayloadRenderer from "../../PayloadRenderer/PayloadRenderer";
import ModelRenderer from "../../ModelRenderer/ModelRenderer";
import ComposedInference from "./ComposedInference";

describe('<ComposedInference />', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<ComposedInference data={{inferences: []}}/>);
    });

    it('should render Inference with fields from props', () => {
        wrapper.setProps({
            data: {
                id: 1,
                result: "dummy"
            }
        });
        expect(wrapper.contains(<Inference data={{
            id: 1,
            result: "dummy"
        }}/>)).toEqual(true);
    });

    it('should render PayloadRenderer with fields from props', () => {
        wrapper.setProps({
            data: {
                payload: {
                    id: 1,
                    size: 20
                }
            }
        });
        expect(wrapper.contains(<PayloadRenderer data={{
            id: 1,
            size: 20
        }}/>)).toEqual(true);
    });

    it('should render Person with fields from props', () => {
        wrapper.setProps({
            data: {
                person: {
                    id: 1,
                    firstName: "dummy",
                    lastName: "dummy",
                    email: "dummy@example.com",
                }
            }
        });
        expect(wrapper.contains(<Person data={{
            id: 1,
            firstName: "dummy",
            lastName: "dummy",
            email: "dummy@example.com",
        }}/>)).toEqual(true);
    });

    it('should render ModelRenderer with fields from props', () => {
        wrapper.setProps({
            data: {
                model: {
                    id: 1,
                    url: "dummy",
                }
            }
        });
        expect(wrapper.contains(<ModelRenderer data={{
            id: 1,
            url: "dummy"
        }}/>)).toEqual(true);
    });
});