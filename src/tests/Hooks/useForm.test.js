import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../Hooks/useForm";
describe("useForm Hook", () => {
    test("Return Array", () => {
        const { result } = renderHook(() => useForm());
        const [values, handleInputChange, reset] = result.current;

        expect(values).toStrictEqual({});
        expect(typeof handleInputChange).toBe("function");
        expect(typeof reset).toBe("function");
    });

    test("Initial value", () => {
        const initialState = {};
        const { result } = renderHook(() => useForm(initialState));
        const [values] = result.current;

        expect(values).toStrictEqual(initialState);
    });

    test("handleInputChange", () => {
        const { result } = renderHook(() => useForm());
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: "name",
                    value: "Darwin",
                },
            });
        });

        const [values] = result.current;
        expect(values).toStrictEqual({ name: "Darwin" });
    });

    test("reset", () => {
        const initialState = {
            target: {
                name: "name",
                value: "Darwin",
            },
        };
        const { result } = renderHook(() => useForm(initialState));
        const [, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: "nameaaaaaaaaaaa",
                    value: "Darwinaaaaaaaaaaaa",
                },
            });
            reset();
        });

        const [values] = result.current;
        expect(values).toEqual(initialState);
    });
});
