import { AppRouter } from "../../../Components/09-useContext/AppRouter";
import { UserContext } from "../../../Components/09-useContext/userContext";
import { mount } from "enzyme";

describe("<AppRouter />", () => {
    const user = {
        name: "user",
        email: "user@example.com",
    };

    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <AppRouter />
        </UserContext.Provider>
    );

    test("should disply", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
