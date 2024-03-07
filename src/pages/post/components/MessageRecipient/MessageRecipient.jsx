import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./MessageRecipient.style";
const MessageRecipient = () => {
  const [recipientName, setRecipientName] = useState("");
  const { recipientId } = useParams();

  /**
   * @description 주소창에 id를 useParams로 받아 누구에게 롤링페이퍼를 썼는지 표시해주는 컴포넌트 입니다
   * @returns
   */
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
