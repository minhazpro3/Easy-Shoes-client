import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    
    return (
        <div>  
<Carousel variant="dark">
  <Carousel.Item className=" banner-bg" style={{backgroundColor: '#3d8fed' }}>

      <div className="row d-flex justify-content-center align-items-center m-5">
          <div className="col-md-6">

        <div className=" text-white">
        <h1 className=" banner-h1" >EXCLUSIVE NEW <span className="text-warning">SHOES !!</span></h1>
      <h3>UP TO 30% OFF ALL SHOES & PRODUCTS</h3>
        <Button className="fs-4 border-2 buttons">Shop Now</Button>
        </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">

         <div className="  bg-white opacity-425  d-flex justify-content-center  rounded-circle" style={{height: '350px', width: '370px'}} >
         <img
      className="d-block  p-5  " style={{height: '330px' , width: '400px'}}
      src="https://i.ibb.co/K7P6J2w/slider-01.webp"
      alt="First slide"
    />

    </div>
          </div>
      </div>
   
    
  </Carousel.Item>
  <Carousel.Item className=" banner-bg " style={{backgroundColor: '#2c86ee'      }}>

  <div className="row d-flex justify-content-center align-items-center m-5">
        <div className="col-md-6">

        <div className=" text-white">
          <h1 className=" banner-h1" >EXCLUSIVE NEW <span className="text-warning">SHOES !!</span></h1>
      <h3 className="">UP TO 30% OFF ALL SHOES & PRODUCTS</h3>
      <Button className="fs-3 border-2 buttons ">Shop Now <i className="fas fa-luggage-cart"></i></Button>
          </div>

        </div>
          <div className="col-md-6 d-flex justify-content-center">

         <div className="  bg-white opacity-425    rounded-circle" style={{height: '350px', width: '370px'}} >
         <img
       className="d-block  pe-5 pb-5 d-flex justify-content-center" style={{height: '370px' , width: '440px'}}
      src="https://i.ibb.co/Pt48zmM/71-A7m-Jg-XCx-L-UY500-removebg-preview.png"
      alt="Second slide"
    />
         </div>
          </div>
      </div>
   
    
  </Carousel.Item>
 
</Carousel>
        </div>
       


    );
};

export default Banner;