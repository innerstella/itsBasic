import styled from "styled-components";

const CancelButtonAction = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  border: none;
  z-index: 0;
`;

/**
 * @param isOpen - 무언가가 열린 상태
 * @param setIsOpen - 그 상태를 set 해줄 useState 훅
 * @description
 * 화면 전체를 덮는 투명한 버튼을 생성하여, 화면 아무 곳이나 클릭해도 동작을 취소할 수 있게 하는 컴포넌트
 * @returns
 */
const DropdownClickCancel = ({ isOpen, setIsOpen }) => {
  return (
    <>{isOpen && <CancelButtonAction onClick={() => setIsOpen(false)} />}</>
  );
};

export default DropdownClickCancel;
