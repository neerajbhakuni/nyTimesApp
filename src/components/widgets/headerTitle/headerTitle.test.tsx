import { render } from "@testing-library/react";
import HeaderTitle from "./index";

describe("rendering HeaderTitle screen", () => {
    test("Shows HeaderTitle", () => {
        const { container } = render(<HeaderTitle />);
        expect(container).toMatchSnapshot();
    });
});
