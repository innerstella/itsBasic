import styles from "./HeaderShareButton.module.css";

const HeaderShareButton = () => {
  return (
    <button className={styles["share-button"]}>
      <img src='/assets/header_share_button_icon.svg' />
    </button>
  );
};

export default HeaderShareButton;
