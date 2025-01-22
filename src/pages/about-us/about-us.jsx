import { useEffect } from "react";

const AboutUs = () => {
   useEffect(()=>{
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])
  return (
    <section className="about_us_section">
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h2  className="sectionTitle">About Us</h2>
        <section style={{ marginBottom: "20px", textAlign: "justify" }}>
          <p className="sectionDescription">
            Welcome to <strong>gettoonline</strong>, your trusted partner in
            online retail. We are dedicated to showcasing top-tier products and
            brands, creating a seamless shopping experience for buyers
            worldwide. As a dynamic e-commerce company, we pride ourselves on
            bridging the gap between exceptional brands and satisfied customers.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 className="subTitle" style={{textAlign:"left"}}>Our Mission</h2>
          <p className="sectionDescription">
            At <strong>gettoonline</strong>, we aim to revolutionize the online
            marketplace by providing a curated selection of high-quality
            products. We are committed to building long-lasting partnerships
            with global brands, ensuring their products reach the right audience
            with the trust and credibility they deserve.
          </p>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2 className="subTitle" style={{textAlign:"left"}}>Our Vision</h2>
          <p className="sectionDescription">
            To be the most trusted e-commerce partner, fostering innovation,
            authenticity, and excellence in every transaction. We envision a
            future where <strong>gettoonline</strong> becomes the go-to platform
            for showcasing and selling products that inspire confidence and
            satisfaction.
          </p>
        </section>

        <section>
          <h2 className="subTitle" style={{textAlign:"left"}}>What Sets Us Apart</h2>
          <p className="sectionDescription">
            While competition thrives in the e-commerce world,{" "}
            <strong>gettoonline</strong> stands out by combining authenticity
            with cutting-edge strategy. Unlike others, we focus not only on
            selling but also on cultivating genuine relationships with the
            brands we represent. Our attention to detail, sincere
            professionalism, and commitment to showcasing brand integrity make
            us a preferred partner for global companies looking to excel in
            online marketplaces.
          </p>
        </section>
      </div>
    </section >
  );
};

export default AboutUs;
