import * as S from "./index.style";
import { useState } from "react";
import PostPageMain from "./components/PostPageMain/PostPageMain";
import HeaderLogoBox from "./components/HeaderLogoBox/HeaderLogoBox";
import HeaderFeatureBox from "./components/HeaderFeatureBox/HeaderFeatureBox";

const PostPage = () => {
  const [amountDataCount, setAmountDataCount] = useState();
  return (
    <S.Layout>
      <HeaderLogoBox />
      <HeaderFeatureBox amountDataCount={amountDataCount} />
      <PostPageMain
        amountDataCount={amountDataCount}
        setAmountDataCount={setAmountDataCount}
      />
    </S.Layout>
  );
};

export default PostPage;
