import ffmpeg from "fluent-ffmpeg";
import ffmpegStatic from "ffmpeg-static";
import path from "path";
import fs from "fs";

ffmpeg.setFfmpegPath(ffmpegStatic);

const videoUrl =
  "https://link.storjshare.io/s/jun54hyn6siquty3ldekn4fvnbga/animeton-com/background-2.webm?wrap=0";
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
  .inputOptions(["-ss 00:00:00.000"]) // Busca el frame en mm:ss.milisegundo
  .outputOptions(["-vframes 1"]) // Extrae solo un frame
  .output(outputPath)
  .on("end", () => {
    console.log(`Primer frame generado y guardado en: ${outputPath}`);
  })
  .on("error", (err) => {
    console.error("Error al generar el primer frame:", err);
  })
  .run();
