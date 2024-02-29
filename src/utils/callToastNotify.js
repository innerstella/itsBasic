import { Bounce, toast } from "react-toastify";

const toastNotify = (toastMessage = "default Message") =>
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

export { toastNotify };
