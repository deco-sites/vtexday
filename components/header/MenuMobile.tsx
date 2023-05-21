import type { Props as MenuProps } from "$store/components/header/Menu.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import Menu from "$store/components/header/Menu.tsx";
import { navbarHeight } from "./constants.ts";

interface Props {
  menu: MenuProps;
}

function MenuMobile(props: Props) {
  const { displayMenu } = useUI();

  return (
    <div
      class={`${
        displayMenu.value ? `max-h-screen scale-y-100` : `max-h-0 scale-y-0`
      } origin-top transition-all overflow-hidden bg-white fixed w-full z-50`}
      style={{ top: navbarHeight }}
    >
      <Menu items={props.menu.items} />
    </div>
  );
}

export default MenuMobile;
