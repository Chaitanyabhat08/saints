import React,{useState, useEffect} from 'react';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import './Orders.css'
import { Button, Pagination } from 'antd';

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const fetchData = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/v1/admin/order/getAllOrders');
      setAllOrders(data.orders);

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Perform search based on searchQuery
    const filteredProducts = allOrders.filter(order =>
      order._id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.user.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setAllOrders(filteredProducts);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    fetchData();
  };
  return (
    <div>
      <h1>Orders</h1>
      <div className='headerPart' style={{ display: "flex" }}>
        <div style={{ margin: 0, "marginTop": "25px" }}>
          <form style={{ display: 'flex', position: 'fixed', right: 0 }}>
            <input
              style={{ margin: 0, height: '2.4vmax', width: '18vmax' }}
              placeholder='Enter OrderId'
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Button
              type='button'
              style={{
                backgroundColor: 'gray',
                color: 'whitesmoke',
                width: '60px',
                margin: 0,
                marginLeft: '5px',
              }}
              onClick={handleSearch}
            >
              <SearchIcon />
            </Button>
            <Button
              type='button'
              style={{
                backgroundColor: 'gray',
                color: 'whitesmoke',
                width: '90px',
                margin: 0,
                marginLeft: '5px',
              }}
              onClick={handleClearSearch}
            >
              Clear
            </Button>
          </form>
        </div>
        </div>
      <div>
        {allOrders.map((order,index) =>
        (
          <div style={{ color: "black", display: "flex", flexDirection:"column" }}>
          <div class="card-header">
              <h3>Order Details</h3>
              <p>Order ID:{order._id}</p>
          </div>
          <div>
          <p>Ordered Items</p>
              <div className="cartItems" style={{ width: "100%", display: 'flex' }}>
                <div style={{ width: "100%", display: 'flex', justifyContent:'space-between' }}>
                  <div className="card-stack">
                    {order.cartItems.map((item, itemIndex) => (
                      <div
                        className={`EachCard ${itemIndex === hoveredIndex ? 'hovered' : ''}`}
                        key={itemIndex}
                        style={{ position: 'relative', left: `${itemIndex * -110}px`, zIndex: itemIndex }}
                        onMouseEnter={() => setHoveredIndex(itemIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <img src={item.image} alt="Productpic" />
                        <div className="card-body">
                          <h6>{item.name}</h6>
                          <h6>Price: ₹{item.price}</h6>
                          <h6>Quantity: {item.quantity}</h6>
                          <p>ProductID: {item.product}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="paymentInfoCard">
                    <div className="card-body">
                      <h5>Payment Details</h5>
                      <h6>Razorpay ID:<p>{order.paymentInfo.orderId}</p></h6>
                      <h6>Order Date:<p>{new Date(order.paymentInfo.orderDate).toLocaleString()}</p></h6>
                      <h6>Subtotal:${order.paymentInfo.subtotal}</h6>
                      <h6>Tax:${order.paymentInfo.tax}</h6>
                      <h6>Shipping Charges:${order.paymentInfo.shippingCharges}</h6>
                      <h6>Total Price: ${order.paymentInfo.totalPrice}</h6>
                      </div>
                  </div>
                  <div className="shippingInfoCard">
                    <div className="card-body">
                      <h5>Customer Info</h5>
                      <h6>User:{order.user}</h6>
                      <h6>Phone No.:${order.shippingInfo.phoneNo}</h6>
                      <h6>Address lane:{order.shippingInfo.address}</h6>
                      <h6>City:{order.shippingInfo.city}</h6>
                      <h6>PinCode: ${order.shippingInfo.pinCode}</h6>
                      <h6>State :${order.shippingInfo.state}</h6>
                      <h6>Country:${order.shippingInfo.country}</h6>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </div>
        )
        )}
      </div>
    </div>
  )
}
export default Orders;