import { Link, useParams } from "react-router-dom";
import styles from "./TestDeleButton.module.css";
const TestDeleteButton = () => {
  const { recipientId } = useParams();
  return (
    <div className={styles["button-box"]}>
      <button className={styles["btn"]}>페이지 삭제하기</button>
      <Link to={`/post/${recipientId}`}>
        <button className={styles["btn"]}>저장하기</button>
      </Link>
    </div>
  );
};

export default TestDeleteButton;
