import styles from "./HeaderFeatureBox.module.css";
import MessageRecipient from "./MessageRecipient";
import HeaderServiceBox from "./HeaderServiceBox";
const HeaderFeatureBox = () => {
  return (
    <div className={styles["main-wrapper"]}>
      <MessageRecipient />
      <HeaderServiceBox />
    </div>
  );
};

export default HeaderFeatureBox;
