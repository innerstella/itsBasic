import styles from "./HeaderAddEmojiButton.module.css";

const HeaderAddEmojiButton = () => {
  return (
    <button className={styles["add-emoji-button"]}>
      <img src='/assets/add_emoji_button_icon.svg' />
      <p className='font-16-regular'>추가</p>
    </button>
  );
};

export default HeaderAddEmojiButton;
