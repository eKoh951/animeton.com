import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Icon } from "@iconify/react";
import { Tooltip } from "@nextui-org/tooltip";

interface Feature {
  icon: string;
  label: string;
  text: string;
  comingSoon?: boolean;
  tooltip?: string;
}

interface FeatureItemProps extends Feature {}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  label,
  text,
  comingSoon = false,
  tooltip = "",
}) => (
  <li className="mb-2 flex items-center">
    <Button
      isIconOnly
      color="primary"
      variant="faded"
      aria-label={label}
      className="rounded-full mr-2"
    >
      <Icon icon={icon} className="text-2xl" />
    </Button>
    {text}
    {comingSoon && (
      <span className="text-yellow-500 font-semibold ml-2">(próximamente)</span>
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
    icon: "mdi:lightning-bolt",
    label: "Ver anime",
    text: "Solo da 1 click y a ver anime 😎🍿",
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
      "Seguir viendo automático: Descarga y notifica nuevos episodios semanales. Continúa tu anime sin interrupciones, al estilo Netflix.",
  },
  {
    icon: "mdi:account-group",
    label: "Watch parties",
    text: "Watch parties con amigos",
    comingSoon: true,
    tooltip:
      "Imaginate ver anime junto a tus amigos pero cada quien en su PC, como si estuvieran en llamada por discord",
  },
  {
    icon: "mdi:lightbulb",
    label: "Sugerencias",
    text: "Te gustaría ver algo en especial?",
    comingSoon: true,
    tooltip: "Podrás sugerir nuevas funcionalidades para la app",
  },
];

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl uppercase font-bold mb-6">Animeton</h1>
        <h2 className="text-4xl font-bold mb-6">
          La App de Windows para ver anime en Español
        </h2>
        <p className="text-xl mb-8">
          Animeton te trae la mejor experiencia para ver anime en Windows.
          Descarga nuestra app y sumérgete en un mundo de anime sin límites.
        </p>
        <ul className="text-left text-lg mb-8 inline-block">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </ul>
        <div className="mt-8">
          <Button
            size="lg"
            color="primary"
            variant="shadow"
            startContent={<Icon icon="mdi:download" />}
          >
            Descarga Ahora
          </Button>
        </div>
      </div>
    </div>
  );
}
