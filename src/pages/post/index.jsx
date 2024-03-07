import * as S from "./index.style";
import { useEffect, useState } from "react";
import PostPageMain from "./components/PostPageMain/PostPageMain";
import HeaderLogoBox from "./components/HeaderLogoBox/HeaderLogoBox";
import HeaderFeatureBox from "./components/HeaderFeatureBox/HeaderFeatureBox";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const [amountDataCount, setAmountDataCount] = useState();
  const [recipientData, setRecipientData] = useState({});
  const { recipientId } = useParams();

  /**
   * @description 주소창에 id를 useParams로 받아 누구에게 롤링페이퍼를 썼는지 표시해주는 컴포넌트 입니다
   * @returns
   */
  async function getRecipientData() {
    const json = await (
      await fetch(
        `https://rolling-api.vercel.app/4-2/recipients/${recipientId}/`
      )
    ).json();
    setRecipientData(json);
  }

  useEffect(() => {
    getRecipientData();
  }, [amountDataCount]);

  return (
    <S.Layout>
      <HeaderLogoBox />
      <HeaderFeatureBox recipientData={recipientData} />
      <PostPageMain
        recipientData={recipientData}
        amountDataCount={amountDataCount}
        setAmountDataCount={setAmountDataCount}
      />
    </S.Layout>
  );
};

export default PostPage;
