import React, { useState } from "react";
import { userService } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import style from './../../style/style.css'

export default function Regisster() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    hoTen: "",
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
  });
  //validate
  const [formError, setFormError] = useState({});
  const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
  };
  const isEmptyValid = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };
  
  const validateForm = () => {
    const error = {};

    if (isEmptyValue(formValue.hoTen)) {
      error["hoTen"] = "vui lòng nhập họ tên";
    }
    if (isEmptyValue(formValue.taiKhoan)) {
      error["taiKhoan"] = "vui lòng nhập tài khoản";
    }
    if (isEmptyValue(formValue.matKhau)) {
      error["matKhau"] = "vui lòng nhập mật khẩu";
    }
    if (isEmptyValue(formValue.email)) {
      error["email"] = "vui lòng nhập email ";
    } else {
      if (!isEmptyValid(formValue.email)) {
        error["email"] = "Emailkhông đúng định dạng";
      }
    }
    if (isEmptyValue(formValue.soDt)) {
      error["soDt"] = "vui lòng nhập số điện thoại";
    }

    setFormError(error);

    return Object.keys(error).length === 0;
  };
 
  const handleChange = (event) => {
    setFormValue({
      ...formValue,

      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const result = await userService.registerApi(formValue);
        notification.success({
          message: 'Đăng ký thành công'
      })
        navigate("/login");
      } catch (error) {
        notification.warning({
          message: `${error.response?.data.content}`
      })
        console.log("error", error.response?.data);
      }
      
    } else {
     
    }
  };
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
                    Create an account
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4cdg">
                        Họ tên
                      </label>
                      <input
                        onChange={handleChange}
                        value={formValue.hoTen}
                        name="hoTen"
                        type="text"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                      />
                      {formError.hoTen && (
                        <dic className="error-feedback" >{formError.hoTen}</dic>
                      )}
                    </div>
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example1cg">
                        Tài khoản
                      </label>
                      <input
                        onChange={handleChange}
                        value={formValue.taiKhoan}
                        name="taiKhoan"
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                      />
                       {formError.taiKhoan && (
                        <dic className="error-feedback" >{formError.taiKhoan}</dic>
                      )}
                     
                    </div>
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4cg">
                        Mật khẩu
                      </label>
                      <input
                        onChange={handleChange}
                        value={formValue.matKhau}
                        name="matKhau"
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                      />
                       {formError.matKhau && (
                        <dic className="error-feedback" >{formError.matKhau}</dic>
                      )}
                      
                    </div>
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label>
                      <input
                        onChange={handleChange}
                        value={formValue.email}
                        name="email"
                        type="text"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                      />
                      {formError.email && (
                        <dic className="error-feedback" >{formError.email}</dic>
                      )}
                      
                    </div>
                     <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4cdg">
                        Số điện thoại
                      </label>
                      <input
                        onChange={handleChange}
                        value={formValue.soDt}
                        name="soDt"
                        type="text"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                      />
                       {formError.soDt && (
                        <dic className="error-feedback" >{formError.soDt}</dic>
                      )}
                     
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-primary btn-lg">
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
