import * as S from "./Dropdown.style";

/**
 *
 * @description 드롭다운 컴포넌트
 * @param {string} type 드롭다운 타입 - select-reltaionship, select-font
 */
const Dropdown = ({ type }) => {
  return (
    <S.Container>
      <select className="dropdown-container">
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
