import Single1Img from "../../../assets/images/portfolio/p_single.png";
import Single2Img from "../../../assets/images/portfolio/p_single2.png";
import Star2Img from "../../../assets/images/v1/star2.png";
import FadeInRight from "../../animation/FadeInRight";
import FadeInUp from "../../animation/FadeInUp";
import { ExpandableCardDemo } from "./ExpandableCardDemo";
const projectResolveSteps = [
  {
    id: crypto.randomUUID(),
    title: "Concept Development",
    text: "Based on the market research findings, the design team began developing conceptual designs for the smart thermostat. They brainstormed ideas, created mood boards, and explored various design directions.",
  },
  {
    id: crypto.randomUUID(),
    title: "Manufacturing and Production",
    text: "Once the design was finalized, the project transitioned to the manufacturing phase. Materials, suppliers, and production processes were carefully selected to ensure quality and cost-effectiveness.",
  },
  {
    id: crypto.randomUUID(),
    title: "Success and Impact",
    text: "The smart home thermostat quickly gained popularity and was well-received in the market. The project was a success, benefiting both the company and the environment.",
  },
];
function PerformanceMarketingPortfolio() {
  return (
    <div>
      <ExpandableCardDemo />
    </div>
  );
}

export default PerformanceMarketingPortfolio;
