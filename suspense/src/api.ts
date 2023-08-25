// api.ts
import axios from "axios";

export async function fetchData(): Promise<string> {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  return response.data.title;
}

export async function fetchData2(): Promise<string> {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/2"
  );
  return response.data.title;
}
