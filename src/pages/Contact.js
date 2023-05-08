/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { AiOutlineHome, AiOutlineMail, AiOutlineInfo } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import Container from '../components/Container';

const Contact = () => {
  return (
    <div>
      <Meta title={'Contact'} />
      <BreadCrumb title="Contact" />
      <Container class1="contact-wrapper home-wrapper-2  py-5">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1010.5653565786462!2d109.19264091558301!3d12.252860305283047!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31706786b8be4fdb%3A0xf20e4560ded7474a!2zMjYgSG_DoG5nIFbEg24gVGjhu6UsIFjGsMahbmcgSHXDom4sIE5oYSBUcmFuZywgS2jDoW5oIEjDsmEgNjUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1682933363201!5m2!1svi!2s"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div className="">
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone number"
                    />
                  </div>
                  <div>
                    <textarea
                      type="text"
                      className="form-control w-100"
                      cols="30"
                      rows="10"
                      placeholder="Comments"
                    />
                  </div>
                  <div>
                    <button className="button b">Submits</button>
                  </div>
                </form>
              </div>
              <div className="">
                <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className=" mb-0">
                        NT: 26 Hoang Van Thu, Van Thanh, Nha Trang, Khanh Hoa
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BsTelephone className="fs-5" />
                      <a href="tel:0986099759">0986099759</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto: thaihoangdieu99@gmail.com">
                        thaihoangdieu99@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineInfo className="fs-5" />
                      <p className="mb-0"> Monday - Friday: 8h30 -17h30 </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
