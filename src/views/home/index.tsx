// import { useEffect } from "react";
import { useGetTestQuery } from "../../stores/services/test";

const Home = () => {
  const {
    data: testData,
    isLoading: testDataLoading,
    error: testError,
  } = useGetTestQuery({});

  //   console.log("testData", testData);
  console.log("testDataLoading", testDataLoading);
  console.log("testError", testError);

  //   useEffect(() => {}, [testData]);

  return (
    <div>
      Home
      {testData &&
        testData.map((item: any, i: number) => {
          return <div key={i}>{item.id}</div>;
        })}
    </div>
  );
};

export default Home;
