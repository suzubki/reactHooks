import { mount } from "enzyme";
import { HomeScreen } from "../../../Components/09-useContext/HomeScreen";
import { UserContext } from "../../../Components/09-useContext/userContext";

describe("<HomeScreen />", () => {
    const user = {
        name: "user",
        email: "user@example.com",
    };
    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test("should display", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
