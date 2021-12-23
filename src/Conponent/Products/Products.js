import React, { useEffect ,useState} from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
// import Footer from '../Footer/Footer';
import { useParams } from 'react-router';



const Products = () => {
  const [services,setServices]= useState([]);
  const [fresh,setFresh]=useState(false)
  const [isloadding, setIsloadding]=useState(false);
  const {id}=useParams();

  

    useEffect(()=>{
      fetch('http://localhost:5000/allProduct')
      .then(res=>res.json())
      .then(data=>{
        setServices(data);
        setIsloadding(data)
        setFresh(true)
      })
    },[fresh])

  

    
   

    return (
        <div>
       
        <div className=" container ">
        
            
          <div className="row d-flex justify-content-center" >

          <h3 style={{width: '250px'}} className=" mx-auto my-3 shadow p-3   bg-body rounded"> Featured Items</h3>
           <h6 style={{color: 'gray', marginBottom: '25px'}}>
           A shoe is an item of footwear intended to protect and comfort the human foot.</h6>
           {!isloadding ? <div> <Spinner animation="border" /></div>: ""}
          
           


           {
             services.map(pd=>
              
             <div key={pd._id} className="col-md-3  " >
           <div className=" shadow-lg  mb-5  py-3 " >
           <div className=" py-2 pt-1 zoomDiv" >
            <img className="border border-1 rounded-3  zoom"  style={{width: '240px', height: '260px', padding: '5px'}} src={`data:image/*;base64,${pd.image}`} alt="" />
            </div>
              <div className="m-2 text-start">
                <p className="m-0">{pd.gender}</p>
                <h4>{pd.title}</h4>
               <div className="d-md-flex justify-content-between me-3 pb-3">
               <h6 className="text-success">$<del className="text-danger">{pd.priceOffer}</del> - ${pd.price}</h6>
              <Link to={`/placeOrder/${pd._id}`}> <button  className="btn btn-warning ">Details <i className="fas fa-luggage-cart"></i></button></Link>
               </div>
              </div>
           </div>
           </div>
           
           )
          }
          </div>
         
          
          
        </div>
        {/* <Footer></Footer> */}
        </div>
    );
};

export default Products;