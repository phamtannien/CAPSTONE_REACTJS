import { request } from "../configs/api";
import { GROUPID } from "../constants/api";

class AdminService {
    themPhimUploadHinhApi(formData){
        return request({
            url: `QuanLyPhim/ThemPhimUploadHinh`,
            method: "POST",
            data:formData
          });
    }

    capNhatPhimUpLoadApi(formData){
        return request({
            url: `/QuanLyPhim/CapNhatPhimUpload`,
            method: "POST",
            data:formData
          });
    }
    xoaPhimApi(maPhim){
        return request({
            url: `/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
            method: "DELETE",
          });
    }
    layDanhSachNguoiDungApi(hoTen=''){
        if(hoTen.trim() != ''){
            return request({
                url: `/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${GROUPID}&hoTen=${hoTen}`,
                method: "GET",
               
             })
        }
        return request ({
           url: `/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${GROUPID}`,
           method: "GET",
          })
     }
     layDanhSachLoaiNguoiDungApi(){
        return request ({
            url: `/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`,
            method: "GET",
           })

     }
     themNguoiDungApi(formData){
        return request({
            url: `/QuanLyNguoiDung/ThemNguoiDung`,
            method: "POST",
            data:formData
          });
    }
  
     xoaNguoiDungApi(taiKhoan){
        return request({
            url: `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            method: "DELETE",
          });
    }
    
    layThongTinNguoiDungApi(taiKhoan){
        return request ({
            url: `/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`,
            method: "POST",
           })
        }
    capNhatNguoiDungApi(data){
        return request ({
            url: `QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            method: "POST",
            data: data
           })
        }

}
export const adminService = new AdminService()