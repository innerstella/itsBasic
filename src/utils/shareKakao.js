/**
 * @description - 카카오톡 공유 기능
 * @param title - 이 함수가 호출 되었을때, 보여줄 제목을 넣습니다.
 * @param description 보여줄 내용
 * @param imageUrl 보여줄 이미지
 */
export function shareKakao() {
  const API_KEY = process.env.REACT_APP_KAKAO_KEY;
  const { Kakao } = window;
  const realUrl = //현재 배포된 url로 수정
    "https://65e85a80d1619c0d99620100--kakaosharingtest.netlify.app";
  const resultUrl = window.location.href;

  Kakao.cleanup();
  Kakao.init(API_KEY);

  const showShare = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "롤링페이퍼",
        description: "작성해 보세요!",
        imageUrl: "https://cdn.rollingpaper.site/service/main/main.png",
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: "나도 작성하러 가기",
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };
  showShare();
}
