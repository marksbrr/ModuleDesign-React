/* eslint-disable jsx-a11y/anchor-is-valid */
import './header.scss';
import logo from '../../images/enver-logo.png';

const Header = () => {
  const a = 5;
  return (
    <header className="header">
      <div className="logo-wrapper">
        <img
          src={logo}
          alt="enver-logo"
          className="enver-logo"
        />
        <span className="logo-text">Enver</span>
      </div>
      <div className="nav">
        <a href="" className="nav-text">Home</a>
        <a href="" className="nav-text">Services</a>
        <a href="" className="nav-text">Our Project</a>
        <a href="" className="nav-text">About us</a>
      </div>
      <div>
        <button className="nav-button">Contact us</button>
      </div>
    </header>

  );
};

export default Header;
