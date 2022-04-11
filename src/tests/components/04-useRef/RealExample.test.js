import { RealExampleRef } from "../../../Components/04-useRef/RealExampleRef";
import { shallow } from "enzyme";

describe("RealExample", () => {
    const wrapper = shallow(<RealExampleRef />);
    test("component MultipleCustomHooks exists", () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
    });

    test("component MultipleCustomHooks no exists", () => {
        wrapper.find("button").simulate("click");
        expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
    });
});
