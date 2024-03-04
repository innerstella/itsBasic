import { callToastNotify } from "../../../../utils/callToastNotify";

const handleEmojiSelect = async (emoji, recipientId, emojiFunc) => {
	try {
		if (localStorage.getItem(emoji) !== "increased") {
			await fetch(
				`https://rolling-api.vercel.app/4-2/recipients/${recipientId}/reactions/`,
				{
					method: "POST",
					headers: {
						accept: "application/json",
						"Content-Type": "application/json",
						"X-CSRFToken":
							"Bk3gqgI4mVP95yjXHakJ56YvHIICSlhOI4lQEztPAT734s9WjGvk04ga24gCLkb6",
					},
					body: JSON.stringify({ emoji: emoji, type: "increase" }),
				}
			);
			localStorage.setItem(emoji, "increased");
		} else {
			await fetch(
				`https://rolling-api.vercel.app/4-2/recipients/${recipientId}/reactions/`,
				{
					method: "POST",
					headers: {
						accept: "application/json",
						"Content-Type": "application/json",
						"X-CSRFToken":
							"Bk3gqgI4mVP95yjXHakJ56YvHIICSlhOI4lQEztPAT734s9WjGvk04ga24gCLkb6",
					},
					body: JSON.stringify({ emoji: emoji, type: "decrease" }),
				}
			);
			localStorage.setItem(emoji, "decreased");
		}
		const notifyMessage =
			localStorage.getItem(emoji) === "increased"
				? "리액션이 성공적으로 추가되었습니다."
				: "리액션이 성공적으로 제거되었습니다.";
		callToastNotify(notifyMessage);

		emojiFunc(recipientId);
	} finally {
	}
};

export default handleEmojiSelect;
