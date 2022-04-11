import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../Hooks/useFetch";

describe("useFetch Hook", () => {
    test("should return state", () => {
        const url = "https://www.breakingbadapi.com/api/quotes/1";
        const { result } = renderHook(() => useFetch(url));

        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });

    test("return data from call api", async () => {
        const url = "https://www.breakingbadapi.com/api/quotes/1";
        const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
        await waitForNextUpdate();

        const { data, loading, error } = result.current;
        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });

    test("error event", async () => {
        const url = "https://reqres.in/apiddasdsad/users?page=2";
        const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
        await waitForNextUpdate();

        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe("No se pudo cargar la info");
    });
});
