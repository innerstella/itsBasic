import * as S from "./HeaderLogoBox.style";
const HeaderLogoBox = () => {
  return (
    <S.Container>
      <S.Box>
        <img
          src='/assets/rolling_logo_image.svg'
          className='header-logo-image'
          alt='rolling-logo'
        />
        <p>Rolling</p>
      </S.Box>
    </S.Container>
  );
};

export default HeaderLogoBox;
