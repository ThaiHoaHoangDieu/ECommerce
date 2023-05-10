import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Custominput from '../components/Custominput';

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
                <Custominput type="text" name="Name" placeholder="Name" />
                <Custominput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Phone"
                />
                <Custominput type="email" name="email" placeholder="Email" />
                <Custominput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
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
