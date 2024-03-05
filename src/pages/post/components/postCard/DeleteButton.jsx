import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./DeleButton.module.css";
const BASE_URL = "https://rolling-api.vercel.app/4-2/recipients/";

const DeleteButton = () => {
  const toId = useParams();
  const navigate = useNavigate();
  const { recipientId } = useParams();

  function onDelete() {
    const deleteId = BASE_URL + toId.recipientId + "/";
    if (window.confirm("페이지를 정말 삭제하시겠습니까?")) {
      fetch(deleteId, { method: "DELETE" });
      setTimeout(function () {
        //list페이지가 재 렌더링 할 수 있는 시간을 벌기 위함
        navigate("/list");
      }, 300);
    }
  }

  return (
    <div className={styles["button-box"]}>
      <button onClick={onDelete} className={styles["btn"]}>
        페이지 삭제하기
      </button>
      <Link to={`/post/${recipientId}`}>
        <button className={styles["btn"]}>저장하기</button>
      </Link>
    </div>
  );
};

export default DeleteButton;
