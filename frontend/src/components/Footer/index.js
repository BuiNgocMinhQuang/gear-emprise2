import "./Footer.scss";
import logo from "../../assets/images/logo.svg";
import fbicon from "../../assets/images/fb-icon.svg";
import insicon from "../../assets/images/instagram-icon.svg";
import yticon from "../../assets/images/youtube-icon.svg";
import twicon from "../../assets/images/twitter-icon.svg";
import Button from "react-bootstrap/Button";
function Footer() {
  return (
    <div className="footer">
      <div className="colum">
        <div className="colum-footer">
          <h4>PRODUCTS</h4>
          <ul>
            <a href="/">
              <li>Gaming PC</li>
            </a>
            <a href="/">
              <li>Gaming Laptops</li>
            </a>
            <a href="/">
              <li>Office PC</li>
            </a>
            <a href="/">
              <li>GearShop</li>
            </a>
          </ul>
        </div>
        <div className="colum-footer">
          <h4>COMPANY</h4>
          <ul>
            <a href="/">
              <li>About</li>
            </a>
            <a href="/">
              <li>Contact</li>
            </a>
            <a href="/">
              <li>Private Policy</li>
            </a>
            <a href="/">
              <li>Careers</li>
            </a>
          </ul>
        </div>
        <div className="colum-footer">
          <h4>REVIEWS</h4>
          <ul>
            <a href="/">
              <li>News</li>
            </a>
            <a href="/">
              <li>Testimonials</li>
            </a>
          </ul>
        </div>
        <div className="colum-footer">
          <h4>SUPPORT</h4>
          <ul>
            <a href="/">
              <li>Service</li>
            </a>
            <a href="/">
              <li>G FAQs</li>
            </a>
          </ul>
        </div>
        <div className="colum-footer">
          <h4>COMUNITY</h4>
          <ul>
            <a href="/">
              <li>Blog</li>
            </a>
          </ul>
        </div>
        <div className="colum-footer">
          <h4>PRODUCTS</h4>
          <p>Get access to exclusive offers!</p>
          <Button variant="outline-secondary" className="btn-subscribe">
            SUBSCRIBE
          </Button>
        </div>
      </div>
      <div className="white-line"></div>
      <div className="bot-foot">
        <div className="foot-icon">
          <a href="/">
            <img src={twicon} alt="Logo" />
          </a>
          <a href="/">
            <img src={fbicon} alt="Logo" />
          </a>

          <a href="/">
            <img src={insicon} alt="Logo" />
          </a>

          <a href="/">
            <img src={yticon} alt="Logo" />
          </a>
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="copy-right">
          <p>© 2022 ORIGIN PC Corporation. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
