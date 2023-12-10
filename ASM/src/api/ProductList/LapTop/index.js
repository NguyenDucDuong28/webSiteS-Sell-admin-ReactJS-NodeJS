import { get } from "../../../utils/request";

export const getLapTop = async () => {
  try {
    const response = await get(``);
    const data = await response;
    return data;
  } catch (e) {
    console.log(e);
  }
};
