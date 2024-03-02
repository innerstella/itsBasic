import MessageRecipient from "./MessageRecipient";
import HeaderServiceBox from "./HeaderServiceBox";
import * as S from "./HeaderFeatureBox.style";
const HeaderFeatureBox = () => {
  return (
    <S.Contaner>
      <MessageRecipient />
      <HeaderServiceBox />
    </S.Contaner>
  );
};

export default HeaderFeatureBox;
