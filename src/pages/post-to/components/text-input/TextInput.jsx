import { useContext, useState } from "react";
import * as S from "./TextInput.style";

import { FromContext } from "../../PostMessagePage";

const TextInput = () => {
  const { fromRef } = useContext(FromContext);
  const [isError, setIsError] = useState(false);

  const handleBlur = () => {
    if (fromRef.current.value === "") {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <S.Container error={isError.toString()}>
      <div className="recipient-input-form">
        <input
          className="recipient-input font-16-regular"
          placeholder="이름을 입력해 주세요."
          onBlur={handleBlur}
          ref={fromRef}
        />
      </div>
      <p className="font-16-regular warning">* 값을 입력해 주세요.</p>
    </S.Container>
  );
};

export default TextInput;
