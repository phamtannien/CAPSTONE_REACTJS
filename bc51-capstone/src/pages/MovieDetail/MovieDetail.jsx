import React from "react";
import Detail from "./components/Detail/Detail";
import Showtimes from "./components/Showtimes/Showtimes";
import style from './../../style/style.css'

export default function MovieDetail() {
  return (
    <div className="background-image">
      <div className="overlay"></div>
      <div className=" py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Detail/>
            </div>
            <div className="col-12 mt-5">
              <Showtimes/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
