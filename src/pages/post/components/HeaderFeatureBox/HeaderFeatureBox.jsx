import MessageRecipient from "../MessageRecipient/MessageRecipient";
import HeaderToolBar from "../HeaderToolBar/HeaderToolBar";
import * as S from "./HeaderFeatureBox.style";
/**
 * @description 헤더부분에 기능적인 역활을하는 컴포넌트들을 한곳에 담은 컴포넌트입니다.
 */
const HeaderFeatureBox = ({ recipientData }) => {
  return (
    <S.ContainerWrapper>
      <S.Container>
        <MessageRecipient recipientData={recipientData} />
        <HeaderToolBar recipientData={recipientData} />
      </S.Container>
    </S.ContainerWrapper>
  );
};

export default HeaderFeatureBox;
