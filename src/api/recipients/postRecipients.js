import { BASE_URL } from "../../constant/url";

/**
 * @description 새로운 롤링페이퍼 생성 API
 * @param {object} body - team, name, backgroundColor, backgroundImageURL
 * @returns {object}  id, team, name, backgroundColor, backgroundImageURL, createdAt, messageCount, recentMessages, reactionCount, topReactions
 */
export const postRecipients = async (body) => {
  try {
    const response = await fetch(`${BASE_URL}/recipients/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error posting recipients:", error);
    throw error;
  }
};
