import Image from "deco-sites/std/components/Image.tsx";
import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export type Perfil = {
  perfil: LiveImage;
  name: string;
  bio: string;
  shortDescription?: string;
};

export interface Props {
  title: string;
  subtitle: string;
  description: HTML;
  text: string;
  speakers: Array<Perfil>;
}

function Speakers(props: Props) {
  return (
    <div class="w-full my-[100px]">
      <div class="px-[0.625rem] pt-[3.125rem] pb-[0.625rem] flex flex-col max-w-[350px] mx-auto sm:max-w-none ">
        <div class="mb-5 flex justify-center">
          <h2 class="font-sans text-center uppercase  flex flex-col sm:gap-1 sm:flex-row text-[2rem]">
            <span class="text-v-pink">
              <strong>{props.title}</strong>
            </span>
            <span class="font-light text-v-purple-2">{props.subtitle}</span>
          </h2>
        </div>
        <div class="mb-5">
          <span
            class="text-black text-center text-base"
            dangerouslySetInnerHTML={{ __html: props.description }}
          />
        </div>
        <div class="mb-5">
          <p class="text-center text-v-gray text-base font-bold">
            {props.text}
          </p>
        </div>
      </div>
      <div class="flex flex-wrap max-w-[1080px] mx-auto gap-3 items-center justify-center sm:justify-start px-12 sm:px-0">
        {props.speakers.map((item) => {
          return (
            <div class="rounded-3xl w-full h-auto max-h-[278px]  sm:w-[245px] sm:h-[241px] sm:max-h-none overflow-hidden relative">
              <Image
                class="max-w-full max-h-full object-cover w-full transition duration-400 group-hover:brightness-90"
                src={item.perfil ?? ""}
                alt={item.name}
                width={245}
                height={241}
                loading="lazy"
              />
              <div class="bg-v-pink-2 flex flex-col absolute bottom-2 left-0 w-full py-[7px] px-4">
                <h2 class="text-[17px] text-white uppercase leading-4 font-semibold">
                  {item.name}
                </h2>
                <p class="w-[95%] overflow-hidden text-white text-xs leading-4">
                  <b>{item.bio}</b>
                </p>
                <p class="w-[95%] overflow-hidden text-white text-xs leading-4">
                  {item.shortDescription}
                </p>
              </div>
            </div>
          );
        })}
        {
          /* <div class="rounded w-[245px] h-[241px] overflow-hidden relative">
					<Image
						class="max-w-full max-h-full object-cover w-full transition duration-400 group-hover:brightness-90"
						src={item.media_url ?? ""}
						alt="Imagem do instagram"
						width={245}
						height={241}
						loading="lazy"
					/>
					<div class="bg-v-pink-2 flex flex-col">
						<h2 class="text-[17px] text-white uppercase leading-4"></h2>
            <p class="w-[95%] overflow-hidden text-white text-xs leading-4">
              <b></b>
            </p>
            <p class="w-[95%] overflow-hidden text-white text-xs leading-4">
            </p>
					</div>
				</div> */
        }
      </div>
    </div>
  );
}

export default Speakers;
