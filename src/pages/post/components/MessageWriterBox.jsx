import WriterImageBox from "./WriterImageBox";
import styles from "./MessageWriterBox.module.css";
const MessageWriterBox = () => {
  return (
    <div className={styles["main-wrapper"]}>
      <WriterImageBox />
      <div className={styles["writer-counter-box"]}>
        <p className='font-18-regular'>
          <span className='font-18-bold'>23</span>명이 작성했어요!
        </p>
      </div>
    </div>
  );
};

export default MessageWriterBox;
