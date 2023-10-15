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
import { min, set, values } from "lodash";
import moment from "moment";
import { useDispatch } from "react-redux";
import { adminService } from "../../../../services/admin";
import { useNavigate } from "react-router-dom";




const AddUser = () => {
  const navigate = useNavigate();
     const [state, setState] = useState([]);
    useEffect(()=>{
      fetchListUserType()
    },[])
    const fetchListUserType = async ()=>{
      try {
        let result = await adminService.layDanhSachLoaiNguoiDungApi();
       
       setState(result.data.content)

        
    } catch (error) {
        
    }
    }

  const [componentSize, setComponentSize] = useState("default");
const formik = useFormik({
    initialValues: {
        taiKhoan: "",
        hoTen: "",
        matKhau: "",
        email: "",
        soDt: "",
        maLoaiNguoiDung: "",
        maNhom: "GP01"
    },
    onSubmit: async  (values) => {
               try {
          const result = await adminService.themNguoiDungApi(values);
          
          notification.success({
            message: "Thêm người dùng thành công",
            placement: "bottomRight",
          });
          navigate("/admin")
        } catch (error) {
          notification.error({
            message: "Thêm người dùng thất bại",
            placement: "bottomRight",
          });
        }
     }
})

const handleChangLoaiNguoiDung = (values)=>{
   formik.setFieldValue("maLoaiNguoiDung", values.toString())
}
const convertSelectLND = ()=>{
    return state?.map((lnd, idx)=>{
        return {label:lnd.tenLoai , value:lnd.maLoaiNguoiDung}
    })
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
        <h3>Thêm người dùng</h3>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tài khoản">
          <Input name="taiKhoan" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Họ tên">
          <Input name="hoTen" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Mật khẩu">
          <Input name="matKhau" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Email">
          <Input name="email" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input name="soDt" onChange={formik.handleChange} />
        </Form.Item>
      
        <Form.Item label="Loại người dùng">
        <Cascader options={convertSelectLND()} onChange={handleChangLoaiNguoiDung} placeholder="Loại người dùng" />
        </Form.Item>
       

        <Form.Item label="Tác vụ">
            <button type="submit" className="btn btn-primary text-white p-2" >Thêm</button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AddUser;