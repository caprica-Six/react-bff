import ky from "ky-universal";
import { useQuery } from "@tanstack/react-query";

// can use axios, but ky is best for SSR web apps
const fetchPosts = async (limit = 10) => {
  const parsed = await ky("https://jsonplaceholder.typicode.com/posts").json();
  return parsed.filter((x: { id: number }) => x.id <= limit);
};

const usePosts = (limit: number | undefined) => {
  return useQuery({
    queryKey: ["posts", limit],
    queryFn: () => fetchPosts(limit),
  });
};

export { usePosts, fetchPosts };
