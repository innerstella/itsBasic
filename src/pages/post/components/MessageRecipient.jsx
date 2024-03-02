import { useParams } from "react-router-dom";
import * as S from "./MessageRecipient.style";
import { useState, useEffect } from "react";
import getRecipientMessages from "./postCard/api";
const MessageRecipient = () => {
  const [cardData, setCardData] = useState([]);
  const { recipientId } = useParams();
  console.log(recipientId);
  async function handleCardData() {
    const jsonData = await getRecipientMessages(recipientId);
    const paperData = jsonData.results;
    setCardData(paperData);
  }

  useEffect(() => {
    handleCardData();
    console.log(cardData);
  }, []);
  return (
    <S.Container>
      <p className='font-28-bold'>To. Ashley Kim</p>
    </S.Container>
  );
};

export default MessageRecipient;
