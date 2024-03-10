import React from "react";
// import footer_logo from "./../../assets/footer_logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              {/* <img src={footer_logo} alt="" /> */}
              <div className="footer-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100068924735662"
                  target="_blank"
                >
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://x.com/Anuradha_Dil?t=SJjkxrQf-EK4seoBkn7Asw&s=09"
                  target="_blank"
                >
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/anuradha_dilshan/"
                  target="_blank"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCVviu3NhADPZ-GFdRYaaBMw"
                  target="_blank"
                >
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/anuradha-dilshan-86a7771ab/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p>© {year} Developed by Yellow Wizards IT Solutions.</p>
      </div>
    </>
  );
};

export default Footer;
