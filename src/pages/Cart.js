import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
      <Meta title={'Cart'} />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src="/images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-75">
                    <p>abc</p>
                    <p>Size:S</p>
                    <p>Color: red</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$ 100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div className="">
                    <input
                      type="number"
                      className="form-control"
                      style={{ width: '75px' }}
                      min={1}
                      max={10}
                      name=""
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger " />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="">
                  <Link to="/product" className="button">
                    Continue to Shopping
                  </Link>
                </div>
                <div className="d-flex flex-column justify-content-end">
                  <h4>Subtotal: $ 1000</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  <div>
                    <Link to="/checkout" className="button">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
