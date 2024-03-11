import { useContext, useEffect, useState } from "react";
import * as S from "./Profile.style";
import { ProfileContext } from "../../PostMessagePage";
import PokemonProfileModal from "./PokemonProfileModal";
/**
 *
 * @description Profile 컴포넌트는 프로필 이미지를 선택하는 컴포넌트입니다.
 */
const Profile = () => {
  const { profileInput, setProfileInput } = useContext(ProfileContext);
  const [imageList, setImageList] = useState();
  const [isShowPokemonModal, setIsShowPokemonModal] = useState(false);

  const getProfileImageList = async () => {
    fetch("https://rolling-api.vercel.app/profile-images/")
      .then((res) => res.json())
      .then((data) => {
        setImageList(data?.imageUrls);
        setProfileInput(data?.imageUrls[0]); // default
      });
  };

  useEffect(() => {
    getProfileImageList();
  }, []);

  return (
    <S.Container>
      {isShowPokemonModal && (
        <PokemonProfileModal
          setIsShowPokemonModal={setIsShowPokemonModal}
          setProfileInput={setProfileInput}
        />
      )}
      <img className='selected-profile' src={profileInput} alt='프로필' />
      <div className='select-profile'>
        <p className='text font-16-regular'>프로필 이미지를 선택해주세요!</p>
        <button
          className='pokemon-profile-button'
          onClick={() => {
            setIsShowPokemonModal((prev) => !prev);
          }}
        >
          포켓몬 이미지 선택하기
        </button>
        <div className='profile-container'>
          {imageList?.slice(1).map((imgUrl, idx) => {
            return (
              <img
                key={idx}
                className='profile'
                src={imgUrl}
                alt='프로필 이미지'
                onClick={() => setProfileInput(imgUrl)}
              />
            );
          })}
        </div>
      </div>
    </S.Container>
  );
};

export default Profile;
