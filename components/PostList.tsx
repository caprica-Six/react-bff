import React, { useState } from "react";
import { usePosts } from "../hooks/usePosts";

const PostList = () => {
  const [postCount, setPostCount] = useState(10);
  const { data, isLoading, isFetching } = usePosts(postCount);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="mt-2 p-6">
      <ul className="list-none">
        {data?.map(
          (
            post: {
              id: React.Key | null | undefined;
              // TODO: fix TS
              title:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            },
            index: number
          ) => (
            <li key={post.id}>
              <div>
                <span>{index + 1}. </span>
                <a href="#">{post.title}</a>
              </div>
            </li>
          )
        )}
      </ul>

      {postCount <= 90 && (
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setPostCount(postCount + 10)}
            disabled={isFetching}
          >
            {isFetching ? "Loading..." : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PostList;
