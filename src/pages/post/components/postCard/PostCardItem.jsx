import { useEffect, useState } from "react";
import * as S from "./PostCardStyle";
import Relationship from "./CardRelationship";
import RollingMessageModal from "../RollingMessageModal/RollingMessageModal.jsx";
import { formatDate } from "./formatData";
import getRecipientMessages from "./api";
import { useParams, useNavigate } from "react-router-dom";
import TrashButton from "./TrashButton";
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
  const currentURL = window.location.href;
  const navigate = useNavigate();
  //휴지통버튼 함수
  function onDeleteItem(e) {
    e.stopPropagation();

    const deleteUrl = `https://rolling-api.vercel.app/4-2/messages/${e.target.id}/`;
    if (window.confirm("해당 항목을 정말 삭제하시겠습니까?")) {
      fetch(deleteUrl, { method: "DELETE" });
      setTimeout(function () {
        navigate(`/post/${recipientId}`);
        fetchFirstData();
      }, 300);
    }
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
                alt="이미지"
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
              {currentURL.includes("edit") && (
                <TrashButton onDeleteItem={onDeleteItem} id={el.id} />
              )}
            </S.CardHeader>
            <S.Content fontFamily={el.font}>{el.content}</S.Content>
            <S.Date>{formatDate(el.createdAt)}</S.Date>
          </S.CardItem>
        ))}
      <S.ContentEndPoint ref={ref}></S.ContentEndPoint>
    </>
  );
}
