import Single2Img from "../../assets/images/service/service-single2.png";
import Star2Img from "../../assets/images/v1/star2.png";
import FadeInRight from "../animation/FadeInRight";

const workingApprochData = [
  {
    id: crypto.randomUUID(),
    title: "Research & Discovery",
    description: "We begin by understanding your brand, audience, and goals.",
    icon: "icon-search",
  },
  {
    id: crypto.randomUUID(),
    title: "Strategy & Implementation",
    description:
      "Translate insights into actionable strategies, creative concepts, and technical execution.",
    icon: "icon-design-tools",
  },
  {
    id: crypto.randomUUID(),
    title: "Launch & Growth Optimization",
    description: "Execute with precision and monitor performance in real time.",
    icon: "icon-start-up",
  },
];
function WorkingApproach() {
  return (
    <div className="row">
      <div className="col-lg-5 offset-lg-1 order-lg-1">
        <FadeInRight className="aximo-service-details-thumb2 ">
          <img src={Single2Img} alt="service" />
        </FadeInRight>
      </div>
      <div className="col-lg-6">
        <div className="aximo-default-content">
          <h2>
            <span className="aximo-title-animation">
              Our Approach
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="star" />
              </span>
            </span>
          </h2>
          <p>
            At Rads Media, we believe every project deserves a structured yet
            flexible approach that ensures creativity, precision, and measurable
            growth. Our process is designed to deliver impactful results across
            branding, performance, and digital solutions.
          </p>
        </div>
        <div className="aximo-our-approach">
          {workingApprochData.map((item) => (
            <div className="aximo-iconbox-wrap5" key={item.id}>
              <div className="aximo-iconbox-icon5">
                <i className={`${item.icon}`}></i>
              </div>
              <div className="aximo-iconbox-data5">
                <h3>{item.title}:</h3>
                <div className="aximo-user-interface">
                  <ul>
                    <li>{item.description}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkingApproach;
