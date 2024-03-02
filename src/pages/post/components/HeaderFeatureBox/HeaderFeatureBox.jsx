import MessageRecipient from "../MessageRecipient/MessageRecipient";
import HeaderServiceBox from "../HeaderServiceBox/HeaderServiceBox";
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
