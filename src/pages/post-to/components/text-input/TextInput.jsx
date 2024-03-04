import { useContext, useState } from "react";
import * as S from "./TextInput.style";

import { FromContext } from "../../PostMessagePage";

const TextInput = () => {
  const { fromInput, setFromInput } = useContext(FromContext);
  const [isError, setIsError] = useState(false);

  const handleBlur = () => {
    if (fromInput === "") {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <S.Container error={isError}>
      <div className="recipient-input-form">
        <input
          className="recipient-input font-16-regular"
          placeholder="이름을 입력해 주세요."
          value={fromInput || ""}
          onBlur={handleBlur}
          onChange={(e) => setFromInput(e.target.value)}
        />
      </div>
      <p className="font-16-regular warning">* 값을 입력해 주세요.</p>
    </S.Container>
  );
};

export default TextInput;
