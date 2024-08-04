import React from 'react';

import { Link } from 'react-router-dom';
import FacebookIcon from "../../assets/icons/facebook.svg"
import InstagramIcon from "../../assets/icons/instagram.svg"
import TwitterIcon from "../../assets/icons/twitter.svg"

const Footer = () => {
  return (
    <div className="footer">
        <div className='footer-section'>
          <h3>SHOP</h3>
          <ul>
            <li><Link to="#">کفش مردانه</Link></li>
            <li><Link to="#">کفش زنانه</Link></li>
            <li><Link to="#">کفش طفلانه</Link></li>
            <li><Link to="#">برای فروش</Link></li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>ABOUT US</h3>
          <ul>
            <li><Link to="#">داستان ما</Link></li>
            <li><Link to="#">تیم ما</Link></li>
            <li><Link to="#">مطبوعات</Link></li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>خدمات مشتریان</h3>
          <ul>
            <li><Link to="#">رسید شیپنگ</Link></li>
            <li><Link to="#">برگشت داده شده و تبدیلی</Link></li>
            <li><Link to="#">سوالات</Link></li>
            <li><Link to="#">با ما در تماس شودی</Link></li>
          </ul>
        </div>
        <div className='footer-socials'>
            <div className='social-icon-container'><Link to="#"><img src={FacebookIcon} alt="Twitter" /></Link></div>
            <div className='social-icon-container'><Link to="#"><img src={InstagramIcon} alt="Instagram" />
            </Link></div>
            <div className='social-icon-container'><Link to="#"><img src={TwitterIcon} alt="Twitter" /></Link></div>
        </div>
    </div>
  );
};

export default Footer;