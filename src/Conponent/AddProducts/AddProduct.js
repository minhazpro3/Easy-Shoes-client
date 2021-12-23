import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
    const formData = new FormData();
    formData.append('gender', data.gender)
    formData.append('price', data.price)
    formData.append('priceOffer', data.priceOffer)
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('image', data.image[0])


    const url = 'http://localhost:5000/allProduct'
    fetch(url, {
      method: "POST",
      body: formData
      
    })
    
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        reset()
      }
    
    })

  }

    return (
        <div className="text-center">
        <h3 className="text py-2 mt-3">Add Product</h3>
           <form onSubmit={handleSubmit(onSubmit)}>
       <input className="my-2 w-25" {...register("gender")} required type="text" placeholder="Gender" />
       <br/>
       <input className="mb-2 w-25" {...register("title")} required type="text" placeholder="Title" />
       <br/>
       <input className="mb-2 w-25" {...register("price")} required type="text" placeholder="Price" />
       <br/>
       <input className="mb-2 w-25" {...register("priceOffer")} required type="text" placeholder="Offer Price" />
       <br/>
       <textarea style={{height: '100px'}} className="mb-2 w-25" {...register("description")} required type="text" placeholder="description" />
       <br/>
       <input className="mb-2 w-25" {...register("image")} accept="image/*"  type="file"  />
       <br/>
       <input className="w-25 border-0 rounded bg-danger text-white" type="submit" />
     </form>
      </div>
    );
};

export default AddProduct;