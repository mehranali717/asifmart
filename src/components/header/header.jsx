import { Link } from "react-router-dom";
// import logo from "../../../assets/images/logo.jpg"
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-light py-3">
          <Link className="navbar-brand" to={"/"} style={{ width:'150px' }}>
            <img src="../../assets/images/logo.png" alt="logo" width="100%"/>
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div className=" " id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto  nav-list ">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
