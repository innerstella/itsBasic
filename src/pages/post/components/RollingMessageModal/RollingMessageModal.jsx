import * as S from "./RollingMessageModal.style.jsx";
import { StyleSheetManager } from "styled-components";
import { formatDate } from "../../../../utils/formatDate.js";
import Relationship from "../postCard/CardRelationship.jsx";
import PrimaryButton from "../../../../components/PrimaryButton.jsx";

/**
 * @description 메시지를 클릭했을 때, 데이터를 받아와 모달을 띄워주는 컴포넌트
 * @param rollingMessageData - 선택한 메시지의 데이터 객체
 * @param setIsOpen - 확인 버튼을 클릭하거나 닫는 행동 등이 발생했을 때, 설정할 state
 */
const RollingMessageModal = ({ rollingMessageData, setIsOpen }) => {
  const { sender, profileImageURL, relationship, createdAt, content, font } =
    rollingMessageData;

  return (
    <S.RollingMessageModalBackground>
      <S.RollingMessageModalWrapper className="font-14-regular">
        <header>
          <section>
            <StyleSheetManager shouldForwardProp={() => true}>
              <S.PostProfileImg image={profileImageURL} />
            </StyleSheetManager>
            <section>
              <S.RollingMessageSender className="font-20-regular">
                From.<span>{sender}</span>
              </S.RollingMessageSender>
              <Relationship $state={relationship}>{relationship}</Relationship>
            </section>
          </section>
          <p>{formatDate(createdAt)}</p>
        </header>
        <S.RollingMessageModalSeparator />
        <S.ModalMessageTextArea
          disabled
          className="font-18-regular"
          fontFamily={font}
          defaultValue={content}
        />
        <S.RollingPrimaryButton size={"small"} onClick={() => setIsOpen(false)}>
          확인
        </S.RollingPrimaryButton>
      </S.RollingMessageModalWrapper>
    </S.RollingMessageModalBackground>
  );
};

export default RollingMessageModal;
