import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import useAuth from '../Hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    // const {user,logOut}=useAuth();
    return (
       
       <div >
      

        
        <div>
        <Navbar style={{backgroundColor: '#7a454b' }} expand="lg">
  <Container  >
  <img style={{width: '80px' }} src="https://i.ibb.co/yQn0LtZ/Simple-Shoes-Logo-removebg-preview.png" alt="" />
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse style={{flexGrow: 0}}>
      <Nav
        className=" my-2 my-lg-0 "
        style={{ maxHeight: '100px' }}
        navbarScroll
      >

      <div className="between">
      <div className=" align">
       <Link className="mx-2 text-decoration-none bold text-white"  to="/home">Home</Link>
        <div className="links">
          <Link  className="mx-2 text-white  text-decoration-none" to="/addProduct">add Product</Link>
        
        <Link  className="mx-2 text-white text-decoration-none" to="/myProduct">my Products</Link>
        
        <Link  className="mx-2 text-white text-decoration-none" to="/orders">Orders</Link>
          
          </div>
       </div>

         
        
         <div>
         {/* <Link to="/home"> <button onClick={logOut} className="mx-2 btn-sm btn-white  text-decoration-none bg-danger text-white border-0">logout</button></Link>  */}
         <Link className="mx-2 text-decoration-none text-white" to="/login">login</Link>
         </div>
      </div>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>

       </div>
    );
};

export default Navigation;