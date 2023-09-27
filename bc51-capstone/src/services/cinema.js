import { request } from "../configs/api"

class CinemaService {
    fetchShowTimesApi(movieId){
        return request({
            url: `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
            method: "GET",
           
         })
    }
}

export const cinemaService = new CinemaService()