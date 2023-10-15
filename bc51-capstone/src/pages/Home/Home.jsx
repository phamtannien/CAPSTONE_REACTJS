import React, { useEffect, useState } from 'react'
import { movieService } from '../../services/movie'
import Carousel from './Carousel';
import useMovieList from '../../hooks/useMovieList';
import { Button } from 'antd';
import HomeMenu from './HomeMenu';
import { useNavigate } from 'react-router-dom';
import style from './../../style/style.css'
export default function Home() {
  const navigate = useNavigate();
 const movieList = useMovieList()
  const renderMovieList = ()=>{
    return movieList?.map((element) =>{
      return (
        <div key={element.maPhim} className="col-3">
      <div className="card movie-card" style={{marginBottom: 20, height: 500}}>
        <img style={{height: 350, objectFit: 'cover'}} className="card-img-top" src={element.hinhAnh} alt="movie" />
        <div className="card-body">
          <h5 className="card-title">{element.tenPhim}</h5>
          <button 
          onClick={()=>navigate(`/movie-detail/${element.maPhim}`)} 
          className="btn btn-info">XEM CHI TIẾT</button>
        </div>
      </div>
    </div>
      )
    })
  }
  return (
    <>
     <Carousel/>
     
     <div className='background-image'>
      <div className="overlay"></div>
      <div className=" py-5">
        
  <div className="row mt-3 mx-auto w-75">
    {renderMovieList()}
  </div>
</div>
     </div>
    <HomeMenu/>
    </>
   

  )
}