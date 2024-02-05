import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { DataItem } from "../models/models";

type Props = { post: DataItem };

export default function Post({ post }: Props) {
  const texts = post.text.split("&");
  const text = texts[0];

  return (
    <div className="post">
      <PostHeader date={post.date} />
      <div className="post__info">
        <span>{text}</span>
        <img src="#" />
      </div>
      <PostFooter
        comment={post.comments.count}
        like={post.likes.count}
        repost={post.reposts.count}
        view={post.views.count}
      />
    </div>
  );
}
