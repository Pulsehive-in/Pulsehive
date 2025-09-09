import BreadCrumb from "../../components/common/Breadcrumb";
import TwoColumnFaq from "../../components/contact/TwoColumnFaq";
import AutoSlider from "../../components/home-one/auto-slider";
import Services from "../../components/home-one/services";
import WhyChooseUs from "../../components/home-one/why-choose-us";

const services = [
  {
    id: crypto.randomUUID(),
    title: "UI/UX Design",
    description:
      " Designing seamless user interfaces and experiences that make digital products and apps more accessible and engaging.",
    icon: "icon-design-tools",
    navigatePage: "ui-ux-design",
  },
  {
    id: crypto.randomUUID(),
    title: "Graphic Design",
    description:
      "Building visual elements like logos, marketing materials, page layouts, brochures, and branded collateral.",
    icon: "icon-branding",
    navigatePage: "graphic-design",
  },
  {
    id: crypto.randomUUID(),
    title: "Web Design",
    description:
      "Creating websites that are visually appealing, user-friendly, and fully optimized for functionality and flow.",
    icon: "icon-web",
    navigatePage: "web-design",
  },
  {
    id: crypto.randomUUID(),
    title: "Motion Graphics",
    description:
      "Designing animated visuals and videos for marketing, promotion, and entertainment to engage your audience.",
    icon: "icon-design-thinking",
    navigatePage: "motion-graphics",
  },
  {
    id: crypto.randomUUID(),
    title: "Packaging Design",
    description:
      " Crafting product packaging that protects, attracts, and creates a strong presence on retail shelves.",
    icon: "icon-layers",
    navigatePage: "packaging-design",
  },
  {
    id: crypto.randomUUID(),
    title: "Logo and Branding",
    description:
      " Developing or refreshing logos and building consistent visual identities, business cards, and brand kits.",
    icon: "icon-rating-stars-1",
    navigatePage: "logo-and-branding",
  },
  {
    id: crypto.randomUUID(),
    title: "Illustration",
    description:
      " Producing original illustrations for books, websites, marketing campaigns, editorials, and more.",
    icon: "icon-chef",
    navigatePage: "illustration",
  },
  {
    id: crypto.randomUUID(),
    title: "Product Design",
    description:
      "Shaping the appearance and usability of physical products with a focus on design, function, and ergonomics.",
    icon: "icon-target-1",
    navigatePage: "product-design",
  },
  {
    id: crypto.randomUUID(),
    title: "Automation & Martech",
    description:
      "Shaping the appearance and usability of physical products with a focus on design, function, and ergonomics.",
    icon: "icon-target-1",
    navigatePage: "automation-and-martech",
  },
];

function ServicePage() {
  return (
    <>
      <BreadCrumb title="Service" />
      <Services services={services} />
      <AutoSlider />
      <WhyChooseUs />
      <TwoColumnFaq />
    </>
  );
}

export default ServicePage;
