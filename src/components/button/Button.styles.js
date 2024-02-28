import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled(Link)`
  display: flex;
  width: 28rem;
  height: 5.6rem;
  justify-content: center;
  align-items: center;
  margin-top: 4.8rem;
  cursor: pointer;

  border-radius: 1.2rem;
  background: var(--color-purple-600);
  color: var(--color-white);
  text-align: center;

  /* Font/18 Bold */
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.8rem; /* 155.556% */
  letter-spacing: -0.018rem;

  @media screen and (max-width: 1248px) {
    width: 100%;
  }
`;

export default ButtonStyle;
