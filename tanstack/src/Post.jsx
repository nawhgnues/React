import { useQuery } from "@tanstack/react-query";
import { getPost } from "./api/posts";
import { getUser } from "./api/users";

// useQuery는 서버로부터 데이터를 조회해올 때 사용한다.
// 주요 리턴 데이터 : status, data, isLoading, isFetching, error, isError ...

// queryKey는 useQuery마다 부여되는 고유 키값이다.
// query 캐싱을 관리할 수 있도록 하는 역할.

// queryFn는 promise 처리가 이루어지는 함수이다.

export default function Post({ id }) {
  const postQuery = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });

  const userQuery = useQuery({
    queryKey: ["users", postQuery?.data?.userId],
    enabled: postQuery?.data?.userId != null,
    queryFn: () => getUser(postQuery.data.userId),
  });

  if (postQuery.status === "loading") return <h1>Loading...</h1>;
  if (postQuery.status === "error") {
    return <h1>{JSON.stringify(postQuery.error)}</h1>;
  }

  return (
    <>
      <h1>
        {postQuery.data.title} <br />
        <small>
          {userQuery.isLoading
            ? "Loading User..."
            : userQuery.isError
            ? "Error Loading User"
            : userQuery.data.title}
        </small>
      </h1>
      <p>{postQuery.data.body}</p>
    </>
  );
}
