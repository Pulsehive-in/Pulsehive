import SingleImg from "../../assets/images/service/service-single.png";
import Star2Img from "../../assets/images/v1/star2.png";
import FadeInUp from "../../components/animation/FadeInUp";
import WorkingApproach from "../../components/service/WorkingApproach";
function WebAppBuilderPage() {
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
                    Building digital platforms that scale
                    <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span>
                  </span>
                </h2>
                <p>
                  Your website and app are your brand’s core digital assets. We
                  design and develop solutions that are functional, scalable,
                  and user-friendly.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>1/ Website Development:</h3>
                <ul>
                  <li>Corporate and e-commerce websites.</li>
                  <li>Fully responsive and SEO-friendly.</li>
                  <li>Optimized for conversions.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>2/ App Development:</h3>
                <ul>
                  <li>Android and iOS builds.</li>
                  <li>User-centric design for engagement.</li>
                  <li>Scalable with API integrations.</li>
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

export default WebAppBuilderPage;
