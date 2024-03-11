import { useContext } from "react";
import * as S from "./Dropdown.style";
import { FontContext, RelationshipContext } from "../../PostMessagePage";

/**
 *
 * @description 드롭다운 컴포넌트
 * @param {string} type 드롭다운 타입 - select-relationship, select-font
 */
const Dropdown = ({ type }) => {
  const relationshipContextData = useContext(RelationshipContext);
  const fontContextData = useContext(FontContext);

  return (
    <S.Container>
      <select
        className="dropdown-container"
        ref={
          type === "select-relationship"
            ? relationshipContextData?.relationshipRef
            : fontContextData?.fontRef
        }
      >
        {dropdownData[type].map((item, index) => (
          <option className="font-16-regular text" key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </S.Container>
  );
};

export default Dropdown;

const Relationships = ["친구", "지인", "동료", "가족"];
const Fonts = ["Noto Sans", "Pretendard", "나눔명조", "나눔손글씨 손편지체"];

const dropdownData = {
  "select-relationship": Relationships,
  "select-font": Fonts,
};
