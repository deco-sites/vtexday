import Image from "deco-sites/std/components/Image.tsx";
import Buttons from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

function Navbar({ items, logo }: { items: INavItem[]; logo: LiveImage }) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-between items-center border-b border-base-200 w-full px-3"
      >
        <a
          href="/"
          class="flex-grow inline-flex items-center ml-auto justify-center"
          style={{ minHeight: navbarHeight }}
          aria-label="Store logo"
        >
          <Image
            // class="rounded-[40px]"
            src={logo}
            alt="VTEX DAY LOGO"
            width={142}
            height={61}
          />
        </a>
        <Buttons variant="menu" />
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6">
        <div class="flex-none w-44">
          <a href="/" aria-label="Store logo" class="block px-4 py-3 w-[160px]">
            <Icon id="Logo" width={126} height={16} />
          </a>
        </div>
        <div class="flex-auto flex justify-center">
          {items.map((item) => <NavItem item={item} />)}
        </div>
      </div>
    </>
  );
}

export default Navbar;
