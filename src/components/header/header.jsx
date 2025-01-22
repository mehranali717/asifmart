import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../../../assets/images/logo.jpg"
const Header = () => {
  const [prevState, setPrevState] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 992);

  const toggleMenu = (prevState) => {
    setPrevState(prevState);
  };
  console.log({ prevState });
  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 992);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const showMenu = prevState || isLgScreen;

  return (
    <header>
      <div className="container-fluid container-lg">
        <nav className="navbar navbar-light pt-2 pb-1 d-flex align-items-center">
          {/* <div className="d-flex align-items-center justify-content-between logoWrapper"> */}
            <Link className="navbar-brand" to={"/"}>
              <img src="../../assets/images/logo.png" alt="logo" width="100%" />
            </Link>
            
          {/* </div> */}

          {showMenu && (
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
          )}
          <button
              className={`navbar-toggler d-lg-none ${prevState ? "open" : ""}`}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={prevState}
              aria-label="Toggle navigation"
              onClick={() => toggleMenu(!prevState)}
            >
              <span className="line"></span>
            </button>
        </nav>

      </div>
    </header>
  );
};
export default Header;
