import HooksApp from "../HooksApp";
import { shallow } from "enzyme";

test("should render <HooksApp></HooksApp>", () => {
    const wrapper = shallow(<HooksApp />);

    expect(wrapper).toMatchSnapshot();
});
