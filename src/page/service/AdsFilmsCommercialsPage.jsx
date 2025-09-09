import SingleImg from "../../assets/images/service/service-single.png";
import Star2Img from "../../assets/images/v1/star2.png";
import FadeInUp from "../../components/animation/FadeInUp";
import WorkingApproach from "../../components/service/WorkingApproach";
function AdsFilmsCommercialsPage() {
  return (
    <div className="section aximo-section-padding2 pb-0">
      <div className="container">
        <div className="aximo-service-details-wrap">
          <FadeInUp className="aximo-service-details-thumb">
            <img src={SingleImg} alt="Single img" />
          </FadeInUp>
          <div className="row">
            <div className="col-lg-8">
              <div className="aximo-default-content">
                <h2>
                  <span className="aximo-title-animation">
                    Storytelling that sells
                    <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span>
                  </span>
                </h2>
                <p>
                  Great ads inspire, entertain, and sell. Rads Media creates
                  commercials and films that showcase your brand’s story with
                  creativity and impact.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>1/ Creative Concept:</h3>
                <ul>
                  <li>Focus on storytelling and brand positioning.</li>
                  <li>Includes scripting and storyboarding.</li>
                  <li>Builds emotional connections with the audience.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>2/ Production & Post:</h3>
                <ul>
                  <li>Covers filming, editing, and motion graphics.</li>
                  <li>Ensures high-quality visuals and sound.</li>
                  <li>
                    Delivers content optimized for TV, digital, or social.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="aximo-faq-wrap">
            <WorkingApproach />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdsFilmsCommercialsPage;
