import { notification } from 'antd';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { UserType } from '../enums/api';

export default function AdminGuard(props) {
   const navigate = useNavigate();
   const useState = useSelector((state) => state.userReducer);
   useEffect(()=>{
    if(!useState.userInfo){
    //người dùng chưa đăng nhập
        notification.warning({
            message: "vui lòng đăng nhập tài khoản admin để vào trang admin!",
            placement: "topRight"
        })
        
        navigate("/login");
        
    }else{
        //đã đăng nhập người dùng khách hàng
        if(useState.userInfo.maLoaiNguoiDung !== UserType.QuanTri){
            notification.warning({
                message: "Bạn không có quyền truy cập!"
            })
            navigate("/")
        }
    }
    return  () => {}
   }, [])
  return <>{props.children}</>
}
