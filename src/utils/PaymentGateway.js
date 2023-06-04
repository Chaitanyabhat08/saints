export default async function displayRazorPay() {
  const data = await fetch("http://localhost:3000/razorpay", {
    method: 'POST',
  }).then((t) => t.json())
  console.log(data);
    
  const options = {
    key: "rzp_test_wBU9x1cN57zN3f",
    currency: data.currency,
    amount: data.amount,
    description: 'Wallet payment',
    image: "http://localhost:3000/logo.jpg",
    order_id: data.id,
    handler: function (response) {
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
