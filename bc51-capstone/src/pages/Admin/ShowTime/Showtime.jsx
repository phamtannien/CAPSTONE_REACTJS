import { Button, Checkbox, Form, Input, Select } from "antd";
import { Cascader } from "antd";
import { values } from "lodash";
import { DatePicker, Space } from "antd";
import { InputNumber } from "antd";
import { cinemaService } from "../../../services/cinema";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useEffect, useState } from "react";


export default function Showtime(props) {
  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });
   useEffect( () => {
    layThongTinHeThongRap()
  }, []);
  const layThongTinHeThongRap = async()=>{
    try {
      let result = await  cinemaService.layThongTinHeThongRap();
     setState({
       ...state,
       heThongRapChieu: result.data.content
     })
    } catch (error) {

   }
  }
  const params = useParams();
  const formik = useFormik({
    initialValues:{
      maPhim: params.movieId,
      ngayChieuGioChieu: '',
      maRap: '',
      giaVe: ''

    },
    onSubmit: async (values) =>{
      try {
        const result = await cinemaService.taoLichChieu(values)
        alert(result.data.content);
      } catch (error) {
        console.log("error", error.response?.data);
      }
    }
  })
 
const convertSelectHTR = ()=>{
  return state.heThongRapChieu?.map((htr, idx)=>{
    return {label: htr.tenHeThongRap, value: htr.maHeThongRap}
  })
}
  const handleChangeHeThongRap = async (value) => {
    try {
      let result = await cinemaService.layThongTinCumRap(value);
      setState({
        ...state,
        cumRapChieu: result.data.content
      })
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
  const handleChangeCumRap = (value)=>{
    formik.setFieldValue("maRap", value)
  }

  const onOk = (values) => {
    formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss'));

  };
  const onChangeDate = (values) => {
    formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss'));


  };
  const onChangeInputNumber = (value) => {
    formik.setFieldValue("giaVe", value)

  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onSubmitCapture={formik.handleSubmit}
    >
      <h3 className="text-2xl">Tạo lịch chiếu</h3>
      <Form.Item label="Hệ thống rạp">
        <Select
          options={convertSelectHTR()}
          onChange={handleChangeHeThongRap}
          placeholder="Chọn hệ thống rạp"
        />
      </Form.Item>
      <Form.Item label="Cụm rạp">
        <Select
          options={state.cumRapChieu?.map((cumRap, idx)=>({label: cumRap.tenCumRap, value: cumRap.maCumRap}))}
          onChange={handleChangeCumRap}
          placeholder="Chọn cụm rạp"
        />
      </Form.Item>
      <Form.Item label="Ngày chiếu giờ chiếu">
        <DatePicker format={'DD/MM/YYYY hh:mm:ss'} showTime onChange={onChangeDate} onOk={onOk} />
      </Form.Item>
      <Form.Item label="Giá vé">
        <InputNumber
          min={75000}
          max={150000}
          defaultValue={3}
          onChange={onChangeInputNumber}
        />
      </Form.Item>
      <Form.Item label="chức năng">
        <Button htmlType="submit">Tạo lịch chiếu</Button>
      </Form.Item>
    </Form>
  );
}
