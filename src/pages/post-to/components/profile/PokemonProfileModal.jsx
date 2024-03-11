import * as S from "./PokemonProfileModal.style";
import { useEffect, useState } from "react";
import PokemonModalLoading from "./PokemonModalLoading";
import { useTheme } from "../../../../context/themeProvider";
const PokemonProfileModal = ({ setIsShowPokemonModal, setProfileInput }) => {
  const [pokemonDataArr, setPokemonDataArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortData, setSortData] = useState([]);
  const [ThemeMode, toggleTheme] = useTheme();

  
  const getData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/?limit=151`
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const jsonData = await response.json();
      const pokemonData = await jsonData.results;

      pokemonData.forEach(async (data, index) => {
        const dataList = await (await fetch(data.url)).json();

        setPokemonDataArr((prev) => [
          ...prev,
          {
            index: Number(index) + 1,
            name: dataList.names.filter(
              (item) => item.language.name === "ko"
            )[0].name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              Number(index) + 1
            }.png`,
          },
        ]);
      });

      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.Wrapper>
      <S.Box>
        {isLoading && <PokemonModalLoading />}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading && pokemonDataArr.length > 0 && (
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
              {pokemonDataArr
                .sort((a, b) => a.index - b.index)
                .map(({ index, name, imageUrl }) => {
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
        )}
      </S.Box>
    </S.Wrapper>
  );
};

export default PokemonProfileModal;
