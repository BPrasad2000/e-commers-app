import React from "react";
import Layout from "../Layout/Layout";
import py from "../img/py.png"

function Policy() {
  return (
    <Layout title={"Policy"}>
      <div className="hg">
      <img src={py} className="img-fluid w-100 " alt="" style={{height:"50%"}}></img>
      </div>
      <h1 className="text-center">Privacy Policy</h1>
      <div className="container">
      <ol type="1">
        <li className="fs-3">Introduction</li>
        <p>
          Welcome to Mawella Super’s Privacy Policy. At Mawella Super, we are
          committed to protecting your privacy and ensuring the security of your
          personal information. This policy outlines how we collect, use, and
          safeguard your information when you visit our website.
        </p>

        <li className="fs-3"> Information Collection</li>
        <p>We collect information from you when you:</p>
        <ul type="disc">
          <li>Create an account</li>
          <li>Place an order</li>
        </ul>
        <p>The types of information we collect include:</p>
        <ul type="disc">
          <li>
            Personal identification information (name, email address, phone
            number)
          </li>
          <li>Payment information (credit card details)</li>
          <li>Order history and preferences</li>
        </ul>

        <li className="fs-3">Use of Information</li>
        <p>The information we collect is used to:</p>
        <ul type="disc">
          <li>Process and fulfill your orders </li>
          <li>Personalize your shopping experience</li>
          <li>Send you updates about your order</li>
          <li>Provide you with promotional offers and information</li>
          <li>Improve our website and services</li>
        </ul>

        <li className="fs-3"> Sharing of Information</li>
        <p>
          We do not sell or rent your personal information to third parties. We
          may share your information with:
        </p>
        <ul type="disc">
          <li>
            Third-party service providers (e.g., payment processors, delivery
            services)
          </li>
          <li>Legal authorities, if required by law</li>
        </ul>

        <li className="fs-3">Data Security</li>
        <p>
          We implement a variety of security measures to maintain the safety of
          your personal information. These include encryption, secure servers,
          and compliance with relevant data protection laws.
        </p>

        <li className="fs-3"> Cookies and Tracking Technologies</li>
        <p>
          We use cookies to enhance your browsing experience and gather data
          about site traffic and interaction. You can choose to disable cookies
          through your browser settings, but this may affect the functionality
          of our site.
        </p>

        <li className="fs-3"> Customer Rights</li>
        <p>You have the right to:</p>
        <ul type="disc">
          <li>Access your personal data</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of receiving promotional communications</li>
          </ul>
          <p>
            To exercise these rights, please contact us at
            <a href="/contact">Contact us</a>.
          </p>
       

        <li className="fs-3">Changes to the Privacy Policy</li>
        <p>
          We may update this privacy policy from time to time. We will notify
          you of any significant changes by posting the new policy on our
          website and updating the effective date.
        </p>

        <li className="fs-3">Contact Information</li>
        <p>
          If you have any questions or concerns about this privacy policy,
          please contact us at:
        </p>
        <ul type="disc">
          <li>Email:mawellasuper@gmail.com </li>
          <li>Phone: 0112623522 </li>
          <li>Address:467 Colombo - Galle Rd, Rathmalana</li>
        </ul>
        <p>By using our website, you consent to our privacy policy.</p>
      </ol>
      </div>
    </Layout>
  );
}

export default Policy;
