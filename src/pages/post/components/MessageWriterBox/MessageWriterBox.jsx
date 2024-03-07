import { useEffect, useState } from "react";
import WriterImageBox from "../WriterImageBox/WriterImageBox";
import * as S from "./MessageWriterBox.style";

/**
 * @description 헤더부분 가장 최근 게시물을 작성한 사용자의 프로필 이미지 3개를 띄워주고 총 몇개의 게시물이 작성되었는지 숫자로 나타내기위한 컴포넌트 입니다.
 * @param reipientId - 주소창의 useParams를 받아 해당 id의 메세지를 모두 불러오기 위한 파라미터입니다
 * @param amountDataCount - 총 메세지의 개수를 useEffect의 dependency로 받아 메세지가 삭제될때마다 컴포넌트를 재렌더링 하기위한 파라미터 입니다
 * @returns
 */
const MessageWriterBox = ({ recipientData }) => {
  const [data, setData] = useState({});
  const [amountMessageCount, setAmountMessageCount] = useState(0);

  useEffect(() => {
    setData(recipientData);
    setAmountMessageCount(recipientData.messageCount);
  }, [recipientData]);

  return (
    <S.Container>
      <WriterImageBox data={data} />
      {data.messageCount === 0 ? (
        <p className="font-18-regular">아직 메세지가 없어요!</p>
      ) : (
        <p className="font-18-regular">
          <span className="font-18-bold">{amountMessageCount}</span>명이
          작성했어요!
        </p>
      )}
    </S.Container>
  );
};

export default MessageWriterBox;
