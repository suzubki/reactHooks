import { TodoForm } from "../../../Components/08-useReducer/TodoForm";
import { shallow } from "enzyme";

describe("<TodoForm />", () => {
    const handleAdd = jest.fn();
    const wrapper = shallow(<TodoForm handleAdd={handleAdd} />);

    test("should display", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("no response at handleAdd function", () => {
        const formSubmit = wrapper.find("form").prop("onSubmit");

        formSubmit({ preventDefault() {} });

        expect(handleAdd).toHaveBeenCalledTimes(0);
    });

    test("response at handleAdd function", () => {
        const value = "Hacer la tarea";
        wrapper.find("input").simulate("change", {
            target: {
                value,
                name: "description",
            },
        });

        const formSubmit = wrapper.find("form").prop("onSubmit");
        formSubmit({ preventDefault() {} });

        expect(handleAdd).toHaveBeenCalledTimes(1);
        expect(handleAdd).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAdd).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });
        expect(wrapper.find("input").prop("value")).toBe("");
    });
});
