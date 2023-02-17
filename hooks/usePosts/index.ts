import { useQuery } from "@tanstack/react-query";

// can use axios, fetchAPI, but ky is best for SSR web apps
// key throws an 'unknown' error
const fetchPosts = async (limit = 10) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await response.json();

  const filteredData = result.filter((x: { id: number }) => x.id <= limit);

  return filteredData;
};

const usePosts = (limit: number | undefined) => {
  return useQuery({
    queryKey: ["posts", limit],
    queryFn: () => fetchPosts(limit),
  });
};

export { usePosts, fetchPosts };
