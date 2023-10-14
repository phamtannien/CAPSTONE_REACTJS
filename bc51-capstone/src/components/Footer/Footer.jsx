import React from 'react'
import style from "../style/style.css"
export default function Footer() {
  return (
   <footer className="text-center text-lg-start bg-dark text-light gradient-custom">
  <section className="d-flex justify-content-center p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div>
      <a href className="me-4 text-reset">
        <i className="fab fa-facebook-f" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-twitter" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-google" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-instagram" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-linkedin" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-github" />
      </a>
    </div>
  </section>
 
  <section className>
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fa-lg fa-solid fa-robot me-3" />Cyber Cinema
          </h6>
          <p>
            We pride ourselves on our efficiency and hard work,
            but most of all our ability to source you the best quality
          </p>
        </div>
      
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Brands</h6>
          <p>
            <a href="#!" className="text-reset">CGV</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Cinestar</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Lotte</a>
          </p>
         
        </div>
       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108524.49435038719!2d106.62508258584518!3d10.868418201767064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b8584047ab%3A0x993a37014e2c120!2sChung%20c%C6%B0%201050!5e0!3m2!1svi!2s!4v1695742751700!5m2!1svi!2s" width="200" height="100"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <p>
            <i className="fas fa-envelope me-3" />
            cyberphone@mail.com
          </p>
          <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
        </div>
      
      </div>
     
    </div>
  </section>
 
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2022 Copyright:
    <a className="text-reset fw-bold" href>Cyber Cinema</a>
  </div>
 
</footer>

  )
}
