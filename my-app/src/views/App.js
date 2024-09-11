import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Page/Layout";
import Home from "../Page/Home";
import Page from "../Page/Page";

import Partnership from "../Page/Partnership";
import Tour from "../Page/Tour";
import LoginForm from "../components/Login/LoginForm";
import RegisterForm from "../components/Register/RegisterForm";
import AOS from "aos";
import Blog from "../Page/Blog";
import BlogsDetails from "../Page/BlogDetails";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "../Page/About";
import ScrollToTop from "../utils/scrolltoTop";
import TourDetails from "../Page/TourDetails";
import ThankYou from "../Page/ThankYou";
import NorthernVN from "../Page/DesDetails/NorthVN";
import SouthernVN from "../Page/DesDetails/SouthVN";
import WestSide from "../Page/DesDetails/WestsideVN";
import World from "../Page/DesDetails/World";
import CentralVN from "../Page/DesDetails/CentralVN";
import SearchResultList from "../components/Search/SearchResults";
import Forgot from "../components/Forget/Forget";
import ResetPassword from "../components/Forget/ResetPass";
// import Paypal from "../../../Paypal";





function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />


        <Routes>


          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="page" element={<Page />} />
            <Route path="about" element={<About />} />
            <Route path="partnership" element={<Partnership />} />
            <Route path="tour" element={<Tour />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="/tours/:tourid" element={<TourDetails />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/northernVN" element={<NorthernVN />} />
            <Route path="/southVN" element={<SouthernVN />} />
            <Route path="/westsideVN" element={<WestSide />} />
            <Route path="/world" element={<World />} />
            <Route path="/centralVN" element={<CentralVN />} />
            <Route path="/search" element={<SearchResultList />} />
            {/* <Route path="/Paypal" element={<PaypaL />} /> */}








          </Route >
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/resetpassword" element={<ResetPassword />} />




        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App;
