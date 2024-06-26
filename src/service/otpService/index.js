// userService.js
import api from "../apiGateway";

const otpService = {
  async getOtp(phone) {
    return await api.get(`/user/otp?phoneNumber=${phone}`);
    // return await api.get(`/user/otp`, {
    //   params: {
    //     phoneNumber: phone,
    //   },
    // });
  },
};

export default otpService;
