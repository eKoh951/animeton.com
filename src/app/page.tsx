import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Icon } from "@iconify/react";
import { Tooltip } from "@nextui-org/tooltip";
import {
  Roboto,
  Montserrat,
  Poppins,
  Playfair_Display,
  Oswald,
  Lato,
  Raleway,
  Merriweather,
  Ubuntu,
  Bebas_Neue,
  Roboto_Condensed,
  Open_Sans,
  Source_Sans_3,
  Nunito,
  Rubik,
  Inter,
  Roboto_Mono,
  Fira_Sans,
  Exo_2,
  Quicksand,
} from "next/font/google";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      {fonts.map((font, index) => (
        <div key={index} className="max-w-4xl mx-auto mb-8">
          <h2 className={`text-2xl mb-2 ${font.font.className}`}>
            Font: {font.name}
          </h2>
          <h1 className={`text-5xl font-bold mb-2 ${font.font.className}`}>
            ANIMETON
          </h1>
          <h2 className={`text-3xl mb-4 ${font.font.className}`}>
            La App de Windows para ver anime en Español
          </h2>
        </div>
      ))}
      <div className="max-w-4xl mx-auto">
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

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });
const rubik = Rubik({ subsets: ["latin"], weight: ["400", "700"] });
const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const exo2 = Exo_2({ subsets: ["latin"], weight: ["400", "700"] });
const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "700"] });
const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fonts = [
  { name: "Nunito", font: nunito },
  { name: "Quicksand", font: quicksand },
  { name: "Exo 2", font: exo2 },
  { name: "Ubuntu", font: ubuntu },
];
