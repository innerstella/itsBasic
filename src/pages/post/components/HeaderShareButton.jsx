import * as S from "./HeaderShareButton.style";
const HeaderShareButton = () => {
  return (
    <S.Button>
      <img
        src='/assets/header_share_button_icon.svg'
        className='share-button-image'
        alt='share-button'
      />
    </S.Button>
  );
};

export default HeaderShareButton;
