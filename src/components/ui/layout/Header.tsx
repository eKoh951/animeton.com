import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <header className="py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold flex items-center">
        ANIMETON.com
      </Link>
      <Button
        as={Link}
        href="/download"
        color="primary"
        variant="shadow"
        className="bg-purple-600 hover:bg-purple-700"
        startContent={<Icon icon="mdi:download" />}
      >
        Descarga la App
      </Button>
    </header>
  );
}
