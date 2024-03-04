import { useEffect, useState } from "react";
import WriterImageBox from "../WriterImageBox/WriterImageBox";
import * as S from "./MessageWriterBox.style";

const MessageWriterBox = ({ recipientId }) => {
  const [data, setData] = useState({});
  const fetchData = async () => {
    const json = await (
      await fetch(
        `https://rolling-api.vercel.app/4-2/recipients/${recipientId}/`
      )
    ).json();

    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Container>
      <WriterImageBox />
      {data.messageCount === 0 ? (
        <p className='font-18-regular'>아직 메세지가 없어요!</p>
      ) : (
        <p className='font-18-regular'>
          <span className='font-18-bold'>{data.messageCount}</span>명이
          작성했어요!
        </p>
      )}
    </S.Container>
  );
};

export default MessageWriterBox;
