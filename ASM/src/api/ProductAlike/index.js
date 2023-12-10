import { get } from "../../utils/request";

export const ProductAlike = async (id) => {
  try {
    // Using the first word in the API request
    const response = await get(`/laptop/sptrongloai/${id}`);
    const data = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
};
