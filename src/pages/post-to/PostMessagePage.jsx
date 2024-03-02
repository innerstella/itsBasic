import NavigationBar from "../../components/navigationBar/NavigationBar";
import * as S from "./PostMessagePage.style";

/**
 *
 * @description 롤링 페이퍼에 메시지 보내기 페이지 (/post/{id}/message)
 */
const PostMessagePage = () => {
  return (
    <S.Container>
      <NavigationBar />
      <h1>PostMessagePage</h1>
    </S.Container>
  );
};

export default PostMessagePage;
