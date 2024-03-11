const BASE_URL = "https://rolling-api.vercel.app/4-2/";

/**
 * @returns
 * @desc 서버에 대한 Request 전반을 다루는 함수입니다.
 * @param query baseURL 에서 추가로 요청할 정보의 경로를 적습니다.
 * @param requestInformation method가 GET이 아닐 경우 추가로 작성하여 request의 성질을 조절합니다.
 */
const fetchData = async (query, requestInformation = undefined) => {
  try {
    const rawJson = await await fetch(BASE_URL + query, requestInformation);
    if (requestInformation && requestInformation.method === "DELETE") return;
    const json = await rawJson.json();
    return json;
  } catch (e) {
    console.error(e.message);
  }
};

export default fetchData;
