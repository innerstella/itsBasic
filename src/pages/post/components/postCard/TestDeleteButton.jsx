import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./TestDeleButton.module.css";
import { useState } from "react";
const BASE_URL = "https://rolling-api.vercel.app/4-2/recipients/";

const TestDeleteButton = () => {
  const toId = useParams();
  const navigate = useNavigate();
  console.log(toId); //removeMe
  const [deleteData, setDeleteData] = useState("");

  function onDelete() {
    const deleteId = BASE_URL + toId.recipientId + "/";
    if (window.confirm("페이지를 정말 삭제하시겠습니까?")) {
      fetch(deleteId, { method: "DELETE" });
      navigate("/list");
    }
  }

  const { recipientId } = useParams();
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

export default TestDeleteButton;
