import Icon from "$store/components/ui/Icon.tsx";
import type { INavItem } from "./NavItem.tsx";

export interface Props {
  items: INavItem[];
}

function Menu({ items }: Props) {
  return (
    <>
      <ul class="px-5 flex-grow flex flex-col items-center">
        {items.map((item) => (
          <li class="py-[0.625rem]">
            <a
              class="text-sm font-sans text-v-gray-1 font-medium uppercase"
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
