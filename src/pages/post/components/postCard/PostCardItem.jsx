import { useEffect, useState } from "react";
import * as S from "./PostCardStyle";
import Relationship from "./CardRelationship";
import RollingMessageModal from "../RollingMessageModal/RollingMessageModal.jsx";
import { formatDate } from "./formatData";
import getRecipientMessages from "./api";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const BASE_URL = "https://rolling-api.vercel.app/4-2";
export function PostCardItem() {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(8);
  const [cardData, setCardData] = useState([]);
  const { recipientId } = useParams();
  const [modalCardData, setModalCardData] = useState({});
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [amountDataCount, setAmountDataCount] = useState();
  const dataUrl = `${BASE_URL}/recipients/${recipientId}/messages/?limit=9&offset=${page}`;

  async function fetchFirstData() {
    const fisrtData = await getRecipientMessages(
      `${BASE_URL}/recipients/${recipientId}/messages/`
    );
    setAmountDataCount(fisrtData.count);
    const paperData = fisrtData.results;

    setCardData(paperData);
  }

  async function fetchData() {
    setPage((prev) => prev + 9);
    const jsonData = await getRecipientMessages(dataUrl);
    const paperData = jsonData.results;
    setCardData([...cardData, ...paperData]);
  }

  useEffect(() => {
    fetchFirstData();
  }, []);

  useEffect(() => {
    if (inView) {
      if (cardData.length > 5 && cardData.length < amountDataCount) {
        fetchData();
      }
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
