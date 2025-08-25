import heroImage from "@/assets/hero-veterinary.jpg"

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-hero flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Melhore a prescrição de antibióticos<br />
          <span className="text-vetmind-teal">com a VetMind</span>
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Ferramenta que apoia médicos veterinários na interpretação do exame de 
          microbiologia e escolha do melhor tratamento
        </p>
      </div>
    </section>
  )
}

export default HeroSection