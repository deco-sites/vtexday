import type { SectionProps } from "$live/mod.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

// Props type that will be configured in deco.cx's Admin

type Field =
  | "caption"
  | "id"
  | "is_shared_to_feed"
  | "media_type"
  | "media_url"
  | "permalink"
  | "thumbnail_url"
  | "timestamp"
  | "username";

export interface Props {
  /**
   * @title Título do componente
   * @default Siga o VTEX DAY nas redes
   */
  title: string;
  /**
   * @title Banner que acompanha o título
   */
  minBanner: LiveImage;
  /**
   * @title Campos a serem buscados na API
   * @description Documentação se encontra aqui https://developers.facebook.com/docs/instagram-basic-display-api/reference/media/
   */
  fields?: Field[];
  /**
   * @title Quantos posts deseja buscar?
   * @description Número de posts que vão ser retornados
   */
  numberOfPosts?: number;
  /**
   * @title Token  do facebook
   * @description Esse token é pego nas configurações do APP do facebook e expira a cada 90 dias
   */
  token: string;
}

type FieldReturn = {
  [key in Field]?: string;
};

export async function loader(
  {
    numberOfPosts = undefined,
    title,
    fields = ["media_url", "media_type", "permalink"],
    token,
    minBanner,
  }: Props,
  _req: Request,
) {
  const joinFields = fields.join(",");
  const url =
    `https://graph.instagram.com/me/media?access_token=${token}&fields=${joinFields}`;

  const { data } = (await fetch(url).then((r) => r.json())) as {
    data: FieldReturn[];
  };

  return {
    data: data.slice(0, numberOfPosts ?? data.length),
    title,
    minBanner,
  };
}

export default function InstagramComponent({
  title = "Confira nosso instagram",
  data = [
    {
      id: "placeholderInsta",
      permalink: "#",
      media_type: "IMAGE",
      media_url: "",
    },
  ],
  minBanner,
}: SectionProps<typeof loader>) {
  return (
    <div class="w-full max-w-[1080px] mx-auto mb-12">
      <div class="flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-start mb-5">
        <Image
          class="sm:w-[200px]"
          src={minBanner}
          width={301}
          height={122}
          alt="Use nossa hashtag"
        />
        <h2 class="text-center row-start-1 col-span-full sm:mt-[10px]">
          <span class="font-bold text-[27px] text-v-pink px-4 max-w-[310px] sm:max-w-none mx-auto block uppercase">
            {title}
          </span>
        </h2>
      </div>
      <section
        class={`w-full  mx-auto flex flex-wrap gap-4 items-center justify-center sm:justify-start`}
      >
        {data.map((item) => (
          <a
            key={item.id}
            href={item.permalink}
            target="_blank"
            title="Visite nosso instagram"
            class="rounded-lg overflow-hidden w-full max-w-[350px] sm:max-w-[255px] group"
          >
            {item.media_type === "IMAGE"
              ? (
                <Image
                  class="max-w-full max-h-full object-cover w-full group-hover:scale-110  transition duration-400 group-hover:brightness-90"
                  src={item.media_url ?? ""}
                  alt="Imagem do instagram"
                  width={252}
                  height={252}
                  loading="lazy"
                />
              )
              : (
                <video controls class="max-w-full max-h-full object-cover">
                  <source src={item.media_url}></source>
                </video>
              )}
          </a>
        ))}
      </section>
    </div>
  );
}
