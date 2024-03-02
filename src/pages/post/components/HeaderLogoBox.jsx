import * as S from "./HeaderLogoBox.style";
import { Link } from "react-router-dom";
const HeaderLogoBox = () => {
  return (
    <S.Container>
      <Link to='/gq'>
        <S.Box>
          <img
            src='/assets/rolling_logo_image.svg'
            className='header-logo-image'
            alt='rolling-logo'
          />
          <p>Rolling</p>
        </S.Box>
      </Link>
    </S.Container>
  );
};

export default HeaderLogoBox;
