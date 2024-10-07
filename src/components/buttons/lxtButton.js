import "./lxtButton.scss";

export default function LxtButton({ text, color, borderColor = "none" }) {
  return (
    <div
      className="lxtButton"
      style={{
        backgroundColor: color,
        border: borderColor == "none" ? "none" : `1px solid ${borderColor}`,
      }}
    >
      {text}
    </div>
  );
}
