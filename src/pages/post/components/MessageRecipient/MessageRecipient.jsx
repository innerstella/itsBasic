import { useEffect, useState } from "react";
import * as S from "./MessageRecipient.style";
import SkeletonUI from "../../../../components/skeleton-ui/SkeletonUI";

const MessageRecipient = ({ recipientData }) => {
  const [recipientName, setRecipientName] = useState("");

  useEffect(() => {
    setRecipientName(recipientData.name);
  }, [recipientData.name]);

  return (
    <S.Container>
      <p className="font-28-bold">To. {recipientName}</p>
      {!recipientName && (
        <SkeletonUI
          className="skeleton-name"
          width="8rem"
          height="4.2rem"
          mWidth="5rem"
          mHeight="2.8rem"
          radius="0.5rem"
        />
      )}
    </S.Container>
  );
};

export default MessageRecipient;
