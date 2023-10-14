
import { formatDate } from '../../../../utils/date';
import useMovieDetail from '../../../../hooks/useMovieDetail';

export default function Detail() {
 const detail = useMovieDetail();
    
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
