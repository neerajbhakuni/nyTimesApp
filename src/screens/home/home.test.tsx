import { render } from "@testing-library/react";
import Home from "./index";

describe("rendering Home screen", () => {
  
  test("Shows Home", () => {
    const {container} = render(<Home/>);
    expect(container).toMatchSnapshot();  
  });
});

