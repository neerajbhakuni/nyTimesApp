import { render, screen } from "@testing-library/react";
import ArticleDetail from "./index";

const mockUseLocationValue = {
    state: {
        mediaUrl: 'https://test.com',
        title: 'title',
        abstract: 'abstract',
    }
};

jest.mock('react-router-dom', () => {
    return {
        ...jest.requireActual('react-router-dom') as any,
        useLocation: () => jest.fn().mockImplementation(() => {
            return mockUseLocationValue;
        })
    }
});

describe("rendering ArticleDetail screen", () => {
    test("Shows ArticleDetail", () => {
        const { container } = render(<ArticleDetail />);
        expect(container).toMatchSnapshot();
    });

    test("should have article image", () => {
        render(<ArticleDetail />);
        const parent = screen.getByTestId('article-image');
        expect(parent).toBeInTheDocument();
    });

    test("should have article title", () => {
        render(<ArticleDetail />);
        const parent = screen.getByTestId('article-title');
        expect(parent).toBeInTheDocument();
    });

    test("should have article description", () => {
        render(<ArticleDetail />);
        const parent = screen.getByTestId('article-description');
        expect(parent).toBeInTheDocument();
    });
});

