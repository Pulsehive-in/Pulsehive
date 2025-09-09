import SingleImg from "../../assets/images/service/service-single.png";
import Star2Img from "../../assets/images/v1/star2.png";
import FadeInUp from "../../components/animation/FadeInUp";
import WorkingApproach from "../../components/service/WorkingApproach";
function AdvisoryGrowthPage() {
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
                    Strategic advisory for 
                    <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span>
                  </span>
                  scaling
                </h2>
                <p>
                   Scaling a business requires more than marketing. Rads Media provides advisory services to guide strategy, innovation, and sustainable growth.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>1/ Business Audit:</h3>
                <ul>
                  <li>
                   Analyze strengths, weaknesses, and gaps.
                  </li>
                  <li>
                   Study market trends and competitors.
                  </li>
                  <li>
                   Identify growth opportunities.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>2/ Growth Roadmap:</h3>
                <ul>
                  <li>
                   Create short-term and long-term plans.
                  </li>
                  <li>
                    Innovate products, services, and models.
                  </li>
                  <li>
                   Provide strategic execution support.
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

export default AdvisoryGrowthPage;
