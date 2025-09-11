import { createBrowserRouter } from "react-router-dom";
import LayoutOne from "../components/layout/LayoutOne.jsx";
import Layout from "../components/layout/index.jsx";
import ErrorPage from "../error-page";
import AboutUs from "../page/AboutUs";
import ContactUs from "../page/ContactUs";
import Pricing from "../page/Pricing";
import HomeOne from "../page/home/HomeOne.jsx";
import PortfolioTwoColumn from "../page/portfolio/PortfolioTwoColumn";
import Service from "../page/service";
import BrandIdentity from "../page/service/BrandIdentity.jsx";
import AdFilmsCommercials from "../page/service/AdFilmsCommercials.jsx";
import ContentEngine from "../page/service/ContentEngine.jsx";
import SocialMediaGrowth from "../page/service/SocialMediaGrowth.jsx";
import PerformanceFunnel from "../page/service/PerformanceFunnel.jsx";
import WebAppBuild from "../page/service/WebAppBuild.jsx";
import FounderBranding from "../page/service/FounderBranding.jsx";
import AdvisoryGrowth from "../page/service/AdvisoryGrowth.jsx";
import AutomationAndMartech from "../page/service/AutomationAndMartech.jsx";
import Team from "../page/team";
import SingleTeam from "../page/team/SingleTeam.jsx";
import Faq from "../page/utility/Faq.jsx";
import TestimonialPage from "../page/utility/Testimonial.jsx";
import PerformanceMarketingDetails from "../page/portfolio/PerformanceMarketingDetails.jsx";
import SocialMediaGrowthDetails from "../page/portfolio/SocialMediaGrowthDetails.jsx";
import GraphicsDetails from "../page/portfolio/GraphicsDetails.jsx";
import VideoEditingDetails from "../page/portfolio/VideoEditingDetails.jsx";
import WebAppDevDetails from "../page/portfolio/WebAppDevDetails.jsx";
import AdFilmsDetails from "../page/portfolio/AdFilmsDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LayoutOne />,
        children: [
          {
            path: "/",
            element: <HomeOne />,
          },
          {
            path: "/about-us",
            element: <AboutUs />,
          },
          {
            path: "/contact-us",
            element: <ContactUs />,
          },
          {
            path: "/faq",
            element: <Faq />,
          },

          {
            path: "/testimonial",
            element: <TestimonialPage />,
          },

          {
            path: "/pricing",
            element: <Pricing />,
          },

          {
            path: "/service",
            element: <Service />,
          },
          {
            path: "/brand-identity",
            element: <BrandIdentity />,
          },
          {
            path: "/ad-films-commercials",
            element: <AdFilmsCommercials />,
          },
          {
            path: "/content-engine",
            element: <ContentEngine />,
          },
          {
            path: "/social-media-growth",
            element: <SocialMediaGrowth />,
          },
          {
            path: "/performance-funnel",
            element: <PerformanceFunnel />,
          },
          {
            path: "/web-app-build",
            element: <WebAppBuild />,
          },
          {
            path: "/founder-branding",
            element: <FounderBranding />,
          },
          {
            path: "/advisory-growth",
            element: <AdvisoryGrowth />,
          },
          {
            path: "/automation-and-Martech",
            element: <AutomationAndMartech />,
          },
          {
            path: "/team",
            element: <Team />,
          },
          {
            path: "/single-team",
            element: <SingleTeam />,
          },
          {
            path: "/portfolio-two",
            element: <PortfolioTwoColumn />,
          },
          {
            path: "/performance-marketing-details",
            element: <PerformanceMarketingDetails />,
          },
          {
            path: "/social-media-growth-details",
            element: <SocialMediaGrowthDetails />,
          },
          {
            path: "/video-editing-details",
            element: <VideoEditingDetails />,
          },
          {
            path: "/web-app-dev-details",
            element: <WebAppDevDetails />,
          },
          {
            path: "Ads & Films Shooting",
            element: <AdFilmsDetails />,
          },
          {
            path: "/graphics-details",
            element: <GraphicsDetails />,
          },

          {
            path: "*",
            element: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);
