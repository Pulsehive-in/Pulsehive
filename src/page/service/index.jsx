import BreadCrumb from "../../components/common/Breadcrumb";
import TwoColumnFaq from "../../components/contact/TwoColumnFaq";
import AutoSlider from "../../components/home-one/auto-slider";
import Services from "../../components/home-one/services";
import WhyChooseUs from "../../components/home-one/why-choose-us";

const services = [
  {
    id: crypto.randomUUID(),
    title: "Brand & Identity",
    description:
      " Designing seamless user interfaces and experiences that make digital products and apps more accessible and engaging.",
    icon: "icon-design-tools",
    navigatePage: "brand-identity",
  },
  {
    id: crypto.randomUUID(),
    title: "Ad Films & Commercials",
    description:
      "Building visual elements like logos, marketing materials, page layouts, brochures, and branded collateral.",
    icon: "icon-branding",
    navigatePage: "ad-films-commercials",
  },
  {
    id: crypto.randomUUID(),
    title: "Content Engine",
    description:
      "Creating websites that are visually appealing, user-friendly, and fully optimized for functionality and flow.",
    icon: "icon-web",
    navigatePage: "content-engine",
  },
  {
    id: crypto.randomUUID(),
    title: "Social Media Growth",
    description:
      "Designing animated visuals and videos for marketing, promotion, and entertainment to engage your audience.",
    icon: "icon-design-thinking",
    navigatePage: "social-media-growth",
  },
  {
    id: crypto.randomUUID(),
    title: "Performance Funnel",
    description:
      " Crafting product packaging that protects, attracts, and creates a strong presence on retail shelves.",
    icon: "icon-layers",
    navigatePage: "performance-funnel",
  },
  {
    id: crypto.randomUUID(),
    title: "Web & App Build",
    description:
      " Developing or refreshing logos and building consistent visual identities, business cards, and brand kits.",
    icon: "icon-rating-stars-1",
    navigatePage: "web-app-build",
  },
  {
    id: crypto.randomUUID(),
    title: "Founder Branding",
    description:
      " Producing original illustrations for books, websites, marketing campaigns, editorials, and more.",
    icon: "icon-chef",
    navigatePage: "founder-branding",
  },
  {
    id: crypto.randomUUID(),
    title: "Advisory & Growth",
    description:
      "Shaping the appearance and usability of physical products with a focus on design, function, and ergonomics.",
    icon: "icon-target-1",
    navigatePage: "advisory-growth",
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
