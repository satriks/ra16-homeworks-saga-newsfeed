import { useAppDispatch, useAppSelector } from "../models/hook";
import { getMorePosts } from "../redux/DataSlice";

export default function LoadMore() {
  const posts = useAppSelector((state) => state.data.posts);
  const dispatch = useAppDispatch();

  return (
    <button
      style={{ width: "250px", margin: "auto", fontSize: "12px" }}
      onClick={() => {
        dispatch(getMorePosts(posts[posts.length - 1].id));
      }}
    >
      К предыдущим записям
    </button>
  );
}
