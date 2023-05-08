import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';

const Signup = () => {
  return (
    <div>
      <Meta title={'SignUp'} />
      <BreadCrumb title="Sign Up" />
      <Container className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="text"
                    name="Name"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile Phone"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <div className="mt-1 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
