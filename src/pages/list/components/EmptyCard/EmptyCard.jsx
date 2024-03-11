import styled from "styled-components";

const EmptyCard = () => {
  return (
    <EmptyCardList>
      <h3 className="font-24-bold">
        아직 작성된
        <br />
        롤링페이퍼가 없어요
      </h3>
      <div className="svg-container">
        <img className="svg" src="/assets/link/empty.svg" alt="empty" />
      </div>
    </EmptyCardList>
  );
};

export default EmptyCard;

const EmptyCardList = styled.div`
  width: 27.5rem;
  height: 26rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.4rem;

  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: var(--color-surface);
  color: var(--color-black);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  .svg-container {
    display: flex;
    justify-content: flex-end;
    .svg {
      width: 10rem;
      height: 10rem;
    }
  }
`;
