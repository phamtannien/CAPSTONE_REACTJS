import React, { useEffect, useState } from 'react'
import { carouselService } from '../../services/carousel'

export default function Carousel() {
 const [carousel, setCarousel] = useState([])
 useEffect(()=>{
  fetchCarousel()
 },[])
 const fetchCarousel = async ()=>{
  const result = await carouselService.fetchCarouselApi()
  console.log(result);
  setCarousel(result.data.content)
 }
const renderBanner = () => {
  return carousel.map((element)=>{
    return (
      <div key={element.maPhim} className="carousel-item active">
      <img className="d-block w-100 "  src={element.hinhAnh} alt="First slide" />
    </div>
    )
  })
}
  return (
   <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    {renderBanner()}
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>


  )
}
