import React from 'react';
import { Spinner, Table } from 'react-bootstrap';

const MyProduct = () => {

    const kakaji = [
        {ami: 'ami'}
    ]
    return (
        <div>
            <div>
        <Table striped bordered hover>
    <thead>
      <tr>
        <th>SL</th>
        <th>Name</th>
        <th>Title</th>
        <th>Price</th>
        <th>City/Post</th>
        <th>Status</th>
        <th>Delete</th>
      </tr>
    </thead>

    {
      kakaji.map((datas,index)=> 
        <tbody key={datas._id}>
        <tr>
          <td>{(index+1)}</td>
          <td>{datas.name}</td>
          <td>{datas.title}</td>
          <td>$ {datas.price}</td>
          <td>{datas.city}<br/>{datas.post}</td>
          <td>{datas.status}</td>
          <td><button  className="btn btn-danger justify-content-end">Delete</button></td>
        </tr>
      </tbody> )
    }
   
  </Table>
  {/* {!isLoading ? <div className=" spin"> <Spinner animation="border" /></div>: ""} */}
   </div>
        </div>
    );
};

export default MyProduct;