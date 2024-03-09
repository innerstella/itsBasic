import * as S from "./PokemonProfileModal.style";
import { useEffect, useState } from "react";
import PokemonModalLoading from "./PokemonModalLoading";
const PokemonProfileModal = ({ setIsShowPokemonModal, setProfileInput }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const allPokemonData = [];
  const getData = async () => {
    for (let i = 1; i <= 151; i++) {
      const pokemonData = await (
        await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
      ).json();

      const detailData = await (
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      ).json();

      const koreanName = pokemonData.names.filter(
        (item) => item.language.name === "ko"
      )[0].name;

      const pokemonImageUrl = detailData.sprites.front_default;

      const index = detailData.game_indices.filter(
        (item) => item.version.name === "gold"
      )[0]["game_index"];

      allPokemonData.push({
        index: index,
        name: koreanName,
        imageUrl: pokemonImageUrl,
      });
    }
    setPokemonData(allPokemonData);
    setIsLoading((prev) => !prev);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.Wrapper>
      <S.Box>
        {isLoading === false ? (
          <>
            <div className='title-box'>
              <img
                src='/assets/post-to/poke_ball_icon.png'
                alt='pokeball-icon'
              />
              <p className='modal-title'>원하는 포켓몬을 선택하세요!!</p>
              <img
                src='/assets/post-to/poke_ball_icon.png'
                alt='pokeball-icon'
              />
            </div>

            <div className='pokemon-image-container'>
              {pokemonData.map(({ index, name, imageUrl }) => {
                return (
                  <div
                    className='pokemon-detail-box'
                    onClick={() => {
                      setProfileInput(imageUrl);
                      setIsShowPokemonModal((prev) => !prev);
                    }}
                    key={index}
                  >
                    <img src={imageUrl} alt={name} />
                    <p>{name}</p>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <PokemonModalLoading />
        )}
      </S.Box>
    </S.Wrapper>
  );
};

export default PokemonProfileModal;
