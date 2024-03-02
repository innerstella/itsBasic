import * as S from "./index.style";

import PostPageMain from "./components/PostPageMain/PostPageMain";
import HeaderLogoBox from "./components/HeaderLogoBox/HeaderLogoBox";
import HeaderFeatureBox from "./components/HeaderFeatureBox/HeaderFeatureBox";

const PostPage = () => {
  return (
    <S.Layout>
      <HeaderLogoBox />
      <HeaderFeatureBox />
      <PostPageMain />
    </S.Layout>
  );
};

export default PostPage;
