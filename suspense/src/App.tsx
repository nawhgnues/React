import { useQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import { getFetchData } from "./api";
import { useRecoilState } from "recoil";
import { bodyState, titleState } from "./recoil";

export const App = () => {
  const { isLoading, isError } = useQuery(["data"], getFetchData);
  const [title, setTitle] = useRecoilState(titleState);
  const [body, setBody] = useRecoilState(bodyState);

  const Title = () => {
    const { data } = useQuery(
      ["serverData1"],
      () =>
        getFetchData().then((data) => {
          setTitle(data.data.title);
          return data.data;
        }),
      {
        suspense: true,
      }
    );
    return <div>{data.title}</div>;
  };

  const Body = () => {
    const { data } = useQuery(
      ["serverData2"],
      () =>
        getFetchData().then((data) => {
          setBody(data.data.body);
          return data.data;
        }),
      {
        suspense: true,
      }
    );
    return <div>{data.body}</div>;
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error fetching data</h1>;
  }

  return (
    <>
      <h1>Title</h1>
      <Suspense fallback={<h2>Title Loading...</h2>}>
        <Title />
      </Suspense>
      <hr />
      <h1>Body</h1>
      <Suspense fallback={<h2>Body Loading...</h2>}>
        <Body />
      </Suspense>

      <hr></hr>
      <Suspense fallback={<h1>Loading...</h1>}>
        <h1>Result</h1>
        <div>
          <h3>Title</h3>
          <Title />
        </div>
        <div>
          <h3>Body</h3>
          <Body />
        </div>
      </Suspense>
    </>
  );
};

export default App;
