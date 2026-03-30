import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer">

        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>HRMS Portal</h3>
                <p>
                  Kolkata <br />
                    West Bengal
                  <br />
                  India 700035 <br />
                  <br />
                  <strong>Phone:</strong> +91 90******54
                  <br />
                  <strong>Email:</strong> admin@gmail.com
                  <br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/privacypolicy">Privacy policy</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Graphic Design</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">App Development</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>
                  Let's collaborate and strengthen our network for shared
                  success.
                </p>
                <div className="social-links mt-3">
                  <a href="https://x.com/Ayan_Biswas_96" target="_blank" rel="noopener noreferrer" className="twitter" title="X">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ verticalAlign: 'middle', paddingBottom: '2px' }}>
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.873 11.633Z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/ayan_69x/" target="_blank" rel="noopener noreferrer" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="https://github.com/Ayan69x" target="_blank" rel="noopener noreferrer" className="github">
                    <i className="bx bxl-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/ayan-biswas-80239138b/" target="_blank" rel="noopener noreferrer" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>HRMS Portal</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="#">HRMS Portal</a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
