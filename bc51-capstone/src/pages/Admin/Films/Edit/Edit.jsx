import React, { useState } from "react";

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
import { adminService } from "../../../../services/admin";
import useMovieDetail from "../../../../hooks/useMovieDetail";
import { useNavigate } from "react-router-dom";
const Edit = () => {
  const navigate = useNavigate();
  const detail = useMovieDetail();
  const [componentSize, setComponentSize] = useState("default");
    const [imgSrc, setImgSrc] = useState('');
const formik = useFormik({
  enableReinitialize: true,
    initialValues: {
        maPhim: detail?.maPhim,
        tenPhim: detail?.tenPhim,
        trailer: detail?.trailer,
        moTa: detail?.moTa,
        ngayKhoiChieu: detail?.ngayKhoiChieu,
        dangChieu: detail?.dangChieu,
        sapChieu: detail.sapChieu,
        hot: detail.hot,
        danhGia: detail.danhGia,
        hinhAnh: null,
        maNhom: 'GP01'
    },
    onSubmit: async  (values) => {
        //tạo đối tượng formdata
        let formData = new FormData();
         for(let key in values){
            if (key !== 'hinhAnh' ) {
             formData.append(key, values[key]);
           }else {
            if(values.hinhAnh !== null){
              formData.append("File", values.hinhAnh, values.hinhAnh.name)

            }
           }
         }
         try {
          const result = await adminService.capNhatPhimUpLoadApi(formData);
          
          notification.success({
            message: "Cập nhật phim thành công",
            placement: "bottomRight",
          });
          navigate('/admin/films')

        } catch (error) {
          notification.error({
            message: "ThCập nhật phim thất bại",
            placement: "bottomRight",
          });
        }
    }
})

const handleChangeDatePiker = (value) =>{
     let ngayKhoiChieu = moment(value);
     formik.setFieldValue('ngayKhoiChieu',ngayKhoiChieu)
}
const handleChangeSwitch = (name) =>{
    return (value) =>{
        formik.setFieldValue(name, value)
    }
}
const handleChangeInputNumber = (name) =>{
    return (value) =>{
        formik.setFieldValue(name, value)
    }
}
const handleChangeFile = async (e) =>{
  //lấy file ra từ e
  let file = e.target.files[0];

  if (
    file.type === "image/jpeg" ||
    file.type === "image/jpg" ||
    file.type === "image/png" ||
    file.type === "image/gif"
  ) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImgSrc(e.target.result);
    };

  await  formik.setFieldValue("hinhAnh", file);
  }

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
        <h3>Thêm phim mới</h3>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên phim">
          <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} value={formik.values.trailer} />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker  onChange={handleChangeDatePiker} format={'DD/MM/YYYY'} value={moment(formik.values.ngayKhoiChieu)} />
        </Form.Item>
        <Form.Item label="Đang chiếu">
          <Switch name='dangChieu' onChange={handleChangeSwitch("dangChieu")} checked={formik.values.dangChieu} />
        </Form.Item>
        <Form.Item label="Sắp chiếu">
          <Switch name='sapChieu' onChange={handleChangeSwitch("sapChieu")} checked={formik.values.sapChieu} />
        </Form.Item>
        <Form.Item label="Hot">
          <Switch name="hot" onChange={handleChangeSwitch("hot")} checked={formik.values.hot} />
        </Form.Item>
        <Form.Item label="Số sao">
          <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} value={formik.values.danhGia} />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input type="file" onChange={handleChangeFile} />
          <br />
          <img style={{width:150, height:150}} src={imgSrc === "" ? detail.hinhAnh : imgSrc } alt=".."   />
        </Form.Item>

        <Form.Item label="Tác vụ">
            <button type="submit" className="bg-blue p-2" >Cập nhật</button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Edit;
