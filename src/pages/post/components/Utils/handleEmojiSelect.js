import { callToastNotify } from "../../../../utils/callToastNotify";

/**
 * @description 이모지를 서버에 등록하거나 취소함과 동시에 자동적으로 새로고침을 하는 함수. HOOK으로 바꾸면 좋을 것 같은데 아이디어가 안떠오름. 고쳐야됨!!!!!!!!!!!!!!!!
 * @param {*} emoji 서버에 등록하는 대상이 되는 이모지
 * @param {*} recipientId 대상 페이지 ID
 * @param {*} emojiFunc 이모지 리스트를 새로고침하는 함수
 */
const handleEmojiSelect = async (emoji, recipientId, emojiFunc) => {
	try {
		const emojiPostType =
			localStorage.getItem(emoji) !== "increase" ? "increase" : "decrease";
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
				body: JSON.stringify({ emoji: emoji, type: emojiPostType }),
			}
		);
		localStorage.setItem(emoji, `${emojiPostType}`);
		const notifyMessage =
			emojiPostType === "increase"
				? "리액션이 성공적으로 추가되었습니다."
				: "리액션이 성공적으로 제거되었습니다.";
		callToastNotify(notifyMessage);

		emojiFunc(recipientId);
	} finally {
	}
};

export default handleEmojiSelect;
