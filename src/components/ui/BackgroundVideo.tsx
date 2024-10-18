import React from "react";

interface BackgroundVideoProps {
  videoSrc: string;
  opacity?: number; // Valor entre 0 y 1
  filter?: string; // Por ejemplo: "blur(5px)" o "brightness(50%)"
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoSrc,
  opacity = 0.5,
  filter = "brightness(50%)",
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[0]">
      <video
        className="absolute min-w-full min-h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{
          opacity: opacity,
          filter: filter,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
    </div>
  );
};

export default BackgroundVideo;
