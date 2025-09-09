import Video from "./Video";
import Star2Img from "../../../assets/images/v1/star2.png";
import AboutCounter from "./AboutCounter";

function About() {
  return (
    <div className="section aximo-section-padding">
      <div id="aximo-counter"></div>
      <div className="container">
        <div className="aximo-section-title">
          <div className="row">
            <div className="col-lg-7">
              <h2>
                <span className="aximo-title-animation">
                  We shape your
                  <span className="aximo-title-icon">
                    <img src={Star2Img} alt="Star2Img" />
                  </span>
                </span>{" "}
                growth journey
              </h2>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex align-items-center">
              <p>
                We work hand in hand with our clients to understand their goals,
                target audience, unique requirements, and deliver smart creative
                strategies.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <Video />
          </div>
          <div className="col-lg-4">
            <AboutCounter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
