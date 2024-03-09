import styled from "styled-components";

const TrashButtonStyle = styled.button`
  z-index: 3;
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
  border: 1px solid var(--color-grayscale-300);
  background: var(--color-white);

  &:hover {
    border-color: #9935ff;
  }
`;

function TrashButton({ onDeleteItem, id }) {
  return (
    <TrashButtonStyle type="button" id={id} onClick={onDeleteItem}>
      <img id={id} src={`/assets/post/deleted.svg`} alt="삭제휴지통"></img>
    </TrashButtonStyle>
  );
}
export default TrashButton;
