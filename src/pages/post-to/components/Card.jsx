import CardStyle from "./Card.style";

const CARDCOLOR = [
  "--color-orange-200",
  "--color-purple-200",
  "--color-blue-200",
  "--color-green-200",
];

const Card = ({
  type,
  cardColorChecks,
  cardImageChecks,
  handleCardColorCheck,
  handleCardImageCheck,
  cardImage,
}) => {
  return (
    <>
      {type === "color"
        ? CARDCOLOR.map((color, index) => (
            <CardStyle
              className="card card-color"
              key={index}
              value={color}
              color={color}
              onClick={() => handleCardColorCheck(index)}
            >
              {cardColorChecks === index && (
                <img
                  className="check-image"
                  src="/assets/post-to/Enabled.svg"
                  alt="체크 표시"
                />
              )}
            </CardStyle>
          ))
        : cardImage.map((imageUrl, index) => (
            <CardStyle
              className="card card-image"
              key={index}
              value={imageUrl}
              style={{ backgroundImage: `url(${imageUrl})` }}
              onClick={() => handleCardImageCheck(index)}
            >
              {cardImageChecks === index && (
                <>
                  <img
                    className="check-image"
                    src="/assets/post-to/Enabled.svg"
                    alt="체크 표시"
                  />
                  <div className="select-opacity" />
                </>
              )}
            </CardStyle>
          ))}
    </>
  );
};

export default Card;
