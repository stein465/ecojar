export default function VideoSection() {
  return (
    <section className="bg-blush py-16 md:py-24 px-5 md:px-8">
      {/* TODO: substituir por <video> quando o asset real chegar. */}
      <div className="mx-auto max-w-5xl aspect-video rounded-2xl bg-mist flex items-center justify-center">
        <span className="flex items-center justify-center w-20 h-20 rounded-full bg-wine text-white">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 ml-1"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="sr-only">Reproduzir vídeo</span>
        </span>
      </div>
    </section>
  );
}
