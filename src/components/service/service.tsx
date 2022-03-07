import './service.scss';
import Play from '../../images/play.svg';
import X from '../../images/X.svg';
import Development from '../../images/icons/Development.svg';
import UI from '../../images/icons/UI.svg';
import Graphik from '../../images/icons/Graphik.svg';
import Motion from '../../images/icons/Motion.svg';
import Photography from '../../images/icons/Photography.svg';
import Videography from '../../images/icons/Videography.svg';

function Service() {
  return (
    <div className="service-container">
      <div className="service-wrapper">
        <img src={Play} alt="play" className="play-image" />
        <p className="service-header">
          The Service We Provide For You
        </p>
        <img src={X} alt="X" className="x-image" />
      </div>
      <div className="column">
        <div className="row1">

          <div className="service-category">
            <img src={Development} alt="development" className="icon" />
            Development
            <p className="service-category-description">
              Create a platform with the best and coolest quality from us.
            </p>
          </div>

          <div className="service-category">
            <img src={UI} alt="development" className="icon" />
            UI/UX Designer
            <p className="service-category-description">
              We provide UI/UX Design services, and of course with the best quality
            </p>
          </div>

          <div className="service-category">
            <img src={Graphik} alt="development" className="icon" />
            Graphik Designer
            <p className="service-category-description">
              We provide Graphic Design services, with the best designers
            </p>
          </div>
        </div>

        <div className="row2">
          <div className="service-category">
            <img src={Motion} alt="development" className="icon" />
            Motion Graphik
            <p className="service-category-description">
              Create a platform with the best and coolest quality from us.
            </p>
          </div>

          <div className="service-category">
            <img src={Photography} alt="development" className="icon" />
            Photography
            <p className="service-category-description">
              We provide Photography services, and of course with the best quality
            </p>
          </div>

          <div className="service-category">
            <img src={Videography} alt="development" className="icon" />
            Videography
            <p className="service-category-description">
              Create a platform with the best and coolest quality from us.
            </p>
          </div>
        </div>
        <img src={X} alt="X" className="x-image2" />
      </div>
    </div>
  );
}

export default Service;
