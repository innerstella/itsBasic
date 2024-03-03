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
      <Link to="edit">
        {currentURL.includes("edit") || (
          <div className={styles["button-box"]}>
            <button className={styles["btn"]}>삭제하기</button>
          </div>
        )}
      </Link>
      <Outlet />
      <S.Container>
        <PostCardAdd />
        <PostCardItem />
      </S.Container>
    </S.Layout>
  );
};

export default PostPageMain;
