import { useParams } from "react-router-dom";
import * as S from "./MessageRecipient.style";
import { useState, useEffect } from "react";
const MessageRecipient = () => {
  const [recipientName, setRecipientName] = useState("");
  const { recipientId } = useParams();

  async function getData() {
    const json = await (
      await fetch(
        `https://rolling-api.vercel.app/4-2/recipients/${recipientId}/`
      )
    ).json();
    setRecipientName(json.name);
    return json;
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.Container>
      <p className='font-28-bold'>To. {recipientName}</p>
    </S.Container>
  );
};

export default MessageRecipient;
