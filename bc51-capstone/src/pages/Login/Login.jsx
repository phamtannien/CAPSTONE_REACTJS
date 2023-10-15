import React, { useState } from "react";
import { userService } from "../../services/user";
import { useDispatch } from "react-redux";
import { setUserInfoAction } from "../../store/actions/userAction";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import style from './../../style/style.css'
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";

export default function Login() {
    const navigate = useNavigate()
   const ditpatch = useDispatch()
   const [state, setState] = useState({
        taiKhoan: "",
        matKhau: "",
    })

    const handleChange = (event)=>{
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        try {
          const result = await userService.loginApi(state);

        localStorage.setItem("USER_INFO", JSON.stringify(result.data.content))
        

        ditpatch(setUserInfoAction(result.data.content));

        notification.success({
          message: "Đăng nhập thành công!"
      })

        navigate("/");

        } catch (error) {
          
          notification.warning({
             message: `Đăng nhập thất bại: ${error.response?.data.content}`
          })
          console.log("error", error.response?.data);
        }
       
    }

  return (
   
 <section className="vh-100 background-image">
   <div className="overlay"></div>
   <div className="mask d-flex align-items-center h-100 gradient-custom-3">
     <div className="container h-100">
       <div className="row d-flex justify-content-center align-items-center h-100">
         <div className="col-12 col-md-9 col-lg-7 col-xl-6">
           <div className="card" style={{ borderRadius: 15 }}>
             <div className="card-body p-5">
               <h2 className="text-uppercase text-center mb-5">
                Đăng nhập
               </h2>
               <form  onSubmit={handleSubmit}>
        <div className="form-group">
          <label  htmlFor="">Tài khoản</label>
          <input 
          onChange={handleChange}
          name="taiKhoan"
          type="text" 
          className="form-control" />
        </div>
        <div className="form-group">
          <label  htmlFor="">Mật khẩu</label>
          <input 
          onChange={handleChange}
          name="matKhau"
          type="text" 
          className="form-control" />
        </div>
        <button  className="btn btn-primary">LOGIN</button>
      </form>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
  );
}