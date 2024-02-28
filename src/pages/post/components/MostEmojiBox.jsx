import styles from "./MostEmojiBox.module.css";
import EmojiPicker from "emoji-picker-react";
const MostEmojiBox = () => {
  return (
    <>
      <div className={styles["main-wrapper"]}>
        <div className={styles["most-emoji-box"]}>
          <p className={styles["most-emoji"]}>👍</p>
          <p className='font-16-regular'>24</p>
        </div>
        <div className={styles["most-emoji-box"]}>
          <p className={styles["most-emoji"]}>😍</p>
          <p className='font-16-regular'>16</p>
        </div>
        <div className={styles["most-emoji-box"]}>
          <p className={styles["most-emoji"]}>🎉</p>
          <p className='font-16-regular'>10</p>
        </div>
        <button className={styles["emoji-picker-dropdown-button"]}>
          <img src='/assets/emoji_picker_dropdown_icon.svg' />
        </button>
      </div>
    </>
  );
};

export default MostEmojiBox;
