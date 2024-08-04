import React from 'react';
import hero from "../assets/icons/header.jpg"

function Home() {
  return (
    <>
      <div className='hero'>
        <div className='hero-circle'> </div>
        <img className='hero-img' src={hero} alt="" />
      </div>
      <div className='hero-about'>
        <div>
          <p>همراه با تخفیف</p>
          <h3> فروشگاه لباس  مردانه</h3>
          <p>10 فیصد تخفیف</p>
        <button>استفاده تخفیف</button>
        </div>
      </div>  
      <div className='container'>
        <h1>بهترین محصولات</h1>
        <h1>از برترین کمپنی های جهان</h1>
        <h1>با نازل ترین قیمت</h1>
      </div>
    </>
  );
}

export default Home;