import styled from "styled-components";

const CardStyle = styled.div`
  display: flex;
  width: 16.8rem;
  height: 16.8rem;
  background: var(${({ color }) => color});
  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

export default CardStyle;
