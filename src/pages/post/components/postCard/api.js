/**
 *
 * @returns
 * @desc recipients 전체 데이터를 가져오는 함수입니다 파라미터로 useParams를 받아 recipientId에 맞는 메세지 전체를 불러옵니다
 *
 */

const BASE_URL = "https://rolling-api.vercel.app/4-2";

export const getRecipientMessages = async (url) => {
  const json = await (await fetch(url)).json();
  return json;
};

export default getRecipientMessages;
