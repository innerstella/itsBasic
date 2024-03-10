import * as S from "./index.style";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostPageMain from "./components/PostPageMain/PostPageMain";
import HeaderFeatureBox from "./components/HeaderFeatureBox/HeaderFeatureBox";
import fetchData from "./components/Utils/API";

const PostPage = () => {
  const [amountDataCount, setAmountDataCount] = useState();
  const [recipientData, setRecipientData] = useState({});
  const { recipientId } = useParams();

  /**
   * @description 주소창에 id를 useParams로 받아 누구에게 롤링페이퍼를 썼는지 표시해주는 컴포넌트 입니다
   * @returns
   */
  async function getRecipientData() {
    const json = await fetchData(`recipients/${recipientId}/`);
    setRecipientData(json);
  }

  useEffect(() => {
    getRecipientData();
  }, [amountDataCount]);

  return (
    <S.Layout>
      <S.OverScrollBox />
      <S.UpperHeaderWrapper>
        <S.UpperHeaderBar show={"none"} />
        <HeaderFeatureBox recipientData={recipientData} />
      </S.UpperHeaderWrapper>

      <PostPageMain
        recipientData={recipientData}
        amountDataCount={amountDataCount}
        setAmountDataCount={setAmountDataCount}
      />
    </S.Layout>
  );
};

export default PostPage;
