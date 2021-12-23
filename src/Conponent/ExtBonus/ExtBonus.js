import React from 'react';

const ExtBonus = () => {
    return (
        <div className="container">
        <div className="d-md-flex gap-5  ">
            <div>
                <img className="mb-4 w-100"  src="https://template.hasthemes.com/shome/shome/assets/img/shop/banner/2.webp" alt="" />
            </div>
            <div className="text-start ">
            <img className="w-100 mb-4"  src="https://template.hasthemes.com/shome/shome/assets/img/shop/banner/1.webp" alt="" />

           <div className="mt-5">
           <h1 style={{fontSize: '4rem', fontWeight: '800'}}>Sports Shoes</h1>
            <h4>UP TO 30% OFF ALL SHOES & PRODUCTS</h4>
            <button className="btn btn-warning px-5 py-3 my-5">Shop Now <i className="fas fa-luggage-cart"></i></button>
           </div>
            </div>
        </div>
        </div>
    );
};

export default ExtBonus;