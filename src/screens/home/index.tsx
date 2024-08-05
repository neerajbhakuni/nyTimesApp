import { Articles, Header, Loader } from '../../components/widgets';
import { useMostPopularEndPoint } from '../../hooks/useMostPopularEndPoint';
import { DAYS_LIST } from '../../configs/constants';

const Home = () => {
  const { isLoading, articles, period, error, onDropDownChangeValue } = useMostPopularEndPoint();

  return (
    <>
      <Header selectedValue={period} dayList={DAYS_LIST} onDropDownChangeValue={onDropDownChangeValue} />
      {
        error ? (
          <div className='pt-10 text-3xl text-center flex justify-center items-center'>
            {error}
          </div>) :
          <Articles articles={articles} />
      }
      <Loader isLoading={isLoading} />
    </>
  );
}

export default Home;
