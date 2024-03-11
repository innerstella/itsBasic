import { BASE_URL } from "../../constant/url";

export const postMessages = async (id, body) => {
  try {
    const response = await fetch(`${BASE_URL}/recipients/${id}/messages/`, {
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
