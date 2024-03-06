import MessageRecipient from "../MessageRecipient/MessageRecipient";
import HeaderServiceBox from "../HeaderServiceBox/HeaderServiceBox";
import * as S from "./HeaderFeatureBox.style";
const HeaderFeatureBox = ({ amountDataCount }) => {
  return (
    <S.ContainerWrapper>
      <S.Container>
        <MessageRecipient />
        <HeaderServiceBox amountDataCount={amountDataCount} />
      </S.Container>
    </S.ContainerWrapper>
  );
};

export default HeaderFeatureBox;
