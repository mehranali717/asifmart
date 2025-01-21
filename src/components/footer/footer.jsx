import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone  } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const phoneNumber = "971556255072";
  const message = "Hello! I would like to get in touch."; 
  return (
    <>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 d-flex flex-column align-items-center align-items-md-start" style={{rowGap:'10px'}}>
          <Link className="navbar-brand" to={"/"} style={{ width:'150px' }}>
            <img src="../../assets/images/logo.png" alt="logo" width="100%"/>
          </Link>
            <p>
              Innovative trading platform powered by advanced algorithms and
              real-time insights.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h5>Connect with Us</h5>
            <ul className="list-inline social-icons">
              <li className="list-inline-item d-flex align-items-center ">
                <FontAwesomeIcon icon={faPhone} size="1x" className="me-1" />
                <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} 
                target="_blank"
                rel="noopener noreferrer"
            >
                  +971 55 625 5072
                </a>
              </li>
            </ul>
          </div>
        </div>
        <span className="line" data-aos="fade-right"></span>
        <div className="row mt-4">
          <div className="col text-center copyrights">
            <p>&copy; 2024 Asif. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: "1000",
        }}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
    </>
  );
};

export default Footer;
