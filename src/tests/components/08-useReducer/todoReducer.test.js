import { todoReducer } from "../../../Components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("todoReducer", () => {
    test("return state", () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test("add newTodo", () => {
        const newTodo = {
            id: 3,
            desc: "Aprender Nextjs",
            done: false,
        };

        const state = todoReducer(demoTodos, {
            type: "add",
            payload: newTodo,
        });

        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test("delete toDo", () => {
        const state = todoReducer(demoTodos, {
            type: "delete",
            payload: 2,
        });

        expect(state).toEqual([demoTodos[0]]);
    });

    test("isDone Todo", () => {
        const state = todoReducer(demoTodos, {
            type: "isDone",
            payload: 2,
        });

        expect(state[1].done).toBe(true);
    });
});
