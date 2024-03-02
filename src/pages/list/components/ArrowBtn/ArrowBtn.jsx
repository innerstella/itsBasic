import * as S from "./ArrowBtn.style";
/**
 *
 * @param {type} string - 'left' or 'right'
 * @param {onClick} function - 화살표 버튼 클릭 시 실행할 함수
 * @returns
 */
const ArrowBtn = ({ type, onClick }) => {
  return (
    <S.Container onClick={onClick} type={type}>
      <img src={`/assets/link/arrow-${type}.svg`} alt={type} />
    </S.Container>
  );
};

export default ArrowBtn;
