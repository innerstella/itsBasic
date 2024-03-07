import { Link, useNavigate, useParams } from "react-router-dom";
import * as S from "./DeleteButton.style";
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
        navigate("/list");
      }, 300);
    }
  }

  return (
    <S.Box>
      <S.Button className="font-16-regular" onClick={onDelete}>
        페이지 삭제하기
      </S.Button>
      <Link to={`/post/${recipientId}`}>
        <S.Button className="font-16-regular">저장하기</S.Button>
      </Link>
    </S.Box>
  );
};

export default DeleteButton;
