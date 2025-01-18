import React, { useState } from "react";
import emailjs from "emailjs-com";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const ContactUs = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    emailjs
      .sendForm(
        "go_get_to_online",
        "go_get_to_online_temp_id",
        e.target,
        "WCDAUoJ3UPmfMn64R"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.error("Email failed to send:", error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };
  return (
    <>
      <section className="contact_us_section">
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
          <h3 className="text-white text-center pb-3">Contact Us</h3>
          <form
            className="mx-auto rounded form d-flex flex-column "
            onSubmit={(e) => handleSubmit(e)}
          >
            <p className="d-flex flex-column">
              <label className="pb-2" style={{ color: "#ececec" }}>
                Name <span>*</span>
              </label>
              <input
                type="text"
                name="userName"
                className="input"
                placeholder="Enter Name"
              />
            </p>
            <p className="d-flex flex-column">
              <label className="pb-2" style={{ color: "#ececec" }}>
                Email <span>*</span>
              </label>
              <input
                type="text"
                name="userEmail"
                className="input"
                placeholder="Enter Email"
              />
            </p>
            <p className="d-flex flex-column">
              <label className="pb-2" style={{ color: "#ececec" }}>
                Contact Number <span>*</span>
              </label>
              <PhoneInput
                country={"uae"}
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber(phone)}
                placeholder="Enter Contact Number"
                inputStyle={{
                  backgroundColor: "var(--fill-primary-black)",
                  border: "none",
                  outline: "none",
                  padding: "3px 40px",
                  color: "white",
                  borderBottom: "1px solid transparent",
                  transition: "all 0.3s ease-in-out",
                  width: "100%",
                  boxShadow: "none",
                }}
                buttonStyle={{
                  backgroundColor: "var(--fill-primary-black)",
                  border: "none",
                  color: "white",
                  transition: "background-color 0.3s ease-in-out",
                }}
                buttonProps={{
                  onMouseEnter: (e) =>
                    (e.target.style.backgroundColor = "var(--hover-color)"),
                  onMouseLeave: (e) =>
                    (e.target.style.backgroundColor =
                      "var(--fill-primary-black)"),
                }}
                dropdownStyle={{
                  backgroundColor: "var(--fill-primary-black)",
                  color: "grey",
                  border: "1px solid #ccc",
                }}
                containerClass="input"
              />
            </p>

            <p className="d-flex flex-column">
              <label className="pb-2" style={{ color: "#ececec" }}>
                Message <span>*</span>
              </label>
              <textarea
                type="text"
                name="userMessage"
                className="input"
                placeholder="Enter Message"
              />
            </p>
            <button type="submit" className="default-btn p-3 align-self-end">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default ContactUs;
