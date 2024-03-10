import * as S from "./PokemonProfileModal.style";
import { useEffect, useState } from "react";
import PokemonModalLoading from "./PokemonModalLoading";
const PokemonProfileModal = ({
  setIsShowPokemonModal,
  setProfileInput,
  isLoading,
  pokemonDataArr,
  setIsLoading,
}) => {
  const sortData = pokemonDataArr.sort((a, b) => a.index - b.index);
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading((prev) => !prev);
    }, 3000);

    return () => {
      clearTimeout(loadingTimer);
      setIsLoading((prev) => !prev);
    };
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
              <p className='modal-title'>원하는 포켓몬을 선택하세요!!!</p>
              <img
                src='/assets/post-to/poke_ball_icon.png'
                alt='pokeball-icon'
              />
            </div>

            <div className='pokemon-image-container'>
              {sortData.map(({ index, name, imageUrl }) => {
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
