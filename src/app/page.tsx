import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Icon } from "@iconify/react";
import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";

interface Feature {
  icon?: string;
  label: string;
  text: string;
  comingSoon?: boolean;
  tooltip?: string;
}

interface FeatureItemProps extends Feature {}

export default function Home() {
  return (
    <div className="flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl uppercase font-bold mb-6">Animeton</h1>
        <h2 className="text-4xl font-bold mb-6">
          La App de Windows para ver anime en Español
        </h2>
        <p className="text-xl mb-8">
          Únete a nuestra{" "}
          <span className="font-bold text-secondary-300">beta cerrada</span> y
          ayúdanos a mejorar la app con tu feedback. Tendrás acceso exclusivo a
          la app y serás parte de nuestra comunidad en Discord, donde podrás
          compartir tus ideas y sugerencias.
        </p>
        <p className="text-xl mb-4">Descubre nuestras características:</p>
        <ul className="text-left text-lg mb-8 inline-block">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </ul>
        <div className="mt-8">
          <div className="mt-8 flex gap-4">
            <Button
              className="font-bold"
              size="lg"
              color="secondary"
              variant="shadow"
              startContent={<Icon icon="mdi:download" className="text-2xl " />}
              href="/download"
              as={Link}
            >
              Descarga la App
            </Button>
            <Button
              className="font-bold border-[#8b9ee1] text-[#8b9ee1] hover:bg-[#5865F2] hover:text-white"
              size="lg"
              startContent={<Icon icon="mdi:discord" className="text-2xl" />}
              as="a"
              href="https://discord.gg/fYNNmKJJfk"
              target="_blank"
              variant="bordered"
            >
              Únete a nuestro Discord
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  label,
  text,
  comingSoon = false,
  tooltip = "",
}) => (
  <li className="mb-2 flex items-center">
    {icon && (
      <Button
        isIconOnly
        color="primary"
        variant="faded"
        aria-label={label}
        className="rounded-full mr-2"
      >
        <Icon icon={icon} className="text-2xl" />
      </Button>
    )}
    {text}
    {comingSoon && (
      <span className="text-secondary-300 font-semibold ml-2">
        (próximamente)
      </span>
    )}
    {tooltip && (
      <Tooltip
        content={
          <div className="px-1 py-2 max-w-sm">
            <div className="text-small font-bold">{tooltip}</div>
          </div>
        }
      >
        <Button
          isIconOnly
          color="warning"
          variant="faded"
          aria-label="Más información"
          className="rounded-full ml-2"
        >
          <Icon icon="mdi:question-mark" />
        </Button>
      </Tooltip>
    )}
  </li>
);

const features: Feature[] = [
  {
    icon: "mdi:cash-off",
    label: "Gratis",
    text: "Todo completamente gratis",
  },
  {
    icon: "mdi:block-helper",
    label: "Sin publicidad",
    text: "Sin publicidad molesta",
  },
  {
    icon: "mdi:high-definition",
    label: "Calidad HD",
    text: "Calidad en 1080p",
  },
  {
    icon: "mdi:play-circle",
    label: "Seguir viendo automático",
    text: "Seguir viendo automático",
    comingSoon: true,
    tooltip:
      "Seguir viendo automático: Descarga y notifica nuevos episodios semanales. Continúa tu anime sin interrupciones, al estilo de Netflix.",
  },
  // {
  //   icon: "mdi:account-group",
  //   label: "Watch parties",
  //   text: "Watch parties con amigos",
  //   comingSoon: true,
  //   tooltip:
  //     "Imaginate ver anime junto a tus amigos pero cada quien en su PC, como si estuvieran en llamada por discord",
  // },
  {
    // icon: "mdi:lightbulb",
    label: "Sugerencias",
    text: "Te gustaría ver algo en especial?",
    // comingSoon: true,
    tooltip:
      "Podrás sugerir nuevas funcionalidades para la app con tu feedback.",
  },
];
