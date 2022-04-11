import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../Hooks/useCounter";

test("should return 4 elements <useCounter>", () => {
    const { result } = renderHook(() => useCounter(4));

    const { counter, increment, decrement, reset } = result.current;
    expect(counter).toBe(4);
    expect(typeof increment).toBe("function");
    expect(typeof decrement).toBe("function");
    expect(typeof reset).toBe("function");
});

test("should increase counter", () => {
    const { result } = renderHook(() => useCounter(4));
    const { increment } = result.current;

    act(() => {
        increment();
    });

    const { counter } = result.current;
    expect(counter).toBe(5);
});

test("should decrement counter", () => {
    const { result } = renderHook(() => useCounter(4));
    const { decrement } = result.current;

    act(() => {
        decrement();
    });

    const { counter } = result.current;
    expect(counter).toBe(3);
});
test("should reset counter", () => {
    const { result } = renderHook(() => useCounter(4));
    const { decrement, reset } = result.current;

    act(() => {
        decrement();
        reset();
    });
    const counter = result.current.counter;
    expect(counter).toBe(4);
});
