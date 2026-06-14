export default function VideoSection() {
  return (
    <section className="bg-blush py-16 md:py-24 px-5 md:px-8">
      <div className="mx-auto max-w-5xl">
        <video
          controls
          muted
          playsInline
          preload="metadata"
          className="w-full aspect-video rounded-2xl bg-mist object-cover"
        >
          <source src="/video-serum.mp4" type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeo.
        </video>
      </div>
    </section>
  );
}
