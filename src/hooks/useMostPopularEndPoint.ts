import { useState, useEffect } from "react";
import service from "../services";
import { STATUS_CODE, DAYS_LIST } from "../configs/constants";

export const useMostPopularEndPoint = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState([]);
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
        if (response.status === STATUS_CODE.HTTP_OK)
          setArticles(response?.data?.results || []);
        setIsLoading(false);
      } catch (error) {

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
    onDropDownChangeValue,
  };
};
