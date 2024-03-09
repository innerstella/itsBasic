import { Link, useNavigate, useParams } from "react-router-dom";
import * as S from "./DeleteButton.style";
import fetchData from "../Utils/API";

const DeleteButton = () => {
  const navigate = useNavigate();
  const { recipientId } = useParams();

  async function onDelete() {
    const deleteId = `recipients/${recipientId}/`;
    if (window.confirm("페이지를 정말 삭제하시겠습니까?")) {
      await fetchData(deleteId, { method: "DELETE" });
      navigate("/list");
    }
  }

  return (
    <S.Box>
      <S.Button type="button" onClick={onDelete}>
        페이지 삭제하기
      </S.Button>
      <Link to={`/post/${recipientId}`}>
        <S.Button>저장하기</S.Button>
      </Link>
    </S.Box>
  );
};

export default DeleteButton;
