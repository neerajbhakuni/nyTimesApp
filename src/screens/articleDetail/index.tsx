import { useLocation } from "react-router-dom";
import { HeaderTitle } from "../../components/elements";

const ArticleDetail = () => {
    const location = useLocation();
    const {state} = location;

    return (
        <>
            <HeaderTitle />
            {
                !state ? (<div data-testid={'no-article-found'} className='pt-10 flex justify-center mx-20 text-3xl text-gray-700 dark:text-gray-400'>
                    No article found
                </div>
                ) : (<div className='pt-10 flex justify-center mx-20'>
                    <div className="w-1/2 h-1/3">
                        <img data-testid={'article-image'} className='w-full h-full' src={state?.mediaUrl} alt={state?.title} />
                    </div>
                    <div className="w-1/2 h-1/2 mx-20 ">
                        <div data-testid={`card-date-section`} className="text-lg text-gray-700 dark:text-gray-400">
                            {`${state?.publishedDate} | ${state?.section}`}
                        </div>
                        <h5 data-testid={'article-title'} className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {state?.title}
                        </h5>
                        <p data-testid={'article-description'} className="mt-6 text-lg text-gray-700 dark:text-gray-400">
                            {state?.abstract}
                        </p>
                        <p data-testid={`card-byline`} className="mt-6 text-lg text-gray-700 dark:text-gray-400">
                            {state?.byline}
                        </p>
                        <div>
                            <a href={state?.url} target='_blank' rel="noreferrer" className="mt-8 inline-flex items-center px-3 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </ div>
                    </div>

                </div>)
            }

        </>
    )
}

export default ArticleDetail;
