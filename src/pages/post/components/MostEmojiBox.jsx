import * as S from "./MostEmojiBox.style";
const MostEmojiBox = () => {
  return (
    <S.Container>
      <S.Box>
        <p className='most-emoji'>👍</p>
        <p className='font-16-regular'>24</p>
      </S.Box>
      <S.Box>
        <p className='most-emoji'>😍</p>
        <p className='font-16-regular'>16</p>
      </S.Box>
      <S.Box>
        <p className='most-emoji'>🎉</p>
        <p className='font-16-regular'>10</p>
      </S.Box>
      <S.Button>
        <img
          src='/assets/emoji_picker_dropdown_icon.svg'
          className='emoji-drop-down-image'
          alt='emoji-dropdown-button'
        />
      </S.Button>
    </S.Container>
  );
};

export default MostEmojiBox;
