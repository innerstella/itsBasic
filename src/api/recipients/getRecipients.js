import { BASE_URL } from "../../constant/url";

/**
 * @description 받는 사람 목록 가져오는 API
 * @returns 받는 사람 목록 객체
 */
export const getRecipients = async () => {
  try {
    const response = await fetch(`${BASE_URL}/recipients/`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching recipient list:", error);
    throw error;
  }
};
