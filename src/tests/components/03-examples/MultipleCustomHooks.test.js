import { MultipleCustomHooks } from "../../../Components/03-examples/MultipleCustomHooks";
import { shallow } from "enzyme";
import { useFetch } from "../../../Hooks/useFetch";

jest.mock("../../../Hooks/useFetch");

describe("MultipleCustomHooks", () => {
    test("... snapshot", () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test("should return info", () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: "Darwin",
                    quote: "Hola darwin...",
                },
            ],
            loading: false,
            error: null,
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        console.log(wrapper.html());
    });
});
