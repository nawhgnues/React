import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api/posts";

export default function PostsList1() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    // placeholderData는 임시 데이터이다. (캐시에 저장되지 않는다)
    placeholderData: [{ id: 1, name: "Initial Data" }],
  });

  if (postsQuery.status === "loading") return <h1>Loading...</h1>;
  if (postsQuery.status === "error") {
    return <h1>{JSON.stringify(postsQuery.error)}</h1>;
  }

  return (
    <div>
      <h1>Posts List 1</h1>
      <ol>
        {postsQuery.data.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ol>
    </div>
  );
}
