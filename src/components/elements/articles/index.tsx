import { Card } from '../../widgets';
import { fetchMediaUrl, getDateAndMonth } from '../../../helper';

type ArticlesProps = {
    articles: { 
        abstract: string
        byline: string
        title: string 
        id: string
        url: string 
        section: string
        media: any
        published_date: string
    }[];
};

const Articles = ({ articles }: ArticlesProps) => {
    return (
        <>
            {
                articles?.map((article, index) => {
                    const { abstract, byline, title, id, url, section, media, published_date } = article;
                    const mediaUrl = fetchMediaUrl(media);
                    const publishedDate = getDateAndMonth(published_date);
                    const card = { abstract, byline, title, id, url, section, mediaUrl, publishedDate };
                    return <Card key={id} index={index} card={card} />
                })
            }
        </>
    )
};

export default Articles;
