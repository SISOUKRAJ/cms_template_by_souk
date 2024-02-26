// import { useEffect } from "react";
import Card_Content from "../../components/Card/card_content";
// import Loading_component from "../../components/loading";
import { useGetTestQuery } from "../../stores/services/test";

const Home = () => {
  const {
    data: testData,
    isLoading: testDataLoading,
    error: testError,
  } = useGetTestQuery({});

  // useEffect(() => {}, [testData]);

  return (
    <Card_Content loading={testDataLoading} error={testError}>
      Home
      {testData &&
        testData.map((item: any, i: number) => {
          return <div key={i}>{item.id}</div>;
        })}
    </Card_Content>
  );
};

export default Home;
