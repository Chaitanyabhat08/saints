import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './DashBoard.css';
import BarChart from './component/BarChart';
import DoughnutChart from './component/DoughtnutChart';

const DashBoard = () => {
  const [totalProducts, setTotalProducts] = useState([]);
  const [totalUsers, setTotalUsers] = useState([]);
  const [totalOrders, setTotalOrders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/products/getAllProducts');
        setTotalProducts(response.data.products);
        const users = await axios.get('http://localhost:3000/api/v1/admin/getAllUsers');
        setTotalUsers(users.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Fragment>
      <div className='DashboardDiv'>
        <h1>Welcome Admin!</h1>
        <div className='Cards'>
          <div className="card" style={{ width: "16rem", height: "9rem", color: "gray", textAlign: "center" }}>
            <img src="/acquisition.png" alt='totalsales' />
            <div><h5 className="card-title">Total Sales</h5></div>
          </div>
          <div className="card" style={{ width: "16rem", height: "9rem", color: "gray", textAlign: "center" }}>
            <img src="/shopping-bag.png" alt='totalOrders' />
            <h5 className="card-title">Total Orders</h5>
          </div>
          <div className="card" style={{ width: "16rem", height: "9rem", color: "gray", textAlign: "center" }}>
            <img src="/products.png" alt='total Products' />
            <h5 className="card-title">Total Products</h5>
            <h4>{totalProducts.length}</h4>
          </div>
          <div className="card" style={{ width: "16rem", height: "9rem", color: "gray", textAlign: "center" }}>
            <img src="/people.png" alt='totalUsers' />
            <h5 className="card-title">Total Users</h5>
            <h4>{totalUsers.length}</h4>
          </div>
        </div>
        <div className='Chartsec'>
          <BarChart/>
          <DoughnutChart/>
        </div>
        <div className="ordercard" style={{ width: "100%", height: "9rem", color: "gray", textAlign: "center" }}>
          <h2 style={{ textAlign: "center" }}>Latest Orders</h2>
          <hr/>
          <table className="order-table" style={{ width: "100%", color: "gray", textAlign: "center" }}>
            <thead>
              <tr>
                <th>User</th>
                <th>User Email</th>
                <th>Price</th>
                <th>Payment Done At</th>
                <th>Order Created At</th>
                <th>Go to Order</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
        <div className="ordercard" style={{ color: "gray", textAlign: "center" }}>
          <h2 style={{ textAlign: "center" }}>Latest Users</h2>
          <hr />
            <table className="order-table" cellspacing="1" cellpadding="1"  style={{ width: "100%", color: "gray", textAlign: "center"}}>
              <thead>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Role</th>
                <th>Avatar</th>
              </thead>
              <tbody>
                {totalUsers.slice(0, 4).reverse().map((user) => (
                  <tr key={user._id} style={{ overflow: "scroll" }}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.role}</td>
                    <td><img src={user.avatar.url} alt="user img" style={{
                      width: "40px", height:"40px", borderRadius:"50%"}} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </Fragment>
  );
};

export default DashBoard;
