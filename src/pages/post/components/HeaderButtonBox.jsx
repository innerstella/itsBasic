import styles from "./HeaderButttonBox.module.css";
import HeaderAddEmojiButton from "./HeaderAddEmojiButton";
import HeaderShareButton from "./HeaderShareButton";
const HeaderButtonBox = () => {
  return (
    <div className={styles["button-box-wrapper"]}>
      <HeaderAddEmojiButton />
      <HeaderShareButton />
    </div>
  );
};

export default HeaderButtonBox;
