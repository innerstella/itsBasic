import { useEffect, useState } from "react";
import * as S from "./PostCardStyle";
import Relationship from "./CardRelationship";
import { formatDate } from "./formatData";
import getRecipientMessages from "./api";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import RollingMessageModal from "../RollingMessageModal/RollingMessageModal.jsx";

const BASE_URL = "https://rolling-api.vercel.app/4-2";
export function PostCardItem() {
  const [firstDataCount, setFirstDataCount] = useState(8);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(0);
  const [cardData, setCardData] = useState([]);
  const { recipientId } = useParams();
  const [modalCardData, setModalCardData] = useState({});
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const dataUrl = `${BASE_URL}/recipients/${recipientId}/messages/?limit=${firstDataCount}&offset=${page}`;

  async function fetchData() {
    setFirstDataCount(9);
    setPage((prev) => prev + 8);
    const jsonData = await getRecipientMessages(dataUrl);
    const paperData = jsonData.results;
    setCardData([...cardData, ...paperData]);
  }

  useEffect(() => {
    if (inView) {
      fetchData();
    }
  }, [inView]);

  function handleMessageModalOpen(el) {
    setModalCardData(el);
    setIsMessageOpen(true);
  }

  return (
    <>
      {isMessageOpen && (
        <RollingMessageModal
          rollingMessageData={modalCardData}
          setIsOpen={setIsMessageOpen}
        />
      )}
      {cardData &&
        cardData.map((el) => (
          <S.CardItem key={el.id} onClick={() => handleMessageModalOpen(el)}>
            <S.CardHeader>
              <S.ProfileImage
                src={el.profileImageURL}
                alt='이미지'
              ></S.ProfileImage>
              <S.CardHeaderContainer>
                <S.CardHeaderName>
                  <S.From>From.</S.From>
                  <S.Name>{el.sender}</S.Name>
                </S.CardHeaderName>
                <Relationship state={el.relationship}>
                  {el.relationship}
                </Relationship>
              </S.CardHeaderContainer>
              <S.DeleteButton>
                <img src={`/assets/post/deleted.svg`} alt='삭제휴지통'></img>
              </S.DeleteButton>
            </S.CardHeader>
            <S.Content fontFamily={el.font}>{el.content}</S.Content>
            <S.Data>{formatDate(el.createdAt)}</S.Data>
          </S.CardItem>
        ))}
      <S.ContentEndPoint ref={ref}></S.ContentEndPoint>
    </>
  );
}
