import api from "./api";
import { generateOtp } from "./endpoints";

export const generateOtpApi = (data) => {
  return api.post(`${generateOtp}/`, data);
};
