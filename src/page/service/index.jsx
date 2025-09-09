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
      " Crafting distinctive brand identities that build trust, recognition, and lasting impressions.",
    icon: "icon-design-tools",
    navigatePage: "brand-identity",
  },
  {
    id: crypto.randomUUID(),
    title: "Ad Films & Commercials",
    description:
      "Producing impactful ad films and commercials that inspire, engage, and drive conversions.",
    icon: "icon-branding",
    navigatePage: "ad-films-commercials",
  },
  {
    id: crypto.randomUUID(),
    title: "Content Engine",
    description:
      "Creating powerful, scalable content strategies that fuel growth and deliver consistent results",
    icon: "icon-web",
    navigatePage: "content-engine",
  },
  {
    id: crypto.randomUUID(),
    title: "Social Media Growth",
    description:
      "Building engaging social media strategies that boost visibility, followers, and community trust.",
    icon: "icon-design-thinking",
    navigatePage: "social-media-growth",
  },
  {
    id: crypto.randomUUID(),
    title: "Performance Funnel",
    description:
      " Designing conversion-driven funnels to capture leads, nurture prospects, and maximize ROI.",
    icon: "icon-layers",
    navigatePage: "performance-funnel",
  },
  {
    id: crypto.randomUUID(),
    title: "Web & App Build",
    description:
      " Developing seamless websites and apps that combine design, functionality, and user experience.",
    icon: "icon-rating-stars-1",
    navigatePage: "web-app-build",
  },
  {
    id: crypto.randomUUID(),
    title: "Founder Branding",
    description:
      " Positioning founders as thought leaders through personal branding, storytelling, and influence.",
    icon: "icon-chef",
    navigatePage: "founder-branding",
  },
  {
    id: crypto.randomUUID(),
    title: "Advisory & Growth",
    description:
      "Providing expert guidance to scale businesses with data-driven strategies and proven frameworks.",
    icon: "icon-target-1",
    navigatePage: "advisory-growth",
  },
  {
    id: crypto.randomUUID(),
    title: "Automation & Martech",
    description:
      "Implementing automation and marketing technology solutions that optimize efficiency and growth.",
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
