import BreadCrumb from "../../components/common/Breadcrumb";
import Projects from "../../components/home-one/projects";
import AdsFilmsPortfolio from "../../components/portfolio/single/AdsFilmsPortfolio";

function AdFilmsDetails() {
  return (
    <>
      <BreadCrumb title="Ads & Films Shooting" />
      <AdsFilmsPortfolio />
      <Projects />
    </>
  );
}

export default AdFilmsDetails;
