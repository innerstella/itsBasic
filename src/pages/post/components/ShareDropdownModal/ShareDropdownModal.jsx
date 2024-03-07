import * as S from "./ShareDropdownModal.style";
import { callToastNotify } from "../../../../utils/callToastNotify";
import { shareKakao } from "../Utils/shareKakao";
const ShareDropDownModal = ({ setIsShowModal }) => {
  return (
    <S.Box>
      <S.Button
        onClick={() => {
          setIsShowModal((prev) => !prev);
          shareKakao(
            "롤링페이퍼",
            "작성해 보세요!",
            "https://cdn.rollingpaper.site/service/main/main.png"
          );
        }}
      >
        카카오톡 공유
      </S.Button>
      <S.Button
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
