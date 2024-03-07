import MessageRecipient from "../MessageRecipient/MessageRecipient";
import HeaderToolBar from "../HeaderToolBar/HeaderToolBar";
import * as S from "./HeaderFeatureBox.style";
const HeaderFeatureBox = ({ amountDataCount }) => {
  return (
    <S.ContainerWrapper>
      <S.Container>
        <MessageRecipient />
        <HeaderToolBar amountDataCount={amountDataCount} />
      </S.Container>
    </S.ContainerWrapper>
  );
};

export default HeaderFeatureBox;
