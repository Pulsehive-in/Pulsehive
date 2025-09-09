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
                  We don’t just
                  <span className="aximo-title-icon">
                    <img src={Star2Img} alt="Star2Img" />
                  </span>
                </span>{" "}
                create, we elevate
              </h2>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex align-items-center">
              <p>
                At RADS, we don’t just deliver services—we build partnerships.
                By understanding your goals, audience, and vision, we craft
                strategies that create lasting impact across digital, design,
                and media.
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
