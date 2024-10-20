import { useState } from "react";
import "./actionCard.scss";

export default function ActionCard({ heading, list, defaultExpanded = true }) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  return (
    <>
      <div
        style={{
          height: expanded ? "auto" : "",
          paddingBlock: expanded ? "20px" : "30px",
          paddingBottom: expanded ? "80px" : "30px",
          paddingInline: expanded ? "50px" : "",
          backgroundColor: expanded ? "#022359" : "",
        }}
        className="action-card-view"
      >
        <div className="action-card-heading">
          {!defaultExpanded ? (
            <>
              {expanded ? (
                <h2>
                  <strong>{heading}</strong>
                  <img
                    height={30}
                    width={30}
                    onClick={() => setExpanded(!expanded)}
                    src="arrowdown.png"
                  />
                </h2>
              ) : (
                <>
                  <strong>{heading}</strong>
                  <strong onClick={() => setExpanded(!expanded)}>^</strong>
                </>
              )}
            </>
          ) : (
            <h2>
              <strong>{heading}</strong>
            </h2>
          )}
        </div>
        {expanded ? (
          <>
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
          </>
        ) : (
          <>
            {list && (
              <span
                style={{
                  paddingTop: "10px",
                  color: "#84BED6",
                  fontSize: "1.3rem",
                }}
              >
                {list[0]}
              </span>
            )}
          </>
        )}
      </div>
    </>
  );
}
