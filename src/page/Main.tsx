import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../models/hook";
import { getPosts } from "../redux/DataSlice";
import Post from "../components/Post";
import LoadMore from "../components/LoadMore";

import Loading from "../components/Loading";

export default function Main() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.data.posts);
  const isLoading = useAppSelector((state) => state.data.loading);
  const end = useAppSelector((state) => state.data.end);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="post__wrapper">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      {isLoading && <Loading />}
      {!isLoading && !end && <LoadMore />}
    </div>
  );
}
