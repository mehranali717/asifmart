import { Products } from "../../fakeData/data";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center">
              <h1 data-aos="fade-up">
                Expand Your Shopping Experience with Exclusive Deals
              </h1>
              <span className="tagline pb-4">
                Experience online shopping at its best! Enjoy top-quality
                products, speedy delivery, unbeatable prices and safe
                transactions. Our store prioritizes convenience, trust and
                exceptional support.
              </span>
              {/* <button className="default-btn">Shop Now</button> */}
            </div>
            <div className="col-lg-6 splitScreen" data-aos="zoom-in">
              <img src="../../assets/images/allProducts.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Marquee --> */}
      <section className="morquee">
        <h2 className="sectionDescription">Built on Trust and Experience</h2>
        <p className="tagline text-center">
          Showcasing a wide range of bestsellers, from electronics to
          lifestyle essentials.
        </p>
        <marquee behavior="scroll" direction="left" scrollamount="10" className="morqueeWrapper">
          <img src="../../assets/images/yardley_logo.png" alt="Image 1" />
          <img src="../../assets/images/fine.png" alt="Image 2" />
          <img src="../../assets/images/sanita.png" alt="Image 3" />
          <img src="../../assets/images/rasasi.png" alt="Image 4" />

          <img src="../../assets/images/yardley_logo.png" alt="Image 1" />
          <img src="../../assets/images/fine.png" alt="Image 2" />
          <img src="../../assets/images/sanita.png" alt="Image 3" />
          <img src="../../assets/images/rasasi.png" alt="Image 4" />

          <img src="../../assets/images/yardley_logo.png" alt="Image 1" />
          <img src="../../assets/images/fine.png" alt="Image 2" />
          <img src="../../assets/images/sanita.png" alt="Image 3" />
          <img src="../../assets/images/rasasi.png" alt="Image 4" />

          <img src="../../assets/images/yardley_logo.png" alt="Image 1" />
          <img src="../../assets/images/fine.png" alt="Image 2" />
          <img src="../../assets/images/sanita.png" alt="Image 3" />
          <img src="../../assets/images/rasasi.png" alt="Image 4" />
        </marquee>
      </section>

      {/* <!-- introduction section --> */}

      <section className="introduction">
        <div className="container">
         
          <h2 className="sectionTitle">Enhance Your Lifestyle with Top Picks</h2>
          <div className="row align-items-center" style={{rowGap:'15px'}}>
            <div className="col-lg-6 d-flex justify-content-center" data-aos="flip-right"  >
              <img
                src="../../assets/images/products.png"
                alt="introduction img"
                style={{maxWidth:'500px'}}
              />
            </div>
            <div className="col-lg-6">
              <p className="sectionDescription">
                Our store offers a diverse collection of high-quality
                products to simplify and enrich your everyday life. Explore
                trending gadgets, home appliances, fashion, and more!
              </p>
              <span className="secTagline">
                Shop top products on starting at just great deals today!
              </span>
              <div className="imgWrapper" data-aos="fade-right">
                <img src="../../assets/images/curve.png" alt="curvedLine" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- key features --> */}
      <section className="Features">
         <div className="outer-circle" data-aos="fade-right">
            <div className="inner-circle"></div>
          </div>
        <div className="container">
          <h2 className="sectionTitle">Discover Our Bestsellers</h2>
          <div className="row justify-content-center justify-content-md-between cardWrapper">
            {Products.map((product) => (
              <div className="card col-12 col-sm-6 col-md-4 " data-aos="fade-right">
                <img
                  src={product.path}
                  alt=""
                  style={{ height: 300, borderRadius: 10, margin: "auto" }}
                />
                <p className="sectionDescription text-center pt-4">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="outer-circle" data-aos="zoom-in">
            <div className="inner-circle"></div>
          </div>
          <h2 className="sectionTitle">Ready to Experience the Best?</h2>
          <p className="sectionDescription text-center">
            Discover how Fractal Effects has transformed trading strategies for
            users around the globe.
          </p>

          <div className="testimonial-slider" data-aos="fade-up">
            <div className="testimonial">
              <div className="user-image">
                <img src="../../assets/images/profile.png" alt="Olivia Cole" />
              </div>
              <div className="testimonial-content">
                <h3 className="subTitle text-left">Michael R.</h3>
                <p className="sectionDescription pb-0">
                  "This platform has completely transformed my trading. The
                  strategy, tools, and forecasts gave me the confidence to trade
                  smarter, and I’ve seen consistent returns ever since."
                </p>
              </div>
            </div>
            <div className="testimonial">
              <div className="user-image">
                <img src="../../assets/images/profile.png" alt="John Doe" />
              </div>
              <div className="testimonial-content">
                <h3 className="subTitle text-left">Sanjeev G.</h3>
                <p className="sectionDescription pb-0">
                  “Fractal Effects has completely changed the way I approach
                  trading. The insights are amazing!”
                </p>
              </div>
            </div>
            <div className="testimonial">
              <div className="user-image">
                <img src="../../assets/images/profile.png" alt="John Doe" />
              </div>
              <div className="testimonial-content">
                <h3 className="subTitle text-left">Sarah T. </h3>
                <p className="sectionDescription pb-0">
                  "The live sessions and custom indicator made all the
                  difference in my trading journey. I now enter trades with
                  confidence and precision, thanks to the clear strategies and
                  reliable forecasts."
                </p>
              </div>
            </div>
          </div>

          <div className="slider-controls">
            <button className="prev-slide">❮</button>
            <button className="next-slide">❯</button>
          </div>
        </div>
      </section>

      <section className="callToAction">
        <div className="container">
          <div className="contentInner" data-aos="fade-up">
            <h2 className="sectionTitle">Ready to Elevate Your Standard?</h2>
            <Link to="/contact-us" className="default-btn-change" style={{color:"black"}}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
