import axios from "axios";

export function getUser(id) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
    .then((res) => res.data);
}
