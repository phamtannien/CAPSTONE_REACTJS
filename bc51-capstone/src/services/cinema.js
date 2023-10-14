import { GROUPID } from "constants/api"
import { request } from "../configs/api"

class CinemaService {
   
    fetchShowTimesApi(movieId){
        return request({
            url: `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
            method: "GET",
           
         })
    }
    layThongTinLichChieuHeThongRap(){
        return request({
            url: `QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`,
            method: "GET",
           
         })
    }
    layThongTinHeThongRap(){
        return request({
            url: `/QuanLyRap/LayThongTinHeThongRap`,
            method: "GET",
           
         })
    }
    layThongTinCumRap(maHeThongRap){
        return request({
            url: `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
            method: "GET",
           
         })
    }
    taoLichChieu(thongTinLichChieu){
        return request({
            url: `QuanLyDatVe/TaoLichChieu`,
            method: "POST",
           data: thongTinLichChieu
         })
    }
    
    
}

export const cinemaService = new CinemaService()