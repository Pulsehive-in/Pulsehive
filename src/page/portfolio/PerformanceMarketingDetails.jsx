import BreadCrumb from "../../components/common/Breadcrumb";
import Projects from "../../components/home-one/projects";
import PerformanceMarketingPortfolio from "../../components/portfolio/single/PerformanceMarketingPortfolio";
function PerformanceMarketingDetails() {
  return (
    <>
      <BreadCrumb title="Performance Marketing" />
      <PerformanceMarketingPortfolio />
      <Projects />
    </>
  );
}

export default PerformanceMarketingDetails;
