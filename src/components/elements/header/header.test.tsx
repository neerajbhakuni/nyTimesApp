import { render } from "@testing-library/react";
import Header from "./index";

jest.mock('react-router-dom', () => {
    return {
        ...jest.requireActual('react-router-dom') as any,
        useNavigate: () => jest.fn()
    }
});

const mockProps = {
    selectedValue: '',
    dayList: ["1", "2", "3"],
    onDropDownChangeValue: jest.fn()
};

describe("rendering Header screen", () => {
    test("Shows Header", () => {
        const {container} = render(<Header {...mockProps} />);
        expect(container).toMatchSnapshot();
    });
});
