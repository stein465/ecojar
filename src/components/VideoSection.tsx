"use client";

import { useEffect, useRef } from "react";

export default function VideoSection() {
  const ref = useRef<HTMLVideoElement>(null);

  // Toca automaticamente quando a seção entra na viewport; pausa ao sair.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-blush">
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-[70vh] md:h-[85vh] object-cover"
      >
        <source src="/video-serum.mp4" type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeo.
      </video>
    </section>
  );
}
