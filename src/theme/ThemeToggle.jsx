import React from "react";
import styled from "styled-components";
/**
 *
 * @param1  {콜백함수}toggle
 * @param2  {String}mode
 * @returns
 */
function ThemeToggle({ toggle, mode }) {
  return (
    <ToggleWrapper onClick={toggle} mode={mode}>
      {mode === "dark" ? (
        <img
          className="icon"
          src="/assets/common/sun.svg"
          alt="다크모드로 전환하기"
        />
      ) : (
        <img
          className="icon"
          src="/assets/common/moon.svg"
          alt="다크모드로 전환하기"
        />
      )}
    </ToggleWrapper>
  );
}

export default ThemeToggle;

const ToggleWrapper = styled.div`
  cursor: pointer;
  background: ${(props) => props.theme.backgroundColor};
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 96px; */
  /* height: 48px; */
  /* border-radius: 30px; */
  /* box-shadow: ${(props) =>
    props.mode === "dark"
      ? "0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)"
      : "0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)"}; */

  .icon {
    width: 3rem;
  }
`;
