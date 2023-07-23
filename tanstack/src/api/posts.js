import axios from "axios";

export function getPosts() {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts/1/comments", {
      params: { _sort: "name" },
    })
    .then((res) => res.data);
}

export function getPost(id) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
    .then((res) => res.data);
}
