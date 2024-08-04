import { useLocation } from "react-router-dom";
import { HeaderTitle } from "../../components/widgets";

const ArticleDetail = () => {
    const { state } = useLocation();
    return (
        <>
            <HeaderTitle />
            <div className='pt-10 flex justify-center'>
                <img data-testid={'article-image'} className='w-2/4 h-1/5' src={state?.mediaUrl} alt={state?.title} />
            </div>
            <h5 data-testid={'article-title'} className="mx-20 mt-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {state?.title}
            </h5>
            <p data-testid={'article-description'} className="mx-20 my-4 text-lg text-gray-700 dark:text-gray-400">
                {state?.abstract}
            </p>
        </>
    )
}

export default ArticleDetail;
