import { render } from "@testing-library/react";
import Loader from "./index";

describe("rendering Loader screen", () => {
    test("Shows Loader isLoading true", () => {
        const {container} = render(<Loader isLoading={true} />);
        expect(container).toMatchSnapshot();
    });

    test("Shows Loader isLoading false", () => {
        const {container} = render(<Loader isLoading={false} />);
        expect(container).toMatchSnapshot();
    });
});
