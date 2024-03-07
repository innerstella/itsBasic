import { useEffect, useState } from "react";
import * as S from "./MessageRecipient.style";
const MessageRecipient = ({ recipientData }) => {
  const [recipientName, setRecipientName] = useState("");

  useEffect(() => {
    setRecipientName(recipientData.name);
  }, [recipientData.name]);

  return (
    <S.Container>
      <p className="font-28-bold">To. {recipientName}</p>
    </S.Container>
  );
};

export default MessageRecipient;
