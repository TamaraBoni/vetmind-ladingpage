import heroImage from "@/assets/img_principal.png"

const HeroSection = () => {
  const offsetY = 0

  return (
    <section className="relative h-[700px] overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: `center ${offsetY}px`,
        }}
      />

      {/* conteúdo */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center text-center space-y-8 md:space-y-24">
        <h1 className="font-bold leading-[1.1] text-vetmind-navy">
          <span className="block text-[64px]">
            Melhore a prescrição de antibióticos
          </span>
          <span className="block text-[64px]">
            com a <span className="text-[83px] align-baseline text-vetmind-navy">VetMind</span>
          </span>
        </h1>

        <p className="text-lg font-semibold md:text-3xl max-w-5xl mx-auto leading-relaxed text-vetmind-navy/100">
          Ferramenta que apoia médicos veterinários na interpretação do exame de
          microbiologia e escolha do melhor tratamento
        </p>
      </div>
    </section>
  )
}

export default HeroSection
