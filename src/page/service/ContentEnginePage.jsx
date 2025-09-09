import SingleImg from "../../assets/images/service/service-single.png";
import Star2Img from "../../assets/images/v1/star2.png";
import FadeInUp from "../../components/animation/FadeInUp";
import WorkingApproach from "../../components/service/WorkingApproach";
function ContentEnginePage() {
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
                    A content engine that
                    <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span>
                  </span>
                  never stops
                </h2>
                <p>
                  Content fuels modern marketing. We build a content engine that
                  consistently delivers engaging materials to keep your brand
                  relevant and top-of-mind.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>1/ Written Content:</h3>
                <ul>
                  <li>Blogs, captions, and ad copy.</li>
                  <li>SEO-optimized storytelling.</li>
                  <li>Maintains brand voice across platforms.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>2/ Visual & Video Assets:</h3>
                <ul>
                  <li>Social media graphics and reels.</li>
                  <li>Explainers and campaign visuals.</li>
                  <li>Content designed for multi-platform impact.</li>
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

export default ContentEnginePage;
