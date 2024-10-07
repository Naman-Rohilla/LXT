import "./productCard.scss";

export default function ProductCard({
  cardHeight = 350,
  cardWidth = 250,
  footerEnable = true,
  footerObject,
  backgroundVideo,
  hoverImage,
  checkoutButtonEnable = true,
}) {
  return (
    <>
      <div
        style={{
          height: cardHeight + "px",
          width: cardWidth + "px",
        }}
        className="product-card"
      >
        {backgroundVideo && (
          <img className="background-video" src={backgroundVideo}></img>
        )}
        {hoverImage && <img className="hover-img" src={hoverImage} />}
        {checkoutButtonEnable && (
          <dic className="hover-button">Quick Checkout</dic>
        )}
        {footerEnable && (
          <div className="card-footer">
            {footerObject && (
              <>
                <div className="card-heading">
                  {footerObject?.heading && <span>{footerObject.heading}</span>}
                  {footerObject?.colorHeading && (
                    <span
                      style={{
                        color: footerObject.color,
                      }}
                    >
                      {footerObject.colorHeading}
                    </span>
                  )}
                </div>
              </>
            )}
            {footerObject?.description && (
              <span className="card-descrption">
                {footerObject.description}
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
}
