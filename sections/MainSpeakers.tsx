import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export type Perfil = {
  perfil: LiveImage;
  name: string;
  bio: string;
  description?: string;
};

export interface Props {
  title: string;
  subtitle: string;
  text: string;
  mainSpeakers: Array<Perfil>;
  speakers: Array<Perfil>;
}

function MainSpeakers(props: Props) {
  const { mainSpeakers = [], speakers = [] } = props;
  return (
    <div class="w-full">
      <div class="px-[0.625rem] pt-[3.125rem] pb-[0.625rem] flex flex-col">
        <div class="mb-5">
          <h2 class="font-sans text-center uppercase  flex flex-col text-[2rem]">
            <span class="text-v-pink">
              <strong>{props.title}</strong>
            </span>
            <span class="font-light text-v-purple-2">{props.subtitle}</span>
          </h2>
        </div>
        <div class="mb-12">
          <p class="text-black text-center">{props.text}</p>
        </div>
        <ul class="flex flex-wrap w-full items-center justify-center gap-12 sm:gap-[12.5rem]">
          {mainSpeakers.map((item) => {
            return (
              <li class="p-[0.625rem] flex flex-col items-center justify-center mt-5 w-[300px] h-auto relative">
                <div class="relative avatar-circle scale-[1.2]">
                  <Image
                    class="w-[200px] h-[200px] object-cover max-w-[100%] mx-auto rounded-full"
                    src={item.perfil}
                    width={200}
                    height={200}
                    alt={item.name}
                  />
                </div>
                <div class="flex flex-col w-full items-center justify-center mt-[70px]">
                  <h3 class="text-center text-black font-bold text-base uppercase mb-4">
                    {item.name}
                  </h3>
                  <p class="text-xs text-center max-w-[70%] uppercase">
                    {item.bio}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <ul class="flex flex-wrap w-full items-center justify-center mt-[3.125rem] gap-[5.5rem]">
          {speakers.map((item) => {
            return (
              <li class="p-[0.625rem] flex flex-col items-center justify-center mt-5 w-[200px] h-auto relative">
                <div class="relative avatar-circle scale-[1.2]">
                  <Image
                    class="w-[200px] h-[200px] object-cover max-w-[100%] mx-auto rounded-full"
                    src={item.perfil}
                    width={200}
                    height={200}
                    alt={item.name}
                  />
                </div>
                <div class="flex flex-col w-full items-center justify-center mt-[70px]">
                  <h3 class="text-center text-black font-bold text-base uppercase mb-4">
                    {item.name}
                  </h3>
                  <p class="text-xs text-center max-w-[70%] uppercase">
                    {item.bio}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MainSpeakers;
