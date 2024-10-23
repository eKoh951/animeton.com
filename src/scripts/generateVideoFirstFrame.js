import ffmpeg from "fluent-ffmpeg";
import ffmpegStatic from "ffmpeg-static";
import path from "path";
import fs from "fs";

const { siteConfig } = require("../config/site.ts");

ffmpeg.setFfmpegPath(ffmpegStatic);

const videoUrl = siteConfig.links.video;
const outputPath = path.join(
  process.cwd(),
  "public",
  "images",
  "video-first-frame.jpg"
);

// Asegúrate de que el directorio de salida exista
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log("Generando el primer frame del video...");

ffmpeg(videoUrl)
  .inputOptions(["-ss 00:00:00"]) // Busca el primer frame
  .outputOptions(["-vframes 1"]) // Extrae solo un frame
  .output(outputPath)
  .on("end", () => {
    console.log(`Primer frame generado y guardado en: ${outputPath}`);
  })
  .on("error", (err) => {
    console.error("Error al generar el primer frame:", err);
  })
  .run();
