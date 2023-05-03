import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';

const ProductCart = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <div>
      <div
        className={` ${
          location.pathname === '/ourstore' ? `gr-${grid}` : 'col-3'
        }`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-images">
            <img
              src="images/watch.jpg"
              className="img-fluid"
              alt="product images"
            />
            <img
              src="images/watch-1.jpg"
              className="img-fluid"
              alt="product images"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">$100</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCart;
