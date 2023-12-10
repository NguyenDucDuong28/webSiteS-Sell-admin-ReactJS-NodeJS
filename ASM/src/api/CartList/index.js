import { get } from "../../utils/request";

export const getProductById = async (id) => {
  try {
    const response = await get(`/laptop/sanphamchitiet/${id}`);
    const data = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
};
