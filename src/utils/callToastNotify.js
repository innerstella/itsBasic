import { Bounce, toast } from "react-toastify";

/**
 * @param toastMessage - 이 함수가 호출 되었을때, 보여줄 메시지를 넣습니다.
 * @description - 특정 동작에 무언가 알림이 필요할 때 알려줄 토스트를 호출합니다.
 */
const callToastNotify = (toastMessage = "default Message") =>
	toast.success(toastMessage, {
		position: "bottom-center",
		autoClose: 5000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark",
		transition: Bounce,
	});

export { callToastNotify };
