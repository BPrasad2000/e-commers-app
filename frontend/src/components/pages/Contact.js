import React from "react";
import Layout from "../Layout/Layout";

function Contact() {
  return (
    <Layout title={"Contact Us"}>
      <div className="container">
        <h1>Here to help! </h1>
        <p>
          Your feedback and enquiry is important to us, so we will
          endeavour to respond to you at our earliest. Your feedback will help
          us continuously improve ourselves to make it better for you and our
          other valued Customers. In the meantime if your enquiry is urgent and
          you require immediate assistance, our Customer Care team is here to
          assist you (Refer below for other ways to contact us)
        </p>
        
<div className="contact-form">

<div className="mb-3 w-50">
<label htmlFor="exampleInputEmail1" className="form-label fs-5 fw-bold">Category</label>
<select className="form-select" aria-label="Default select example" >
<option disabled>select a category</option>
  <option value="1">Delivery Related</option>
  <option value="2">Genaral Enquiry</option>
  <option value="3">Order Related</option>
  <option value="4">Technical Problem</option>
  <option value="5">Outlet Related</option>
  <option value="6">Payment Related</option>
  <option value="7">Other</option>
 
</select>
</div>
<div className="row">
<div className="col">
  <div className="mb-3">
    <label htmlFor="exampleInputtext1" className="form-label fs-5 fw-bold">Fist Name</label>
    <input type="text" className="form-control" id="exampleInputtext1" />
  </div>
<div className="mb-3">
    <label htmlFor="exampleInputtext1" className="form-label fs-5 fw-bold">Last Name</label>
    <input type="text" className="form-control" id="exampleInputtext1" />
  </div>
  </div>
  <div className="col">
<div className="mb-3">
    <label htmlFor="exampleInputtext1" className="form-label fs-5 fw-bold">Address</label>
    <input type="text" className="form-control" id="exampleInputtext1" />
  </div>
<div className="mb-3">
    <label htmlFor="exampleInputtext1" className="form-label fs-5 fw-bold">Phone</label>
    <input type="text" className="form-control" id="exampleInputtext1" />
  </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label fs-5 fw-bold">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
<div className="mb-3">
    <label htmlFor="exampleInputtext1" className="form-label fs-5 fw-bold">Message</label>
    <textarea  className="form-control" id="exampleInputtext1" />
  </div>
  <div className="w-40 ">
  <button type="submit" className="add-cart-btn">Submit Feedback</button>
  </div>
  </div>
</div>
      </div>
    </Layout>
  );
}

export default Contact;
