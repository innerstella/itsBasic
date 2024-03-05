import * as S from "./PostPageMain.style";
import { PostCardAdd } from "../postCard/PostCardAdd";
import { PostCardItem } from "../postCard/PostCardItem";
import { Outlet, Link, useParams } from "react-router-dom";
import styles from "../postCard/DeleButton.module.css";

const PostPageMain = () => {
  const { recipientId } = useParams();
  const currentURL = window.location.href;
  return (
    <S.Layout>
      {currentURL.includes("edit") || (
        <div className={styles["button-box"]}>
          <Link to="edit">
            <button className={styles["btn"]}>삭제하기</button>
          </Link>
        </div>
      )}

      <Outlet />
      <S.Container>
        {currentURL.includes("edit") || <PostCardAdd />}
        <PostCardItem />
      </S.Container>
    </S.Layout>
  );
};

export default PostPageMain;
