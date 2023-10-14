import React, { Fragment, useEffect, useState } from "react";
import { Radio, Space, Tabs } from "antd";
import { cinemaService } from "services/cinema";
import { NavLink } from "react-router-dom";
import moment from "moment";
const { Tabpane } = Tabs;
export default function HomeMenu() {
  const [tabPosition, setTabPosition] = useState("left");
  const items = [
    { label: 'Tab 1', key: 'item-1', children: 'Content 1' }, // remember to pass the key prop
    { label: 'Tab 2', key: 'item-2', children: 'Content 2' },
  ];
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  const [state, setState] = useState({
    heThongRapChieu: [],
  });

  useEffect( () => {
    try {
      let result =  cinemaService.layThongTinLichChieuHeThongRap();
      setState({
        ...state,
        heThongRapChieu: result.data.content,
      });
      console.log();
    } catch (error) {}

    return  () => {}
  }, []); 
  const renderHethongRap = () => {
    return state.heThongRapChieu?.map((heThongRap, idx) => {
      return (
        <Tabpane
          tab={
            <img src={heThongRap.logo} className="rounded-full" width={50} />
          }
          key={idx}
        >
          <Tabs tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.map((cumRap, idx) => {
              return (
                <Tabpane
                  tab={
                    <div style={{width: '300px', display:'flex'}}>
                        <img src={heThongRap.logo} width='50' />
                        <br />
                        <div className="text-left ml-2">
                            {cumRap.tenCumRap}
                            <p className="text-danger">Chi tiết</p>
                        </div>
                    </div>
                  }
                  key={idx}>
                  {cumRap.danhSachPhim.slice(0,4).map((phim, idx) =>{
                    return <Fragment key={idx}>
                        <div className="my-2"  >
                        <div style={{display: "flex"}}>
                            <img style={{width: 100, height:100}} src={phim.hinhAnh} alt={phim.tenPhim} />
                            <div className="ml-2">
                            <h5 className=" font-bold">{phim.tenPhim}</h5>
                            <p>{cumRap.diaChi}</p>
                            <div className="row">
                            {phim.lstLichChieuTheoPhim?.slice(0,12).map((lichChieu, idx)=>{
                                return <NavLink className='col-2 text-success' to="/" key={idx}>
                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                </NavLink>
                            })}
                            </div>
                           
                            </div>
                        </div>
                    </div>
                    <hr />
                    </Fragment>
                     
                  })}
                </Tabpane>
              );
            })}
          </Tabs>
        </Tabpane>
      );
    });
  };
  return (
    <>
      <Tabs tabPosition={changeTabPosition}>{renderHethongRap()}</Tabs>
    </>
  );
}
