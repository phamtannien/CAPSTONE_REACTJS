import React, { useEffect, useState } from 'react'
import { movieService } from '../../services/movie'
import Carousel from './Carousel';

export default function Home() {
  const [movieList, setMovieList] = useState([])
  useEffect(()=>{
    fetchMovieList();
  }, [])
  const fetchMovieList = async ()=>{
   const result = await movieService.fetchMovieListApi()
   //console.log(result);
    setMovieList(result.data.content)
  }
  const renderMovieList = ()=>{
    return movieList.map((element) =>{
      return (
        <div key={element.maPhim} className="col-3">
      <div className="card movie-card" style={{marginBottom: 20, height: 500}}>
        <img style={{height: 350, objectFit: 'cover'}} className="card-img-top" src={element.hinhAnh} alt="movie" />
        <div className="card-body">
          <h5 className="card-title">{element.tenPhim}</h5>
          <button className="btn btn-info">XEM CHI TIẾT</button>
        </div>
      </div>
    </div>
      )
    })
  }
  return (
    <>
     <Carousel/>
    <div className="py-5">
  <div className="row mt-3 mx-auto w-75">
    {renderMovieList()}
  </div>
</div>
    </>
   

  )
}
