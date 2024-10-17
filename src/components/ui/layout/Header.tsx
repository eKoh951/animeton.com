import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 px-6 bg-background/60 backdrop-blur-md border-b border-primary-700/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-1">
          {/* Espacio vacío a la izquierda para mantener el balance */}
        </div>
        <div className="flex-1 flex justify-center">
          <Link href="/" className="text-center">
            {/* text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 */}
            <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              ANIMETON
              <span className="text-sm sm:text-base md:text-lg font-normal text-primary-200">
                .com
              </span>
            </h1>
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <Button
            as={Link}
            href="/download"
            color="primary"
            variant="ghost"
            className="text-primary-300 hover:text-primary-200"
            startContent={<Icon icon="mdi:download" />}
          >
            Descarga la App
          </Button>
        </div>
      </div>
    </header>
  );
}
