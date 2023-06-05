import React from 'react';

export default async function DisplayRazorPay() {
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
      alert("PAYMENT ID:" + response.razorpay_payment_id);
      alert("ORDER ID:" + response.razorpay_order_id);
    },
    prefill: {
      name: 'Sam',
      email: 'sam@example.com',
      contact: '9900149624',
    }
  };
  
  const paymentObject = new window.Razorpay(options)
  paymentObject.open();
};


// export default async function displayRazorPay() {
//   const data = await fetch("http://localhost:3000/razorpay", {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(), // Replace `orderDetails` with your actual order data
//   }).then((t) => t.json());
//   console.log(data);

//   const options = {
//     key: "rzp_test_wBU9x1cN57zN3f",
//     currency: data.currency,
//     amount: data.amount,
//     description: 'Wallet payment',
//     image: "http://localhost:3000/logo.jpg",
//     order_id: data.id,
//     handler: async function (response) {
//       console.log(response);
//       alert("PAYMENT ID:" + response.razorpay_payment_id);
//       alert("ORDER ID:" + response.razorpay_order_id);

//       // Create a new order based on payment details
//       const order = {
//         paymentId: response.razorpay_payment_id,
//         orderId: response.razorpay_order_id,
//         // Include any other relevant payment details
//       };
//       dispatch(createOrder(order)); // Assuming `dispatch` is available

//       // Redirect to the order success page or perform any other action
//       // window.location.href = "/order-success"; // Example of redirection
//     },
//     prefill: {
//       name: 'Sam',
//       email: 'sam@example.com',
//       contact: '9900149624',
//     }
//   };

//   const paymentObject = new window.Razorpay(options)
//   paymentObject.open();
// };
