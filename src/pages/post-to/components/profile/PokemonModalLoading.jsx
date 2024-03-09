import * as S from "./PokemonModalLoading.style.jsx";

const PokemonModalLoading = () => {
  return (
    <S.Wrapper>
      <img src='/assets/post-to/poke_ball_icon.png' alt='pokeball-icon' />
      <p>포켓몬들을 불러오고 있습니다...</p>
    </S.Wrapper>
  );
};

export default PokemonModalLoading;
