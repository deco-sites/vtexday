import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface Props {
  /**
   * @title Imagem de background
   */
  imageBackground: LiveImage;
  /**
   * @title Titulo
   * @default  VTEX DAY
   */
  title: string;
  /**
   * @title Descrição
   */
  description: HTML;
  /**
   * @title Local
   */
  location: string;
  /**
   * @title Horarios
   */
  horarios: string;
  /**
   * @title Texto do botão de ação
   */
  labelButton: string;
  /**
   * @title Link do botão
   */
  actionButton: string;
}

function Hero(props: Props) {
  const {
    imageBackground = "",
    title = "VTEX DAY",
    description = "",
    location = "",
    labelButton = "",
    horarios = "",
    actionButton = "#",
  } = props;
  return (
    <div
      class="bg-v-purple-1 bg-top bg-no-repeat bg-contain w-full"
      style={{
        backgroundImage: `url(${imageBackground})`,
        backgroundPosition: "top center",
      }}
    >
      <div class="flex flex-col justify-center items-center w-full p-[3.125rem] sm:p-[10px] sm:items-start sm:w-[40%] xl:min-h-[50vw] sm:ml-[10%]">
        <h1 class="font-sans text-v-pink-1 text-[2.5rem] leading-[1.2] flex justify-center sm:justify-start">
          <strong class="text-v-pink-1">{title}</strong>
        </h1>
        <span
          class="font-fans text-[2.5rem] font-light text-white mb-5 text-center leading-[1.2] sm:text-left"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        <div class="flex flex-col items-center sm:items-start">
          <span class="font-sans text-v-pink-1 text-base text-center sm:text-left">
            {location}
          </span>
          <span class="font-sans text-base text-white text-center mb-5 sm:text-left">
            {horarios}
          </span>
          <a
            href={actionButton}
            aria-label={labelButton}
            class="font-sans py-3 px-6 rounded-[10px] bg-v-pink text-white uppercase text-[15px]"
          >
            {labelButton}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
