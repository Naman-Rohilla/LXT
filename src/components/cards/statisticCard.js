import "./statisticCard.scss";
import { useSwipeable } from "react-swipeable";

export default function StatisticCard({ cardData }) {
  const cardLength = cardData.length;
  const divideWidth = 100 / cardLength;

  return (
    <>
      <div className="statistic-card">
        {cardData && (
          <>
            {cardData?.map((sc) => (
              <>
                <div
                  className="content"
                  style={{
                    width: "300px",
                  }}
                  key={sc.id}
                >
                  <div className="header">
                    <img src={sc.icon} />
                    <div className="heading">{sc.heading}</div>
                  </div>
                  <div className="summary">{sc.summary}</div>
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
}
