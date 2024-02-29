// const BASE_URL = "https://rolling-api.vercel.app/4-2";

export async function getUserPaper() {
  const response = await fetch(
    "https://rolling-api.vercel.app/4-2/recipients/1024/messages/" //fixme: id값을 받아와서 1024를 대상의id값으로 변경
  ); //BASE_URL이후 id받아오는 로직입력
  const body = await response.json();
  return body;
}
