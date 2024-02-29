// const BASE_URL = "https://rolling-api.vercel.app/4-2";

/**
 * 
 * @returns 
 * @desc recipients 전체 데이터를 가져오는 함수입니다
 * 
 */
export async function getUserPaper() {
  const response = await fetch(
    "https://rolling-api.vercel.app/4-2/recipients/" 
  ); //BASE_URL이후 id받아오는 로직입력
  const body = await response.json();
  console.log(body);
  return body;
}
