import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../reducers/postsSlice";
import { selectAllPosts } from "../reducers/reducer";

function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts).slice(0, 10);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="title">Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id} className="postsList">
            <h2>
              {post.title} {post.id}.
            </h2>
            <p>{post.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PostsList;
