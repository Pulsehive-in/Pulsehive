import SingleImg from "../../assets/images/service/service-single.png";
import Star2Img from "../../assets/images/v1/star2.png";
import FadeInUp from "../../components/animation/FadeInUp";
import WorkingApproach from "../../components/service/WorkingApproach";
function PerformanceFunnelPage() {
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
                                        Funnels that convert 
                                        <span className="aximo-title-icon">
                                            <img src={Star2Img} alt="star" />
                                        </span>
                                    </span>
                                </h2>
                                <p>
                                     Performance marketing is about turning clicks into customers. We design funnels that maximize leads, sales, and ROI.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="aximo-user-interface">
                                <h3>1/ Paid Advertising:</h3>
                                <ul>
                                    <li>
                                        Ads on Meta, Google, and LinkedIn.
                                    </li>
                                    <li>
                                        Targeted campaigns for high ROI.
                                    </li>
                                    <li>
                                        Retargeting strategies for lost leads.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-user-interface">
                                <h3>2/ Funnel Optimization:</h3>
                                <ul>
                                    <li>
                                       Landing page design and testing.
                                    </li>
                                    <li>
                                        Email automation and nurturing.
                                    </li>
                                    <li>
                                       Conversion-focused user journeys.
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

export default PerformanceFunnelPage;
