import { Bounce, toast } from "react-toastify";

const TOAST_SETTING = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
};

/**
 * @description - 특정 동작에 무언가 알림이 필요할 때 알려줄 토스트를 호출합니다.
 * @param toastMessage - 이 함수가 호출 되었을때, 보여줄 메시지를 넣습니다.
 * @param situation 토스트의
 */
const callToastNotify = (
  toastMessage = "default Message",
  situation = "success"
) => {
  switch (situation) {
    case "success":
      toast.success(toastMessage, TOAST_SETTING);
      break;
    case "error":
      toast.error(toastMessage, TOAST_SETTING);
      break;
    default:
      toast.error("success나 error로 situation을 지정하세요.", TOAST_SETTING);
  }
};

export { callToastNotify };
