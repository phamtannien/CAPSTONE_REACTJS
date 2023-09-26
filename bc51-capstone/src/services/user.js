import { request } from "../configs/api"

class UserService {
loginApi(data){
   return request ({
    url: "/QuanLyNguoiDung/DangNhap",
    method: "POST",
    data: data,
   })
}
}
export const userService = new UserService()