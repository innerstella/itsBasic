import { useEffect, useState } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import * as S from "./PostPageMain.style";
import styles from "../postCard/DeleButton.module.css";
import { PostCardAdd } from "../postCard/PostCardAdd";
import { PostCardItem } from "../postCard/PostCardItem";
import getRecipientMessages from "../postCard/api";

const PostPageMain = ({ amountDataCount, setAmountDataCount }) => {
  const { recipientId } = useParams();
  const currentURL = window.location.href;
  const [currentBackground, setCurrentBackground] = useState("beige");
  const handlePostBackgournd = async () => {
    const { backgroundColor, backgroundImageURL } = await getRecipientMessages(
      `https://rolling-api.vercel.app/4-2/recipients/${recipientId}/`
    );
    setCurrentBackground(backgroundImageURL || backgroundColor);
  };

  useEffect(() => {
    handlePostBackgournd();
  }, []);

  return (
    <S.Layout>
      <S.PostBackground background={currentBackground} />
      {currentURL.includes("edit") || (
        <Link to="edit">
          <div className={styles["button-box"]}>
            <button className={styles["btn"]}>삭제하기</button>
          </div>
        </Link>
      )}

      <Outlet />
      <S.Container>
        {currentURL.includes("edit") || <PostCardAdd />}
        <PostCardItem
          amountDataCount={amountDataCount}
          setAmountDataCount={setAmountDataCount}
        />
      </S.Container>
    </S.Layout>
  );
};

export default PostPageMain;
