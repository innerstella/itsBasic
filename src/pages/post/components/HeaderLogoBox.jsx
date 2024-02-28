import styles from "./HeaderLogoBox.module.css";

const HeaderLogoBox = () => {
  return (
    <div className={styles["main-wrapper"]}>
      <div className={styles["header-logo-box"]}>
        <img src='/assets/rolling_logo_image.svg' />
        <p>Rolling</p>
      </div>
    </div>
  );
};

export default HeaderLogoBox;
