import Link from "next/link";
import { Button } from "@nextui-org/button";
import { FaChevronRight, FaDownload } from "react-icons/fa";

export default function Header() {
  return (
    <header className="py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold flex items-center">
        <FaChevronRight className="mr-2 text-3xl" />
        NyaUwU.com
      </Link>
      <Button
        as={Link}
        href="/download"
        color="primary"
        variant="shadow"
        className="bg-purple-600 hover:bg-purple-700"
        startContent={<FaDownload />}
      >
        Descarga la App
      </Button>
    </header>
  );
}
