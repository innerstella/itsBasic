/**
 * @description - 카카오톡 공유 기능
 * @param title - 이 함수가 호출 되었을때, 보여줄 제목을 넣습니다.
 * @param description 보여줄 내용
 * @param imageUrl 보여줄 이미지
 */
export function shareKakao(title, description, imageUrl) {
  const { Kakao } = window;
  // 배포한 자신의 사이트로 수정(바꿔줄 부분)
  const realUrl =
    "https://65e85a80d1619c0d99620100--kakaosharingtest.netlify.app";
  const resultUrl = window.location.href;

  Kakao.cleanup();
  // 자신의 js 키를 넣어준다.(바꿔줄 부분)
  Kakao.init("eb5c8ae043e8313bb7c4235fbe2c072c");
  // 잘 적용되면 true 를 뱉습니다. 삭제하기.
  console.log(Kakao.isInitialized());

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
