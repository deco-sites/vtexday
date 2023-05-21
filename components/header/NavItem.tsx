export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
  image?: { src?: string; alt?: string };
  targetSection?: string;
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, targetSection } = item;

  return (
    <li class="group flex items-center -mx-[10px]">
      <a
        href={href}
        data-target={targetSection ?? ""}
        class="px-5 py-3 border-b-[3px] border-transparent hover:border-v-pink transition-all duration-300"
      >
        <span class="text-v-purple font-bold text-[0.8125rem] uppercase font-sans">
          {label}
        </span>
      </a>
    </li>
  );
}

export default NavItem;
