import { useEffect, useState } from "react";
import RollingMessageModal from "../RollingMessageModal/RollingMessageModal.jsx";
import Relationship from "./CardRelationship";
import getRecipientMessages from "./api";
import TrashButton from "./TrashButton";
import { formatDate } from "../../../../utils/formatDate.js";
import { useParams, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import * as S from "./PostCardItem.style";

const BASE_URL = "https://rolling-api.vercel.app/4-2";

export function PostCardItem({ amountDataCount, setAmountDataCount }) {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(8);
  const [cardData, setCardData] = useState([]);
  const { recipientId } = useParams();
  const [modalCardData, setModalCardData] = useState({});
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const dataUrl = `${BASE_URL}/recipients/${recipientId}/messages/?limit=9&offset=${page}`;

  /**
   * Post 페이지를 처음 렌더링했을때 보여줄 메세지를 fetching하는 함수입니다
   */
  async function fetchFirstData() {
    const firstData = await getRecipientMessages(
      `${BASE_URL}/recipients/${recipientId}/messages/`
    );
    setAmountDataCount(firstData.count);
    const paperData = firstData.results;
    setCardData(paperData);
  }

  /**
   * 사용자가 스크롤을 모두 내렸을경우 offset값을 9씩 늘려서 cardData에 추가해 데이터를 더 불러오는 함수입니다
   */
  async function fetchData() {
    setPage((prev) => prev + 9);
    const jsonData = await getRecipientMessages(dataUrl);
    const paperData = jsonData.results;
    setCardData([...cardData, ...paperData]);
  }

  /**
   * 사용자가 데이터를 삭제할경우 현재 데이터의 개수만큼 그대로 다시 fetching하는 함수입니다
   */
  async function deleteFetchData() {
    const jsonData = await getRecipientMessages(
      `${BASE_URL}/recipients/${recipientId}/messages/?limit=${cardData.length}`
    );

    const paperData = jsonData.results;
    setCardData(paperData);
  }
  useEffect(() => {
    fetchFirstData();
  }, []);

  /**
   * S.ContentEndPoint에 useRef를 줘 그 요소가 화면에 보이면 inView가 true 보이지 않으면 false가 됩니다(스크롤을 화면 끝까지 내리면)
   * true일 경우 fetchData 함수를 통해 cardData에 9개씩 메세지들을 추가합니다.
   * 메세지가 일정개수보다 작을경우 혹은 모든 메세지를 불러왔을때 스크롤을 할경우 데이터패칭을 막기위해 조건식을 추가했습니다.
   */
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

  /**
   * 메세지 휴지통 아이콘을 클릭할때 적용되는 함수입니다 데이터 delete 요청후 deleteFetchData 함수를 통해 현재 추가된 메세지 개수만큼 fetching합니다
   * 데이터가 삭제되었을때 무한스크롤과 싱크를 맞추기 위해 offset을 현재 데이터의 개수에 맞춥니다
   * setAmountDataCount는 useParams와 같은 id에 해당하는 모든 메세지를 불러와 그 개수를 저장합니다 데이터가 삭제될경우 -1을 해줍니다
   * 데이터 삭제후 /post/id/edit 으로 이동합니다
   */
  function onDeleteItem(e) {
    e.stopPropagation();

    const deleteUrl = `https://rolling-api.vercel.app/4-2/messages/${e.target.id}/`;
    if (window.confirm("해당 항목을 정말 삭제하시겠습니까?")) {
      fetch(deleteUrl, { method: "DELETE" });

      setTimeout(function () {
        deleteFetchData();
        setPage(cardData.length);
        setAmountDataCount((prev) => prev - 1);
        navigate(`/post/${recipientId}/edit`);
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
                <Relationship $state={el.relationship}>
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
