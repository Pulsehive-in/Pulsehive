import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Services from "./components/pages/Services.jsx";
import Portfolio from "./components/pages/Portfolio.jsx";
import PortfolioDetails from "./components/pages/PortfolioDetails.jsx";
import ContactUs from "./components/pages/ContactUs.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/portfolio/:id" element={<PortfolioDetails />}></Route>
      <Route path="/contact-us" element={<ContactUs />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
