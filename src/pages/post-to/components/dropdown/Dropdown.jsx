import { useContext, useEffect, useState } from "react";
import * as S from "./Dropdown.style";
import { FontContext, RelationshipContext } from "../../PostMessagePage";

/**
 *
 * @description 드롭다운 컴포넌트
 * @param {string} type 드롭다운 타입 - select-reltaionship, select-font
 * @todo 폰트 종류 논의해서 정하기
 */
const Dropdown = ({ type }) => {
  const relationshipContextData = useContext(RelationshipContext);
  const fontContextData = useContext(FontContext);
  const [selectedVal, setSelectedVal] = useState("");

  const changeHandler = (e) => {
    setSelectedVal(e.target.value);

    if (type === "select-reltaionship") {
      relationshipContextData.setRelationshipInput(e.target.value);
    } else if (type === "select-font") {
      fontContextData.setFontInput(e.target.value);
    }
  };

  // 초기값 설정
  useEffect(() => {
    if (type === "select-reltaionship") {
      setSelectedVal(relationshipContextData.relationshipInput);
    } else if (type === "select-font") {
      setSelectedVal(fontContextData.fontInput);
    }
  }, []);

  return (
    <S.Container>
      <select
        className="dropdown-container"
        onChange={(e) => changeHandler(e)}
        value={selectedVal}
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

const Reltaionships = ["친구", "지인", "동료", "가족"];
const Fonts = ["Noto Sans"];

const dropdownData = {
  "select-reltaionship": Reltaionships,
  "select-font": Fonts,
};
