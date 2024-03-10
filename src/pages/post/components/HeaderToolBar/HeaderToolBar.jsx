import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "./HeaderToolBar.style";
import MessageWriterBox from "../MessageWriterBox/MessageWriterBox";
import MostEmojiBox from "../MostEmojiBox/MostEmojiBox";
import HeaderButtonBox from "../HeaderButtonBox/HeaderButtonBox";
import fetchData from "../Utils/API";

/**
 * @description 임시로 이모지 데이터를 받도록 처리한 함수
 * @param recipientId 현재 페이지의 useParams
 * @returns
 */
const fetchEmojiData = async (recipientId) => {
  const { results } = await fetchData(`recipients/${recipientId}/reactions/`);
  return results;
};

const HeaderToolBar = ({ recipientData }) => {
  const [emojiData, setEmojiData] = useState([]);
  const { recipientId } = useParams();

  const handleSetEmojiData = async (recipientId) => {
    setEmojiData([]);
    try {
      const emojiRaw = await fetchEmojiData(recipientId);
      if (!emojiRaw) {
        throw new Error("정상적인 페이지 접근이 아닙니다.");
      }
      setEmojiData(emojiRaw);
    } catch {}
  };

  useEffect(() => {
    handleSetEmojiData(recipientId);
  }, [recipientId]);

  return (
    <S.Container>
      <MessageWriterBox recipientData={recipientData} />
      <MostEmojiBox emojiData={emojiData} emojiFunc={handleSetEmojiData} />
      <HeaderButtonBox emojiFunc={handleSetEmojiData} />
    </S.Container>
  );
};

export default HeaderToolBar;
