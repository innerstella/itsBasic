import styled from "styled-components";

const userStateColors = {
  가족: {
    background: "var(--color-green-100)",
    color: "var(--color-green-500)",
  },
  동료: {
    background: "var(--color-purple-100)",
    color: "var(--color-purple-500)",
  },
  지인: {
    background: "var(--color-orange-100)",
    color: "var(--color-orange-500)",
  },
  친구: { background: "var(--color-blue-100)", color: "var(--color-blue-500)" },
};
const Relationship = styled.div`
  display: flex;
  padding: 0px 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 4px;
  background: ${({ $state }) => userStateColors[$state].background};
  color: ${({ $state }) => userStateColors[$state].color};
`;
export default Relationship;
