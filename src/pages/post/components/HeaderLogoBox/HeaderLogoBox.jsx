import * as S from "./HeaderLogoBox.style";
import { Link } from "react-router-dom";
const HeaderLogoBox = () => {
  return (
    <S.ContainerWrapper>
      <S.Container>
        <Link to="/">
          <S.Box>
            <img
              src="/assets/rolling_logo_image.svg"
              className="header-logo-image"
              alt="rolling-logo"
            />
            <p>Rolling</p>
          </S.Box>
        </Link>
      </S.Container>
    </S.ContainerWrapper>
  );
};

export default HeaderLogoBox;
