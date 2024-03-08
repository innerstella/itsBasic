import * as S from "./PostCardItem.style";
import { Link, useParams } from "react-router-dom";
export function PostCardAdd() {
  const { recipientId } = useParams();
  return (
    <Link to={`/post/${recipientId}/message`}>
      <S.CardPlus>
        <S.PlusButton>
          <img alt="플러스이미지" src={`/assets/post/plus.svg`}></img>
        </S.PlusButton>
      </S.CardPlus>
    </Link>
  );
}
