import './footer.scss';
import logo from '../../images/enver-logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="footer-logo" />
        Enver
      </div>
      <div className="footer-nav">
        <p className="footer-nav-text">Support</p>
        <p className="footer-nav-text">Privacy Policy</p>
        <p className="footer-nav-text">Terms and Conditions</p>
      </div>
      <div className="copyright-wrapper">
        <p className="copyright-text">© 2020 Enver, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
