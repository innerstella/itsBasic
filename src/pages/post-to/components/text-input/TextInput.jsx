import { useContext } from "react";
import { FromContext } from "../../PostMessagePage";

const TextInput = () => {
  const { fromInput, setFromInput } = useContext(FromContext);

  return (
    <div className="recipient-input-form">
      <input
        className="recipient-input font-16-regular"
        placeholder="이름을 입력해 주세요."
        value={fromInput || ""}
        onChange={(e) => setFromInput(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
