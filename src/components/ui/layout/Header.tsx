import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <header className="py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="w-1/3">
          {/* Espacio vacío a la izquierda para mantener el balance */}
        </div>
        <div className="w-1/3 flex justify-center">
          <Link href="/" className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              ANIMETON
              <span className="text-sm sm:text-base md:text-lg font-normal text-white">
                .com
              </span>
            </h1>
          </Link>
        </div>
        <div className="w-1/3 flex justify-end">
          <Button
            className="font-bold"
            as={Link}
            href="/download"
            color="primary"
            variant="bordered"
            startContent={<Icon icon="mdi:download" />}
          >
            Descarga la App
          </Button>
        </div>
      </div>
    </header>
  );
}
