export default function LocationSection() {
  return (
    <section id="endereco" className="bg-wine py-16 md:py-24 px-5 md:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden">
        {/* Coluna 1 — informações */}
        <div className="bg-clay text-white p-8 md:p-12 flex flex-col gap-8">
          <div>
            <h2 className="font-sans uppercase tracking-[0.2em] text-sm text-white/80 mb-3">
              Funcionamento
            </h2>
            <p className="font-sans text-lg">Segunda à Sexta / 09h às 17h</p>
            <p className="font-sans text-lg">Sábado / 09h às 13h</p>
          </div>

          <div>
            <p className="font-sans uppercase tracking-[0.2em] text-sm text-white/80 mb-2">
              Endereço
            </p>
            <p className="font-sans text-lg">
              Rua das Gaças - 0106, Avaré, São Paulo / 546544-98
            </p>
          </div>

          <div>
            <p className="font-sans uppercase tracking-[0.2em] text-sm text-white/80 mb-2">
              Fale conosco
            </p>
            <p className="font-sans text-lg">55 98891-0099 / contato@ecojar.com</p>
          </div>
        </div>

        {/* Coluna 2 — mapa */}
        <div className="min-h-[320px] lg:min-h-full">
          <iframe
            src="https://www.google.com/maps?q=Avar%C3%A9,+SP&output=embed"
            title="Mapa de Avaré, São Paulo"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
