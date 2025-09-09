import SingleImg from "../../assets/images/service/service-single.png";
import Star2Img from "../../assets/images/v1/star2.png";
import FadeInUp from "../../components/animation/FadeInUp";
import WorkingApproach from "../../components/service/WorkingApproach";
function BrandIdentityPage() {
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
                                       Crafting brands that
                                        <span className="aximo-title-icon">
                                            <img src={Star2Img} alt="star" />
                                        </span>
                                    </span>
                                     leave a mark
                                </h2>
                                <p>
                                     Brand identity defines how your audience perceives your business. At Rads Media, we craft powerful identities that combine visuals, messaging, and strategy to build recognition and trust.{" "}
                                </p>
                            
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="aximo-user-interface">
                                <h3>1/ Visual Identity: </h3>
                                <ul>
                                    <li>
                                        Covers logos, colors, typography, and design elements.
                                    </li>
                                    <li>
                                        Ensures your brand looks consistent across all platforms.
                                    </li>
                                    <li>
                                        Creates a visual style that resonates with your audience.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aximo-user-interface">
                                <h3>2/ Brand Voice & Guidelines: </h3>
                                <ul>
                                    <li>
                                        Defines tone, messaging, and communication style.
                                    </li>
                                    <li>
                                        Aligns your brand personality across campaigns.
                                    </li>
                                    <li>
                                        Provides a guidebook for cohesive branding everywhere.
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

export default BrandIdentityPage;
