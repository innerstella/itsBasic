import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "./HeaderToolBar.style";
import MessageWriterBox from "../MessageWriterBox/MessageWriterBox";
import MostEmojiBox from "../MostEmojiBox/MostEmojiBox";
import HeaderButtonBox from "../HeaderButtonBox/HeaderButtonBox";
import fetchData from "../Utils/API";

const HeaderToolBar = ({ recipientData }) => {
  const [emojiData, setEmojiData] = useState([]);
  const { recipientId } = useParams();

  const handleSetEmojiData = async (recipientId) => {
    setEmojiData([]);
    const { results } = await fetchData(`recipients/${recipientId}/reactions/`);
    setEmojiData(results);
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
