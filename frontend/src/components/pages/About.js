import React from "react";
import Layout from "../Layout/Layout";

function About() {
  return (
    <Layout title={"About us"}>
      <h1 className="text-center">About Us</h1>
      <div className="container">
        <p className="fs-2 fw-bold">Welcome to Mawella super</p>
        <p>
          At Mawella Super, we are dedicated to bringing you the freshest and
          highest quality products at competitive prices. Our online supermarket
          offers a convenient and hassle-free shopping experience, allowing you
          to find everything you need from the comfort of your home.
        </p>
        <p className="fs-3">Our Mission and Values</p>
        <p>
          Our mission is simple: to provide our customers with the best possible
          shopping experience. We are committed to:
        </p>
        <li>Quality: Offering only the freshest and finest products.</li>
        <li>
          Customer Service: Ensuring every customer feels valued and satisfied.
        </li>
        <li>Sustainability: Promoting eco-friendly practices and products.</li>
        <li>
          Community: Supporting local suppliers and giving back to the
          community.
        </li>
        <p className="fs-3">Our Products and Services</p>
        <p>
          At Mawella Super, you will find a wide range of products, including:
        </p>
        <li>Fresh produce</li>
        <li>Organic and gluten-free options</li>
        <li>Dairy and bakery items</li>
        <li>Meat and seafood</li>
        <li>Household essentials</li>
        <li>Specialty and gourmet foods</li>
        <p>
          We offer convenient delivery options to ensure your groceries arrive
          fresh and on time. Additionally, our user-friendly website makes it
          easy to browse, select, and purchase your items.
        </p>
      </div>
    </Layout>
  );
}

export default About;
