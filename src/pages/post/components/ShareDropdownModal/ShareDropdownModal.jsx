import * as S from "./ShareDropdownModal.style";
import { callToastNotify } from "../../../../utils/callToastNotify";
import { shareKakao } from "../../../../utils/shareKakao";
const ShareDropDownModal = ({ setIsShowModal }) => {
  return (
    <S.Box>
      <S.Button
        type="button"
        className="font-16-regular"
        onClick={() => {
          setIsShowModal((prev) => !prev);
        }}
      >
        카카오톡 공유
      </S.Button>
      <S.Button
        type="button"
        className="font-16-regular"
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
