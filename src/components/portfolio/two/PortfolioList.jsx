import Portfolio1Img from "../../../assets/images/portfolio/p_1.png";
import Portfolio2Img from "../../../assets/images/portfolio/p_2.png";
import Portfolio3Img from "../../../assets/images/portfolio/p_3.png";
import Portfolio4Img from "../../../assets/images/portfolio/p_4.png";
import Portfolio5Img from "../../../assets/images/portfolio/p_5.png";
import Portfolio6Img from "../../../assets/images/portfolio/p_6.png";
import Portfolio7Img from "../../../assets/images/portfolio/p_7.png";
import Portfolio8Img from "../../../assets/images/portfolio/p_8.png";
import FadeInStagger from "../../animation/FadeInStagger";
import PortfolioCard from "./PortfolioCard";

const portfolioListData = [
  {
    id: crypto.randomUUID(),
    title: "Performance Marketing",
    description:
      "Developing the look and feel of physical products, aesthetics, and functionality.",
    img: Portfolio1Img,
    navigate: "/performance-marketing-details",
  },
  {
    id: crypto.randomUUID(),
    title: "Social Media Growth",
    description:
      "Creating or refreshing a companys logo and developing a cohesive visual identity.",
    img: Portfolio2Img,
    navigate: "/social-media-growth-details",
  },
  {
    id: crypto.randomUUID(),
    title: "Graphics",
    description:
      "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
    img: Portfolio3Img,
    navigate: "/graphics-details",
  },
  {
    id: crypto.randomUUID(),
    title: "Video Editing",
    description:
      "Creating packaging solutions for products that not only protect attract customers on store.",
    img: Portfolio4Img,
    navigate: "/video-editing-details",
  },
  {
    id: crypto.randomUUID(),
    title: "Web & App Development",
    description:
      "Designing trade show booths, exhibition spaces, and immersive installations for events and conferences.",
    img: Portfolio5Img,
    navigate: "/web-app-dev-details",
  },
  {
    id: crypto.randomUUID(),
    title: "Ads & Films Shooting",
    description:
      "Designing trade show booths, exhibition spaces, and immersive installations for events and conferences.",
    img: Portfolio6Img,
    navigate: "/ads-films-shooting-details",
  },
];
function PortfolioList() {
  return (
    <div className="section aximo-project-page aximo-section-padding5">
      <div className="container">
        <div className="row">
          {portfolioListData.map((portfolio, index) => (
            <FadeInStagger
              className="col-lg-6"
              key={portfolio.id}
              index={index}
            >
              <PortfolioCard portfolio={portfolio} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioList;
