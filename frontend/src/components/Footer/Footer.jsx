import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Tomato is your go-to source for the freshest recipes, cooking tips,
            and food inspiration. From farm to table, we’re committed to
            bringing you the best of culinary delights. Stay connected with us
            on social media for the latest updates and delicious ideas.{" "}
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+44-102-8337-2987</li>
            <li>contact@tomato.co.uk</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tomato.co.uk - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
