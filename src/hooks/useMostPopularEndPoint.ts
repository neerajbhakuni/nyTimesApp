import { useState, useEffect } from "react";
import service from "../services";
import { STATUS_CODE, DAYS_LIST } from "../configs/constants";

type ArticleProps = { 
  abstract: string
  byline: string
  title: string 
  id: string
  url: string 
  section: string
  media: any
  published_date: string
};

export const useMostPopularEndPoint = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [period, setPeriod] = useState<string>(DAYS_LIST[0]);

  useEffect(() => {
    const loadMostPopularArticles = async () => {
      try {
        const url = service.API_PATH.MOST_POPULAR_ARTICLE_API?.replace(
          ":period",
          period
        );
        setIsLoading(true);
        const response = await service.get(url);
        setIsLoading(false);
        if (response.status === STATUS_CODE.HTTP_OK) {
          setError(undefined);
          setArticles(response?.data?.results || []);
        }
      } catch (error) {
        setIsLoading(false);
        setError('Unable to load articles. Retry again');
      }
    };

    loadMostPopularArticles();
  }, [period]);

  const onDropDownChangeValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPeriod(event.target.value);
  };

  return {
    isLoading,
    articles,
    period,
    error,
    onDropDownChangeValue,
  };
};
