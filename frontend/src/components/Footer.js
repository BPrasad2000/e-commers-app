import React from "react";
import { FaShop } from "react-icons/fa6";



const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light pt-4 pb-3">
        <div className="container  text-md-left">
          <div className="row  text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h4>
                <FaShop />
                Mawella Super
              </h4>
              <ul className="list-unstyled">
                <li>
                <i class="fa-solid fa-location-dot"></i>
                &nbsp; <u>467 Colombo - Galle Rd, Rathmalana</u>
                </li>
                <li>
                  <a className="Flink" href="">
                  <i class="fa-solid fa-phone"></i>
                  &nbsp; 0112623522
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h4>Quick Links</h4>
              <ul className="list-unstyled ">
                <li>
                  <a className="Flink" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="Flink" href="/about">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="Flink" href="/contact">
                    Contact Us
                  </a>
                </li>
              
                <li>
                  <a className="Flink" href="/policy">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h4>Categories</h4>
              <ul className="list-unstyled">
                <li>
                  <a className="Flink" href="">
                    Fruits
                  </a>
                </li>
                <li>
                  <a className="Flink" href="">
                    Vegetables
                  </a>
                </li>
                <li>
                  <a className="Flink" href="">
                    Homeware
                  </a>
                </li>
                <li>
                  <a className="Flink" href="">
                    Meats
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h4>Follow Us</h4>
              <ul className="list-unstyled">
                <li>
                  <a className="Flink" href="">
                    <i class="fa-brands fa-google"></i> Google
                  </a>
                </li>
                <li>
                  <a className="Flink" href="">
                    <i class="fa-brands fa-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a className="Flink" href="">
                    <i class="fa-brands fa-facebook"></i> Facebook
                  </a>
                </li>
                <li>
                  <a className="Flink" href="">
                    <i class="fa-brands fa-instagram"></i> Instragram
                  </a>
                </li>
                <li>
                  <a className="Flink" href="">
                    <i class="fa-brands fa-youtube"></i> YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="payitem text-end">
            <i class="fa-brands fa-cc-visa"></i>	
            <i class="fa-brands fa-cc-mastercard"></i>
            <i class="fa-brands fa-google-play"></i>	
            
            
          </div>
        </div>
      </footer>
      <div className="container-fluid text-center footer">
        <p>
          Mawella super Marketing Services (Pvt) Ltd. All Rights Reserved 2024
        </p>
      </div>
    </>
  );
};

export default Footer;
