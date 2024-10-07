import "./actionCard.scss";

export default function ActionCard({ heading, list }) {
  return (
    <>
      <div className="action-card-view">
        <h2>
          <strong>{heading}</strong>
        </h2>
        {list?.map((lt) => (
          <span
            style={{
              paddingBlock: "10px",
              color: "#84BED6",
              fontSize: "1.3rem",
            }}
          >
            {lt}
          </span>
        ))}
      </div>
    </>
  );
}
