import { createBrowserRouter } from "react-router-dom";
import LayoutEight from "../components/layout/LayoutEight.jsx";
import LayoutOne from "../components/layout/LayoutOne.jsx";
import Layout from "../components/layout/index.jsx";
import ErrorPage from "../error-page";
import AboutUs from "../page/AboutUs";
import ContactUs from "../page/ContactUs";
import Pricing from "../page/Pricing";
import Reset from "../page/auth/ResetPassword.jsx";
import SignIn from "../page/auth/SignIn";
import SignUp from "../page/auth/SignUp";
import HomeOne from "../page/home/HomeOne.jsx";
import PortfolioOneColumn from "../page/portfolio/PortfolioOneColoum";
import PortfolioTwoColumn from "../page/portfolio/PortfolioTwoColumn";
import SinglePortfolio from "../page/portfolio/SinglePortfolio";
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
import CommingSoon from "../page/utility/CommingSoon.jsx";
import Faq from "../page/utility/Faq.jsx";
import TestimonialPage from "../page/utility/Testimonial.jsx";

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
            path: "/portfolio-one",
            element: <PortfolioOneColumn />,
          },
          {
            path: "/portfolio-two",
            element: <PortfolioTwoColumn />,
          },
          {
            path: "/single-portfolio",
            element: <SinglePortfolio />,
          },
          {
            path: "*",
            element: <ErrorPage />,
          },
        ],
      },
      {
        path: "/",
        element: <LayoutEight />,
        children: [
          {
            path: "/coming-soon",
            element: <CommingSoon />,
          },
          {
            path: "/reset-password",
            element: <Reset />,
          },
          {
            path: "/sign-up",
            element: <SignUp />,
          },
          {
            path: "/sign-in",
            element: <SignIn />,
          },
        ],
      },
    ],
  },
]);
