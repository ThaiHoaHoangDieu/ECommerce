import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsFacebook,
  BsInstagram,
} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="">
                <address className="text-white fs-6">
                  NT: 26 Hoang Van Thu, <br />
                  Van Thanh,
                  <br /> Nha Trang, Khanh Hoa
                </address>
                <a
                  href="tel:0986099759"
                  className="text-white mt-3 d-block mb-1"
                >
                  0986099759
                </a>
                <a
                  href="mailto: thaihoangdieu99@gmail.com"
                  className="text-white mt-2 d-block mb-0"
                >
                  thaihoangdieu99@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <Link className="text-white" to="">
                    <BsLinkedin className="fs-5" />
                  </Link>
                  <Link className="text-white" to="">
                    <BsGithub className="fs-5" />
                  </Link>
                  <Link className="text-white" to="">
                    <BsYoutube className="fs-5" />
                  </Link>
                  <Link className="text-white" to="">
                    <BsFacebook className="fs-5" />
                  </Link>
                  <Link className="text-white" to="">
                    <BsInstagram className="fs-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Infomation</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Concact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Link</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">
                &copy:{new Date().getFullYear()}:Powered by Thai Hoa Hoang Dieu
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
