import * as S from "./ShareDropdownModal.style";
import { callToastNotify } from "../../../../utils/callToastNotify";
import { shareKakao } from "../../../../utils/shareKakao";
import DropdownClickCancel from "../DropdownClickCancel/DropdownClickCancel";
const ShareDropDownModal = ({ setIsShowModal }) => {
  return (
    <S.Box>
      <S.Button
        type='button'
        className='font-16-regular'
        onClick={() => {
          setIsShowModal((prev) => !prev);
          shareKakao(
            "롤링페이퍼",
            "너는 이런 사람이야!",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfa47rtvMkUG9NbLgQGeEiXa4u4pzzj0YEPg&usqp=CAU"
          );
        }}
      >
        카카오톡 공유
      </S.Button>
      <S.Button
        type='button'
        className='font-16-regular'
        onClick={() => {
          setIsShowModal((prev) => !prev);
          callToastNotify("URL이 복사 되었습니다.");
          window.navigator.clipboard.writeText(window.location.href);
        }}
      >
        URL 공유
      </S.Button>
    </S.Box>
  );
};

export default ShareDropDownModal;
