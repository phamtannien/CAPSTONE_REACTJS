import React, { useEffect, useState } from "react";

import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  notification,
  
} from "antd";
import { useFormik } from "formik";
import {  values } from "lodash";
import { adminService } from "services/admin";
import { useNavigate, useParams } from "react-router-dom";




const EditUser = () => {
  const navigate = useNavigate();
  const params = useParams()
     const [state, setState] = useState([]);
    useEffect(()=>{
      fetchUserInfo()
    },[])
    const fetchUserInfo = async ()=>{
      try {
        let result = await adminService.layThongTinNguoiDungApi(params.taiKhoan);
       
       setState(result.data.content)

        
    } catch (error) {
        
    }
    }

  const [componentSize, setComponentSize] = useState("default");
const formik = useFormik({
  enableReinitialize: true,
    initialValues: {
        taiKhoan: state?.taiKhoan,
        hoTen: state?.hoTen,
        matKhau:state?.matKhau,
        email: state?.email,
        soDT: state?.soDT,
        maLoaiNguoiDung:state?.maLoaiNguoiDung,
        maNhom: "GP01"
    },
    onSubmit: async  (values) => {
               try {
          const result = await adminService.capNhatNguoiDungApi(values);
          
          notification.success({
            message: "Cập nhật người dùng thành công",
            placement: "bottomRight",
          });
          navigate("/admin")
        } catch (error) {
          notification.error({
            message: "Cập người dùng thất bại",
            placement: "bottomRight",
          });
        }
      }
})

const handleChangLoaiNguoiDung = (values)=>{
   formik.setFieldValue("maLoaiNguoiDung", values.toString())
}
const convertSelectLND = (values)=>{
  
    // return state.map((lnd, idx)=>{
    //     return {label:lnd.tenLoai , value:lnd.maLoaiNguoiDung}
    // })
}

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
      <Form
      onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 600,
        }}
      >
        <h3>Cập nhật người dùng</h3>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tài khoản">
          <Input name="taiKhoan" onChange={formik.handleChange} value={formik.values.taiKhoan} />
        </Form.Item>
        <Form.Item label="Họ tên">
          <Input name="hoTen" onChange={formik.handleChange} value={formik.values.hoTen} />
        </Form.Item>
        <Form.Item label="Mật khẩu">
          <Input name="matKhau" onChange={formik.handleChange} value={formik.values.matKhau}/>
        </Form.Item>
        <Form.Item label="Email">
          <Input name="email" onChange={formik.handleChange} value={formik.values.email} />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input name="soDT" onChange={formik.handleChange } value={formik.values.soDT} />
        </Form.Item>
      
        <Form.Item label="Loại người dùng">
        <Cascader options={convertSelectLND()} onChange={handleChangLoaiNguoiDung} value={formik.values.maLoaiNguoiDung} />
        </Form.Item>
       

        <Form.Item label="Tác vụ">
            <button type="submit" className="btn btn-primary text-white p-2" >Lưu</button>
        </Form.Item>
      </Form>
    </>
  );
};
export default EditUser;