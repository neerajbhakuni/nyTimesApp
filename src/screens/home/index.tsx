import { Articles, Header, Loader } from '../../components/elements';
import { useMostPopularEndPoint } from '../../hooks/useMostPopularEndPoint';
import { DAYS_LIST } from '../../configs/constants';

const Home = () => {
  const { isLoading, articles, period, onDropDownChangeValue } = useMostPopularEndPoint();

  return (
    <>
      <Header selectedValue={period} dayList={DAYS_LIST} onDropDownChangeValue={onDropDownChangeValue} />
      <Articles articles={articles} />
      <Loader isLoading={isLoading} />
    </>
  );
}

export default Home;
