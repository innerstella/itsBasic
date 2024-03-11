/**
 * @description Get background images
 * @returns   Background images array
 */
export const getBackgroundImages = async () => {
  try {
    const response = await fetch(
      `https://rolling-api.vercel.app/background-images/`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching background images:", error);
    throw error;
  }
};
