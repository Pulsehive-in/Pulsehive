import BreadCrumb from "../../components/common/Breadcrumb";
import Projects from "../../components/home-one/projects";
import GraphicsPortfolio from "../../components/portfolio/single/GraphicsPortfolio";

function GraphicsDetails() {
  return (
    <>
      <BreadCrumb title="Graphics" />
      <GraphicsPortfolio />
      <Projects />
    </>
  );
}

export default GraphicsDetails;
