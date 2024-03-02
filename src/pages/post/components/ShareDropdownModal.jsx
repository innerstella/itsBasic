import * as S from "./ShareDropdownModal.style";

const ShareDropDownModal = ({ setIsShowModal }) => {
  return (
    <S.Box>
      <S.Button
        onClick={() => {
          setIsShowModal((prev) => !prev);
        }}
      >
        카카오톡 공유
      </S.Button>
      <S.Button
        onClick={() => {
          setIsShowModal((prev) => !prev);
          window.navigator.clipboard.writeText(window.location.href);
        }}
      >
        URL 공유
      </S.Button>
    </S.Box>
  );
};

export default ShareDropDownModal;
