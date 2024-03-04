import * as S from "./PostCardItem.Style";
import { Link, useParams } from "react-router-dom";
export function PostCardAdd() {
  const { recipientId } = useParams();
  return (
    <S.CardPlus>
      <Link to={`/post/${recipientId}/message`}>
        <S.PlusButton>
          <img alt="플러스이미지" src={`/assets/post/plus.svg`}></img>
        </S.PlusButton>
      </Link>
    </S.CardPlus>
  );
}
