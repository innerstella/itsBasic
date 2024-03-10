/**
 * @description - 카카오톡 공유 기능
 * @param title - 이 함수가 호출 되었을때, 보여줄 제목을 넣습니다.
 * @param description 보여줄 내용
 * @param imageUrl 보여줄 이미지
 */
export function shareKakao(title, description, imageUrl) {
  const { Kakao } = window;
  const API_KEY = process.env.REACT_APP_KAKAO_KEY;

  const realUrl = "https://itsbasic-c93d6.web.app/";
  // 배포한 사이트로 수정(배포된 창에서 클릭시 이동될 페이지)
  const resultUrl = window.location.href;

  Kakao.cleanup();
  Kakao.init(API_KEY);

  const showShare = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: title,
        description: description,
        imageUrl: imageUrl,
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
