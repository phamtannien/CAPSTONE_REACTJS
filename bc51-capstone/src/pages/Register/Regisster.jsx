import React, { useState } from "react";
import style from "./style.css";
import { userService } from "../../services/user";
import { useNavigate } from "react-router-dom";


export default function Regisster() {
    const navigate = useNavigate()
  const [formValue, setFormValue] = useState({
    hoTen: "",
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    
  });
  const handleChange = (event)=>{
    setFormValue({
        ...formValue,

       [event.target.name]: event.target.value
    })
  }
  const handleSubmit = async (event)=>{
    event.preventDefault()
    
   const result = await userService.registerApi(formValue)

   navigate("/login")
  }
  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          'url("https://1.bp.blogspot.com/-44_3AwL1n5I/VhsBztXKYeI/AAAAAAAABIM/mPmKldtjXVI/s1600/The_Avengers_Wallpaper_HD_MarvelSpoilerOficial_%25C2%25A92015.png")',
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                       onChange={handleChange}
                        value={formValue.hoTen}
                        name="hoTen"
                        type="text"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example4cdg">
                        Họ tên
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                       onChange={handleChange}
                        value={formValue.taiKhoan}
                        name="taiKhoan"
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1cg">
                        Tài khoản
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                       onChange={handleChange}
                        value={formValue.matKhau}
                        name="matKhau"
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example4cg">
                        Mật khẩu
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                       onChange={handleChange}
                        value={formValue.email}
                        name="email"
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                      onChange={handleChange}
                        value={formValue.soDt}
                        name="soDt"
                        type="text"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example4cdg">
                        Số điện thoại
                      </label>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button
                     
                      type="submit" 
                      className="btn btn-primary btn-lg">
                        
                        Register
                      </button>
                    </div>
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
