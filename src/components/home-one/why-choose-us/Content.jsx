import Star2Img from "../../../assets/images/v1/star2.png";
function Content() {
  return (
    <div className="aximo-default-content">
      <h2>
        <span className="aximo-title-animation">
          The RADS Way of
          <span className="aximo-title-icon">
            <img src={Star2Img} alt="Star2Img" />
          </span>
        </span>{" "}
        Working
      </h2>
      <p>
        At RADS, every project begins with a clear understanding of your vision.
        We believe that creativity works best when paired with strategy, which
        is why we take the time to research your brand, audience, and goals
        before moving forward.
      </p>
      <p>
        From web development and graphic design to marketing, video editing, and
        influencer campaigns, our team brings ideas to life with precision and
        passion. With a focus on flawless execution, we craft solutions that not
        only make your brand stand out but also deliver measurable growth.
      </p>
    </div>
  );
}

export default Content;
