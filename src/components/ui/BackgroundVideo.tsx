"use client";

import React, { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

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
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoBlob, setVideoBlob] = useState<string | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(videoSrc);

        if (!response.ok) throw new Error("Network response was not ok");

        const blob = await response.blob();
        const videoUrl = URL.createObjectURL(blob);
        setVideoBlob(videoUrl);
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    if (isDesktop) {
      fetchVideo();
    }

    return () => {
      if (videoBlob) {
        URL.revokeObjectURL(videoBlob);
      }
    };
  }, [videoSrc, isDesktop]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoBlob) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      video.currentTime = 0;
    };

    video.addEventListener("loadeddata", handleLoadedData);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [videoBlob]);

  useEffect(() => {
    if (isVideoLoaded && videoRef.current) {
      const timeoutId = setTimeout(() => {
        videoRef.current
          ?.play()
          .catch((error) => console.error("Error playing video:", error));
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isVideoLoaded]);

  if (!isDesktop || !videoBlob) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[0]">
      <video
        ref={videoRef}
        className="absolute min-w-full min-h-full object-cover"
        loop
        muted
        playsInline
        style={{
          opacity: opacity,
          filter: filter,
        }}
      >
        <source src={videoBlob} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
    </div>
  );
};

export default BackgroundVideo;
