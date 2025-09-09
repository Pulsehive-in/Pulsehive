import CountUp from "react-countup";
function AboutCounter() {
  return (
    <div className="aximo-counter-wrap">
      <div className="aximo-counter-data">
        <h2 className="aximo-counter-number">
          <span className="aximo-counter">
            <CountUp end={50} duration={3} redraw={true} enableScrollSpy />
          </span>
          +
        </h2>
        <p> Brands we’ve collaborated with</p>
      </div>
      <div className="aximo-counter-data">
        <h2 className="aximo-counter-number">
          <span className="aximo-counter">
            <CountUp end={200} duration={3} redraw={true} enableScrollSpy />
          </span>
          +
        </h2>
        <p>Campaigns executed successfully</p>
      </div>
      <div className="aximo-counter-data">
        <h2 className="aximo-counter-number">
          <span className="aximo-counter">
            <CountUp end={95} duration={3} redraw={true} enableScrollSpy />
          </span>
          %
        </h2>
        <p> Client retention rate</p>
      </div>
    </div>
  );
}

export default AboutCounter;
