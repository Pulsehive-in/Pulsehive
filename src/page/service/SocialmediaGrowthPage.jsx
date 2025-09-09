import SingleImg from "../../assets/images/service/service-single.png";
import Star2Img from "../../assets/images/v1/star2.png";
import FadeInUp from "../../components/animation/FadeInUp";
import WorkingApproach from "../../components/service/WorkingApproach";
function SocialmediaGrowthPage() {
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
                    Driving growth
                    <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span>
                  </span>
                  through social
                </h2>
                <p>
                  Social media is the fastest way to grow your brand. At Rads
                  Media, we create strategies that boost engagement, build
                  followers, and drive conversions.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>1/ Content & Community:</h3>
                <ul>
                  <li>Create posts, reels, and stories.</li>
                  <li>Manage engagement with followers.</li>
                  <li>Build strong brand communities.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>2/ Campaigns & Analytics:</h3>
                <ul>
                  <li>Run influencer and ad campaigns.</li>
                  <li>Monitor growth through insights.</li>
                  <li>Optimize strategy with data-driven actions.</li>
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

export default SocialmediaGrowthPage;
