import Image from "deco-sites/std/components/Image.tsx";
import Buttons from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

const script = `
  const sections = document.querySelectorAll(".section-nav");
  const navLi = document.querySelectorAll(".container-nav li a");
  const callback = () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop ) {
          current = section.getAttribute("id"); 
          console.log("Section ativa", current);
        }
    });

    navLi.forEach((li) => {
      li.classList.remove("border-v-pink");
      if(!current && !li.dataset.target) return;

      if (li.dataset.target === current) {
        console.log("li.dataset.target", li.dataset.target)
        console.log("current", current)
        li.classList.add("border-v-pink");
      }
    });
  }

window.addEventListener('scroll', callback);
`;

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
      <div class="hidden md:flex flex-row justify-center items-center w-full pl-2 pr-6 max-w-[1080px] mx-auto">
        {/* <div class="flex-none"> */}
        <a href="/" aria-label="Store logo" class="block px-4 py-3 w-[160px]">
          <Image
            // class="rounded-[40px]"
            src={logo}
            alt="VTEX DAY LOGO"
            width={142}
            height={61}
          />
        </a>
        {/* </div> */}
        <ul class="flex-auto flex justify-center pt-2 container-nav">
          {items.map((item) => <NavItem item={item} />)}
        </ul>
        <script type="module" dangerouslySetInnerHTML={{ __html: script }} />
      </div>
    </>
  );
}

export default Navbar;
