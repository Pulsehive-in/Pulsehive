import Star2Img from "../../assets/images/v1/star2.png";
import QuestionImg from "../../assets/images/icon/question.svg";
const faqData = {
  faq1: [
    {
      id: crypto.randomUUID(),
      title: "What services does Rads Media offer?",
      text: " Clients often ask to know the full range of creative solutions we provide, such as digital marketing, web design, branding, and content.",
    },
    {
      id: crypto.randomUUID(),
      title: " What is your project process like?",
      text: " Explaining our workflow from the first strategy session to final delivery helps clients understand timelines and what to expect.",
    },
    {
      id: crypto.randomUUID(),
      title: " How much does your work usually cost?",
      text: " The cost of our services depends on the scope and goals of the project. We provide tailored quotes after discussing requirements.",
    },
  ],
  faq2: [
    {
      id: crypto.randomUUID(),
      title: "What’s your strategy process like?",
      text: "Our workflow typically includes research, concept development, campaign setup, revisions based on feedback, and execution.",
    },
    {
      id: crypto.randomUUID(),
      title: " How do you manage client feedback?",
      text: "We value feedback and work closely with you to ensure satisfaction with the outcome. We allow a defined number of revisions.",
    },
    {
      id: crypto.randomUUID(),
      title: "Can we see samples of your projects?",
      text: "Yes, we’re proud to showcase a portfolio of past campaigns. You can view case studies and examples of our work on our website.",
    },
  ],
};
function TwoColumnFaq() {
  return (
    <div className="section aximo-section-padding">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            These FAQs help
            <span className="aximo-title-animation">
              clients learn about us
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="Star" />
              </span>
            </span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="aximo-accordion-normal-wrap responsive-margin">
              {faqData.faq1.map((faq) => (
                <div key={faq.id} className="aximo-accordion-normal-item">
                  <div className="aximo-accordion-normal-icon">
                    <img src={QuestionImg} alt="QuestionImg" />
                  </div>
                  <div className="aximo-accordion-normal-data">
                    <h3>{faq.title}</h3>
                    <p>{faq.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aximo-accordion-normal-wrap">
              {faqData.faq2.map((faq) => (
                <div key={faq.id} className="aximo-accordion-normal-item">
                  <div className="aximo-accordion-normal-icon">
                    <img src={QuestionImg} alt="QuestionImg" />
                  </div>
                  <div className="aximo-accordion-normal-data">
                    <h3>{faq.title}</h3>
                    <p>{faq.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoColumnFaq;
