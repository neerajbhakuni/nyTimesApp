import { render, screen } from "@testing-library/react";
import fireEvent from '@testing-library/user-event';

import Card from "./index";

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => {
    return {
        ...jest.requireActual('react-router-dom') as any,
        useNavigate: () => mockUseNavigate
    }
});

const mockProps = {
    card: {
        id: "1",
        url: "https://test.com",
        mediaUrl: "https://test.com/image.png",
        title: "title",
        abstract: "abstract",
        byline: "by line",
        section: "section ",
        publishedDate: "",
    },
    index: 0,
};

describe("rendering Card screen", () => {
    test("Shows Card", () => {
        const { container } = render(<Card {...mockProps} />);
        expect(container).toMatchSnapshot();
    });

    test("should have card button", () => {
        render(<Card {...mockProps} />);
        const button = screen.getByTestId(`card-${mockProps?.index}`);
        fireEvent.click(button);
        expect(mockUseNavigate).toBeCalledTimes(1);
    });

    test("should have card title", () => {
        render(<Card {...mockProps} />);
        const parent = screen.getByTestId(`card-title-${mockProps?.card?.id}`);
        expect(parent).toBeInTheDocument();
    });

    test("should have card title text", () => {
        render(<Card {...mockProps} />);
        const parent = screen.getByText(`${mockProps?.card?.title}`);
        expect(parent).toBeInTheDocument();
    });

    test("should have card description", () => {
        render(<Card {...mockProps} />);
        const parent = screen.getByTestId(`card-description-${mockProps?.card?.id}`);
        expect(parent).toBeInTheDocument();
    });

    test("should have card description text", () => {
        render(<Card {...mockProps} />);
        const parent = screen.getByText(`${mockProps?.card?.abstract}`);
        expect(parent).toBeInTheDocument();
    });
});
