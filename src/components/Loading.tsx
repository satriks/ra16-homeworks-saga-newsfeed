import loading from "../assets/loader2.gif";

export default function Loading() {
  return (
    <div className="loading">
      <img
        src={loading}
        alt=""
        style={{
          width: "100px",
          height: "80px",
          margin: "auto",
        }}
      />
    </div>
  );
}
