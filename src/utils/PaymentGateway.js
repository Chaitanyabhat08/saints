import { useSelector } from 'react-redux';
import { createOrder } from '../actions/orderAction';
import { useDispatch } from 'react-redux';

export default async function DisplayRazorPay() {
  const dispatch = useDispatch();
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const orderInfo = sessionStorage.getItem("orderInfo");
  const data = await fetch("http://localhost:3000/razorpay", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: orderInfo,
  }).then((t) => t.json());
  console.log(data);
    
  const options = {
    key: "rzp_test_wBU9x1cN57zN3f",
    currency: data.currency,
    amount: data.amount,
    description: 'Wallet payment',
    image: "http://localhost:3000/logo.jpg",
    order_id: data.id,
    handler: function (response) {
      console.log(response);
      const paymentInfo = {
        order_id: response.razorpay_order_id,
        payment_id: response.razorpay_payment_id,
        razorpay_sign: response.razorpay_signature,
        status: "Created",
      }
      const payload = {
        shippingInfo,
        orderItems:cartItems,
        paymentInfo,
        itemsPrice: orderInfo.subtotal,
        taxPrice: orderInfo.tax,
        shippingPrice: orderInfo.shippingCharges,
        totalPrice: orderInfo.totalPrice,
      }
      dispatch(createOrder(payload))
    },
    prefill: {
      name: user.name,
      email: user.email,
      contact: user.phoneNumber,
    }
  };
  
  const paymentObject = new window.Razorpay(options)
  paymentObject.open();
};
