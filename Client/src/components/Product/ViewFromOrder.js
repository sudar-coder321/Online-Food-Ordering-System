import React, { useEffect, useState, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
// import { Cart } from './components/Product/Cart';
import Axios from 'axios';
import styled from 'styled-components';
import './Products.css';
import './App.css';
import './orders.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
  MDBIcon,
  MDBContainer,
} from 'mdbreact';

const searchBarStyle = {
  margin: '35px',
  position: 'center',
  size: '25px',
};

export const ViewFromOrder = () => {
  const [productList, setProductList] = useState([]);
  const [image, setImage] = useState('');
  const [hotelList, setHotelList] = useState([]);
  const [pname, setpname] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [hotelName, setHotelName] = useState(localStorage.getItem('pid'));
  const [role, setRole] = useState(localStorage.getItem('role'));
  console.log(hotelName);
  useEffect(() => {
    Axios.get(`http://localhost:3001/products/${hotelName}`)
      .then((response) => {
        console.log(response.data);
        setImage(response.data[0].imageurl);
        setpname(response.data[0].product_name);
        setDesc(response.data[0].description);
        setPrice(response.data[0].price);
        setHotelList(response.data[1]);
        localStorage.setItem('hname', response.data[0].hotel_name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="OrderStyling">
      <ToastContainer position='top-center' />

      <div style={searchBarStyle}>
      
      </div>

      <div className='product-imagestyle'>
        <div className='btn btn-block btn-success m-2'>
          <h3>Product ordered</h3>
        </div>
        <div className='container-fluid d-flex justify-content-center'>
          <table className='table'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>Image</th>
                <th scope='col'>Product_Name</th>
                <th scope='col'>Description</th>
                <th scope='col'>Price</th>
                <th></th>

                <th></th>
              </tr>
            </thead>
            <tbody className='text-white'>
              <tr style={{ height: '3px' }}>
                <td>
                  <img
                    src={image}
                    alt=''
                    style={{ height: '120px', width: '120px' }}
                  />
                </td>
                <td>{pname}</td>
                <td>{desc}</td>
                <td>{price}</td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
