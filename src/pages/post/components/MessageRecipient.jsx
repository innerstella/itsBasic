import styles from "./MessageRecipient.module.css";

const MessageRecipient = () => {
  return (
    <div className={styles["recipient-wrapper"]}>
      <p className='font-28-bold'>To. Ashley Kim</p>
    </div>
  );
};

export default MessageRecipient;
