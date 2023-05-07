import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blogs';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingelBlog from './pages/SingelBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefurnPolicy from './pages/RefurnPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsandConditions from './pages/TermsandConditions';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="blog/:id" element={<SingelBlog />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refurn-policy" element={<RefurnPolicy />} />
            <Route path="shippingpolicy" element={<ShippingPolicy />} />
            <Route path="terms-conditions" element={<TermsandConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
