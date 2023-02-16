import React from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import PostList from "../components/PostList";
import { fetchPosts } from "../hooks";

const PostsPage = () => {
  return (
    <div className="m-auto max-w-6xl p-4">
      <div className="my-6 pt-2">
        <h1 className="font-bold text-2xl">Posts with SSG & react-query</h1>
        <PostList />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts", 10],
    queryFn: () => fetchPosts(10),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default PostsPage;
