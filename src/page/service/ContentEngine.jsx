import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import ContentEnginePage from "../service/ContentEnginePage";
function ProductDesign() {
  return (
    <>
      <BreadCrumb title="Content Engine" />
      <ContentEnginePage />
      <Testimonial />
    </>
  );
}

export default ProductDesign;
