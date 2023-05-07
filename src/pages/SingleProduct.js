/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCart from '../components/ProductCart';
import Color from '../components/Color';
import { Link } from 'react-router-dom';
import ReactImageZoom from 'react-image-zoom';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: 'https://cdn.shopify.com/s/files/1/0024/5084/9907/files/Bremont_KingCharlesIII_Lifestyle_3_m_v2.webp?v=1682421680&width=1540',
  };

  const [orderedProduct, setorderedaproduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log('text', text);
    var textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };
  return (
    <div>
      <Meta title={'Product name'} />
      <BreadCrumb title="Product name" />
      <div className="main-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div className="">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0024/5084/9907/files/Bremont_KingCharlesIII_Lifestyle_3_m_v2.webp?v=1682421680&width=1540"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0024/5084/9907/files/Bremont_KingCharlesIII_Lifestyle_3_m_v2.webp?v=1682421680&width=1540"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0024/5084/9907/files/Bremont_KingCharlesIII_Lifestyle_3_m_v2.webp?v=1682421680&width=1540"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0024/5084/9907/files/Bremont_KingCharlesIII_Lifestyle_3_m_v2.webp?v=1682421680&width=1540"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-detail">
                <div className="border-bottom">
                  <h3 className="title">Kids headphones bulk 10 pack Multi</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">( 2 Reviews )</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write to Review
                  </a>
                </div>
                <div className=" py-3">
                  <div className="d-flex gap-10 algin-items-center my-2">
                    <h3 className="product-heading">Type:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 algin-items-center my-2">
                    <h3 className="product-heading">Brand:</h3>
                    <p className="product-data">Havells</p>
                  </div>
                  <div className="d-flex gap-10 algin-items-center my-2">
                    <h3 className="product-heading">Category:</h3>
                    <p className="product-data">watch</p>
                  </div>
                  <div className="d-flex gap-10 algin-items-center my-2">
                    <h3 className="product-heading">Tags:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 algin-items-center my-2">
                    <h3 className="product-heading">Availablity:</h3>
                    <p className="product-data">In stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size:</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-seconday">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-seconday">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-seconday">
                        L
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-seconday">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-seconday">
                        XXL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-seconday">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color:</h3>
                    <Color />
                  </div>
                  <div className="d-flex gap-15 flex-row mt-2 mb-3 align-items-center">
                    <h3 className="product-heading">Quantity:</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        id=""
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: '70px' }}
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0" type="submit">
                        ADD TO CART
                      </button>
                      <button className="button signup border-0">
                        BUY IT NOW
                      </button>
                    </div>
                  </div>
                  <div className="d-flex gap-10 algin-items-center my-2">
                    <div className="">
                      <a href="#">
                        <TbGitCompare className="fs-5 me-2" />
                        Add to Compare
                      </a>
                    </div>
                    <div className="">
                      <a href="#">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to wishlish
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column  my-3">
                    <h3 className="product-heading">Shipping and Returns:</h3>
                    <p className="product-data">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      <br />
                      Laboriosam dolorum cum architecto non laborum suscipit,
                      <br />
                      voluptas libero quisquam cumque quaerat aliquid commodi
                      <br />
                      esse et soluta! <b>Facerevitae nobis laborum nesciunt.</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 algin-items-center my-3">
                    <h3 className="product-heading">Copy Product Link:</h3>
                    <a
                      href="/javascript:void(0)"
                      onClick={() => {
                        copyToClipboard(
                          "https://cdn.shopify.com/s/files/1/0024/5084/9907/files/Bremont_KingCharlesIII_Lifestyle_3_m_v2.webp?v=1682421680&width=1540'"
                        );
                      }}
                    >
                      Copy product links
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  enim blanditiis saepe, asperiores tenetur quam sunt. Non,
                  pariatur minima earum ipsam sequi harum et qui numquam.
                  Quibusdam nemo tempora quas!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="reviews-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div className="">
                    <h4>Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div className="">
                      <Link className="text-dark text-decoration-underline">
                        Write a Reviews
                      </Link>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4 className="mb-2">Write a Reviews</h4>
                  <form action="" className="d-flex flex-column gap-15 mt-4">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                      />
                    </div>
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
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
                    <div className="d-flex justify-content-end">
                      <button className="button ">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorum iure nulla magnam odio quasi pariatur ipsam
                      temporibus iste recusandae error quos neque quae ipsum,
                      nobis et, incidunt necessitatibus facilis nisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 popular-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
