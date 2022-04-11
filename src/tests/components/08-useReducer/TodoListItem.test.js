import { shallow } from "enzyme";
import { TodoListItem } from "../../../Components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("<TodoListItem />", () => {
    const handleDelete = jest.fn();
    const handleIsDone = jest.fn();
    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            i={demoTodos[0].id}
            handleDelete={handleDelete}
            handleIsDone={handleIsDone}
        />
    );

    test("toMatchSnapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("fn delete", () => {
        const bttnDelete = wrapper.find("button").first();
        bttnDelete.simulate("click");
        expect(handleDelete.mock.calls.length).toEqual(1);
    });

    test("fn isDone", () => {
        const bttnIsDone = wrapper.find("button").last();
        bttnIsDone.simulate("click");
        expect(handleIsDone.mock.calls.length).toEqual(1);
    });

    test("have text", () => {
        const todoName = wrapper.find("p").first().text();
        expect(todoName).toBe("2. Aprender react");
    });

    test("toggle Complete class", () => {
        const todoName = wrapper.find("p");
        expect(todoName.hasClass("complete")).not.toBe(true);
    });
});
