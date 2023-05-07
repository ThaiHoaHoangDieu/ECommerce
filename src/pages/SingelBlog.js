import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const SingelBlog = () => {
  return (
    <div>
      <Meta title={'Dynamic Blog Name'} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <AiOutlineArrowLeft className="fs-4" />
                  Go back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src="/images/blog-1.jpg"
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nulla ducimus beatae quaerat voluptate id dicta dolor commodi
                  ea aliquid cum repellendus, ut iure sit ab enim veritatis
                  corporis consectetur autem. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. In ratione aliquam enim impedit
                  porro beatae perferendis voluptas deleniti atque aperiam
                  aliquid, doloribus quisquam veniam sequi quaerat ad sed
                  voluptatibus praesentium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingelBlog;
