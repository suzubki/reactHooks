import TodoList from "../../../Components/08-useReducer/TodoList";
import { shallow } from "enzyme";

import { demoTodos } from "../../fixtures/demoTodos";

describe("<TodoList />", () => {
    const handleDelete = jest.fn();
    const handleIsDone = jest.fn();
    const wrapper = shallow(
        <TodoList
            todos={demoTodos}
            handleDelete={handleDelete}
            handleIsDone={handleIsDone}
        />
    );

    test("should display", () => {
        expect(wrapper).toMatchSnapshot();
    });
    test("should have components TodoListItem", () => {
        expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);
    });

    test("should have props", () => {
        expect(wrapper.find("TodoListItem").at(0).props().handleDelete).toEqual(
            expect.any(Function)
        );
        expect(wrapper.find("TodoListItem").at(0).props().handleIsDone).toEqual(
            expect.any(Function)
        );
    });
});
