import { Suspense, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { fetchData, fetchData2 } from "./api"; // Assume you have an API module named api.ts
import { dataState1, dataState2 } from "./recoil"; // Assume you have a Recoil atom named recoil.ts

function App() {
  const { isLoading, isError } = useQuery(["data"], fetchData);
  const [data1, setData1] = useRecoilState(dataState1);
  const [data2, setData2] = useRecoilState(dataState2);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData();
        setData1(response);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDataAsync2 = async () => {
      try {
        const response = await fetchData2();
        setData2(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAsync();
    fetchDataAsync2();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h1>React Suspense Example</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <DataComponent data={data1} />
        <Suspense fallback={<h1>LoadingLoadingLoadingLoadingLoading</h1>}>
          <DataComponent data={data2} />
        </Suspense>
      </Suspense>
    </div>
  );
}

function DataComponent({ data }: { data: string }) {
  return <div>{data}</div>;
}

export default App;
