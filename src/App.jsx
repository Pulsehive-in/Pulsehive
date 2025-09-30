import { Outlet } from "react-router-dom";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "./components/ui/resizable-navbar.jsx";
import { useState } from "react";

function App() {

  const [mobileOpen, setMobileOpen] = useState(false);
    const items = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <div className="w-[100vw]  overflow-hidden bg-black">
         <Navbar>
        {/* Desktop Navbar */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={items} onItemClick={() => {}} />
          <NavbarButton href="/login" variant="primary">
            Login
          </NavbarButton>
        </NavBody>

        {/* Mobile Navbar */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)}>
            {items.map((item) => (
              <a
                key={item.link}
                href={item.link}
                className="px-2 py-2 text-gray-700 dark:text-gray-200"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton href="/login" variant="primary" className="mt-4">
              Login
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
        <Outlet />
      </div>
    </>
  );
}

export default App;
