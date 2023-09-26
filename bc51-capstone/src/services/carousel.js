import { request } from "../configs/api"

class CarouselService{
fetchCarouselApi(){
    return request({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
        method: "GET",
       
     })
}
}
export const carouselService = new CarouselService()