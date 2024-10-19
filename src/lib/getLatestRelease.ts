import { siteConfig } from "@/config/site";

export async function getLatestReleaseDownloadUrl() {
  try {
    const response = await fetch(siteConfig.githubReleasesUrl);
    if (!response.ok) {
      throw new Error("Error al obtener la última versión");
    }
    const releases = await response.json();
    const latestRelease = releases[0];
    const windowsRelease = latestRelease.assets.find((asset: any) =>
      asset.browser_download_url.endsWith(".exe")
    );

    return windowsRelease?.browser_download_url;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
