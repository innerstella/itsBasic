import * as S from "./HeaderLogoBox.style";
import { Link } from "react-router-dom";
const HeaderLogoBox = () => {
  /**
   * @description Post 페이지 맨위부분 로고가 표시되는 컴포넌트 입니다.
   */
  return (
    <S.ContainerWrapper>
      <S.Container>
        <Link to='/'>
          <S.Box>
            <img
              src='/assets/post/rolling_logo_image.svg'
              className='header-logo-image'
              alt='rolling-logo'
            />
            <p>Rolling</p>
          </S.Box>
        </Link>
      </S.Container>
    </S.ContainerWrapper>
  );
};

export default HeaderLogoBox;
