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
            <img data-testid={`card-image-${id}`} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg	" src={mediaUrl} alt={`${title}`} />
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
                {/* <div>
                    <a href={url} target='_blank' rel="noreferrer" className="inline-flex items-center px-3 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </ div> */}
            </div>
        </div >
    )
}

export default Card;
