import './home.scss';
import Arrow from '../../images/arrow.svg';
import Person from '../../images/person.svg';
import Person2 from '../../images/Person2.png';
import Button from '../button/button';

function Home() {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <p className="home-header">
          Build Your Awesome Platform
        </p>
        <p className="home-header-text">
          Enver studio is a digital studio that offers several services such as UI/UX Design to developers,
          we will provide the best service for those of  you who use our services.
        </p>
        <div className="home-button-wrapper">
          <Button title="Our services" imgSrc={Arrow} imgAlt="Arrow" />
        </div>
      </div>
      <div className="person-wrapper">
        <img
          // eslint-disable-next-line max-len
          src={Person}
          alt="person"
          className="person"
        />
      </div>
    </div>
  );
}

export default Home;
