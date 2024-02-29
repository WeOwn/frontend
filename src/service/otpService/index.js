// userService.js
import api from "../apiGateway";

const otpService = {
  getOtp(phone) {
    return api.get(`/user/otp?phoneNumber=${phone}`);
  },
};

export default otpService;
