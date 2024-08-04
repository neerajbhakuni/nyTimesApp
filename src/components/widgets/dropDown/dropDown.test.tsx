import { render } from "@testing-library/react";
import DropDown from "./index";

const mockProps = {
    selectedValue: "1",
    dayList: ["1", "2"],
    onDropDownChangeValue: jest.fn()
};

describe("rendering DropDown screen", () => {
    test("Shows DropDown", () => {
        const { container } = render(<DropDown {...mockProps} />);
        expect(container).toMatchSnapshot();
    });
});
