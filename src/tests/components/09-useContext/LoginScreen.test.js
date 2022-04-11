import { mount } from "enzyme";
import { LoginScreen } from "../../../Components/09-useContext/LoginScreen";
import { UserContext } from "../../../Components/09-useContext/userContext";

describe("<LoginScreen />", () => {
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{ setUser }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test("should display", () => {
        expect(wrapper).toMatchSnapshot();
    });

    const newUser = {
        id: "123",
        name: "darwin",
    };

    test("should pass newUser", () => {
        wrapper.find("button").simulate("click");
        expect(setUser).toHaveBeenCalledWith(newUser);
    });
});
