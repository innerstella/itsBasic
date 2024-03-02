import { useState } from "react";
import * as S from "./HeaderShareButton.style";
import ShareDropDownModal from "./ShareDropdownModal";
const HeaderShareButton = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleModalClick = (e) => {
    setIsShowModal((prev) => !prev);
  };
  return (
    <>
      <S.Button
        onClick={(e) => {
          console.log(e.target);
          handleModalClick();
        }}
      >
        <img
          src='/assets/header_share_button_icon.svg'
          className='share-button-image'
          alt='share-button'
        />
      </S.Button>

      {isShowModal && <ShareDropDownModal setIsShowModal={setIsShowModal} />}
    </>
  );
};

export default HeaderShareButton;
