import * as S from "./HeaderAddEmojiButton.style";

const HeaderAddEmojiButton = () => {
  return (
    <S.Button>
      <img
        src='/assets/add_emoji_button_icon.svg'
        className='add-emoji-button-icon'
        alt='add-emoji-button-icon'
      />
      <p className='font-16-regular'>추가</p>
    </S.Button>
  );
};

export default HeaderAddEmojiButton;
