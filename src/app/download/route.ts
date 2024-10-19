import { getLatestReleaseDownloadUrl } from "@/lib/getLatestRelease";
import { redirect } from "next/navigation";

export async function GET() {
  const latestReleaseUrl = await getLatestReleaseDownloadUrl();

  redirect(latestReleaseUrl);
}
