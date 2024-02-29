import * as S from "./PostPageMain.style";
import { PostCardAdd } from "./postCard/PostCardAdd";
import { PostCardItem } from "./postCard/PostCardItem";

const PostPageMain = () => {
  return (
  
     <S.Layout>
      <S.Container>
      <PostCardAdd />
        <PostCardItem />
    </S.Container>
    </S.Layout    
    
   
  );
};

export default PostPageMain;