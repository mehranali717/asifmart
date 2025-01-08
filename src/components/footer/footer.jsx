import { Link } from "react-router-dom"

const Footer = () => {
    return <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4 d-flex flex-column align-items-center align-items-md-start">
          <Link className="navbar-brand pb-4"  >
            Amazone Best Seller
          </Link>
          <p>
            Innovative trading platform powered by advanced algorithms and
            real-time insights.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-12">
          <h5>Connect with Us</h5>
          <ul className="list-inline social-icons">
            <li className="list-inline-item">
              <a href="" aria-label="youtube"><i className="fab fa-youtube"></i></a>
            </li>
            <li className="list-inline-item">
              <a href="" aria-label="instagram"><i className="fab fa-instagram"></i></a>
            </li>
            <li className="list-inline-item">
              {/* <a href="mailto:info@fractaleffects.com"><i className="fa-solid fa-envelope"></i></i></a> */}
            </li>
            
           
          </ul>

          
        </div>
      </div>
      <span className="line" data-aos="fade-right"></span>
      <div className="row mt-4">
        <div className="col text-center copyrights">
          <p>&copy; 2024 sif. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer