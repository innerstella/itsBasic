import MessageRecipient from "../MessageRecipient/MessageRecipient";
import HeaderServiceBox from "../HeaderServiceBox/HeaderServiceBox";
import * as S from "./HeaderFeatureBox.style";
const HeaderFeatureBox = () => {
  return (
    <S.ContainerWrapper>
      <S.Container>
        <MessageRecipient />
        <HeaderServiceBox />
      </S.Container>
    </S.ContainerWrapper>
  );
};

export default HeaderFeatureBox;
