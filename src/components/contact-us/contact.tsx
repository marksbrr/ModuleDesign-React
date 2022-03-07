import './contact.scss';
import Plus from '../../images/Plus.svg';
import Circles from '../../images/Circles.svg';
import Button from '../button/button';

function Contact() {
  return (
    <div className="contact-container">
      <div className="icon-wrapper">
        <img src={Plus} alt="Plus" className="plus-icon" />
      </div>
      <div className="contact-wrapper">
        <div className="description-header">
          Contact us for the service you want to use
        </div>
        <div className="contact-button-wrapper">
          <Button title="Contact us" />
        </div>
      </div>
      <div>
        <img src={Circles} alt="Circles" className="circles-icon" />
      </div>
    </div>
  );
}

export default Contact;
