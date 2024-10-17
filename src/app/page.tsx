import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Disfruta del anime en tu escritorio
        </h1>
        <p className="text-xl mb-8">
          Animeton te trae la mejor experiencia para ver anime en Windows.
          Descarga nuestra app y sumérgete en un mundo de anime sin límites.
        </p>
        <Button
          size="lg"
          color="primary"
          variant="shadow"
          className="mb-8"
          startContent={<Icon icon="mdi:download" />}
        >
          Descarga Ahora
        </Button>
        {/* <Image
          src="/app-screenshot.png"
          alt="Animeton App Screenshot"
          width={800}
          height={450}
          className="rounded-lg shadow-2xl"
        /> */}
      </div>
    </div>
  );
}
