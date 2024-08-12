import { useNavigate } from 'react-router-dom';

type CardProps = {
    card: {
        id: string
        url: string
        mediaUrl: string
        title: string
        abstract: string
        byline: string
        section: string
        publishedDate: string
    },
    index: number
};

const Card = ({ card, index }: CardProps) => {
    const { id, mediaUrl, title, abstract, byline, section, publishedDate } = card;
    const navigate = useNavigate();

    return (
        <div key={id} data-testid={`card-${index}`} onClick={() => navigate(`/detail/${id}`, { state: card })} className="mx-16 my-8 flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >
            <img data-testid={`card-image-${id}`} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={mediaUrl} alt={`${title}`} />
            <div className="flex flex-col justify-between p-8 leading-normal">
                <p data-testid={`card-date-section-${id}`} className="mb-1 text-lg text-gray-700 dark:text-gray-400">
                    {`${publishedDate} | ${section}`}
                </p>
                <h5 data-testid={`card-title-${id}`} className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p data-testid={`card-description-${id}`} className="mb-3 text-lg text-gray-700 dark:text-gray-400">
                    {abstract}
                </p>
                <p data-testid={`card-byline-${id}`} className="mb-2 text-lg text-gray-700 dark:text-gray-400">
                    {byline}
                </p>
            </div>
        </div >
    )
}

export default Card;
