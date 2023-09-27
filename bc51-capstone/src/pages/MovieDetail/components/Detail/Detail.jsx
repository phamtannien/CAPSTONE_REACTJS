import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { movieService } from '../../../../services/movie';
import moment from 'moment';
import { formatDate } from '../../../../utils/date';

export default function Detail() {
    const [detail, setDetail] = useState({})
    const params = useParams();
    useEffect(()=>{
        fetchMovieDetail()
    },[])
    const fetchMovieDetail = async ()=>{
      const result = await  movieService.fetchMovieDetailApi(params.movieId)
      setDetail(result.data.content)
    }
    
  return (
    <div className="row">
                <div className="col-3">
                  <img
                    className="w-100"
                    src={detail.hinhAnh}
                  />
                </div>
                <div className="col-9">
                  <h4 className="text-white">{detail.tenPhim}</h4>
                  <p className="text-white">
                        {detail.moTa}
                  </p>
                  <p className="text-white"> {formatDate(detail.ngayKhoiChieu)}</p>
                  <div>
                    <button className="btn btn-info mr-2">TRAILER</button>
                  </div>
                </div>
              </div>
  )
}
