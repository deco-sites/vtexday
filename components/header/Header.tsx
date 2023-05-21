import Modals from "$store/islands/HeaderModals.tsx";
import type { Image } from "deco-sites/std/components/types.ts";

import Navbar from "./Navbar.tsx";
import { navbarHeight } from "./constants.ts";
import MenuMobile from "$store/islands/MenuMobile.tsx";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: Image;
    alt?: string;
  };
}

export interface Props {
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];
  logo: Image;
}

function Header(
  {
    navItems = [],
    logo,
  }: Props,
) {
  return (
    <>
      <header style={{ height: navbarHeight }} class={`md:!h-auto`}>
        <div class="bg-base-100 fixed w-full z-50">
          <Navbar items={navItems} logo={logo} />
        </div>
        <MenuMobile menu={{ items: navItems }} />
        {
          /* <Modals
          menu={{ items: navItems }}
          // searchbar={searchbar}
        /> */
        }
      </header>
    </>
  );
}

export default Header;
