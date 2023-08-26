// api.ts
import axios from "axios";

export const getFetchData = async () => {
  const data = await axios("https://jsonplaceholder.typicode.com/posts/1").then(
    (response) => response
  );
  return data;
};
