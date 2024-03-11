import styled from "styled-components";

const sizes = {
  small: {
    padding: "7px 16px",
    border: "1px solid transparent",
    "font-size": "1.6rem",
    "font-weight": "400",
    "line-height": "2.6rem",
    "letter-spacing": "-0.016rem",
  },
};

/**
 * @description 길이 조정은 되어있지 않으므로, const button = styled(PrimaryButton)``을 이용하여 추가로 스타일링 필요
 * @description 미지정시 56사이즈의 버튼으로 표시되며, 40사이즈는 size프롭으로 small을 지정해 줘야 함
 */
const PrimaryButton = styled.button`
  background-color: ${(prop) =>
    prop.disabled ? "var(--color-grayscale-300)" : "var(--color-purple-600)"};
  cursor: ${(prop) => (prop.disabled ? "default" : "pointer")};

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 6px;

  color: var(--color-white);
  text-align: center;
  font-family: Pretendard;
  font-style: normal;

  border: ${(prop) =>
    prop.size ? sizes[prop.size].border : "2px solid transparent"};

  padding: ${(prop) => (prop.size ? sizes[prop.size].padding : "14px 24px")};

  font-size: ${(prop) =>
    prop.size ? sizes[prop.size]["font-size"] : "1.8rem"};

  font-weight: ${(prop) =>
    prop.size ? sizes[prop.size]["font-weight"] : "700"};

  line-height: ${(prop) =>
    prop.size ? sizes[prop.size]["line-height"] : "2.8rem"};

  letter-spacing: ${(prop) =>
    prop.size ? sizes[prop.size]["letter-spacing"] : "-0.018rem"};

  &:hover {
    background-color: ${(prop) => {
      if (!prop.disabled) {
        return "var(--color-purple-700)";
      }
    }};
  }

  &:active {
    background-color: ${(prop) => {
      if (!prop.disabled) {
        return "var(--color-purple-800)";
      }
    }};
  }

  &:focus {
    border: ${(prop) => {
      if (!prop.disabled) {
        return "1px solid var(--color-purple-900)";
      }
    }};
    background-color: ${(prop) => {
      if (!prop.disabled) {
        return "var(--color-purple-800)";
      }
    }};
  }
`;

export default PrimaryButton;
