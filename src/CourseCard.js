import React from 'react'
import displayRazorPay from './utils/PaymentGateway'

export default function CourseCard() {
  return (
    <div>
      <br></br>
      <h1 style={{textAlign:"center"}}>razorpay payment gateway</h1>
      <br></br>
      <button type='button' onClick={displayRazorPay} className='payment-button'>
        Buy product
      </button>
    </div>
  )
}