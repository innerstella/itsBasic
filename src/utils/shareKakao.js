/**
 * @description - 카카오톡 공유 기능
 * @param title - 이 함수가 호출 되었을때, 보여줄 제목을 넣습니다.
 * @param description 보여줄 내용
 * @param imageUrl 보여줄 이미지
 */
export function shareKakao() {
  const API_KEY = process.env.REACT_APP_KAKAO_KEY;
  const { Kakao } = window;
  const realUrl = "https://itsbasic-c93d6.web.app/"; //현재 배포된 url로 수정
  const resultUrl = window.location.href;

  Kakao.cleanup();
  Kakao.init(API_KEY);

  const showShare = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "너글닿기",
        description: "누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요",
        imageUrl:
          "https://raw.githubusercontent.com/innerstella/itsBasic/188af8aa214f784250f20f079282e8ce54017632/public/assets/common/kakao_share.png",
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: "나도 작성하러 가기",
          link: {
            mobileWebUrl: resultUrl,
          },
        },
      ],
    });
  };
  showShare();
}
