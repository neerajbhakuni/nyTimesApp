import { render } from "@testing-library/react";
import Article from "./index";

jest.mock('react-router-dom', () => {
    return {
        ...jest.requireActual('react-router-dom') as any,
        useNavigate: () => jest.fn()
    }
});

const mockArticle = [{ abstract: 'abstract', byline: 'byline', title: "title", id: 'id', url: 'url', section: 'section', media: 'media', published_date: 'published_date' }]

describe("rendering Article screen", () => {
    test("Shows Article", () => {
        const { container } = render(<Article articles={mockArticle} />);
        expect(container).toMatchSnapshot();
    });
});
