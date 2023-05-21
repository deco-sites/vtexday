import Button from "$store/components/ui/Button.tsx";
import { HTML } from "deco-sites/std/components/types.ts";
import Countdown from "$store/islands/Countdown.tsx";

export interface Props {
  /**
   * @title Tempo para expirar
   * @format date
   */
  targetDate: string;
  /**
   * @title Texto
   * @default Time left for a campaign to end wth a link
   */
  text: HTML;
  /**
   * @title Texto do botão
   * @default button
   */
  labelButton: string;
  /**
   * @title Ação do botão
   * @default #
   */
  actionButton: string;
  /**
   * @title Versão do bloco
   * @default default
   */
  variant: "default" | "second";
}

function CampaignTimer(props: Props) {
  const {
    targetDate,
    text,
    labelButton,
    actionButton,
    variant = "default",
  } = props;

  const defaultStyles = {
    text: "sm:order-2",
    countdown: "sm:order-1",
    button: "sm:order-3",
  };

  const secondStyles = {
    text: "sm:order-1",
    countdown: "sm:order-2",
    button: "sm:order-3",
  };

  const campaignStyles = variant === "default" ? defaultStyles : secondStyles;

  return (
    <div class="bg-v-purple-3">
      <div class="py-4  sm:py-[1.125rem] flex flex-wrap items-center justify-center gap-4 sm:gap-16 sm:flex-row ">
        <div
          class={`w-full text-center  font-semibold ${campaignStyles.text} sm:w-auto`}
        >
          <span
            class="text-white"
            dangerouslySetInnerHTML={{
              __html: `${text}`,
            }}
          />
        </div>
        <div class={campaignStyles.countdown}>
          <Countdown targetDate={targetDate} />
        </div>
        <a
          class={`px-4 h-[40px] font-default rounded-[10px] bg-v-pink text-white capitalize text-xs ${campaignStyles.button} ml-2 sm:ml-0 font-bold flex justify-center items-center`}
          aria-label="click botão de ação campanha"
          href={actionButton}
        >
          {labelButton}
        </a>
      </div>
    </div>
  );
}

export default CampaignTimer;
