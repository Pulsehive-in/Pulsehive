import BreadCrumb from "../../components/common/Breadcrumb";
import Projects from "../../components/home-one/projects";
import WebAppDevPortfolio from "../../components/portfolio/single/WebAppDevPortfolio";
function WebAppDevDetails() {
  return (
    <>
      <BreadCrumb title="Web & App Development" />
      <WebAppDevPortfolio />
      <Projects />
    </>
  );
}

export default WebAppDevDetails;
