import React from 'react';
import './css/Footer.css';
const Footer = () =>{
  return(
    <div className = "row-fifth">
      <section className = "contact">
        <div className = "first-section">
          <h1>Contact</h1>
          <p>Questions? Go ahead.</p>
          <input type = "text" placeholder = "Name"/>
          <input type = "text" placeholder = "Email"/>
          <input type = "text" placeholder = "Subject"/>
          <input type = "text" placeholder = "Message"/>
          <buttton type = "button" className = "<a>">Send</buttton>
        </div>
        <div className = "second-section">
          <h1>About</h1>
          <a href = "#">About us</a>
          <a href = "#">We're hiring </a>
          <a href = "#">Support</a>
          <a href = "#">Find store</a>
          <a href = "#">Shipment</a>
          <a href = "#">Payment</a>
          <a href = "#">Gift card</a>
          <a href = "#">Return</a>
          <a href = "#">Help</a>
        </div>
        <div className = "third-section">
          <h1>Store</h1>
          <div className = "company-name"><a href="#"><i class="fas fa-map-marker-alt"></i><p>Company name</p></a></div>
          <div className = "phone-number"><a href="#"><i class="fas fa-phone"></i><p>(206)375-3901</p></a></div>
          <div className = "email-address"><a href="#"><i class="fas fa-envelope"></i><p>adilet@hotmail.com</p></a></div>
          <div className = "payment-options"><h2>We accept</h2></div>
          <div className = "amex"><a href="#"><i class="fab fa-cc-amex"></i><p>Amex</p></a></div>
          <div className = "credit-card"><a href="#"><i class="far fa-credit-card"></i><p>Credit Card</p></a></div>
          <div className = "footer-icons">
            <a href="#"><i class="fab fa-facebook-square"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-tiktok"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Footer;
