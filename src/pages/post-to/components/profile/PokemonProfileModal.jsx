import * as S from "./PokemonProfileModal.style";
import { useEffect, useState } from "react";
import PokemonModalLoading from "./PokemonModalLoading";
const PokemonProfileModal = ({ setIsShowPokemonModal, setProfileInput }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonDataArr, setPokemonDataArr] = useState([]);

  const getData = async () => {
    const speciesData = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon-species/?limit=151`)
    ).json();

    const speciesList = speciesData.results;

    for (let poke in speciesList) {
      if (Number(poke) === 30) {
        setIsLoading((prev) => !prev);
      }
      const speciesUrl = await (await fetch(speciesList[poke].url)).json();

      setPokemonDataArr((prev) => [
        ...prev,
        {
          index: Number(poke) + 1,
          name: speciesUrl.names.filter(
            (item) => item.language.name === "ko"
          )[0].name,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            Number(poke) + 1
          }.png`,
        },
      ]);
    }
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
              {pokemonDataArr.map(({ index, name, imageUrl }) => {
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
