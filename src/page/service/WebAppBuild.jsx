import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import WebAppBuildPage from "../service/WebAppBuildPage";
function LogoAndBranding() {
  return (
    <>
      <BreadCrumb title="Service Details" />
      <WebAppBuildPage />
      <Testimonial />
    </>
  );
}

export default LogoAndBranding;
