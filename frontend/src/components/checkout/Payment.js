import React, { useState } from 'react';

function Payment() {

  return (
    <div className='checkout-payment'>
      <h1>PAYMENT OPTIONS</h1>
      <div className="line-divider"></div>
      <div className="payment-option">
        <label>
          <input type="radio" value="creditCard" checked readOnly />
          کریدت کارت &#40;Free&#41;
        </label>  
      </div>
      <p>شما برای تکمیل پرداخت تان به پیپال برگشت داده میشوید</p>
    </div>
  )
}

export default Payment;
