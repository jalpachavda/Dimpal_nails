// import React from "react";

// const Contact = () => {
//   return (
//     <div className="contact__area section-padding pb-0" id="contact">
//       <div className="container">
//         <div className="row mb-60">
//           <div className="col-xl-5 col-lg-6">
//             <div className="contact__area-title">
//               <span className="subtitle__one">Contact</span>
//               <h2>Need Your any help Contact with Us</h2>
//             </div>

//             <div className="contact__area-info">
//               <div className="contact__area-info-item">
//                 <div className="contact__area-info-item-icon">
//                   <i className="far fa-phone-alt"></i>
//                 </div>
//                 <div className="contact__area-info-item-content">
//                   <span>Call Now</span>
//                   <h5>
//                     <a href="tel:9275120108">92751 20108</a>
//                   </h5>
//                 </div>
//               </div>

//               <div className="contact__area-info-item">
//                 <div className="contact__area-info-item-icon">
//                   <i class="fab fa-instagram"></i>
//                 </div>
//                 <div className="contact__area-info-item-content">
//                   <span>instagram</span>
//                   <h5>
//                     <a href="https://www.instagram.com/dimpal_nails_/">
//                       dimpal_nails_
//                     </a>
//                   </h5>
//                 </div>
//               </div>
//               <div className="contact__area-info-item">
//                 <div className="contact__area-info-item-icon">
//                   <i className="fas fa-envelope"></i>
//                 </div>
//                 <div className="contact__area-info-item-content">
//                   <span>Email</span>
//                   <h5>
//                     <a href="mailto: dimpal.nails@gmail.com">
//                       dimpal.nails@gmail.com
//                     </a>
//                   </h5>
//                 </div>
//               </div>

//               <div className="contact__area-info-item">
//                 <div className="contact__area-info-item-icon">
//                   <i className="far fa-map-marker-alt"></i>
//                 </div>
//                 <div className="contact__area-info-item-content">
//                   <span>Address</span>
//                   <h5>
//                     <a href="#contact">
//                       Umiya Township, New 80ft Road, Surendranagar
//                     </a>
//                   </h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-xl-12">
//             <div className="contact__area-bottom">
//               <div className="contact__area-bottom-form page">
//                 <form
//                   action="https://formsubmit.co/jalpachavda1211@gmail.com"
//                   method="POST"
//                 >
//                   <div className="row">
//                     <div className="col-sm-12 mb-30">
//                       <div className="contact__area-bottom-form-item">
//                         <input
//                           type="text"
//                           name="name"
//                           placeholder="Your Name"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div className="col-sm-12 mb-30">
//                       <div className="contact__area-bottom-form-item">
//                         <input
//                           type="text"
//                           name="Contact"
//                           placeholder="Contact Number"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div className="col-sm-12 mb-30">
//                       <div className="contact__area-bottom-form-item">
//                         <textarea
//                           name="message"
//                           rows="5"
//                           placeholder="Message"
//                         ></textarea>
//                       </div>
//                     </div>

//                     <div className="col-sm-12">
//                       <div className="contact__area-bottom-form-item">
//                         <button className="theme-banner-btn" type="submit">
//                           Submit Now
//                           <i className="far fa-angle-double-right"></i>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow numbers in contact
    if (name === "contact") {
      if (!/^\d*$/.test(value)) return; 
    }

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (formData.contact.length !== 10) {
      newErrors.contact = "Contact number must be exactly 10 digits";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // ✅ Success
    console.log("Submitted:", formData);
fetch("https://formsubmit.co/dimpal.nails@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(() => alert("Form submitted successfully"));
    toast.success("Form submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    // Reset form
    setFormData({ name: "", contact: "", message: "" });
    setErrors({});
  };

  return (
    <div className="contact__area section-padding pb-0" id="contact">
      <div className="container">
        <div className="row mb-60">
          <div className="col-xl-5 col-lg-6">
            <div className="contact__area-title">
              <span className="subtitle__one">Contact</span>
              <h2>Need Your any help Contact with Us</h2>
            </div>

            <div className="contact__area-info">
              <div className="contact__area-info-item">
                <div className="contact__area-info-item-icon">
                  <i className="far fa-phone-alt"></i>
                </div>
                <div className="contact__area-info-item-content">
                  <span>Call Now</span>
                  <h5>
                    <a href="tel:9275120108">92751 20108</a>
                  </h5>
                </div>
              </div>

              <div className="contact__area-info-item">
                <div className="contact__area-info-item-icon">
                  <i class="fab fa-instagram"></i>
                </div>
                <div className="contact__area-info-item-content">
                  <span>instagram</span>
                  <h5>
                    <a href="https://www.instagram.com/dimpal_nails_/">
                      dimpal_nails_
                    </a>
                  </h5>
                </div>
              </div>
              <div className="contact__area-info-item">
                <div className="contact__area-info-item-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact__area-info-item-content">
                  <span>Email</span>
                  <h5>
                    <a href="mailto: dimpal.nails@gmail.com">
                      dimpal.nails@gmail.com
                    </a>
                  </h5>
                </div>
              </div>

              <div className="contact__area-info-item">
                <div className="contact__area-info-item-icon">
                  <i className="far fa-map-marker-alt"></i>
                </div>
                <div className="contact__area-info-item-content">
                  <span>Address</span>
                  <h5>
                    <a href="#contact">
                      Umiya Township, New 80ft Road, Surendranagar
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="contact__area-bottom">
              <div className="contact__area-bottom-form page">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-12 mb-30">
                      <div className="contact__area-bottom-form-item">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        {errors.name && (
                          <p style={{ color: "red" }}>{errors.name}</p>
                        )}
                      </div>
                    </div>

                    <div className="col-sm-12 mb-30">
                      <div className="contact__area-bottom-form-item">
                        <input
                          type="text"
                          name="contact"
                          placeholder="Contact Number"
                          value={formData.contact}
                          onChange={handleChange}
                          maxLength={10}
                          required
                        />
                        {errors.contact && (
                          <p style={{ color: "red" }}>{errors.contact}</p>
                        )}
                      </div>
                    </div>

                    <div className="col-sm-12 mb-30">
                      <div className="contact__area-bottom-form-item">
                        <textarea
                          name="message"
                          rows="5"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="contact__area-bottom-form-item">
                        <button className="theme-banner-btn" type="submit">
                          Submit Now
                          <i className="far fa-angle-double-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Toastify container */}
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
