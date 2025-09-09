import SingleImg from "../../assets/images/service/service-single.png";
import Star2Img from "../../assets/images/v1/star2.png";
import FadeInUp from "../../components/animation/FadeInUp";
import WorkingApproach from "../../components/service/WorkingApproach";
function FounderBrandingPage() {
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
                    Building personal
                    <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span>
                  </span>
                  brands that lead
                </h2>
                <p>
                  Founders are the face of modern businesses. We help leaders
                  grow personal brands that inspire trust, attract
                  opportunities, and build authority.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>1/ Personal Identity: </h3>
                <ul>
                  <li>Craft messaging and tone.</li>
                  <li>Define areas of expertise and positioning.</li>
                  <li>Align founder image with company values.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>2/ Visibility Growth:</h3>
                <ul>
                  <li>Social media presence and content.</li>
                  <li>PR features and interviews.</li>
                  <li>Thought leadership campaigns.</li>
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

export default FounderBrandingPage;
