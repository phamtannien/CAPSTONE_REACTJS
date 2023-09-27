import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cinemaService } from '../../../../services/cinema';
import moment from 'moment'
import { formatDate } from '../../../../utils/date';

export default function Showtimes() {
    const params = useParams();
   const [data, setData] = useState([])
    useEffect(()=>{
        fetchShowtimes()
    },[]);
    const fetchShowtimes = async ()=>{
       const result = await cinemaService.fetchShowTimesApi(params.movieId)
       setData(result.data.content.heThongRapChieu)
    };
    const renderTabList = ()=>{
        return data.map((element, idx) =>{
            return( 
            <a key={element.maHeThongRap}
            className={`nav-link text-capitalize ${idx === 0 && "active"}`}
            data-toggle="pill"
            href={`#${element.maHeThongRap}`}
            role="tab"
            aria-selected="true"
          >
            {element.tenHeThongRap}
          </a>)
        })
    }
    const renderTabContent = ()=>{
        return data.map((element, idx) => {
            return (
                <div 
           key={element.maHeThongRap}     
          className={`tab-pane fade show ${idx === 0 && "active"}`}
          id={element.maHeThongRap}
          role="tabpanel"
        >
          {element.cumRapChieu.map((element)=>{
            return (
                <div key={element.maCumRap} className="row mb-5">
            <div className="col-1">
              <img
                className="img-fluid rounded"
                src={element.hinhAnh}
              />
            </div>
            <div className="col-11 pl-0">
              <h5 className="text-white">
                {element.tenCumRap}
              </h5>
              <span className=" text-white">
                {element.diaChi}
              </span>
            </div>
            <div className="col-12">
              <div className="row">
                {element.lichChieuPhim.map((element)=>{
                    return (
                        <div key={element.maRap} className="col-3">
                  <a className="text-white" href="3">
                     {formatDate(element.ngayChieuGioChieu)}
                  </a>
                </div>
                    )
                })}
                
                
              </div>
            </div>
          </div>
            )
          })}
          
                 </div>
            )
        })
    }
  return (
    <div className="row">
    <div className="col-3">

      <div
        className="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
       {renderTabList()}
        
      </div>


    </div>




    <div className="col-9">
      <div className="tab-content" id="v-pills-tabContent">
        {renderTabContent()}
        
      </div>
    </div> 
  </div>
  )
}
