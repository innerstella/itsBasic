import styles from "./WriterImageBox.module.css";

const WriterImageBox = () => {
  return (
    <div>
      <div className={styles["image-flex-box"]}>
        <div className={styles["image-container"]}></div>
        <div className={styles["image-container"]}></div>
        <div className={styles["image-container"]}></div>
        <div className={styles["writer-count-number"]}>
          <p className='font-12-regular'>+6</p>
        </div>
      </div>
    </div>
  );
};

export default WriterImageBox;
