import { commentSvg, heartSvg, shareSvg, viewSvg } from "../assets/svg";
import { formatView } from "../utils/formatViews";

type Props = {
  comment: string;
  like: string;
  repost: string;
  view: string;
};

export default function PostFooter({ comment, like, repost, view }: Props) {
  return (
    <div className="post__footer">
      {heartSvg} {Boolean(like) && <span>{like}</span>}
      {commentSvg}
      {Boolean(comment) && <span>{comment}</span>}
      {shareSvg}
      {Boolean(repost) && <span>{repost}</span>}
      <div className="place"></div>
      {viewSvg}
      {Boolean(view) && <span>{formatView(view) + "K"}</span>}
    </div>
  );
}
