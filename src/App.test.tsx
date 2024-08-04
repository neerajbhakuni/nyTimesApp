import { render } from "@testing-library/react";
import App from "./App";

jest.mock('axios', () => ({
  ...jest.requireActual('axios') as any,
 default: () => jest.fn(),
}));

describe("rendering App", () => {
  test('take snapshot of App', () => {
    const {container} = render(<App/>);
    expect(container).toMatchSnapshot();

  });
});
