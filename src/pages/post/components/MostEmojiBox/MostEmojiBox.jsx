import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as S from "./MostEmojiBox.style.jsx";
import DropdownClickCancel from "../DropdownClickCancel/DropdownClickCancel.jsx";
import handleEmojiSelect from "../Utils/handleEmojiSelect.js";
import SkeletonUI from "../../../../components/skeleton-ui/SkeletonUI.jsx";

/**
 * @description 필터링된 이모지 리스트를 전달받아 표시하는 컴포넌트
 * @param {*} emojiList 이모지 드롭다운에 표시할 이모지 리스트들 최대 8개
 * @param {*} recipientId 대상 페이지 ID
 * @param {*} emojiFunc 이모지 리스트를 새로고침하는 함수
 * @returns
 */
const EmojiDropDown = ({ emojiList, emojiFunc, recipientId }) => {
  return (
    <>
      {emojiList.length === 0 ? (
        <S.EmojiListContainer columns={"1fr"}>
          <span className="font-16-regular">
            이모지를 선택하여 이 글에 반응해보세요!
          </span>
        </S.EmojiListContainer>
      ) : (
        <S.EmojiListContainer>
          {emojiList.map((item) => (
            <S.EmojiUsedWrapper
              key={item.emoji}
              $state={localStorage.getItem(`${recipientId}-${item.emoji}`)}
              className="font-16-regular"
              onClick={() =>
                handleEmojiSelect(item.emoji, recipientId, emojiFunc)
              }
            >
              <span>{item.emoji}</span>
              {item.count}
            </S.EmojiUsedWrapper>
          ))}
        </S.EmojiListContainer>
      )}
    </>
  );
};

/**
 * @description 가장 많이 사용된 이모지 세개를 표시하고, 우측 버튼을 누르면 드롭다운이 열리면서 나머지 8개를 보여주는 함수
 * @param emojiData 서버로부터 받아온 전체 이모지 리스트
 * @param emojiFunc,이모지 변동이 일어났을 때 이모지 리스트를 새로고침하는 함수
 * @returns
 */
const MostEmojiBox = ({ emojiData, emojiFunc, isLoaded }) => {
  const [isEmojiDropDownOpen, setIsEmojiDropDownOpen] = useState(false);
  const [favoriteEmoji, setFavoriteEmoji] = useState([]);
  const [usedEmojiList, setUsedEmojiList] = useState([]);
  const { recipientId } = useParams();

  useEffect(() => {
    if (emojiData.length !== 0) {
      const usedEmojiList = emojiData
        .sort((a, b) => b.count - a.count)
        .filter((item) => item.count > 0)
        .filter((item, i) => i < 8);
      const mostFavorEmoji = usedEmojiList.filter((item, i) => i < 3);
      setFavoriteEmoji(mostFavorEmoji);
      setUsedEmojiList(usedEmojiList);
    }
  }, [emojiData]);

  return (
    <>
      {!isLoaded ? (
        <SkeletonUI
          className="emoji-skeleton"
          width="20rem"
          height="4.2rem"
          mWidth="100%"
          mWeight="100%"
          radius="0.5rem"
          position="relative"
        />
      ) : (
        <S.DropdownFuncBtnContainer>
          {favoriteEmoji.length === 0 ? (
            <S.EmojiMostUsedWrapper className="font-16-regular">
              아직 글에 반응이 없어요.
            </S.EmojiMostUsedWrapper>
          ) : (
            favoriteEmoji.map((item) => (
              <S.EmojiMostUsedWrapper
                key={item.emoji}
                $state={localStorage.getItem(`${recipientId}-${item.emoji}`)}
                className="font-16-regular"
                onClick={() =>
                  handleEmojiSelect(item.emoji, recipientId, emojiFunc)
                }
              >
                <span>{item.emoji}</span>
                {item.count}
              </S.EmojiMostUsedWrapper>
            ))
          )}

          <S.DropdownButton
            type="button"
            onClick={() => setIsEmojiDropDownOpen(!isEmojiDropDownOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ic / arrow_down">
                <path
                  id="Polygon 1"
                  d="M6.00024 8.76923L12.0002 15.2308L18.0002 8.76924"
                  stroke="#101010"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="drop-down-icon"
                />
              </g>
            </svg>
          </S.DropdownButton>
          {isEmojiDropDownOpen && (
            <EmojiDropDown
              emojiList={usedEmojiList}
              emojiFunc={emojiFunc}
              recipientId={recipientId}
            />
          )}
          {isEmojiDropDownOpen && (
            <DropdownClickCancel setIsOpen={setIsEmojiDropDownOpen} />
          )}
        </S.DropdownFuncBtnContainer>
      )}
    </>
  );
};

export default MostEmojiBox;
