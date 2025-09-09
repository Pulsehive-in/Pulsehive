import Star2Img from "../../assets/images/v1/star2.png";
import FadeInUp from "../animation/FadeInUp";
function FaqAccordion() {
  return (
    <div className="section aximo-section-padding3">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            <span className="aximo-title-animation">
              These FAQs help
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="Star" />
              </span>
            </span>
            clients learn about us
          </h2>
        </div>

        <FadeInUp
          className="accordion aximo-accordion-wrap"
          id="aximo-accordion"
        >
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                What services does Rads Media offer?
              </button>
            </h3>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#aximo-accordion"
            >
              <div className="accordion-body">
                Clients often ask to know the full range of creative solutions
                we provide, such as digital marketing, web design, branding, and
                content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                What is your project process like?
              </button>
            </h3>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion"
            >
              <div className="accordion-body">
                Explaining our workflow from the first strategy session to final
                delivery helps clients understand timelines and what to expect.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                How much does your work usually cost?
              </button>
            </h3>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion"
            >
              <div className="accordion-body">
                The cost of our services depends on the scope and goals of the
                project. We provide tailored quotes after discussing
                requirements.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
              >
                What’s your strategy process like?
              </button>
            </h3>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion"
            >
              <div className="accordion-body">
                Our workflow typically includes research, concept development,
                campaign setup, revisions based on feedback, and execution.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
              >
                How do you manage client feedback?
              </button>
            </h3>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion"
            >
              <div className="accordion-body">
                We value feedback and work closely with you to ensure
                satisfaction with the outcome. We allow a defined number of
                revisions.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
              >
                Can we see samples of your projects?
              </button>
            </h3>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              data-bs-parent="#aximo-accordion"
            >
              <div className="accordion-body">
                Yes, we’re proud to showcase a portfolio of past campaigns. You
                can view case studies and examples of our work on our website.
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}

export default FaqAccordion;
