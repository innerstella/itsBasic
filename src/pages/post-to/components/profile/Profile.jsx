import { useContext, useEffect, useState } from "react";
import * as S from "./Profile.style";
import { ProfileContext } from "../../PostMessagePage";
<<<<<<< HEAD:src/pages/post-to/components/profile/Profile.jsx
import PokemonProfileModal from "./PokemonProfileModal";
=======
import SkeletonUI from "../post-to-card/SkeletonUI";

>>>>>>> 068da0b (💄 message 작성 페이지 스켈레톤 적용):src/pages/post-to/components/profile/Proifle.jsx
/**
 *
 * @description Profile 컴포넌트는 프로필 이미지를 선택하는 컴포넌트입니다.
 */
const Profile = () => {
  const { profileRef } = useContext(ProfileContext);
  const [imageList, setImageList] = useState();
  const [profileInput, setProfileInput] = useState();
  const [isShowPokemonModal, setIsShowPokemonModal] = useState(false);

  const [imageLoaded, setImageLoaded] = useState([]);

  const getProfileImageList = async () => {
    fetch("https://rolling-api.vercel.app/profile-images/")
      .then((res) => res.json())
      .then((data) => {
        setImageList(data?.imageUrls);
        setImageLoaded(new Array(data?.imageUrls.length - 1).fill(false));
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
      <img
        className="selected-profile"
        src={profileInput}
        alt="프로필"
        ref={profileRef}
      />
      <div className="select-profile">
        <span className="text font-16-regular">
          프로필 이미지를 선택해주세요!
        </span>
        <button
          className="pokemon-profile-button"
          onClick={() => {
            setIsShowPokemonModal((prev) => !prev);
          }}
        >
          포켓몬 이미지 선택하기
        </button>
        <div className="profile-container">
          {imageList?.slice(1).map((imgUrl, idx) => {
            return (
<<<<<<< HEAD:src/pages/post-to/components/profile/Profile.jsx
              <img
                key={idx}
                className="profile"
                src={imgUrl}
                alt="프로필 이미지"
                onClick={() => setProfileInput(imgUrl)}
              />
=======
              <div className="profile-image-container" key={idx}>
                <img
                  className="profile"
                  src={imgUrl}
                  alt="프로필 이미지"
                  onLoad={() =>
                    setImageLoaded((prevImageLoaded) =>
                      prevImageLoaded.map((v, i) => (i === idx ? true : v))
                    )
                  }
                  onError={() =>
                    setImageLoaded((prevImageLoaded) =>
                      prevImageLoaded.map((v, i) => (i === idx ? true : v))
                    )
                  }
                  onClick={() => setProfileInput(imgUrl)}
                />
                {!imageLoaded[idx] && (
                  <SkeletonUI
                    width="5.6rem"
                    height="5.6rem"
                    mWidth="100%"
                    mHeight="100%"
                    radius="100%"
                  />
                )}
              </div>
>>>>>>> 068da0b (💄 message 작성 페이지 스켈레톤 적용):src/pages/post-to/components/profile/Proifle.jsx
            );
          })}
        </div>
      </div>
    </S.Container>
  );
};

export default Profile;
