import React from 'react'
import DisplayRazorPay from './utils/PaymentGateway'

export default function CourseCard() {
  return (
    <div>
      <br></br>
      <h1 style={{textAlign:"center"}}>razorpay payment gateway</h1>
      <br></br>
      <button type='button' onClick={DisplayRazorPay} className='payment-button'>
        Buy product
      </button>
    </div>
  )
}