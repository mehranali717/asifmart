import { Products } from "../../fakeData/data";
const Home = () => {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section class="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column align-items-center">
              <h1 data-aos="fade-up">
                Expand Your Shopping Experience with Exclusive Amazon Deals
              </h1>
              <span class="tagline pb-4">
                Discover premium products, unbeatable offers, and exclusive
                Amazon collections curated just for you.
              </span>
              <button class="default-btn">Shop Now on Amazon</button>
            </div>
            <div class="col-lg-6 splitScreen" data-aos="zoom-in">
              <img src="../../assets/images/allProducts.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Marquee --> */}
      <section class="morquee">
        <h2 class="sectionDescription">Built on Trust and Experience</h2>
        <p className="tagline text-center">
          Showcasing a wide range of Amazon bestsellers, from electronics to
          lifestyle essentials.
        </p>
        <marquee behavior="scroll" direction="left" scrollamount="30">
          <img src="../../assets/images/rasasi.png" alt="Image 1" />
          <img src="../../assets/images/noon.svg" alt="Image 2" />
          <img src="../../assets/images/sanita.svg" alt="Image 3" />
          <img src="../../assets/images/rasasi.png" alt="Image 1" />
          <img src="../../assets/images/noon.svg" alt="Image 2" />
          <img src="../../assets/images/sanita.svg" alt="Image 3" />
          <img src="../../assets/images/rasasi.png" alt="Image 1" />
          <img src="../../assets/images/noon.svg" alt="Image 2" />
          <img src="../../assets/images/sanita.svg" alt="Image 3" />
        </marquee>
      </section>

      {/* <!-- introduction section --> */}

      <section class="introduction">
        <div class="container">
          <div class="outer-circle" data-aos="fade-right">
            <div class="inner-circle"></div>
          </div>
          <h2 class="sectionTitle">Enhance Your Lifestyle with Top Picks</h2>
          <div class="row align-items-center">
            <div class="col-lg-6" data-aos="flip-right">
              <img
                src="../../assets/images/introImg.png"
                alt="introduction img"
              />
            </div>
            <div class="col-lg-6">
              <p class="sectionDescription">
                Our Amazon store offers a diverse collection of high-quality
                products to simplify and enrich your everyday life. Explore
                trending gadgets, home appliances, fashion, and more!
              </p>
              <span class="secTagline">
                Shop top products on Amazon starting at just great deals today!
              </span>
              <div class="imgWrapper" data-aos="fade-right">
                <img src="../../assets/images/curve.png" alt="curvedLine" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- key features --> */}
      <section class="Features">
        <div class="container">
          <h2 class="sectionTitle">Discover Our Bestsellers</h2>
          <div class="row justify-content-center justify-content-md-between cardWrapper">
            {Products.map((product) => (
              <div class="card col-12 col-sm-6 col-md-4 " data-aos="fade-right">
                  <img src={product.path} alt="" style={{ height: 300, borderRadius:10, margin : 'auto' }} />
                <p class="sectionDescription text-center pt-4">
                  {product.description}
                </p>
                {/* <div className="d-flex justify-content-between w-full">
                  <button class="default-btn ">Add to Cart</button>
                  <button class="default-btn ">View on Amazon</button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="testimonials">
        <div class="container">
          <div class="outer-circle" data-aos="zoom-in">
            <div class="inner-circle"></div>
          </div>
          <h2 class="sectionTitle">Ready to Experience the Best?</h2>
          <p class="sectionDescription text-center">
            Discover how Fractal Effects has transformed trading strategies for
            users around the globe.
          </p>

          <div class="testimonial-slider" data-aos="fade-up">
            <div class="testimonial">
              <div class="user-image">
                <img src="../../assets/images/profile.png" alt="Olivia Cole" />
              </div>
              <div class="testimonial-content">
                <h3 class="subTitle text-left">Michael R.</h3>
                <p class="sectionDescription pb-0">
                  "This platform has completely transformed my trading. The
                  strategy, tools, and forecasts gave me the confidence to trade
                  smarter, and I’ve seen consistent returns ever since."
                </p>
              </div>
            </div>
            <div class="testimonial">
              <div class="user-image">
                <img src="../../assets/images/profile.png" alt="John Doe" />
              </div>
              <div class="testimonial-content">
                <h3 class="subTitle text-left">Sanjeev G.</h3>
                <p class="sectionDescription pb-0">
                  “Fractal Effects has completely changed the way I approach
                  trading. The insights are amazing!”
                </p>
              </div>
            </div>
            <div class="testimonial">
              <div class="user-image">
                <img src="../../assets/images/profile.png" alt="John Doe" />
              </div>
              <div class="testimonial-content">
                <h3 class="subTitle text-left">Sarah T. </h3>
                <p class="sectionDescription pb-0">
                  "The live sessions and custom indicator made all the
                  difference in my trading journey. I now enter trades with
                  confidence and precision, thanks to the clear strategies and
                  reliable forecasts."
                </p>
              </div>
            </div>
          </div>

          <div class="slider-controls">
            <button class="prev-slide">❮</button>
            <button class="next-slide">❯</button>
          </div>
        </div>
      </section>

      <section class="callToAction">
        <div class="container">
          <div class="contentInner" data-aos="fade-up">
            <h2 class="sectionTitle">Ready to Elevate Your Standard?</h2>
            <button class="default-btn-change">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
