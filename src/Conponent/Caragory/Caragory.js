import React from 'react';
import './Caragory.css'

const Caragory = () => {
    return (
        <div className="container">
             <div className=" d-lg-flex mt-4 gap-3">

             <div className=" zoomDiv backgroundC     mt-2 p-4 " style={{height: '400px'}}>
                    <img className="zoom " style={{width: '320px'}} src="https://i.ibb.co/Tm9LMbr/product-jpeg-500x500-removebg-preview.png" alt="" />

                  <div className="text-white">
                  <h1 className="fw-bold">Sports Shoes</h1>
                    <h3>From $95.00  </h3>
                  </div>
                </div>

                <div className="zoomDiv backgroundD    mt-2 p-4  " style={{height: '400px'}}>
                <img className="zoom " style={{width: '320px'}} src="https://i.ibb.co/NW8tz9H/00000335-photo-2019-12-25-18-11-37-removebg-preview.png" alt="" />
                
                <div className="text-white">
                  <h1 className="fw-bold">Latest Shoes</h1>
                    <h3>From $90.00  </h3>
                  </div>
                </div>

                <div className="zoomDiv backgroundE    mt-2 p-4 " style={{height: '400px'}}>
                <img className="zoom " style={{width: '320px'}} src="https://i.ibb.co/qxJf2Wz/img-20191120-wa0008-500x500-removebg-preview.png" alt="" />
                <div className="text-white">
                  <h1 className="fw-bold">Office Shoes</h1>
                    <h3>From $85.00  </h3>
                  </div>
                </div>
             </div>
        </div>
    );
};

export default Caragory;