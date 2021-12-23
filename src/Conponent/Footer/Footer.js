import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer text-white mt-3    text-start  " style={{backgroundColor: '#26292e'}}>
           <div className="container py-2">
            <div className="row align-items-center">
                <div className="col-md-4 ">
                   <h1>SHOES</h1>
                   <h4  >Easy Market </h4>
                   <p><i className="fas fa-map-marker-alt text-primary"></i> Sherpur (Highway),Road-131, Bogura,USA</p>
                </div>
              
                <div className="col-md-4  p-2 pb-3">
                <h3> Follow us</h3>
                 <div className="text-decoration-none ">
                 
               <a target="_blank" href="www.facebook.com"> Facebook</a>
               <br/>
               <a target="_blank" href="www.instagram.com"> Instagram</a>
               <br/>
               <a target="_blank" href="www.youtube.com"> Youtube</a>
               <br/>
               <a target="_blank" href="www.twitter.com"> Twitter</a>
               <br/>
               <a target="_blank" href="www.google.com"> www.easyMrk.com</a>
                
                 </div>
                  
                </div>
                <div className="col-md-4  p-2 pb-3">
                   <h3> Payment Getway</h3>
                   <img className="w-5" style={{width: "300px"}}  src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="" />
                </div>
              
            </div>
           </div>
           <div className="py-3 text-center">
               <span >© Minhaz, Inc. All rights reserved.</span>
           </div>
        </div>
        </div>
    );
};

export default Footer;