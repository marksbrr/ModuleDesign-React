import './about.scss';
import Conference from '../../images/conference.svg';

function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <p className="about-header">
          Why Enver Is The Best Choice?
        </p>
        <p className="about-description">
          Watch this one minute video so you understand why you should use our services!
        </p>
      </div>
      <div className="conference-wrapper">
        <img src={Conference} alt="conference" className="conference-image" />
      </div>
    </div>
  );
}

export default About;
