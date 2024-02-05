import logoNetology from "../assets/netology.jpg";
import { formateDate } from "../utils/dataTIme";

type Props = { date: string };

export default function PostHeader({ date }: Props) {
  return (
    <div className="post__header">
      <img
        src={logoNetology}
        alt=""
        style={{ width: "50px", height: "50px" }}
      />
      <div className="post__header__info">
        <a href="">Университет интернет профессий Нетология</a>
        <span style={{ color: "rgb(160, 152, 152)" }}>{formateDate(date)}</span>
      </div>
    </div>
  );
}
