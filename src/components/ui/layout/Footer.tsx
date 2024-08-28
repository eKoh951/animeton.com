import Link from "next/link";
import { FaCat, FaDiscord, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-xl font-bold flex items-center">
            <FaCat className="mr-2 text-2xl" />
            NyaUwU.com
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link
            href="https://discord.gg/nyauwu"
            className="text-2xl hover:text-purple-400"
          >
            <FaDiscord />
          </Link>
          <Link
            href="https://instagram.com/nyauwu"
            className="text-2xl hover:text-purple-400"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://tiktok.com/@nyauwu"
            className="text-2xl hover:text-purple-400"
          >
            <FaTiktok />
          </Link>
        </div>
      </div>
    </footer>
  );
}
