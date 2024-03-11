import { useState } from "react";
import { useParams } from "react-router";
import * as S from "./HeaderAddEmojiButton.style";
import EmojiPicker from "emoji-picker-react";
import DropdownClickCancel from "../DropdownClickCancel/DropdownClickCancel";
import handleEmojiSelect from "../Utils/handleEmojiSelect";

/**
 * @description 이모지 입력 드롭다운을 활성화 시키는 버튼 컴포넌트
 * @param emojiFunc 이모지 변동이 일어났을 때 이모지 리스트를 새로고침하는 함수
 * @returns
 */
function HeaderAddEmojiButton({ emojiFunc }) {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const { recipientId } = useParams();

  return (
    <S.EmojiToggleBtnContainer>
      <S.Button
        type='button'
        className='font-16-regular'
        onClick={() => setIsEmojiOpen(!isEmojiOpen)}
      >
        <img src='/assets/post/icons/add-24.svg' alt='' />
        추가
      </S.Button>
      <S.EmojiPickerPositioner>
        {isEmojiOpen && (
          <EmojiPicker
            emojiStyle='twitter'
            onEmojiClick={(sel) =>
              handleEmojiSelect(sel.emoji, recipientId, emojiFunc)
            }
          />
        )}
      </S.EmojiPickerPositioner>
      {isEmojiOpen && <DropdownClickCancel setIsOpen={setIsEmojiOpen} />}
    </S.EmojiToggleBtnContainer>
  );
}

export default HeaderAddEmojiButton;
