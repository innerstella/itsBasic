import * as S from "./WideButton.style";

/**
 * @description 넓은 버튼 컴포넌트
 * @todo 공통 컴포넌트로 정리 필요함
 * @memo /components에 이미 존재하는 버튼의 구조를 개선함
 */
const WideButton = ({ children, onClick, isActive }) => {
  return (
    <S.Container onClick={onClick} isactive={isActive.toString()}>
      <button className="btn font-18-bold" type="submit">
        {children}
      </button>
    </S.Container>
  );
};

export default WideButton;
