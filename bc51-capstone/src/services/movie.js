import { GROUPID } from "../constants/api"
import { request } from "../configs/api"

class MovieService {
    fetchMovieListApi(tenPhim=''){
        if(tenPhim.trim() != ''){
            return request({
                url: `/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`,
                method: "GET",
               
             })
        }
     return request({
        url: "/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
       
     })
        
    }
    fetchMovieDetailApi(movieId){
        return request({
            url: `QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
            method: "GET",
           
         })
    }
}
export const movieService = new MovieService()