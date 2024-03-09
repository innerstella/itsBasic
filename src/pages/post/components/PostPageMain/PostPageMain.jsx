import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import * as S from "./PostPageMain.style";
import * as ST from "../postCard/DeleteButton.style";
import { PostCardAdd } from "../postCard/PostCardAdd";
import { PostCardItem } from "../postCard/PostCardItem";

const PostPageMain = ({
  recipientData,
  amountDataCount,
  setAmountDataCount,
}) => {
  const [currentBackground, setCurrentBackground] = useState("beige");
  const currentURL = window.location.href;

  useEffect(() => {
    const { backgroundColor, backgroundImageURL } = recipientData;
    setCurrentBackground(backgroundImageURL || backgroundColor);
  }, [recipientData]);

  return (
    <S.Layout>
      <S.PostBackground $background={currentBackground} />

      {currentURL.includes("edit") || (
        <ST.Box>
          <ST.StyledLink to="edit">삭제하기</ST.StyledLink>
        </ST.Box>
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
