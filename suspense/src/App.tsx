import { useQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import { getFetchData } from "./api";
import { useRecoilState } from "recoil";
import { bodyState, titleState } from "./recoil";

export const App = () => {
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
      <h1>{title}</h1>
      <h2>{body}</h2>
    </>
  );
};

export default App;
