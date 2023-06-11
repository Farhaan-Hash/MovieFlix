import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          MovieFlix may change, suspend, or discontinue any aspect of the
          MovieFlix APIs at any time, including the availability of any
          MovieFlix APIs. Also may also impose limits on certain features and
          services or restrict your access to parts or all of the MovieFlix APIs
          or the MovieFlix Web site without notice or liability.
          <h5>&copy; 2023 All Rights Reserved</h5>
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
