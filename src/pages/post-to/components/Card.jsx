import CardStyle from "./Card.style";
import { useEffect, useState } from "react";

const CARDCOLOR = [
  "--color-orange-200",
  "--color-purple-200",
  "--color-blue-200",
  "--color-green-200",
];

const Card = ({ colorState }) => {
  const [cardColorChecks, setCardColorChecks] = useState(Array(4).fill(false));
  const [cardImageChecks, setCardImageChecks] = useState(Array(4).fill(false));
  const [cardImage, setCardImage] = useState([]);

  if (!cardColorChecks.includes(true)) {
    cardColorChecks[0] = true;
  }
  if (!cardImageChecks.includes(true)) {
    cardImageChecks[0] = true;
  }

  const handleCardColorCheck = (index) => {
    const newCardChecks = Array(4).fill(false);
    newCardChecks[index] = !cardColorChecks[index];
    setCardColorChecks(newCardChecks);
  };
  const handleCardImageCheck = (index) => {
    const newCardChecks = Array(4).fill(false);
    newCardChecks[index] = !cardImageChecks[index];
    setCardImageChecks(newCardChecks);
  };

  useEffect(() => {
    fetch("https://rolling-api.vercel.app/background-images/")
      .then((res) => res.json())
      .then((data) => {
        setCardImage(data.imageUrls);
        console.log();
      });
  }, []);

  return (
    <>
      {colorState === true
        ? CARDCOLOR.map((color, index) => (
            <CardStyle
              className="card card-color"
              key={index}
              color={color}
              onClick={() => handleCardColorCheck(index)}
            >
              {cardColorChecks[index] && (
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
              style={{ backgroundImage: `url(${imageUrl})` }}
              onClick={() => handleCardImageCheck(index)}
            >
              {cardImageChecks[index] && (
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
