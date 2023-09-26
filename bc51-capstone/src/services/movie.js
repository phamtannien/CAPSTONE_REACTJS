import { request } from "../configs/api"

class MovieService {
    fetchMovieListApi(){
     return request({
        url: "/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
        method: "GET",
       
     })
        
    }
    fetchMovieDetailApi(){

    }
}
export const movieService = new MovieService()