import { redirect } from "next/navigation";

export async function GET() {
  redirect(
    "https://github.com/Tiahui-Tech/webtorrent-animeton/releases/download/v0.0.6/Animeton-v0.0.6-SETUP.exe"
  );
}
