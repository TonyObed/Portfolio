export function ClientsSection() {
  return (
    <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        {/* Heading - Translated to French */}
        <h2 className="text-center text-xl md:text-2xl text-white mb-16">
          {"J'ai"} <span className="text-[#CDFF00]">10+ Clients Satisfaits</span> & de nombreux projets complétés
        </h2>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {/* Row 1 */}
          {/* TaNote */}
          <div className="flex flex-col items-center text-gray-500 opacity-60 hover:opacity-100 transition-opacity">
            <span className="font-bold text-2xl text-primary">Ta</span>
            <span className="font-bold text-2xl">Note</span>
          </div>

          {/* Urban Style */}
          <div className="flex flex-col items-center text-gray-500 opacity-60 hover:opacity-100 transition-opacity">
            <span className="font-bold text-2xl tracking-[0.1em]">URBAN</span>
            <span className="text-[10px] tracking-wider">STYLE</span>
          </div>

          {/* GD Immobilier */}
          <div className="flex flex-col items-center text-gray-500 opacity-60 hover:opacity-100 transition-opacity">
            <span className="font-bold text-2xl">GD</span>
            <span className="text-[10px] tracking-wider">IMMOBILIER</span>
          </div>

          {/* Client 4 */}
          <div className="flex flex-col items-center text-gray-500 opacity-60 hover:opacity-100 transition-opacity">
            <span className="font-serif italic text-2xl">Client</span>
            <span className="text-[10px] tracking-wider">ENTREPRISE</span>
          </div>

          {/* Client 5 */}
          <div className="flex flex-col items-center text-gray-500 opacity-60 hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center mb-1">
              <span className="text-xs">+</span>
            </div>
            <span className="text-sm tracking-wider">ET PLUS</span>
          </div>

          {/* Row 2 */}
          {/* Startup */}
          <div className="text-gray-500 opacity-60 hover:opacity-100 transition-opacity">
            <span className="font-serif italic text-3xl text-justify">{"KM Groupe\n"}  </span>
          </div>

          {/* A */}
          <div className="flex flex-col items-center text-gray-500 opacity-60 hover:opacity-100 transition-opacity">
            <span className="font-serif text-5xl">A</span>
            <div className="w-8 h-px bg-gray-500 mt-1"></div>
          </div>

          {/* Digital */}
          <div className="flex flex-col items-center text-gray-500 opacity-60 hover:opacity-100 transition-opacity">
            <span className="font-bold text-2xl">Digital</span>
            <span className="text-[10px] tracking-[0.3em]">AGENCY</span>
          </div>

          {/* E-Commerce */}
          <div className="flex flex-col items-center text-gray-500 opacity-60 hover:opacity-100 transition-opacity">
            <span className="font-serif italic text-3xl">Shop</span>
            <span className="text-[10px] tracking-wider">E-COMMERCE</span>
          </div>

          {/* Web */}
          <div className="flex items-baseline text-gray-500 opacity-60 hover:opacity-100 transition-opacity">
            <span className="font-bold text-3xl">Web</span>
            <span className="text-[10px] tracking-wider ml-1">DESIGN</span>
          </div>
        </div>
      </div>
    </section>
  )
}
