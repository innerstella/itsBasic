import styled from "styled-components";

const TrashButtonStyle = styled.button`
  cursor: pointer;
  position: absolute;
  right: 2.8rem;
  top: 2.8rem;
  display: inline-flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
`;

function TrashButton() {
  return (
    <TrashButtonStyle>
      <img src={`/assets/post/deleted.svg`} alt="삭제휴지통"></img>
    </TrashButtonStyle>
  );
}
export default TrashButton;
