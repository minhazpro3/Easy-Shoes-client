import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const [singleProduct, setSingleProduct]=useState({})
    const {id}=useParams();

    const { register, handleSubmit  } = useForm();
    const onSubmit = data => {


     const orders = {
        // _id,
        // title, 
        // price: offerPrice,
        // description,
        // link,
        img: singleProduct.image,
        title: singleProduct.title,
        description: singleProduct.description,
        city: data.city,
        status: 'Pending',
        currentDate: new  Date().toISOString().slice(0, 10),
        country: data.country,
        email: data.email,
        name: data.name,
        phone: data.phone,
        post: data.post
      }

      console.log(orders)


      fetch('http://localhost:5000/orderInfo' , {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body:JSON.stringify(orders)
      })
      .then(res=>res.json())
      .then(data=>{
       
      })
      
      }
    


    

      useEffect(()=>{
        fetch(`http://localhost:5000/product/${id}`,)
        .then(res=>res.json())
        .then(data=>{
          setSingleProduct(data)
            
        })
    },[])



    return (
        <div className=" container">

        <h3 className="text-center">Order Now</h3>
       <div className="row">
         <div className="col-md-5">
          <div className="w-100   d-flex card-div justify-content-center text-center">
          <Card style={{ width: '18rem' }}>
           {singleProduct?.image?  <Card.Img variant="top" src={`data:image/*;base64,${singleProduct?.image}`} />: <h2>Loading...</h2>}
            <Card.Body className="text-start">
              <Card.Title>{singleProduct.title}</Card.Title>
              <Card.Text>
               {singleProduct.description}
              </Card.Text>
              <div>
                <p style={{color: 'tomato', fontWeight: '700'}}> $ {singleProduct.price}</p>

                
              </div>
            </Card.Body>

          </Card>
          </div>
         </div>
    
         <div className="col-md-4 text-center bg-light my-4 py-3">
    <img className="w-25 " src="" alt=""/>
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
        <input className=" my-2 w-75 px-2" {...register("name")}  type="text" placeholder="name" required />
        <br/>
        <input className=" mb-2 w-75 px-2" {...register("email" )}   type="email" placeholder="email" required />
        <br/>
        <input className=" w-75 px-2 " type="text" {...register("phone")} placeholder="Phone " required />
        <br/>
        <input className=" w-75 px-2 mt-2" type="text" {...register("post")} placeholder="post code " required />
        <br/>
        <input className=" w-75 px-2 my-2 " type="text" {...register("city")} placeholder="city " required />
        <br/>
        <input className=" w-75 px-2 " type="text" {...register("country")} placeholder="country " required />
        <br/>
        <br/>
      <input className="bg-danger border-0 w-75 px-2 py-1 text-white rounded my-2" type="submit"  />
        </form>
       </div>
    </div>
    <div className="col-md-3">
      <div className="text-start">
        <h6 className="fw-bold">Delivery Charge</h6>
        <div className="d-flex justify-content-between">
        <h6>On BKash Payment</h6>
        <h6 style={{color: 'salmon'}}>Free</h6>
        
        </div>
        <div className="d-flex justify-content-between">
        <h6>Cash On Delivery</h6>
        <h6 style={{color: '#40a4e6 '}}>55৳</h6>
        </div>
        <hr></hr>
      </div>
      <div className="text-start">
        <h6 className="fw-bold">Return & Warranty</h6>
        <h6 className=""><i className="fas fa-check-square text-success"></i> 100% Original</h6>
        <h6 className=""><i className="fas fa-check-square text-success"></i> 7 Days Return</h6>
        <h6 className=""><i className="fas fa-times-circle text-danger"></i> No Warranty</h6>
        

      </div>
      <div></div>
    </div>
     
       </div>

       
       </div>
    );
};

export default PlaceOrder;